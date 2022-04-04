<template>
	<div class="headerBar">
		<div class="titleContainer">
			<h1 class="title1">Math</h1>
			<h1 class="title2">World</h1>
		</div>
		<n-button strong color="#253759" size="medium" id="loginBtn"
			>Log out</n-button
		>
	</div>
</template>

<style scoped>
	.headerBar {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 5px 20px;
	}

	.titleContainer {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.title1,
	.title2 {
		margin: 0px;
		font-size: 24px;
	}

	.title1 {
		color: #253759;
	}

	.title2 {
		color: #c0d9d9;
	}
</style>
