import type { Metadata } from 'next'
import Link from 'next/link'
import MarketingLayout from '../layout-marketing'
import { posts } from '@/content/posts'
import { CTABandSection } from '@/components/sections/CTABandSection'
import { Clock, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog | ProDB Tecnologia',
  description:
    'Artigos técnicos sobre cloud, backup, segurança e infraestrutura gerenciada. Conteúdo em português para gestores de TI brasileiros.',
}

const categories = ['Todos', ...Array.from(new Set(posts.map(p => p.category)))]

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export default function BlogPage() {
  const [featured, ...rest] = posts

  return (
    <MarketingLayout>
      {/* Hero */}
      <section className="bg-navy-900 text-white py-16 md:py-24 relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-10"
          style={{ background: 'radial-gradient(ellipse at 50% 50%, #22D3EE 0%, transparent 60%)' }}
        />
        <div className="relative mx-auto max-w-[1184px] px-4 md:px-6 xl:px-8">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-cyan-400">Blog</p>
          <h1 className="mb-4 text-3xl font-bold md:text-4xl text-balance max-w-2xl">
            Conteúdo técnico para gestores de TI brasileiros
          </h1>
          <p className="text-slate-300 max-w-xl">
            Cloud, backup, segurança e infraestrutura — sem jargão desnecessário, com exemplos práticos.
          </p>
        </div>
      </section>

      {/* Category filter — static, no JS filtering for simplicity */}
      <section className="bg-white border-b border-slate-100 py-4">
        <div className="mx-auto max-w-[1184px] px-4 md:px-6 xl:px-8">
          <nav aria-label="Filtro por categoria" className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <span
                key={cat}
                className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-colors ${
                  cat === 'Todos'
                    ? 'bg-navy-900 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </span>
            ))}
          </nav>
        </div>
      </section>

      <div className="bg-slate-50 py-16 md:py-20">
        <div className="mx-auto max-w-[1184px] px-4 md:px-6 xl:px-8 space-y-12">
          {/* Featured post */}
          {featured && (
            <article aria-labelledby="featured-post-title">
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-cyan-600">
                Artigo em destaque
              </p>
              <Link
                href={`/blog/${featured.slug}`}
                className="group block rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md hover:border-cyan-300 transition-all overflow-hidden"
              >
                {/* TODO: replace with real featured image */}
                <div className="h-48 bg-gradient-to-br from-navy-900 to-navy-700 flex items-center justify-center md:h-64">
                  <span className="text-5xl opacity-20" aria-hidden="true">📡</span>
                </div>
                <div className="p-6 md:p-8">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-700">
                      {featured.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-slate-500">
                      <Clock size={12} aria-hidden="true" />
                      {featured.readTime} min de leitura
                    </span>
                    <time dateTime={featured.date} className="text-xs text-slate-500">
                      {formatDate(featured.date)}
                    </time>
                  </div>
                  <h2 id="featured-post-title" className="mb-3 text-xl font-bold text-slate-900 group-hover:text-cyan-700 transition-colors text-balance md:text-2xl">
                    {featured.title}
                  </h2>
                  <p className="text-slate-600 leading-relaxed mb-4 max-w-3xl">{featured.excerpt}</p>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-600 group-hover:gap-3 transition-all">
                    Ler artigo completo <ArrowRight size={16} aria-hidden="true" />
                  </span>
                </div>
              </Link>
            </article>
          )}

          {/* Post grid */}
          {rest.length > 0 && (
            <div>
              <h2 className="mb-6 text-lg font-bold text-slate-900">Mais artigos</h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {rest.map(post => (
                  <article key={post.slug} aria-labelledby={`post-${post.slug}`}>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="group flex flex-col h-full rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md hover:border-cyan-300 transition-all overflow-hidden"
                    >
                      {/* TODO: replace with real post thumbnail */}
                      <div className="h-36 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                        <span className="text-3xl opacity-30" aria-hidden="true">
                          {post.category === 'Cloud' ? '☁️' : post.category === 'Segurança' ? '🔒' : '⚙️'}
                        </span>
                      </div>
                      <div className="flex flex-col flex-1 p-5">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-semibold text-slate-600">
                            {post.category}
                          </span>
                          <span className="flex items-center gap-1 text-[11px] text-slate-400">
                            <Clock size={11} aria-hidden="true" />
                            {post.readTime} min
                          </span>
                        </div>
                        <h3 id={`post-${post.slug}`} className="mb-2 text-sm font-bold text-slate-900 group-hover:text-cyan-700 transition-colors line-clamp-2 text-balance">
                          {post.title}
                        </h3>
                        <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-4 flex-1">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between mt-auto">
                          <time dateTime={post.date} className="text-xs text-slate-400">
                            {formatDate(post.date)}
                          </time>
                          <span className="text-xs font-semibold text-cyan-600 group-hover:underline">
                            Ler →
                          </span>
                        </div>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <CTABandSection
        heading="Quer receber artigos como este?"
        subheading="Fale com nossa equipe e receba conteúdo técnico sobre cloud e segurança direto no seu e-mail."
        primaryLabel="Entrar em contato"
        primaryHref="/contato"
        secondaryLabel="Ver soluções"
        secondaryHref="/#solucoes"
      />
    </MarketingLayout>
  )
}
