"use client"

import { Sparkles } from "lucide-react"

export default function TrustStrip() {
  const items = [
    "Sage Evolution Support",
    "ERP Consulting",
    "Business Automation",
    "Remote Support",
    "Accounting Systems",
  ]

  // Duplicated once so the track can loop seamlessly: translating exactly
  // -50% moves through one full, un-duplicated set of items.
  const marqueeItems = [...items, ...items]

  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-brand-navy py-8">
      {/* Edge fades so items scroll in/out smoothly instead of hard-cutting */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-brand-navy to-transparent sm:w-32" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-brand-navy to-transparent sm:w-32" />

      <div className="marquee-track flex w-max gap-4">
        {marqueeItems.map((item, index) => (
          <div
            key={`${item}-${index}`}
            className="flex shrink-0 items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-medium text-slate-300 backdrop-blur-sm transition hover:border-orange-400/40 hover:bg-white/[0.08] hover:text-white"
          >
            <Sparkles className="h-4 w-4 text-orange-400" />
            {item}
          </div>
        ))}
      </div>

      <style jsx>{`
        .marquee-track {
          animation: marquee 28s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track {
            animation: none;
          }
        }
      `}</style>
    </section>
  )
}