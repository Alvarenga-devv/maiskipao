const VARIANTS = {
  primary:
    'bg-coffee text-cream hover:bg-coffee-dark active:scale-[0.98] shadow-lg shadow-coffee/20',
  gold:
    'bg-gold text-coffee-dark hover:bg-gold-light active:scale-[0.98] shadow-lg shadow-gold/30',
  outline:
    'border-2 border-coffee/25 text-coffee hover:border-coffee/60 hover:bg-coffee/5 active:scale-[0.98]',
  ghost:
    'text-cream border-2 border-cream/40 hover:bg-cream/10 active:scale-[0.98]',
}

export default function Button({
  as = 'a',
  href,
  target,
  rel,
  onClick,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  className = '',
  children,
}) {
  const Tag = as
  const sizeClasses =
    size === 'lg'
      ? 'px-7 py-4 text-base md:text-lg'
      : 'px-5 py-3 text-sm md:text-base'

  return (
    <Tag
      href={href}
      target={target}
      rel={rel}
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition-all duration-300 ${sizeClasses} ${VARIANTS[variant]} ${className}`}
    >
      {Icon && <Icon size={size === 'lg' ? 20 : 18} strokeWidth={2.2} />}
      {children}
    </Tag>
  )
}
