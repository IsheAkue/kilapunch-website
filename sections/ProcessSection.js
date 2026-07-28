"use client"

import { motion } from "framer-motion"

const steps = [
  {
    number: "01",
    title: "Discovery & Consultation",
    description:
      "We assess your business processes, operational challenges, and reporting requirements.",
  },
  {
    number: "02",
    title: "Solution Selection",
    description:
      "We recommend the most suitable Sage or accounting solution for your business.",
  },
  {
    number: "03",
    title: "Implementation",
    description:
      "We deploy, configure, and integrate the solution into your business environment.",
  },
  {
    number: "04",
    title: "Training",
    description:
      "We train users and management teams to maximize system adoption and efficiency.",
  },
  {
    number: "05",
    title: "Ongoing Support",
    description:
      "We provide continuous support, consulting, and optimization services.",
  },
]

// Circles alternate blue/orange — same accent pairing used across
// ServicesSection and PlatformsSection, so the whole page reads as one system.
const circleAccents = [
  "bg-gradient-to-br from-blue-600 to-blue-700 shadow-blue-900/20",
  "bg-gradient-to-br from-orange-500 to-orange-600 shadow-orange-900/20",
]

export default function ProcessSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-slate-50 py-24 lg:py-32">
      {/* Ambient glow — same blue/orange pairing used in Services/Platforms */}
      <div className="pointer-events-none absolute -left-24 top-1/3 h-[380px] w-[380px] rounded-full bg-blue-100/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-[340px] w-[340px] rounded-full bg-orange-100/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
            How We Work
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 lg:text-4xl">
            From Consultation To Long-Term Support
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Kilapunch provides complete ERP solutions from software selection
            and implementation to training, support, and ongoing business
            consulting.
          </p>
        </div>

        <div className="relative mt-16 sm:mt-20">
          {/* Connecting line — draws in left-to-right as it scrolls into view */}
          <div className="absolute left-0 right-0 top-10 hidden h-0.5 overflow-hidden bg-slate-200 xl:block">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
              style={{ transformOrigin: "left" }}
              className="h-full w-full bg-gradient-to-r from-blue-500 via-slate-300 to-orange-500"
            />
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-5">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex h-full min-w-0 flex-col items-center"
              >
                {/* Number Circle */}
                <div
                  className={`relative z-10 flex h-20 w-20 shrink-0 items-center justify-center rounded-full text-3xl font-bold text-white shadow-lg ${
                    circleAccents[index % circleAccents.length]
                  }`}
                >
                  {step.number}
                </div>

                {/* Card — height now driven by content, not a fixed pixel value */}
                <div className="mt-8 flex w-full flex-1 flex-col rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl sm:p-8">
                  <h3 className="text-xl font-semibold text-slate-900">
                    {step.title}
                  </h3>

                  <p className="mt-4 flex-1 text-sm leading-7 text-slate-600">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}