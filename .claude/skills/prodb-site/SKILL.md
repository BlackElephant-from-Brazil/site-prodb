---
name: prodb-site
description: Conhecimento completo sobre a ProDB e este projeto de site. Use SEMPRE que for escrever código, copy, componentes, estilos ou qualquer parte do site da ProDB — inclusive quando a tarefa parecer genérica como "crie um componente Hero" ou "escreva o texto da home". Esta skill contém o briefing estratégico, o design system, a estrutura de páginas e as regras de copy que todo o código deve respeitar.
---

# ProDB — Conhecimento do Projeto

## Empresa

**ProDB** — provedora brasileira de cloud e backup fundada em 2011 em Campinas/SP.

- **CNPJ:** 37.683.941/0001-87
- **Endereço:** R. José Rodrigues de Carvalho, 116 — Jd. Nilópolis, Campinas/SP 13088-833
- **Contato:** (19) 3291-3150 | contato@prodb.com.br
- **Redes:** LinkedIn, Facebook, Instagram

### Linha do tempo
| Ano | Marco |
|-----|-------|
| 2011 | Fundação — administração de bancos de dados para empresas de todo porte |
| 2013 | Parceria com data center Tier III Ascenty |
| 2016 | Parceria com Dell Technologies; 100% da infraestrutura migrada |
| 2021 | 2º Data Center em Osasco/SP |
| 2025 | Foco em experiência do cliente e escuta ativa |

---

## Serviços

### 1. Servidores Cloud
Hospedagem de aplicações, bancos de dados e sites — sem necessidade de hardware físico.
- Foco: redução de custos operacionais, escalabilidade, alta disponibilidade
- ICP primário: IT managers e CTOs que sofrem com ticket lento, suporte em inglês, falta de monitoramento proativo

### 2. Backup
Planos escalonáveis com backup diário automático.

| Plano | Preço | Armazenamento | Inclui |
|-------|-------|---------------|--------|
| Avançado | R$ 306/mês | 1 TB | Backup diário automático, suporte via e-mail, 1 licença OBM |

- Teste grátis de 15 dias (sem cartão de crédito)

### 3. Programa de Parceiros
Parceiros ganham comissões competitivas e suporte técnico dedicado.
- Parceiros atuais: Softilux, Kruzer, M3 Case, Gestão Dinâmica, Pushin Pay, Inntegra

---

## Certificações

| Certificação | Propósito |
|---|---|
| Tier III (Uptime Institute) | 99,982% disponibilidade, 100% garantia Ascenty |
| TR3 TÜV Rheinland | Conformidade ANSI/TIA 942 |
| SOC | Eficiência de processos e segurança física |
| PCI-DSS | Segurança de dados financeiros |
| ISO 27001 | Gestão de Segurança da Informação |
| ISO 20000 | Gestão de serviços de TI |
| ISO 50001 | Gestão de energia |
| ISO 14001 | Gestão ambiental (desde 2016) |
| ISO 37001 | Anti-suborno e anticorrupção |

---

## Posicionamento estratégico

**Conceito central:** "Cloud especialista brasileira" — a alternativa especializada para IT leaders cansados de bill shock em dólar, suporte só em inglês e promessas de datacenter que não passam em auditoria.

### Três camadas (em ordem de argumento)
1. **Substrate — Compliance (C):** "Você pode confiar em nós — essas certificações provam."
2. **Experiência — Suporte (B):** "Você pode contar com a gente — veja como operamos."
3. **Fechamento — BRL previsível (A):** "Você pode nos orçar — este é o custo."

### Três dores nomeadas do ICP
1. **Bill creep em dólar** — faturas que flutuam com USD/BRL + cobranças de egress ocultas
2. **Suporte lento / em inglês** — ticket Tier-1 com 4h de espera, sem monitoramento proativo
3. **Pressão de compliance LGPD/PCI** — hyperscalers têm shared-responsibility difícil de auditar

### Tom de voz
- Calmo, técnico, direto — **números em vez de adjetivos**
- Nunca use: "transformação digital", "soluções inovadoras", "parceiro estratégico", "solução robusta", "ecossistema", "jornada do cliente", "holística", "sinergia"
- Warm moment: suporte humano, testemunho, estado de sucesso — use o acento âmbar

---

## Arquitetura de conversão

| Intenção | Caminho primário |
|---|---|
| Alta intenção | CTA "Fale com um especialista" → formulário de contato |
| Média intenção | CTA "Teste grátis 15 dias" → /backup |
| Parceiro | CTA "Quero ser um parceiro" → /seja-um-parceiro |

**Regra de ouro:** Um CTA primário por viewport. Dois botões cyan na mesma tela = um está errado.

---

## Design System

> Documento completo em `docs/design-system.md`. Esta seção é o resumo operacional.

### Registro visual
**"Engineered Confidence with Brazilian warmth"** — superfícies navy frias + um único acento quente âmbar nos momentos humanos.

### Paleta de cores (tokens principais)

| Token | Hex | Uso |
|---|---|---|
| `--color-navy-950` | `#070D1A` | App shell, quase-preto |
| `--color-navy-900` | `#0A1220` | Hero / seções dramáticas |
| `--color-navy-800` | `#0E1B33` | Superfícies elevadas no dark, footer |
| `--color-navy-700` | `#142547` | Cards no dark |
| `--color-cyan-400` | `#22D3EE` | **CTA principal / link / focus ring** |
| `--color-cyan-500` | `#0AB6E8` | Hover/pressed do CTA |
| `--color-amber-500` | `#F59E0B` | **Acento humano** — suporte, testemunho, sucesso |
| `--color-slate-50` | `#F7F8FA` | Body bg (light) — nunca `#FFF` puro |
| `--color-slate-700` | `#334155` | Texto body (light) |
| `--color-slate-900` | `#0E1726` | Headings (light) |

**Regra dos acentos:** Cyan-400 = ação/destaque. Amber-500 = humanidade/calor. Nunca os dois no mesmo cluster visual, exceto no card de suporte.

### Tipografia

| Token | Família | Uso |
|---|---|---|
| `--font-sans` | Geist | Display + body |
| `--font-mono` | Geist Mono | IPs, configs, preços em cards, números tabulares |

Escala: modular 1.25, fluida via `clamp()`. Leading display: 1.05–1.1. Tracking display: -0.022em.

### Componentes prioritários

- **Button** — `primary` (cyan-400, texto navy-950), `secondary`, `ghost`, `dark-primary`, `dark-secondary`, `danger`
- **PricingCard** — 1-up mobile, 3-up md+; plano "Avançado" com borda top cyan-400
- **FeatureCard** — ícone Lucide 32px cyan-400, headline, 1 frase com número, footnote
- **LogoStrip** — logos monocromáticos slate-500/slate-300
- **Stat** — número Geist Mono text-4xl/5xl + unidade + caption
- **Testimonial** — foto 64px, nome/cargo/empresa, citação, chip de resultado âmbar
- **CertBadge** — SVG 64×64 monocromático, abre modal com explicação plain-language
- **Modal** — máx 560px, radius-xl, shadow-xl, focus trap, fecha com Escape
- **Nav** — logo esquerda, mega-menu "Soluções" (Servidores Cloud / Backup), CTA direita, sticky blur
- **Footer** — 4 colunas lg, 2 md; strip ISO; CNPJ + endereço + redes sociais
- **FloatingWhatsApp** — 56×56, âmbar-500, canto inferior direito
- **CookieBanner** — LGPD, bottom, navy-900; aceitar/rejeitar/personalizar granular

### Motion
- Entrada: `opacity 0→1` + `translateY 8px→0`, 480ms, `cubic-bezier(0.22, 1, 0.36, 1)`, stagger 40ms
- Hover/estado: 120ms
- `prefers-reduced-motion`: para o HeroOrb; revela conteúdo imediato; mantém feedback de hover
- Nunca animar `width`/`height`/`top`/`left` — somente `transform`/`opacity`

### Proibições absolutas
- Sem `#000` ou `#FFF` puros em body ou hero
- Sem emoji como ícones funcionais
- Sem carrossel para conteúdo primário
- Sem dois CTAs de igual peso no mesmo viewport
- Sem count-up em preços ou percentuais de SLA
- Sem copy genérico (ver lista de palavras banidas acima)

---

## Stack técnica

| Camada | Tecnologia |
|---|---|
| Framework | Next.js 16 (App Router) |
| UI | React 19 |
| CSS | Tailwind CSS v4 |
| Tipagem | TypeScript |
| Ícones | lucide-react (stroke 1.75, família única) |
| Fontes | next/font — Geist + Geist Mono |

> **Atenção:** Esta versão do Next.js tem breaking changes. Antes de escrever código, leia o guia relevante em `node_modules/next/dist/docs/`.

Tokens CSS declarados em `src/styles/tokens.css` e expostos ao Tailwind via `@theme inline` no `globals.css`. **Nunca use hex literals em arquivos de componente.**

---

## Estrutura de páginas

```
/                        → Home (HOA hybrid: Hero → 3 dores → Soluções → Pilares → Certs → Parceiros → Blog → CTA final)
/empresa                 → Quem somos, timeline, certificações detalhadas
/servidores-cloud        → Solução cloud, diferenciais, formulário de contato
/backup                  → Planos, teste grátis, formulário
/seja-um-parceiro        → Programa parceiros, benefícios, formulário
/blog                    → Lista de artigos
/blog/[slug]             → Artigo individual
/contato                 → Formulário + dados de contato
/politica-de-privacidade
/termos-de-uso
/politica-de-cookies
```

### Estrutura do repositório

```
src/
  app/(marketing)/       → páginas de marketing
  components/
    ui/                  → primitivos (Button, Input, Card, Badge, Modal…)
    sections/            → seções compostas (Hero, ProblemFraming, Solutions…)
    layout/              → Header, Footer, MegaMenu, MobileNav, FloatingWhatsApp, CookieBanner
    forms/               → ContactForm, TrialForm, PartnerForm
    illustrations/       → HeroOrb, InfraDiagrams, CertBadges
  lib/                   → cn.ts, schemas.ts, analytics.ts, seo.ts
  content/               → backup-plans.ts, certifications.ts, pillars.ts, customers.ts
  styles/                → tokens.css, globals.css
docs/
  strategy.md            → Briefing estratégico completo (Phase A)
  design-system.md       → Design system completo (Phase B)
```

---

## Referências detalhadas

Para detalhes que não estão neste resumo:

- **Estratégia, ICPs, arcs narrativos, decision matrix** → `docs/strategy.md`
- **Todos os tokens de design, componentes completos, acessibilidade, Tailwind binding** → `docs/design-system.md`

---

## Números e claims (TODOs pendentes)

Estes dados ainda não foram verificados — enquanto não confirmados, o site deve marcar como TODO ou usar copy qualitativo:

- Tempo médio de resposta do suporte
- NPS / First-call resolution rate
- Total de clientes ativos (hoje aparece "+550 pessoas confiam na Prodb")
- Testemunho de cliente com resultado numérico
- Fotos reais do NOC / escritório
- ID real do GA4
- Backend real de CRM/e-mail para formulários
