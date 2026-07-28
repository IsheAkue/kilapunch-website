import { notFound } from "next/navigation"
import { services } from "@/data/services"
import ServiceDetailContent from "./ServiceDetailContent"
import { services } from "@/data/services"; // or your services data file

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
    title: `${service.title} | Kilapunch ERP Solutions`,
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

  return (
    <ServiceDetailContent service={service} relatedServices={relatedServices} />
  )
}
