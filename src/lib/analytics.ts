'use client'

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
    _analyticsConsent?: boolean
  }
}

const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? '' // TODO: set GA4 ID before deploy

type EventName =
  | 'cta_click'
  | 'form_start'
  | 'form_submit'
  | 'form_error'
  | 'pricing_plan_select'
  | 'whatsapp_open'
  | 'phone_click'
  | 'configurator_change'
  | 'configurator_quote_click'

interface EventParams {
  location?: string
  plan?: string
  form_name?: string
  error_field?: string
  [key: string]: string | number | boolean | undefined
}

function devLog(event: EventName, params?: EventParams) {
  if (process.env.NODE_ENV === 'development') {
    console.log('[Analytics]', event, params ?? {})
  }
}

export function trackEvent(event: EventName, params?: EventParams) {
  devLog(event, params)
  if (typeof window === 'undefined') return
  if (!window._analyticsConsent) return
  if (!GA_ID || typeof window.gtag !== 'function') return
  window.gtag('event', event, params)
}

export function setConsent(analytics: boolean, marketing: boolean) {
  if (typeof window === 'undefined') return
  window._analyticsConsent = analytics
  if (typeof window.gtag === 'function') {
    window.gtag('consent', 'update', {
      analytics_storage: analytics ? 'granted' : 'denied',
      ad_storage: marketing ? 'granted' : 'denied',
    })
  }
}
