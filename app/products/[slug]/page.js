import { notFound } from "next/navigation"
import { products } from "@/data/products"
import ProductDetailContent from "./ProductDetailContent"

// Add this exported function to app/products/[slug]/page.js

export async function generateStaticParams() {
  return [
    { slug: 'sage-200-evolution' },
    { slug: 'sage-intacct' },
    { slug: 'sage-payroll' },
    { slug: 'sage-50-pastel' },
    { slug: 'palladium-accounting' },
  ];
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const product = products.find((item) => item.slug === slug)

  if (!product) return {}

  return {
    title: `${product.name} | Kilapunch ERP Solutions`,
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

  return (
    <ProductDetailContent product={product} relatedProducts={relatedProducts} />
  )
}
