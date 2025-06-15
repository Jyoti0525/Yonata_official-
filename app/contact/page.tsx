import type { Metadata } from "next"
import ContactPageClient from "./ContactPageClient"

export const metadata: Metadata = {
  title: "Contact Us - Yonata.ai",
  description: "Start Your AI Journey Today",
}

export default function ContactPage() {
  return <ContactPageClient />
}
