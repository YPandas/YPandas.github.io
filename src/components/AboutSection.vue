<template>
  <section ref="aboutRef" class="about-section">
    <div class="belief-statement">
      <h2 class="large-text">
        I believe design should be thoughtful and intelligent. Every project I take on blends creativity with precision to ensure it looks great and delivers meaningful value.
      </h2>
      <div class="subtitle">This is me.</div>
    </div>

    <div class="personal-intro">
      <div class="intro-left">
        <h2>About Me</h2>
      </div>
      <div class="intro-right">
        <p>I'm a software engineer passionate about building smart, scalable experiences that bridge design and AI. With experience in frontend animation, backend integration, and real-time data systems, I specialize in turning ambitious ideas into polished, responsive products. I thrive at the intersection of design and engineering—translating abstract vision into seamless interfaces powered by advanced tech. Whether it's crafting immersive web experiences or optimizing AI-driven workflows, my goal is to create systems that are as intuitive as they are impactful.</p>
      </div>
    </div>
  </section>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default {
  name: 'AboutSection',
  mounted() {
    const aboutSection = this.$refs.aboutRef
    const beliefStatement = aboutSection.querySelector('.belief-statement')
    const personalIntro = aboutSection.querySelector('.personal-intro')

    // Initial state
    gsap.set([beliefStatement, personalIntro], { 
      opacity: 0,
      y: 70
    })

    ScrollTrigger.create({
      trigger: aboutSection,
      start: 'top 90%',
      end: 'bottom 10%',
      onUpdate: () => {
        const beliefRect = beliefStatement.getBoundingClientRect()
        const introRect = personalIntro.getBoundingClientRect()
        const viewportHeight = window.innerHeight

        // Calculate progress for belief statement - starts at viewport entry, reaches 1 at 50%
        const beliefProgress = Math.max(0, Math.min(1, 
          (viewportHeight - beliefRect.top) / (viewportHeight * 0.5)
        ))
        
        // Calculate progress for personal intro
        const introProgress = Math.max(0, Math.min(1,
          (viewportHeight - introRect.top) / (viewportHeight * 0.8)
        ))

        // Calculate exit progress when leaving from top
        const exitProgress = Math.max(0, Math.min(1,
          (introRect.bottom) / (viewportHeight * 0.3)
        ))

        // Apply animations with smooth transitions
        gsap.to(beliefStatement, {
          opacity: Math.min(beliefProgress, exitProgress),
          y: 70 * (1 - beliefProgress),
          duration: 0.5,
          ease: 'power3.out'
        })

        // Personal intro uses belief's opacity and has its own slide animation
        gsap.to(personalIntro, {
          opacity: Math.min(beliefProgress, exitProgress),
          y: 70 * (1 - introProgress),
          duration: 0.5,
          ease: 'power3.out'
        })
      },
      markers: false
    })
  }
}
</script>

<style scoped>
.about-section {
  min-height: 100vh;
  padding: 120px 10% 80px;
  color: #FFFFFF;
  display: flex;
  flex-direction: column;
}

.belief-statement {
  position: relative;
  padding-bottom: 4vh;
}

.belief-statement::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background: linear-gradient(
    to right,
    rgba(224, 235, 224, 0.2) 0%,
    rgba(224, 235, 224, 0.5) 50%,
    rgba(224, 235, 224, 0.2) 100%
  );
}

.large-text {
  font-size: 3rem;
  line-height: 1.2;
  font-weight: 300;
  margin-bottom: 40px;
  font-family: 'Inter', sans-serif;
  max-width: 90%;
  color: #FFFFFF;
}

.subtitle {
  color: #E0EBE0;
  font-size: 1.2rem;
  margin-top: 2rem;
  font-family: var(--font-descriptive);
}

.personal-intro {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 60px;
  align-items: flex-start;
}

.intro-left h2 {
  font-size: 3.5rem;
  font-weight: 500;
  font-family: var(--font-descriptive);
  margin: 0;
  color: #ffeb3b;
}

.intro-right p {
  font-size: 1.4rem;
  font-family: var(--font-descriptive);
  line-height: 1.8;
  color: #E0EBE0;
  margin: 0;
}

@media (max-width: 1024px) {
  .about-section {
    padding: 80px 5%;
  }

  .large-text {
    font-size: 1.5rem;
    max-width: 100%;
  }

  .personal-intro {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .intro-left h2 {
    font-size: 2rem;
  }

  .intro-right p {
    font-size: 1.1rem;
  }
}

@media (max-width: 768px) {
  .large-text {
    font-size: 2rem;
  }
}

.about-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.about-text {
  font-size: 1.1rem;
  line-height: 1.6;
  color: white;
}
</style> 