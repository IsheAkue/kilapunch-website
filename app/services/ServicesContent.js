"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import {
  ArrowRight,
  MessageCircle,
  CheckCircle2,
  ShieldCheck,
  Database,
  Workflow,
  MonitorSmartphone,
  Calculator,
  Network,
  Settings2,
  Calendar,
  Award,
  LifeBuoy,
  GraduationCap,
} from "lucide-react"
import { services } from "@/data/services"

// Maps each known service title to an icon. Falls back to a generic icon
// for any future service added to the data file that isn't listed here,
// so the page never breaks if the data grows.
const iconMap = {
  "Sage Evolution Support": ShieldCheck,
  "ERP Implementation": Database,
  "Business Automation": Workflow,
  "Remote IT Support": MonitorSmartphone,
  "Accounting Systems": Calculator,
  "Infrastructure Support": Network,
}

const whyKilapunch = [
  {
    title: "Established 2006",
    description:
      "Two decades of experience supporting Zimbabwean businesses.",
    icon: Calendar,
  },
  {
    title: "Certified Consultants",
    description:
      "Our team holds recognized ERP and accounting certifications.",
    icon: Award,
  },
  {
    title: "Remote & Onsite Support",
    description:
      "Get help however works best for your team, wherever you are.",
    icon: LifeBuoy,
  },
  {
    title: "Implementation & Training",
    description:
      "We don't just deploy systems — we make sure your team can use them.",
    icon: GraduationCap,
  },
]

// Same alternating blue/orange rhythm used across the rest of the site.
const accents = [
  { chip: "bg-blue-50 text-blue-700", border: "group-hover:border-blue-200" },
  { chip: "bg-orange-50 text-orange-600", border: "group-hover:border-orange-200" },
]

export default function ServicesContent() {
  // First challenge from each service — a real, representative sample of
  // the problems your services solve, not invented copy.
  const commonChallenges = services.map((service) => service.challenges[0])

  return (
    <main className="min-h-screen bg-white">
      {/* ============================= HERO ============================= */}
      <section className="relative overflow-hidden bg-[#0B0F17] py-20 sm:py-28">
        <div className="pointer-events-none absolute -left-24 top-0 h-[420px] w-[420px] rounded-full bg-blue-700/25 blur-[120px]" />
        <div className="pointer-events-none absolute -right-24 bottom-0 h-[380px] w-[380px] rounded-full bg-orange-600/20 blur-[120px]" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto max-w-4xl px-6 text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-400">
            Our Services
          </p>

          <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
            We Solve The ERP & Accounting Problems Slowing Your Business Down
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            Kilapunch provides Sage software, ERP implementation, accounting
            systems consulting, training, support, automation solutions, and
            business technology services designed to help organizations
            operate efficiently.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {["Established 2006", "Certified Consultants", "Remote & Onsite Support"].map(
              (chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-slate-300 backdrop-blur-sm"
                >
                  {chip}
                </span>
              )
            )}
          </div>
        </motion.div>
      </section>

      {/* ===================== "SOUND FAMILIAR?" — PROBLEM FIRST ===================== */}
      <section className="relative overflow-hidden py-16 sm:py-20">
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500"
          >
            Do Any Of These Sound Familiar?
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mt-4 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
          >
            These Are The Exact Problems Our Services Below Are Built To Solve
          </motion.h2>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {commonChallenges.map((challenge, index) => (
              <motion.span
                key={challenge}
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 18,
                  delay: index * 0.06,
                }}
                className={`rounded-full px-4 py-2 text-sm font-medium ${
                  accents[index % accents.length].chip
                }`}
              >
                {challenge}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* ============================= SERVICES GRID ============================= */}
      <section className="relative overflow-hidden bg-slate-50 py-20 lg:py-28">
        <div className="pointer-events-none absolute -right-24 top-0 h-[380px] w-[380px] rounded-full bg-orange-100/40 blur-3xl" />
        <div className="pointer-events-none absolute -left-24 bottom-0 h-[340px] w-[340px] rounded-full bg-blue-100/30 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => {
              const Icon = iconMap[service.title] || Settings2
              const accent = accents[index % accents.length]
              const topOutcomes = service.outcomes?.slice(0, 2) ?? []

              return (
                <motion.div
                  key={service.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className={`group flex min-w-0 flex-col rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl ${accent.border}`}
                >
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${accent.chip}`}>
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mt-6 text-2xl font-semibold text-slate-900">
                    {service.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {service.summary}
                  </p>

                  {topOutcomes.length > 0 && (
                    <ul className="mt-6 space-y-2">
                      {topOutcomes.map((outcome) => (
                        <li
                          key={outcome}
                          className="flex items-start gap-2 text-sm text-slate-600"
                        >
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  )}

                  <Link
                    href={`/services/${service.slug}`}
                    className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 transition group-hover:gap-3 hover:text-blue-800"
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ============================= WHY KILAPUNCH ============================= */}
      <section className="relative overflow-hidden py-20 lg:py-24">
        <div className="relative mx-auto max-w-6xl px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500"
          >
            Why Kilapunch
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl"
          >
            More Than Software. A Long-Term Business Partner.
          </motion.h2>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyKilapunch.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="min-w-0 rounded-3xl border border-slate-200 bg-white p-8 text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-xl ${
                    accents[index % accents.length].chip
                  }`}
                >
                  <item.icon className="h-5 w-5" />
                </div>

                <h3 className="mt-5 font-semibold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================= CTA ============================= */}
      <section className="relative overflow-hidden bg-[#0B0F17] py-20 text-center text-white lg:py-24">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-blue-700/20 blur-[120px]" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto max-w-2xl px-6"
        >
          <h2 className="text-3xl font-bold sm:text-4xl">
            Need Help Choosing The Right Solution?
          </h2>

          <p className="mx-auto mt-6 text-slate-400">
            Our consultants can help you evaluate your requirements and
            recommend the right approach.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="https://wa.me/263786049770"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-orange-500 px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-blue-900/30 transition hover:-translate-y-0.5 hover:shadow-blue-900/50 sm:w-auto"
            >
              <MessageCircle className="h-4 w-4" />
              Book Consultation
            </a>

            <Link
              href="/contact"
              className="inline-flex w-full items-center justify-center rounded-full border border-white/15 bg-white/[0.03] px-7 py-4 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-white/30 hover:bg-white/[0.08] sm:w-auto"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  )
}
