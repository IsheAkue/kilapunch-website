import { services } from "@/data/services"


const products = [
  "sage-200-evolution",
  "sage-intacct",
  "sage-payroll",
  "sage-50-pastel",
  "palladium-accounting",
]


export default function sitemap() {


  const baseUrl = "https://kilapuncherp.co.zw"



  const staticPages = [

    "",

    "/services",

    "/products",

    "/industries",

    "/contact",

    "/team",

  ].map((page) => ({

    url: `${baseUrl}${page}`,

    lastModified: new Date(),

  }))





  const servicePages = services.map((service) => ({

    url:
      `${baseUrl}/services/${service.slug}`,

    lastModified:
      new Date(),

  }))





  const productPages = products.map((product) => ({

    url:
      `${baseUrl}/products/${product}`,

    lastModified:
      new Date(),

  }))





  return [

    ...staticPages,

    ...servicePages,

    ...productPages,

  ]

}