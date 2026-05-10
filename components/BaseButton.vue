<script setup lang="ts">
defineProps<{
  to?: string
  href?: string
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}>()
</script>

<template>
  <NuxtLink
    v-if="to"
    :to="to"
    :class="[
      'inline-flex items-center justify-center font-medium transition-all duration-200',
      'focus:outline-none focus:ring-2 focus:ring-brand/50 focus:ring-offset-2 focus:ring-offset-[#0a0a0a]',
      'no-underline',
      size === 'sm' ? 'px-4 py-2 text-sm rounded-lg' : '',
      size === 'lg' ? 'px-8 py-3.5 text-base rounded-xl' : '',
      (!size || size === 'md') ? 'px-6 py-2.5 text-sm rounded-lg' : '',
      variant === 'primary'
        ? 'bg-gradient-to-r from-brand to-brand/90 text-white hover:from-brand-hover hover:to-brand/90 shadow-lg shadow-brand/10 hover:shadow-brand/20 hover:-translate-y-0.5 active:translate-y-0'
        : '',
      variant === 'secondary'
        ? 'border border-white/10 bg-white/5 text-white/90 hover:bg-white/10 hover:border-white/20 hover:text-white backdrop-blur-sm'
        : '',
      variant === 'ghost'
        ? 'text-white/70 hover:text-white hover:bg-white/5'
        : '',
      !variant ? 'bg-gradient-to-r from-brand to-brand/90 text-white hover:from-brand-hover hover:to-brand/90 shadow-lg shadow-brand/10 hover:shadow-brand/20 hover:-translate-y-0.5 active:translate-y-0' : '',
    ]"
  >
    <slot />
  </NuxtLink>
  <a
    v-else-if="href"
    :href="href"
    :class="[
      'inline-flex items-center justify-center font-medium transition-all duration-200',
      'focus:outline-none focus:ring-2 focus:ring-brand/50 focus:ring-offset-2 focus:ring-offset-[#0a0a0a]',
      size === 'sm' ? 'px-4 py-2 text-sm rounded-lg' : '',
      size === 'lg' ? 'px-8 py-3.5 text-base rounded-xl' : '',
      (!size || size === 'md') ? 'px-6 py-2.5 text-sm rounded-lg' : '',
      variant === 'primary'
        ? 'bg-gradient-to-r from-brand to-brand/90 text-white hover:from-brand-hover hover:to-brand/90 shadow-lg shadow-brand/10 hover:shadow-brand/20 hover:-translate-y-0.5 active:translate-y-0'
        : '',
      variant === 'secondary'
        ? 'border border-white/10 bg-white/5 text-white/90 hover:bg-white/10 hover:border-white/20 hover:text-white backdrop-blur-sm'
        : '',
      variant === 'ghost'
        ? 'text-white/70 hover:text-white hover:bg-white/5'
        : '',
      !variant ? 'bg-gradient-to-r from-brand to-brand/90 text-white hover:from-brand-hover hover:to-brand/90 shadow-lg shadow-brand/10 hover:shadow-brand/20 hover:-translate-y-0.5 active:translate-y-0' : '',
    ]"
  >
    <slot />
  </a>
  <button
    v-else
    type="button"
    :class="[
      'inline-flex items-center justify-center font-medium transition-all duration-200',
      'focus:outline-none focus:ring-2 focus:ring-brand/50 focus:ring-offset-2 focus:ring-offset-[#0a0a0a]',
      size === 'sm' ? 'px-4 py-2 text-sm rounded-lg' : '',
      size === 'lg' ? 'px-8 py-3.5 text-base rounded-xl' : '',
      (!size || size === 'md') ? 'px-6 py-2.5 text-sm rounded-lg' : '',
      variant === 'primary'
        ? 'bg-gradient-to-r from-brand to-brand/90 text-white hover:from-brand-hover hover:to-brand/90 shadow-lg shadow-brand/10 hover:shadow-brand/20 hover:-translate-y-0.5 active:translate-y-0'
        : '',
      variant === 'secondary'
        ? 'border border-white/10 bg-white/5 text-white/90 hover:bg-white/10 hover:border-white/20 hover:text-white backdrop-blur-sm'
        : '',
      variant === 'ghost'
        ? 'text-white/70 hover:text-white hover:bg-white/5'
        : '',
      !variant ? 'bg-gradient-to-r from-brand to-brand/90 text-white hover:from-brand-hover hover:to-brand/90 shadow-lg shadow-brand/10 hover:shadow-brand/20 hover:-translate-y-0.5 active:translate-y-0' : '',
    ]"
  >
    <slot />
  </button>
</template>
