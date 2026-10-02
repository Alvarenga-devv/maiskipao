import SectionTitle from './ui/SectionTitle'
import Reveal from './ui/Reveal'
import { moments } from '../data/business'

export default function Moments() {
  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionTitle
          eyebrow="A qualquer momento"
          title="Feito para o seu momento."
          subtitle="Do primeiro café da manhã à fome que bate de madrugada, sempre tem algo fresquinho esperando por você."
        />

        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {moments.map((moment, i) => (
            <Reveal key={moment.id} delay={i * 90} className="group">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-md shadow-coffee-dark/10">
                <img
                  src={moment.image}
                  alt={moment.title}
                  loading="lazy"
                  width={600}
                  height={800}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-coffee-dark/85 via-coffee-dark/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4 md:p-5 flex flex-col gap-1">
                  <h3 className="font-display text-lg md:text-xl font-semibold text-cream leading-snug">
                    {moment.title}
                  </h3>
                  <p className="text-xs md:text-sm text-cream/75 leading-snug">
                    {moment.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
