import { useEffect } from 'react'

interface GoogleAnalyticsProps {
  trackingId: string
}

export default function GoogleAnalytics({ trackingId }: GoogleAnalyticsProps) {
  useEffect(() => {
    // Load Google Analytics script
    const script1 = document.createElement('script')
    script1.async = true
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`
    document.head.appendChild(script1)

    // Initialize Google Analytics
    const script2 = document.createElement('script')
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${trackingId}');
    `
    document.head.appendChild(script2)

    // Cleanup function
    return () => {
      document.head.removeChild(script1)
      document.head.removeChild(script2)
    }
  }, [trackingId])

  return null // This component doesn't render anything
} 