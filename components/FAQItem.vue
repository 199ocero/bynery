<script setup lang="ts">
defineProps<{
  question: string
  answer: string
}>()
</script>

<template>
  <div class="bg-white/[0.02] border border-white/[0.06] rounded-xl overflow-hidden">
    <details class="group">
      <summary class="cursor-pointer list-none p-6 font-semibold text-[#f0f0f0] hover:text-white/90 transition-colors">
        <div class="flex items-center justify-between gap-4">
          <span>{{ question }}</span>
          <span class="flex-shrink-0 text-white/30 group-hover:text-white/50 transition-transform group-open:rotate-180">
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </span>
        </div>
      </summary>
      <div class="px-6 pb-6 text-[#888] border-t border-white/[0.06] pt-6">
        {{ answer }}
      </div>
    </details>
  </div>
</template>
