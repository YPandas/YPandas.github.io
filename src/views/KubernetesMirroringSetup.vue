<template>
    <section>
        <BlogContent blogContent="./blogFiles/Kubernetes_Mirroring_Setup.md" 
        blogTitle="Kubernetes Mirroring Setup"
        :blogPic="k8sImage"/>
    </section>
</template>

<script>
import BlogContent from '../components/BlogContent.vue'
import KuberContent from '../components/blogFiles/Kubernetes_Mirroring_Setup.md'
import k8sImage from '@/assets/k8simage.png'

export default {
  name: 'K8sSetup',
  data() {
    return {
      KuberContent,
      k8sImage
    }
  },
  components: {
    BlogContent
  }
}
</script>