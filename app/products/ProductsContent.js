"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import {
  ArrowRight,
  MessageCircle,
  CheckCircle2,
  Layers,
  Cloud,
  Users,
  Calculator,
  Package,
  Calendar,
  Award,
  LifeBuoy,
  GraduationCap,
} from "lucide-react"
import { products } from "@/data/products"
import { HeroGlow, CTAGlow } from "@/components/SectionGlow"
import { revealUp } from "@/lib/motion"

// Maps each known product to an icon. Falls back to a generic icon for any
// future product added to the data file that isn't listed here.
const productIconMap = {
  "sage-200-evolution": Layers,
  "sage-intacct": Cloud,
  "sage-payroll": Users,
  "sage-50-pastel": Calculator,
  "palladium-accounting": Package,
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

const scrollToProduct = (slug) => {
  document.getElementById(slug)?.scrollIntoView({
    behavior: "smooth",
    block: "center",
  })
}

export default function ProductsContent() {
  return (
    <main className="min-h-screen bg-white">
      {/* ============================= HERO ============================= */}
      <section className="relative overflow-hidden bg-brand-navy py-20 sm:py-28">
        <HeroGlow blueSize={420} orangeSize={380} />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto max-w-4xl px-6 text-center"
        >
          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Five Platforms. One Certified Implementation Partner.
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            Kilapunch offers a comprehensive suite of software solutions
            tailored to meet the diverse needs of businesses across various
            industries and sectors. Explore the accounting, payroll, ERP,
            and business management platforms supported by Kilapunch.
          </p>

          {/* Interactive product jump row — click an icon to scroll straight
              to that product's card below. No product photography exists
              yet, so this uses distinct icons rather than logos or photos. */}
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            {products.map((product, index) => {
              const Icon = productIconMap[product.slug] || Layers
              return (
                <motion.button
                  key={product.slug}
                  type="button"
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                    delay: 0.4 + index * 0.08,
                  }}
                  onClick={() => scrollToProduct(product.slug)}
                  className="group flex flex-col items-center gap-2"
                >
                  <span
                    className={`flex h-16 w-16 items-center justify-center rounded-full ring-2 ring-offset-2 ring-offset-brand-navy transition group-hover:scale-110 ${
                      index % 2 === 0
                        ? "bg-blue-600/10 text-blue-400 ring-blue-500"
                        : "bg-orange-600/10 text-orange-400 ring-orange-500"
                    }`}
                  >
                    <Icon className="h-7 w-7" />
                  </span>
                  <span className="max-w-[90px] text-center text-xs text-slate-400 transition group-hover:text-white">
                    {product.name}
                  </span>
                </motion.button>
              )
            })}
          </div>
        </motion.div>
      </section>

      {/* ============================= PRODUCTS GRID ============================= */}
      <section className="relative overflow-hidden py-20 lg:py-28">
        <div className="pointer-events-none absolute -left-24 top-1/3 h-[340px] w-[340px] rounded-full bg-blue-100/30 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            {products.map((product, index) => {
              const Icon = productIconMap[product.slug] || Layers
              const accent = accents[index % accents.length]
              const topBenefits = product.benefits?.slice(0, 2) ?? []

              return (
                <motion.div
                  key={product.slug}
                  id={product.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className={`group scroll-mt-28 flex min-w-0 flex-col rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl ${accent.border}`}
                >
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${accent.chip}`}>
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mt-6 text-2xl font-semibold text-slate-900">
                    {product.name}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {product.summary}
                  </p>

                  {topBenefits.length > 0 && (
                    <ul className="mt-6 space-y-2">
                      {topBenefits.map((benefit) => (
                        <li
                          key={benefit}
                          className="flex items-start gap-2 text-sm text-slate-600"
                        >
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  )}

                  <Link
                    href={`/products/${product.slug}`}
                    className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 transition group-hover:gap-3 hover:text-blue-800"
                  >
                    Learn More<span className="sr-only"> about {product.name}</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ============================= WHY KILAPUNCH ============================= */}
      <section className="relative overflow-hidden bg-slate-50 py-20 lg:py-24">
        <div className="pointer-events-none absolute -right-24 top-0 h-[340px] w-[340px] rounded-full bg-orange-100/40 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-6 text-center">
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
                variants={revealUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index}
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
            Interested In A Particular Product?
          </h2>

          <p className="mx-auto mt-6 text-slate-400">
            Our consultants are available to attend to your needs.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="https://wa.me/263786049770"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-gradient px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-blue-900/30 transition hover:-translate-y-0.5 hover:shadow-blue-900/50 sm:w-auto"
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
