<script setup lang="ts">
defineProps<{
  title: string
  description: string
  icon?: string
}>()
</script>

<template>
  <div class="group relative bg-white/[0.02] border border-white/[0.06] rounded-xl p-6 hover:bg-white/[0.03] hover:border-white/[0.08] transition-all">
    <div v-if="icon" class="mb-4 text-2xl">{{ icon }}</div>
    <h3 class="text-lg font-semibold text-[#f0f0f0] group-hover:text-white/90 transition-colors">
      {{ title }}
    </h3>
    <p class="mt-2 text-sm leading-relaxed text-[#888]">{{ description }}</p>
  </div>
</template>
