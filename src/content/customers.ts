export type Customer = {
  id: string
  name: string
  logo: string
  url?: string
}

export type Testimonial = {
  customerId: string
  author: string
  role: string
  company: string
  quote: string
  metric: string
  metricLabel: string
}

export const customers: Customer[] = [
  { id: 'softilux',        name: 'Softilux',        logo: '/partners/softilux.svg' },
  { id: 'kruzer',          name: 'Kruzer',           logo: '/partners/kruzer.svg' },
  { id: 'm3case',          name: 'M3 Case',          logo: '/partners/m3case.svg' },
  { id: 'gestaodinamica',  name: 'Gestão Dinâmica',  logo: '/partners/gestaodinamica.svg' },
  { id: 'pushinpay',       name: 'Pushin Pay',       logo: '/partners/pushinpay.svg' },
  { id: 'inntegra',        name: 'Inntegra',         logo: '/partners/inntegra.svg' },
  { id: 'gtgm',            name: 'GTGM',             logo: '/partners/gtgm.svg' },
]

// TODO: Replace with real customer testimonials once approved by clients
export const featuredTestimonial: Testimonial | null = null
/*
export const featuredTestimonial: Testimonial = {
  customerId: 'softilux',
  author: 'Nome do Contato',
  role: 'CTO',
  company: 'Softilux',
  quote:
    'Migramos para a ProDB há 18 meses. O suporte em português, disponível de madrugada, foi decisivo em dois incidentes críticos. Não voltamos para o hyperscaler.',
  metric: '38%',
  metricLabel: 'Redução no custo mensal de cloud',
}
*/
