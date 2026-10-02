import SectionTitle from './ui/SectionTitle'
import Reveal from './ui/Reveal'
import { galleryImages } from '../data/business'

export default function Gallery() {
  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionTitle
          align="center"
          eyebrow="Vitrine viva"
          title="Tem sempre algo gostoso esperando por você."
          subtitle="Pães, doces, bolos, salgados, café e biscoitos — fresquinhos, o dia inteiro."
        />

        <div className="mt-12 grid grid-cols-3 md:grid-cols-6 gap-3 md:gap-4">
          {galleryImages.map((src, i) => (
            <Reveal
              key={src}
              delay={i * 60}
              className={`relative overflow-hidden rounded-xl md:rounded-2xl ${
                i % 5 === 0 ? 'col-span-2 row-span-2 aspect-square' : 'aspect-square'
              }`}
            >
              <img
                src={src}
                alt="Produtos fresquinhos da Mais Kí Pão"
                loading="lazy"
                width={500}
                height={500}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
