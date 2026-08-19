import IndustriesClient from "./IndustriesClient"
import { pageMetadata } from "@/lib/seo"


export const metadata = pageMetadata({
  title: "Industries We Serve",
  description:
    "Kilapunch provides ERP and accounting solutions for retail, manufacturing, distribution, wholesale and growing businesses.",
})


export default function IndustriesPage(){

return <IndustriesClient />

}