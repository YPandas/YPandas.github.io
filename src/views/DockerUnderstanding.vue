<template>
    <section>
        <BlogContent blogContent="./blogFiles/DockerUnderstanding.md" 
        blogTitle="My Understanding of Docker"
        :blogPic="dockerPic"/>
    </section>
</template>

<script>
import BlogContent from '../components/BlogContent.vue'
import dockerPic from '@/assets/dockerPic.png'

export default {
  name: 'DockerUnd',
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