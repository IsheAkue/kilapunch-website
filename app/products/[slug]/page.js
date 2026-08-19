import { notFound } from "next/navigation"
import { products } from "@/data/products"
import ProductDetailContent from "./ProductDetailContent"

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const product = products.find((item) => item.slug === slug)

  if (!product) return {}

  return {
    title: product.name,
    description: product.shortDescription,
  }
}

export default async function ProductPage({ params }) {
  const { slug } = await params
  const product = products.find((item) => item.slug === slug)

  if (!product) {
    notFound()
  }

  const relatedProducts = products
    .filter((item) => item.slug !== slug)
    .slice(0, 3)

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: product.name,
    description: product.shortDescription,
    provider: {
      "@type": "LocalBusiness",
      name: "Kilapunch ERP Solutions",
      url: "https://kilapuncherp.co.zw",
    },
    areaServed: "ZW",
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <ProductDetailContent product={product} relatedProducts={relatedProducts} />
    </>
  )
}
