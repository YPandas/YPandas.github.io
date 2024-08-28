<template>
    <div class="home-wrapper">
        <h2 class="greeting">
            Hello there.
        </h2>
        <div class="intro">
            I'm Yuqi. I like coding and taking pictures.
        </div>
        <div class="sub-intro">
            <p class="left-intro"> Here is my collection of... </p>
            <ul class="right-intro">
                <li @click="scrollToSection('projects')">Projects</li>
                <li @click="scrollToSection('blogs')">Blogs</li>
                <li @click="scrollToSection('photos')">Photos</li>
            </ul>
        </div>
    </div>
</template>

<script>

export default {
    name: 'HomeSection',
    props: {
        msg: String
    },
    methods: {
        scrollToSection(sectionId) {
            const section = document.getElementById(sectionId)
            if (section) {
                section.scrollIntoView({
                    behavior: 'smooth'
                })
            }
        }
    }
}
</script>

<style scoped>
.home-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  height: 100vh;
  width: 100%;
  text-align: center;
  font-family: "Ink Free";
  color: azure;
  .greeting {
    font-size: 90px;
    margin: 20px 0;
  }
  .intro {
    font-size: 30px;
  }
  .sub-intro {
    font-size: 22px;
    margin-top: 30px;
    display: flex;
    justify-content: center;
    .right-intro {
        list-style-type: none;
        li {
            cursor: pointer;
            text-decoration: underline;
        }
    }
  }
}
</style>