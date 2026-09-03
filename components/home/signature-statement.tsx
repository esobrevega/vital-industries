"use client";

import { motion } from "framer-motion";
import { PageContainer } from "@/components/site/page-container";

const words = "Tax is only part of the equation.".split(" ");

export function SignatureStatement() {
  return (
    <section className="bg-[#123C32] py-24 text-white lg:py-36">
      <PageContainer>
        <div className="max-w-[900px]">
          <motion.h2
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.06 } },
            }}
            className="font-editorial text-[clamp(2.25rem,5vw,4.5rem)] leading-[1.1]"
          >
            {words.map((word, i) => (
              <motion.span
                key={`${word}-${i}`}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
                  },
                }}
                className="mr-[0.28em] inline-block"
              >
                {word}
              </motion.span>
            ))}
          </motion.h2>

          <div className="mt-10 h-px w-16 bg-accent" />

          <p className="mt-10 max-w-[520px] text-lg leading-relaxed text-white/70">
            Your financial decisions are connected.
            <br />
            Your strategy should be, too.
          </p>

          <p className="mt-8 max-w-[560px] text-base leading-relaxed text-white/55">
            We look beyond the immediate filing to understand the broader
            financial picture, helping clients approach important decisions
            with context rather than guesswork.
          </p>
        </div>
      </PageContainer>
    </section>
  );
}
