import Link from "next/link"
import Image from "next/image"


export default function AboutSection() {
  return (
    <section
      id="about"
      className=" relative bg-white py-32 lg:py-36"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <div className="mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2 lg:px-8">

        <div className="relative">
          <div className="overflow-hidden rounded-[2rem] shadow-xl">
            <Image
              src="/images/website/about-image.jpg"
              alt="ERP Consulting"
              width={700}
              height={700}
              className="h-[600px] w-full object-cover"
            />
          </div>

          <div className="absolute bottom-8 left-8 rounded-2xl bg-white p-6 shadow-xl">
            <p className="text-sm font-semibold text-orange-500">
              Since 2006
            </p>

            <h3 className="mt-2 text-xl font-bold text-slate-900">
              Trusted ERP & Business Systems Partner
            </h3>
          </div>
        </div>

          <div>

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
                About Kilapunch
              </p>

              <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 lg:text-4xl">
                Nearly Two Decades Of Helping Businesses Improve Financial & Operational Control
              </h2>

              <p className="mt-8 text-lg leading-8 text-slate-600">
                Since 2006, Kilapunch ERP Solutions has partnered with businesses
                across Zimbabwe to deliver Sage ERP, accounting, payroll, and business
                management solutions that improve visibility, efficiency, and decision-making.
              </p>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                We don't simply supply software. We help organizations select the
                right solutions, implement them successfully, train users, and provide
                ongoing support as business requirements evolve.
              </p>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Our leadership team combines decades of experience in accounting,
                financial management, ERP consulting, and business technology,
                enabling us to bridge the gap between business objectives and the
                systems that support them.
              </p>

              <div className="mt-10 grid grid-cols-2 gap-6">

                <div className="rounded-2xl bg-slate-50 p-6">
                  <p className="text-3xl font-bold  text-blue-700">
                    2006
                  </p>

                  <p className="mt-2 text-slate-600">
                    Established
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-50 p-6">
                  <p className="text-3xl font-bold text-blue-700">
                    25+
                  </p>

                  <p className="mt-2 text-slate-600">
                    Years Leadership Experience
                  </p>
                </div>

              </div>

            <div className="mt-12">
             <Link
              href="/team"
              className="inline-flex rounded-xl bg-blue-700 px-6 py-4 text-sm font-semibold text-white transition hover:bg-blue-800"
            >
              Meet The Team
            </Link>
            </div>

            </div>

      </div>

    </section>
  )
}