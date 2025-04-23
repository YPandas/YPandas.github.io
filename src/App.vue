<template>
  <div class="app-container">
    <keep-alive>
      <VantaBackground />
    </keep-alive>
    <OpeningAnimation v-if="showAnimation" @animation-complete="handleAnimationComplete" />
    <WebHeader />
    <router-view />
  </div>
</template>

<script>
import OpeningAnimation from './components/OpeningAnimation.vue'
import VantaBackground from './components/VantaBackground.vue'
import Lenis from '@studio-freight/lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default {
  name: 'App',
  components: {
    OpeningAnimation,
    VantaBackground
  },
  data() {
    return {
      showAnimation: true,
      lenis: null,
      rafId: null
    }
  },
  mounted() {
    console.log('App mounted, showAnimation:', this.showAnimation);
    this.initLenis();
  },
  beforeDestroy() {
    if (this.lenis) {
      this.lenis.destroy();
      if (this.rafId) {
        cancelAnimationFrame(this.rafId);
      }
    }
  },
  methods: {
    handleAnimationComplete() {
      console.log('Animation complete event received');
      this.showAnimation = false;
    },
    initLenis() {
      // Initialize Lenis with custom settings
      this.lenis = new Lenis({
        duration: 1.2, // Slightly longer duration for smoother scrolling
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 0.8, // Reduced multiplier for smoother scrolling
        smoothTouch: false,
        touchMultiplier: 2,
        infinite: false,
      });

      // Synchronize Lenis with GSAP ScrollTrigger
      this.lenis.on('scroll', ScrollTrigger.update);

      // Use requestAnimationFrame instead of GSAP's ticker
      const raf = (time) => {
        this.lenis.raf(time);
        this.rafId = requestAnimationFrame(raf);
      };
      
      this.rafId = requestAnimationFrame(raf);
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Flex:wght@100..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');

:root {
  --font-descriptive: 'Roboto Flex', sans-serif;
  --font-title: 'Anton', sans-serif;
}

.app-container {
  position: relative;
  min-height: 100vh;
}

button, input, select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
</style>
