<script setup lang="ts">
defineProps<{
  name: string
  price: string
  period?: string
  description: string
  features: string[]
  highlighted?: boolean
  cta: string
  href?: string
  to?: string
}>()
</script>

<template>
  <div
    :class="[
      'relative rounded-2xl border p-8 transition-all',
      highlighted
        ? 'border-[#5e6ad2] bg-[#5e6ad2]/5 shadow-xl shadow-[#5e6ad2]/20 scale-105'
        : 'border-white/[0.06] bg-white/[0.02] hover:border-white/[0.08] hover:bg-white/[0.03]'
    ]"
  >
    <div v-if="highlighted" class="mb-4 inline-block rounded-full bg-[#5e6ad2] px-3 py-1 text-xs font-semibold text-white">
      Most Popular
    </div>
    <h3 class="text-2xl font-bold text-[#f0f0f0]">{{ name }}</h3>
    <div class="mt-4 flex items-baseline gap-1">
      <span class="text-4xl font-bold text-[#f0f0f0]">{{ price }}</span>
      <span v-if="period" class="text-white/50">{{ period }}</span>
    </div>
    <p class="mt-4 text-sm text-[#888]">{{ description }}</p>
    <ul class="mt-6 space-y-3">
      <li v-for="(feature, i) in features" :key="i" class="flex items-center gap-3 text-sm text-[#888]">
        <span class="text-[#5e6ad2]">✓</span>
        {{ feature }}
      </li>
    </ul>
    <BaseButton
      :variant="highlighted ? 'primary' : 'secondary'"
      class="mt-8 w-full"
      :href="href || to || '#downloads'"
    >
      {{ cta }}
    </BaseButton>
  </div>
</template>
