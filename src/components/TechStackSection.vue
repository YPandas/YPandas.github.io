<template>
  <section ref="stackRef" class="stack-section">
    <div class="stack-header">
      <div class="stack-icon">*</div>
      <h2>MY STACK</h2>
    </div>

    <div class="stack-categories">
      <div v-for="(category, index) in categories" :key="index" :ref="`category${index}`" class="category">
        <h3 class="category-title">{{ category.title }}</h3>
        <div class="tech-grid">
          <div v-for="(tech, techIndex) in category.items" 
               :key="tech.name" 
               :ref="`techItem${index}-${techIndex}`"
               class="tech-item"
               @mouseenter="handleHover($event, techIndex, index)"
               @mouseleave="handleHoverLeave($event, techIndex, index)">
            <img :src="tech.icon" :alt="tech.name" class="tech-icon">
            <span class="tech-name">{{ tech.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default {
  name: 'TechStackSection',
  data() {
    return {
      categories: [
        {
          title: 'LANGUAGES',
          items: [
            { name: 'JavaScript', icon: require('@/assets/tech/javascript.svg') },
            { name: 'TypeScript', icon: require('@/assets/tech/typescript.svg') },
            { name: 'Python', icon: require('@/assets/tech/python.png') },
            { name: 'Java', icon: require('@/assets/tech/java.svg') },
            { name: 'Go', icon: require('@/assets/tech/go.svg') },
            { name: 'SQL', icon: require('@/assets/tech/sql.png') },
            { name: 'C++', icon: require('@/assets/tech/cpp.png') },
            { name: 'Shell', icon: require('@/assets/tech/shell.png') },
            { name: 'Rust', icon: require('@/assets/tech/rust.png') }
          ]
        },
        {
          title: 'WEB & UI',
          items: [
            { name: 'React.js', icon: require('@/assets/tech/react.svg') },
            { name: 'Vue.js', icon: require('@/assets/tech/vue.svg') },
            { name: 'GSAP', icon: require('@/assets/tech/gsap.svg') },
            { name: 'Tailwind CSS', icon: require('@/assets/tech/tailwind.svg') },
            { name: 'Material UI', icon: require('@/assets/tech/mui.png') },
            { name: 'HTML/CSS', icon: require('@/assets/tech/html.png') }
          ]
        },
        {
          title: 'BACKEND & DATA',
          items: [
            { name: 'Node.js', icon: require('@/assets/tech/nodejs.svg') },
            { name: 'Django', icon: require('@/assets/tech/django.png') },
            { name: 'Flask', icon: require('@/assets/tech/flask.png') },
            { name: 'GraphQL', icon: require('@/assets/tech/graphql.png') },
            { name: 'Redis', icon: require('@/assets/tech/redis.svg') },
            { name: 'PostgreSQL', icon: require('@/assets/tech/postgresql.png') },
            { name: 'MongoDB', icon: require('@/assets/tech/mongodb.svg') },
            { name: 'RESTful APIs', icon: require('@/assets/tech/api.svg') }
          ]
        },
        {
          title: 'DEVOPS & TOOLS',
          items: [
            { name: 'Docker', icon: require('@/assets/dockerPic.png') },
            { name: 'Kubernetes', icon: require('@/assets/k8simage.png') },
            { name: 'Jenkins', icon: require('@/assets/tech/jenkins.svg') },
            { name: 'Git', icon: require('@/assets/tech/git.png') },
            { name: 'Azure', icon: require('@/assets/tech/azure.svg') },
            { name: 'AWS', icon: require('@/assets/tech/aws-icon.svg') },
            { name: 'Airflow', icon: require('@/assets/tech/airflow.svg') },
            { name: 'PyTorch', icon: require('@/assets/tech/pytorch.svg') },
            { name: 'OpenCV', icon: require('@/assets/tech/opencv.svg') }
          ]
        }
      ]
    }
  },
  mounted() {
    this.setupAnimations()
  },
  methods: {
    setupAnimations() {
      // Get all tech items
      const allTechItems = []
      this.categories.forEach((category, categoryIndex) => {
        category.items.forEach((_, techIndex) => {
          const ref = `techItem${categoryIndex}-${techIndex}`
          if (this.$refs[ref]) {
            allTechItems.push(this.$refs[ref])
          }
        })
      })

      gsap.set(allTechItems, {
        opacity: 0,
        y: 50
      })

      // Create a timeline for each category
      this.categories.forEach((category, categoryIndex) => {
        const categoryItems = []
        const categoryTitle = this.$refs[`category${categoryIndex}`]
        
        // Set initial state for category title
        gsap.set(categoryTitle, {
          opacity: 0,
          x: -50
        })

        category.items.forEach((_, techIndex) => {
          const ref = `techItem${categoryIndex}-${techIndex}`
          if (this.$refs[ref]) {
            categoryItems.push(this.$refs[ref])
          }
        })

        // Create a timeline for this category
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: categoryItems[0],
            start: "top 85%",
            end: "top 40%",
            scrub: 1, //one second of animation per scroll unit
          }
        })

        // First animate the category title
        tl.to(categoryTitle, {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out"
        })

        // Then add staggered animations for tech items
        categoryItems.forEach((item) => {
          tl.to(item, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.inOut"
          }, ">0.1") // Reduced gap between items for smoother transition
        })
      })
    },
    handleHover(event) {
      const item = event.currentTarget;
      
      gsap.to(item, {
        scale: 1.1,
        z: 20,
        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
        duration: 0.2,
        ease: "bounce.out"
      });

      gsap.to(item.querySelector('.tech-icon'), {
        scale: 1.1,
        duration: 0.2,
        ease: "bounce.out"
      });

      // gsap.to(item.querySelector('.tech-name'), {
      //   color: '#FFD700',
      //   duration: 0.3
      // });
    },
    handleHoverLeave(event) {
      const item = event.currentTarget;
      
      gsap.to(item, {
        scale: 1,
        z: 0,
        boxShadow: 'none',
        duration: 0.3,
        ease: "power2.out"
      });

      gsap.to(item.querySelector('.tech-icon'), {
        scale: 1,
        duration: 0.3,
        ease: "power2.out"
      });

      gsap.to(item.querySelector('.tech-name'), {
        color: '#FFFFFF',
        duration: 0.3
      });
    }
  }
}
</script>

<style scoped>
.stack-section {
  min-height: 100vh;
  padding: 120px 15% 80px;
  color: #FFFFFF;
}

.stack-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-family: var(--font-descriptive);
}

.stack-icon {
  font-size: 2rem;
  color: #FFD700;
}

.stack-header h2 {
  font-size: 1.5rem;
  font-weight: 500;
  color: #FFFFFF;
}

.stack-categories {
  display: flex;
  flex-direction: column;
  gap: 4rem;
}

.category {
  display: flex;
  margin-bottom: 2rem;
}

.category-title {
  font-size: 2.5rem;
  color: #E0EBE0;
  margin-bottom: 2rem;
  margin-right: 9%;
  font-weight: 300;
  font-family: var(--font-title);
  width: 38%;
}
.tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  width: 100%;
}

.tech-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border-radius: 8px;
  transition: transform 0.3s ease;
  transform: translateY(0);
  background: rgba(255, 255, 255, 0.25);
  height: 85%;
  position: relative;
  transform-style: preserve-3d;
  will-change: transform, box-shadow;
}

.tech-item:hover {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.3);
}

.tech-icon {
  width: 64px;
  height: 64px;
}

.tech-name {
  font-size: 1.1rem;
  color: #FFFFFF;
  font-family: var(--font-descriptive);
}

@media (max-width: 1200px) {
  .tech-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }

  .tech-item {
    gap: 1.8rem;
    padding: 1.3rem;
  }

  .tech-icon {
    width: 36px;
    height: 36px;
  }

  .tech-name {
    font-size: 1.3rem;
  }
}

@media (max-width: 1024px) {
  .stack-section {
    padding: 80px 5%;
  }

  .category-title {
    font-size: 2rem;
    width: 45%;
  }

  .tech-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.8rem;
  }

  .tech-item {
    gap: 1.5rem;
    padding: 1.2rem;
  }

  .tech-icon {
    width: 32px;
    height: 32px;
  }

  .tech-name {
    font-size: 1.2rem;
  }
}

@media (max-width: 768px) {
  .category-title {
    font-size: 1.8rem;
    width: 50%;
  }

  .tech-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  .tech-item {
    gap: 1.2rem;
    padding: 1rem;
  }

  .tech-icon {
    width: 28px;
    height: 28px;
  }

  .tech-name {
    font-size: 1.1rem;
  }
}

@media (max-width: 480px) {
  .category-title {
    font-size: 1.5rem;
    width: 100%;
    margin-right: 0;
  }

  .tech-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .tech-item {
    gap: 1rem;
    padding: 0.8rem;
  }

  .tech-icon {
    width: 24px;
    height: 24px;
  }

  .tech-name {
    font-size: 1rem;
  }
}
</style> 