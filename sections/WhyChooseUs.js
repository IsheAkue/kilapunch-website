"use client"

import { motion } from "framer-motion"
import { CheckCircle2, Calendar, Award, Settings2, Globe2 } from "lucide-react"

const benefits = [
  "Certified ERP Implementation & Consulting",
  "Sage ERP, Payroll & Accounting Specialists",
  "Remote & Onsite Client Support",
  "Business-Focused Technology Solutions",
  "User Training & Change Management",
]

const stats = [
  {
    label: "Established",
    value: "2006",
    icon: Calendar,
    accent: "bg-blue-50 text-blue-700",
  },
  {
    label: "Specialists In",
    value: "Sage ERP",
    icon: Award,
    accent: "bg-orange-50 text-orange-600",
  },
  {
    label: "Services",
    value: "Implementation & Support",
    icon: Settings2,
    accent: "bg-blue-50 text-blue-700",
  },
  {
    label: "Coverage",
    value: "Remote & Onsite",
    icon: Globe2,
    accent: "bg-orange-50 text-orange-600",
  },
]

// Same alternating blue/orange rhythm used across the site.
const bulletAccents = ["text-blue-600", "text-orange-500"]

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-24 lg:py-36">
      {/* Ambient glow — same pairing used in Services/Platforms/Process */}
      <div className="pointer-events-none absolute -left-24 top-1/4 h-[380px] w-[380px] rounded-full bg-blue-100/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-1/4 h-[340px] w-[340px] rounded-full bg-orange-100/40 blur-3xl" />

      <div className="relative mx-auto grid grid-cols-1 gap-12 px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        {/* Left Visual */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="min-w-0 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-10"
        >
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl bg-slate-50 p-6 transition duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-xl ${stat.accent}`}
                >
                  <stat.icon className="h-5 w-5" />
                </div>

                <p className="mt-4 text-sm text-slate-500">{stat.label}</p>

                <h4 className="mt-2 text-2xl font-bold text-slate-900">
                  {stat.value}
                </h4>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex min-w-0 flex-col justify-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Built Around Reliability, Support & Operational Continuity
          </h2>

          <div className="mt-10 space-y-5">
            {benefits.map((item, index) => (
              <div key={item} className="flex items-start gap-4">
                <CheckCircle2
                  className={`mt-0.5 h-5 w-5 flex-shrink-0 ${
                    bulletAccents[index % bulletAccents.length]
                  }`}
                />
                <p className="text-base leading-7 text-slate-700 sm:text-lg">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}