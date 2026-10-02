import { ArrowUpRight } from 'lucide-react'
import SectionTitle from './ui/SectionTitle'
import Reveal from './ui/Reveal'
import { productHighlights, buildWhatsAppLink, whatsappMessages } from '../data/business'

export default function Menu() {
  return (
    <section id="destaques" className="py-20 md:py-28 bg-cream-dark/50">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionTitle
          eyebrow="Vitrine"
          title="Os favoritos da Mais Kí Pão"
          subtitle="Alguns dos sabores que fazem parte da nossa vitrine."
        />

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {productHighlights.map((product, i) => (
            <Reveal key={product.id} delay={(i % 4) * 80} className="h-full">
              <article className="group h-full flex flex-col bg-cream rounded-2xl overflow-hidden shadow-sm shadow-coffee-dark/5 ring-1 ring-coffee/8 hover:ring-coffee/20 hover:shadow-xl hover:shadow-coffee-dark/10 transition-all duration-400">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    width={500}
                    height={375}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                </div>
                <div className="flex flex-col flex-1 p-5 gap-2.5">
                  <h3 className="font-display text-lg font-semibold text-coffee-dark leading-snug">
                    {product.name}
                  </h3>
                  <p className="text-sm text-coffee/65 leading-relaxed flex-1">
                    {product.description}
                  </p>
                  <a
                    href={buildWhatsAppLink(whatsappMessages.product)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-caramel-dark hover:text-coffee-dark transition-colors w-fit"
                  >
                    Consultar
                    <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
