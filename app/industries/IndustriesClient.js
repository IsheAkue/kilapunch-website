"use client"

import { useState } from "react"
import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion"
import {
  ChevronDown,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  ShoppingBag,
  Factory,
  Truck,
  GraduationCap,
  Sprout,
  Briefcase,
} from "lucide-react"
import { products } from "@/data/products"
import { services } from "@/data/services"
import { HeroGlow, CTAGlow } from "@/components/SectionGlow"

const industries = [
  {
    title: "Retail & Wholesale",
    description:
      "Helping retailers and wholesalers gain visibility across sales, inventory, purchasing, and financial performance.",
    solutions: [
      "Inventory Management",
      "Point of Sale Integration",
      "Multi-Branch Reporting",
      "Procurement Management",
      "Financial Reporting",
      "Sage 200 Evolution",
      "Sage 50 Pastel",
    ],
  },
  {
    title: "Manufacturing",
    description:
      "Supporting manufacturers with production visibility, costing, inventory control, and operational reporting.",
    solutions: [
      "Production Planning",
      "Bill of Materials",
      "Inventory Control",
      "Cost Tracking",
      "Procurement Management",
      "Operational Reporting",
      "ERP Implementation",
    ],
  },
  {
    title: "Distribution & Logistics",
    description:
      "Improving warehouse operations, inventory tracking, procurement, and supply chain visibility.",
    solutions: [
      "Warehouse Management",
      "Inventory Tracking",
      "Procurement Management",
      "Sales Order Processing",
      "Operational Dashboards",
      "Business Reporting",
      "ERP Support",
    ],
  },
  {
    title: "Education",
    description:
      "Helping educational institutions manage finances, payroll, budgeting, and operational processes efficiently.",
    solutions: [
      "Financial Management",
      "Payroll Solutions",
      "Budget Tracking",
      "Reporting & Analytics",
      "Staff Administration",
      "Business Automation",
      "Cloud Accounting",
    ],
  },
  {
    title: "Agriculture",
    description:
      "Providing business systems that improve operational control, inventory visibility, procurement, and financial reporting.",
    solutions: [
      "Inventory Management",
      "Procurement Control",
      "Financial Reporting",
      "Operational Visibility",
      "Business Automation",
      "Payroll Management",
      "ERP Consulting",
    ],
  },
  {
    title: "Professional Services",
    description:
      "Supporting consulting firms, accounting practices, and service organizations with financial and operational systems.",
    solutions: [
      "Cloud Accounting",
      "Project Reporting",
      "Financial Management",
      "Business Intelligence",
      "Payroll Solutions",
      "Business Automation",
      "Sage Intacct",
    ],
  },
]

// Same order and icons as the homepage IndustriesSection, so the same
// industry always carries the same visual identity across the site.
const industryIcons = [
  ShoppingBag,
  Factory,
  Truck,
  GraduationCap,
  Sprout,
  Briefcase,
]

// Same alternating blue/orange rhythm used across the rest of the site.
const accents = [
  "bg-blue-50 text-blue-700",
  "bg-orange-50 text-orange-600",
]

// Cross-links a "solutions" entry to its real product or service page, but
// only on an exact name/title match — anything that doesn't match exactly
// (e.g. "ERP Support", "Cloud Accounting", "ERP Consulting" — none of which
// are exact titles in the current data) safely renders as plain text
// instead of risking a broken or misleading link.
const productSlugByName = Object.fromEntries(
  products.map((product) => [product.name, product.slug])
)
const serviceSlugByTitle = Object.fromEntries(
  services.map((service) => [service.title, service.slug])
)

function getSolutionLink(solution) {
  if (productSlugByName[solution]) {
    return `/products/${productSlugByName[solution]}`
  }
  if (serviceSlugByTitle[solution]) {
    return `/services/${serviceSlugByTitle[solution]}`
  }
  return null
}

export default function IndustriesClient() {
  const [active, setActive] = useState(null)

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
            Business Systems Built Around Your Industry
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            Kilapunch helps organizations across multiple industries improve
            visibility, efficiency, reporting, and operational control
            through ERP systems, accounting software, payroll solutions, and
            business automation.
          </p>
        </motion.div>
      </section>

      {/* ============================= ACCORDION ============================= */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-6">
          <div className="space-y-6">
            {industries.map((industry, index) => {
              const Icon = industryIcons[index % industryIcons.length]
              const accent = accents[index % accents.length]
              const isOpen = active === index
              const panelId = `industry-panel-${index}`

              return (
                <div
                  key={industry.title}
                  className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md"
                >
                  <button
                    type="button"
                    onClick={() => setActive(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="flex w-full items-center justify-between gap-6 p-6 text-left sm:p-8"
                  >
                    <div className="flex min-w-0 items-start gap-5">
                      <div
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${accent}`}
                      >
                        <Icon className="h-6 w-6" />
                      </div>

                      <div className="min-w-0">
                        <h3 className="text-xl font-semibold text-slate-900 sm:text-2xl">
                          {industry.title}
                        </h3>
                        <p className="mt-2 text-sm leading-6 text-slate-600 sm:text-base">
                          {industry.description}
                        </p>
                      </div>
                    </div>

                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-600"
                    >
                      <ChevronDown className="h-4 w-4" />
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={panelId}
                        role="region"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-slate-200 bg-slate-50 p-6 sm:p-8">
                          <h4 className="text-sm font-bold uppercase tracking-[0.15em] text-slate-900">
                            Typical Solutions
                          </h4>

                          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                            {industry.solutions.map((solution) => {
                              const href = getSolutionLink(solution)

                              if (href) {
                                return (
                                  <Link
                                    key={solution}
                                    href={href}
                                    className="group flex items-center justify-between gap-2 rounded-2xl bg-white p-4 text-blue-700 shadow-sm transition hover:shadow-md"
                                  >
                                    <span className="flex items-center gap-2 font-medium">
                                      <CheckCircle2 className="h-4 w-4 shrink-0 text-blue-600" />
                                      {solution}
                                    </span>
                                    <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" />
                                  </Link>
                                )
                              }

                              return (
                                <div
                                  key={solution}
                                  className="flex items-center gap-2 rounded-2xl bg-white p-4 text-slate-700 shadow-sm"
                                >
                                  <CheckCircle2 className="h-4 w-4 shrink-0 text-orange-500" />
                                  {solution}
                                </div>
                              )
                            })}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>
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
          <h2 className="text-3xl font-bold sm:text-4xl">
            Let&apos;s Discuss Your Industry Requirements
          </h2>

          <p className="mx-auto mt-6 text-slate-400">
            Our consultants can help you identify the right business systems
            and support strategy.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="https://wa.me/263786049770"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-gradient px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-blue-900/30 transition hover:-translate-y-0.5 hover:shadow-blue-900/50 sm:w-auto"
            >
              <MessageCircle className="h-4 w-4" />
              Talk To A Consultant
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