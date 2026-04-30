import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { posts } from '@/content/posts'

export function BlogTeaserSection() {
  const latest = posts.slice(0, 3)

  return (
    <section
      className="bg-white py-16 md:py-24"
      aria-labelledby="blog-teaser-heading"
    >
      <div className="mx-auto max-w-[1184px] px-4 md:px-6 xl:px-8">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-slate-500">
              Blog
            </p>
            <h2
              id="blog-teaser-heading"
              className="text-2xl font-bold text-slate-900 md:text-3xl"
            >
              Conteúdo técnico para gestores de TI
            </h2>
          </div>
          <Link
            href="/blog"
            className="shrink-0 flex items-center gap-1 text-sm font-medium text-cyan-600 hover:text-cyan-500 transition-colors"
          >
            Ver todos <ArrowRight size={14} aria-hidden="true" />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {latest.map(post => (
            <article key={post.slug} className="group flex flex-col">
              <Link href={`/blog/${post.slug}`} className="block">
                <div className="mb-4 rounded-2xl bg-slate-100 aspect-[16/9] overflow-hidden">
                  {/* TODO: Add blog post cover images */}
                  <div className="h-full w-full flex items-center justify-center">
                    <span className="text-xs text-slate-400 font-medium">{post.category}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-2 text-xs text-slate-500">
                  <span className="font-medium text-cyan-600">{post.category}</span>
                  <span>·</span>
                  <span>{post.readTime} min de leitura</span>
                </div>

                <h3 className="mb-2 text-base font-bold text-slate-900 leading-snug group-hover:text-cyan-600 transition-colors text-pretty">
                  {post.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed line-clamp-2">
                  {post.excerpt}
                </p>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
