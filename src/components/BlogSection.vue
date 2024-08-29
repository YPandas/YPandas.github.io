<template>
    <section id="blogs">
        <div class="blog-title">
            Blog Collections
        </div>
        <div class="blog-content">
            <ul>
                <li>How to update MERN application hosted with Nginx and PM2</li>
                <li>
                    <button @click="navigateTo('Kubernetes-Mirroring-Setup')">
                        Kubernetes Mirroring Setup
                    </button>
                </li>
                <li>My understanding of docker</li>
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
            console.log("im here", this.$route.name)
            if (this.$route.name !== routeName) {
                console.log('uummm')
                this.$router.push({ name: routeName });
            }
        }
    }
}

</script>