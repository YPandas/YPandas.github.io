<template>
  <div class="opening-animation">
    <div class="strips-container">
      <div v-for="(strip, index) in strips" 
           :key="index" 
           class="strip"
           :style="{ '--delay': `${index * 0.05}s` }">
      </div>
    </div>
    <div class="name-container">
      <div class="name" ref="nameRef">YUQI HUANG</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OpeningAnimation',
  data() {
    return {
      showHomePage: false,
      strips: Array(20).fill(0) // Number of vertical strips
    }
  },
  mounted() {
    this.animateName();
  },
  methods: {
    animateName() {
      const name = this.$refs.nameRef;
      const letters = name.textContent.split('');
      name.textContent = '';
      
      // Create all letters at once with initial state
      letters.forEach((letter, index) => {
        const span = document.createElement('span');
        span.textContent = letter;
        span.style.opacity = '1';
        span.style.clipPath = 'inset(100% 0 0 0)';
        span.style.transition = 'clip-path 0.2s ease';
        span.style.transitionDelay = `${index * 0.1}s`;
        
        // Add special class for spaces
        if (letter === ' ') {
          console.log('space added');
          span.classList.add('space');
          span.style.width = '0.5em';
          span.style.display = 'inline-block';
        }
        
        name.appendChild(span);
      });

      // Trigger the animation after a small delay
      setTimeout(() => {
        const spans = name.querySelectorAll('span');
        spans.forEach(span => {
          span.style.clipPath = 'inset(0 0 0 0)';
        });
      }, 100);

      // After all letters appear, fade out the name and start reveal animation simultaneously
      setTimeout(() => {
        console.log('Starting name fade out and reveal animation');
        name.classList.add('fade-out');
        this.startRevealAnimation();
        
        setTimeout(() => {
          console.log('Animation complete');
          this.$emit('animation-complete');
        }, 2000);
      }, letters.length * 100 + 1000);
    },
    startRevealAnimation() {
      this.$nextTick(() => {
        const strips = document.querySelectorAll('.strip');
        strips.forEach(strip => {
          strip.style.transform = 'translateY(100%)';
        });
      });
    }
  }
}
</script>

<style scoped>
.opening-animation {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: transparent;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.strips-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  pointer-events: none;
  z-index: 1;
}

.strip {
  flex: 1;
  height: 100%;
  background-color: #000;
  transition: transform 1s cubic-bezier(0.4, 0, 0.2, 1);
  transition-delay: var(--delay);
  border-left: 1px solid rgba(255, 255, 255, 0.1);
}

.strip:last-child {
  border-right: 1px solid rgba(255, 255, 255, 0.1);
}

.name-container {
  position: relative;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
}

.name {
  font-family: "Anton", "Anton Fallback";
  font-size: 4rem;
  color: white;
  text-align: center;
  opacity: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.name.fade-out {
  animation: nameFadeOut 1s ease-out forwards;
}

.name span {
  display: inline-block;
  margin: 0 2px;
}

.name span.space {
  margin: 0 0.5em;
  min-width: 0.5em;
  width: 0.5em;
}

@keyframes nameFadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style> 