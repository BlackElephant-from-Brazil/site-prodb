import type { Metadata } from 'next'
import MarketingLayout from '../layout-marketing'

export const metadata: Metadata = {
  title: 'Termos de Uso | ProDB Tecnologia',
  description: 'Termos e condições de uso do site e serviços da ProDB Tecnologia.',
}

// TODO: review with legal counsel before publishing
export default function TermosDeUsoPage() {
  return (
    <MarketingLayout>
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-[800px] px-4 md:px-6">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-slate-500">Legal</p>
          <h1 className="mb-2 text-3xl font-bold text-slate-900">Termos de Uso</h1>
          <p className="mb-8 text-sm text-slate-500">Última atualização: TODO: data</p>

          <div className="space-y-8 text-sm leading-relaxed text-slate-700">
            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-3">1. Aceitação dos termos</h2>
              <p>
                Ao acessar e utilizar este site (prodb.com.br) e os serviços da
                <strong> ProDB Tecnologia</strong> (CNPJ TODO), você concorda com estes Termos de Uso.
                Se não concordar, por favor não utilize o site ou os serviços.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-3">2. Uso do site</h2>
              <p>É permitido:</p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>Acessar e navegar pelo conteúdo para fins informativos e comerciais legítimos.</li>
                <li>Compartilhar links para páginas do site.</li>
                <li>Preencher formulários de contato e solicitar propostas comerciais.</li>
              </ul>
              <p className="mt-3">É proibido:</p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>Reproduzir conteúdo proprietário sem autorização escrita.</li>
                <li>Usar scraping, bots ou meios automatizados sem autorização prévia.</li>
                <li>Tentar acessar sistemas internos, APIs não públicas ou conteúdo restrito.</li>
                <li>Usar o site para fins ilegais ou que violem direitos de terceiros.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-3">3. Propriedade intelectual</h2>
              <p>
                Todo o conteúdo deste site — textos, logotipos, ilustrações, código — é propriedade
                da ProDB Tecnologia ou de seus licenciantes, protegido por lei de direitos autorais.
                A marca "ProDB" é de uso exclusivo da empresa.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-3">4. Limitação de responsabilidade</h2>
              <p>
                As informações neste site são fornecidas "como estão", sem garantias de completude
                ou precisão para fins específicos. A ProDB não se responsabiliza por danos diretos
                ou indiretos decorrentes do uso das informações aqui contidas. Valores, configurações
                e especificações são estimativas — a proposta contratual é o documento vinculante.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-3">5. Links externos</h2>
              <p>
                Este site pode conter links para sites de terceiros. A ProDB não controla nem
                endossa o conteúdo de sites externos e não se responsabiliza por sua disponibilidade
                ou precisão.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-3">6. Serviços contratados</h2>
              <p>
                Os termos específicos dos serviços de cloud, backup e gerenciamento são regidos
                pelos contratos individuais firmados entre a ProDB e o cliente, que prevalecem
                sobre este documento em caso de conflito.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-3">7. Legislação aplicável</h2>
              <p>
                Estes termos são regidos pelas leis da República Federativa do Brasil.
                Fica eleito o foro da comarca de Campinas/SP para dirimir quaisquer controvérsias,
                com renúncia expressa a qualquer outro foro, por mais privilegiado que seja.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-3">8. Contato</h2>
              <p>
                Para dúvidas sobre estes termos: <strong>TODO: legal@prodb.com.br</strong>.
              </p>
            </section>
          </div>
        </div>
      </section>
    </MarketingLayout>
  )
}
