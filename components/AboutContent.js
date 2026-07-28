"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import {
  ArrowRight,
  Target,
  Eye,
  Database,
  Calculator,
  LifeBuoy,
} from "lucide-react"

// -----------------------------------------------------------------------------
// DATA
// -----------------------------------------------------------------------------

// Structuring the founding story as a timeline rather than flowing prose —
// same underlying facts (2006 founding, "more than software" philosophy,
// the platform list) but organized as a narrative arc.
const milestones = [
  {
    tag: "2006",
    title: "Founded in Zimbabwe",
    description:
      "Kilapunch began as a dedicated Sage accounting software provider, helping local businesses move off spreadsheets and onto reliable systems.",
  },
  {
    tag: "Growth",
    title: "From Accounting to Full ERP",
    description:
      "As client operations scaled, we expanded into ERP implementation, business automation and infrastructure support — becoming true systems partners, not just software resellers.",
  },
  {
    tag: "Today",
    title: "Multi-Platform Specialists",
    description:
      "We now support five ERP and accounting platforms — Sage 200 Evolution, Intacct, Payroll, Pastel and Palladium — matched to what each business actually needs.",
  },
  {
    tag: "Ongoing",
    title: "Long-Term Partnerships",
    description:
      "Our relationship with clients continues well past go-live, through training, support and continuous optimization as businesses grow.",
  },
]

const howWeWork = [
  {
    title: "ERP Implementation Expertise",
    description:
      "A structured, proven deployment methodology that gets Sage and Palladium systems live with minimal disruption to daily operations.",
    icon: Database,
  },
  {
    title: "Accounting & Finance Knowledge",
    description:
      "Deep understanding of financial processes and compliance, not just the software — so systems are configured the way your books actually work.",
    icon: Calculator,
  },
  {
    title: "Long-Term Client Support",
    description:
      "Ongoing consulting and support relationships that continue well past go-live, as your business and reporting needs evolve.",
    icon: LifeBuoy,
  },
]

// Same alternating blue/orange rhythm used across the rest of the site.
const accents = [
  { chip: "bg-blue-50 text-blue-700", dot: "bg-blue-600", ghost: "text-blue-200" },
  { chip: "bg-orange-50 text-orange-600", dot: "bg-orange-500", ghost: "text-orange-200" },
]

// -----------------------------------------------------------------------------
// Small local helpers — kept in this file rather than split out, since the
// project's convention so far is one file per section.
// -----------------------------------------------------------------------------

// Counts up on scroll — used only for "20+", the one stat that represents an
// accumulating magnitude. A year like "2006" or a label like "ERP" gains
// nothing from counting, so those stay static elsewhere on the page.
function CountUp({ target, suffix = "", duration = 1.4 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!isInView) return
    let start
    let frame

    function step(timestamp) {
      if (!start) start = timestamp
      const progress = Math.min((timestamp - start) / (duration * 1000), 1)
      setValue(Math.floor(progress * target))
      if (progress < 1) frame = requestAnimationFrame(step)
    }

    frame = requestAnimationFrame(step)
    return () => cancelAnimationFrame(frame)
  }, [isInView, target, duration])

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  )
}

export default function AboutContent() {
  return (
    <div className="bg-white">
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

        <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 lg:grid-cols-[1.3fr_1fr] lg:items-center lg:gap-16">
          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="min-w-0"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-400">
              About Kilapunch
            </p>

            <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Empowering Businesses Through Smarter Systems
            </h1>

            <p className="mt-8 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
              Kilapunch ERP Solutions helps organizations improve efficiency,
              financial control and decision making through ERP
              implementation, accounting systems, automation and business
              technology.
            </p>
          </motion.div>

          {/* Masthead numeral — a distinct device from the CTA's chip row,
              purpose-built for an About page rather than a shrunk product Hero */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="min-w-0 border-t border-white/10 pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0"
          >
            <span className="text-6xl font-bold tracking-tight text-white sm:text-7xl">
              2006
            </span>
            <p className="mt-2 text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">
              Founded in Zimbabwe
            </p>

            <div className="mt-8 space-y-3 text-sm text-slate-400">
              <p>
                <CountUp target={20} suffix="+" /> years combined industry
                experience
              </p>
              <p>5 ERP &amp; accounting platforms supported</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ======================= STORY → TIMELINE ======================= */}
      <section className="relative overflow-hidden py-20 lg:py-28">
        <div className="pointer-events-none absolute -left-24 top-1/3 h-[340px] w-[340px] rounded-full bg-blue-100/30 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-2 lg:gap-16">
          {/* Platforms panel — replaces a generic stock photo with something
              that actually says something specific about the business.
              Real photography (a named team member, the Gweru office) is
              better saved for a page where it carries real trust value. */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative min-w-0"
          >
            <div className="absolute -left-4 -top-4 -z-10 h-full w-full rounded-[2rem] bg-gradient-to-br from-blue-100 to-orange-100" />
            <div className="flex h-full flex-col justify-center rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl sm:p-10 lg:p-12">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
                Platforms We Support
              </p>

              <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
                Five ERP and accounting platforms, matched to what each
                business actually needs — not a one-size-fits-all sale.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  "Sage 200 Evolution",
                  "Sage Intacct",
                  "Sage Payroll",
                  "Sage 50 Pastel",
                  "Palladium Accounting",
                ].map((name, index) => (
                  <span
                    key={name}
                    className={`rounded-full px-4 py-2 text-sm font-medium ${
                      accents[index % accents.length].chip
                    }`}
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Timeline */}
          <div className="min-w-0">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
              Our Story
            </p>

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              A Trusted ERP & Business Technology Partner Since 2006
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
              We do more than provide software — we help businesses choose
              the right systems, implement successfully, train users and
              provide continuous support.
            </p>

            <ol className="relative mt-10 space-y-10 border-l border-slate-200 pl-8">
              {/* Line that draws in as it scrolls into view — the same
                  motion idea as the homepage Process section's connecting
                  line, applied vertically here. */}
              <motion.div
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                style={{ transformOrigin: "top" }}
                className="absolute -left-px top-0 h-full w-px bg-gradient-to-b from-blue-500 via-slate-300 to-orange-500"
              />

              {milestones.map((milestone, index) => {
                const accent = accents[index % accents.length]
                return (
                  <motion.li
                    key={milestone.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                    className="relative min-w-0"
                  >
                    <span
                      className={`absolute -left-[41px] top-1 h-3 w-3 rounded-full ring-4 ring-white ${accent.dot}`}
                    />
                    <p
                      className={`text-xs font-semibold uppercase tracking-[0.15em] ${
                        index % 2 === 0 ? "text-blue-700" : "text-orange-600"
                      }`}
                    >
                      {milestone.tag}
                    </p>
                    <h3 className="mt-1 text-lg font-semibold text-slate-900">
                      {milestone.title}
                    </h3>
                    <p className="mt-2 leading-7 text-slate-600">
                      {milestone.description}
                    </p>
                  </motion.li>
                )
              })}
            </ol>
          </div>
        </div>
      </section>

      {/* =================== MISSION / VISION — STATEMENT BAND =================== */}
      <section className="relative overflow-hidden bg-[#0B0F17] py-20 lg:py-28">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-blue-700/15 blur-[120px]" />

        <div className="relative mx-auto grid max-w-6xl grid-cols-1 divide-y divide-white/10 px-6 lg:grid-cols-2 lg:divide-x lg:divide-y-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="min-w-0 py-10 lg:py-4 lg:pr-14"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/[0.06] text-blue-400">
              <Target className="h-5 w-5" />
            </div>

            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">
              Our Mission
            </p>

            <p className="mt-4 text-2xl font-semibold leading-snug text-white sm:text-3xl">
              To help organizations operate better through reliable ERP,
              accounting and technology solutions that improve efficiency
              and growth.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="min-w-0 py-10 lg:py-4 lg:pl-14"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/[0.06] text-orange-400">
              <Eye className="h-5 w-5" />
            </div>

            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">
              Our Vision
            </p>

            <p className="mt-4 text-2xl font-semibold leading-snug text-white sm:text-3xl">
              To become Zimbabwe&apos;s trusted technology partner for
              business transformation and digital growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ===================== WHY US → HOW WE WORK ===================== */}
      <section className="relative overflow-hidden bg-slate-50 py-20 lg:py-28">
        <div className="pointer-events-none absolute -right-24 top-0 h-[380px] w-[380px] rounded-full bg-orange-100/40 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center text-3xl font-bold text-slate-900 sm:text-4xl"
          >
            How We Work
          </motion.h2>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 md:grid-cols-3">
            {howWeWork.map((item, index) => {
              const accent = accents[index % accents.length]
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative min-w-0 rounded-3xl border border-slate-200 bg-white p-8 pt-14 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <span
                    className={`absolute -top-4 left-8 text-6xl font-bold ${accent.ghost}`}
                  >
                    0{index + 1}
                  </span>

                  <div
                    className={`relative flex h-12 w-12 items-center justify-center rounded-xl ${accent.chip}`}
                  >
                    <item.icon className="h-6 w-6" />
                  </div>

                  <h3 className="relative mt-6 text-xl font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="relative mt-4 leading-7 text-slate-600">
                    {item.description}
                  </p>
                </motion.div>
              )
            })}
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
            Ready To Transform Your Business Systems?
          </h2>

          <p className="mx-auto mt-6 text-slate-400">
            Speak with Kilapunch ERP consultants today.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-orange-500 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-blue-900/30 transition hover:-translate-y-0.5 hover:shadow-blue-900/50 sm:w-auto"
            >
              Request Consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
