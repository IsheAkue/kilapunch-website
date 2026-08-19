"use client"

import { motion } from "framer-motion"

const metrics = [
  {
    number: "5+",
    label: "ERP Platforms Supported",
  },
  {
    number: "Remote",
    label: "& Onsite Assistance",
  },
  {
    number: "Fast",
    label: "Technical Support Response",
  },
  {
    number: "Trusted",
    label: "Business Support Approach",
  },
]

// Same alternating blue/orange rhythm used in Services, Platforms and Process.
const accents = ["text-blue-400", "text-orange-400"]

export default function MetricsSection() {
  return (
    <section className="relative overflow-hidden bg-brand-navy py-20 lg:py-24">
      {/* Ambient glow — identical treatment to the Hero */}
      <div className="pointer-events-none absolute -left-24 top-0 h-[420px] w-[420px] rounded-full bg-blue-700/20 blur-[120px]" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-[380px] w-[380px] rounded-full bg-orange-600/15 blur-[120px]" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="min-w-0 rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06] sm:p-10"
          >
            <h3
              className={`text-4xl font-bold sm:text-5xl ${
                accents[index % accents.length]
              }`}
            >
              {metric.number}
            </h3>

            <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg">
              {metric.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}