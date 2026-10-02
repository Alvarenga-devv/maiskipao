import { useEffect, useState } from 'react'
import { Menu, X, MessageCircle } from 'lucide-react'
import Button from './ui/Button'
import { buildWhatsAppLink, whatsappMessages } from '../data/business'

const NAV_LINKS = [
  { label: 'Início', href: '#inicio' },
  { label: 'Destaques', href: '#destaques' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Localização', href: '#localizacao' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const handleNavClick = () => setMenuOpen(false)

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-cream/90 backdrop-blur-md shadow-[0_1px_0_0_rgba(74,46,26,0.08)] py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8 flex items-center justify-between">
        <a href="#inicio" className="font-display text-xl md:text-2xl font-bold text-coffee-dark tracking-tight">
          Mais Kí Pão
        </a>

        <nav className="hidden md:flex items-center gap-9">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-coffee/80 hover:text-coffee-dark transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button
            href={buildWhatsAppLink(whatsappMessages.general)}
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            icon={MessageCircle}
          >
            Falar no WhatsApp
          </Button>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
          className="md:hidden flex items-center justify-center w-11 h-11 rounded-full border border-coffee/15 text-coffee-dark active:scale-95 transition-transform"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Menu mobile */}
      <div
        className={`md:hidden fixed inset-0 top-0 bg-coffee-dark transition-[opacity,transform] duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          menuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col h-full px-6 pt-24 pb-10">
          <button
            type="button"
            aria-label="Fechar menu"
            onClick={() => setMenuOpen(false)}
            className="absolute top-5 right-5 flex items-center justify-center w-11 h-11 rounded-full border border-cream/20 text-cream"
          >
            <X size={22} />
          </button>

          <nav className="flex flex-col gap-2 mt-4">
            {NAV_LINKS.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                style={{
                  transitionDelay: menuOpen ? `${80 + i * 60}ms` : '0ms',
                }}
                className={`font-display text-3xl font-semibold text-cream py-3 border-b border-cream/10 transition-all duration-500 ${
                  menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="mt-auto flex flex-col gap-4">
            <Button
              href={buildWhatsAppLink(whatsappMessages.general)}
              target="_blank"
              rel="noopener noreferrer"
              variant="gold"
              size="lg"
              icon={MessageCircle}
              className="w-full"
              onClick={handleNavClick}
            >
              Falar no WhatsApp
            </Button>
            <span className="text-center text-cream/50 text-sm">
              Aberta 24 horas · (31) 99322-0092
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}
