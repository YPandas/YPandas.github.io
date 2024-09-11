<template>
    <section class="content-wrapper">
        <div class="blog-background"></div>
        <img class="blog-pic" v-if="blogPic" :src="blogPic">
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
  }
}
</script>

<style>
.blog-background {
  background-color: #092332;
  width: 100%;
  height: 100vh; /* Full viewport height */
  background-size: cover;
  background-position: center;
  position: fixed;
  z-index: 0;
}
.blog-pic {
  position: fixed;
  margin-top: 10%;
  opacity: 15%;
}
.content-wrapper {
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    z-index: 2;
    position: relative;
    font-family: "Cambria";
    color: rgb(255, 255, 255);
}
.blog-title {
    font-size: 35px;
    font-weight: 600;
    margin-top: 7%;
    position: relative;
}
.blog-content {
  position: relative;
  width: 80%;
  margin-top: 2%;
  font-size: 1.2rem;
  h1 {
    font-size: 25px;
  }
  h2 {
    color: white;
    font-size: 20px;
  }
  h3 {
    font-size: 18px;
  }
  pre {
    border-radius: 7px;
    padding: 1% 2%;
    background-color: #6a90bb;
    font-size: 16px;
    code {
      font-family: 'Lucida Console';
    }
  }
  div {
    padding: 0 15%;
  }
  a {
    color: rgb(255, 105, 105);
  }
}
</style>