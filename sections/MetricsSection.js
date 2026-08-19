"use client"

import { motion } from "framer-motion"
import { revealUp } from "@/lib/motion"

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

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          variants={revealUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 divide-y divide-white/10 rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4"
        >
          {metrics.map((metric, index) => (
            <div key={metric.label} className="min-w-0 p-8 sm:p-10">
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
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}