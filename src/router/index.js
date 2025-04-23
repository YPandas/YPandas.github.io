import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '@/views/Home.vue'; // Example import, adjust paths as needed
import K8sSetup from '@/views/KubernetesMirroringSetup.vue'
import DockerUnd from '@/views/DockerUnderstanding.vue'
import DockerGuide from '@/views/DockerImageGuide.vue'
import Py2App from '@/views/PythonToMacApp.vue'
import MernDeploy from '@/views/MernDeploy.vue';
import ProjectDetail from '../components/ProjectDetail.vue';
import { projects } from '../store/projects';
import { scrollStore } from '../store/scroll';

Vue.use(Router);

const router = new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage,
      beforeLeave(to, from, next) {
        scrollStore.saveHomeScrollPosition();
        next();
      }
    },
    {
      path: '/blog/kubernetes-mirroring-setup',
      name: 'Kubernetes-Mirroring-Setup',
      component: K8sSetup
    },
    {
      path: '/blog/mern-update-guide',
      name: 'MERNUpdateGuide',
      component: () => import('@/views/MERNUpdateGuide.vue') // Lazy-loaded
    },
    {
      path: '/blog/docker-intro',
      name: 'Docker-Intro',
      component: DockerUnd
    },
    {
      path: '/blog/docker-image-guide',
      name: 'Docker-Image-Guide',
      component: DockerGuide
    },
    {
      path: '/blog/py2app-guide',
      name: 'Py2App-Guide',
      component: Py2App
    },
    {
      path: '/blog/mern-deploy',
      name: 'MERN-Deploy',
      component: MernDeploy
    },
    {
      path: '/project/:id',
      name: 'ProjectDetail',
      component: ProjectDetail,
      props: route => ({
        project: projects[route.params.id]
      }),
      beforeEnter: (to, from, next) => {
        if (projects[to.params.id]) {
          next();
        } else {
          next('/');
        }
      }
    }
  ],
  scrollBehavior(to, from) {
    
    if (from.path.startsWith('/blog/') && to.path === '/') {
      return { x: 0, y: scrollStore.homeScrollPosition };
    } else {
      return { x: 0, y: 0 };
    }
  }
});

// Add global navigation guard to debug and save scroll position
router.beforeEach((to, from, next) => {
  
  // Save scroll position when leaving home page for a blog
  if (from.path === '/' && to.path.startsWith('/blog/')) {
    const currentScroll = window.scrollY;
    scrollStore.homeScrollPosition = currentScroll;
  }
  
  next();
});

export default router;
