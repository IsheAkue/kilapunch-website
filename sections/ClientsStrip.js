// Deliberately understated — a plain text row rather than a logo grid.
// With two named clients today, a large showcase section would read as
// sparse where it should read as quietly confident. "Including" is also
// literal, not just softening language: it doesn't claim this is the
// complete client list.
export default function ClientsStrip() {
  const clients = ["Westgate Industrial College", "Shaesham Investments"]

  return (
    <section className="border-y border-slate-200 bg-slate-50 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-3 px-6 text-center sm:flex-row sm:justify-center sm:gap-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
          Trusted By
        </p>

        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
          {clients.map((client) => (
            <span key={client} className="text-sm font-medium text-slate-700">
              {client}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
