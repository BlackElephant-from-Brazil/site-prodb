export type Pillar = {
  id: string
  icon: string
  headline: string
  proof: string
  metric: string | null
  metricLabel: string | null
}

export const pillars: Pillar[] = [
  {
    id: 'availability',
    icon: 'Shield',
    headline: 'Disponibilidade 24/7',
    proof: 'Infraestrutura Tier III com SLA de 99,99% garantido em contrato — sem janelas de manutenção que derrubem a operação.',
    metric: '99,99%',
    metricLabel: 'SLA contratual',
  },
  {
    id: 'team',
    icon: 'Users',
    headline: 'Equipe certificada',
    proof: 'Engenheiros com certificações internacionais (ISO 27001, ISO 20000) e atualização contínua — não terceirizamos suporte de nível 1.',
    metric: null, // TODO: verificar número de certificações da equipe
    metricLabel: null,
  },
  {
    id: 'monitoring',
    icon: 'Activity',
    headline: 'Monitoramento proativo',
    proof: 'NOC ativo 24 horas por dia, 7 dias por semana — detectamos e atuamos em anomalias antes que você abra um chamado.',
    metric: '24/7',
    metricLabel: 'Monitoramento ativo',
  },
  {
    id: 'response',
    icon: 'Zap',
    headline: 'Resposta em minutos',
    proof: 'Nosso SLA de atendimento define tempo de resposta de <15 minutos para incidentes críticos — em português, sem fila de espera.',
    metric: '<15 min', // TODO: verificar média real de tempo de resposta
    metricLabel: 'Incidentes críticos',
  },
  {
    id: 'experience',
    icon: 'HeartHandshake',
    headline: 'Foco na experiência',
    proof: 'Gerente de conta dedicado, onboarding assistido e revisões trimestrais de capacidade — porque crescer é diferente de apenas operar.',
    metric: null, // TODO: verificar NPS real
    metricLabel: null,
  },
]
