<template>
  <div class="app-container">
    <div class="app-background"></div>
    <div class="web-header">
      <WebHeader/>
    </div>
    <div class="home-page">
      <HomeSection/>
    </div>
    <div class="project-page">
      <ProjectSection/>
    </div>
    <div class="blog-page">
      <BlogSection/>
    </div>
  </div>
</template>

<script>
import WebHeader from './components/WebHeader.vue'
import HomeSection from './components/HomeSection.vue'
import ProjectSection from './components/ProjectSection.vue';
import BlogSection from './components/BlogSection.vue';


export default {
  name: 'App',
  components: {
    WebHeader,
    HomeSection,
    ProjectSection,
    BlogSection
  }
}
</script>

<style>
.app-container {
  position: relative;
}
.app-background {
  background-image: url('@/assets/background.jpg');
  width: 100%;
  height: 100vh; /* Full viewport height */
  background-size: cover;
  background-position: center;
  position: fixed;
  z-index: 0;
}
.web-header {
  position: fixed;
  z-index: 3;
  width: 100%;
}
.home-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  height: 100vh;
  width: 100%;
  z-index: 1;
}
.project-page {
  z-index: 2;
  height: 100vh;
  width: 100%;
  position: relative;
}
.blog-page {
  z-index: 2;
  height: 100vh;
  width: 100%;
  position: relative;
}
</style>
