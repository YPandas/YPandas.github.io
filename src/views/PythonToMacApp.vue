<template>
    <section>
        <BlogContent blogContent="./blogFiles/python_to_mac_app_guide.md" 
        blogTitle="How to Package a Python Application into a macOS App"
        :blogPic="dockerPic"/>
    </section>
</template>

<script>
import BlogContent from '../components/BlogContent.vue'
import dockerPic from '@/assets/Python-logo-notext.png'

export default {
  name: 'Py2App',
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