<script setup lang="ts">
import useEmblaCarousel from "embla-carousel-vue";
import Autoplay from "embla-carousel-autoplay";
import basePhone from "~/assets/images/easyreceipt/base_phone.png";
import basePhone1 from "~/assets/images/easyreceipt/base_phone-1.png";
import basePhone2 from "~/assets/images/easyreceipt/base_phone-2.png";
import basePhone3 from "~/assets/images/easyreceipt/base_phone-3.png";
import basePhone4 from "~/assets/images/easyreceipt/base_phone-4.png";
import basePhone5 from "~/assets/images/easyreceipt/base_phone-5.png";
import ersLogo from "~/assets/images/ers.svg";
import steppetPhone from "~/assets/images/steppet/base_phone.png";
import steppetPhone1 from "~/assets/images/steppet/base_phone_1.png";
import steppetPhone2 from "~/assets/images/steppet/base_phone_2.png";
import steppetPhone3 from "~/assets/images/steppet/base_phone_3.png";
import steppetPhone4 from "~/assets/images/steppet/base_phone_4.png";
import steppetPhone5 from "~/assets/images/steppet/base_phone_5.png";
import steppetLogo from "~/assets/images/steppet.svg";

useAppSeo({
  title: "Bynery – Independent Software Studio | Focused Mobile & Web Apps",
  description:
    "Bynery is an independent studio building focused mobile and web apps. Home to EasyReceipt and Steppet. No bloat, just great software.",
});

const stats = [
  { value: "2", label: "Builders" },
  { value: "2", label: "Apps shipped" },
  { value: "100%", label: "Independent" },
  { value: "4.8★", label: "Avg. Rating" },
];

const philosophy = [
  {
    icon: "✨",
    title: "Zero Bloat",
    description:
      "We build features that matter. Lightweight software that stays out of your way and respects your storage.",
  },
  {
    icon: "🛡️",
    title: "Privacy Conscious",
    description:
      "Your data is not our product. We use industry-standard encryption and never sell your information to third parties.",
  },
  {
    icon: "💰",
    title: "Affordable",
    description:
      "Fair, transparent pricing. We believe high-quality tools should be accessible without corporate markups.",
  },
];

// SEO: Organization + WebSite structured data
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Bynery',
        url: 'https://bynery.app',
        logo: 'https://bynery.app/og-default.png',
        description: 'Indie dev studio building thoughtful apps.',
        sameAs: [],
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'US'
        },
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'customer service',
          email: 'reymarocero@gmail.com'
        }
      }),
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Bynery',
        url: 'https://bynery.app'
      }),
    },
  ],
})

// EasyReceipt carousel
const easyreceiptImages = [
  basePhone,
  basePhone1,
  basePhone2,
  basePhone3,
  basePhone4,
  basePhone5,
];

const [emblaRef, emblaApi] = useEmblaCarousel(
  {
    loop: true,
    align: "center",
    containScroll: "trimSnaps",
  },
  [Autoplay({ delay: 6500, stopOnInteraction: true })],
);

const currentEasyreceiptSlide = ref(0);

const syncEasyreceiptSlide = () => {
  if (!emblaApi.value) return;
  currentEasyreceiptSlide.value = emblaApi.value.selectedScrollSnap();
};

const nextEasyreceiptSlide = () => {
  emblaApi.value?.scrollNext();
};

const previousEasyreceiptSlide = () => {
  emblaApi.value?.scrollPrev();
};

const goToEasyreceiptSlide = (index: number) => {
  emblaApi.value?.scrollTo(index);
};

// Steppet carousel
const steppetImages = [
  steppetPhone,
  steppetPhone1,
  steppetPhone2,
  steppetPhone3,
  steppetPhone4,
  steppetPhone5,
];

const [steppetEmblaRef, steppetEmblaApi] = useEmblaCarousel(
  {
    loop: true,
    align: "center",
    containScroll: "trimSnaps",
  },
  [Autoplay({ delay: 6500, stopOnInteraction: true })],
);

const currentSteppetSlide = ref(0);

const syncSteppetSlide = () => {
  if (!steppetEmblaApi.value) return;
  currentSteppetSlide.value = steppetEmblaApi.value.selectedScrollSnap();
};

const nextSteppetSlide = () => {
  steppetEmblaApi.value?.scrollNext();
};

const previousSteppetSlide = () => {
  steppetEmblaApi.value?.scrollPrev();
};

const goToSteppetSlide = (index: number) => {
  steppetEmblaApi.value?.scrollTo(index);
};

onMounted(() => {
  if (emblaApi.value) {
    syncEasyreceiptSlide();
    emblaApi.value.on("select", syncEasyreceiptSlide);
    emblaApi.value.on("reInit", syncEasyreceiptSlide);
  }

  if (steppetEmblaApi.value) {
    syncSteppetSlide();
    steppetEmblaApi.value.on("select", syncSteppetSlide);
    steppetEmblaApi.value.on("reInit", syncSteppetSlide);
  }
});

onUnmounted(() => {
  if (emblaApi.value) {
    emblaApi.value.off("select", syncEasyreceiptSlide);
    emblaApi.value.off("reInit", syncEasyreceiptSlide);
  }

  if (steppetEmblaApi.value) {
    steppetEmblaApi.value.off("select", syncSteppetSlide);
    steppetEmblaApi.value.off("reInit", syncSteppetSlide);
  }
});
</script>

<template>
  <div class="text-[#f0f0f0] antialiased font-sans selection:bg-[#5e6ad2]/30">
    <section
      class="relative max-w-[1000px] mx-auto px-6 pt-28 pb-20 text-center"
    >
      <div
        class="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[radial-gradient(ellipse_at_top,rgba(94,106,210,0.15)_0%,transparent_75%)]"
      />

      <div
        class="inline-flex items-center gap-2 px-3 py-1 mb-8 border border-white/[0.08] rounded-full bg-white/[0.03] backdrop-blur-sm font-mono text-[11px] text-[#aaa]"
      >
        <span class="flex h-2 w-2 relative">
          <span
            class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#5e6ad2] opacity-75"
          ></span>
          <span
            class="relative inline-flex rounded-full h-2 w-2 bg-[#5e6ad2]"
          ></span>
        </span>
        Independent Software Studio
      </div>

      <h1
        class="text-5xl md:text-7xl font-semibold tracking-[-0.04em] leading-[1.05] text-[#f0f0f0] mb-6"
      >
        Software that feels<br />
        <span
          class="bg-gradient-to-r from-white via-white to-white/30 bg-clip-text text-transparent italic"
          >human again.</span
        >
      </h1>

      <p
        class="text-lg text-[#888] max-w-[600px] mx-auto mb-10 leading-relaxed"
      >
        We are a small, focused team building refined tools for mobile and web.
        No bloat, no complex hierarchies—just clean UI and fair pricing.
      </p>

      <div class="flex flex-wrap gap-3 justify-center">
        <NuxtLink
          to="/products"
          class="px-6 py-3 text-[15px] font-medium text-white bg-[#161616] border border-white/[0.1] rounded-xl no-underline hover:border-white/[0.2] transition-all"
        >
          View our products
        </NuxtLink>
      </div>
    </section>

    <div class="border-y border-white/[0.07] bg-[#0c0c0c]/50">
      <div class="max-w-[1000px] mx-auto grid grid-cols-2 md:grid-cols-4">
        <div
          v-for="(stat, i) in stats"
          :key="i"
          class="py-10 text-center relative border-r border-white/[0.07] last:border-r-0"
        >
          <div class="text-3xl font-semibold tracking-tighter text-white">
            {{ stat.value }}
          </div>
          <div
            class="text-[11px] uppercase tracking-widest text-[#555] mt-1 font-medium"
          >
            {{ stat.label }}
          </div>
        </div>
      </div>
    </div>

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
                class="w-12 h-12 rounded-xl bg-gradient-to-br from-[#f5f5f5] to-[#ffffff] flex items-center justify-center text-2xl shadow-xl shadow-[#5e6ad2]/20"
              >
                <img
                  :src="ersLogo"
                  alt="EasyReceipt logo"
                  class="h-8 w-8 rounded-md object-contain"
                />
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
            <div class="relative mx-auto w-[280px] sm:w-[320px] md:w-[360px]">
              <div
                ref="emblaRef"
                class="overflow-hidden"
              >
                <div class="flex">
                  <div
                    v-for="(image, index) in easyreceiptImages"
                    :key="image"
                    class="min-w-0 flex-[0_0_100%] p-2"
                  >
                    <img
                      :src="image"
                      :alt="`EasyReceipt screenshot ${index + 1}`"
                      class="block h-auto w-full rounded-[18px] object-contain"
                    />
                  </div>
                </div>
              </div>

              <div class="mt-3 flex items-center justify-between">
                <button
                  @click="previousEasyreceiptSlide"
                  class="rounded-full bg-[#5e6ad2]/30 p-2 text-white transition-colors hover:bg-[#5e6ad2]/50"
                  aria-label="Previous slide"
                >
                  <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                <div class="flex justify-center gap-2">
                  <button
                    v-for="(_, index) in easyreceiptImages"
                    :key="`dot-${index}`"
                    @click="goToEasyreceiptSlide(index)"
                    class="h-2 w-2 rounded-full transition-colors"
                    :class="
                      currentEasyreceiptSlide === index
                        ? 'bg-[#5e6ad2]'
                        : 'bg-white/30 hover:bg-white/50'
                    "
                    :aria-label="`Go to slide ${index + 1}`"
                  />
                </div>

                <button
                  @click="nextEasyreceiptSlide"
                  class="rounded-full bg-[#5e6ad2]/30 p-2 text-white transition-colors hover:bg-[#5e6ad2]/50"
                  aria-label="Next slide"
                >
                  <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
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
            <div class="relative mx-auto w-[280px] sm:w-[320px] md:w-[360px]">
              <div ref="steppetEmblaRef" class="overflow-hidden">
                <div class="flex">
                  <div
                    v-for="(image, index) in steppetImages"
                    :key="image"
                    class="min-w-0 flex-[0_0_100%] p-2"
                  >
                    <img
                      :src="image"
                      :alt="`Steppet screenshot ${index + 1}`"
                      class="block h-auto w-full rounded-[18px] object-contain"
                    />
                  </div>
                </div>
              </div>

              <div class="mt-3 flex items-center justify-between">
                <button
                  @click="previousSteppetSlide"
                  class="rounded-full bg-[#00b341]/30 p-2 text-white transition-colors hover:bg-[#00b341]/50"
                  aria-label="Previous Steppet slide"
                >
                  <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                <div class="flex justify-center gap-2">
                  <button
                    v-for="(_, index) in steppetImages"
                    :key="`steppet-dot-${index}`"
                    @click="goToSteppetSlide(index)"
                    class="h-2 w-2 rounded-full transition-colors"
                    :class="
                      currentSteppetSlide === index
                        ? 'bg-[#00b341]'
                        : 'bg-white/30 hover:bg-white/50'
                    "
                    :aria-label="`Go to Steppet slide ${index + 1}`"
                  />
                </div>

                <button
                  @click="nextSteppetSlide"
                  class="rounded-full bg-[#00b341]/30 p-2 text-white transition-colors hover:bg-[#00b341]/50"
                  aria-label="Next Steppet slide"
                >
                  <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div class="order-1 lg:order-2 space-y-6">
            <div class="flex items-center gap-3">
              <div
                class="w-12 h-12 rounded-xl bg-gradient-to-br from-[#010830] to-[#00072b] flex items-center justify-center text-2xl"
              >
                <img
                  :src="steppetLogo"
                  alt="Steppet logo"
                  class="h-8 w-8 rounded-md object-contain"
                />
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

      <!-- View All Products Link -->
      <div class="mt-16 text-center">
        <NuxtLink
          to="/products"
          class="inline-flex items-center gap-2 text-[13px] text-[#888] hover:text-[#f0f0f0] transition-colors"
        >
          View all products
          <span class="text-[#5e6ad2]">→</span>
        </NuxtLink>
      </div>
    </section>

    <section class="border-t border-white/[0.07] bg-[#0c0c0c]/30 px-6 py-24">
      <div class="max-w-[1000px] mx-auto text-center mb-16">
        <h2 class="text-3xl font-medium tracking-tight mb-4">
          The Bynery Standard
        </h2>
        <p class="text-[#888] max-w-[500px] mx-auto">
          We build software that is easy to use, clean, and of course,
          affordable.
        </p>
      </div>

      <div class="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          v-for="item in philosophy"
          :key="item.title"
          class="p-8 border border-white/[0.05] rounded-2xl bg-[#0f0f0f] hover:border-white/[0.1] transition-colors"
        >
          <div class="text-2xl mb-4">{{ item.icon }}</div>
          <h3 class="text-[15px] font-semibold text-white mb-2">
            {{ item.title }}
          </h3>
          <p class="text-[13px] text-[#888] leading-relaxed m-0">
            {{ item.description }}
          </p>
        </div>
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

html {
  scroll-behavior: smooth;
}
::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar-track {
  background: #080808;
}
::-webkit-scrollbar-thumb {
  background: #222;
  border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover {
  background: #333;
}
</style>
