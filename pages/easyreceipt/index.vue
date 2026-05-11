<script setup lang="ts">
useAppSeo({
  title: 'EasyReceipt Scanner',
  description: 'Scan receipts with superpowers. AI-powered receipt scanning with multi-currency support, fast exports, and expense tracking.',
  url: '/easyreceipt',
})

const { data: posts } = await useAsyncData('easyreceipt-posts', () =>
  queryContent('/easyreceipt').sort({ date: -1 }).find()
)

const features = [
  { title: 'AI Smart Scan', description: 'Automated data extraction from receipts using advanced AI models.', icon: '🤖' },
  { title: 'Multi-Currency Support', description: 'Instant conversion using global exchange rates.', icon: '💱' },
  { title: 'Fast Exports', description: 'Export receipts to formatted CSV or Google Sheets.', icon: '📤' },
  { title: 'Expense Summary', description: 'View and export expense summaries (depending on plan).', icon: '📊' },
]

const screenshots = [
  { title: 'Dashboard', description: 'View all your receipts at a glance with powerful filters' },
  { title: 'Scan View', description: 'Point and shoot — our AI does the rest' },
  { title: 'Receipt Details', description: 'Every line item extracted and searchable' },
]

const pricing = [
  {
    name: 'Free',
    price: '$0.00',
    period: '/month',
    description: 'Perfect for casual users',
    features: [
      '10 scans/month',
      'Smart Scan ✅',
      'Receipt History: 3 months',
      'Export CSV: ❌',
      'Export Google Sheets: ❌',
      'Multi-currency: Limited',
      'Expense Summary: View only',
    ],
    cta: 'Download Free',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '$5.99',
    period: '/month',
    description: 'For freelancers and small businesses',
    features: [
      '200 scans/month',
      'Smart Scan ✅',
      'Receipt History: 1 year',
      'Export CSV ✅',
      'Export Google Sheets ✅',
      'Multi-currency: ✅ Full',
      'Expense Summary: View only',
    ],
    cta: 'Download Pro',
    highlighted: true,
  },
  {
    name: 'Power',
    price: '$9.99',
    period: '/month',
    description: 'For heavy users and larger businesses',
    features: [
      'Unlimited scans',
      'Smart Scan ✅',
      'Receipt History: Forever',
      'Export CSV ✅',
      'Export Google Sheets ✅',
      'Multi-currency: ✅ Full',
      'Expense Summary: Summary + Export',
    ],
    cta: 'Download Power',
    highlighted: false,
  },
]

const planRecommendations = [
  {
    userType: 'Casual/Personal User',
    recommendedPlan: 'Free',
    price: '$0.00/mo',
    description: 'Great for occasional receipt scanning',
  },
  {
    userType: 'Freelancer or Small Business',
    recommendedPlan: 'Pro',
    price: '$5.99/mo',
    description: 'Perfect for managing business expenses',
    highlighted: true,
  },
  {
    userType: 'Heavy User or Larger Business',
    recommendedPlan: 'Power',
    price: '$9.99/mo',
    description: 'For maximum scanning and exports',
  },
]

const faqs = [
  {
    question: 'How does the AI scanning work?',
    answer: 'Simply snap a photo of any receipt and our AI automatically extracts merchant name, date, items, prices, tax, and total. It works with printed receipts, digital receipts, and even faded thermal receipts.',
  },
  {
    question: 'Is my receipt data secure?',
    answer: 'Yes. All data is encrypted in transit and at rest. We never sell your data to third parties. You remain in full control of your information and can delete it at any time.',
  },
  {
    question: 'Can I use this for business expenses?',
    answer: 'Absolutely. EasyReceipt Scanner is designed for both personal and business use. Upgrade to Pro or Power to export your receipts to CSV or Google Sheets for easy accounting integration.',
  },
  {
    question: 'What\'s the difference between the plans?',
    answer: 'Free: 10 scans/month, 3-month history, AI scanning only. Pro: 200 scans/month, 1-year history, CSV + Google Sheets exports. Power: Unlimited scans, forever history, plus expense summary exports.',
  },
  {
    question: 'How do I export my receipts?',
    answer: 'Pro and Power users can tap the export button to download as CSV or send directly to Google Sheets. Power users can also export expense summaries for easy reporting.',
  },
  {
    question: 'Does it work with faded or damaged receipts?',
    answer: 'Yes, our AI is trained to handle various receipt conditions including faded thermal prints, crumpled paper, and low-quality photos.',
  },
]

// SEO: Product + FAQPage structured data
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: 'EasyReceipt Scanner',
        description: 'AI-powered receipt scanning with multi-currency support, fast exports, and expense tracking.',
        image: 'https://bynery.app/og-default.png',
        brand: {
          '@type': 'Organization',
          name: 'Bynery'
        },
        offers: [
          {
            '@type': 'Offer',
            name: 'Free',
            price: '0.00',
            priceCurrency: 'USD'
          },
          {
            '@type': 'Offer',
            name: 'Pro',
            price: '5.99',
            priceCurrency: 'USD'
          },
          {
            '@type': 'Offer',
            name: 'Power',
            price: '9.99',
            priceCurrency: 'USD'
          }
        ],
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.8',
          bestRating: '5',
          worstRating: '1'
        },
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'iOS, Android'
      }),
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map(faq => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer
          }
        }))
      }),
    },
  ],
})
</script>

<template>
  <!-- Hero -->
  <section class="relative overflow-hidden pt-28 pb-20 lg:pt-32 lg:pb-28">
    <div class="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[radial-gradient(ellipse_at_top,rgba(94,106,210,0.15)_0%,transparent_75%)]"></div>

    <BaseContainer>
      <div class="mx-auto max-w-3xl text-center relative">
        <div class="inline-flex items-center gap-2 rounded-full border border-[#5e6ad2]/30 bg-[#5e6ad2]/5 px-4 py-2 text-sm text-[#5e6ad2] mb-8">
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#5e6ad2] opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-[#5e6ad2]"></span>
          </span>
          Now available on iOS & Android
        </div>
        <h1 class="text-4xl font-bold tracking-tight text-[#f0f0f0] sm:text-5xl lg:text-6xl">
          Scan receipts<br>
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#5e6ad2] to-[#6b78dc]">
            with superpowers.
          </span>
        </h1>
        <p class="mt-6 text-lg leading-relaxed text-[#888]">
          AI-powered receipt scanning with multi-currency support, fast exports, and expense tracking. Your receipts, organized effortlessly.
        </p>
        <div class="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <BaseButton href="https://apps.apple.com/us/app/easyreceipt-scanner/id6760520233" target="_blank" rel="noopener" variant="primary">
            <span class="flex items-center gap-2">
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
              Download on App Store
            </span>
          </BaseButton>
          <BaseButton href="https://play.google.com/store/apps/details?id=com.bynery.easyReceiptScanner" target="_blank" rel="noopener" variant="secondary">
            <span class="flex items-center gap-2">
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/></svg>
              Get it on Google Play
            </span>
          </BaseButton>
        </div>
        <div class="mt-8 flex items-center justify-center gap-6 text-sm text-[#555]">
          <div class="flex items-center gap-2">
            <span>⭐</span>
            <span>4.8 rating</span>
          </div>
          <div class="flex items-center gap-2">
            <span>📱</span>
            <span>iOS & Android</span>
          </div>
          <div class="flex items-center gap-2">
            <span>🔒</span>
            <span>Privacy-first</span>
          </div>
        </div>
      </div>
    </BaseContainer>
  </section>

  <!-- Screenshots -->
  <section class="py-24 border-t border-white/[0.06]">
    <BaseContainer>
      <div class="mx-auto max-w-5xl">
        <div class="mb-12 text-center">
          <h2 class="text-sm font-medium text-white/60 uppercase tracking-wider">App Design</h2>
          <h3 class="mt-3 text-3xl font-bold text-[#f0f0f0] sm:text-4xl">
            Beautiful & Intuitive
          </h3>
          <p class="mt-4 text-[#888] max-w-2xl mx-auto">
            An app that's as pleasant to use as it is powerful
          </p>
        </div>
        <div class="mt-12 grid gap-6 md:grid-cols-3">
          <AppScreenshot
            v-for="shot in screenshots"
            :key="shot.title"
            v-bind="shot"
          />
        </div>
      </div>
    </BaseContainer>
  </section>

  <!-- Features -->
  <section class="py-24 border-t border-white/[0.06] bg-[#0c0c0c]/30">
    <BaseContainer>
      <div class="mx-auto max-w-4xl">
        <div class="mb-12 text-center">
          <h2 class="text-sm font-medium text-white/60 uppercase tracking-wider">Features</h2>
          <h3 class="mt-3 text-3xl font-bold text-[#f0f0f0] sm:text-4xl">
            Powerful Features
          </h3>
          <p class="mt-4 text-[#888] max-w-2xl mx-auto">
            Everything you need to manage receipts
          </p>
        </div>
        <ProductGrid :features="features" />
      </div>
    </BaseContainer>
  </section>

  <!-- Pricing -->
  <section id="pricing" class="py-24 border-t border-white/[0.06]">
    <BaseContainer>
      <div class="mx-auto max-w-5xl">
        <div class="mb-16 text-center">
          <h2 class="text-sm font-medium text-white/60 uppercase tracking-wider">Pricing</h2>
          <h3 class="mt-3 text-3xl font-bold text-[#f0f0f0] sm:text-4xl">
            Simple, Transparent Pricing
          </h3>
          <p class="mt-4 text-[#888] max-w-2xl mx-auto">
            Choose the plan that fits your needs. Pricing handled in-app.
          </p>
        </div>
        <div class="mt-12 grid gap-8 lg:grid-cols-3">
          <PricingCard
            v-for="plan in pricing"
            :key="plan.name"
            v-bind="plan"
            href="#downloads"
          />
        </div>
      </div>
    </BaseContainer>
  </section>

  <!-- Best Plan For You -->
  <section class="py-24 border-t border-white/[0.06] bg-[#0c0c0c]/30">
    <BaseContainer>
      <div class="mx-auto max-w-5xl">
        <div class="mb-16 text-center">
          <h2 class="text-sm font-medium text-white/60 uppercase tracking-wider">Plan Finder</h2>
          <h3 class="mt-3 text-3xl font-bold text-[#f0f0f0] sm:text-4xl">
            Which Plan Is Right For You?
          </h3>
        </div>
        <div class="mt-12 grid gap-6 md:grid-cols-3">
          <div
            v-for="rec in planRecommendations"
            :key="rec.userType"
            :class="[
              'rounded-2xl border p-8 transition-all',
              rec.highlighted
                ? 'border-[#5e6ad2] bg-[#5e6ad2]/5 shadow-xl shadow-[#5e6ad2]/20 scale-105'
                : 'border-white/[0.06] bg-white/[0.02] hover:border-white/[0.08] hover:bg-white/[0.03]'
            ]"
          >
            <div class="mb-4">
              <span class="text-4xl">
                {{ rec.userType === 'Casual/Personal User' ? '👤' : rec.userType === 'Freelancer or Small Business' ? '💼' : '🏢' }}
              </span>
            </div>
            <h3 class="text-xl font-semibold text-[#f0f0f0]">{{ rec.userType }}</h3>
            <p class="mt-2 text-sm text-[#888]">{{ rec.description }}</p>
            <div class="mt-4">
              <span :class="[
                'text-2xl font-bold',
                rec.highlighted ? 'text-[#5e6ad2]' : 'text-white/70'
              ]">{{ rec.recommendedPlan }}</span>
              <span class="ml-2 text-sm text-white/40">{{ rec.price }}</span>
            </div>
          </div>
        </div>
      </div>
    </BaseContainer>
  </section>

  <!-- FAQ -->
  <section class="py-24 border-t border-white/[0.06]">
    <BaseContainer>
      <div class="mx-auto max-w-3xl">
        <div class="mb-16 text-center">
          <h2 class="text-sm font-medium text-white/60 uppercase tracking-wider">FAQ</h2>
          <h3 class="mt-3 text-3xl font-bold text-[#f0f0f0] sm:text-4xl">
            Frequently Asked Questions
          </h3>
        </div>
        <div class="mt-12 space-y-4">
          <FAQItem
            v-for="faq in faqs"
            :key="faq.question"
            v-bind="faq"
          />
        </div>
      </div>
    </BaseContainer>
  </section>

  <!-- CTA -->
  <section id="downloads" class="py-20 border-t border-white/[0.07] bg-[radial-gradient(ellipse_at_top,rgba(94,106,210,0.15)_0%,transparent_75%)]">
    <BaseContainer>
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-3xl font-bold text-[#f0f0f0] sm:text-4xl">
          Ready to scan receipts with superpowers?
        </h2>
        <p class="mt-4 text-lg text-[#888]">
          Start scanning receipts in under 10 seconds. Download EasyReceipt Scanner today.
        </p>
        <div class="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <BaseButton href="https://apps.apple.com/us/app/easyreceipt-scanner/id6760520233" target="_blank" rel="noopener" variant="primary">
            <span class="flex items-center gap-2">
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
              Download on App Store
            </span>
          </BaseButton>
          <BaseButton href="https://play.google.com/store/apps/details?id=com.bynery.easyReceiptScanner" target="_blank" rel="noopener" variant="secondary">
            <span class="flex items-center gap-2">
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/></svg>
              Get it on Google Play
            </span>
          </BaseButton>
        </div>
        <p class="mt-6 text-sm text-[#555]">
          Free plan available • No credit card required
        </p>
        <div class="mt-8 flex items-center justify-center gap-6 text-sm text-[#666]">
          <a href="https://ers.bynery.app/support" target="_blank" rel="noopener" class="hover:text-[#5e6ad2] transition-colors">Support</a>
          <span>•</span>
          <a href="https://ers.bynery.app/privacy" target="_blank" rel="noopener" class="hover:text-[#5e6ad2] transition-colors">Privacy Policy</a>
          <span>•</span>
          <a href="https://ers.bynery.app/terms" target="_blank" rel="noopener" class="hover:text-[#5e6ad2] transition-colors">Terms of Service</a>
        </div>
        <p class="mt-4 text-xs text-[#444]">
          © 2026 EasyReceipt Scanner. All rights reserved.
        </p>
      </div>
    </BaseContainer>
  </section>

  <!-- Blog -->
  <BlogList
    v-if="posts && posts.length"
    :posts="posts.map(p => ({
      title: p.title,
      description: p.description,
      date: p.date,
      to: p._path,
    }))"
  />
</template>
