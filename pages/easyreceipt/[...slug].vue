<script setup lang="ts">
const route = useRoute()
const slug = route.params.slug as string[]

const { data: article } = await useAsyncData(
  `easyreceipt-${slug.join('/')}`,
  () => queryContent('/easyreceipt').where({ _path: `/easyreceipt/${slug.join('/')}` }).findOne()
)

if (!article.value) {
  throw createError({ statusCode: 404, statusMessage: 'Post not found' })
}

useAppSeo({
  title: article.value.title ?? 'Blog Post',
  description: article.value.description ?? '',
  url: route.path,
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: article.value.title,
        description: article.value.description,
        datePublished: article.value.date,
        dateModified: article.value.modified ?? article.value.date,
        author: {
          '@type': 'Organization',
          name: 'Bynery',
          url: 'https://bynery.app'
        },
        publisher: {
          '@type': 'Organization',
          name: 'Bynery',
          logo: {
            '@type': 'ImageObject',
            url: 'https://bynery.app/og-default.png'
          }
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': `https://bynery.app${route.path}`
        },
        image: 'https://bynery.app/og-default.png'
      }),
    },
  ],
})
</script>

<template>
  <section class="relative overflow-hidden pt-32 pb-24">
    <!-- Background gradient -->
    <div class="pointer-events-none absolute inset-0">
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[radial-gradient(ellipse_at_top,rgba(94,106,210,0.12)_0%,transparent_70%)]" />
    </div>

    <BaseContainer>
      <div class="mx-auto max-w-3xl relative">
        <NuxtLink to="/easyreceipt" class="mb-8 inline-flex items-center gap-2 text-sm text-[#888] hover:text-[#f0f0f0] transition-colors group">
          <svg class="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
          Back to EasyReceipt
        </NuxtLink>

        <header class="mb-12">
          <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.06] mb-6">
            <span class="w-2 h-2 rounded-full bg-emerald-400" />
            <span class="text-xs text-white/50 uppercase tracking-wider">Blog Post</span>
          </div>
          <p v-if="article?.date" class="text-sm text-white/50 uppercase tracking-wider">{{ article.date }}</p>
          <h1 class="mt-3 text-4xl font-bold tracking-tight text-[#f0f0f0] lg:text-5xl leading-[1.1]">
            {{ article?.title }}
          </h1>
          <p v-if="article?.description" class="mt-6 text-lg text-[#888] leading-relaxed">
            {{ article.description }}
          </p>
        </header>

        <article class="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-8 lg:p-12">
          <ContentRenderer :value="article" class="prose prose-invert prose-lg max-w-none
            prose-headings:text-[#f0f0f0]
            prose-headings:font-semibold
            prose-headings:mt-8
            prose-headings:mb-4
            prose-h1:text-3xl
            prose-h1:mt-0
            prose-h2:text-2xl
            prose-h3:text-xl
            prose-p:text-[#888]
            prose-p:leading-relaxed
            prose-p:mb-6
            prose-a:text-[#5e6ad2]
            prose-a:no-underline
            hover:prose-a:underline
            prose-a:font-medium
            prose-strong:text-[#f0f0f0]
            prose-strong:font-semibold
            prose-li:text-[#888]
            prose-ul:my-6
            prose-ol:my-6
            prose-ul:list-disc
            prose-ol:list-decimal
            prose-li:mb-2
            prose-code:text-[#5e6ad2]
            prose-code:px-1.5
            prose-code:py-0.5
            prose-code:rounded
            prose-code:bg-white/[0.05]
            prose-code:font-mono
            prose-code:text-sm
            prose-pre:bg-white/[0.03]
            prose-pre:border
            prose-pre:border-white/[0.06]
            prose-pre:rounded-lg
            prose-blockquote:border-l-4
            prose-blockquote:border-white/[0.1]
            prose-blockquote:pl-4
            prose-blockquote:italic
            prose-blockquote:text-white/70
            prose-hr:border-white/[0.1]
            prose-hr:my-8
          " />
        </article>
      </div>
    </BaseContainer>
  </section>
</template>
