"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { revealUp } from "@/lib/motion"
import SectionHeading from "@/components/SectionHeading"
import {
  ShoppingBag,
  Factory,
  Truck,
  GraduationCap,
  Sprout,
  Briefcase,
} from "lucide-react"

const industries = [
  {
    title: "Retail & Wholesale",
    image: "/images/industries/Retail.jpg",
    description:
      "Improve inventory visibility, sales reporting, supplier management, and financial control across retail and wholesale operations.",
    icon: ShoppingBag,
  },
  {
    title: "Manufacturing",
    image: "/images/industries/Manufacturing.jpg",
    description:
      "Streamline production planning, costing, inventory control, and operational reporting with integrated ERP solutions.",
    icon: Factory,
  },
  {
    title: "Distribution & Logistics",
    image: "/images/industries/Distribution.jpg",
    description:
      "Manage warehouse operations, inventory movement, deliveries, and customer orders through centralized business systems.",
    icon: Truck,
  },
  {
    title: "Education",
    image: "/images/industries/Education.jpg",
    description:
      "Support schools, colleges, and universities with financial management, payroll, budgeting, and reporting solutions.",
    icon: GraduationCap,
  },
  {
    title: "Agriculture",
    image: "/images/industries/Agriculture.jpg",
    description:
      "Provide agricultural businesses with better financial visibility, operational control, and business reporting.",
    icon: Sprout,
  },
  {
    title: "Professional Services",
    image: "/images/industries/Services.jpg",
    description:
      "Support consulting firms, accounting practices, engineering companies, and service organizations with reliable business systems.",
    icon: Briefcase,
  },
]

// Same alternating blue/orange rhythm used across the site.
const accents = [
  "bg-blue-600 shadow-blue-900/30",
  "bg-orange-500 shadow-orange-900/30",
]

export default function IndustriesSection() {
  return (
    <section id="industries" className="relative overflow-hidden bg-white py-24 lg:py-36">
      {/* Ambient glow — same pairing used across the other light sections */}
      <div className="pointer-events-none absolute -left-24 top-0 h-[400px] w-[400px] rounded-full bg-blue-100/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-[360px] w-[360px] rounded-full bg-orange-100/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          centered
          title="Organizations We Support"
          description="From retailers and manufacturers to educational institutions, agricultural businesses, and professional service firms, Kilapunch helps organizations implement and optimize business systems that improve efficiency and visibility."
        />

        <div className="mt-14 grid grid-cols-1 gap-8 sm:mt-16 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              variants={revealUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
              className="group min-w-0 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Image with gradient overlay + title anchored on the photo */}
              <div className="relative h-56 w-full overflow-hidden sm:h-60">
                <Image
                  src={industry.image}
                  alt={industry.title}
                  width={600}
                  height={400}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                {/* Icon badge */}
                <div
                  className={`absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-xl text-white shadow-lg ${
                    accents[index % accents.length]
                  }`}
                >
                  <industry.icon className="h-5 w-5" />
                </div>

                <h3 className="absolute bottom-5 left-5 right-5 text-xl font-semibold text-white sm:text-2xl">
                  {industry.title}
                </h3>
              </div>

              <div className="p-6 sm:p-8">
                <p className="leading-7 text-slate-600">
                  {industry.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}