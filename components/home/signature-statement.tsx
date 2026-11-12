
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { PageContainer } from "@/components/site/page-container";

const words = "Tax is only part of the equation.".split(" ");

const slides = [
  {
    number: "01",
    heading: "A broader view. A clearer direction.",
    description:
      "Meaningful financial decisions deserve more than isolated answers.",
  },
  {
    number: "02",
    heading: "Strategy beyond compliance.",
    description:
      "We look beyond requirements to help you make informed decisions with long-term value in mind.",
  },
  {
    number: "03",
    heading: "Confidence through clarity.",
    description:
      "We make complex financial matters easier to understand, so you can move forward with greater confidence.",
  },
];

export function SignatureStatement() {
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  return (
    <section className="relative isolate overflow-hidden bg-[#123C32] py-24 text-white lg:py-36">

      {/* Background typography */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 top-10 select-none font-editorial text-[18vw] leading-none text-white/[0.025]"
      >
        PERSPECTIVE
      </div>

      <PageContainer>
        <div className="relative">

          {/* Section label */}
          <div className="mb-16 flex items-center gap-4">
            <span className="h-px w-8 bg-accent" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-white/50">
              Our Perspective
            </span>
          </div>

          <div className="grid gap-16 lg:grid-cols-[1.4fr_0.6fr] lg:items-end">

            {/* Main statement */}
            <div className="max-w-[850px]">
              <motion.h2
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.5 }}
                variants={{
                  hidden: {},
                  show: {
                    transition: { staggerChildren: 0.06 },
                  },
                }}
                className="font-editorial text-[clamp(2.5rem,5vw,5rem)] leading-[1.08]"
              >
                {words.map((word, i) => (
                  <motion.span
                    key={`${word}-${i}`}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      show: {
                        opacity: 1,
                        y: 0,
                        transition: {
                          duration: 0.6,
                          ease: [0.16, 1, 0.3, 1],
                        },
                      },
                    }}
                    className="mr-[0.28em] inline-block"
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.h2>

              <div className="mt-10 h-px w-16 bg-accent" />

              <p className="mt-10 max-w-[520px] text-lg leading-relaxed text-white/75">
                Your financial decisions are connected.
                <br />
                Your strategy should be, too.
              </p>

              <p className="mt-8 max-w-[560px] text-base leading-relaxed text-white/50">
                We look beyond the immediate filing to understand the broader
                financial picture, helping clients approach important decisions
                with context rather than guesswork.
              </p>
            </div>

            {/* Supporting statement carousel */}
            <div
              className="border-l border-white/20 pl-8 lg:mb-2"
              aria-label="Our philosophy"
              aria-roledescription="carousel"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSlide}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{
                    duration: 0.4,
                    ease: "easeOut",
                  }}
                  aria-live="polite"
                >
                  <span className="font-editorial text-5xl text-accent">
                    {slides[activeSlide].number}
                  </span>

                  <p className="mt-6 font-editorial text-2xl leading-snug text-white/90">
                    {slides[activeSlide].heading}
                  </p>

                  <p className="mt-5 min-h-[100px] text-sm leading-relaxed text-white/45">
                    {slides[activeSlide].description}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Carousel controls */}
              <div className="mt-10 flex items-center justify-between">

                {/* Progress indicators */}
                <div className="flex items-center gap-3">
                  {slides.map((slide, index) => (
                    <button
                      key={slide.number}
                      type="button"
                      onClick={() => setActiveSlide(index)}
                      aria-label={`Go to statement ${slide.number}`}
                      aria-current={
                        activeSlide === index ? "true" : undefined
                      }
                      className={cn(
                        "h-[2px] transition-all duration-300",
                        activeSlide === index
                          ? "w-9 bg-accent"
                          : "w-4 bg-white/20 hover:bg-white/50"
                      )}
                    />
                  ))}
                </div>

                {/* Navigation */}
                <div className="flex items-center gap-4">
                  <span className="text-[11px] tracking-widest text-white/40">
                    {slides[activeSlide].number} / 03
                  </span>

                  <button
                    type="button"
                    onClick={prevSlide}
                    aria-label="Previous statement"
                    className="text-white/50 transition-colors hover:text-accent"
                  >
                    ←
                  </button>

                  <button
                    type="button"
                    onClick={nextSlide}
                    aria-label="Next statement"
                    className="text-white/50 transition-colors hover:text-accent"
                  >
                    →
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom editorial line */}
          <div className="mt-24 border-t border-white/15 pt-6">
            <div className="flex items-center justify-between">
              <span className="text-[10px] uppercase tracking-[0.25em] text-white/40">
                Vital Industries
              </span>

              <span className="text-[10px] uppercase tracking-[0.25em] text-white/40">
                Beyond the Numbers
              </span>
            </div>
          </div>

        </div>
      </PageContainer>
    </section>
  );
}
