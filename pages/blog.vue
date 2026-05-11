<script setup lang="ts">
useAppSeo({
  title: 'Blog - Bynery',
  description: 'Latest insights, tips, and stories from our journey building thoughtful apps like EasyReceipt and Steppet.',
  url: '/blog',
})

const { data: posts } = await useAsyncData('all-blog-posts', () =>
  queryContent('/').sort({ date: -1 }).find()
)

const blogPosts = computed(() =>
  posts.value?.map(p => ({
    title: p.title,
    description: p.description,
    date: p.date,
    to: p._path,
  })) || []
)
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
            All Posts
          </h3>
          <p class="mt-4 text-[#888] max-w-2xl mx-auto">
            Insights, tips, and stories from our journey building thoughtful apps.
          </p>
        </div>

        <div v-if="blogPosts.length" class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <BlogCard v-for="post in blogPosts" :key="post.to" v-bind="post" />
        </div>

        <div v-else class="text-center py-12">
          <p class="text-[#888]">No blog posts found.</p>
        </div>
      </div>
    </BaseContainer>
  </section>
</template>
