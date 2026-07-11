<template>
  <component :is="as" ref="root" class="RevealOnScroll" :class="[variantClass, { 'is-visible': isVisible }]">
    <slot />
  </component>
</template>

<script setup lang="ts">
/**
 * Revele sobrement un bloc quand il entre dans le viewport.
 * Le contenu reste visible sans JavaScript et lorsque prefers-reduced-motion est actif.
 */
const props = withDefaults(
  defineProps<{
    as?: string
    variant?: 'left' | 'right' | 'fade' | 'mask' | 'image'
    delay?: 'none' | 'short' | 'medium'
  }>(),
  {
    as: 'div',
    variant: 'fade',
    delay: 'none',
  },
)

const root = ref<HTMLElement | null>(null)
const isVisible = ref(false)
const variantClass = computed(() => [`RevealOnScroll--${props.variant}`, `RevealOnScroll--delay-${props.delay}`])

onMounted(() => {
  const element = root.value
  if (!element || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    isVisible.value = true
    return
  }

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry?.isIntersecting) {
        isVisible.value = true
        observer.disconnect()
      }
    },
    { threshold: 0.18, rootMargin: '0px 0px -8% 0px' },
  )

  observer.observe(element)
})
</script>

<style scoped>
@reference "~/assets/css/main.css";

.RevealOnScroll {
  opacity: 1;
}

@media (prefers-reduced-motion: no-preference) {
  .RevealOnScroll {
    opacity: 0;
    transition:
      opacity var(--motion-standard) var(--ease-premium),
      transform var(--motion-standard) var(--ease-premium),
      clip-path var(--motion-standard) var(--ease-premium);
    will-change: opacity, transform, clip-path;
  }
  .RevealOnScroll--left {
    transform: translate3d(calc(-1 * var(--reveal-distance)), 0, 0);
  }
  .RevealOnScroll--right {
    transform: translate3d(var(--reveal-distance), 0, 0);
  }
  .RevealOnScroll--fade {
    transform: translate3d(0, 12px, 0);
  }
  .RevealOnScroll--mask,
  .RevealOnScroll--image {
    clip-path: inset(0 18% 0 0);
  }
  .RevealOnScroll--delay-short {
    transition-delay: 90ms;
  }
  .RevealOnScroll--delay-medium {
    transition-delay: 180ms;
  }
  .RevealOnScroll.is-visible {
    opacity: 1;
    transform: translate3d(0, 0, 0);
    clip-path: inset(0 0 0 0);
  }
}
</style>
