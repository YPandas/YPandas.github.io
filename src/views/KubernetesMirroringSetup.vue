<template>
    <section>
        <BlogContent blogContent="./blogFiles/Kubernetes_Mirroring_Setup.md" blogTitle="Kubernetes Mirroring Setup"/>
    </section>
</template>

<script>
import BlogContent from '../components/BlogContent.vue'
import KuberContent from '../components/blogFiles/Kubernetes_Mirroring_Setup.md'

export default {
  name: 'K8sSetup',
  data() {
    return {
      KuberContent
    }
  },
  components: {
    BlogContent
  }
}
</script>