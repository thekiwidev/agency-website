"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials, type Testimonial } from "./testimonialsData";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

/**
 * TestimonialsFull
 * Purpose: Full-screen testimonials carousel section with navigation controls.
 * Inputs: testimonials data array.
 * Output: full-screen testimonial showcase with Swiper.js integration.
 */
export default function TestimonialsFull({
  testimonials: testimonialsProp = testimonials,
}: { testimonials?: Testimonial[] } = {}) {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);

  const handlePrev = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiper) {
      swiper.slideNext();
    }
  };

  return (
    <section className="relative w-full h-[100dvh] bg-navy-900">
      {/* Sticky Navigation Controls */}
      <div className="absolute top-8 right-8 z-20 flex gap-4">
        <button
          onClick={handlePrev}
          className="p-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={handleNext}
          className="p-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
          aria-label="Next testimonial"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        loop={true}
        onSwiper={setSwiper}
        speed={800}
        className="w-full h-full"
        role="region"
        aria-label="Customer testimonials"
      >
        {testimonialsProp.map((testimonial) => (
          <SwiperSlide
            key={testimonial.id}
            className="flex items-center justify-center"
          >
            <TestimonialSlide testimonial={testimonial} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

/**
 * TestimonialSlide
 * Purpose: Individual testimonial slide with portrait and quote layout.
 * Inputs: testimonial data object.
 * Output: responsive grid layout with image and text.
 */
function TestimonialSlide({ testimonial }: { testimonial: Testimonial }) {
  // Map country codes to flag emojis
  const getCountryFlag = (testimonial: Testimonial) => {
    if (!testimonial.location) return "🌍";

    // Extract country code from location (e.g., "Lagos, NG" -> "NG")
    const locationParts = testimonial.location.split(", ");
    const countryCode = locationParts[locationParts.length - 1];

    const flagMap: Record<string, string> = {
      US: "🇺🇸",
      NG: "🇳🇬",
      ES: "🇪🇸",
      // Add more country codes as needed
    };

    return flagMap[countryCode] || "🌍";
  };

  const flag = getCountryFlag(testimonial);

  return (
    <div className="relative h-full flex items-center justify-center px-8 lg:px-16">
      {/* Large background quote icon */}
      <div className="absolute right-0 inset-0 flex items-center pointer-events-none">
        <Quote
          size={800}
          className="text-blue-500/10 fill-current"
          strokeWidth={1}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Portrait */}
        <div className="flex-shrink-0">
          <div className="w-64 h-64 lg:w-96 lg:h-96 rounded-3xl overflow-hidden border-4 border-white/20">
            <Image
              src={testimonial.photo.src}
              alt={`Portrait of ${testimonial.name}`}
              width={500}
              height={500}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>

        {/* Testimonial content */}
        <div className="flex-1 text-center lg:text-left">
          <blockquote className="text-xl lg:text-4xl font-bold text-white mb-6 lg:mb-8 leading-relaxed">
            &ldquo;{testimonial.quote}&rdquo;
          </blockquote>

          <footer className="space-y-1">
            <div className="text-lg lg:text-xl font-semibold text-white flex items-center justify-center lg:justify-start gap-2">
              <span>{testimonial.name}</span>
              <span>{flag}</span>
            </div>
            <div className="text-base lg:text-lg text-blue-200">
              {testimonial.title}
            </div>
            <div className="text-base lg:text-lg text-blue-300">
              {testimonial.org}
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
