<template>
  <div class="header-wrapper">
    <div class="name">
      Yuqi Huang
    </div>
    <div class="navigation">
      <div @click="navigateTo('about')"> ABOUT </div>
      <div @click="navigateTo('projects')"> PROJECTS </div>
      <div @click="navigateTo('blogs')"> BLOGS </div>
      <div @click="navigateTo('photos')"> PHOTOS </div>
    </div>
  </div>
</template>

<script>
import './style/WebHeader.less';

export default {
  name: 'WebHeader',
  methods: {
    navigateTo(section) {
      if (section === 'about') {
        if (this.$route.path !== '/') {
          this.$router.push('/');
        } else {
          // Scroll to the top if already on the root URL
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      } else {
        // Avoid redundant push by checking the current URL
        if (this.$route.path !== '/') {
          this.$router.push({ path: '/', hash: `#${section}` }).then(() => {
          // Wait for the route change to complete, then scroll
            this.$nextTick(() => {
              const element = document.getElementById(section);
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            });
          });
        } else {
          // Scroll to the section if already on the root URL
          const element = document.getElementById(section);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    }
  }
}
</script>
