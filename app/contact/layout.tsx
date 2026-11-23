import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Talk to Solvix Core about your web development, custom software or automation project. Book a free consultation.',
  alternates: {
    canonical: 'https://solvixcore.com/contact',
  },
}

export default function ContactLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children
}
