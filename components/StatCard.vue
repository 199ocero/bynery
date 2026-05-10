<script setup lang="ts">
defineProps<{
  value: string
  label: string
  icon?: string
}>()
</script>

<template>
  <div class="text-center">
    <div v-if="icon" class="mb-3 text-4xl">{{ icon }}</div>
    <div class="text-4xl font-bold text-brand">{{ value }}</div>
    <div class="mt-2 text-sm text-text-secondary">{{ label }}</div>
  </div>
</template>
