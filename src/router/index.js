import { createRouter, createWebHistory } from "vue-router";
import EventList from "../views/EventList.vue";

const routes = [
  {
    path: "/",
    name: "Event List",
    component: EventList,
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/event/:id",
    name: "EventDetails",
    props: true,
    component: () =>
      import(
        /* webpackChunkName: "EventDetails" */ "../views/EventDetails.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
