export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  const variants = {
    primary:
      "bg-blue-700 text-white hover:bg-blue-800 border border-blue-700",

    secondary:
      "border border-slate-300 bg-white text-slate-700 hover:border-slate-400 hover:bg-slate-50",
  }

  return (
    <button
      {...props}
      className={`rounded-xl px-7 py-4 text-sm font-semibold shadow-sm transition-all duration-300 hover:-translate-y-0.5 ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  )
}