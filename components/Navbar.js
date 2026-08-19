"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ArrowRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import BrandMark from "@/components/BrandMark"

// Single source of truth for nav links — desktop and mobile both render
// from this so they can never drift out of sync with each other.
const NAV_LINKS = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Contact", href: "/contact" },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  // Treats "/#home" as active on the homepage, otherwise matches the path.
  const isActive = (href) => {
    if (href === "/#home") return pathname === "/"
    return pathname === href
  }

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-brand-navy/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 sm:h-20 lg:px-8">

        {/* Logo */}
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <BrandMark className="h-14 w-14 shrink-0 sm:h-16 sm:w-16 lg:h-20 lg:w-20" />

          <div className="min-w-0 leading-tight">
            <p className="truncate text-base font-semibold tracking-tight text-white sm:text-lg">
              Kilapunch
            </p>
            <p className="hidden truncate text-[10px] font-semibold uppercase tracking-[0.2em] text-orange-400 sm:block">
              ERP Solutions
            </p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 text-sm font-medium lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative transition-colors ${
                isActive(link.href)
                  ? "text-white"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {link.label}
              {isActive(link.href) && (
                <motion.span
                  layoutId="nav-active-underline"
                  className="absolute -bottom-1.5 left-0 h-[2px] w-full rounded-full bg-gradient-to-r from-blue-500 to-orange-500"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                />
              )}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="absolute left-0 top-full w-full border-b border-white/10 bg-brand-navy/95 backdrop-blur-xl lg:hidden"
            >
              <div className="space-y-1 px-6 py-6">

                <div className="mb-4 flex items-center justify-between">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-400">
                    Menu
                  </p>
                </div>

                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                      isActive(link.href)
                        ? "bg-white/[0.06] text-white"
                        : "text-slate-400 hover:bg-white/[0.04] hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}

                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-gradient px-5 py-4 text-sm font-semibold text-white shadow-lg shadow-blue-900/30"
                >
                  Request Support
                  <ArrowRight className="h-4 w-4" />
                </Link>

              </div>

            </motion.div>
          )}
        </AnimatePresence>

        {/* Right Side */}
        <div className="flex shrink-0 items-center gap-3">

          <Link
            href="/contact"
            className="hidden items-center gap-2 rounded-full bg-brand-gradient px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-900/30 transition hover:-translate-y-0.5 hover:shadow-blue-900/50 lg:inline-flex"
          >
            Request Support
            <ArrowRight className="h-4 w-4" />
          </Link>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/[0.03] text-white transition hover:border-white/30 hover:bg-white/[0.08] lg:hidden"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>

        </div>
      </div>
    </header>
  )
}