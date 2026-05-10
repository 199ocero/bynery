<script setup lang="ts">
defineProps<{
  title: string
  description: string
  tagline?: string
  cta?: { label: string; href: string }
}>()
</script>

<template>
  <section class="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-32">
    <BaseContainer>
      <div class="mx-auto max-w-3xl text-center">
        <p v-if="tagline" class="mb-4 text-sm font-medium uppercase tracking-widest text-brand">
          {{ tagline }}
        </p>
        <h1 class="text-4xl font-bold tracking-tight text-text-primary sm:text-5xl lg:text-6xl">
          {{ title }}
        </h1>
        <p class="mt-6 text-lg leading-relaxed text-text-secondary">
          {{ description }}
        </p>
        <div v-if="cta" class="mt-10">
          <BaseButton :href="cta.href" variant="primary">
            {{ cta.label }}
          </BaseButton>
        </div>
      </div>
    </BaseContainer>
  </section>
</template>
