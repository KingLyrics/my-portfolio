import { createRouter, createWebHistory } from "vue-router";
import HomeVue from "@/views/Home.vue";
import ResumeVue from "@/views/Resume.vue";
import ProjectsVue from "@/views/Projects.vue";
import ContactVue from "@/views/Contact.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeVue,
    },
    {
      path: "/resume",
      name: "resume",
      component: ResumeVue,
    },
    {
      path: "/projects",
      name: "projects",
      component: ProjectsVue,
    },
    {
      path: "/contact",
      name: "contact",
      component: ContactVue,
    },
  ],
});

export default router;
