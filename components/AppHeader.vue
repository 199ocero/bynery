<script setup>
const navItems = [
  { label: 'Apps', to: '/products' },
  { label: 'Blog', to: '/blog' },
  { label: 'About', to: '/about' },
  { label: 'Support', to: '/contact' },
]
</script>

<template>
  <nav class="sticky top-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 border-b border-white/[0.07] bg-[#080808]/80 backdrop-blur-xl">
    <AppLogo />

    <ul class="hidden md:flex items-center gap-8 list-none m-0 p-0">
      <li v-for="item in navItems" :key="item.label">
        <a
          v-if="item.href"
          :href="item.href"
          class="text-[13px] text-[#888] no-underline hover:text-[#f0f0f0] transition-colors"
        >
          {{ item.label }}
        </a>
        <NuxtLink
          v-else
          :to="item.to"
          class="text-[13px] text-[#888] no-underline hover:text-[#f0f0f0] transition-colors"
        >
          {{ item.label }}
        </NuxtLink>
      </li>
    </ul>

    <div class="flex items-center gap-3">
      <NuxtLink
        to="/products"
        class="px-4 py-2 text-[13px] text-white font-medium bg-[#5e6ad2] rounded-[8px] no-underline hover:bg-[#6b78dc] transition-all shadow-lg shadow-[#5e6ad2]/10"
      >
        Explore Apps
      </NuxtLink>
    </div>
  </nav>
</template>
