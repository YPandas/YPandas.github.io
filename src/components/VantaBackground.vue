<template>
  <div ref="vantaRef" class="vanta-bg"></div>
</template>

<script>
let vantaInstance = null;
let frameCount = 0;
let lastFPSUpdate = 0;
let rafId = null;

export default {
  name: 'VantaBackground',
  data() {
    return {
      vantaEffect: null,
      fps: 0,
      isVisible: true
    }
  },
  mounted() {
    if (!vantaInstance) {
      this.loadScripts();
    } else {
      this.vantaEffect = vantaInstance;
    }
    
    // Add visibility change listener
    document.addEventListener('visibilitychange', this.handleVisibilityChange);
  },
  beforeDestroy() {
    document.removeEventListener('visibilitychange', this.handleVisibilityChange);
    if (rafId) {
      cancelAnimationFrame(rafId);
    }
  },
  methods: {
    handleVisibilityChange() {
      this.isVisible = !document.hidden;
      if (vantaInstance) {
        if (this.isVisible) {
          this.resumeAnimation();
        } else {
          this.pauseAnimation();
        }
      }
    },
    pauseAnimation() {
      if (vantaInstance) {
        vantaInstance.setOptions({
          maxDistance: 10.00,
          points: 5.00
        });
      }
    },
    resumeAnimation() {
      if (vantaInstance) {
        vantaInstance.setOptions({
          maxDistance: 23.00,
          points: 10.00
        });
      }
    },
    loadScripts() {
      if (window.THREE) {
        this.loadVanta();
      } else {
        const threeScript = document.createElement('script');
        threeScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js';
        threeScript.onload = () => {
          this.loadVanta();
        };
        threeScript.onerror = (error) => {
          console.error('Failed to load Three.js:', error);
        };
        document.head.appendChild(threeScript);
      }
    },
    loadVanta() {
      if (window.VANTA) {
        this.createVantaEffect();
      } else {
        const vantaScript = document.createElement('script');
        vantaScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/vanta/0.5.24/vanta.net.min.js';
        vantaScript.onload = () => {
          this.createVantaEffect();
        };
        vantaScript.onerror = (error) => {
          console.error('Failed to load Vanta:', error);
        };
        document.head.appendChild(vantaScript);
      }
    },
    createVantaEffect() {
      if (!vantaInstance && window.THREE && window.VANTA) {
        try {
          vantaInstance = window.VANTA.NET({
            el: this.$refs.vantaRef,
            mouseControls: true,
            touchControls: false,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0xac8d7e,
            backgroundColor: 0x2d5a9f,
            points: 8.00,
            spacing: 20.00
          });
          this.vantaEffect = vantaInstance;
        } catch (error) {
          console.error('Failed to create Vanta effect:', error);
        }
      }
    },
    monitorPerformance() {
      const now = performance.now();
      frameCount++;
      
      if (now - lastFPSUpdate >= 1000) {
        this.fps = Math.round((frameCount * 1000) / (now - lastFPSUpdate));
        frameCount = 0;
        lastFPSUpdate = now;
        
        if (this.fps < 30) {
          console.log(`Vanta FPS: ${this.fps} - Adjusting for better performance`);
          this.adjustForLowPerformance();
        }
      }
    },
    adjustForLowPerformance() {
      if (vantaInstance) {
        vantaInstance.setOptions({
          points: 5.00,
          spacing: 20.00,
          maxDistance: 15.00
        });
      }
    }
  }
}
</script>

<style scoped>
.vanta-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  background-color: #214389;
  transform: translateZ(0);
  backface-visibility: hidden;
  perspective: 1000;
  will-change: transform;
}
</style> 