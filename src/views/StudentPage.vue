<template>
	<div class="welcome">
		<div class="titleContainer">
			<h1 class="title1">Math</h1>
			<h1 class="title2">World</h1>
		</div>

		<div class="messageContainer">
			<h1 class="message" id="main_message">Hello, Student!</h1>
			<div class="content" id="sub_message">Welcome to Math World</div>
		</div>
		<div class="buttonsContainer">
			<router-link :to="'/test-introduction'">
				<n-button strong round color="#253759" size="large" id="takeTest"
					>Take Sample Test</n-button
				>
			</router-link>

			<router-link :to="'/'">
				<n-button strong secondary round type="info" size="large" id="logOutBtn"
					>Log Out</n-button
				>
			</router-link>
		</div>
	</div>
</template>

<script>
	export default {};
</script>

<style scoped>
	.welcome {
		min-height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}

	.titleContainer {
		padding: 10px;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 50px;
	}

	.title1,
	.title2 {
		margin: 0px;
		padding: 5px;
		font-size: 40px;
	}

	.message {
		margin: 0px;
		padding: 5px;
		font-size: 30px;
	}

	.title1,
	.message {
		color: #253759;
	}

	.title2 {
		color: #c0d9d9;
	}

	span {
		padding: 10px;
	}

	.buttonsContainer {
		padding: 20px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-direction: column;
		min-height: 250px;
	}

	.n-button {
		margin: 5px;
	}
</style>
