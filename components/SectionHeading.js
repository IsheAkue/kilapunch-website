"use client"

import { motion } from "framer-motion"

export default function SectionHeading({
  label,
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
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
        {label}
      </p>

      <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
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