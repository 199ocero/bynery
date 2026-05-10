<script setup lang="ts">
defineProps<{
  title: string
  description: string
  image?: string
}>()
</script>

<template>
  <div class="group relative bg-white/[0.02] border border-white/[0.06] rounded-2xl p-8 hover:bg-white/[0.03] hover:border-white/[0.08] transition-all">
    <div class="mb-4 flex items-center gap-3">
      <div class="flex gap-1.5">
        <div class="h-3 w-3 rounded-full bg-red-500/80"></div>
        <div class="h-3 w-3 rounded-full bg-yellow-500/80"></div>
        <div class="h-3 w-3 rounded-full bg-green-500/80"></div>
      </div>
    </div>
    <h3 class="text-lg font-semibold text-[#f0f0f0] group-hover:text-white/90 transition-colors">{{ title }}</h3>
    <p class="mt-2 text-sm text-[#888]">{{ description }}</p>
  </div>
</template>
