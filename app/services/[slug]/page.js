import { notFound } from "next/navigation"
import { services } from "@/data/services"
import ServiceDetailContent from "./ServiceDetailContent"

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const service = services.find((item) => item.slug === slug)

  if (!service) return {}

  return {
    title: service.title,
    description: service.shortDescription,
  }
}

export default async function ServicePage({ params }) {
  const { slug } = await params
  const service = services.find((item) => item.slug === slug)

  if (!service) {
    notFound()
  }

  const relatedServices = services
    .filter((item) => item.slug !== slug)
    .slice(0, 3)

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.shortDescription,
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
      <ServiceDetailContent service={service} relatedServices={relatedServices} />
    </>
  )
}