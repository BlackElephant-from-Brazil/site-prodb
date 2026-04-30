import type { Metadata } from 'next'
import MarketingLayout from '../layout-marketing'

export const metadata: Metadata = {
  title: 'Política de Privacidade | ProDB Tecnologia',
  description: 'Como a ProDB Tecnologia coleta, usa e protege seus dados pessoais conforme a LGPD.',
  robots: { index: true, follow: true },
}

// TODO: review with legal counsel before publishing
export default function PoliticaPrivacidadePage() {
  return (
    <MarketingLayout>
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-[800px] px-4 md:px-6">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-slate-500">Legal</p>
          <h1 className="mb-2 text-3xl font-bold text-slate-900">Política de Privacidade</h1>
          <p className="mb-8 text-sm text-slate-500">Última atualização: TODO: data</p>

          <div className="prose prose-slate max-w-none space-y-8 text-sm leading-relaxed text-slate-700">
            <section aria-labelledby="privacy-intro">
              <h2 id="privacy-intro" className="text-lg font-bold text-slate-900 mb-3">1. Quem somos</h2>
              <p>
                A <strong>ProDB Tecnologia</strong> (CNPJ TODO: XX.XXX.XXX/0001-XX), com sede em
                Campinas/SP, é a controladora dos dados pessoais coletados por meio deste site e
                dos serviços prestados. Esta Política descreve como coletamos, usamos, armazenamos
                e protegemos seus dados pessoais, em conformidade com a Lei Geral de Proteção de
                Dados (LGPD — Lei nº 13.709/2018).
              </p>
            </section>

            <section aria-labelledby="privacy-data">
              <h2 id="privacy-data" className="text-lg font-bold text-slate-900 mb-3">2. Dados que coletamos</h2>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Dados de contato:</strong> nome, e-mail, telefone, empresa e cargo — informados voluntariamente em formulários.</li>
                <li><strong>Dados de navegação:</strong> endereço IP, tipo de browser, páginas visitadas, tempo de sessão — coletados via cookies analíticos (apenas com seu consentimento).</li>
                <li><strong>Dados de contrato:</strong> CNPJ, endereço de cobrança, informações de pagamento — coletados durante o processo de contratação de serviços.</li>
              </ul>
            </section>

            <section aria-labelledby="privacy-purpose">
              <h2 id="privacy-purpose" className="text-lg font-bold text-slate-900 mb-3">3. Finalidade e base legal</h2>
              <p>Usamos seus dados para:</p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>Responder a solicitações de contato e propostas comerciais (<em>base: legítimo interesse / execução de contrato</em>).</li>
                <li>Prestar os serviços contratados (<em>base: execução de contrato</em>).</li>
                <li>Enviar comunicações de marketing, com sua autorização prévia (<em>base: consentimento</em>).</li>
                <li>Cumprir obrigações legais e regulatórias (<em>base: cumprimento de obrigação legal</em>).</li>
              </ul>
            </section>

            <section aria-labelledby="privacy-sharing">
              <h2 id="privacy-sharing" className="text-lg font-bold text-slate-900 mb-3">4. Compartilhamento de dados</h2>
              <p>
                Não vendemos nem alugamos dados pessoais. Podemos compartilhar dados com:
              </p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>Prestadores de serviço essenciais (ex: provedores de e-mail transacional, plataformas de CRM) — sujeitos a acordos de confidencialidade.</li>
                <li>Autoridades públicas, quando exigido por lei.</li>
              </ul>
              <p className="mt-2">Todos os processadores de dados que contratamos têm sede no Brasil ou garantem conformidade equivalente à LGPD.</p>
            </section>

            <section aria-labelledby="privacy-retention">
              <h2 id="privacy-retention" className="text-lg font-bold text-slate-900 mb-3">5. Retenção de dados</h2>
              <p>
                Dados de clientes ativos são mantidos pelo período contratual + 5 anos (prazo legal).
                Dados de leads não convertidos são excluídos após 2 anos de inatividade.
                Logs de acesso são mantidos por 6 meses, conforme Marco Civil da Internet.
              </p>
            </section>

            <section aria-labelledby="privacy-rights">
              <h2 id="privacy-rights" className="text-lg font-bold text-slate-900 mb-3">6. Seus direitos</h2>
              <p>Conforme a LGPD, você pode solicitar:</p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>Confirmação de existência de tratamento de seus dados.</li>
                <li>Acesso, correção ou exclusão dos dados.</li>
                <li>Portabilidade dos dados.</li>
                <li>Revogação do consentimento, quando aplicável.</li>
                <li>Informação sobre compartilhamento.</li>
              </ul>
              <p className="mt-2">
                Envie sua solicitação para: <strong>TODO: privacidade@prodb.com.br</strong>.
                Respondemos em até 15 dias úteis.
              </p>
            </section>

            <section aria-labelledby="privacy-security">
              <h2 id="privacy-security" className="text-lg font-bold text-slate-900 mb-3">7. Segurança</h2>
              <p>
                Adotamos medidas técnicas e organizacionais compatíveis com ISO/IEC 27001:
                criptografia em repouso e em trânsito (AES-256/TLS 1.3), controle de acesso com
                MFA, logs de auditoria e testes periódicos de vulnerabilidade.
              </p>
            </section>

            <section aria-labelledby="privacy-cookies">
              <h2 id="privacy-cookies" className="text-lg font-bold text-slate-900 mb-3">8. Cookies</h2>
              <p>
                Usamos cookies necessários (funcionamento do site) e, com seu consentimento,
                cookies analíticos e de marketing. Veja nossa{' '}
                <a href="/politica-de-cookies" className="text-cyan-600 underline hover:text-cyan-500">
                  Política de Cookies
                </a>{' '}
                para detalhes.
              </p>
            </section>

            <section aria-labelledby="privacy-contact">
              <h2 id="privacy-contact" className="text-lg font-bold text-slate-900 mb-3">9. Contato e DPO</h2>
              <p>
                Encarregado de Dados (DPO): <strong>TODO: nome do DPO</strong> —
                e-mail: <strong>TODO: dpo@prodb.com.br</strong>. Para outros assuntos de privacidade,
                use: TODO: privacidade@prodb.com.br.
              </p>
            </section>

            <section aria-labelledby="privacy-changes">
              <h2 id="privacy-changes" className="text-lg font-bold text-slate-900 mb-3">10. Alterações nesta política</h2>
              <p>
                Podemos atualizar esta política periodicamente. A data de "última atualização" no
                topo indica a versão vigente. Alterações materiais serão notificadas por e-mail
                para clientes ativos.
              </p>
            </section>
          </div>
        </div>
      </section>
    </MarketingLayout>
  )
}
