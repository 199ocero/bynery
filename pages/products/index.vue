<script setup lang="ts">
useAppSeo({
  title: "Our Products – Bynery | Focused Mobile & Web Apps",
  description:
    "Discover Bynery's portfolio of focused mobile and web apps. EasyReceipt Scanner for AI-powered receipt management, and Steppet for gamified fitness. More coming soon.",
  url: '/products',
});

// SEO: ItemList structured data
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'Bynery Products',
        description: 'Mobile and web applications by Bynery',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            item: {
              '@type': 'SoftwareApplication',
              name: 'EasyReceipt Scanner',
              url: 'https://bynery.app/easyreceipt',
              applicationCategory: 'BusinessApplication',
              description: 'AI-powered receipt scanning with multi-currency support, fast exports, and expense tracking.'
            }
          },
          {
            '@type': 'ListItem',
            position: 2,
            item: {
              '@type': 'SoftwareApplication',
              name: 'Steppet',
              url: 'https://bynery.app/steppet',
              applicationCategory: 'HealthApplication',
              description: 'A fitness + virtual pet app that turns your daily walks into a fun adventure.'
            }
          }
        ]
      }),
    },
  ],
})
</script>

<template>
  <div class="text-[#f0f0f0] antialiased font-sans selection:bg-[#5e6ad2]/30">
    <section class="max-w-[1100px] mx-auto px-6 py-24">
      <div class="mb-16">
        <p
          class="font-mono text-[11px] uppercase tracking-[0.2em] text-[#5e6ad2] mb-3"
        >
          The Portfolio
        </p>
        <h2 class="text-4xl font-semibold tracking-tight">
          Our active projects
        </h2>
      </div>

      <div class="grid gap-24">
        <!-- PRODUCT: EASYRECEIPT (With Scanning Animation) -->
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div class="space-y-6">
            <div class="flex items-center gap-3">
              <div
                class="w-12 h-12 rounded-xl bg-gradient-to-br from-[#5e6ad2] to-[#7c5cbf] flex items-center justify-center text-2xl shadow-xl shadow-[#5e6ad2]/20"
              >
                🧾
              </div>
              <div>
                <h3 class="text-2xl font-semibold">EasyReceipt Scanner</h3>
                <p
                  class="text-[#5e6ad2] text-sm font-mono uppercase tracking-wider"
                >
                  Productivity
                </p>
              </div>
            </div>

            <h4
              class="text-3xl font-medium tracking-tight text-white leading-tight"
            >
              Scan receipts with<br /><span class="text-[#888]"
                >superpowers.</span
              >
            </h4>

            <p class="text-[15px] text-[#888] leading-relaxed">
              Ditch the paper trail. EasyReceipt uses advanced AI to extract
              data from any receipt in seconds, keeping your records secure and
              organized.
            </p>

            <div class="flex flex-wrap gap-4 py-2">
              <div class="flex items-center gap-2 text-[13px] text-[#aaa]">
                <span class="text-[#5e6ad2]">✦</span> AI Smart Scan
              </div>
              <div class="flex items-center gap-2 text-[13px] text-[#aaa]">
                <span class="text-[#5e6ad2]">✦</span> Multi-currency
              </div>
              <div class="flex items-center gap-2 text-[13px] text-[#aaa]">
                <span class="text-[#5e6ad2]">✦</span> Fast Exports
              </div>
            </div>

            <NuxtLink
              to="/easyreceipt"
              class="inline-block px-6 py-3 rounded-lg border border-[#5e6ad2]/30 text-[#5e6ad2] text-sm font-medium hover:bg-[#5e6ad2]/5 transition-colors"
            >
              View Product Details →
            </NuxtLink>
          </div>

          <div class="relative group">
            <div
              class="absolute -inset-4 bg-gradient-to-br from-[#5e6ad2]/20 to-transparent blur-2xl opacity-50"
            ></div>
            <div
              class="relative bg-[#0f0f0f] border border-white/[0.08] rounded-[24px] p-8 aspect-video flex flex-col justify-center overflow-hidden"
            >
              <div class="space-y-4 relative">
                <!-- Animated Scan Line -->
                <div
                  class="absolute -inset-x-8 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#5e6ad2] to-transparent shadow-[0_0_15px_rgba(94,106,210,0.8)] z-10 animate-scan"
                ></div>

                <div
                  class="h-3 w-2/3 bg-white/[0.05] rounded animate-pulse"
                ></div>
                <div class="h-3 w-full bg-white/[0.05] rounded"></div>
                <div class="h-3 w-4/5 bg-white/[0.05] rounded"></div>
                <div class="h-3 w-1/2 bg-[#5e6ad2]/20 rounded"></div>
              </div>
              <div class="mt-8 flex justify-between items-center">
                <div class="text-2xl font-mono text-white">$142.50</div>
                <div class="flex items-center gap-2">
                  <span
                    class="w-1.5 h-1.5 rounded-full bg-[#5e6ad2] animate-ping"
                  ></span>
                  <div
                    class="text-[10px] uppercase tracking-widest text-[#5e6ad2] font-semibold"
                  >
                    AI Recognition Active
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="h-px bg-white/[0.07] w-full"></div>

        <!-- PRODUCT: STEPPET (With Floating/Pulsing Animation) -->
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div class="order-2 lg:order-1 relative group">
            <div
              class="absolute -inset-4 bg-gradient-to-br from-[#00b341]/20 to-transparent blur-2xl opacity-50"
            ></div>
            <div
              class="relative bg-[#0f0f0f] border border-white/[0.08] rounded-[32px] p-8 aspect-square flex items-center justify-center overflow-hidden"
            >
              <div class="text-center">
                <div class="text-8xl mb-6 animate-float inline-block">🐣</div>
                <div
                  class="w-48 h-2 bg-white/[0.1] rounded-full overflow-hidden relative"
                >
                  <div
                    class="absolute inset-0 bg-[#00b341] animate-progress-fill shadow-[0_0_12px_#00b341]"
                  ></div>
                </div>
                <p
                  class="mt-4 font-mono text-[10px] text-[#555] tracking-widest uppercase animate-pulse"
                >
                  Evolving Stage 2/5
                </p>
              </div>
            </div>
          </div>

          <div class="order-1 lg:order-2 space-y-6">
            <div class="flex items-center gap-3">
              <div
                class="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00b341] to-[#008a32] flex items-center justify-center text-2xl"
              >
                👟
              </div>
              <div>
                <h3 class="text-2xl font-semibold">Steppet</h3>
                <p
                  class="text-[#00b341] text-sm font-mono uppercase tracking-wider"
                >
                  Fitness & Fun
                </p>
              </div>
            </div>

            <h4
              class="text-3xl font-medium tracking-tight text-white leading-tight"
            >
              Turn Every Step<br />Into
              <span class="text-[#00b341]">an Adventure.</span>
            </h4>

            <p class="text-[15px] text-[#888] leading-relaxed">
              Transform your daily walk into an exciting journey. Choose a
              virtual pet companion, hit your step goals, and watch them evolve
              through life stages.
            </p>

            <ul class="space-y-3 m-0 p-0 list-none">
              <li class="flex items-center gap-2 text-[14px] text-[#aaa]">
                <span class="w-1 h-1 rounded-full bg-[#00b341]"></span>
                Gamified fitness goals
              </li>
              <li class="flex items-center gap-2 text-[14px] text-[#aaa]">
                <span class="w-1 h-1 rounded-full bg-[#00b341]"></span>
                Rare pet evolution paths
              </li>
            </ul>

            <NuxtLink
              to="/steppet"
              class="inline-block px-6 py-3 rounded-lg border border-[#00b341]/30 text-[#00b341] text-sm font-medium hover:bg-[#00b341]/5 transition-colors"
            >
              Meet your pet →
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Coming Soon Section -->
    <section class="border-t border-white/[0.07] bg-[#0c0c0c]/30 px-6 py-24">
      <div class="max-w-[1000px] mx-auto text-center">
        <div class="inline-flex items-center gap-2 mb-6">
          <span class="relative flex h-3 w-3">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#5e6ad2] opacity-75"></span>
            <span class="relative inline-flex rounded-full h-3 w-3 bg-[#5e6ad2]"></span>
          </span>
          <span class="font-mono text-[11px] uppercase tracking-[0.2em] text-[#5e6ad2]">
            Coming Soon
          </span>
        </div>
        <h2 class="text-3xl font-medium tracking-tight text-white mb-4">
          More apps on the way
        </h2>
        <p class="text-[#888] max-w-[500px] mx-auto">
          We're building more focused tools. Stay tuned.
        </p>
      </div>
    </section>
  </div>
</template>

<style scoped>
@keyframes scan {
  0% {
    top: 0%;
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    top: 100%;
    opacity: 0;
  }
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-10px) rotate(2deg);
  }
}

@keyframes progress-fill {
  0% {
    width: 0%;
  }
  50% {
    width: 75%;
  }
  100% {
    width: 66%;
  }
}

.animate-scan {
  animation: scan 3s ease-in-out infinite;
}

.animate-float {
  animation: float 4s ease-in-out infinite;
}

.animate-progress-fill {
  animation: progress-fill 5s ease-in-out infinite alternate;
}
</style>
