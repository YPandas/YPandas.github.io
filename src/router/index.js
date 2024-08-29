import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '@/views/Home.vue'; // Example import, adjust paths as needed
import K8sSetup from '@/views/KubernetesMirroringSetup.vue'

Vue.use(Router);

export default new Router({
  mode: 'history',
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
    }
  ]
});
