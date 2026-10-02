import Reveal from './Reveal'

export default function SectionTitle({ eyebrow, title, subtitle, align = 'left', light = false }) {
  const alignClasses = align === 'center' ? 'text-center items-center' : 'text-left items-start'

  return (
    <Reveal className={`flex flex-col gap-4 ${alignClasses}`}>
      {eyebrow && (
        <span
          className={`text-xs md:text-sm font-semibold uppercase tracking-[0.2em] ${
            light ? 'text-gold-light' : 'text-caramel'
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-display text-3xl md:text-5xl font-semibold leading-tight max-w-xl ${
          light ? 'text-cream' : 'text-coffee-dark'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-base md:text-lg max-w-md ${
            light ? 'text-cream/75' : 'text-coffee/70'
          }`}
        >
          {subtitle}
        </p>
      )}
    </Reveal>
  )
}
