import { MessageCircle, MapPin, Star } from 'lucide-react'
import Button from './ui/Button'
import Reveal from './ui/Reveal'
import { business, buildWhatsAppLink, googleMapsLink, whatsappMessages } from '../data/business'

export default function Hero() {
  return (
    <section id="inicio" className="relative pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden">
      {/* textura de fundo sutil */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_85%_15%,rgba(224,166,74,0.16),transparent_55%)]"
      />

      <div className="mx-auto max-w-7xl px-5 md:px-8 grid lg:grid-cols-2 gap-12 lg:gap-10 items-center">
        {/* Coluna esquerda */}
        <div className="flex flex-col gap-7 max-w-xl">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-coffee-dark text-cream text-xs font-semibold uppercase tracking-[0.15em] px-4 py-2 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
              Aberta 24 horas
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.08] text-coffee-dark">
              Sabor fresquinho a<br className="hidden sm:block" /> qualquer hora.
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="text-lg md:text-xl text-coffee/75 leading-relaxed">
              Pães, bolos, lanches e muito mais preparados para fazer parte do seu dia.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Button
                href={buildWhatsAppLink(whatsappMessages.hero)}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="lg"
                icon={MessageCircle}
              >
                Falar no WhatsApp
              </Button>
              <Button
                href={googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                size="lg"
                icon={MapPin}
              >
                Como chegar
              </Button>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-3 text-sm text-coffee/70">
              <span className="flex items-center gap-1.5 font-medium">
                <span className="flex text-gold">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={15} fill="currentColor" strokeWidth={0} />
                  ))}
                </span>
                {business.rating} no Google
              </span>
              <span className="w-px h-4 bg-coffee/15" />
              <span className="font-medium">{business.reviewsCount} avaliações</span>
              <span className="w-px h-4 bg-coffee/15" />
              <span className="font-medium">Aberta 24 horas</span>
            </div>
          </Reveal>
        </div>

        {/* Coluna direita — imagem */}
        <Reveal delay={200} className="relative">
          <div className="relative aspect-[4/5] md:aspect-[5/6] lg:aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl shadow-coffee-dark/25">
            <img
              src="https://images.unsplash.com/photo-1598373182133-52452f7691ef?q=80&w=1400&auto=format&fit=crop"
              alt="Pães artesanais fresquinhos recém-saídos do forno"
              className="absolute inset-0 w-full h-full object-cover"
              loading="eager"
              fetchPriority="high"
              width={1400}
              height={1680}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-coffee-dark/50 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-transparent" />

            <div className="absolute bottom-5 left-5 right-5 md:bottom-6 md:left-6 md:right-6 bg-cream/95 backdrop-blur-sm rounded-2xl p-4 md:p-5 flex items-center gap-3 shadow-lg">
              <div className="flex-shrink-0 w-11 h-11 rounded-full bg-gold/20 flex items-center justify-center">
                <Star size={20} className="text-gold" fill="currentColor" strokeWidth={0} />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-semibold text-coffee-dark text-base leading-tight">
                  {business.rating} de 5
                </span>
                <span className="text-xs text-coffee/60">{business.reviewsCount} avaliações no Google</span>
              </div>
            </div>
          </div>

          {/* elemento decorativo */}
          <div
            aria-hidden="true"
            className="hidden md:block absolute -top-6 -right-6 w-28 h-28 rounded-full bg-gold/25 blur-2xl -z-10"
          />
        </Reveal>
      </div>
    </section>
  )
}
