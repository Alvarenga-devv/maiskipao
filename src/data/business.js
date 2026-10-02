// Dados reais da Mais Kí Pão — nenhuma informação aqui é inventada.
// Qualquer dado não confirmado (preços de itens, horários específicos de
// produtos, delivery, redes sociais) foi deliberadamente omitido.

export const business = {
  name: 'Mais Kí Pão',
  category: 'Padaria',
  rating: 4.5,
  reviewsCount: 790,
  priceRange: 'R$ 1–60',
  schedule: 'Aberta 24 horas',
  phoneDisplay: '(31) 99322-0092',
  phoneE164: '5531993220092',
  address: {
    street: 'Av. Mal. Hermes, 606',
    neighborhood: 'Palmares',
    city: 'Ibirité',
    state: 'MG',
    zip: '32400-000',
    full: 'Av. Mal. Hermes, 606 - Palmares, Ibirité - MG, 32400-000',
  },
  googleHighlight:
    'Muita variedade de pães, bolos, lanches diariamente e tudo fresquinho.',
}

export const whatsappMessages = {
  hero: 'Olá! Vim pelo site da Mais Kí Pão e gostaria de saber mais.',
  product: 'Olá! Gostaria de consultar a disponibilidade de um produto.',
  final: 'Olá! Vim pelo site da Mais Kí Pão.',
  general: 'Olá! Vim pelo site da Mais Kí Pão e gostaria de falar com vocês.',
}

export function buildWhatsAppLink(message) {
  const encoded = encodeURIComponent(message)
  return `https://wa.me/${business.phoneE164}?text=${encoded}`
}

export const googleMapsLink =
  'https://www.google.com/maps/search/?api=1&query=Av.%20Mal.%20Hermes%2C%20606%20-%20Palmares%2C%20Ibirité%20-%20MG'

export const productHighlights = [
  {
    id: 'pao-frances',
    name: 'Pão Francês',
    description: 'Crocante por fora, macio por dentro.',
    image:
      'https://images.unsplash.com/photo-1598373182133-52452f7691ef?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'pao-caseiro',
    name: 'Pão Caseiro',
    description: 'Um clássico para acompanhar qualquer momento.',
    image:
      'https://images.unsplash.com/photo-1549931319-a545749fcd16?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'pao-doce',
    name: 'Pão Doce',
    description: 'Doçura e maciez para deixar o café ainda melhor.',
    image:
      'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'rocambole',
    name: 'Rocambole Grande Fatiado',
    description: 'Uma opção especial para quem não abre mão de um bom doce.',
    image:
      'https://images.unsplash.com/photo-1606890658317-7c1dd207e928?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'pao-sal-queijo',
    name: 'Pão de Sal Recheado com Queijo',
    description: 'Quentinho, recheado e perfeito para aquele lanche.',
    image:
      'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'biscoito-polvilho',
    name: 'Biscoitos de Polvilho',
    description: 'Leves, crocantes e irresistíveis.',
    image:
      'https://images.unsplash.com/photo-1558326567-98ae2405596b?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'biscoito-cascudo',
    name: 'Biscoitos Cascudo Rei do Gado',
    description: 'Uma das opções de biscoitos em destaque.',
    image:
      'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'ovo-de-colher',
    name: 'Ovo de Colher',
    description: 'Vários recheios para escolher.',
    image:
      'https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=1200&auto=format&fit=crop',
  },
]

export const moments = [
  {
    id: 'cafe-da-manha',
    title: 'Café da manhã',
    description: 'Pães fresquinhos para começar o dia.',
    image:
      'https://images.unsplash.com/photo-1495195134817-aeb325a55b65?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'pausa-cafe',
    title: 'Pausa para o café',
    description: 'Aquele lanche para renovar as energias.',
    image:
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'lanche',
    title: 'Lanche',
    description: 'Opções para matar a fome a qualquer hora.',
    image:
      'https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'doce',
    title: 'Doce',
    description: 'Bolos, rocamboles e outras opções para adoçar o dia.',
    image:
      'https://images.unsplash.com/photo-1464195244916-405fa0a82545?q=80&w=1200&auto=format&fit=crop',
  },
]

export const galleryImages = [
  'https://images.unsplash.com/photo-1598373182133-52452f7691ef?q=80&w=900&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=900&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=900&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=900&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=900&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1606890658317-7c1dd207e928?q=80&w=900&auto=format&fit=crop',
]
