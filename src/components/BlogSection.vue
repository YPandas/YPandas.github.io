<template>
    <section id="blogs">
        <div class="blog-wrapper">
            <h1 class="section-title">* BLOG COLLECTIONS</h1>
            <div class="blog-list">
                <div class="blog-item">
                    <span class="blog-number">_01.</span>
                    <router-link :to="{ name: 'MERN-Deploy' }" class="blog-name" data-text="How to Deploy MERN APP with Nginx and PM2">How to Deploy MERN APP with Nginx and PM2</router-link>
                </div>

                <div class="blog-item">
                    <span class="blog-number">_02.</span>
                    <router-link :to="{ name: 'Docker-Image-Guide' }" class="blog-name" data-text="Best Practice for Docker Image Building">Best Practice for Docker Image Building</router-link>
                </div>

                <div class="blog-item">
                    <span class="blog-number">_03.</span>
                    <router-link :to="{ name: 'Kubernetes-Mirroring-Setup' }" class="blog-name" data-text="Kubernetes Mirroring Setup">Kubernetes Mirroring Setup</router-link>
                </div>

                <div class="blog-item">
                    <span class="blog-number">_04.</span>
                    <router-link :to="{ name: 'Py2App-Guide' }" class="blog-name" data-text="How to Package a Python Application into a macOS App">How to Package a Python Application into a macOS App</router-link>
                </div>

                <div class="blog-item">
                    <span class="blog-number">_05.</span>
                    <router-link :to="{ name: 'Docker-Intro' }" class="blog-name" data-text="My understanding of docker">My understanding of docker</router-link>
                </div>

                <div class="blog-item">
                    <span class="blog-number">_06.</span>
                    <span class="blog-name" data-text="To Be Continued...">To Be Continued...</span>
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
    name: 'BlogSection',
    mounted() {
        const blogItems = this.$el.querySelectorAll('.blog-item')
        
        blogItems.forEach((item, index) => {
            gsap.set(item, {
                opacity: 0,
                y: 50
            })

            const scrollTl = gsap.timeline({
                scrollTrigger: {
                    trigger: item,
                    start: 'top 97%',
                    end: 'top 75%',
                    scrub: 1,
                    toggleActions: 'play none none reverse',
                }
            })

            scrollTl.to(item, {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: 'power3.out',
                delay: index * 0.1
            })
        })
    },
    beforeUnmount() {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
}
</script>

<style scoped>
.blog-wrapper {
    padding: 24vh 15% 10% 15%;
    min-height: 100vh;
    width: 100%;
    box-sizing: border-box;
}

.section-title {
    font-size: 1.5rem;
    margin-bottom: 2rem;
    color: white;
    font-family: var(--font-descriptive);
}

.blog-list {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    font-family: var(--font-descriptive);
}

.blog-item {
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    padding-bottom: 2rem;
    position: relative;
}

.blog-number {
    color: #ffdb00;
    font-size: 1rem;
    margin-right: 2%;
}

.blog-name {
    display: block;
    font-size: 1.8rem;
    font-weight: bold;
    margin: 0.5rem 0;
    color: white;
    text-decoration: none;
    transition: all 0.5s cubic-bezier(0.84, 0, 0.08, 0.99);
    font-family: var(--font-descriptive);
    position: relative;
    transform-origin: left;
    display: inline-block;
}

.blog-name::before {
    content: attr(data-text);
    position: absolute;
    left: 0;
    top: 0;
    width: 0;
    color: #ffdb00;
    overflow: hidden;
    white-space: nowrap;
    transition: width 0.5s cubic-bezier(0.84, 0, 0.08, 0.99);
    display: inline-block;
}

.blog-name:hover {
    transform: scale(1.1);
}

.blog-name:hover::before {
    width: 100%;
}
</style>