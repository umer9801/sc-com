'use client'

import { Instagram, Facebook, Linkedin, Twitter } from 'lucide-react'

const SOCIAL_LINKS = [
  { 
    name: 'Instagram', 
    href: 'https://www.instagram.com/solvixcore', 
    icon: Instagram,
    color: 'hover:text-pink-600'
  },
  { 
    name: 'Facebook', 
    href: 'https://www.facebook.com/share/1JrWFBgyhJ', 
    icon: Facebook,
    color: 'hover:text-blue-600'
  },
  { 
    name: 'LinkedIn', 
    href: 'https://linkedin.com/company/solvixcore', 
    icon: Linkedin,
    color: 'hover:text-blue-700'
  },
  { 
    name: 'Twitter', 
    href: 'https://twitter.com/solvixcore', 
    icon: Twitter,
    color: 'hover:text-sky-500'
  },
]

export function SocialLinks({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {SOCIAL_LINKS.map((social) => (
        <a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Follow us on ${social.name}`}
          className={`flex size-9 items-center justify-center border-2 border-line bg-pearl text-graphite transition-all hover:border-charcoal hover:shadow-[2px_2px_0_0_var(--charcoal)] ${social.color}`}
        >
          <social.icon className="size-4" />
        </a>
      ))}
    </div>
  )
}

export function SocialProofBanner() {
  return (
    <div className="border-y-2 border-charcoal bg-pearl py-4">
      <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-4 px-5 md:flex-row md:px-8">
        <div className="flex items-center gap-3">
          <span className="font-mono text-[9px] uppercase tracking-widest text-graphite">
            Follow Our Journey
          </span>
          <div className="h-px w-8 bg-line" />
        </div>
        <SocialLinks />
        <div className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-widest text-graphite">
          <span className="inline-block size-2 animate-pulse rounded-full bg-forest"></span>
          Building in Public
        </div>
      </div>
    </div>
  )
}
