<template>
    <section id="projects">
        <div class="project-wrapper">
            <h1 class="section-title">* SELECTED PROJECTS</h1>
            <div class="project-list">
                <div class="project-item" data-preview-image="assets/project/project1.jpg">
                    <span class="project-number">_01.</span>
                    <a href="https://seemuseums.art/" target="_blank" rel="noopener noreferrer" class="project-name" data-text="SeeMuseums">SeeMuseums</a>
                    <div class="tech-stack">
                        <span>React.js</span>
                        <span>Animation</span>
                        <span>Large Language Model</span>
                    </div>
                    <div class="project-preview"></div>
                </div>

                <div class="project-item" data-preview-image="assets/pyHFO.png">
                    <span class="project-number">_02.</span>
                    <a href="https://github.com/roychowdhuryresearch/pyHFO" target="_blank" rel="noopener noreferrer" class="project-name" data-text="PyHFO">PyHFO</a>
                    <div class="tech-stack">
                        <span>Python</span>
                        <span>PyQt</span>
                        <span>Matlab</span>
                    </div>
                    <div class="project-preview"></div>
                </div>

                <div class="project-item" data-preview-image="assets/project/project3.jpg">
                    <span class="project-number">_03.</span>
                    <a href="https://www.sangfor.com/" target="_blank" rel="noopener noreferrer" class="project-name" data-text="Internal Task Management Platform">Internal Task Management Platform</a>
                    <div class="tech-stack">
                        <span>Vue.js</span>
                        <span>Redis</span>
                        <span>PostgreSQL</span>
                    </div>
                    <div class="project-preview"></div>
                </div>

                <div class="project-item" data-preview-image="assets/project/project4.jpg">
                    <span class="project-number">_04.</span>
                    <a href="https://github.com/YPandas/Yolo_Head_Detection" target="_blank" rel="noopener noreferrer" class="project-name" data-text="AutoTagger">AutoTagger</a>
                    <div class="tech-stack">
                        <span>Python</span>
                        <span>YOLO</span>
                        <span>OpenCV</span>
                    </div>
                    <div class="project-preview"></div>
                </div>

                <div class="project-item" data-preview-image="assets/project/project5.jpg">
                    <span class="project-number">_05.</span>
                    <a href="https://whitematterwiki.org/" target="_blank" rel="noopener noreferrer" class="project-name" data-text="WhiteMatterWiki">WhiteMatterWiki</a>
                    <div class="tech-stack">
                        <span>JavaFX</span>
                        <span>R</span>
                        <span>MongoDB</span>
                    </div>
                    <div class="project-preview"></div>
                </div>

                <div class="project-item" data-preview-image="assets/project/project6.jpg">
                    <span class="project-number">_06.</span>
                    <a href="https://parcel-pointers.netlify.app/" target="_blank" rel="noopener noreferrer" class="project-name" data-text="Parcel Pointer">Parcel Pointer</a>
                    <div class="tech-stack">
                        <span>React</span>
                        <span>HTML</span>
                        <span>CSS</span>
                    </div>
                    <div class="project-preview"></div>
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
    name: 'ProjectSection',
    mounted() {
        const projectItems = this.$el.querySelectorAll('.project-item')
        
        projectItems.forEach((item, index) => {
            gsap.set(item, {
                opacity: 0,
                y: 70
            })

            const scrollTl = gsap.timeline({
                scrollTrigger: {
                    trigger: item,
                    start: 'top 97%',
                    end: 'top 70%',
                    scrub: 1.5,
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

            // Add hover animation for project preview
            const preview = item.querySelector('.project-preview')
            const projectName = item.querySelector('.project-name')
            
            let hoverTl = gsap.timeline({ paused: true })
            
            hoverTl.to(preview, {
                width: '80vh',
                height: '50vh',
                duration: 0.5,
                ease: 'power2.out'
            })
            
            projectName.addEventListener('mouseenter', () => {
                const imagePath = item.dataset.previewImage
                const img = new Image()
                img.src = require('@/' + imagePath)
                
                img.onload = () => {
                    const aspectRatio = img.width / img.height
                    const maxWidth = window.innerWidth * 0.4 // 40% of viewport width
                    const maxHeight = window.innerHeight * 0.5 // 50% of viewport height
                    
                    let width = maxWidth
                    let height = width / aspectRatio
                    
                    if (height > maxHeight) {
                        height = maxHeight
                        width = height * aspectRatio
                    }
                    
                    preview.style.backgroundImage = `url(${require('@/' + imagePath)})`
                    hoverTl.to(preview, {
                        width: `${width}px`,
                        height: `${height}px`,
                        duration: 0.5,
                        ease: 'power2.out'
                    }).play()
                }
            })

            projectName.addEventListener('mouseleave', () => {
                hoverTl.reverse()
            })
        })
    },
    beforeUnmount() {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
}
</script>


<style scoped>
.project-wrapper {
    padding: 0 15%;
    width: calc(100% - 30%);
}

.section-title {
    font-size: 1.5rem;
    margin-bottom: 2rem;
    color: white;
    font-family: var(--font-descriptive);
}

.project-list {
    display: flex;
    flex-direction: column;
}

.project-item {
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    padding-bottom: 1rem;
    position: relative;
}

.project-number {
    color: #ffdb00;
    margin-right: 2%;
    font-size: 1rem;
    font-family: var(--font-descriptive);
}

.project-name {
    display: block;
    font-size: 2.4rem;
    margin: 0.5rem 0;
    color: white;
    text-decoration: none;
    transition: all 0.5s cubic-bezier(0.84, 0, 0.08, 0.99);
    font-family: var(--font-title);
    position: relative;
    transform-origin: left;
    display: inline-block;
}

.project-name::before {
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

.project-name:hover {
    transform: scale(1.1);
}

.project-name:hover::before {
    width: 100%;
}

.tech-stack {
    display: flex;
    gap: 1rem;
    font-family: var(--font-descriptive);
}

.tech-stack span {
    color: #ffdb00;
    font-size: 0.9rem;
}

.project-preview {
    position: absolute;
    top: 50%;
    left: 60%;
    transform: translateY(-50%);
    width: 0;
    height: 0;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    overflow: visible;
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
    border-radius: 4px;
    z-index: 10;
}

.project-item:hover .project-preview {
    opacity: 1;
}
</style>