import Link from "next/link"
import BrandMark from "@/components/BrandMark"
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  ChevronRight,
  Shield,
} from "lucide-react"

// lucide-react dropped brand/logo icons (Facebook, LinkedIn, etc.) in
// recent versions over trademark concerns, so these are small local SVGs
// instead of a package import.
function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.13 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.91h-2.34V22c4.78-.81 8.44-4.94 8.44-9.94Z" />
    </svg>
  )
}

function LinkedinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  )
}

const quickLinks = [
  ["Home", "/"],
  ["About Us", "/about"],
  ["Products", "/products"],
  ["Services", "/services"],
  ["Industries", "/industries"],
  ["Contact", "/contact"],
]

const products = [
  { name: "Sage 200 Evolution", slug: "sage-200-evolution" },
  { name: "Sage Intacct", slug: "sage-intacct" },
  { name: "Sage Payroll", slug: "sage-payroll" },
  { name: "Sage 50 Pastel", slug: "sage-50-pastel" },
  { name: "Palladium Accounting", slug: "palladium-accounting" },
]

const services = [
  { name: "ERP Implementation", slug: "erp-implementation" },
  { name: "ERP Support & Maintenance", slug: "sage-evolution-support" },
  { name: "Business Automation", slug: "business-automation" },
  { name: "Accounting Systems Consulting", slug: "accounting-systems" },
  { name: "Remote IT Support", slug: "remote-it-support" },
  { name: "Infrastructure Support", slug: "infrastructure-support" },
]

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {/* Company */}
          <div className="min-w-0 xl:col-span-1">
            <div className="flex items-center gap-3">
              <BrandMark className="h-12 w-12 shrink-0" />
              <h3 className="text-lg font-bold text-slate-900">
                Kilapunch ERP Solutions
              </h3>
            </div>

            <div className="mt-6 h-1 w-16 bg-orange-500" />

            <p className="mt-8 text-base leading-8 text-slate-600">
              Delivering ERP software, accounting systems, business
              automation, consulting, training, and support services across
              Zimbabwe.
            </p>
          </div>

          {/* Quick Links */}
          <div className="min-w-0">
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-900">
              Quick Links
            </h4>

            <div className="mt-4 h-1 w-10 bg-orange-500" />

            <div className="mt-8 space-y-5">
              {quickLinks.map(([name, href]) => (
                <Link
                  key={name}
                  href={href}
                  className="flex items-center gap-2 text-slate-700 transition hover:text-blue-700"
                >
                  <ChevronRight className="h-4 w-4 shrink-0" />
                  {name}
                </Link>
              ))}
            </div>
          </div>

          {/* Products */}
          <div className="min-w-0">
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-900">
              Products
            </h4>

            <div className="mt-4 h-1 w-10 bg-orange-500" />

            <ul className="mt-8 space-y-5 text-slate-700">
              {products.map((product) => (
                <li key={product.slug}>
                  <Link
                    href={`/products/${product.slug}`}
                    className="transition hover:text-blue-700"
                  >
                    • {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="min-w-0">
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-900">
              Services
            </h4>

            <div className="mt-4 h-1 w-10 bg-orange-500" />

            <ul className="mt-8 space-y-5 text-slate-700">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="transition hover:text-blue-700"
                  >
                    • {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact — border/padding/min-width now only apply at lg+, where
              this column actually sits beside a sibling. Unconditional
              min-w-[260px] on a stacked mobile column was a real overflow
              risk (same class of bug as the Hero grid issue). */}
          <div className="min-w-0 lg:border-l lg:border-slate-200 lg:min-w-[260px] lg:pl-8">
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-900">
              Contact
            </h4>

            <div className="mt-4 h-1 w-10 bg-orange-500" />

            <div className="mt-8 space-y-7">
              {/* Email */}
              <a
                href="mailto:kilapunch.erpsolutions@gmail.com"
                className="flex items-start gap-4 text-slate-700"
              >
                <Mail className="mt-1 h-5 w-5 shrink-0" />
                <span className="break-all text-sm">
                  kilapunch.erpsolutions@gmail.com
                </span>
              </a>

              {/* Phones */}
              <div className="flex items-start gap-4">
                <Phone className="mt-1 h-5 w-5 shrink-0" />
                <div className="text-sm leading-7 text-slate-700">
                  <div>+263 774 708 347</div>
                  <div>+263 786 049 770</div>
                  <div>+27 710 367 057</div>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 h-5 w-5 shrink-0" />
                <span className="text-sm leading-7 text-slate-700">
                  Suite 206, Rothbaths Mansions, Sixth Street, Gweru, Zimbabwe
                </span>
              </div>

              {/* WhatsApp */}
              <a
                href="https://wa.me/263786049770"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-slate-700 transition hover:text-blue-700"
              >
                <MessageCircle className="h-5 w-5 shrink-0 text-green-600" />
                WhatsApp Business
              </a>

              {/* Social */}
              <div className="border-t border-slate-200 pt-6">
                <p className="text-sm font-bold uppercase tracking-widest">
                  Follow Us
                </p>

                <div className="mt-5 flex items-center gap-5">
                  <a
                    href="https://www.facebook.com/profile.php?id=61590132686807"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-slate-700 transition hover:text-blue-700"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white">
                      <FacebookIcon className="h-4 w-4" />
                    </span>
                    Facebook
                  </a>

                  <a
                    href="https://www.linkedin.com/in/kilapunch-erp-solutions-287175185"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-slate-700 transition hover:text-blue-700"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-700 text-white">
                      <LinkedinIcon className="h-4 w-4" />
                    </span>
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar — same exact dark brand color as the rest of the site */}
      <div className="border-t border-white/10 bg-brand-navy text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 md:flex-row md:items-center md:justify-between lg:px-8">
          <div className="flex items-center gap-3">
            <Shield className="h-5 w-5 shrink-0 text-orange-400" />
            <p className="text-sm">
              © {new Date().getFullYear()} Kilapunch ERP Solutions. All
              rights reserved.
            </p>
          </div>

          <p className="text-sm text-slate-300">
            Established 2006 • ERP Specialists • Business Technology
            Solutions
          </p>
        </div>
      </div>
    </footer>
  )
}
