export const dynamic = 'force-static';

import { services } from "@/data/services"
import { products } from "@/data/products"

export default function sitemap() {
  const baseUrl = "https://kilapuncherp.co.zw"

  const staticPages = [
    "",
    "/about",
    "/services",
    "/products",
    "/industries",
    "/contact",
  ].map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
  }))

  const servicePages = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
  }))

  const productPages = products.map((product) => ({
    url: `${baseUrl}/products/${product.slug}`,
    lastModified: new Date(),
  }))

  return [
    ...staticPages,
    ...servicePages,
    ...productPages,
  ]
}