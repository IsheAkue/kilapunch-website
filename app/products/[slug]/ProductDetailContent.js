"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  ArrowLeft,
  ArrowRight,
  MessageCircle,
  CheckCircle2,
  ShieldCheck,
  Landmark,
  Boxes,
  ShoppingCart,
  TrendingUp,
  BarChart3,
  Cloud,
  Workflow,
  Globe2,
  Zap,
  Wallet,
  CalendarClock,
  UserCheck,
  BookOpen,
  Receipt,
  Banknote,
  Users,
  Building2,
  Calculator,
  Layers,
  Package,
} from "lucide-react"

// Per-product icon — kept as a fallback for anything that doesn't have a
// logo yet, and still used inside the feature-showcase ring.
const productIconMap = {
  "sage-200-evolution": Layers,
  "sage-intacct": Cloud,
  "sage-payroll": Users,
  "sage-50-pastel": Calculator,
  "palladium-accounting": Package,
}

// Real vendor logos — same file paths already used elsewhere on the site
// (PlatformsSection, the homepage Hero cards), now reused here for the
// header badge and Related Products cards.
const productLogoMap = {
  "sage-200-evolution": "/images/platforms/sage-evolution.png",
  "sage-intacct": "/images/platforms/sage-intacct.png",
  "sage-payroll": "/images/platforms/sage-payroll.png",
  "sage-50-pastel": "/images/platforms/sage-pastel.png",
  "palladium-accounting": "/images/platforms/palladium.png",
}

// Keyword rules for auto-assigning each feature string an icon. Checked in
// order, first match wins. Falls back to CheckCircle2 for anything that
// doesn't match — this covers all 25 features across the current 5
// products, and degrades safely if a 6th product introduces new wording.
const featureIconRules = [
  [/financ/i, Landmark],
  [/inventory/i, Boxes],
  [/procurement/i, ShoppingCart],
  [/sales/i, TrendingUp],
  [/multi-entity|entity/i, Globe2],
  [/real-time/i, Zap],
  [/cloud/i, Cloud],
  [/workflow|automat/i, Workflow],
  [/report/i, BarChart3],
  [/payroll/i, Wallet],
  [/leave/i, CalendarClock],
  [/employee/i, UserCheck],
  [/complian/i, ShieldCheck],
  [/ledger/i, BookOpen],
  [/receivable/i, Receipt],
  [/payable/i, Banknote],
  [/crm/i, Users],
  [/business management/i, Building2],
  [/accounting/i, Calculator],
]

function getFeatureIcon(label) {
  const rule = featureIconRules.find(([pattern]) => pattern.test(label))
  return rule ? rule[1] : CheckCircle2
}

// Same alternating blue/orange rhythm used across the rest of the site.
const accents = [
  { chip: "bg-blue-50 text-blue-700", border: "group-hover:border-blue-200" },
  { chip: "bg-orange-50 text-orange-600", border: "group-hover:border-orange-200" },
]

// -----------------------------------------------------------------------------
// FeatureShowcase — the homepage Hero's signature device (glass card +
// counter-rotating icon ring), reused here at full scale as the product
// page's main visual. No product photography exists yet, so the real
// feature list itself becomes the visual, exactly like on the homepage.
// -----------------------------------------------------------------------------
function FeatureShowcase({ product }) {
  const radius = 230

  return (
    <div className="relative flex min-h-[520px] items-center justify-center py-16">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute h-80 w-80 rounded-full bg-blue-600/10 blur-3xl" />
      <div className="pointer-events-none absolute right-1/4 top-1/4 h-64 w-64 rounded-full bg-orange-500/10 blur-3xl" />

      {/* Orbiting feature icons — desktop only, same counter-rotation
          technique as the homepage: the ring rotates one way, each icon
          rotates the opposite way at the same speed, so icons stay upright. */}
      <div className="pointer-events-none absolute inset-0 hidden items-center justify-center lg:flex">
        <motion.div
          className="relative h-[460px] w-[460px]"
          animate={{ rotate: 360 }}
          transition={{ duration: 48, repeat: Infinity, ease: "linear" }}
        >
          {product.features.map((feature, index) => {
            const angle = (index / product.features.length) * Math.PI * 2
            // Rounded to whole pixels — see HeroSection.js's ModuleOrbit for
            // why: high-precision floats mismatch between React's SSR
            // string and the browser's normalized DOM value.
            const x = Math.round(radius * Math.cos(angle))
            const y = Math.round(radius * Math.sin(angle))
            const Icon = getFeatureIcon(feature)

            return (
              <div
                key={feature}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              >
                <motion.div
                  style={{ x, y }}
                  animate={{ rotate: -360 }}
                  transition={{ duration: 48, repeat: Infinity, ease: "linear" }}
                  className="flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-md"
                >
                  <Icon className="h-6 w-6 text-blue-600" />
                </motion.div>
              </div>
            )
          })}
        </motion.div>
      </div>

      {/* Center card — feature checklist */}
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full max-w-md rounded-[2rem] border border-slate-200 bg-white p-8 shadow-2xl sm:p-10"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-500">
          Key Features
        </p>
        <h3 className="mt-2 text-2xl font-bold text-slate-900">
          {product.name}
        </h3>

        <div className="mt-6 flex items-stretch gap-4">
          <ul className="flex-1 space-y-3">
            {product.features.map((feature) => {
              const Icon = getFeatureIcon(feature)
              return (
                <li key={feature} className="flex items-center gap-3 text-sm text-slate-700">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
                    <Icon className="h-4 w-4" />
                  </span>
                  {feature}
                </li>
              )
            })}
          </ul>

          {productLogoMap[product.slug] && (
            <div className="flex w-20 shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 p-3 sm:w-24">
              <Image
                src={productLogoMap[product.slug]}
                alt={`${product.name} logo`}
                width={96}
                height={96}
                className="h-full w-full object-contain"
              />
            </div>
          )}
        </div>
      </motion.div>
    </div>
  )
}

export default function ProductDetailContent({ product, relatedProducts }) {
  const HeaderIcon = productIconMap[product.slug] || Layers
  const logoSrc = productLogoMap[product.slug]

  return (
    <main className="min-h-screen bg-white">
      {/* ============================= HERO ============================= */}
      <section className="relative overflow-hidden bg-[#0B0F17] py-20 sm:py-28">
        <div className="pointer-events-none absolute -left-24 top-0 h-[400px] w-[400px] rounded-full bg-blue-700/25 blur-[120px]" />
        <div className="pointer-events-none absolute -right-24 bottom-0 h-[350px] w-[350px] rounded-full bg-orange-600/20 blur-[120px]" />
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
          transition={{ duration: 0.6 }}
          className="relative mx-auto max-w-4xl px-6 text-center"
        >
          <Link
            href="/products"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-slate-300 backdrop-blur-sm transition hover:border-white/20 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back To Products
          </Link>

          {logoSrc ? (
            <div className="mx-auto mt-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-white p-2 shadow-md">
              <Image
                src={logoSrc}
                alt={`${product.name} logo`}
                width={80}
                height={80}
                className="h-full w-full object-contain"
              />
            </div>
          ) : (
            <div className="mx-auto mt-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/[0.06] text-orange-400">
              <HeaderIcon className="h-7 w-7" />
            </div>
          )}

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            {product.name}
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            {product.shortDescription}
          </p>

          <span className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-slate-300 backdrop-blur-sm">
            <ShieldCheck className="h-4 w-4 text-blue-400" />
            Certified Sage & Palladium Partner
          </span>
        </motion.div>
      </section>

      {/* ===================== FEATURE SHOWCASE ===================== */}
      <section className="relative overflow-hidden">
        <FeatureShowcase product={product} />
      </section>

      {/* ============================= BENEFITS ============================= */}
      {product.benefits?.length > 0 && (
        <section className="relative overflow-hidden bg-slate-50 py-20 lg:py-28">
          <div className="pointer-events-none absolute -right-24 top-0 h-[340px] w-[340px] rounded-full bg-green-100/40 blur-3xl" />

          <div className="relative mx-auto max-w-6xl px-6">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-sm font-semibold uppercase tracking-[0.2em] text-green-600"
            >
              Business Benefits
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="mt-4 text-3xl font-bold text-slate-900"
            >
              How Your Business Benefits
            </motion.h2>

            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
              {product.benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  <TrendingUp className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
                  <span className="text-slate-700">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

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
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">
            Interested In This Solution?
          </p>

          <h2 className="mt-5 text-3xl font-bold sm:text-4xl">
            Let&apos;s Discuss Your Requirements
          </h2>

          <p className="mx-auto mt-6 text-slate-400">
            Our team can help you evaluate, implement, and support the right
            software solution for your business.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="https://wa.me/263786049770"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-orange-500 px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-blue-900/30 transition hover:-translate-y-0.5 hover:shadow-blue-900/50 sm:w-auto"
            >
              <MessageCircle className="h-4 w-4" />
              Chat On WhatsApp
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

      {/* ===================== RELATED PRODUCTS ===================== */}
      {relatedProducts.length > 0 && (
        <section className="border-t border-slate-200 py-20 lg:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Related Products
            </p>

            <h2 className="mt-4 text-3xl font-bold text-slate-900">
              Explore Other Solutions
            </h2>

            <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
              {relatedProducts.map((related, index) => {
                const RelatedIcon = productIconMap[related.slug] || Layers
                const relatedLogoSrc = productLogoMap[related.slug]
                const accent = accents[index % accents.length]

                return (
                  <motion.div
                    key={related.slug}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Link
                      href={`/products/${related.slug}`}
                      className={`group flex h-full min-w-0 flex-col rounded-3xl border border-slate-200 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:shadow-xl ${accent.border}`}
                    >
                      <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${accent.chip}`}>
                        {relatedLogoSrc ? (
                          <Image
                            src={relatedLogoSrc}
                            alt={`${related.name} logo`}
                            width={44}
                            height={44}
                            className="h-6 w-6 object-contain"
                          />
                        ) : (
                          <RelatedIcon className="h-5 w-5" />
                        )}
                      </div>

                      <h3 className="mt-5 text-xl font-semibold text-slate-900">
                        {related.name}
                      </h3>

                      <p className="mt-4 flex-1 leading-7 text-slate-600">
                        {related.summary}
                      </p>

                      <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-700">
                        View Product
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
