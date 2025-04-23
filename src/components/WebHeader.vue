<template>
  <div class="header-wrapper">
    <div class="name">
      <span class="name-text">YH</span>
    </div>
    <div class="navigation">
      <div @click="navigateTo('about')" class="nav-item"> 
        <span class="nav-dot"></span>
        <span class="nav-text">ABOUT</span>
      </div>
      <div @click="navigateTo('projects')" class="nav-item">
        <span class="nav-dot"></span>
        <span class="nav-text">PROJECTS</span>
      </div>
      <div @click="navigateTo('blogs')" class="nav-item">
        <span class="nav-dot"></span>
        <span class="nav-text">BLOGS</span>
      </div>
      <div @click="navigateTo('photos')" class="nav-item">
        <span class="nav-dot"></span>
        <span class="nav-text">PHOTOS</span>
      </div>
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

<style scoped>
.header-wrapper {
  position: fixed;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 20px;
  z-index: 1000;
}

.name {
  margin-bottom: 2rem;
  padding: 10px;
  background-color: #fff20d;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.name-text {
  color: #1a1a1a;
  font-weight: bold;
  font-size: 1.2rem;
  font-family: 'Anton', sans-serif;
}

.navigation {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  padding: 5px;
  transition: all 0.3s ease;
}

.nav-dot {
  width: 8px;
  height: 8px;
  background-color: #ffffff;
  border-radius: 50%;
  transition: all 0.3s ease;
}

.nav-text {
  color: #ffffff;
  font-size: 0.9rem;
  font-weight: 500;
  opacity: 0;
  transform: translateX(10px);
  transition: all 0.3s ease;
}

.nav-item:hover .nav-dot {
  background-color: #fff20d;
  transform: scale(1.5);
}

.nav-item:hover .nav-text {
  opacity: 1;
  transform: translateX(0);
}

@media (max-width: 768px) {
  .header-wrapper {
    right: 10px;
  }
  
  .nav-text {
    font-size: 0.8rem;
  }
}
</style>
