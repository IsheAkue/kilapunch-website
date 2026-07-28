"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle2 } from "lucide-react"

const trustBadges = [
  "Established 2006",
  "Sage Specialists",
  "Certified Consultants",
  "Implementation & Support",
  "Training & User Adoption",
]

export default function CTASection() {
  const openWhatsApp = () => {
    window.open(
      "https://wa.me/263786049770?text=Hello%20Kilapunch.%20I%20would%20like%20to%20book%20a%20consultation%20for%20my%20business.",
      "_blank"
    )
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-slate-100 py-20 sm:py-28 lg:py-36">
      {/* Ambient glow — now correctly contained to this section (previously
          escaped upward due to the section missing `relative`) */}
      <div className="pointer-events-none absolute left-0 top-0 h-[350px] w-[350px] rounded-full bg-blue-200/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full bg-orange-200/20 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 mx-auto max-w-4xl px-6 text-center lg:px-8"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
          Let&apos;s Talk Business Systems
        </p>

        <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
          Your Trusted Partner For Sage ERP Solutions
        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
          Whether you&apos;re considering a new Sage solution, implementing an ERP
          system, training users, or looking for reliable support, Kilapunch
          provides the expertise and guidance needed to help your business
          operate with confidence.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row sm:flex-wrap">
          <button
            onClick={openWhatsApp}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-orange-500 px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-blue-900/20 transition hover:-translate-y-0.5 hover:shadow-blue-900/30 sm:w-auto"
          >
            Request Consultation
            <ArrowRight className="h-4 w-4" />
          </button>

          <Link
            href="/contact"
            className="inline-flex w-full items-center justify-center rounded-full border border-slate-300 bg-white px-7 py-4 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50 sm:w-auto"
          >
            Contact Us
          </Link>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {trustBadges.map((badge) => (
            <span
              key={badge}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm"
            >
              <CheckCircle2 className="h-4 w-4 text-blue-600" />
              {badge}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  )
}