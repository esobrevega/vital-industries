"use client";

import { motion } from "framer-motion";
import Image, { ImageProps } from "next/image";

export function ImageReveal({
  delay = 0.2,
  className,
  wrapperClassName,
  ...props
}: ImageProps & { delay?: number; wrapperClassName?: string }) {
  return (
    <motion.div
      initial={{ clipPath: "inset(0 0 100% 0)" }}
      whileInView={{ clipPath: "inset(0 0 0% 0)" }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
      className={wrapperClassName ?? "relative overflow-hidden"}
    >
      <motion.div
        initial={{ scale: 1.08 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.2, delay, ease: [0.16, 1, 0.3, 1] }}
        className="h-full w-full"
      >
        {/* eslint-disable-next-line jsx-a11y/alt-text */}
        <Image {...props} className={className} />
      </motion.div>
    </motion.div>
  );
}
