import ProductsContent from "./ProductsContent"
import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata({
  title: "Sage Evolution, Sage Intacct & Accounting Software Zimbabwe",
  description:
    "Explore Sage Evolution, Sage Intacct, Sage Payroll, Sage 50 Pastel and Palladium Accounting solutions supported by Kilapunch ERP consultants.",
})

export default function ProductsPage() {
  return <ProductsContent />
}
