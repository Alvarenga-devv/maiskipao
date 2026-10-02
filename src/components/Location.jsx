import { MapPin, MessageCircle, Phone } from 'lucide-react'
import SectionTitle from './ui/SectionTitle'
import Reveal from './ui/Reveal'
import Button from './ui/Button'
import { business, buildWhatsAppLink, googleMapsLink, whatsappMessages } from '../data/business'

export default function Location() {
  return (
    <section id="localizacao" className="py-20 md:py-28 bg-cream">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionTitle eyebrow="Onde estamos" title="Estamos pertinho de você." />

        <div className="mt-12 grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Botão "Como chegar" tem prioridade visual no mobile */}
          <Reveal className="order-2 lg:order-1 flex flex-col gap-6 bg-cream-dark/60 rounded-2xl p-7 md:p-9 ring-1 ring-coffee/8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-11 h-11 rounded-full bg-caramel/15 flex items-center justify-center">
                <MapPin size={20} className="text-caramel-dark" />
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-xs font-semibold uppercase tracking-[0.15em] text-coffee/45">
                  Endereço
                </span>
                <p className="text-coffee-dark font-medium leading-relaxed">
                  {business.address.street}
                  <br />
                  {business.address.neighborhood}, {business.address.city} - {business.address.state}
                  <br />
                  {business.address.zip}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-11 h-11 rounded-full bg-caramel/15 flex items-center justify-center">
                <Phone size={20} className="text-caramel-dark" />
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-xs font-semibold uppercase tracking-[0.15em] text-coffee/45">
                  Telefone
                </span>
                <p className="text-coffee-dark font-medium">{business.phoneDisplay}</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mt-2">
              <Button
                href={googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="lg"
                icon={MapPin}
                className="flex-1"
              >
                Como chegar
              </Button>
              <Button
                href={buildWhatsAppLink(whatsappMessages.general)}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                size="lg"
                icon={MessageCircle}
                className="flex-1"
              >
                Falar no WhatsApp
              </Button>
            </div>
          </Reveal>

          {/* Mapa visual */}
          <Reveal delay={100} className="order-1 lg:order-2">
            <a
              href={googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir localização no Google Maps"
              className="group relative block h-full min-h-[280px] rounded-2xl overflow-hidden ring-1 ring-coffee/8"
            >
              <div className="absolute inset-0 bg-[linear-gradient(135deg,#E8D4BC_0%,#F1E6D3_50%,#E0A64A_140%)]" />
              <svg
                aria-hidden="true"
                className="absolute inset-0 w-full h-full opacity-30"
                viewBox="0 0 400 300"
                preserveAspectRatio="none"
              >
                <path d="M0 80 H400" stroke="#4A2E1A" strokeWidth="2" />
                <path d="M0 180 H400" stroke="#4A2E1A" strokeWidth="2" />
                <path d="M120 0 V300" stroke="#4A2E1A" strokeWidth="2" />
                <path d="M280 0 V300" stroke="#4A2E1A" strokeWidth="2" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-14 h-14 rounded-full bg-coffee-dark flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
                    <MapPin size={26} className="text-gold" fill="currentColor" strokeWidth={0} />
                  </div>
                  <span className="bg-cream/95 rounded-full px-4 py-2 text-sm font-semibold text-coffee-dark shadow-md">
                    Ver no Google Maps
                  </span>
                </div>
              </div>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
