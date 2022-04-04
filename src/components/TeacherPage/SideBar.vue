<template>
	<div class="drawer" :class="this.showDrawer ? 'appear' : 'hide'">
		<div class="upper">
			<div class="imageCon">
				<img src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
			</div>

			<div class="con">
				<div class="teacherName">ARNOLD NINAL</div>
				<div class="role">Teacher</div>
			</div>
			<div class="con">
				<div class="school">University of College</div>
				<div class="teacherID">ID: 123123123</div>
			</div>

			<br />
			<n-button text color="white"> EDIT DETAILS</n-button>
		</div>
		<div class="navs">
			<router-link to="/teacher/classes" class="nav"> All Classes </router-link>
			<router-link to="/teacher/classperiods" exact class="nav">
				Class Periods
			</router-link>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			showDrawer: Boolean,
		},
		data() {
			return {};
		},
	};
</script>

<style scoped>
	/* start Nav - Drawer */
	a {
		text-decoration: none;
		color: white;
	}

	.drawer {
		min-width: 300px;
		background-color: #253759;
		min-height: 100vh;
	}

	.appear {
		transform: translateX(0px);
		transition: 0.3s ease-in;
	}

	.hide {
		transform: translateX(-300px);
		transition: 0.3s ease-in;
	}

	.upper {
		color: white;
		border-bottom: 1px solid grey;
		min-height: 40vh;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
	.imageCon img {
		width: 130px;
		border-radius: 100%;
		margin: 5px;
	}

	.upper .con {
		padding: 5px;
	}

	.teacherName {
		font-weight: bold;
		font-size: 20px;
	}

	.navs {
		color: white;
		padding: 30px 20px;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}

	.nav {
		font-size: 18px;
		margin: 2px;
		padding: 15px;
		cursor: pointer;
		width: 250px;
	}

	.router-link-exact-active {
		background-color: #0073b0;
	}

	.activeNav {
		background-color: #0073b0;
	}

	.nav:hover {
		background-color: #0073b0;
		transition: 0.3s ease;
	}
</style>
