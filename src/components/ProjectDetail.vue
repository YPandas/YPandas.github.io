<template>
    <div class="project-detail">
        <div class="project-detail-content">
            <h1 class="project-title">{{ project.name }}</h1>
            <div class="project-description">{{ project.description }}</div>
            <div class="project-tech-stack">
                <span v-for="tech in project.techStack" :key="tech" class="tech-item">{{ tech }}</span>
            </div>
            <a :href="project.url" target="_blank" class="project-link" v-if="project.url">View Project</a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProjectDetail',
    props: {
        project: {
            type: Object,
            required: true
        }
    }
}
</script>

<style scoped>
.project-detail {
    padding: 2rem;
    color: white;
    min-height: 100vh;
}

.project-detail-content {
    max-width: 800px;
    margin: 0 auto;
}

.project-title {
    font-size: 4rem;
    margin-bottom: 2rem;
}

.project-description {
    font-size: 1.2rem;
    line-height: 1.6;
    margin-bottom: 2rem;
    color: #999;
}

.project-tech-stack {
    display: flex;
    gap: 1rem;
    margin-bottom: 2rem;
    flex-wrap: wrap;
}

.tech-item {
    padding: 0.5rem 1rem;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
    font-size: 0.9rem;
}

.project-link {
    display: inline-block;
    padding: 0.8rem 1.5rem;
    background: white;
    color: black;
    text-decoration: none;
    border-radius: 4px;
    font-weight: bold;
    transition: opacity 0.2s;
}

.project-link:hover {
    opacity: 0.8;
}
</style> 