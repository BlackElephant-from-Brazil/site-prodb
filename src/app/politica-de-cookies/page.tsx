import type { Metadata } from 'next'
import MarketingLayout from '../layout-marketing'

export const metadata: Metadata = {
  title: 'Política de Cookies | ProDB Tecnologia',
  description:
    'Informações sobre os cookies utilizados no site ProDB Tecnologia e como gerenciar suas preferências.',
}

const cookieTable = [
  {
    name: 'prodb-cookie-consent',
    type: 'Necessário',
    purpose: 'Armazena suas preferências de cookies para evitar exibir o banner repetidamente.',
    duration: '1 ano',
    provider: 'ProDB (first-party)',
  },
  {
    name: '_ga, _ga_*',
    type: 'Analítico',
    purpose: 'Google Analytics 4 — mede pageviews, sessões e origem do tráfego.',
    duration: '2 anos',
    provider: 'Google',
  },
  {
    name: '_fbp',
    type: 'Marketing',
    purpose: 'Meta Pixel — rastreamento de conversão para campanhas de anúncios.',
    duration: '3 meses',
    provider: 'Meta',
  },
]

export default function PoliticaDeCookiesPage() {
  return (
    <MarketingLayout>
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-[800px] px-4 md:px-6">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-slate-500">Legal</p>
          <h1 className="mb-2 text-3xl font-bold text-slate-900">Política de Cookies</h1>
          <p className="mb-8 text-sm text-slate-500">Última atualização: TODO: data</p>

          <div className="space-y-8 text-sm leading-relaxed text-slate-700">
            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-3">O que são cookies?</h2>
              <p>
                Cookies são pequenos arquivos de texto armazenados no seu browser quando você
                visita um site. Eles permitem que o site reconheça seu dispositivo em visitas
                futuras e lembre de suas preferências.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-3">Categorias de cookies que utilizamos</h2>

              <div className="space-y-4">
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <h3 className="font-bold text-slate-900 mb-1">Necessários</h3>
                  <p className="text-slate-600">
                    Essenciais para o funcionamento do site. Não podem ser desabilitados.
                    Incluem cookies de sessão e de preferências de consentimento.
                  </p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <h3 className="font-bold text-slate-900 mb-1">Analíticos</h3>
                  <p className="text-slate-600">
                    Nos ajudam a entender como os visitantes usam o site (páginas visitadas,
                    tempo de sessão, origem do tráfego). Usamos Google Analytics 4.
                    Nenhum dado pessoal identificável é enviado ao Google sem sua permissão.
                  </p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <h3 className="font-bold text-slate-900 mb-1">Marketing</h3>
                  <p className="text-slate-600">
                    Usados para medir a eficácia de campanhas de anúncios online (Google Ads,
                    Meta). Só ativados com seu consentimento explícito.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-3">Tabela de cookies</h2>
              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-xs min-w-[600px]">
                  <thead className="bg-slate-50 border-b border-slate-200">
                    <tr>
                      <th className="py-3 px-4 text-left font-semibold text-slate-700">Nome</th>
                      <th className="py-3 px-4 text-left font-semibold text-slate-700">Tipo</th>
                      <th className="py-3 px-4 text-left font-semibold text-slate-700">Finalidade</th>
                      <th className="py-3 px-4 text-left font-semibold text-slate-700">Duração</th>
                      <th className="py-3 px-4 text-left font-semibold text-slate-700">Fornecedor</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cookieTable.map((row, i) => (
                      <tr key={row.name} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}>
                        <td className="py-3 px-4 font-mono text-slate-800">{row.name}</td>
                        <td className="py-3 px-4 text-slate-700">{row.type}</td>
                        <td className="py-3 px-4 text-slate-600">{row.purpose}</td>
                        <td className="py-3 px-4 text-slate-700">{row.duration}</td>
                        <td className="py-3 px-4 text-slate-700">{row.provider}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-3">Como gerenciar seus cookies</h2>
              <p className="mb-3">
                Você pode alterar suas preferências de cookies a qualquer momento clicando em
                "Preferências de cookies" no rodapé do site, ou via o banner exibido na primeira visita.
              </p>
              <p>
                Você também pode configurar seu browser para bloquear ou excluir cookies. Note
                que isso pode afetar o funcionamento de algumas funcionalidades do site.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-3">Contato</h2>
              <p>
                Para dúvidas sobre esta política: <strong>TODO: privacidade@prodb.com.br</strong>.
                Veja também nossa{' '}
                <a href="/politica-de-privacidade" className="text-cyan-600 underline hover:text-cyan-500">
                  Política de Privacidade
                </a>.
              </p>
            </section>
          </div>
        </div>
      </section>
    </MarketingLayout>
  )
}
