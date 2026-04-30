export type Post = {
  slug: string
  title: string
  excerpt: string
  category: string
  date: string
  readTime: number
  body: string
}

export const posts: Post[] = [
  {
    slug: 'reducao-custos-cloud',
    title: 'Redução de custos cloud: por que 70% das empresas pagam por recursos que nunca usam',
    excerpt:
      'Entenda os principais vetores de desperdício em ambientes cloud e como uma revisão de arquitetura pode reduzir sua fatura em até 40% sem sacrificar performance.',
    category: 'Cloud',
    date: '2026-04-10',
    readTime: 8,
    body: `
## O problema com o modelo de nuvem pública

Hyperscalers cobram por cada recurso alocado — e a maioria das equipes de TI aloca muito mais do que precisa. Os culpados mais comuns são instâncias superdimensionadas, snapshots de disco acumulados, endereços IP elásticos não associados e tráfego de saída (egress) ignorado no orçamento.

Um estudo da Gartner (2024) indica que organizações gastam, em média, 30% a mais do que necessário em cloud pública. Para empresas brasileiras, a equação piora: o custo em dólares com variação cambial torna o budget imprevisível.

## As três categorias de desperdício

### 1. Recursos não utilizados ou subutilizados
Instâncias ligadas fora do horário comercial, bancos de dados dev/staging com configuração idêntica a produção, e volumes de armazenamento de backups expirados são os campeões de desperdício.

**Ação:** Revise utilização de CPU/RAM nas últimas 4 semanas. Qualquer instância com uso médio abaixo de 25% é candidata a redimensionamento.

### 2. Tráfego de saída (egress)
AWS, Azure e GCP cobram por GB de dados que sai de suas redes. É uma das taxas menos visíveis e mais crescentes. Aplicações que servem grandes volumes de mídia ou que fazem queries constantes entre regiões acumulam fatura surpreendente.

**Ação:** Habilite relatórios de custo por categoria. Egress acima de 15% da fatura total é um sinal vermelho.

### 3. Licenciamento "bundled"
Serviços gerenciados (RDS, Elastic Cache, etc.) incluem custo de licença no preço hora. Muitas empresas poderiam usar alternativas open source com custo total menor na mesma infraestrutura gerenciada.

## O papel de um parceiro cloud especialista

A revisão de custos não precisa — e não deve — ser feita uma vez ao ano. Parceiros de cloud como a ProDB fazem revisões trimestrais de capacidade, identificando recursos ociosos, propondo rightsizing e ajustando o ambiente antes que a fatura cresça.

O resultado médio reportado por nossos clientes: redução de 20% a 40% no custo mensal após o primeiro ciclo de revisão, sem impacto em performance ou disponibilidade.

## Próximos passos

Se você não tem visibilidade clara do seu custo por recurso, esse é o primeiro problema a resolver. Entre em contato para uma avaliação gratuita de arquitetura — sem compromisso.
    `.trim(),
  },
  {
    slug: 'ambientes-integrados-automatizados',
    title: 'Ambientes Integrados e Automatizados: Como Reduzir Erros e Aumentar a Produtividade na Sua TI',
    excerpt:
      'Automação de infraestrutura não é exclusividade de grandes empresas. Entenda como ambientes cloud bem configurados eliminam trabalho manual, reduzem erros humanos e liberam sua equipe para o que importa.',
    category: 'Infraestrutura',
    date: '2026-03-15',
    readTime: 7,
    body: `
## Automação não é moda — é necessidade operacional

Equipes de TI que operam infraestrutura manualmente passam, em média, 40% do tempo em tarefas repetitivas: provisionamento de servidores, configuração de backups, rotação de certificados, patching de segurança. Esse tempo poderia ir para projetos estratégicos — integrações, melhorias de produto, análise de dados.

Ambientes cloud modernos tornam a automação acessível, mas a configuração inicial importa muito. Um ambiente mal estruturado é tão manual quanto um datacenter físico.

## Os quatro pilares de um ambiente automatizado

### 1. Infrastructure as Code (IaC)
Terraform, Ansible ou CloudFormation permitem que você descreva sua infraestrutura em arquivos de configuração versionados. Qualquer alteração é auditável; qualquer ambiente pode ser recriado em minutos.

**Benefício direto:** Fim dos "ambientes de neve" — servidores configurados manualmente que ninguém sabe reproduzir.

### 2. Pipelines de CI/CD
Deploy manual em produção é o maior vetor de erro humano em infraestrutura. Pipelines automatizados validam, testam e implantam com consistência.

**Benefício direto:** Redução de incidentes pós-deploy em até 60% em equipes que adotam CI/CD completo.

### 3. Monitoramento e alertas inteligentes
Alertas baseados em threshold fixo (CPU > 80%) geram ruído. Monitoramento baseado em anomalias detecta desvios de padrão antes de virar incidente.

**Benefício direto:** Tempo médio de detecção (MTTD) reduzido de horas para minutos.

### 4. Backup e restauração automatizados
Backup que precisa de intervenção humana não é backup confiável. A automação do OBM garante que os jobs rodem, que os relatórios sejam gerados e que restaurações de teste sejam executadas periodicamente.

**Benefício direto:** Compliance com LGPD e requisitos de auditoria sem overhead manual.

## O que a ProDB entrega em um ambiente gerenciado

Nossa equipe configura, monitora e ajusta todos os quatro pilares acima. O cliente foca no negócio; nós gerenciamos a infraestrutura.

Se você quer uma avaliação do seu ambiente atual, fale com nossos especialistas.
    `.trim(),
  },
  {
    slug: 'o-que-e-ciberseguranca',
    title: 'O que é cibersegurança e segurança de dados e por que isso é essencial em 2026',
    excerpt:
      'Com a LGPD consolidada e ataques de ransomware crescendo 85% ao ano no Brasil, segurança não é mais diferencial — é requisito de operação. Entenda os conceitos fundamentais e o que sua empresa precisa fazer agora.',
    category: 'Segurança',
    date: '2026-02-20',
    readTime: 9,
    body: `
## O cenário brasileiro de ameaças em 2026

O Brasil é o segundo país que mais sofre ataques cibernéticos na América Latina. O crescimento de ataques de ransomware — sequestro de dados com pedido de resgate — atingiu 85% em 2025 comparado ao ano anterior (Kaspersky, 2025). PMEs são o alvo preferido: têm dados valiosos, mas defesas menos sofisticadas que grandes corporações.

Ao mesmo tempo, a LGPD (Lei Geral de Proteção de Dados) está completamente em vigor, com multas que chegam a 2% do faturamento anual limitado a R$ 50 milhões por infração. Ignorar segurança de dados é, hoje, um risco regulatório concreto.

## Conceitos fundamentais

### Cibersegurança vs. Segurança de dados
**Cibersegurança** é o conjunto de práticas, processos e tecnologias para proteger sistemas, redes e programas de ataques digitais.

**Segurança de dados** é o subcampo focado especificamente na proteção das informações — contra acesso não autorizado, vazamento, alteração ou destruição.

Na prática, os dois se sobrepõem e se complementam.

### Os três pilares: CIA
Toda avaliação de segurança parte de três propriedades:

- **Confidencialidade:** apenas pessoas autorizadas acessam os dados
- **Integridade:** os dados não são alterados sem autorização
- **Disponibilidade:** os sistemas e dados estão acessíveis quando necessário

Ataques atacam pelo menos um desses pilares. Ransomware ataca disponibilidade (e confidencialidade se houver exfiltração). Vazamentos atacam confidencialidade. Falhas de hardware atacam disponibilidade.

## O que a LGPD exige na prática

A lei exige que organizações adotem "medidas técnicas e administrativas aptas a proteger os dados pessoais". Na prática, isso significa:

1. **Inventário de dados pessoais** — saber quais dados você processa, onde estão e quem tem acesso
2. **Controles de acesso** — princípio do menor privilégio, autenticação forte
3. **Criptografia** — dados em trânsito e em repouso
4. **Backup e recuperação** — RPO e RTO definidos e testados
5. **Gestão de incidentes** — plano para detectar, conter e notificar violações

## Como a infraestrutura cloud certificada ajuda

Um datacenter com ISO 27001, SOC e PCI-DSS já implementou os controles físicos e de processo exigidos por auditores. Isso não elimina sua responsabilidade (o modelo de responsabilidade compartilhada continua), mas cria uma base sólida.

A ProDB oferece um relatório de controles disponíveis que facilita o processo de auditoria e due diligence de clientes. Fale com nossa equipe de segurança para saber mais.
    `.trim(),
  },
]

export function getPost(slug: string): Post | undefined {
  return posts.find(p => p.slug === slug)
}
