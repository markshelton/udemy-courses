const Header = () => import("./components/Header.vue");
const Home = () => import("./components/Home.vue");
const User = () => import("./components/user/User.vue");
const UserStart = () => import("./components/user/UserStart.vue");
const UserDetail = () => import("./components/user/UserDetail.vue");
const UserEdit = () => import("./components/user/UserEdit.vue");

export const routes = [
  {
    path: "",
    name: "home",
    components: {
      default: Home,
      "header-top": Header
    }
  },
  {
    path: "/user",
    components: {
      default: User,
      "header-bottom": Header
    },
    children: [
      { path: "", component: UserStart },
      {
        path: ":id",
        component: UserDetail,
        beforeEnter: (to, from, next) => {
          console.log("inside route setup");
          next();
        }
      },
      { path: ":id/edit", component: UserEdit, name: "userEdit" }
    ]
  },
  { path: "*", redirect: { name: "home" } }
];
