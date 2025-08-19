<script setup lang="ts">
const { icon } = useTransparentPwaIcon('pwa-64x64.png')
const { icon: appleIcon } = useApplePwaIcon('apple-touch-icon-180x180.png')
const { icon: appleSplash } = useAppleSplashScreenPwaIcon('apple-splash-landscape-dark-2048x1536.png')
</script>

<template>
  <div>
    <h1>Nuxt Vite PWA</h1>
    <ClientOnly>
      PWA Installed: {{ $pwa?.isPWAInstalled }}
    </ClientOnly>

    <br>
    <img v-if="icon" loading="lazy"  v-bind="icon" alt="PWA Icon" />
    <br>
    <pre>
      {{ icon }}
    </pre>
    <br>
    <pre>
      {{ $pwaIcons?.transparent['pwa-64x64.png'] }}
    </pre>
    <br>
    <br>
    <img v-if="appleIcon" loading="lazy"  v-bind="appleIcon" alt="PWA Icon" />
    <br>
    <pre>
      {{ appleIcon }}
    </pre>
    <br>
    <pre>
      {{ $pwaIcons?.apple['apple-touch-icon-180x180.png'] }}
    </pre>
    <br>
    <br>
    <PwaTransparentImage loading="lazy" image="pwa-64x64.png" alt="PWA Icon"  />
    <br>
    <PwaMaskableImage loading="lazy" image="maskable-icon-512x512.png" alt="PWA Icon"  />
    <br>
    <PwaAppleImage loading="lazy" image="apple-touch-icon-180x180.png" alt="PWA Icon"  />
    <br>
    <pre>
      {{ appleSplash }}
    </pre>
    <br>
    <pre>
      {{ $pwaIcons?.appleSplashScreen['apple-splash-landscape-dark-2048x1536.png'] }}
    </pre>
    <br>
    <PwaAppleSplashScreenImage loading="lazy" image="apple-splash-landscape-dark-2048x1536.png" alt="PWA Icon"  />
  </div>
</template>
