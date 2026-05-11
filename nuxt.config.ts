// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxtjs/seo',
  ],

  ogImage: {
    enabled: true,
    defaults: {
      component: 'OgImageStatic',
      static: {
        imagePath: '/images/overall.png',
        width: 1200,
        height: 630,
        alt: 'Bynery - Indie dev studio building thoughtful apps',
      },
    },
  },

  // Disable experimental features causing #app-manifest error
  experimental: {
    appManifest: false,
  },

  // Configure sitemap to include dynamic routes
  sitemap: {
    urls: async () => {
      const { readdir } = await import('fs/promises')
      const { join } = await import('path')

      const routes = [
        { loc: '/', changefreq: 'weekly', priority: 1 },
        { loc: '/about', changefreq: 'monthly', priority: 0.6 },
        { loc: '/contact', changefreq: 'monthly', priority: 0.6 },
        { loc: '/products', changefreq: 'weekly', priority: 0.8 },
        { loc: '/easyreceipt', changefreq: 'weekly', priority: 0.8 },
        { loc: '/steppet', changefreq: 'weekly', priority: 0.8 },
      ]

      // Add blog posts from content directory
      const contentDir = join(process.cwd(), 'content')

      const getMarkdownFiles = async (dir: string) => {
        try {
          const files = await readdir(join(contentDir, dir))
          return files.filter((f: string) => f.endsWith('.md')).map((f: string) => f.replace('.md', ''))
        } catch {
          return []
        }
      }

      const easyReceiptPosts = await getMarkdownFiles('easyreceipt')
      const steppetPosts = await getMarkdownFiles('steppet')

      for (const post of easyReceiptPosts) {
        routes.push({ loc: `/easyreceipt/${post}`, changefreq: 'weekly', priority: 0.8 })
      }
      for (const post of steppetPosts) {
        routes.push({ loc: `/steppet/${post}`, changefreq: 'weekly', priority: 0.8 })
      }

      return routes
    },
  },

  site: {
    url: 'https://bynery.app',
    name: 'Bynery',
    description: 'Indie dev studio building thoughtful apps.',
    defaultLocale: 'en',
  },

  googleFonts: {
    families: {
      Geist: [300, 400, 500, 600, 700],
    },
    display: 'swap',
    preload: true,
  },

  content: {
    highlight: {
      theme: 'github-dark',
    },
  },

  tailwindcss: {
    cssPath: '~/assets/css/main.css',
  },

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      ],
      meta: [
        { name: 'theme-color', content: '#0a0a0a' },
      ],
    },
  },
})
