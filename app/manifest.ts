import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Solvix Core - Digital Engineering Studio',
    short_name: 'Solvix Core',
    description:
      'Expert web development, custom software, AI automation for businesses in Canada, UK & worldwide.',
    start_url: '/',
    display: 'standalone',
    background_color: '#f7f6f2',
    theme_color: '#3a6b4a',
    icons: [
      {
        src: '/logo.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  }
}
