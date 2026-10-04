export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Solvix Core',
    description:
      'Expert web development, custom software, AI automation, and SaaS solutions for businesses in Canada, UK, and worldwide.',
    url: 'https://solvixcore.com',
    logo: 'https://solvixcore.com/logo.png',
    email: 'info@solvixcore.com',
    telephone: ['+14378898265', '+447348486506'],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'Remote Worldwide',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+1-437-889-8265',
        contactType: 'Customer Service',
        areaServed: ['CA', 'US'],
        availableLanguage: ['English'],
      },
      {
        '@type': 'ContactPoint',
        telephone: '+44-7348-486506',
        contactType: 'Customer Service',
        areaServed: ['GB', 'EU'],
        availableLanguage: ['English'],
      },
    ],
    sameAs: [
      'https://www.instagram.com/solvixcore',
      'https://www.facebook.com/share/1JrWFBgyhJ',
      'https://linkedin.com/company/solvixcore',
      'https://twitter.com/solvixcore',
    ],
    founder: {
      '@type': 'Person',
      name: 'Solvix Core Team',
    },
    foundingDate: '2024',
    areaServed: ['CA', 'US', 'GB', 'EU', 'Worldwide'],
    serviceType: [
      'Web Development',
      'Software Development',
      'AI Automation',
      'SaaS Development',
      'Mobile App Development',
      'E-commerce Development',
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function WebsiteSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Solvix Core',
    url: 'https://solvixcore.com',
    description:
      'Expert web development, custom software, AI automation for businesses worldwide.',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://solvixcore.com/search?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Solvix Core',
    description:
      'Digital engineering studio specializing in web development, software, AI automation for businesses in Canada, UK and worldwide.',
    url: 'https://solvixcore.com',
    logo: 'https://solvixcore.com/logo.png',
    image: 'https://solvixcore.com/logo.png',
    telephone: '+14378898265',
    email: 'info@solvixcore.com',
    priceRange: '$$',
    areaServed: ['Canada', 'United Kingdom', 'United States', 'Worldwide'],
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Digital Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Web Development',
            description: 'Custom website development with modern frameworks',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'SaaS Development',
            description: 'End-to-end SaaS product development',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'AI Automation',
            description: 'Business process automation with AI',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Mobile App Development',
            description: 'Native and cross-platform mobile applications',
          },
        },
      ],
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function BreadcrumbSchema({ items }: { items: Array<{ name: string; url: string }> }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
