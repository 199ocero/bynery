<script setup lang="ts">
useHead({
  meta: [
    { property: 'og:image', content: 'https://bynery.app/images/overall.png' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:alt', content: 'Bynery - Indie dev studio building thoughtful apps' },
    { property: 'og:image:type', content: 'image/png' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:image', content: 'https://bynery.app/images/overall.png' },
  ],
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
