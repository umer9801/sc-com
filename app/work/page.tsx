import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { Container, Section } from '@/components/section'
import { CTASection } from '@/components/cta-section'

export const metadata: Metadata = {
  title: 'Work',
  description:
    'A curated portfolio of websites and digital products we have built for businesses across the UK.',
}

export default function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Work / Portfolio"
        lines={[{ text: 'PROJECTS WE' }, { text: 'HAVE BUILT.', highlight: true }]}
        intro="Real businesses, real projects. From restaurants and automotive to legal services and wellness — every project built to convert and perform."
        index="PORTFOLIO"
      />

      {/* Coming Soon Section */}
      <Section className="bg-pearl">
        <Container>
          <div className="mx-auto max-w-3xl border-2 border-charcoal bg-white px-8 py-20 text-center shadow-[8px_8px_0_0_oklch(0.40_0.07_158)] md:px-16 md:py-32">
            <h2 className="font-display text-5xl font-semibold leading-tight tracking-wide text-charcoal md:text-7xl">
              COMING SOON
            </h2>
            
            <div className="mx-auto mt-10 h-1 w-32 bg-forest"></div>
            
            <p className="mt-10 text-xl text-graphite md:text-2xl">
              We are currently curating our portfolio showcase.
              <br />
              Our work will be available here soon.
            </p>
            
            <div className="mt-16 flex items-center justify-center gap-3 font-mono text-sm uppercase tracking-widest text-graphite">
              <span className="inline-block h-3 w-3 animate-pulse bg-forest"></span>
              Under Construction
            </div>
          </div>
        </Container>
      </Section>

      <CTASection />
    </>
  )
}
