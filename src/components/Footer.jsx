import { business } from '../data/business'

const LINKS = [
  { label: 'Início', href: '#inicio' },
  { label: 'Destaques', href: '#destaques' },
  { label: 'Localização', href: '#localizacao' },
  { label: 'Contato', href: '#sobre' },
]

export default function Footer() {
  return (
    <footer className="bg-coffee-dark text-cream/70">
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-14 flex flex-col md:flex-row md:items-start md:justify-between gap-10">
        <div className="flex flex-col gap-2 max-w-sm">
          <span className="font-display text-xl font-bold text-cream">Mais Kí Pão</span>
          <p className="text-sm leading-relaxed">Padaria aberta 24 horas.</p>
          <p className="text-sm leading-relaxed mt-2">
            {business.address.street} - {business.address.neighborhood}
            <br />
            {business.address.city} - {business.address.state}
          </p>
          <p className="text-sm mt-1">{business.phoneDisplay}</p>
        </div>

        <nav className="flex flex-col gap-2.5">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm hover:text-cream transition-colors w-fit"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="border-t border-cream/10 px-5 md:px-8 py-6 text-center text-xs text-cream/45">
        © 2026 Mais Kí Pão. Todos os direitos reservados.
      </div>
    </footer>
  )
}
