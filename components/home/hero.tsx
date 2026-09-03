"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#F7F4EC] pt-[7.5rem] lg:pt-[8.5rem]">
      {/* =====================================================
          HEADLINE AREA
      ====================================================== */}
      <div className="mx-auto w-full max-w-[1600px] px-6 lg:px-10 xl:px-12">
        <div className="relative min-h-[310px] lg:min-h-[360px]">
          {/* =================================================
              HEADLINE
          ================================================== */}
          <div className="max-w-[850px]">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mb-5 text-[0.65rem] font-medium uppercase tracking-[0.2em] text-primary/50 lg:hidden"
            >
              Tax • Strategy • Advisory
            </motion.p>

            <h1 className="font-sans text-[clamp(3rem,6.5vw,6.8rem)] font-medium leading-[0.94] tracking-[-0.055em] text-[#0D1B1E]">
              {/* Line 1 */}
              <span className="block overflow-hidden pb-[0.08em]">
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{
                    duration: 0.8,
                    delay: 0.15,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="block"
                >
                  Tax strategy
                </motion.span>
              </span>

              {/* Line 2 */}
              <span className="block overflow-hidden pb-[0.08em]">
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{
                    duration: 0.8,
                    delay: 0.27,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="block text-[#92989A]"
                >
                  built for
                </motion.span>
              </span>

              {/* Line 3 */}
              <span className="block overflow-hidden pb-[0.08em]">
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{
                    duration: 0.8,
                    delay: 0.39,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="block"
                >
                  what&apos;s next.
                </motion.span>
              </span>
            </h1>
          </div>

          {/* =================================================
              RIGHT FEATURE / CTA PANEL
          ================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="absolute right-0 top-0 hidden w-[300px] lg:block xl:w-[320px]"
          >
            {/* =================================================
                APPROACH PANEL
            ================================================== */}
            <div className="min-h-[190px] bg-[#F0F4EA] p-7 xl:min-h-[200px] xl:p-8">
              {/* Label */}
              <p className="text-[0.6rem] font-medium uppercase tracking-[0.2em] text-[#0D1B1E]/50">
                Our Approach
              </p>

              {/* Main Message */}
              <p className="mt-6 max-w-[240px] text-[1.4rem] font-medium leading-[1.05] tracking-[-0.04em] text-[#0D1B1E] xl:text-[1.5rem]">
                Plan today.
                <br />
                Protect tomorrow.
                <br />
                Build beyond it.
              </p>

              {/* Indicators */}
              <div className="mt-8 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#0D1B1E]" />

                <span className="h-1.5 w-1.5 rounded-full bg-[#0D1B1E]" />

                <span className="h-1.5 w-1.5 rounded-full border border-[#0D1B1E]/20" />
              </div>
            </div>

            {/* =================================================
                CTA PANEL
            ================================================== */}
            <Link
              href="/contact"
              className="group flex min-h-[78px] items-center justify-between bg-[#0D2B24] px-7 text-white transition-colors duration-300 hover:bg-[#12382F] xl:px-8"
            >
              <span className="max-w-[130px] text-[0.68rem] font-medium uppercase leading-[1.35] tracking-[0.15em]">
                Talk to an
                <br />
                advisor
              </span>

              <ArrowUpRight
                className="h-8 w-8 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                strokeWidth={1.5}
              />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* =====================================================
          HERO IMAGE
      ====================================================== */}
      <motion.div
        initial={{ clipPath: "inset(100% 0 0 0)" }}
        animate={{ clipPath: "inset(0% 0 0 0)" }}
        transition={{
          duration: 1.1,
          delay: 0.35,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="relative h-[48svh] min-h-[360px] w-full overflow-hidden lg:h-[52svh] lg:min-h-[430px]"
      >
        <motion.div
          initial={{ scale: 1.06 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 1.5,
            delay: 0.35,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="relative h-full w-full"
        >
          <Image
            src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=85&w=2000&auto=format&fit=crop"
            alt="Professionals discussing business and financial strategy"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </motion.div>

        {/* Image Overlay */}
        <div className="absolute inset-0 bg-black/[0.04]" />

        {/* Image Label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 1,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="absolute bottom-6 left-6 lg:bottom-8 lg:left-10"
        >
          <p className="text-[0.62rem] font-medium uppercase tracking-[0.2em] text-white/80">
            Vital Industries
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}