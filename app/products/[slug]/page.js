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
