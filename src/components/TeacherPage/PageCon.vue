<template>
	<div class="pageCon" :class="this.showDrawer ? 'drawerOn' : 'drawerOff'">
		<div class="burgerNav">
			<div class="drawerBtn" @click="this.$emit('showDrawerNav')">
				<svg
					:class="showDrawer ? 'stay' : 'rotate'"
					xmlns="http://www.w3.org/2000/svg"
					xmlns:xlink="http://www.w3.org/1999/xlink"
					viewBox="0 0 448 512"
				>
					<path
						d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
						fill="currentColor"
					></path>
				</svg>
			</div>
		</div>
		<router-view></router-view>
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
	/* start pageCon design */

	.pageCon {
		width: 100vw;
		min-height: 100vh;
	}

	.upperCon {
		min-height: 40vh;
		background-color: #0073b0;
	}

	.burgerNav {
		padding: 10px;
		position: absolute;
	}

	.drawerBtn {
		width: 25px;
		height: 25px;
		cursor: pointer;
		color: white;
	}

	.drawerOn {
		margin-left: 0px;
		animation: margin;
		transition: 0.3s ease-in;
	}

	.drawerOff {
		margin-left: -300px;
		animation: margin;
		transition: 0.3s ease-in;
	}

	.rotate {
		transform: rotate(90deg);
		transition: 0.3s ease-in;
	}

	.stay {
		transform: rotate(0deg);
		transition: 0.3s ease-in;
	}

	.lowerCon {
		min-height: 60vh;
		background-color: #e5e5e5;
	}

	.pageInfo {
		padding: 50px 50px;
		padding-bottom: 20px;
		text-align: left;
		display: flex;
		flex-direction: column;
		align-items: space-between;
		justify-content: space-between;
		height: 270px;
	}
	/* end main content design */
</style>
