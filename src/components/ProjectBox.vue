<template>
    <div class="box-wrapper">
        <img class="box-image" :src="backgroundImage" alt="nope">
        <div class="overlay">
            <div class="project-name">{{ projectName }}</div>
            <div class="project-text">{{ imageText }}</div>
            <a class="project-link" :href="projectURL" target="_blank"> view project </a>
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
  height: 45%;
  width: 19%;
  position: relative;
  background-color: #1f1f1f;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease-in-out; /* Smooth scale transition */

  .box-image {
    opacity: 0.1; /* Initial opacity */
    height: 100%;
    width: 100%;
    border-radius: 12px;
    transition: opacity 0.3s ease-in-out; /* Smooth opacity transition */
  }
}

.box-wrapper:hover {
  transform: scale(1.05); /* Slightly increase the size on hover */
}

.box-wrapper:hover .box-image {
  opacity: 0.8; /* Change opacity to 80% on hover */
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: opacity 0.3s ease-in-out;
  font-family: "Calibri";
  z-index: 2; /* Ensure it is above the dark overlay */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7); /* Subtle shadow for text */

  .project-name {
    height: 20%;
    font-size: 1.3vw;
    padding-top: 5%;
    text-align: center;
  }

  .project-text {
    padding: 2% 7% 0 7%;
    font-size: 1vw;
    height: 52%;
    text-align: center;
  }

  .project-link {
    color: white;
    padding-top: 2%;
    font-size: 1vw;
  }
}
</style>