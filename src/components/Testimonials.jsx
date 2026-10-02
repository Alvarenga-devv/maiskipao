import { Star, Quote } from 'lucide-react'
import SectionTitle from './ui/SectionTitle'
import Reveal from './ui/Reveal'
import Button from './ui/Button'
import { business, googleMapsLink } from '../data/business'

const HIGHLIGHTS = [
  business.googleHighlight,
  'Padaria com boa variedade de pães, bolos e lanches.',
  'Produtos fresquinhos disponíveis ao longo do dia.',
]

export default function Testimonials() {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-cream-dark/50">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <SectionTitle eyebrow="Reputação" title="Quem conhece, avalia." />

          <Reveal delay={100} className="flex items-center gap-4 bg-cream rounded-2xl ring-1 ring-coffee/10 px-6 py-4 w-fit">
            <span className="font-display text-3xl font-bold text-coffee-dark">
              {business.rating}
            </span>
            <div className="flex flex-col gap-1">
              <span className="flex text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
                ))}
              </span>
              <span className="text-xs text-coffee/60">
                {business.reviewsCount} avaliações no Google
              </span>
            </div>
          </Reveal>
        </div>

        <p className="mt-6 text-xs font-semibold uppercase tracking-[0.15em] text-coffee/45">
          Destaques das avaliações no Google
        </p>

        <div className="mt-5 grid md:grid-cols-3 gap-5">
          {HIGHLIGHTS.map((text, i) => (
            <Reveal key={text} delay={i * 90}>
              <div className="h-full flex flex-col gap-4 bg-cream rounded-2xl p-6 ring-1 ring-coffee/8">
                <Quote size={26} className="text-gold" strokeWidth={1.5} />
                <p className="text-coffee-dark/85 leading-relaxed text-[0.95rem]">
                  “{text}”
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200} className="mt-10 flex justify-center">
          <Button
            href={googleMapsLink}
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
          >
            Confira todas as avaliações no Google
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
