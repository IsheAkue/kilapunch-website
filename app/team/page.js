"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion"
import {
  X,
  ArrowRight,
  CheckCircle2,
  Calendar,
  Award,
  Layers,
} from "lucide-react"

// Turns a name into a DOM id so the Hero avatar row can scroll straight to
// a person's card ("Clive Bonda" -> "clive-bonda").
const slugify = (name) => name.toLowerCase().replace(/\s+/g, "-")

const scrollToPerson = (name) => {
  document.getElementById(slugify(name))?.scrollIntoView({
    behavior: "smooth",
    block: "center",
  })
}

const leadership = [
  {
    name: "Clavor Bonda",
    role: "Director & ERP Consultant",
    expertise: "Finance • ERP Strategy • Business Advisory",
    image: "/images/team/clive.jpg",
    bio: "Clive has over 20 years of experience in accounting, ERP implementation, financial management, and business consulting. He has successfully led numerous Sage ERP projects across Zimbabwe.",
    qualifications: [
      "ERP Implementation Specialist",
      "Financial Management Consultant",
      "Business Process Advisor",
    ],
  },
  {
    name: "Prince Tambwanaye",
    role: "Director & ERP Consultant",
    expertise: "ERP Consulting • Operations • Client Advisory",
    image: "/images/team/prince.jpg",
    bio: "Prince has extensive experience in ERP consulting, business operations, implementation planning, and client advisory services. He works closely with organizations to align systems with business objectives.",
    qualifications: [
      "ERP Consultant",
      "Operations Specialist",
      "Business Systems Advisor",
    ],
  },
]

const teamMembers = [
  {
    name: "Munashe Mtandwa",
    role: "Accounting & ERP Consultant",
    expertise: "Accounting • Reporting • Client Training",
    image: "/images/team/munashe.jpg",
    bio: "Munashe specializes in accounting systems, reporting, user training, and helping clients maximize the value of their ERP investments.",
    qualifications: [
      "Accounting Systems Consultant",
      "ERP Trainer",
      "Financial Reporting Specialist",
    ],
  },
  {
    name: "Sheakudzwe Moyo",
    role: "Technology & Systems Consultant",
    expertise: "Technology • Integration • Digital Solutions",
    image: "/images/team/sheakudzwe.jpg",
    bio: "Sheakudzwe focuses on technology solutions, systems integration, automation, and digital transformation initiatives.",
    qualifications: [
      "Systems Integration",
      "Digital Solutions",
      "Technology Consulting",
    ],
  },
]

const credibility = [
  {
    number: "2006",
    label: "Established",
    description:
      "Nearly two decades of supporting businesses with ERP and accounting solutions.",
    icon: Calendar,
  },
  {
    number: "20+",
    label: "Years of Leadership Experience",
    description:
      "Deep expertise in accounting, financial management, and ERP consulting.",
    icon: Award,
  },
  {
    number: "End-to-End",
    label: "ERP Services",
    description:
      "Sales, implementation, training, support, and consulting from one trusted partner.",
    icon: Layers,
  },
]

// Same alternating blue/orange rhythm used across the rest of the site.
const accents = [
  "bg-blue-50 text-blue-700",
  "bg-orange-50 text-orange-600",
]

// -----------------------------------------------------------------------------
// PersonCard — shared by both Leadership and Team sections, which previously
// duplicated this exact markup twice. The whole card is now one clickable,
// keyboard-accessible element rather than nesting a <button> inside a div.
// -----------------------------------------------------------------------------
function PersonCard({ person, onSelect, index, badge }) {
  return (
    <motion.div
      id={slugify(person.name)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      role="button"
      tabIndex={0}
      aria-haspopup="dialog"
      onClick={() => onSelect(person)}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault()
          onSelect(person)
        }
      }}
      className="group scroll-mt-28 cursor-pointer overflow-hidden rounded-[32px] border border-slate-200 bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
    >
      <div className="relative overflow-hidden">
        <Image
          src={person.image}
          alt={person.name}
          width={600}
          height={700}
          className="h-[300px] w-full object-cover object-top transition duration-700 group-hover:scale-105 sm:h-[380px] lg:h-[450px]"
        />

        {/* Subtle brand-tinted wash on hover */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-blue-600/30 via-transparent to-orange-500/10 opacity-0 transition duration-500 group-hover:opacity-100" />

        {badge && (
          <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-700 backdrop-blur-sm">
            {badge}
          </span>
        )}
      </div>

      <div className="p-6 sm:p-8">
        <h3 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          {person.name}
        </h3>

        <p className="mt-3 text-sm uppercase tracking-[0.15em] text-orange-500">
          {person.role}
        </p>

        <p className="mt-5 text-sm font-medium text-slate-500">
          {person.expertise}
        </p>

        <div className="mt-8 flex w-full items-center justify-between border-t border-slate-100 pt-6">
          <span className="text-sm font-semibold text-blue-700">
            View Profile
          </span>
          <ArrowRight className="h-4 w-4 text-blue-700 transition group-hover:translate-x-1" />
        </div>
      </div>
    </motion.div>
  )
}

// -----------------------------------------------------------------------------
// ProfileModal — now includes the photo, animates in/out, closes on Escape
// or backdrop click, and locks page scroll while open.
// -----------------------------------------------------------------------------
function ProfileModal({ person, onClose }) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose()
    }
    document.addEventListener("keydown", handleKeyDown)
    document.body.style.overflow = "hidden"

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = ""
    }
  }, [onClose])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${person.name} profile`}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm sm:p-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.97 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        onClick={(event) => event.stopPropagation()}
        className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white shadow-2xl"
      >
        <div className="relative">
          <Image
            src={person.image}
            alt={person.name}
            width={600}
            height={700}
            className="h-56 w-full object-cover object-top sm:h-64"
          />

          <button
            onClick={onClose}
            aria-label="Close profile"
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-slate-900 shadow-md transition hover:bg-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            {person.name}
          </h2>

          <p className="mt-2 text-sm font-semibold uppercase tracking-[0.15em] text-orange-500">
            {person.role}
          </p>

          <p className="mt-6 leading-8 text-slate-600">{person.bio}</p>

          <div className="mt-8">
            <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-slate-900">
              Areas of Expertise
            </h3>

            <ul className="mt-4 space-y-3">
              {person.qualifications?.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 rounded-xl bg-slate-50 p-4 text-slate-700"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-blue-600" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function TeamPage() {
  const [selectedPerson, setSelectedPerson] = useState(null)

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
          transition={{ duration: 0.7 }}
          className="relative mx-auto max-w-4xl px-6 text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-400">
            Our Team
          </p>

          <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
            The People Behind Kilapunch ERP Solutions
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            Since 2006, Kilapunch ERP Solutions has helped organizations
            improve operational efficiency through ERP implementation,
            accounting systems, payroll solutions, and business technology
            consulting.
          </p>

          {/* Interactive avatar row — click a face to jump straight to their
              profile card below, so the Hero connects to the content it's
              introducing instead of just sitting above it. */}
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            {[...leadership, ...teamMembers].map((person, index) => (
              <motion.button
                key={person.name}
                type="button"
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                  delay: 0.4 + index * 0.08,
                }}
                onClick={() => scrollToPerson(person.name)}
                className="group flex flex-col items-center gap-2"
              >
                <span
                  className={`h-16 w-16 overflow-hidden rounded-full ring-2 ring-offset-2 ring-offset-[#0B0F17] transition group-hover:scale-110 ${
                    index % 2 === 0 ? "ring-blue-500" : "ring-orange-500"
                  }`}
                >
                  <Image
                    src={person.image}
                    alt={person.name}
                    width={64}
                    height={64}
                    className="h-full w-full object-cover object-top"
                  />
                </span>
                <span className="text-xs text-slate-400 transition group-hover:text-white">
                  {person.name.split(" ")[0]}
                </span>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ============================= LEADERSHIP ============================= */}
      <section className="relative overflow-hidden py-20 lg:py-28">
        <div className="pointer-events-none absolute -left-24 top-1/3 h-[340px] w-[340px] rounded-full bg-blue-100/30 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
              Leadership Team
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 lg:text-4xl">
              Experience That Businesses Can Depend On
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
              Our team combines decades of experience in accounting, ERP
              consulting, financial management, business systems, and
              technology implementation.
            </p>
          </motion.div>

          <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-10 lg:grid-cols-2">
            {leadership.map((person, index) => (
              <PersonCard
                key={person.name}
                person={person}
                index={index}
                badge="Director"
                onSelect={setSelectedPerson}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ============================= TEAM ============================= */}
      <section className="relative overflow-hidden bg-slate-50 py-20 lg:py-28">
        <div className="pointer-events-none absolute -right-24 top-0 h-[340px] w-[340px] rounded-full bg-orange-100/40 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
              Our Team
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 lg:text-4xl">
              Supporting Clients Through Technology & Finance
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
              Our consultants combine accounting knowledge, ERP expertise,
              and technology skills to help clients implement, maintain,
              and maximize the value of their business systems.
            </p>
          </motion.div>

          <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
            {teamMembers.map((person, index) => (
              <PersonCard
                key={person.name}
                person={person}
                index={index}
                onSelect={setSelectedPerson}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ===================== COLLECTIVE EXPERTISE ===================== */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500"
          >
            Collective Expertise
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mt-4 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
          >
            Four Specialists, One Combined Skill Set
          </motion.h2>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {[...new Set(
              [...leadership, ...teamMembers].flatMap((p) => p.qualifications)
            )].map((qualification, index) => (
              <motion.span
                key={qualification}
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 18,
                  delay: index * 0.04,
                }}
                className={`rounded-full px-4 py-2 text-sm font-medium ${
                  accents[index % accents.length]
                }`}
              >
                {qualification}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* ============================= CREDIBILITY ============================= */}
      <section className="bg-slate-50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {credibility.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="min-w-0 rounded-3xl bg-white p-8 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div
                  className={`mx-auto flex h-12 w-12 items-center justify-center rounded-xl ${
                    accents[index % accents.length]
                  }`}
                >
                  <stat.icon className="h-6 w-6" />
                </div>

                <h3 className="mt-6 text-4xl font-bold text-slate-900">
                  {stat.number}
                </h3>

                <p className="mt-4 text-lg font-semibold text-slate-900">
                  {stat.label}
                </p>

                <p className="mt-3 text-slate-600">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
          <h2 className="text-3xl font-bold sm:text-4xl">
            Ready To Work With Our Team?
          </h2>

          <p className="mx-auto mt-6 text-slate-400">
            Speak with a Kilapunch consultant about your ERP or accounting
            needs.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-orange-500 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-blue-900/30 transition hover:-translate-y-0.5 hover:shadow-blue-900/50 sm:w-auto"
            >
              Request Consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>
      </section>

      <AnimatePresence>
        {selectedPerson && (
          <ProfileModal
            person={selectedPerson}
            onClose={() => setSelectedPerson(null)}
          />
        )}
      </AnimatePresence>
    </main>
  )
}