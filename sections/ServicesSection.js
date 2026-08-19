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
    slug: "sage-evolution-support",
    description:
      "Reliable ERP troubleshooting, maintenance, and operational support for growing businesses.",
    icon: ShieldCheck,
  },
  {
    title: "ERP Implementation",
    slug: "erp-implementation",
    description:
      "Structured ERP deployment and business systems integration tailored to operational workflows.",
    icon: Database,
  },
  {
    title: "Business Automation",
    slug: "business-automation",
    description:
      "Streamline repetitive operational processes through modern automation systems and tools.",
    icon: Workflow,
  },
  {
    title: "Remote IT Support",
    slug: "remote-it-support",
    description:
      "Fast remote technical assistance to minimize downtime and keep operations running smoothly.",
    icon: MonitorSmartphone,
  },
  {
    title: "Accounting Systems",
    slug: "accounting-systems",
    description:
      "Professional accounting software setup, optimization, and support for business continuity.",
    icon: Calculator,
  },
  {
    title: "Infrastructure Support",
    slug: "infrastructure-support",
    description:
      "Business-focused network, workstation, and systems support for operational reliability.",
    icon: Network,
  },
]

// Icon chips alternate blue/orange down the list — same two brand colors
// as the Hero's dual ambient glow, just in a light, professional register
// instead of the Hero's dark glass treatment.
const accents = [
  { chip: "bg-blue-50 text-blue-700" },
  { chip: "bg-orange-50 text-orange-600" },
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
          title="Specialist ERP & Accounting Solutions"
          description="We provide implementation, support, and consulting services that help businesses improve operational control, streamline financial processes, and maintain reliable ERP environments."
        />

        <div className="mt-14 divide-y divide-slate-200 border-y border-slate-200 sm:mt-16">
          {services.map((service, index) => {
            const accent = accents[index % accents.length]

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <Link
                  href={`/services/${service.slug}`}
                  className="group grid grid-cols-1 items-start gap-4 py-8 transition hover:bg-slate-50 sm:grid-cols-[auto_1fr_auto] sm:items-center sm:gap-8 sm:py-10"
                >
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-colors ${accent.chip}`}
                  >
                    <service.icon className="h-6 w-6" />
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-xl font-semibold text-slate-900 sm:text-2xl">
                      {service.title}
                    </h3>
                    <p className="mt-2 leading-7 text-slate-600">
                      {service.description}
                    </p>
                  </div>

                  <ArrowRight className="hidden h-5 w-5 shrink-0 text-slate-300 transition group-hover:translate-x-1 group-hover:text-slate-900 sm:block" />
                </Link>
              </motion.div>
            )
          })}
        </div>

        <div className="mt-14 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-full bg-brand-gradient px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-blue-900/20 transition hover:-translate-y-0.5 hover:shadow-blue-900/30"
          >
            Explore All Services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}