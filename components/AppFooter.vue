<template>
  <footer class="border-t border-white/[0.07] py-12">
    <BaseContainer>
      <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

        <div class="space-y-5">
          <AppLogo />
          <p class="max-w-[280px] text-[13.5px] leading-relaxed text-[#888]">
            An independent studio building focused tools for mobile and web. No
            bloat, just great software built by a small, dedicated team.
          </p>
        </div>

        <div>
          <h4
            class="text-[12px] font-semibold uppercase tracking-[0.15em] text-[#f0f0f0] mb-6"
          >
            Products
          </h4>
          <ul class="space-y-4 p-0 list-none">
            <li>
              <NuxtLink
                to="/easyreceipt"
                class="text-[14px] text-[#888] no-underline hover:text-[#f0f0f0] transition-colors"
              >
                EasyReceipt Scanner
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/steppet"
                class="text-[14px] text-[#888] no-underline hover:text-[#f0f0f0] transition-colors"
              >
                Steppet
              </NuxtLink>
            </li>
          </ul>
        </div>

        <div>
          <h4
            class="text-[12px] font-semibold uppercase tracking-[0.15em] text-[#f0f0f0] mb-6"
          >
            Studio
          </h4>
          <ul class="space-y-4 p-0 list-none">
            <li>
              <NuxtLink
                to="/about"
                class="text-[14px] text-[#888] no-underline hover:text-[#f0f0f0] transition-colors"
              >
                Our Philosophy
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/contact"
                class="text-[14px] text-[#888] no-underline hover:text-[#f0f0f0] transition-colors"
              >
                Support & Contact
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </BaseContainer>
  </footer>
</template>
