<template>
    <section id="blogs">
        <div class="blog-title">
            Blog Collections
        </div>
        <div class="blog-list">
            <ul>
                <li @click="navigateTo('MERN-Deploy')">
                    How to Deploy MERN APP with Nginx and PM2
                </li>
                <li @click="navigateTo('Docker-Image-Guide')">
                    How to update MERN application hosted with Nginx and PM2
                </li>
                <li @click="navigateTo('Kubernetes-Mirroring-Setup')">
                    Kubernetes Mirroring Setup
                </li>
                <li @click="navigateTo('Py2App-Guide')">
                    How to Package a Python Application into a macOS App
                </li>
                <li @click="navigateTo('Docker-Intro')">
                    My understanding of docker
                </li>
                <li>
                    To Be Continued...
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
import './style/BlogSection.css';

export default {
    name: 'BlogSection',
    methods: {
        navigateTo(routeName) {
            if (this.$route.name !== routeName) {
                this.$router.push({ name: routeName }).then(() => {
                    // Scroll to the top of the page after the route is changed
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                });
            }
        }
    }
}

</script>