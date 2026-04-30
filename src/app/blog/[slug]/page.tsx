import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import MarketingLayout from '../../layout-marketing'
import { posts, getPost } from '@/content/posts'
import { CTABandSection } from '@/components/sections/CTABandSection'
import { LinkButton } from '@/components/ui/Button'
import { Clock, Calendar, ArrowLeft, ArrowRight } from 'lucide-react'

// Next.js 16: params is a Promise
type Params = Promise<{ slug: string }>

export async function generateStaticParams() {
  return posts.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return {}
  return {
    title: `${post.title} | Blog ProDB`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
    },
  }
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

// Minimal markdown-to-HTML renderer for the subset we use
function renderMarkdown(md: string): string {
  return md
    .replace(/^## (.+)$/gm, '<h2 class="text-xl font-bold text-slate-900 mt-8 mb-4 md:text-2xl">$1</h2>')
    .replace(/^### (.+)$/gm, '<h3 class="text-base font-bold text-slate-900 mt-6 mb-2">$1</h3>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/^- (.+)$/gm, '<li class="ml-4 list-disc text-slate-700 leading-relaxed">$1</li>')
    .replace(/(<li.*<\/li>\n?)+/gm, m => `<ul class="my-3 space-y-1">${m}</ul>`)
    .replace(/^(\d+)\. (.+)$/gm, '<li class="ml-4 list-decimal text-slate-700 leading-relaxed">$2</li>')
    .replace(/\n\n/g, '</p><p class="text-slate-700 leading-relaxed my-4">')
    .replace(/^(?!<[hul])/, '<p class="text-slate-700 leading-relaxed my-4">')
    .replace(/$(?![>])/, '</p>')
}

export default async function BlogPostPage({ params }: { params: Params }) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  const postIndex = posts.findIndex(p => p.slug === slug)
  const prevPost = postIndex > 0 ? posts[postIndex - 1] : null
  const nextPost = postIndex < posts.length - 1 ? posts[postIndex + 1] : null
  const relatedPosts = posts.filter(p => p.slug !== slug && p.category === post.category).slice(0, 2)

  return (
    <MarketingLayout>
      {/* Article header */}
      <section className="bg-navy-900 text-white py-16 md:py-24 relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-10"
          style={{ background: 'radial-gradient(ellipse at 40% 60%, #22D3EE 0%, transparent 50%)' }}
        />
        <div className="relative mx-auto max-w-[1184px] px-4 md:px-6 xl:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-cyan-400 transition-colors mb-8"
          >
            <ArrowLeft size={14} aria-hidden="true" />
            Voltar ao blog
          </Link>
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="rounded-full bg-cyan-400/15 px-3 py-1 text-xs font-semibold text-cyan-400">
                {post.category}
              </span>
              <span className="flex items-center gap-1.5 text-xs text-slate-400">
                <Clock size={12} aria-hidden="true" />
                {post.readTime} min de leitura
              </span>
              <time dateTime={post.date} className="flex items-center gap-1.5 text-xs text-slate-400">
                <Calendar size={12} aria-hidden="true" />
                {formatDate(post.date)}
              </time>
            </div>
            <h1 className="text-2xl font-bold leading-snug text-balance md:text-3xl lg:text-4xl">
              {post.title}
            </h1>
            <p className="mt-4 text-slate-300 leading-relaxed">{post.excerpt}</p>
          </div>
        </div>
      </section>

      {/* Article body */}
      <div className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-[1184px] px-4 md:px-6 xl:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_280px] lg:items-start">
            {/* Main content */}
            <article className="max-w-3xl">
              {/* TODO: real featured image */}
              <div className="mb-8 rounded-2xl bg-gradient-to-br from-navy-900 to-navy-700 h-48 md:h-64 flex items-center justify-center">
                <span className="text-6xl opacity-20" aria-hidden="true">📡</span>
              </div>

              {/* Mid-article CTA */}
              <div className="prose prose-slate max-w-none">
                <div
                  className="[&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-slate-900 [&_h2]:mt-8 [&_h2]:mb-4 [&_h2]:md:text-2xl [&_h3]:text-base [&_h3]:font-bold [&_h3]:text-slate-900 [&_h3]:mt-6 [&_h3]:mb-2 [&_p]:text-slate-700 [&_p]:leading-relaxed [&_p]:my-4 [&_strong]:text-slate-900 [&_strong]:font-semibold [&_ul]:my-3 [&_ul]:space-y-1 [&_li]:ml-4 [&_li]:list-disc [&_li]:text-slate-700 [&_li]:leading-relaxed [&_ol]:my-3 [&_ol]:space-y-1 [&_ol>li]:list-decimal [&_ol>li]:ml-4 [&_ol>li]:text-slate-700"
                  dangerouslySetInnerHTML={{ __html: renderMarkdown(post.body) }}
                />
              </div>

              {/* Mid-article CTA */}
              <div className="mt-10 rounded-2xl border border-cyan-200 bg-cyan-50 p-6">
                <p className="text-sm font-semibold text-navy-900 mb-1">
                  Quer uma avaliação gratuita da sua infraestrutura?
                </p>
                <p className="text-sm text-slate-600 mb-4">
                  Nossa equipe analisa seu ambiente atual e identifica oportunidades de otimização
                  sem compromisso.
                </p>
                <LinkButton href="/contato" size="sm" variant="primary">
                  Falar com especialista
                </LinkButton>
              </div>

              {/* Post navigation */}
              {(prevPost || nextPost) && (
                <nav aria-label="Navegação entre artigos" className="mt-12 grid gap-4 sm:grid-cols-2">
                  {prevPost && (
                    <Link
                      href={`/blog/${prevPost.slug}`}
                      className="group flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4 hover:border-cyan-300 transition-colors"
                    >
                      <ArrowLeft size={16} className="text-slate-400 mt-0.5 shrink-0 group-hover:text-cyan-600 transition-colors" aria-hidden="true" />
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-1">Anterior</p>
                        <p className="text-xs font-semibold text-slate-800 group-hover:text-cyan-700 transition-colors line-clamp-2">
                          {prevPost.title}
                        </p>
                      </div>
                    </Link>
                  )}
                  {nextPost && (
                    <Link
                      href={`/blog/${nextPost.slug}`}
                      className="group flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4 hover:border-cyan-300 transition-colors sm:ml-auto sm:text-right sm:flex-row-reverse"
                    >
                      <ArrowRight size={16} className="text-slate-400 mt-0.5 shrink-0 group-hover:text-cyan-600 transition-colors" aria-hidden="true" />
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-1">Próximo</p>
                        <p className="text-xs font-semibold text-slate-800 group-hover:text-cyan-700 transition-colors line-clamp-2">
                          {nextPost.title}
                        </p>
                      </div>
                    </Link>
                  )}
                </nav>
              )}
            </article>

            {/* Sidebar */}
            <aside className="lg:sticky lg:top-24 space-y-6" aria-label="Sidebar do artigo">
              {/* Related posts */}
              {relatedPosts.length > 0 && (
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                  <h2 className="mb-4 text-sm font-bold text-slate-900">Artigos relacionados</h2>
                  <ul className="space-y-4">
                    {relatedPosts.map(rp => (
                      <li key={rp.slug}>
                        <Link
                          href={`/blog/${rp.slug}`}
                          className="group flex flex-col gap-1 hover:no-underline"
                        >
                          <span className="text-xs font-semibold text-slate-800 group-hover:text-cyan-700 transition-colors line-clamp-2 leading-snug">
                            {rp.title}
                          </span>
                          <span className="flex items-center gap-1.5 text-[11px] text-slate-400">
                            <Clock size={11} aria-hidden="true" />
                            {rp.readTime} min
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* CTA card */}
              <div className="rounded-xl border-2 border-cyan-400 bg-navy-900 text-white p-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-2">
                  ProDB Tecnologia
                </p>
                <p className="text-sm font-bold text-white mb-2">
                  Infraestrutura cloud gerenciada com SLA em contrato
                </p>
                <p className="text-xs text-slate-400 mb-4">
                  Backup a partir de R$ 99/mês. Servidor cloud com suporte 24/7 em português.
                </p>
                <LinkButton href="/contato" size="sm" variant="primary" className="w-full">
                  Falar com especialista
                </LinkButton>
              </div>
            </aside>
          </div>
        </div>
      </div>

      <CTABandSection />
    </MarketingLayout>
  )
}
