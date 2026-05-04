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
    headline: 'SLA em contrato, não em rodapé',
    proof: '99,982% de uptime garantido por escrito, com crédito automático na fatura caso não cumprido. Não dependa de promessa em landing page.',
    metric: '99,982%',
    metricLabel: 'SLA contratual',
  },
  {
    id: 'team',
    icon: 'Users',
    headline: 'Engenheiros que assinam o ticket',
    proof: 'Quem responde tem nome, telefone e conhece o seu ambiente. Não é call center terceirizado lendo script de tier 1.',
    metric: '100%',
    metricLabel: 'Engenheiros internos',
  },
  {
    id: 'monitoring',
    icon: 'Activity',
    headline: 'Detectamos antes de você abrir chamado',
    proof: 'NOC ativo 24h monitorando latência, disponibilidade e padrões anômalos. Quando você nota o problema, já estamos agindo.',
    metric: '24/7',
    metricLabel: 'NOC ativo',
  },
  {
    id: 'response',
    icon: 'Zap',
    headline: '15 minutos pra primeira ação documentada',
    proof: 'Não é tempo de leitura de ticket. É tempo até alguém com poder de resolver assumir o caso. Em incidentes críticos, sem fila.',
    metric: '15 min',
    metricLabel: 'Resposta crítica',
  },
  {
    id: 'experience',
    icon: 'HeartHandshake',
    headline: 'Um gerente de conta. Pelo tempo de contrato.',
    proof: 'A pessoa que conhece sua infraestrutura no mês 1 é a mesma do mês 36. Reuniões trimestrais de capacidade incluídas.',
    metric: '1:1',
    metricLabel: 'Engenheiro de conta',
  },
]
