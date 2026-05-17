<template>
  <div class="relative min-h-screen bg-[#080808] overflow-x-hidden">
    <!-- <GrainOverlay /> -->
    <div class="relative z-10 flex min-h-screen flex-col">
      <AppHeader />
      <main class="flex-1">
        <slot />
      </main>
      <AppFooter />
    </div>
  </div>
</template>
