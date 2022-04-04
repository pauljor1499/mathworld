<template>
	<div class="welcome">
		<HeaderBar />
		<div class="mainContent">
			<SideBar :showDrawer="showDrawer" />
			<PageCon :showDrawer="showDrawer" @showDrawerNav="showDrawerNav()" />
		</div>
	</div>
</template>

<script>
	import HeaderBar from "@/components/TeacherPage/HeaderBar";
	import SideBar from "@/components/TeacherPage/SideBar";
	import PageCon from "@/components/TeacherPage/PageCon";
	export default {
		components: {
			HeaderBar,
			SideBar,
			PageCon,
		},
		data() {
			return {
				showDrawer: true,
			};
		},
		methods: {
			showDrawerNav() {
				this.showDrawer = !this.showDrawer;
			},
		},
	};
</script>

<style scoped>
	.welcome {
		max-height: 100vh;
	}

	.mainContent {
		min-height: 100vh;
		display: flex;
	}
</style>
