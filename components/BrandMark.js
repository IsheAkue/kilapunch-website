// The Kilapunch mark, as a plain inline SVG rather than an <Image> — this
// avoids Next.js's SVG-via-Image restrictions (which require enabling
// dangerouslyAllowSVG in next.config.js) and stays crisp at any size since
// it's vector, not a raster file. Used by both Navbar and Footer.
export default function BrandMark({ className = "h-10 w-10" }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      role="img"
      aria-label="Kilapunch logo"
    >
      <rect x="2" y="2" width="60" height="60" rx="16" fill="#0B0F17" />
      <path d="M28 12 L52 32 L28 52 L36 32 Z" fill="#1D4ED8" />
      <path d="M14 12 L38 32 L14 52 L22 32 Z" fill="#F97316" />
    </svg>
  )
}
