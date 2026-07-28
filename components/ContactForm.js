"use client"

import { useForm, ValidationError } from "@formspree/react"
import { Send, CheckCircle2 } from "lucide-react"

// Shared so every field gets identical focus/border treatment without
// repeating the same long class string six times.
const inputClass =
  "w-full rounded-xl border border-slate-300 px-5 py-4 text-slate-900 transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xbdebjre")

  // Previously missing entirely — a successful submission gave the visitor
  // no confirmation at all. This is the single most important state for a
  // lead-capture form to handle.
  if (state.succeeded) {
    return (
      <div className="mt-10 flex flex-col items-center rounded-2xl bg-blue-50 p-10 text-center">
        <CheckCircle2 className="h-12 w-12 text-blue-600" />
        <h4 className="mt-4 text-xl font-semibold text-slate-900">
          Thank you — your inquiry has been sent.
        </h4>
        <p className="mt-2 text-slate-600">
          We aim to respond within 1 business day.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="mt-10 space-y-6">
      {/* General/top-level errors (e.g. network or config issues) — the
          field-specific ValidationError components below only ever caught
          email/message errors, so a general failure had nowhere to show. */}
      <ValidationError errors={state.errors} />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-700">
            Full Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            required
            autoComplete="name"
            placeholder="Your name"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="company" className="mb-2 block text-sm font-medium text-slate-700">
            Company Name
          </label>
          <input
            id="company"
            type="text"
            name="company"
            autoComplete="organization"
            placeholder="Your company"
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
            autoComplete="email"
            placeholder="you@company.com"
            className={inputClass}
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>

        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-medium text-slate-700">
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            name="phone"
            autoComplete="tel"
            placeholder="+263 ..."
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="service" className="mb-2 block text-sm font-medium text-slate-700">
          Service Of Interest
        </label>
        {/* Previously defaulted silently to "ERP Implementation" — anyone
            who didn't touch this field would submit that as their interest
            even if their inquiry was about something else entirely. */}
        <select
          id="service"
          name="service"
          defaultValue=""
          className={inputClass}
        >
          <option value="" disabled>
            Select a service (optional)
          </option>
          <option>ERP Implementation</option>
          <option>Sage 200 Evolution</option>
          <option>Sage Intacct</option>
          <option>Sage Payroll</option>
          <option>Business Automation</option>
          <option>Accounting Systems</option>
          <option>Remote IT Support</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-700">
          Message
        </label>
        <textarea
          id="message"
          rows={6}
          name="message"
          required
          placeholder="Tell us about your requirements..."
          className={inputClass}
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </div>

      <button
        type="submit"
        disabled={state.submitting}
        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-orange-500 px-8 py-4 font-semibold text-white shadow-lg shadow-blue-900/20 transition hover:-translate-y-0.5 hover:shadow-blue-900/30 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {state.submitting ? "Sending..." : "Send Inquiry"}
        {!state.submitting && <Send className="h-4 w-4" />}
      </button>
    </form>
  )
}
