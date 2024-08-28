<template>
    <div class="box-wrapper">
        <img :src="backgroundImage" alt="nope">
        <div class="overlay">
            <div class="project-name">{{ projectName }}</div>
            <div class="project-text">{{ imageText }}</div>
            <a class="project-link" :href="projectURL"> view project </a>
        </div>
    </div>
</template>


<script>

export default {
    name: 'ProjectBox',
    props: {
        backgroundImage: String,
        projectName: String,
        imageText: String,
        projectURL: String
    }
}
</script>

<style scoped>
.box-wrapper {
    height: 42%;
    width: 24%;
    position: relative;
    img {
        height: 100%;
        width: 100%;
    }
}
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 93%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7); /* Semi-transparent background */
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: opacity 0.3s ease-in-out;
  opacity: 0; /* Start hidden */
  font-family: "Consolas";
  .project-name {
    font-size: 20px;
    padding-top: 5%;
    text-align: center;
  }
  .project-text {
    padding: 2% 7% 0 7%;
    font-size: 14px;
    text-align: center;
  }
  .project-link {
    color: white;
    padding-top: 2%;
  }
}
.box-wrapper:hover .overlay {
    opacity: 1; /* Fade in the overlay on hover */
}
</style>