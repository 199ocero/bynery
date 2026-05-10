<script setup lang="ts">
defineProps<{
  title: string
  subtitle?: string
  align?: 'left' | 'center'
}>()
</script>

<template>
  <div :class="align === 'center' ? 'text-center' : 'text-left'">
    <h2 class="text-3xl font-bold text-text-primary sm:text-4xl lg:text-5xl">{{ title }}</h2>
    <p v-if="subtitle" class="mt-4 text-lg text-text-secondary">{{ subtitle }}</p>
  </div>
</template>
