"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import SectionHeading from "@/components/SectionHeading"

import {
  ShieldCheck,
  Database,
  Workflow,
  MonitorSmartphone,
  Calculator,
  Network,
} from "lucide-react"

const services = [
  {
    title: "Sage Evolution Support",
    description:
      "Reliable ERP troubleshooting, maintenance, and operational support for growing businesses.",
    icon: ShieldCheck,
  },
  {
    title: "ERP Implementation",
    description:
      "Structured ERP deployment and business systems integration tailored to operational workflows.",
    icon: Database,
  },
  {
    title: "Business Automation",
    description:
      "Streamline repetitive operational processes through modern automation systems and tools.",
    icon: Workflow,
  },
  {
    title: "Remote IT Support",
    description:
      "Fast remote technical assistance to minimize downtime and keep operations running smoothly.",
    icon: MonitorSmartphone,
  },
  {
    title: "Accounting Systems",
    description:
      "Professional accounting software setup, optimization, and support for business continuity.",
    icon: Calculator,
  },
  {
    title: "Infrastructure Support",
    description:
      "Business-focused network, workstation, and systems support for operational reliability.",
    icon: Network,
  },
]

// Icon chips alternate blue/orange across the grid — same two brand colors
// as the Hero's dual ambient glow, just in a light, professional register
// instead of the Hero's dark glass treatment.
const accents = [
  {
    chip: "bg-blue-50 text-blue-700",
    border: "group-hover:border-blue-200",
  },
  {
    chip: "bg-orange-50 text-orange-600",
    border: "group-hover:border-orange-200",
  },
]

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50/50 to-white py-24 lg:py-32"
    >
      {/* Ambient background glow — same blue/orange pairing as the Hero, in a light register */}
      <div className="absolute -left-24 top-0 h-[420px] w-[420px] rounded-full bg-blue-100/40 blur-3xl" />
      <div className="absolute -right-24 bottom-0 h-[380px] w-[380px] rounded-full bg-orange-100/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label="Our Services"
          title="Specialist ERP & Accounting Solutions"
          description="We provide implementation, support, and consulting services that help businesses improve operational control, streamline financial processes, and maintain reliable ERP environments."
        />

        <div className="mt-14 grid gap-6 sm:mt-16 sm:gap-7 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const accent = accents[index % accents.length]

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl sm:p-8 ${accent.border}`}
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl transition-colors ${accent.chip}`}
                >
                  <service.icon className="h-6 w-6" />
                </div>

                <h3 className="mt-8 text-xl font-semibold text-slate-900 sm:text-2xl">
                  {service.title}
                </h3>

                <p className="mt-4 flex-grow leading-7 text-slate-600 sm:mt-5">
                  {service.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        <div className="mt-14 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-orange-500 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-blue-900/20 transition hover:-translate-y-0.5 hover:shadow-blue-900/30"
          >
            Explore All Services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}