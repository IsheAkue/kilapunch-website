import { MessageCircle } from "lucide-react"

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/263786049770"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-2xl transition duration-300 hover:scale-110 hover:bg-green-600 sm:bottom-6 sm:right-6 sm:h-16 sm:w-16"
    >
      {/* Subtle attention ring — respects prefers-reduced-motion via motion-safe: */}
      <span className="absolute inset-0 rounded-full bg-green-500 motion-safe:animate-ping motion-safe:opacity-40" />

      <MessageCircle className="relative h-7 w-7 sm:h-8 sm:w-8" />
    </a>
  )
}