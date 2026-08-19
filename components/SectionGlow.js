// The ambient background treatment used on every dark (bg-brand-navy) hero
// and CTA section sitewide — was copy-pasted verbatim into 7 files. Kept as
// two variants rather than one because they're genuinely different shapes
// (two corner blobs vs. one centered blob), not just different props.
const DOT_GRID_STYLE = {
  backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
  backgroundSize: "28px 28px",
}

export function HeroGlow({ blueSize = 400, orangeSize = 350 }) {
  return (
    <>
      <div
        className="pointer-events-none absolute -left-24 top-0 rounded-full bg-blue-700/25 blur-[120px]"
        style={{ height: blueSize, width: blueSize }}
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-0 rounded-full bg-orange-600/20 blur-[120px]"
        style={{ height: orangeSize, width: orangeSize }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={DOT_GRID_STYLE}
      />
    </>
  )
}

export function CTAGlow() {
  return (
    <>
      <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-blue-700/20 blur-[120px]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={DOT_GRID_STYLE}
      />
    </>
  )
}
