'use client'

import { UMAMI_TYPEUMAMI_TYPE } from '@/lib/analytics'
import { useReportWebVitals } from 'next/web-vitals'

declare global {
  // eslint-disable-next-line no-unused-vars
  interface Window {
    umami: any
  }
}
export function WebVitals() {
  useReportWebVitals((metric) => {
    if (!window || !window.umami) {
      return null
    }
    switch (metric.name) {
      case 'FCP': {
        window.umami.track(UMAMI_TYPEUMAMI_TYPE.webVitals.fcp.name, { data: metric.value })
        break
      }
      case 'LCP': {
        window.umami.track(UMAMI_TYPEUMAMI_TYPE.webVitals.lcp.name, { data: metric.value })
        break
      }
      case 'CLS': {
        window.umami.track(UMAMI_TYPEUMAMI_TYPE.webVitals.cls.name, { data: metric.value })
        break
      }
      case 'FID': {
        window.umami.track(UMAMI_TYPEUMAMI_TYPE.webVitals.fid.name, { data: metric.value })
        break
      }
      case 'INP': {
        window.umami.track(UMAMI_TYPEUMAMI_TYPE.webVitals.inp.name, { data: metric.value })
      }
    }
  })

  return null
}
