import anime from 'animejs';

declare module '#app' {
  interface NuxtApp {
    $anime: typeof anime;
  }
}

export {};
