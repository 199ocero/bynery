<script setup lang="ts">
useAppSeo({
  title: 'Contact Us',
  description: 'Get in touch with the Bynery team. We\'d love to hear from you.',
  url: '/contact',
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
        <h1 class="text-5xl font-bold tracking-tight text-[#f0f0f0] sm:text-6xl lg:text-7xl leading-[1.1]">
          Let's talk.
        </h1>
        <p class="mt-8 text-xl text-[#888] max-w-2xl mx-auto leading-relaxed">
          Have a question, feedback, or just want to say hi? We'd love to hear from you.
        </p>
      </div>
    </BaseContainer>
  </section>

  <!-- Get in Touch -->
  <section class="py-24 border-t border-white/[0.06]">
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(120,119,198,0.06)_0%,transparent_70%)]" />
    </div>

    <BaseContainer>
      <div class="mx-auto max-w-3xl relative">
        <div class="mb-16 text-center">
          <h2 class="text-sm font-medium text-white/60 uppercase tracking-wider">Contact</h2>
          <h3 class="mt-3 text-3xl font-bold text-[#f0f0f0] sm:text-4xl">
            Get in Touch
          </h3>
          <p class="mt-4 text-[#888] text-lg">
            We're real people — reach out anytime and we'll get back to you as soon as we can.
          </p>
        </div>

        <div class="flex justify-center">
          <a
            href="mailto:reymarocero@gmail.com"
            class="group relative inline-flex items-center gap-4 bg-white/[0.02] border border-white/[0.06] rounded-2xl px-10 py-8 hover:bg-white/[0.03] hover:border-white/[0.08] transition-all"
          >
            <span class="text-3xl group-hover:scale-110 transition-transform">📧</span>
            <div>
              <p class="text-sm text-white/50">Email us</p>
              <p class="text-lg font-medium text-[#f0f0f0] group-hover:text-white/90 transition-colors">
                reymarocero@gmail.com
              </p>
            </div>
          </a>
        </div>
      </div>
    </BaseContainer>
  </section>
</template>
