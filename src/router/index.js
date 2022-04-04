import { createRouter, createWebHistory } from "vue-router";

// Landing Page Pages
import LandingPage from "../views/Landing.vue";
import LogInPage from "../components/LandingPage/Pages/LogIn.vue";
import RegisterPage from "../components/LandingPage/Pages/Register.vue";

// Teacher Pages
import TeacherPage from "../views/TeacherPage.vue";
import AllClasses from "../components/TeacherPage/Pages/AllClasses.vue";
import ClassPeriods from "../components/TeacherPage/Pages/ClassPeriods.vue";

// Student Pages
import StudentPage from "../views/StudentPage.vue";
import TestIntroductionPage from "../components/StudentPage/Pages/TestIntroduction.vue";
import TestPage from "../components/StudentPage/Pages/Test.vue";

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
		path: "/teacher",
		name: "TeacherPage",
		redirect: "/teacher/classes",
		component: TeacherPage,
		children: [
			{
				path: "classes",
				name: "AllClasses",
				component: AllClasses,
			},
			{
				path: "classperiods",
				name: "ClassPeriods",
				component: ClassPeriods,
			},
		],
	},
	{
		path: "/student",
		name: "StudentPage",
		component: StudentPage,
	},
	{
		path: "/test-introduction",
		name: "TestIntroductionPage",
		component: TestIntroductionPage,
	},
	{
		path: "/test",
		name: "TestPage",
		component: TestPage,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
