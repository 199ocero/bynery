<script setup lang="ts">
defineProps<{
  quote: string
  author: string
  role?: string
  rating?: number
}>()
</script>

<template>
  <div class="rounded-2xl border border-border bg-bg-card p-8">
    <div v-if="rating" class="mb-4 flex gap-1">
      <span v-for="i in 5" :key="i" class="text-brand">{{ i <= rating ? '★' : '☆' }}</span>
    </div>
    <p class="text-text-secondary">"{{ quote }}"</p>
    <div class="mt-6">
      <div class="font-semibold text-text-primary">{{ author }}</div>
      <div v-if="role" class="text-sm text-text-muted">{{ role }}</div>
    </div>
  </div>
</template>
