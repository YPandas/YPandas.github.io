<template>
    <div>
      <div class="background-pic"></div>
      <div class="home-page">
        <HomeSection/>
      </div>
      <div class="project-page">
        <ProjectSection/>
      </div>
      <div class="blog-page">
        <BlogSection/>
      </div>
      <div class="photo-page">
        <PhotoSection/>
      </div>
    </div>
</template>

<script>
import HomeSection from '@/components/HomeSection.vue'
import ProjectSection from '@/components/ProjectSection.vue';
import BlogSection from '@/components/BlogSection.vue';
import PhotoSection from '@/components/PhotoSection.vue';

export default {
  name: 'HomePage',
  components: {
    HomeSection,
    ProjectSection,
    BlogSection,
    PhotoSection
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
.photo-page {
    z-index: 2;
    height: 100vh;
    width: 100%;
    position: relative;
}
</style>
