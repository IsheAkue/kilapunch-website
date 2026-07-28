import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const platforms = [
  {
    name: "Sage 200 Evolution",
    logo: "/images/platforms/sage-evolution.png",
    description:
      "A powerful online business management solution that helps you manage your business more effectively.",
    href: "/products/sage-200-evolution",
  },
  {
    name: "Sage Intacct",
    logo: "/images/platforms/sage-intacct.png",
    description:
      "Leading cloud-based financial management and accounting software.",
    href: "/products/sage-intacct",
  },
  {
    name: "Sage Payroll",
    logo: "/images/platforms/sage-payroll.png",
    description:
      "Payroll and HR management software that simplifies employee administration.",
    href: "/products/sage-payroll",
  },
  {
    name: "Sage 50 Pastel",
    logo: "/images/platforms/sage-pastel.png",
    description:
      "A powerful accounting solution with invoicing, reporting and stock management.",
    href: "/products/sage-50-pastel",
  },
  {
    name: "Palladium Accounting",
    logo: "/images/platforms/palladium.png",
    description:
      "Business accounting and inventory management software for growing enterprises.",
    href: "/products/palladium",
  },
]

// Same alternating blue/orange accent used in ServicesSection, applied here
// as a hover border tint so the two sections read as one design system.
const accents = ["group-hover:border-blue-200", "group-hover:border-orange-200"]

export default function PlatformsSection() {
  return (
    <section className="bg-slate-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
            Official Software Partners
          </p>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 lg:text-4xl">
            Every Platform We Implement, Support and Maintain
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Real products, real certifications — browse the full catalog below
            and jump straight into any platform to see what it offers.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {platforms.map((platform, index) => (
            <Link
              key={platform.name}
              href={platform.href}
              className={`group flex min-w-0 flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-2 hover:shadow-xl sm:p-8 ${
                accents[index % accents.length]
              }`}
            >
              <div className="flex h-16 items-center">
                <Image
                  src={platform.logo}
                  alt={platform.name}
                  width={120}
                  height={50}
                  className="max-w-[120px] object-contain"
                />
              </div>

              <h3 className="mt-8 text-xl font-semibold text-slate-900">
                {platform.name}
              </h3>

              <p className="mt-4 flex-grow leading-7 text-slate-600">
                {platform.description}
              </p>

              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-700">
                View Platform
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-orange-500 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-blue-900/20 transition hover:-translate-y-0.5 hover:shadow-blue-900/30"
          >
            View All Products
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}