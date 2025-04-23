<template>
    <section class="content-wrapper">
        <div class="back-container" @click="goBack">
            <i class="fas fa-arrow-left"></i>
            <span>Back to main page</span>
        </div>
        <div class="blog-title">
        {{ blogTitle }}
        </div>
        <div class="blog-content">
            <div v-html="markdownContent"></div>
        </div>
    </section>
</template>

<script>
import { marked } from 'marked';

export default {
  name: 'BlogContent',
  components: {
  },
  methods: {
    goBack() {
      this.$router.push('/');
    }
  },
  data() {
    return {
        markdownContent: ''
    }
  },
  props: {
    blogTitle: String,
    blogContent: String,
    blogPic: {
      type: String,
      required: false
    }
  },
  created() {
    try {
      // Load the markdown file as a string
      const content = require(`${this.blogContent}`).default;
      // Parse the markdown content to HTML
      this.markdownContent = marked(content);
    } catch (error) {
      console.error('Error loading markdown content:', error);
    }
  },
  mounted() {
    // Scroll to top when component is mounted
    window.scrollTo(0, 0);
    console.log('mounted')
  }
}
</script>

<style>
.blog-background {
  background-color: #092332;
  background-size: cover;
  background-position: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
}

.blog-pic {
  position: absolute;
  top: 10%;
  opacity: 15%;
}

.content-wrapper {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    z-index: 2;
    position: relative;
    font-family: "Cambria";
    color: rgb(255, 255, 255);
    padding: 0 20px;
    overflow-y: auto;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;
}

.blog-title {
    font-size: 2.5rem;
    font-weight: 600;
    margin-top: 5%;
    position: relative;
    text-align: center;
    color: #ffffff;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.blog-content {
  position: relative;
  width: 80%;
  max-width: 900px;
  margin-top: 2%;
  margin-bottom: 5%;
  font-size: 1.1rem;
  line-height: 1.6;
  color: #e0e0e0;
  overflow-y: auto;
  overflow-x: hidden;
  
  h1 {
    font-size: 2rem;
    color: #ffffff;
    margin: 2rem 0 1rem;
    border-bottom: 2px solid rgba(255, 255, 255, 0.1);
    padding-bottom: 0.5rem;
  }
  
  h2 {
    color: #ffffff;
    font-size: 1.5rem;
    margin: 1.5rem 0 1rem;
  }
  
  h3 {
    font-size: 1.3rem;
    color: #ffffff;
    margin: 1.2rem 0 0.8rem;
  }
  
  p {
    margin: 1rem 0;
    text-align: justify;
  }
  
  pre {
    border-radius: 8px;
    padding: 1.2rem;
    background-color: #1a2b3c;
    font-size: 0.95rem;
    margin: 1.5rem 0;
    overflow-x: auto;
    
    code {
      font-family: 'Fira Code', 'Lucida Console', monospace;
      color: #e0e0e0;
    }
  }
  
  div {
    padding: 0 10%;
  }
  
  a {
    color: #fff703;
    text-decoration: none;
    transition: color 0.3s ease;
    
    &:hover {
      color: #fff703;
      text-decoration: underline;
    }
  }
  
  blockquote {
    border-left: 4px solid #fff703;
    margin: 1.5rem 0;
    padding: 0.5rem 1rem;
    background-color: rgba(255, 107, 107, 0.1);
    font-style: italic;
  }
  
  ul, ol {
    margin: 1rem 0;
    padding-left: 1.5rem;
    
    li {
      margin: 0.5rem 0;
    }
  }
}

.back-container {
  position: absolute;
  top: 5vh;
  left: 5vw;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  color: #ffffff;
  transition: all 0.3s ease;
  z-index: 3;
  font-size: 1.2rem;
  padding: 8px 12px;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.back-container:hover {
  color: #fff703;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background: rgba(255, 255, 255, 0.1);
}

.back-container i {
  transition: transform 0.3s ease;
}

.back-container:hover i {
  transform: translateX(-3px);
}

.back-container span {
  font-family: "Cambria", serif;
  transition: all 0.3s ease;
}
</style>