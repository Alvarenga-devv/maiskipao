import { Star } from 'lucide-react'
import Reveal from './ui/Reveal'
import { business } from '../data/business'

const STATS = [
  {
    value: (
      <span className="flex items-center gap-1 text-gold">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={22} fill="currentColor" strokeWidth={0} />
        ))}
      </span>
    ),
    label: `${business.rating} no Google`,
  },
  { value: business.reviewsCount, label: 'avaliações' },
  { value: '24H', label: 'aberta todos os dias' },
  { value: business.priceRange, label: 'faixa de preço' },
]

export default function TrustBar() {
  return (
    <section className="border-y border-coffee/10 bg-cream-dark/60">
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-8 md:py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
          {STATS.map((stat, i) => (
            <Reveal
              key={stat.label}
              delay={i * 70}
              className="flex flex-col items-center md:items-start gap-1.5 text-center md:text-left"
            >
              <div className="font-display text-2xl md:text-3xl font-bold text-coffee-dark">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-coffee/60 font-medium">{stat.label}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
