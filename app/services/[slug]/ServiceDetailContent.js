"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import {
  ArrowLeft,
  ArrowRight,
  MessageCircle,
  CheckCircle2,
  AlertCircle,
  TrendingUp,
  ShieldCheck,
  Database,
  Workflow,
  MonitorSmartphone,
  Calculator,
  Network,
  Settings2,
} from "lucide-react"
import { HeroGlow, CTAGlow } from "@/components/SectionGlow"
import { revealUp } from "@/lib/motion"

// Same icon map used on the Services listing page — duplicated here rather
// than shared, consistent with this project's one-file-per-page convention.
const iconMap = {
  "Sage Evolution Support": ShieldCheck,
  "ERP Implementation": Database,
  "Business Automation": Workflow,
  "Remote IT Support": MonitorSmartphone,
  "Accounting Systems": Calculator,
  "Infrastructure Support": Network,
}

const trustChips = [
  "Remote Support",
  "Onsite Assistance",
  "ERP Specialists",
  "Business Focused",
]

// Same alternating blue/orange rhythm used across the rest of the site.
const accents = [
  { chip: "bg-blue-50 text-blue-700", border: "group-hover:border-blue-200" },
  { chip: "bg-orange-50 text-orange-600", border: "group-hover:border-orange-200" },
]

export default function ServiceDetailContent({ service, relatedServices }) {
  const Icon = iconMap[service.title] || Settings2

  return (
    <main className="min-h-screen bg-white">
      {/* ============================= HERO ============================= */}
      <section className="relative overflow-hidden bg-brand-navy py-20 sm:py-28">
        <HeroGlow />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto max-w-5xl px-6"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-slate-300 backdrop-blur-sm transition hover:border-white/20 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back To Services
          </Link>

          <div className="mt-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/[0.06] text-orange-400">
            <Icon className="h-7 w-7" />
          </div>

          <h1 className="mt-6 max-w-3xl text-4xl font-bold tracking-tight text-white lg:text-5xl">
            {service.title}
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            {service.shortDescription}
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            {trustChips.map((chip) => (
              <span
                key={chip}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-slate-300 backdrop-blur-sm"
              >
                <CheckCircle2 className="h-4 w-4 text-blue-400" />
                {chip}
              </span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ===================== CHALLENGES / SOLUTIONS ===================== */}
      <section className="py-20 lg:py-28">
        <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-16 px-6 lg:grid-cols-2">
          {/* Connecting arrow — a single motif carrying the "problem becomes
              solution" narrative, rather than pairing items by index (the
              two arrays aren't guaranteed to be the same length across
              every service, so per-item pairing would misalign). */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 hidden h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-brand-gradient text-white shadow-lg lg:flex">
            <ArrowRight className="h-5 w-5" />
          </div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="min-w-0"
          >
            <h2 className="text-3xl font-bold text-slate-900">
              Problems We Help Solve
            </h2>

            <ul className="mt-8 space-y-4">
              {service.challenges.map((challenge, index) => (
                <motion.li
                  key={challenge}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  className="flex items-start gap-3 rounded-2xl border border-slate-200 p-5"
                >
                  <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-orange-500" />
                  <span className="text-slate-700">{challenge}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="min-w-0"
          >
            <h2 className="text-3xl font-bold text-slate-900">
              How Kilapunch Helps
            </h2>

            <ul className="mt-8 space-y-4">
              {service.solutions.map((solution, index) => (
                <motion.li
                  key={solution}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-5"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
                  <span className="text-slate-700">{solution}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ============================= OUTCOMES ============================= */}
      {service.outcomes?.length > 0 && (
        <section className="relative overflow-hidden bg-slate-50 py-20 lg:py-28">
          <div className="pointer-events-none absolute -right-24 top-0 h-[340px] w-[340px] rounded-full bg-green-100/40 blur-3xl" />

          <div className="relative mx-auto max-w-6xl px-6">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="mt-4 text-3xl font-bold text-slate-900"
            >
              What Success Looks Like
            </motion.h2>

            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
              {service.outcomes.map((outcome, index) => (
                <motion.div
                  key={outcome}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  <TrendingUp className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
                  <span className="text-slate-700">{outcome}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ============================= CTA ============================= */}
      <section className="relative overflow-hidden bg-brand-navy py-20 text-center text-white lg:py-24">
        <CTAGlow />

        <motion.div
          variants={revealUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative mx-auto max-w-2xl px-6"
        >
          <h2 className="text-3xl font-bold sm:text-4xl">
            Let&apos;s Discuss Your Requirements
          </h2>

          <p className="mx-auto mt-6 text-slate-400">
            Whether you&apos;re implementing a new system, improving existing
            processes, or looking for reliable support, our team is ready to
            help.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="https://wa.me/263786049770"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-gradient px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-blue-900/30 transition hover:-translate-y-0.5 hover:shadow-blue-900/50 sm:w-auto"
            >
              <MessageCircle className="h-4 w-4" />
              Chat on WhatsApp
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

      {/* ===================== RELATED SERVICES ===================== */}
      {relatedServices.length > 0 && (
        <section className="border-t border-slate-200 py-20 lg:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-3xl font-bold text-slate-900">
              Related Business Solutions
            </h2>

            <p className="mt-6 max-w-3xl text-lg text-slate-600">
              Many organizations that require ERP support also benefit from
              implementation, automation, and accounting system optimization.
            </p>

            <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
              {relatedServices.map((related, index) => {
                const RelatedIcon = iconMap[related.title] || Settings2
                const accent = accents[index % accents.length]

                return (
                  <motion.div
                    key={related.slug}
                    variants={revealUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={index}
                  >
                    <Link
                      href={`/services/${related.slug}`}
                      className={`group flex h-full min-w-0 flex-col rounded-3xl border border-slate-200 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:shadow-xl ${accent.border}`}
                    >
                      <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${accent.chip}`}>
                        <RelatedIcon className="h-5 w-5" />
                      </div>

                      <h3 className="mt-5 text-xl font-semibold text-slate-900">
                        {related.title}
                      </h3>

                      <p className="mt-4 flex-1 leading-7 text-slate-600">
                        {related.summary}
                      </p>

                      <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-700">
                        View Service
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </Link>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>
      )}
    </main>
  )
}
