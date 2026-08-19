// Without an explicit `openGraph` block, Next.js does NOT copy a page's
// plain `title`/`description` into it — every page was silently inheriting
// the root layout's homepage-generic Open Graph copy, so sharing any page
// (a product, a service, the contact page) on social/WhatsApp showed the
// homepage's title and description instead of that page's own. This just
// mirrors the page's own title/description into openGraph + twitter so
// each page's social preview actually matches its content.
export function pageMetadata({ title, description }) {
  return {
    title,
    description,
    openGraph: { title, description },
    twitter: { title, description },
  }
}
