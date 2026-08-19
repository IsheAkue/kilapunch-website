"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Navigation,
  ArrowRight,
} from "lucide-react"
import ContactForm from "@/components/ContactForm"
import { services } from "@/data/services"
import { HeroGlow, CTAGlow } from "@/components/SectionGlow"

const phoneNumbers = ["+263 774 708 347", "+263 786 049 770", "+27 710 367 057"]

const whyContact = [
  "ERP Implementation",
  "Sage Software Licensing",
  "Accounting Systems",
  "Business Automation",
  "Training & Support",
  "Remote Technical Assistance",
]

// Same alternating blue/orange rhythm used across the rest of the site.
const accents = [
  "bg-blue-50 text-blue-700",
  "bg-orange-50 text-orange-600",
]

// Same cross-linking technique used on the Industries page: only exact
// title matches become links, so nothing links incorrectly. "Sage Software
// Licensing", "Training & Support" and "Remote Technical Assistance" don't
// exactly match a service title, so they render as plain text.
const serviceSlugByTitle = Object.fromEntries(
  services.map((service) => [service.title, service.slug])
)

// Office coordinates, matching the embedded map below — used to build a
// real "Get Directions" link from the same data already in use.
const officeCoordinates = "-19.455998513015775,29.815768980716967"

export default function ContactContent() {
  return (
    <main className="min-h-screen bg-white">
      {/* ============================= HERO ============================= */}
      <section className="relative overflow-hidden bg-brand-navy py-20 sm:py-28">
        <HeroGlow />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto max-w-4xl px-6 text-center"
        >
          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Let&apos;s Talk About Your Business Systems
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            Speak with our ERP consultants about Sage solutions, accounting
            systems, automation and business technology support.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {["Response Within 1 Business Day", "Remote & Onsite Support"].map(
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

      {/* ============================= CONTACT CARDS ============================= */}
      <section className="relative overflow-hidden py-20">
        <div className="pointer-events-none absolute -left-24 top-0 h-[340px] w-[340px] rounded-full bg-blue-100/30 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            {/* Call */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="min-w-0 rounded-3xl border border-slate-200 p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${accents[0]}`}>
                <Phone className="h-6 w-6" />
              </div>

              <h3 className="mt-5 text-xl font-semibold text-slate-900">
                Call Us
              </h3>

              <div className="mt-3 space-y-1 text-sm leading-7">
                {phoneNumbers.map((number) => (
                  <a
                    key={number}
                    href={`tel:${number.replace(/\s+/g, "")}`}
                    className="block text-slate-700 transition hover:text-blue-700"
                  >
                    {number}
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Email */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="min-w-0 rounded-3xl border border-slate-200 p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${accents[1]}`}>
                <Mail className="h-6 w-6" />
              </div>

              <h3 className="mt-5 text-xl font-semibold text-slate-900">
                Email Us
              </h3>

              <a
                href="mailto:kilapunch.erpsolutions@gmail.com"
                className="mt-3 block break-all text-slate-600 transition hover:text-blue-700"
              >
                kilapunch.erpsolutions@gmail.com
              </a>
            </motion.div>

            {/* Address */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.16 }}
              className="min-w-0 rounded-3xl border border-slate-200 p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${accents[0]}`}>
                <MapPin className="h-6 w-6" />
              </div>

              <h3 className="mt-5 text-xl font-semibold text-slate-900">
                Visit Us
              </h3>

              <p className="mt-3 text-slate-600">
                Suite 206, Second Floor
                <br />
                Rothbaths Mansions
                <br />
                Sixth Street, Gweru, Zimbabwe
              </p>

              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${officeCoordinates}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 transition hover:text-blue-800"
              >
                <Navigation className="h-4 w-4" />
                Get Directions
              </a>
            </motion.div>

            {/* Hours */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.24 }}
              className="min-w-0 rounded-3xl border border-slate-200 p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${accents[1]}`}>
                <Clock className="h-6 w-6" />
              </div>

              <h3 className="mt-5 text-xl font-semibold text-slate-900">
                Business Hours
              </h3>

              <p className="mt-3 text-slate-600">
                Mon – Fri
                <br />
                8:00 AM – 5:00 PM
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================= FORM + INFO ============================= */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="min-w-0"
            >
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
                Speak With An ERP Consultant Regarding:
              </h2>

              <div className="mt-10 space-y-4">
                {whyContact.map((item) => {
                  const slug = serviceSlugByTitle[item]

                  if (slug) {
                    return (
                      <Link
                        key={item}
                        href={`/services/${slug}`}
                        className="group flex items-center justify-between gap-2 rounded-2xl border border-slate-200 p-5 text-slate-900 transition hover:border-blue-200 hover:bg-blue-50/50"
                      >
                        <span className="font-medium">{item}</span>
                        <ArrowRight className="h-4 w-4 text-blue-700 transition-transform group-hover:translate-x-1" />
                      </Link>
                    )
                  }

                  return (
                    <div
                      key={item}
                      className="rounded-2xl border border-slate-200 p-5 text-slate-700"
                    >
                      {item}
                    </div>
                  )
                })}
              </div>
            </motion.div>

            {/* FORM */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="min-w-0 rounded-[32px] border border-slate-200 bg-white p-8 shadow-xl lg:p-12"
            >
              <h3 className="text-3xl font-bold text-slate-900">
                Send An Inquiry
              </h3>

              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================= GOOGLE MAP ============================= */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Visit Our Office
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
              Conveniently located in Gweru, Zimbabwe.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-12 overflow-hidden rounded-[32px] shadow-xl"
          >
            <iframe
              title="Kilapunch ERP Solutions office location"
              width="100%"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps?q=${officeCoordinates}&z=18&output=embed`}
              className="w-full rounded-[32px]"
            />
          </motion.div>
        </div>
      </section>

      {/* ============================= CTA ============================= */}
      <section className="relative overflow-hidden bg-brand-navy py-20 text-center text-white lg:py-24">
        <CTAGlow />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto max-w-2xl px-6"
        >
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/[0.06] text-orange-400">
            <MessageCircle className="h-7 w-7" />
          </div>

          <h2 className="mt-6 text-3xl font-bold sm:text-4xl">
            Prefer To Talk Directly?
          </h2>

          <p className="mx-auto mt-6 text-slate-400">
            Reach out on WhatsApp or call our consultants directly.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="https://wa.me/263786049770"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-gradient px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-blue-900/30 transition hover:-translate-y-0.5 hover:shadow-blue-900/50 sm:w-auto"
            >
              <MessageCircle className="h-4 w-4" />
              Chat On WhatsApp
            </a>

            <a
              href="tel:+263786049770"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-7 py-4 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-white/30 hover:bg-white/[0.08] sm:w-auto"
            >
              <Phone className="h-4 w-4" />
              Call Us
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  )
}
