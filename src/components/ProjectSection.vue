<template>
    <section id="projects">
        <div class="project-wrapper">
            <div class="project-title">
                Project Collections
            </div>
            <div class="project-list">
                <ProjectBox 
                :backgroundImage="wmWikiImage"
                projectName="WhiteMatterWiki"
                :imageText="wmWikiText"
                :projectURL="wmWikiURL"/>
                <ProjectBox
                :backgroundImage="pointerImage"
                projectName="Parcel Pointer"
                :imageText="pointerText"
                :projectURL="pointerURL"/>
                <ProjectBox
                :backgroundImage="biasImage"
                projectName="Bias By Us"
                :imageText="biasText"
                :projectURL="biasURL"/>
                <ProjectBox
                :backgroundImage="postImage"
                projectName="Post Forum"
                :imageText="postText"
                :projectURL="postURL"/>
                <ProjectBox
                :backgroundImage="sfImage"
                projectName="Test Case Management Platform"
                :imageText="sfText"
                :projectURL="sfURL"/>
                <ProjectBox
                :backgroundImage="hfoImage"
                projectName="PyHFO"
                :imageText="hfoText"
                :projectURL="hfoURL"/>
            </div>
        </div>
    </section>
</template>


<script>
import './style/ProjectSection.css';
import ProjectBox from './ProjectBox.vue';
import wmWikiImage from '../assets/wmWiki2.png';
import pointerImage from '../assets/parcelPointer.png';
import biasImage from '../assets/bias.png';
import postImage from '../assets/postForum.png';
import hfoImage from '../assets/pyHFO.png';
import sfImage from '../assets/sangfor.png';




export default {
    name: 'ProjectSection',
    components: {
        ProjectBox
    },
    data() {
        return {
            wmWikiImage,
            wmWikiText: "A web app that visualize over 60,000 documents. Enables users to search and filter the lab's database with interactive graphs that visualize intricate relationships among ligands, receptors, and cells.",
            wmWikiURL: "https://github.com/HandsomeYun/BioWeb",
            pointerImage,
            pointerText: "A website dedicated to teaching new CS learners about pointers with lessons and exercise. Of course, there's also our little friend PiPi",
            pointerURL: "https://parcel-pointers.netlify.app",
            biasImage,
            biasText: "An interactive explanation of bias in machine learning algorithms, and how they affect multiple aspects of every-day life. Demonstrated with interactive graphs and various case studys.",
            biasURL: "https://bias-by-us.netlify.app/",
            postImage,
            postText: "An exclusive online marketplace for UCLA. Engineered features for product listings, user interactions, and tracking popularity using JavaScript and React.js.",
            postURL: "https://github.com/lilyorlilypad/postForum_CS35L",
            hfoImage,
            hfoText: "A multi-window desktop application providing an integrated and user-friendly platform that includes time-efficient HFO detection algorithms  and deep learning models",
            hfoURL: "https://github.com/roychowdhuryresearch/pyHFO",
            sfImage,
            sfText: "Collaborated with the UX/UI team to develop reactive pages for the company's test case management platform. Contributed to the redesign ofthe company’s internal management system.",
            sfURL: "https://www.sangfor.com/"
        };
    }
}
</script>