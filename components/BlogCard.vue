<script setup lang="ts">
defineProps<{
  title: string
  description: string
  date: string
  to: string
}>()
</script>

<template>
  <NuxtLink :to="to" class="group block relative bg-white/[0.02] border border-white/[0.06] rounded-xl p-6 hover:bg-white/[0.03] hover:border-white/[0.08] transition-all h-full">
    <time class="text-xs font-medium text-white/50 uppercase tracking-wider">{{ date }}</time>
    <h3 class="mt-3 text-lg font-semibold text-[#f0f0f0] group-hover:text-white/90 transition-colors">
      {{ title }}
    </h3>
    <p class="mt-2 text-sm text-[#888] line-clamp-3 leading-relaxed">{{ description }}</p>

    <!-- Arrow indicator -->
    <div class="mt-4 flex items-center gap-2 text-sm text-white/40 group-hover:text-white/60 transition-colors">
      <span>Read more</span>
      <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </div>
  </NuxtLink>
</template>
