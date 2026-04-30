export type BackupFeature = {
  label: string
  essencial: string | boolean
  avancado: string | boolean
  sobMedida: string | boolean
}

export type BackupPlan = {
  id: 'essencial' | 'avancado' | 'sobMedida'
  name: string
  price: number | null
  unit: string
  tagline: string
  highlighted?: boolean
  ribbon?: string
  trialDays?: number
  cta: string
  features: string[]
}

export const backupPlans: BackupPlan[] = [
  {
    id: 'essencial',
    name: 'Essencial',
    price: 99,
    unit: '/mês',
    tagline: 'Para começar com segurança',
    cta: 'Quero o plano Essencial',
    features: [
      '100 GB de armazenamento',
      'Backup diário automatizado',
      'Suporte por e-mail',
      '1 licença OBM incluída',
      'Restauração via painel web',
      'Retenção de 30 dias',
    ],
  },
  {
    id: 'avancado',
    name: 'Avançado',
    price: 306,
    unit: '/mês',
    tagline: 'Para operações que não podem parar',
    highlighted: true,
    ribbon: 'Mais escolhido',
    trialDays: 15,
    cta: 'Começar teste grátis de 15 dias',
    features: [
      '1 TB de armazenamento',
      'Backup diário automatizado',
      'Suporte por e-mail',
      '1 licença OBM incluída',
      'Restauração via painel web',
      'Retenção de 90 dias',
      'Teste grátis de 15 dias',
      'Sem cartão de crédito',
    ],
  },
  {
    id: 'sobMedida',
    name: 'Sob Medida',
    price: null,
    unit: '',
    tagline: 'Para ambientes complexos e multi-site',
    cta: 'Solicitar proposta',
    features: [
      'Armazenamento variável',
      'Backup diário ou em menor frequência',
      'Suporte prioritário 24/7',
      'Múltiplas licenças OBM',
      'Integrações avançadas',
      'Geo-replicação em múltiplos datacenters',
      'RPO e RTO personalizados',
      'Relatório de conformidade',
    ],
  },
]

export const backupFeatureMatrix: BackupFeature[] = [
  { label: 'Armazenamento', essencial: '100 GB', avancado: '1 TB', sobMedida: 'Personalizado' },
  { label: 'Frequência de backup', essencial: 'Diária', avancado: 'Diária', sobMedida: 'Personalizável' },
  { label: 'Retenção', essencial: '30 dias', avancado: '90 dias', sobMedida: 'Personalizável' },
  { label: 'Licenças OBM', essencial: '1', avancado: '1', sobMedida: 'Múltiplas' },
  { label: 'Suporte', essencial: 'E-mail', avancado: 'E-mail', sobMedida: 'Prioritário 24/7' },
  { label: 'Painel de gerenciamento', essencial: true, avancado: true, sobMedida: true },
  { label: 'Restauração granular', essencial: true, avancado: true, sobMedida: true },
  { label: 'Geo-replicação', essencial: false, avancado: false, sobMedida: true },
  { label: 'Teste grátis de 15 dias', essencial: false, avancado: true, sobMedida: false },
  { label: 'Integrações avançadas', essencial: false, avancado: false, sobMedida: true },
  { label: 'Relatório de conformidade LGPD', essencial: false, avancado: true, sobMedida: true },
  { label: 'SLA de restauração', essencial: 'Padrão', avancado: 'Padrão', sobMedida: 'Personalizado' },
]
