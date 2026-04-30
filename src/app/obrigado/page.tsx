import type { Metadata } from 'next'
import { Suspense } from 'react'
import Link from 'next/link'
import MarketingLayout from '../layout-marketing'
import { LinkButton } from '@/components/ui/Button'
import { CheckCircle, Clock, Phone, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Mensagem enviada | ProDB Tecnologia',
  robots: { index: false, follow: false },
}

// Origem parameter determines the copy shown
type Origem = 'contato' | 'trial' | 'parceiro' | string

function getContent(origem: Origem) {
  switch (origem) {
    case 'trial':
      return {
        heading: 'Teste grátis solicitado!',
        sub: 'Nossa equipe vai configurar seu ambiente de teste e entrar em contato em até 2 horas úteis.',
        whatsNext: [
          'Você receberá um e-mail de confirmação em instantes.',
          'Um engenheiro da ProDB vai ligar para combinar a configuração inicial.',
          'Em até 4 horas, seu backup estará rodando.',
        ],
      }
    case 'parceiro':
      return {
        heading: 'Candidatura recebida!',
        sub: 'Nossa equipe de parcerias vai analisar seu perfil e entrar em contato em até 2 horas úteis.',
        whatsNext: [
          'Você receberá um e-mail de confirmação em instantes.',
          'Uma call de alinhamento comercial de 30 minutos será agendada.',
          'Documentação e acesso ao portal de parceiros em até 1 semana.',
        ],
      }
    default:
      return {
        heading: 'Mensagem enviada!',
        sub: 'Recebemos sua mensagem e responderemos em até 2 horas úteis em português.',
        whatsNext: [
          'Você receberá uma confirmação no e-mail informado.',
          'Um especialista ProDB vai analisar sua necessidade.',
          'Resposta em até 2 horas úteis (seg–sex, 8h–18h).',
        ],
      }
  }
}

function ObrigadoContent({ searchParams }: { searchParams: URLSearchParams }) {
  const origem = (searchParams.get('origem') ?? 'contato') as Origem
  const content = getContent(origem)

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center py-24 px-4 text-center">
      <div className="w-16 h-16 rounded-full bg-success-500/10 flex items-center justify-center mb-6">
        <CheckCircle size={36} className="text-success-500" aria-hidden="true" />
      </div>
      <h1 className="text-3xl font-bold text-slate-900 mb-3 text-balance">{content.heading}</h1>
      <p className="text-lg text-slate-600 mb-10 max-w-lg">{content.sub}</p>

      <div className="mb-10 rounded-2xl border border-slate-200 bg-slate-50 p-6 text-left max-w-md w-full">
        <h2 className="text-sm font-bold text-slate-900 mb-4">O que acontece agora</h2>
        <ol className="space-y-3">
          {content.whatsNext.map((step, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
              <span className="mono-stat flex-shrink-0 h-5 w-5 rounded-full bg-navy-900 text-white text-[10px] font-bold flex items-center justify-center mt-0.5">
                {i + 1}
              </span>
              {step}
            </li>
          ))}
        </ol>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-2 mb-8 text-sm text-slate-500">
        <Clock size={14} aria-hidden="true" />
        <span>Respondemos seg–sex, 8h–18h</span>
        <span className="mx-1 text-slate-300">·</span>
        <Phone size={14} aria-hidden="true" />
        <span>TODO: (19) XXXX-XXXX para urgências</span>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <LinkButton href="/" size="lg" variant="primary">
          Voltar ao início
        </LinkButton>
        <LinkButton href="/blog" size="lg" variant="secondary">
          Ler nosso blog
          <ArrowRight size={16} aria-hidden="true" />
        </LinkButton>
      </div>
    </div>
  )
}

// Next.js 16: searchParams is a Promise
export default async function ObrigadoPage({
  searchParams,
}: {
  searchParams: Promise<{ origem?: string }>
}) {
  const params = await searchParams
  const urlSearchParams = new URLSearchParams(params as Record<string, string>)

  return (
    <MarketingLayout>
      <Suspense>
        <ObrigadoContent searchParams={urlSearchParams} />
      </Suspense>
    </MarketingLayout>
  )
}
