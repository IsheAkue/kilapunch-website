"use client"

import { useState } from "react"
import Image from "next/image"
import { AnimatePresence, motion } from "framer-motion"
import Link from "next/link"
import {
  ArrowRight,
  MessageCircle,
  CheckCircle2,
  Landmark,
  Boxes,
  Factory,
  Users,
  Cloud,
  LineChart,
  Repeat,
  Globe2,
  FileText,
  CalendarClock,
  UserCheck,
  Receipt,
  Banknote,
  Coins,
  TrendingUp,
  ClipboardList,
  Wallet,
  ShieldCheck,
} from "lucide-react"

// -----------------------------------------------------------------------------
// DATA — one entry per product. Each has its own headline + description so
// the hero copy genuinely changes (not just the card) when a tab is clicked.
// -----------------------------------------------------------------------------
const products = [
  {
    id: "sage-200-evolution",
    name: "Sage 200 Evolution",
    category: "Business ERP",
    logo: "/images/platforms/sage-evolution.png",
    headline: "Sage 200 Evolution",
    description:
      "Sage 200 is a full ERP for businesses that have outgrown basic accounting — finance, inventory and manufacturing running in one real-time system.",
    features: [
      { label: "Financial Management", icon: Landmark },
      { label: "Inventory Control", icon: Boxes },
      { label: "Manufacturing", icon: Factory },
      { label: "CRM", icon: Users },
    ],
    href: "/products/sage-200-evolution",
  },
  {
    id: "sage-intacct",
    name: "Sage Intacct",
    category: "Cloud Financials",
    logo: "/images/platforms/sage-intacct.png",
    headline: "Sage Intacct",
    description:
      "Sage Intacct is a cloud-native financial management for multi-entity organisations that need consolidated reporting and audit-ready numbers on demand.",
    features: [
      { label: "Multi-Entity Consolidation", icon: Globe2 },
      { label: "Real-Time Reporting", icon: LineChart },
      { label: "Revenue Recognition", icon: Repeat },
      { label: "Open API Integration", icon: Cloud },
    ],
    href: "/products/sage-intacct",
  },
  {
    id: "sage-payroll",
    name: "Sage Payroll",
    category: "Payroll & HR",
    logo: "/images/platforms/sage-payroll.png",
    headline: "Sage Payroll",
    description:
      "Sage-Payroll offers automated payroll that keeps you compliant with local statutory requirements, so payday never becomes a fire drill.",
    features: [
      { label: "Statutory Compliance", icon: ShieldCheck },
      { label: "Payslip Automation", icon: FileText },
      { label: "Leave Management", icon: CalendarClock },
      { label: "Employee Self-Service", icon: UserCheck },
    ],
    href: "/products/sage-payroll",
  },
  {
    id: "sage-50-pastel",
    name: "Sage 50 Pastel",
    category: "Accounting Software",
    logo: "/images/platforms/sage-pastel.png",
    headline: "Sage 50 Pastel",
    description:
      "Sage 50-pastel is the trusted accounting foundation for SMEs — invoicing, VAT and bank reconciliation, without the learning curve of a full ERP.",
    features: [
      { label: "Invoicing & Quotes", icon: Receipt },
      { label: "VAT Returns", icon: FileText },
      { label: "Bank Reconciliation", icon: Banknote },
      { label: "Multi-Currency", icon: Coins },
    ],
    href: "/products/sage-50-pastel",
  },
  {
    id: "palladium",
    name: "Palladium",
    category: "Accounting & ERP",
    logo: "/images/platforms/palladium.png",
    headline: "Palladium",
    description:
      "Palladium is a multi-currency, inflation-aware accounting ERP designed for the realities of operating and reporting in Zimbabwe.",
    features: [
      { label: "Multi-Currency Ledger", icon: Coins },
      { label: "Inflation Accounting", icon: TrendingUp },
      { label: "Stock Control", icon: ClipboardList },
      { label: "Custom Reporting", icon: Wallet },
    ],
    href: "/products/palladium-accounting",
  },
]

// -----------------------------------------------------------------------------
// ProductTabs — pill selector row. Active pill slides between tabs using a
// single shared layoutId element instead of animating each tab separately.
// The row bleeds to the edge of the viewport on mobile (-mx-6 px-6) so the
// horizontal scroll feels intentional rather than like a layout bug.
// -----------------------------------------------------------------------------
function ProductTabs({ activeId, onChange }) {
  return (
    <div
      role="tablist"
      aria-label="Select a Kilapunch product"
      className="-mx-6 mt-10 flex gap-2 overflow-x-auto px-6 pb-2 [-ms-overflow-style:none] [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 [&::-webkit-scrollbar]:hidden"
    >
      {products.map((product) => {
        const isActive = product.id === activeId
        return (
          <button
            key={product.id}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(product.id)}
            className="relative shrink-0 rounded-full px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
          >
            {isActive && (
              <motion.span
                layoutId="active-product-pill"
                className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-orange-500 shadow-lg shadow-blue-900/30"
                transition={{ type: "spring", stiffness: 400, damping: 32 }}
              />
            )}
            <span className={`relative z-10 whitespace-nowrap ${isActive ? "text-white" : ""}`}>
              {product.name}
            </span>
          </button>
        )
      })}
    </div>
  )
}

// -----------------------------------------------------------------------------
// ModuleOrbit — signature visual. All 5 supported platform logos orbit
// slowly behind the card, independent of whichever product tab is active —
// representing "5 platforms, one partner" rather than one product's
// features. Logos sit on solid white chips (not translucent) since vendor
// logos are designed for light backgrounds and need real contrast against
// the dark glass card. Desktop/tablet only (lg:flex) — it never renders on
// phones, so it can't contribute to mobile overflow.
// -----------------------------------------------------------------------------
function ModuleOrbit() {
  // 250px clears the card's edge (card is ~192px half-width at max-w-sm)
  // with room for the chip itself plus a visible gap — 190px, tuned for the
  // previous smaller/translucent icons, put most of the ring behind the
  // card instead of around it.
  const radius = 250

  return (
    <div className="pointer-events-none absolute inset-0 hidden items-center justify-center lg:flex">
      <motion.div
        className="relative h-[380px] w-[380px]"
        animate={{ rotate: 360 }}
        transition={{ duration: 42, repeat: Infinity, ease: "linear" }}
      >
        {products.map((product, index) => {
          const angle = (index / products.length) * Math.PI * 2
          // Rounded to whole pixels: React's server-rendered HTML uses full
          // JS float precision, but browsers normalize style values to
          // ~3 decimals once they're actually in the DOM — any high-
          // precision float here causes a hydration mismatch regardless of
          // whether it lands on left/top or a transform. Pre-rounding means
          // server and client both start from the identical integer, so
          // there's nothing left for either side to round differently.
          const x = Math.round(radius * Math.cos(angle))
          const y = Math.round(radius * Math.sin(angle))

          // Showing the full, uncropped logo for these specific platforms
          const showFullLogo =
            product.id === "sage-200-evolution" ||
            product.id === "sage-50-pastel" ||
            product.id === "sage-intacct"

          return (
            <div
              key={product.id}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <motion.div
                style={{ x, y }}
                animate={{ rotate: -360 }}
                transition={{ duration: 42, repeat: Infinity, ease: "linear" }}
                className={`flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white shadow-lg ${
                  showFullLogo ? "p-2" : "p-1"
                }`}
              >
                {showFullLogo ? (
                  <Image
                    src={product.logo}
                    alt={`${product.name} logo`}
                    width={56}
                    height={56}
                    className="h-full w-full object-contain"
                  />
                ) : (
                  <div className="relative h-full w-full overflow-hidden rounded-xl">
                    <Image
                      src={product.logo}
                      alt={`${product.name} logo`}
                      fill
                      sizes="56px"
                      className="scale-[1.15] object-cover"
                    />
                  </div>
                )}
              </motion.div>
            </div>
          )
        })}
      </motion.div>
    </div>
  )
}

// -----------------------------------------------------------------------------
// ProductShowcase — the floating glass card on the right, wrapped in the
// module orbit and a "Trusted Since 2006" credential badge.
// min-w-0 lets this shrink below the card's natural width instead of forcing
// its shared grid column wider than the viewport (the actual mobile bug).
// -----------------------------------------------------------------------------
function ProductShowcase({ product }) {
  return (
    <div className="relative flex h-[420px] min-w-0 items-center justify-center sm:h-[480px] lg:h-[520px]">
      <ModuleOrbit />

      {/* Ambient glow behind the card */}
      <div className="absolute h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />
      <div className="absolute right-4 top-4 h-56 w-56 rounded-full bg-orange-500/20 blur-3xl" />

      <AnimatePresence mode="wait">
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 24, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -16, scale: 0.96 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 w-full max-w-sm rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-2xl shadow-black/40 backdrop-blur-xl sm:p-8"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-400">
            {product.category}
          </p>
          <h3 className="mt-2 text-2xl font-bold text-white">{product.name}</h3>

          <div className="mt-6 flex items-stretch gap-4">
            <ul className="flex-1 space-y-3">
              {product.features.map((feature) => (
                <li
                  key={feature.label}
                  className="flex items-center gap-3 text-sm text-slate-200"
                >
                  <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-blue-400" />
                  {feature.label}
                </li>
              ))}
            </ul>

            <div className="flex w-20 shrink-0 items-center justify-center rounded-2xl bg-white p-3 shadow-md sm:w-24">
              <Image
                src={product.logo}
                alt={`${product.name} logo`}
                width={96}
                height={96}
                className="h-full w-full object-contain"
              />
            </div>
          </div>

          <Link
            href={product.href}
            className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white"
          >
            <span className="border-b border-orange-400 pb-0.5 transition-colors group-hover:border-white">
              Learn More
            </span>
            <ArrowRight className="h-4 w-4 text-orange-400 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </AnimatePresence>

      {/* Floating credential badge */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="absolute -bottom-4 left-0 z-20 rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 shadow-xl backdrop-blur-xl sm:left-4 sm:px-5 sm:py-4"
      >
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-orange-400">
          Trusted Since
        </p>
        <p className="text-2xl font-bold text-white">2006</p>
      </motion.div>
    </div>
  )
}

// -----------------------------------------------------------------------------
// HeroSection — default export. Ties the background, crossfading copy,
// CTAs, tabs, and product showcase together around one piece of state.
// -----------------------------------------------------------------------------
export default function HeroSection() {
  const [activeId, setActiveId] = useState(products[0].id)
  const activeProduct = products.find((p) => p.id === activeId) ?? products[0]

  return (
    <section className="relative overflow-hidden bg-[#0B0F17] py-16 sm:py-20 lg:py-28">
      {/* Background: layered glow + faint dot grid */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-0 h-[520px] w-[520px] rounded-full bg-blue-700/25 blur-[120px]" />
        <div className="absolute -right-20 bottom-0 h-[480px] w-[480px] rounded-full bg-orange-600/20 blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-12">
          {/* ================= LEFT: copy + tabs ================= */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="min-w-0"
          >
            <p className="max-w-full break-words text-xs font-semibold uppercase tracking-[0.15em] text-orange-400 sm:text-sm sm:tracking-[0.25em]">
              Sage &amp; Palladium Business Partner — Zimbabwe
            </p>

            {/* Headline + description crossfade with the active product */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProduct.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              >
                <h1 className="mt-6 max-w-full break-words text-3xl font-bold leading-[1.15] tracking-tight text-white sm:max-w-xl sm:text-4xl lg:text-5xl lg:leading-[1.1]">
                  {activeProduct.headline}
                </h1>
                <p className="mt-6 max-w-full text-base leading-7 text-slate-400 sm:max-w-lg">
                  {activeProduct.description}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* CTAs — stack full-width on phones, sit side by side from sm up */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <a
                href={activeProduct.href}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-900/30 transition hover:-translate-y-0.5 hover:shadow-blue-900/50 sm:w-auto"
              >
                Explore {activeProduct.name}
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="https://wa.me/263786049770"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-white/30 hover:bg-white/[0.08] sm:w-auto"
              >
                <MessageCircle className="h-4 w-4 text-orange-400" />
                Speak to a Consultant
              </a>
            </div>

            {/* Product selector tabs */}
            <ProductTabs activeId={activeId} onChange={setActiveId} />
          </motion.div>

          {/* ================= RIGHT: floating product showcase ================= */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="min-w-0"
          >
            <ProductShowcase product={activeProduct} />
          </motion.div>
        </div>
      </div>
    </section>
  )
}