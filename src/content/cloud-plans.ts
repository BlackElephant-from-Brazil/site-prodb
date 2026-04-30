export type CloudRegion = 'SP' | 'RJ' | 'SP+DR' | 'RJ+DR'
export type CloudOS = 'ubuntu-22' | 'ubuntu-20' | 'debian-12' | 'windows-2022' | 'windows-2019' | 'bring-your-own'
export type ManagedLevel = 'iaas' | 'managed' | 'fully-managed'

export type ConfiguratorState = {
  vcpu: number
  ramGb: number
  ssdGb: number
  bandwidthGbps: number
  region: CloudRegion
  os: CloudOS
  managedLevel: ManagedLevel
}

// Approximate prices in BRL — these are estimates; real quote via contact form
export const PRICE_VCPU = 45       // R$/vCPU/mês
export const PRICE_RAM  = 18       // R$/GB RAM/mês
export const PRICE_SSD  = 0.55     // R$/GB SSD NVMe/mês
export const PRICE_BW   = 290      // R$/Gbps/mês
export const PRICE_DR   = 0.25     // +25% for DR region
export const PRICE_MANAGED = {
  iaas:          0,
  managed:       890,   // R$/mês fixed add-on
  'fully-managed': 2200,
}

export const vcpuOptions    = [2, 4, 8, 16, 32, 64]
export const ramOptions     = [4, 8, 16, 32, 64, 128, 256, 512]
export const ssdOptions     = [50, 100, 200, 500, 1000, 2000, 5000, 10000]
export const bandwidthOptions = [0.1, 0.5, 1, 2, 5, 10]

export const regionLabels: Record<CloudRegion, string> = {
  SP:    'São Paulo',
  RJ:    'Rio de Janeiro',
  'SP+DR': 'São Paulo + DR (RJ)',
  'RJ+DR': 'Rio de Janeiro + DR (SP)',
}

export const osLabels: Record<CloudOS, string> = {
  'ubuntu-22':   'Ubuntu 22.04 LTS',
  'ubuntu-20':   'Ubuntu 20.04 LTS',
  'debian-12':   'Debian 12 Bookworm',
  'windows-2022':'Windows Server 2022',
  'windows-2019':'Windows Server 2019',
  'bring-your-own': 'Imagem própria (BYO)',
}

export const managedLevelLabels: Record<ManagedLevel, { label: string; description: string; price: string }> = {
  iaas: {
    label: 'IaaS (Sem gerenciamento)',
    description: 'Infra gerenciada pela ProDB, SO e aplicações por você.',
    price: 'Incluso',
  },
  managed: {
    label: 'Gerenciado',
    description: 'Monitoramento, patch de SO, backup de configuração, suporte L2.',
    price: '+ R$ 890/mês',
  },
  'fully-managed': {
    label: 'Full Managed',
    description: 'Tudo do Gerenciado + otimização de performance, suporte 24/7 L3, on-call dedicado.',
    price: '+ R$ 2.200/mês',
  },
}

export const useCases = [
  {
    id: 'erp',
    icon: 'Building2',
    vertical: 'Indústria & Varejo',
    title: 'ERP em nuvem brasileira',
    description:
      'Migre seu SAP, TOTVS ou Oracle para servidores gerenciados com SLA 99,99%, storage NVMe e suporte em português. Sem dependência de hyperscaler estrangeiro.',
    config: { vcpu: 8, ramGb: 32, ssdGb: 500 },
    highlight: 'Latência < 2ms para filiais no SE do Brasil',
  },
  {
    id: 'banking',
    icon: 'ShieldCheck',
    vertical: 'Fintechs & Financeiro',
    title: 'Workloads regulados (BACEN, LGPD)',
    description:
      'Ambiente isolado, auditado, com retenção de logs configurável e relatório de conformidade. Datacenter Tier III brasileiro, sem dados cruzando fronteiras.',
    config: { vcpu: 16, ramGb: 64, ssdGb: 1000 },
    highlight: 'Relatório de conformidade sob demanda',
  },
  {
    id: 'saas',
    icon: 'Layers',
    vertical: 'SaaS & Software Houses',
    title: 'Plataforma multi-tenant escalável',
    description:
      'Escale de 2 a 64 vCPU sem migração de hardware. API de provisionamento disponível. Parceria de revenda com margem garantida para ISVs.',
    config: { vcpu: 4, ramGb: 16, ssdGb: 200 },
    highlight: 'Parceria de revenda disponível',
  },
  {
    id: 'health',
    icon: 'Heart',
    vertical: 'Saúde & Clínicas',
    title: 'Prontuário e imagens médicas (LGPD)',
    description:
      'Armazene prontuários eletrônicos e imagens DICOM com criptografia em repouso, backup automático e DR opcional. Dados nunca saem do Brasil.',
    config: { vcpu: 4, ramGb: 8, ssdGb: 2000 },
    highlight: 'Dados criptografados em repouso e em trânsito',
  },
  {
    id: 'ecommerce',
    icon: 'ShoppingCart',
    vertical: 'E-commerce',
    title: 'Alta disponibilidade em datas de pico',
    description:
      'Escalonamento rápido para Black Friday e campanhas sazonais. CDN integrado, SSL gerenciado, monitoramento 24/7 incluso no Full Managed.',
    config: { vcpu: 8, ramGb: 16, ssdGb: 500 },
    highlight: 'Escalonamento rápido sem contrato mínimo',
  },
]

export const migrationSteps = [
  {
    step: '01',
    title: 'Diagnóstico e dimensionamento',
    description:
      'Nosso time de pré-venda mapeia o ambiente atual: workloads, volumes de dados, requisitos de SLA e dependências. Proposta técnica em até 2 dias úteis.',
    duration: '1–2 dias',
  },
  {
    step: '02',
    title: 'Provisionamento do ambiente',
    description:
      'Subimos o servidor cloud, configuramos rede, firewall, backup e monitoramento. Ambiente de homologação disponível antes de qualquer corte de produção.',
    duration: '4–8 horas',
  },
  {
    step: '03',
    title: 'Migração assistida',
    description:
      'Transferência de dados, configuração de aplicações e testes de validação com você. Zero downtime em janela combinada. Engenheiro dedicado on-call.',
    duration: 'Janela combinada',
  },
  {
    step: '04',
    title: 'Cutover e monitoramento intensivo',
    description:
      'Após o go-live, 30 dias de monitoramento intensivo com resposta em até 15 minutos. Ambiente antigo mantido em standby por 7 dias pós-migração.',
    duration: '30 dias pós-go-live',
  },
]

export const slaTable = [
  { metric: 'Disponibilidade da plataforma',   standard: '99,90%', premium: '99,99%', note: 'Medido mensalmente' },
  { metric: 'RTO (recuperação de desastre)',    standard: '4 horas', premium: '30 minutos', note: 'Com DR ativo' },
  { metric: 'Resposta a incidentes críticos',  standard: '30 min', premium: '15 min', note: 'P1: produção fora do ar' },
  { metric: 'Resposta a incidentes altos',     standard: '2 horas', premium: '30 min', note: 'P2: degradação severa' },
  { metric: 'Janela de manutenção',            standard: 'Domingos 01–05h', premium: 'Acordada com cliente', note: 'Com aviso 72h antes' },
  { metric: 'Crédito por indisponibilidade',   standard: '10%/hora', premium: '25%/hora', note: 'Cap: 100% da mensalidade' },
  { metric: 'Suporte humano 24/7',             standard: '—', premium: '✓', note: 'Full Managed' },
]

export const cloudFaqs = [
  {
    q: 'Qual a diferença entre IaaS, Gerenciado e Full Managed?',
    a: 'No IaaS, a ProDB gerencia toda a infraestrutura física (hardware, rede, hypervisor). Você é responsável pelo SO, atualizações e aplicações. No Gerenciado, adicionamos monitoramento, patch de SO e suporte L2. No Full Managed, assumimos toda a operação — incluindo tunning de performance, otimização de banco de dados e on-call dedicado.',
  },
  {
    q: 'Os dados ficam armazenados no Brasil?',
    a: 'Sim. Todos os nossos datacenters são brasileiros, certificados Tier III, localizados em São Paulo e Rio de Janeiro. Nenhum dado cruza fronteiras sem seu consentimento explícito. Isso é relevante tanto para conformidade LGPD quanto para latência.',
  },
  {
    q: 'Quanto tempo leva para subir um servidor?',
    a: 'Servidores dentro do portfólio padrão ficam prontos em 4 a 8 horas após contrato assinado. Configurações personalizadas (hardware dedicado, redes privadas complexas) podem levar 1 a 3 dias úteis.',
  },
  {
    q: 'Posso migrar meu servidor de outro provedor?',
    a: 'Sim. Nossa equipe de migração faz o planejamento técnico, a transferência dos dados e o cutover sem downtime não planejado. O processo inclui ambiente de homologação e um período de standby do servidor antigo.',
  },
  {
    q: 'O servidor escala verticalmente sem migração?',
    a: 'Escalamento vertical (mais vCPU/RAM) pode exigir um reboot curto. Escalamento de storage (SSD NVMe) é feito online na maioria dos casos. Planejamos a janela de manutenção com você para impacto zero em produção.',
  },
  {
    q: 'Qual o contrato mínimo?',
    a: 'Mensalidade sem fidelidade mínima para planos de catálogo. Configurações sob medida com hardware dedicado podem ter contrato de 12 meses. Consulte nossa equipe comercial para detalhes.',
  },
  {
    q: 'O serviço tem DR (disaster recovery)?',
    a: 'Sim. As regiões "SP + DR (RJ)" e "RJ + DR (SP)" incluem replicação assíncrona para um datacenter secundário. RTO de 30 minutos com Full Managed. DR pode ser adicionado a qualquer plano.',
  },
  {
    q: 'Vocês suportam Windows Server?',
    a: 'Sim. Windows Server 2019 e 2022 são homologados. A licença Microsoft pode ser inclusa (licença de uso) ou você pode trazer sua própria licença (BYOL) em acordos Enterprise Agreement.',
  },
  {
    q: 'Como funciona o faturamento?',
    a: 'Faturamento mensal em reais, via boleto ou PIX. Sem taxas de egresso de dados dentro das regiões ProDB. Transferência de dados para fora do ambiente é faturada por GB excedente acima da cota contratada.',
  },
  {
    q: 'Têm API para provisionamento automatizado?',
    a: 'Sim, temos API REST para provisionamento, escalamento e monitoramento. Documentação disponível após contrato. Suportamos Terraform provider (beta) — consulte nossa equipe de engenharia.',
  },
]
