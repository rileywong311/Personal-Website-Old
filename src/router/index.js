import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import ProjectsPage from '../views/ProjectsPage.vue'
import ExperiencePage from '../views/ExperiencePage.vue'
import ResumePage from '../views/ResumePage.vue'
import RendersPage from '../views/RendersPage.vue'
import PhotosPage from '../views/PhotosPage.vue'



const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
    alias: '/home'
  },
  {
    path: '/projects',
    name: 'projects',
    component: ProjectsPage,
  },
  {
    path: '/experience',
    name: 'experience',
    component: ExperiencePage,
  },
  {
    path: '/resume',
    name: 'resume',
    component: ResumePage,
  },
  {
    path: '/renders',
    name: 'renders',
    component: RendersPage,
  },
  {
    path: '/photos',
    name: 'photos',
    component: PhotosPage,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
