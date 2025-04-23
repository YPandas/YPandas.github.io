<template>
    <div ref="homeRef" class="home-wrapper">
        <div class="title-section">
            <div class="role">FULLSTACK</div>
            <div class="developer">DEVELOPER</div>
        </div>
        
        <div class="intro-section">
            <div class="greeting">Hi! I'm Yuqi.</div>
            <div class="description">A passionate Fullstack Developer focused on building high-performance, scalable, and user-centric web applications.</div>
            <div class="contact">
                <a href="mailto:yukispace123@gmail.com" class="hire-btn">HIRE ME</a>
            </div>
        </div>

        <div class="stats-section">
            <div class="stat-item">
                <div class="stat-number">10+</div>
                <div class="stat-label">Projects Completed</div>
            </div>
            <div class="stat-item">
                <div class="stat-number">10K+</div>
                <div class="stat-label">Lines of Code</div>
            </div>
            <div class="stat-item">
                <div class="stat-number">15+</div>
                <div class="stat-label">Tech Stack Mastered</div>
            </div>
        </div>
    </div>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default {
    name: 'HomeSection',
    mounted() {
        const homeWrapper = this.$refs.homeRef
        const titleSection = homeWrapper.querySelector('.title-section')
        const role = titleSection.querySelector('.role')
        const developer = titleSection.querySelector('.developer')
        const introSection = homeWrapper.querySelector('.intro-section')
        const greeting = introSection.querySelector('.greeting')
        const description = introSection.querySelector('.description')
        const contact = introSection.querySelector('.contact')
        const statsSection = homeWrapper.querySelector('.stats-section')

        ScrollTrigger.create({
            trigger: homeWrapper,
            start: 'bottom center',
            end: 'bottom top 10%',
            onUpdate: (self) => {
                const progress = self.progress  // This gives us a value from 0 to 1
                
                gsap.to([role, developer, greeting, description, contact, statsSection], {
                    opacity: 1 - progress,
                    y: -70 * progress,
                    duration: 0,
                    ease: 'none'
                })
            },
        })
    },
    methods: {
        scrollToSection(sectionId) {
            const section = document.getElementById(sectionId)
            if (section) {
                section.scrollIntoView({
                    behavior: 'smooth'
                })
            }
        }
    }
}
</script>

<style scoped>
.home-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 0 16%;
    height: 100vh;
    color: white;
    position: relative;
}

.title-section {
    margin-bottom: 2rem;
}

.role {
    font-family: var(--font-title);
    font-size: 5rem;
    color: #fff20d;
    line-height: 1;
    letter-spacing: 2px;
}

.developer {
    font-family: var(--font-title);
    font-size: 5rem;
    color: white;
    line-height: 1;
    letter-spacing: 2px;
    left: 10%;
    position: relative;
}

.intro-section {
    margin: 2rem 0;
    max-width: 600px;
}

.greeting {
    font-size: 2rem;
    margin-bottom: 1rem;
    font-weight: 500;
    font-family: var(--font-descriptive);
}

.description {
    font-size: 1.2rem;
    line-height: 1.6;
    color: #cccccc;
    margin-bottom: 2rem;
    font-family: var(--font-descriptive);
}

.contact {
    margin-top: 2rem;
}

.hire-btn {
    display: inline-block;
    padding: 1rem 2rem;
    background-color: #fff20d;
    text-decoration: none;
    font-weight: bold;
    font-size: 1.1rem;
    transition: all 0.3s ease;
    color: black;
    font-family: var(--font-descriptive);
}

.hire-btn:hover {
    background-color: #fddb00;
    transform: translateY(-2px);
}

.stats-section {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: absolute;
    bottom: 5%;
    right: 2%;
}

.stat-item {
    text-align: right;
}

.stat-number {
    font-family: var(--font-title);
    font-size: 2.5rem;
    color: #fff20d;
    margin-bottom: 0.5rem;
}

.stat-label {
    color: #cccccc;
    font-size: 1rem;
    font-family: var(--font-descriptive);
}

@media (max-width: 768px) {
    .home-wrapper {
        padding: 0 5%;
    }

    .role, .developer {
        font-size: 3.5rem;
    }

    .stats-section {
        position: static;
        margin-top: 2rem;
        align-items: flex-start;
    }
}
</style>