<script setup lang="ts">
useAppSeo({
  title: 'About Us',
  description: 'Meet the two-person indie studio behind Bynery. We build thoughtful, delightful apps.',
  url: '/about',
})

const timeline = [
  {
    period: 'January 2026',
    title: 'The Beginning',
    description: 'Two brothers with an idea and way too much confidence.',
  },
  {
    period: 'April 2026',
    title: 'ForecastedFit',
    description: 'Our first app — a weather-based outfit suggester. We shipped it, got real users, then learned a hard lesson about infrastructure costs.',
  },
  {
    period: 'April 2026',
    title: 'The Pivot',
    description: 'Made the tough call to shut down ForecastedFit. Walked away with four months of hard-earned lessons.',
  },
  {
    period: 'Now',
    title: 'Building Smarter',
    description: 'EasyReceipt Scanner is live. Steppet is in review. Every lesson from ForecastedFit is baked into what we build now.',
  },
]

const lessons = [
  {
    title: 'Cross-Platform Development',
    description: 'Building apps from scratch using Flutter and Laravel — the right way.',
  },
  {
    title: 'The App Review Reality',
    description: "Apple's process alone can cost you weeks. Google Play isn't far behind. We've been through the gauntlet.",
  },
  {
    title: 'User Feedback Gold',
    description: 'Things improve fast when you actually listen to the people using your apps.',
  },
  {
    title: 'The Beauty Trap',
    description: 'A beautiful app nobody converts on is just an expensive learning experience. We learned this the hard way.',
  },
]

const values = [
  {
    icon: '✨',
    title: 'Simplicity First',
    description: 'Every feature earns its place. Less, but better.',
  },
  {
    icon: '🔒',
    title: 'Privacy Matters',
    description: "Your data is yours. We never sell it, full stop.",
  },
  {
    icon: '💰',
    title: 'Fair Pricing',
    description: 'A simple monthly subscription. No surprise tiers or premium paywalls. Just a price that\'s actually fair.',
  },
  {
    icon: '🤝',
    title: 'Real Support',
    description: "You'll hear back from us — the actual founders — directly.",
  },
  {
    icon: '📈',
    title: 'Continuous Improvement',
    description: 'We ship updates fast, driven by what users actually tell us.',
  },
  {
    icon: '😊',
    title: 'Have Fun',
    description: 'Building should be joyful. Using our apps should be too.',
  },
]

const team = [
  {
    name: 'Jay-Are Ocero',
    role: 'Co-founder',
    image: '/images/jay_are.jpg',
    responsibilities: [
      'Backend architecture',
      'APIs & server infrastructure',
      'Landing pages',
    ],
  },
  {
    name: 'Reymar Ocero',
    role: 'Co-founder',
    image: '/images/reymar.jpg',
    responsibilities: [
      'App development',
      'UI asset design',
      'Social media graphics',
      'Landing pages',
    ],
  },
]

// SEO: Organization with founders structured data
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Bynery',
        url: 'https://bynery.app',
        description: 'Indie dev studio building thoughtful apps.',
        founder: [
          {
            '@type': 'Person',
            name: 'Jay-Are Ocero',
            jobTitle: 'Co-founder',
            image: 'https://bynery.app/images/jay_are.jpg'
          },
          {
            '@type': 'Person',
            name: 'Reymar Ocero',
            jobTitle: 'Co-founder',
            image: 'https://bynery.app/images/reymar.jpg'
          }
        ]
      }),
    },
  ],
})
</script>

<template>
  <!-- Hero -->
  <section class="relative overflow-hidden pt-32 pb-24 lg:pt-40 lg:pb-32">
    <!-- Background gradient -->
    <div class="pointer-events-none absolute inset-0">
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse_at_top,rgba(120,119,198,0.15)_0%,rgba(120,119,198,0)_60%)]" />
      <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[radial-gradient(ellipse_at_bottom,rgba(168,85,247,0.08)_0%,transparent_70%)]" />
    </div>

    <BaseContainer>
      <div class="mx-auto max-w-4xl text-center relative">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] mb-8">
          <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span class="text-sm text-[#999]">Indie dev studio</span>
        </div>

        <h1 class="text-5xl font-bold tracking-tight text-[#f0f0f0] sm:text-6xl lg:text-7xl leading-[1.1]">
          We're two brothers building apps the hard way.
        </h1>
        <p class="mt-8 text-xl text-[#888] max-w-2xl mx-auto leading-relaxed">
          Bynery is an indie dev studio run by two brothers. We started in January 2026 with nothing but an idea and way too much confidence.
        </p>

        <!-- Quick stats -->
        <div class="mt-12 flex items-center justify-center gap-8 text-sm">
          <div class="flex items-center gap-2">
            <div class="w-1 h-1 rounded-full bg-white/30" />
            <span class="text-[#777]">2 Founders</span>
          </div>
          <div class="flex items-center gap-2">
            <div class="w-1 h-1 rounded-full bg-white/30" />
            <span class="text-[#777]">2 Apps</span>
          </div>
          <div class="flex items-center gap-2">
            <div class="w-1 h-1 rounded-full bg-white/30" />
            <span class="text-[#777]">Just getting started</span>
          </div>
        </div>
      </div>
    </BaseContainer>
  </section>

  <!-- Our Story -->
  <section class="py-24 border-t border-white/[0.06]">
    <BaseContainer>
      <div class="mx-auto max-w-4xl">
        <div class="mb-16">
          <h2 class="text-sm font-medium text-white/60 uppercase tracking-wider">Our Story</h2>
          <h3 class="mt-3 text-3xl font-bold text-[#f0f0f0] sm:text-4xl">
            Four months. One failed app. A lot of lessons.
          </h3>
        </div>

        <!-- Timeline -->
        <div class="relative">
          <!-- Timeline line -->
          <div class="absolute left-[7px] top-2 bottom-0 w-px bg-gradient-to-b from-white/10 via-white/20 to-transparent" />

          <div class="space-y-12 ml-12">
            <div
              v-for="(item, index) in timeline"
              :key="index"
              class="relative group"
            >
              <!-- Timeline dot -->
              <div class="absolute -left-[48px] top-2 w-4 h-4 rounded-full border-2 border-[#0a0a0a] bg-white group-hover:bg-white/40 transition-colors shadow-lg shadow-black/50" />

              <div class="bg-white/[0.02] border border-white/[0.06] rounded-xl p-6 hover:bg-white/[0.03] hover:border-white/[0.08] transition-all">
                <span class="text-xs font-medium text-white/50 uppercase tracking-wider">{{ item.period }}</span>
                <h4 class="mt-2 text-lg font-semibold text-[#f0f0f0]">{{ item.title }}</h4>
                <p class="mt-2 text-[#888]">{{ item.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BaseContainer>
  </section>

  <!-- What We Learned -->
  <section class="py-24 border-t border-white/[0.06] bg-gradient-to-b from-transparent via-white/[0.01] to-transparent">
    <BaseContainer>
      <div class="mx-auto max-w-4xl">
        <div class="mb-16 text-center">
          <h2 class="text-sm font-medium text-white/60 uppercase tracking-wider">The Hard Way</h2>
          <h3 class="mt-3 text-3xl font-bold text-[#f0f0f0] sm:text-4xl">
            Lessons we're never forgetting
          </h3>
          <p class="mt-4 text-[#888] max-w-2xl mx-auto">
            We regrouped. We rebuilt smarter. Every lesson from ForecastedFit is baked into what we're building now.
          </p>
        </div>

        <div class="grid gap-4 sm:grid-cols-2">
          <div
            v-for="(lesson, index) in lessons"
            :key="index"
            class="group relative bg-white/[0.02] border border-white/[0.06] rounded-xl p-6 hover:bg-white/[0.03] hover:border-white/[0.08] transition-all"
          >
            <div class="absolute top-6 left-6 w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-white/30 font-mono text-sm">
              {{ index + 1 }}
            </div>
            <div class="pl-12">
              <h4 class="text-lg font-semibold text-[#f0f0f0] group-hover:text-white/90 transition-colors">
                {{ lesson.title }}
              </h4>
              <p class="mt-2 text-[#888]">{{ lesson.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </BaseContainer>
  </section>

  <!-- The Team -->
  <section class="py-24 border-t border-white/[0.06]">
    <BaseContainer>
      <div class="mx-auto max-w-4xl">
        <div class="mb-16 text-center">
          <h2 class="text-sm font-medium text-white/60 uppercase tracking-wider">The Team</h2>
          <h3 class="mt-3 text-3xl font-bold text-[#f0f0f0] sm:text-4xl">
            Two brothers. One vision.
          </h3>
        </div>

        <div class="grid gap-8 sm:grid-cols-2">
          <div
            v-for="(member, index) in team"
            :key="index"
            class="group relative"
          >
            <div class="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-8 hover:bg-white/[0.03] hover:border-white/[0.08] transition-all h-full">
              <div class="relative w-20 h-20 mb-6">
                <div class="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-white/5" />
                <img
                  :src="member.image"
                  :alt="member.name"
                  class="relative w-full h-full rounded-full object-cover ring-2 ring-white/10 group-hover:ring-white/20 transition-all"
                />
              </div>
              <h4 class="text-xl font-semibold text-[#f0f0f0]">{{ member.name }}</h4>
              <p class="text-sm text-white/50 mt-1">{{ member.role }}</p>
              <ul class="mt-6 space-y-3">
                <li
                  v-for="(resp, i) in member.responsibilities"
                  :key="i"
                  class="flex items-center gap-3 text-sm text-[#888]"
                >
                  <span class="w-1.5 h-1.5 rounded-full bg-white/20" />
                  {{ resp }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </BaseContainer>
  </section>

  <!-- What We Believe -->
  <section class="py-24 border-t border-white/[0.06]">
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(120,119,198,0.06)_0%,transparent_70%)]" />
    </div>

    <BaseContainer>
      <div class="mx-auto max-w-5xl relative">
        <div class="mb-16 text-center">
          <h2 class="text-sm font-medium text-white/60 uppercase tracking-wider">What We Believe</h2>
          <h3 class="mt-3 text-3xl font-bold text-[#f0f0f0] sm:text-4xl">
            These aren't just values. They're promises.
          </h3>
        </div>

        <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div
            v-for="(value, index) in values"
            :key="index"
            class="group relative bg-white/[0.02] border border-white/[0.06] rounded-xl p-6 hover:bg-white/[0.03] hover:border-white/[0.08] transition-all"
          >
            <div class="text-2xl mb-4">{{ value.icon }}</div>
            <h4 class="text-lg font-semibold text-[#f0f0f0]">{{ value.title }}</h4>
            <p class="mt-2 text-sm text-[#888] leading-relaxed">{{ value.description }}</p>
          </div>
        </div>
      </div>
    </BaseContainer>
  </section>

  <!-- Current Projects -->
  <section class="py-24 border-t border-white/[0.06] bg-[#0c0c0c]/30">
    <BaseContainer>
      <div class="mx-auto max-w-4xl text-center">
        <h2 class="text-sm font-medium text-white/60 uppercase tracking-wider mb-4">Current Projects</h2>
        <h3 class="text-3xl font-bold text-[#f0f0f0] sm:text-4xl mb-6">
          What we're building now
        </h3>
        <div class="flex items-center justify-center gap-6 flex-wrap">
          <div class="flex items-center gap-3 px-6 py-3 rounded-full bg-emerald-500/10 border border-emerald-500/20">
            <span class="w-2 h-2 rounded-full bg-emerald-400" />
            <span class="text-emerald-300 font-medium">EasyReceipt Scanner — Live</span>
          </div>
          <div class="flex items-center gap-3 px-6 py-3 rounded-full bg-amber-500/10 border border-amber-500/20">
            <span class="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span class="text-amber-300 font-medium">Steppet — In Review</span>
          </div>
        </div>
      </div>
    </BaseContainer>
  </section>

  <!-- CTA -->
  <section class="py-24 border-t border-white/[0.06]">
    <BaseContainer>
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-3xl font-bold text-[#f0f0f0] sm:text-4xl">
          Built with care. Used with joy.
        </h2>
        <p class="mt-6 text-[#888] text-lg">
          We're just getting started. Want to come along for the ride?
        </p>
        <div class="mt-10 flex items-center justify-center gap-4">
          <BaseButton to="/contact" variant="primary">
            Say Hello
          </BaseButton>
          <BaseButton to="/products" variant="secondary">
            View Our Apps
          </BaseButton>
        </div>
      </div>
    </BaseContainer>
  </section>
</template>
