const Home = () => import("components/pages/Home.vue");
const Portfolio = () => import("components/pages/Portfolio.vue");
const Stocks = () => import("components/pages/Stocks.vue");

const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/portfolio", name: "portfolio", component: Portfolio },
  { path: "/stocks", name: "stocks", component: Stocks },
  { path: "*", redirect: { name: "home" } }
];

export default routes;
