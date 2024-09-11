<template>
    <section>
        <BlogContent blogContent="./blogFiles/docker_image_guide.md" 
        blogTitle="How to Build Docker Image"
        :blogPic="dockerPic"/>
    </section>
</template>

<script>
import BlogContent from '../components/BlogContent.vue'
import dockerPic from '@/assets/dockerPic.png'

export default {
  name: 'DockerGuide',
  data() {
    return {
      dockerPic
    }
  },
  components: {
    BlogContent
  }
}
</script>