import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Press_Start_2P, VT323, Share_Tech_Mono } from 'next/font/google'
import './globals.css'
import { LayoutWrapper } from '@/components/layout-wrapper'
import { OrganizationSchema, WebsiteSchema, LocalBusinessSchema } from '@/components/structured-data'

/* pixel body — VT323 is large and very readable at body sizes */
const inter = VT323({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['400'],
})

/* pixel display — Press Start 2P for headlines */
const display = Press_Start_2P({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['400'],
})

/* pixel mono — Share Tech Mono for eyebrows / tags / code */
const mono = Share_Tech_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  weight: ['400'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://solvixcore.com'),
  title: {
    default: 'Solvix Core — Web Development, Software & AI Automation Agency | Canada & UK',
    template: '%s | Solvix Core - Digital Engineering Studio',
  },
  description:
    'Expert web development, custom software, AI automation, and SaaS solutions for businesses in Canada, UK, and worldwide. Transform your business with cutting-edge digital engineering. Get a free consultation today.',
  keywords: [
    'web development Canada',
    'web development UK',
    'web development agency',
    'custom software development',
    'AI automation services',
    'SaaS development',
    'mobile app development',
    'e-commerce development',
    'website design Canada',
    'website design UK',
    'digital transformation',
    'business automation',
    'n8n automation',
    'API development',
    'cloud solutions',
    'MVP development',
    'startup technology partner',
    'enterprise software',
    'web application development',
    'React development',
    'Next.js development',
    'Node.js development',
    'full stack development',
    'remote software team',
    'offshore development',
    'digital agency Canada',
    'digital agency UK',
    'software consulting',
    'technology consulting',
  ],
  authors: [{ name: 'Solvix Core' }],
  creator: 'Solvix Core',
  publisher: 'Solvix Core',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://solvixcore.com',
    siteName: 'Solvix Core',
    title: 'Solvix Core — Web Development, Software & AI Automation Agency',
    description:
      'Expert web development, custom software, AI automation for businesses in Canada, UK & worldwide. Transform your business with cutting-edge digital solutions.',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Solvix Core - Digital Engineering Studio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Solvix Core — Web Development & AI Automation Agency',
    description:
      'Expert web development, custom software, AI automation for businesses worldwide. Get a free consultation today.',
    images: ['/logo.png'],
    creator: '@solvixcore',
    site: '@solvixcore',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://solvixcore.com',
  },
  verification: {
    google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f7f6f2',
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${display.variable} ${mono.variable}`}>
      <head>
        <OrganizationSchema />
        <WebsiteSchema />
        <LocalBusinessSchema />
      </head>
      <body className="antialiased font-sans">
        <LayoutWrapper>{children}</LayoutWrapper>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
