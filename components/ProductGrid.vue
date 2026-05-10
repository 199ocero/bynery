<script setup lang="ts">
defineProps<{
  features: Array<{ title: string; description: string; icon?: string }>
}>()
</script>

<template>
  <section class="mt-12">
    <BaseContainer>
      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-2 max-w-4xl mx-auto">
        <ProductFeature
          v-for="(feature, i) in features"
          :key="i"
          v-bind="feature"
        />
      </div>
    </BaseContainer>
  </section>
</template>
