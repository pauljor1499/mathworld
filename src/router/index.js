import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "../views/Landing.vue";
import LogInPage from "../views/LogIn.vue";
import RegisterPage from "../views/Register.vue";
import WelcomePage from "../views/Welcome.vue";
import Dashboard from "../views/Dashboard.vue";
const routes = [
	{
		path: "/",
		name: "LandingPage",
		component: LandingPage,
	},
	{
		path: "/login",
		name: "LogInPage",
		component: LogInPage,
	},
	{
		path: "/register",
		name: "RegisterPage",
		component: RegisterPage,
	},
	{
		path: "/welcome",
		name: "WelcomePage",
		component: WelcomePage,
	},
	{
		path: "/dashboard",
		name: "Dashboard",
		component: Dashboard,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
