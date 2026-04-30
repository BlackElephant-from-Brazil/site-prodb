export type Cert = {
  id: string
  name: string
  group: 'Segurança' | 'Operações' | 'Governança'
  short: string
  description: string
  relevance: string
}

export const certifications: Cert[] = [
  {
    id: 'iso27001',
    name: 'ISO 27001',
    group: 'Segurança',
    short: 'Gestão de Segurança da Informação',
    description:
      'Norma internacional que define os requisitos para estabelecer, implementar e manter um Sistema de Gestão de Segurança da Informação (SGSI).',
    relevance:
      'Garante que os controles de segurança da ProDB foram auditados por um organismo independente. Fundamental para qualquer empresa com dados sensíveis ou requisitos de conformidade.',
  },
  {
    id: 'soc',
    name: 'SOC',
    group: 'Segurança',
    short: 'Service Organization Control',
    description:
      'Relatório de auditoria de controles de segurança, disponibilidade, confidencialidade e privacidade de provedores de serviços.',
    relevance:
      'Comprova a efetividade dos controles internos da ProDB a auditores externos. Exigido por clientes enterprise, bancos e seguradoras.',
  },
  {
    id: 'pcidss',
    name: 'PCI-DSS',
    group: 'Segurança',
    short: 'Payment Card Industry Data Security Standard',
    description:
      'Padrão de segurança de dados para organizações que processam, armazenam ou transmitem dados de cartão de crédito.',
    relevance:
      'Obrigatório para clientes do segmento de e-commerce, varejo e fintech que processam pagamentos na infraestrutura ProDB.',
  },
  {
    id: 'iso20000',
    name: 'ISO 20000',
    group: 'Operações',
    short: 'Gestão de Serviços de TI',
    description:
      'Norma que define os requisitos para estabelecer um Sistema de Gestão de Serviços de TI (SMS), alinhado às melhores práticas ITIL.',
    relevance:
      'Significa que os processos de entrega, monitoramento e suporte da ProDB seguem um padrão internacional auditado. Indica maturidade operacional além do hardware.',
  },
  {
    id: 'tier3',
    name: 'Tier III',
    group: 'Operações',
    short: 'Uptime Institute — Infraestrutura de Datacenter',
    description:
      'Certificação do Uptime Institute que atesta redundância N+1 em todos os sistemas críticos e manutenção concorrente — sem necessidade de desligar o sistema para manutenção.',
    relevance:
      'SLA de 99,982% de uptime comprometido pela arquitetura física. O Tier III é o padrão exigido por empresas que não podem se dar ao luxo de downtime por manutenção.',
  },
  {
    id: 'tr3',
    name: 'TÜV Rheinland TR3',
    group: 'Operações',
    short: 'Segurança de Infraestrutura de TI',
    description:
      'Certificação do instituto alemão TÜV Rheinland que atesta requisitos avançados de segurança física e operacional para infraestrutura de TI.',
    relevance:
      'Validação independente por um dos organismos de certificação mais respeitados do mundo. Complementa o Tier III com foco em segurança física e operacional.',
  },
  {
    id: 'iso37001',
    name: 'ISO 37001',
    group: 'Governança',
    short: 'Sistema de Gestão Antissuborno',
    description:
      'Norma internacional para sistemas de gestão antissuborno — previne, detecta e combate corrupção nas organizações.',
    relevance:
      'Relevante para clientes em setores regulados e empresas com política de supply chain compliance (ESG, Lei de Improbidade Administrativa).',
  },
  {
    id: 'iso14001',
    name: 'ISO 14001',
    group: 'Governança',
    short: 'Gestão Ambiental',
    description:
      'Norma que especifica os requisitos para um Sistema de Gestão Ambiental eficaz.',
    relevance:
      'Demonstra que a ProDB monitora e reduz o impacto ambiental da operação do datacenter. Relevante para relatórios ESG de clientes.',
  },
  {
    id: 'iso50001',
    name: 'ISO 50001',
    group: 'Governança',
    short: 'Gestão de Energia',
    description:
      'Norma que define requisitos para estabelecer um Sistema de Gestão de Energia, visando melhoria contínua de eficiência energética.',
    relevance:
      'Controla o consumo de energia do datacenter — fator direto no custo de operação e na pegada de carbono. Suporta metas de sustentabilidade de clientes.',
  },
]
