import { MessageCircle } from 'lucide-react'
import Button from './ui/Button'
import Reveal from './ui/Reveal'
import { buildWhatsAppLink, whatsappMessages } from '../data/business'

export default function Open24() {
  return (
    <section className="relative py-24 md:py-32 bg-coffee-dark overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(224,166,74,0.14),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(224,166,74,0.10),transparent_50%)]"
      />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8 grid lg:grid-cols-2 gap-14 items-center">
        <Reveal className="flex flex-col gap-6 order-2 lg:order-1">
          <span className="text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-gold-light">
            Sempre aberta
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-semibold leading-tight text-cream">
            Seu horário não precisa ser o horário da padaria.
          </h2>
          <p className="text-base md:text-lg text-cream/70 leading-relaxed max-w-md">
            De manhã cedo, depois do trabalho ou naquele momento em que bate aquela
            fome inesperada: a Mais Kí Pão está aberta 24 horas.
          </p>
          <div className="pt-2">
            <Button
              href={buildWhatsAppLink(whatsappMessages.general)}
              target="_blank"
              rel="noopener noreferrer"
              variant="gold"
              size="lg"
              icon={MessageCircle}
            >
              Falar com a padaria
            </Button>
          </div>
        </Reveal>

        <Reveal delay={120} className="order-1 lg:order-2 flex justify-center">
          <div className="relative flex flex-col items-center justify-center text-center">
            <span className="font-display text-[7rem] md:text-[11rem] leading-none font-bold text-gold drop-shadow-[0_0_40px_rgba(224,166,74,0.35)]">
              24
            </span>
            <span className="text-xl md:text-2xl font-semibold tracking-[0.3em] text-cream -mt-2 md:-mt-4">
              HORAS
            </span>
            <span className="mt-3 text-sm md:text-base font-medium uppercase tracking-[0.25em] text-cream/55">
              Aberta
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
