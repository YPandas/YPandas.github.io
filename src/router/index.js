import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '@/views/Home.vue'; // Example import, adjust paths as needed
import K8sSetup from '@/views/KubernetesMirroringSetup.vue'
import DockerUnd from '@/views/DockerUnderstanding.vue'
import DockerGuide from '@/views/DockerImageGuide.vue'
import Py2App from '@/views/PythonToMacApp.vue'
import MernDeploy from '@/views/MernDeploy.vue';

Vue.use(Router);

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage
    },
    {
      path: '/Kubernetes-Mirroring-Setup',
      name: 'Kubernetes-Mirroring-Setup',
      component: K8sSetup
    },
    {
      path: '/MERN-Update-Guide',
      name: 'MERNUpdateGuide',
      component: () => import('@/views/MERNUpdateGuide.vue') // Lazy-loaded
    },
    {
      path: '/Docker-Intro',
      name: 'Docker-Intro',
      component: DockerUnd
    },
    {
      path: '/Docker-Image-Guide',
      name: 'Docker-Image-Guide',
      component: DockerGuide
    },
    {
      path: '/Py2App-Guide',
      name: 'Py2App-Guide',
      component: Py2App
    },
    {
      path: '/MERN-Deploy',
      name: 'MERN-Deploy',
      component: MernDeploy
    }
  ]
});
