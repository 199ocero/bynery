<script setup lang="ts">
defineProps<{
  posts: Array<{
    title: string
    description: string
    date: string
    to: string
  }>
}>()
</script>

<template>
  <section class="py-24 border-t border-white/[0.06]">
    <!-- Background gradient -->
    <div class="pointer-events-none absolute inset-0">
      <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[radial-gradient(ellipse_at_bottom,rgba(168,85,247,0.08)_0%,transparent_70%)]" />
    </div>

    <BaseContainer>
      <div class="mx-auto max-w-5xl relative">
        <div class="mb-16 text-center">
          <h2 class="text-sm font-medium text-white/60 uppercase tracking-wider">Blog</h2>
          <h3 class="mt-3 text-3xl font-bold text-[#f0f0f0] sm:text-4xl">
            Latest insights & updates
          </h3>
          <p class="mt-4 text-[#888] max-w-2xl mx-auto">
            Tips, tricks, and stories from our journey building thoughtful apps.
          </p>
        </div>

        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <BlogCard v-for="post in posts" :key="post.to" v-bind="post" />
        </div>
      </div>
    </BaseContainer>
  </section>
</template>
