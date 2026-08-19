"use client"

import { motion } from "framer-motion"

export default function SectionHeading({
  title,
  description,
  centered = false,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`max-w-2xl ${centered ? "mx-auto text-center" : ""}`}
    >
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
          {description}
        </p>
      )}
    </motion.div>
  )
}