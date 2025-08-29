"use client";

import { useCallback, useEffect, useRef, useState } from "react";

interface UseProcessCarouselProps {
  totalSteps: number;
  startIndex?: number;
  intervalMs?: number;
}

interface UseProcessCarouselReturn {
  activeIndex: number;
  isPaused: boolean;
  isInView: boolean;
  setActiveIndex: (index: number) => void;
  togglePause: () => void;
  pause: () => void;
  resume: () => void;
  bindInViewRef: (element: HTMLElement | null) => void;
  onItemClick: (index: number) => void;
  onHoverPause: (shouldPause: boolean) => void;
}

export function useProcessCarousel({
  totalSteps,
  startIndex = 0,
  intervalMs = 5000,
}: UseProcessCarouselProps): UseProcessCarouselReturn {
  const [activeIndex, setActiveIndex] = useState(startIndex);
  const [isPaused, setIsPaused] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [wasRunningBeforeHover, setWasRunningBeforeHover] = useState(false);

  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Clear existing timer
  const clearTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  // Start autoplay timer
  const startAutoplay = useCallback(() => {
    if (!isPaused && isInView) {
      clearTimer();
      timerRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % totalSteps);
      }, intervalMs);
    }
  }, [isPaused, isInView, totalSteps, intervalMs, clearTimer]);

  // Stop autoplay timer
  const stopAutoplay = useCallback(() => {
    clearTimer();
  }, [clearTimer]);

  // Pause autoplay
  const pause = useCallback(() => {
    setIsPaused(true);
    stopAutoplay();
  }, [stopAutoplay]);

  // Resume autoplay
  const resume = useCallback(() => {
    setIsPaused(false);
  }, []);

  // Toggle pause state
  const togglePause = useCallback(() => {
    if (isPaused) {
      resume();
    } else {
      pause();
    }
  }, [isPaused, pause, resume]);

  // Handle item click - just set index and continue autoplay
  const onItemClick = useCallback((index: number) => {
    // Always set to the clicked index and continue autoplay
    setActiveIndex(index);
  }, []);

  // Handle hover pause/resume
  const onHoverPause = useCallback(
    (shouldPause: boolean) => {
      if (shouldPause) {
        // Starting hover - remember if we were running and pause
        setWasRunningBeforeHover(!isPaused);
        pause();
      } else {
        // Ending hover - resume only if we were running before
        if (wasRunningBeforeHover) {
          resume();
        }
      }
    },
    [isPaused, wasRunningBeforeHover, pause, resume]
  );

  // Intersection Observer setup
  const bindInViewRef = useCallback((element: HTMLElement | null) => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    if (element) {
      observerRef.current = new IntersectionObserver(
        ([entry]) => {
          const inView =
            entry.isIntersecting && entry.intersectionRatio >= 0.35;
          setIsInView(inView);
        },
        { threshold: [0.35, 0.5] }
      );
      observerRef.current.observe(element);
    }
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isInView) return;

      switch (event.key) {
        case "ArrowUp":
          event.preventDefault();
          setActiveIndex((prev) => (prev === 0 ? totalSteps - 1 : prev - 1));
          pause();
          break;
        case "ArrowDown":
          event.preventDefault();
          setActiveIndex((prev) => (prev + 1) % totalSteps);
          pause();
          break;
        case "Enter":
        case " ":
          event.preventDefault();
          togglePause();
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isInView, totalSteps, pause, togglePause]);

  // Start/stop autoplay based on state
  useEffect(() => {
    if (isInView && !isPaused) {
      startAutoplay();
    } else {
      stopAutoplay();
    }

    return () => stopAutoplay();
  }, [isInView, isPaused, startAutoplay, stopAutoplay]);

  // Check for reduced motion preference
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) {
      setIsPaused(true);
    }
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      clearTimer();
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [clearTimer]);

  return {
    activeIndex,
    isPaused,
    isInView,
    setActiveIndex,
    togglePause,
    pause,
    resume,
    bindInViewRef,
    onItemClick,
    onHoverPause,
  };
}
