import { MessageCircle } from 'lucide-react'
import { buildWhatsAppLink, whatsappMessages } from '../data/business'

export default function WhatsAppFloat() {
  return (
    <a
      href={buildWhatsAppLink(whatsappMessages.general)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 md:bottom-7 md:right-7 z-40 flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#25D366] text-white shadow-xl shadow-coffee-dark/30 hover:scale-105 active:scale-95 transition-transform duration-300"
    >
      <MessageCircle size={28} strokeWidth={2.2} fill="white" />
    </a>
  )
}
