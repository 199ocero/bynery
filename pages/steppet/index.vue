<script setup lang="ts">
import steppetBasePhone from '~/assets/images/steppet/base_phone.png'
import steppetBasePhone1 from '~/assets/images/steppet/base_phone_1.png'
import steppetBasePhone2 from '~/assets/images/steppet/base_phone_2.png'
import steppetBasePhone3 from '~/assets/images/steppet/base_phone_3.png'
import steppetBasePhone4 from '~/assets/images/steppet/base_phone_4.png'
import steppetBasePhone5 from '~/assets/images/steppet/base_phone_5.png'

const steppetScreenshots = [
  { src: steppetBasePhone },
  { src: steppetBasePhone1 },
  { src: steppetBasePhone2 },
  { src: steppetBasePhone3 },
  { src: steppetBasePhone4 },
  { src: steppetBasePhone5 },
]

// Custom Carousel Logic
const currentSteppetSlide = ref(0)
let autoplayInterval: number | null = null

const nextSteppetSlide = () => {
  currentSteppetSlide.value = (currentSteppetSlide.value + 1) % steppetScreenshots.length
}

const previousSteppetSlide = () => {
  currentSteppetSlide.value = currentSteppetSlide.value === 0
    ? steppetScreenshots.length - 1
    : currentSteppetSlide.value - 1
}

const goToSteppetSlide = (index: number) => {
  currentSteppetSlide.value = index
}

const startAutoplay = () => {
  stopAutoplay()
  autoplayInterval = window.setInterval(() => {
    nextSteppetSlide()
  }, 7000)
}

const stopAutoplay = () => {
  if (autoplayInterval !== null) {
    clearInterval(autoplayInterval)
    autoplayInterval = null
  }
}

onMounted(() => {
  startAutoplay()
})

onUnmounted(() => {
  stopAutoplay()
})
useAppSeo({
  title: 'Steppet - Turn Every Step Into an Adventure',
  description: 'A fitness + virtual pet app that turns your daily walks into a fun adventure. Choose a virtual pet companion, walk to hit step goals, and watch your pet evolve.',
  url: '/steppet',
})

const { data: posts } = await useAsyncData('steppet-posts', () =>
  queryContent('/steppet').sort({ date: -1 }).find()
)

const features = [
  { title: 'Your Dashboard', description: 'Real-time step tracking with progress visualization. Live pet companion that reacts to your activity.', icon: '🏠' },
  { title: 'Choose Your Companion', description: 'Multiple pet types (cats, hamsters, and more) to unlock and collect. Each pet has its own name and personality.', icon: '🐱' },
  { title: 'Detailed Tracking', description: 'Tracks steps, distance, calories burned, and active time. Evolution progress tracker with milestones.', icon: '📊' },
  { title: 'Build Your Streak', description: '7-day walking history with daily breakdowns. Total steps, distance, and calories summary.', icon: '🔥' },
  { title: 'Share & Celebrate', description: 'Share daily achievements as a beautiful story post. Shows your step count, distance, and pet in one shareable image.', icon: '📤' },
]

const howItWorks = [
  {
    step: '1',
    title: 'Download & Sign Up',
    description: 'Choose your first virtual pet companion to start your journey',
  },
  {
    step: '2',
    title: 'Set Your Daily Goal',
    description: 'Customize your daily step goal and start walking',
  },
  {
    step: '3',
    title: 'Hit Milestones',
    description: 'Maintain streaks to watch your pet evolve through unique life stages',
  },
]

const faqs = [
  {
    question: 'What is Steppet?',
    answer: 'Steppet is a fitness + virtual pet app that turns your daily walks into a fun adventure. You choose a virtual pet companion, walk to hit your step goals, and your pet evolves as you progress.',
  },
  {
    question: 'How does my pet evolve?',
    answer: 'Your pet evolves by hitting step milestones and maintaining walking streaks. Each pet type has unique life stages that unlock as you progress.',
  },
  {
    question: 'What devices does Steppet support?',
    answer: 'Steppet is currently available on iOS (Apple App Store). Android support is coming soon.',
  },
  {
    question: 'Is Steppet free?',
    answer: 'Yes! Steppet is free to download on the App Store. No pricing tiers or subscriptions required.',
  },
  {
    question: 'Does Steppet track my location?',
    answer: 'Steppet uses your device\'s motion sensors to track steps. We respect your privacy and don\'t require constant location tracking.',
  },
  {
    question: 'Can I share my achievements?',
    answer: 'Absolutely! You can share your daily achievements as beautiful story posts that show your step count, distance, and pet companion.',
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
        name: 'Steppet',
        description: 'A fitness + virtual pet app that turns your daily walks into a fun adventure.',
        image: 'https://bynery.app/og-default.png',
        brand: {
          '@type': 'Organization',
          name: 'Bynery'
        },
        offers: {
          '@type': 'Offer',
          price: '0.00',
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock'
        },
        applicationCategory: 'HealthApplication',
        operatingSystem: 'iOS'
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
          Coming Soon to App Store
        </div>
        <h1 class="text-4xl font-bold tracking-tight text-[#f0f0f0] sm:text-5xl lg:text-6xl">
          Turn Every Step<br>
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#5e6ad2] to-[#6b78dc]">
            Into an Adventure.
          </span>
        </h1>
        <p class="mt-6 text-lg leading-relaxed text-[#888]">
          A fitness + virtual pet app that turns your daily walks into a fun adventure. Choose a virtual pet companion, walk to hit step goals, and watch your pet evolve.
        </p>
        <div class="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <BaseButton variant="primary" disabled class="cursor-not-allowed opacity-70">
            <span class="flex items-center gap-2">
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
              Coming Soon to App Store
            </span>
          </BaseButton>
        </div>
        <div class="mt-8 flex items-center justify-center gap-6 text-sm text-[#555]">
          <div class="flex items-center gap-2">
            <span>🐾</span>
            <span>Virtual Pets</span>
          </div>
          <div class="flex items-center gap-2">
            <span>📱</span>
            <span>iOS</span>
          </div>
          <div class="flex items-center gap-2">
            <span>💚</span>
            <span>Free</span>
          </div>
        </div>
      </div>
    </BaseContainer>
  </section>

  <!-- App Screens Carousel -->
  <section class="pt-2 pb-16">
    <BaseContainer>
      <div class="mx-auto max-w-4xl">
        <div class="mb-8 text-center">
          <h2 class="text-sm font-medium text-white/60 uppercase tracking-wider">App Screens</h2>
          <h3 class="mt-3 text-2xl font-bold text-[#f0f0f0] sm:text-3xl">
            Steps in. Pets evolve out.
          </h3>
          <p class="mt-3 text-[#888] max-w-xl mx-auto">
            Track your steps, care for your virtual pet, and turn daily walks into an adventure. See your progress, streaks, and pet evolution—all in one fun, motivating app.
          </p>
        </div>

        <div class="mx-auto w-full max-w-4xl">
          <div class="overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0f0f0f]">
            <div
              class="flex transition-transform duration-500 ease-in-out"
              :style="{ width: '100%', transform: `translateX(-${currentSteppetSlide * 100}%)` }"
            >
              <div
                v-for="(shot, index) in steppetScreenshots"
                :key="index"
                class="flex-shrink-0 w-full"
              >
                <img
                  :src="shot.src"
                  alt="Steppet screenshot"
                  class="block w-full h-auto rounded-xl object-contain"
                  loading="lazy"
                >
              </div>
            </div>
          </div>

          <div class="mt-3 flex items-center justify-between">
            <button
              @click="previousSteppetSlide"
              @mouseenter="stopAutoplay"
              @mouseleave="startAutoplay"
              class="rounded-full bg-[#5e6ad2]/30 p-2 text-white transition-colors hover:bg-[#5e6ad2]/50"
              aria-label="Previous screenshot"
            >
              <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div class="flex items-center justify-center gap-2">
              <button
                v-for="(_, index) in steppetScreenshots"
                :key="`steppet-screen-${index}`"
                @click="goToSteppetSlide(index)"
                @mouseenter="stopAutoplay"
                @mouseleave="startAutoplay"
                class="h-2 w-2 rounded-full transition-colors"
                :class="
                  currentSteppetSlide === index
                    ? 'bg-[#5e6ad2]'
                    : 'bg-white/30 hover:bg-white/50'
                "
                :aria-label="`Go to screenshot ${index + 1}`"
              />
            </div>

            <button
              @click="nextSteppetSlide"
              @mouseenter="stopAutoplay"
              @mouseleave="startAutoplay"
              class="rounded-full bg-[#5e6ad2]/30 p-2 text-white transition-colors hover:bg-[#5e6ad2]/50"
              aria-label="Next screenshot"
            >
              <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
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
            Everything you need to make walking fun
          </p>
        </div>
        <ProductGrid :features="features" />
      </div>
    </BaseContainer>
  </section>

  <!-- How It Works -->
  <section class="py-24 border-t border-white/[0.06]">
    <BaseContainer>
      <div class="mx-auto max-w-4xl">
        <div class="mb-16 text-center">
          <h2 class="text-sm font-medium text-white/60 uppercase tracking-wider">How It Works</h2>
          <h3 class="mt-3 text-3xl font-bold text-[#f0f0f0] sm:text-4xl">
            Start your adventure in three easy steps
          </h3>
        </div>

        <div class="mt-12 grid gap-6 md:grid-cols-3">
          <div
            v-for="step in howItWorks"
            :key="step.step"
            class="group relative bg-white/[0.02] border border-white/[0.06] rounded-xl p-6 hover:bg-white/[0.03] hover:border-white/[0.08] transition-all"
          >
            <div class="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 text-xl font-bold text-white/30 group-hover:bg-white/10 group-hover:text-white/50 transition-colors">
              {{ step.step }}
            </div>
            <h3 class="text-xl font-semibold text-[#f0f0f0]">{{ step.title }}</h3>
            <p class="mt-2 text-[#888]">{{ step.description }}</p>
          </div>
        </div>
      </div>
    </BaseContainer>
  </section>

  <!-- Pricing -->
  <section class="py-24 border-t border-white/[0.06] bg-[#0c0c0c]/30">
    <BaseContainer>
      <div class="mx-auto max-w-2xl text-center">
        <div class="mb-8">
          <h2 class="text-sm font-medium text-white/60 uppercase tracking-wider">Simple Pricing</h2>
        </div>
        <div class="mt-12 relative bg-white/[0.02] border border-white/[0.06] rounded-2xl p-12">
          <div class="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-8">
            <span class="w-2 h-2 rounded-full bg-emerald-400" />
            <span class="text-emerald-300 font-medium">Completely Free</span>
          </div>
          <h3 class="text-3xl font-bold text-[#f0f0f0]">Free</h3>
          <p class="mt-4 text-lg text-[#888]">
            Steppet is completely free to download and use. No subscriptions, no in-app purchases.
          </p>
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
  <section class="py-20 border-t border-white/[0.07] bg-[radial-gradient(ellipse_at_top,rgba(94,106,210,0.15)_0%,transparent_75%)]">
    <BaseContainer>
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-3xl font-bold text-[#f0f0f0] sm:text-4xl">
          Ready to turn every step into an adventure?
        </h2>
        <p class="mt-4 text-lg text-[#888]">
          Choose your pet companion and start your walking journey today.
        </p>
        <div class="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <BaseButton variant="primary" disabled class="cursor-not-allowed opacity-70">
            <span class="flex items-center gap-2">
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
              Coming Soon to App Store
            </span>
          </BaseButton>
        </div>
        <div class="mt-8 flex items-center justify-center gap-6 text-sm text-[#666]">
          <a href="https://steppet.bynery.app/support" target="_blank" rel="noopener" class="hover:text-[#5e6ad2] transition-colors">Support</a>
          <span>•</span>
          <a href="https://steppet.bynery.app/privacy" target="_blank" rel="noopener" class="hover:text-[#5e6ad2] transition-colors">Privacy Policy</a>
          <span>•</span>
          <a href="https://steppet.bynery.app/terms" target="_blank" rel="noopener" class="hover:text-[#5e6ad2] transition-colors">Terms of Service</a>
        </div>
        <p class="mt-4 text-xs text-[#444]">
          © 2026 Steppet. All rights reserved.
        </p>
      </div>
    </BaseContainer>
  </section>

  <!-- Blog -->
  <BlogList
    v-if="posts && posts.value && posts.value.length"
    :posts="posts.value.map(p => ({
      title: p.title,
      description: p.description,
      date: p.date,
      to: p._path,
    }))"
  />
</template>
