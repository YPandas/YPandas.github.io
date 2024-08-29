<template>
    <section class="content-wrapper">
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
    blogContent : String
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
.content-wrapper {
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    z-index: 2;
    position: relative;
    font-family: "Consolas";
    color: white;
}
.blog-title {
    font-size: 30px;
    font-weight: 600;
    margin-top: 7%
}
.blog-content {
    width: 80%;
    h2 {
        text-decoration: underline;
    }
    pre {
        border: solid 1px white;
        border-radius: 10px;
        padding: 1% 2%;
    }
}
</style>