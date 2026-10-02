import { MessageCircle, MapPin } from 'lucide-react'
import Button from './ui/Button'
import Reveal from './ui/Reveal'
import { buildWhatsAppLink, googleMapsLink, whatsappMessages } from '../data/business'

export default function FinalCTA() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1600&auto=format&fit=crop"
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-coffee-dark/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-coffee-dark via-coffee-dark/70 to-coffee-dark/50" />
      </div>

      <div className="relative mx-auto max-w-3xl px-5 md:px-8 text-center flex flex-col items-center gap-6">
        <Reveal>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-cream leading-tight">
            Deu vontade? Passe na Mais Kí Pão.
          </h2>
        </Reveal>
        <Reveal delay={90}>
          <p className="text-base md:text-lg text-cream/75">
            Estamos abertos 24 horas para receber você.
          </p>
        </Reveal>
        <Reveal delay={180} className="flex flex-wrap justify-center gap-3 pt-3">
          <Button
            href={buildWhatsAppLink(whatsappMessages.final)}
            target="_blank"
            rel="noopener noreferrer"
            variant="gold"
            size="lg"
            icon={MessageCircle}
          >
            Falar com a Mais Kí Pão
          </Button>
          <Button
            href={googleMapsLink}
            target="_blank"
            rel="noopener noreferrer"
            variant="ghost"
            size="lg"
            icon={MapPin}
          >
            Como chegar
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
