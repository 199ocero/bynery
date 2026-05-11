// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxtjs/sitemap',
  ],

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
        { loc: '/blog', changefreq: 'weekly', priority: 0.8 },
      ]

      // Add blog posts from content directory
      const contentDir = join(process.cwd(), 'content')

      // Dynamically scan all subdirectories in content folder
      const getCategories = async () => {
        try {
          const entries = await readdir(contentDir, { withFileTypes: true })
          return entries
            .filter((entry: any) => entry.isDirectory())
            .map((entry: any) => entry.name)
        } catch {
          return []
        }
      }

      const getMarkdownFiles = async (dir: string) => {
        try {
          const files = await readdir(join(contentDir, dir))
          return files.filter((f: string) => f.endsWith('.md')).map((f: string) => f.replace('.md', ''))
        } catch {
          return []
        }
      }

      // Get all categories dynamically
      const categories = await getCategories()

      // Add category index pages and their posts
      for (const category of categories) {
        routes.push({ loc: `/${category}`, changefreq: 'weekly', priority: 0.8 })

        const posts = await getMarkdownFiles(category)
        for (const post of posts) {
          routes.push({ loc: `/${category}/${post}`, changefreq: 'weekly', priority: 0.8 })
        }
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
        { property: 'og:image', content: 'https://bynery.app/images/overall.png' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:alt', content: 'Bynery - Indie dev studio building thoughtful apps' },
        { property: 'og:image:type', content: 'image/png' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:image', content: 'https://bynery.app/images/overall.png' },
      ],
    },
  },
})
