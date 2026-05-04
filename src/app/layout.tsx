import type { Metadata } from 'next'
import { Geist, Geist_Mono, Archivo, DM_Sans } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
})

const archivo = Archivo({
  variable: '--font-archivo',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
})

const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'ProDB Tecnologia | Cloud Brasileira Certificada — Servidores e Backup',
    template: '%s | ProDB Tecnologia',
  },
  description:
    'Cloud especialista brasileira: servidores gerenciados e backup com SLA 99,99%, ISO 27001, Tier III e suporte humano 24/7 em português. Campinas/SP.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://prodb.com.br'),
  openGraph: {
    siteName: 'ProDB Tecnologia',
    locale: 'pt_BR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} ${archivo.variable} ${dmSans.variable} h-full scroll-smooth antialiased`}
    >
      <head>
        {/* GA4 — fires only after cookie consent; see lib/analytics.ts */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('consent', 'default', {
                    analytics_storage: 'denied',
                    ad_storage: 'denied'
                  });
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', { send_page_view: false });
                `,
              }}
            />
          </>
        )}
        {/* Hotjar placeholder — uncomment and add site ID before deploy
        <script dangerouslySetInnerHTML={{ __html: `(function(h,o,t,j,a,r){...})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');` }} />
        */}
        {/* Microsoft Clarity placeholder — uncomment and add project ID before deploy
        <script dangerouslySetInnerHTML={{ __html: `(function(c,l,a,r,i,t,y){...})(window, document, "clarity", "script", "YOUR_CLARITY_ID");` }} />
        */}
      </head>
      <body className="min-h-dvh flex flex-col bg-slate-50 text-slate-700 font-sans">
        {/* Hidden SVG filter definitions for Liquid Glass refraction — must be in DOM before any url(#id) CSS reference */}
        <svg
          aria-hidden="true"
          focusable="false"
          style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden', pointerEvents: 'none' }}
        >
          <defs>
            <filter id="lg-refract" x="-20%" y="-20%" width="140%" height="140%" colorInterpolationFilters="sRGB">
              <feTurbulence type="fractalNoise" baseFrequency="0.65 0.75" numOctaves="3" seed="2" result="noise" />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="50" xChannelSelector="R" yChannelSelector="G" />
            </filter>
            <filter id="lg-soft" x="-20%" y="-20%" width="140%" height="140%" colorInterpolationFilters="sRGB">
              <feTurbulence type="fractalNoise" baseFrequency="0.5 0.6" numOctaves="2" seed="5" result="noise" />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="30" xChannelSelector="R" yChannelSelector="G" />
            </filter>
          </defs>
        </svg>
        <a href="#main-content" className="skip-link">
          Pular para o conteúdo principal
        </a>
        {children}
      </body>
    </html>
  )
}
