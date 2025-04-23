<template>
    <div>
      <div class="home-page">
        <HomeSection/>
      </div>
      <div class="about-page">
        <AboutSection/>
      </div>
      <div class="stack-page">
        <TechStackSection/>
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
import HomeSection from '@/components/HomeSection.vue'
import AboutSection from '@/components/AboutSection.vue'
import TechStackSection from '@/components/TechStackSection.vue'
import ProjectSection from '@/components/ProjectSection.vue';
import BlogSection from '@/components/BlogSection.vue';

export default {
  name: 'HomePage',
  components: {
    HomeSection,
    AboutSection,
    TechStackSection,
    ProjectSection,
    BlogSection,
  }
}
</script>

<style>
.background-pic {
  background-image: url('@/assets/background.jpg');
  width: 100%;
  height: 100vh; /* Full viewport height */
  background-size: cover;
  background-position: center;
  position: fixed;
  z-index: 0;
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
.about-page {
  z-index: 2;
  position: relative;
}
.stack-page {
  z-index: 2;
  position: relative;
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
