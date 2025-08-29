"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import { ProcessStep } from "./processData";

interface ProcessMediaProps {
  steps: ProcessStep[];
  activeIndex: number;
  onHoverPause: (shouldPause: boolean) => void;
  isMobileOverlay?: boolean;
}

export function ProcessMedia({
  steps,
  activeIndex,
  onHoverPause,
  isMobileOverlay = false,
}: ProcessMediaProps) {
  const swiperRef = useRef<SwiperType | null>(null);

  // Sync swiper with activeIndex
  useEffect(() => {
    if (swiperRef.current && swiperRef.current.activeIndex !== activeIndex) {
      swiperRef.current.slideTo(activeIndex);
    }
  }, [activeIndex]);

  return (
    <div
      className={`relative h-full ${
        isMobileOverlay ? "pointer-events-none" : ""
      }`}
      onMouseEnter={() => !isMobileOverlay && onHoverPause(true)}
      onMouseLeave={() => !isMobileOverlay && onHoverPause(false)}
      role="tabpanel"
      aria-labelledby={`process-tab-${steps[activeIndex]?.key}`}
      id={`process-panel-${steps[activeIndex]?.key}`}
    >
      <div className="relative w-full max-w-xl mx-auto">
        <Swiper
          effect="cards"
          grabCursor={false}
          modules={[EffectCards]}
          className="process-swiper"
          direction="vertical"
          cardsEffect={{
            perSlideOffset: isMobileOverlay ? 6 : 10,
            perSlideRotate: isMobileOverlay ? 1 : 2,
            rotate: true,
            slideShadows: !isMobileOverlay,
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          allowTouchMove={false}
          simulateTouch={false}
          style={{
            height: isMobileOverlay ? "300px" : "650px", // Smaller height for mobile stacked layout
            width: "100%",
          }}
        >
          {steps.map((step, index) => (
            <SwiperSlide key={step.key}>
              <div
                className={`relative w-full h-full rounded-2xl overflow-hidden ${
                  isMobileOverlay
                    ? "shadow-lg shadow-black/30"
                    : "shadow-xl shadow-black/40"
                }`}
              >
                <Image
                  src={step.image.src}
                  alt={step.image.alt}
                  width={step.image.width}
                  height={step.image.height}
                  className="w-full h-full object-cover"
                  priority={index === 0}
                  sizes="(max-width: 768px) 95vw, (max-width: 1200px) 50vw, 500px"
                />

                {/* Overlay for better text readability - lighter on mobile overlay */}
                <div
                  className={`absolute inset-0 ${
                    isMobileOverlay
                      ? "bg-gradient-to-t from-black/10 via-black/5 to-transparent"
                      : "bg-gradient-to-t from-black/20 via-transparent to-transparent"
                  }`}
                />

                {/* Step indicator with icon and title - hide on mobile overlay */}
                {!isMobileOverlay && (
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-2">
                    <div className="text-white/90">{step.icon}</div>
                    <span className="text-white text-sm font-medium">
                      {step.title}
                    </span>
                  </div>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
