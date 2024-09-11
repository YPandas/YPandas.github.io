<template>
    <section>
        <BlogContent blogContent="./blogFiles/deploy_mern.md" 
        blogTitle="How to Deploy MERN with Nginx and PM2"
        :blogPic="mernPic"/>
    </section>
</template>

<script>
import BlogContent from '../components/BlogContent.vue'
import mernPic from '@/assets/MERN.jpeg'

export default {
  name: 'MERNdeploy',
  data() {
    return {
        mernPic
    }
  },
  components: {
    BlogContent
  }
}
</script>