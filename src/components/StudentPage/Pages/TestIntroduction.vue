<template>
	<div class="testIntroductionPage">
		<div class="titleContainer">
			<h1 class="title1">Math</h1>
			<h1 class="title2">World</h1>
		</div>

		<div class="testContainer">
			<div class="infoContainer">
				<h1 class="info" id="pageInfo">Algebra 1</h1>
				<div class="content" id="sub_message">
					You will be tested on the following Algebra 1 units: Solving
					Equations, Graphing Equations, Writing Equations, Systems of
					Equations, Inequalities, Functions, Exponents and Monomials,
					Polynomials, Factoring, and Quadratic Equations. These are the ten
					units that are assessed in Algebra 1.
				</div>
				<div class="content" id="sub_message">
					You will not be able to switch tabs while you are in the test; if you
					do, you will be penalized. If you try to close or divert the tab, the
					exam will be submitted whether or not you have completed it.
				</div>
				<n-button strong type="info" round size="small">
					Duration: 60 minutes
				</n-button>
				<n-button strong type="info" round size="small"> 20 Items </n-button>

				<br />
			</div>

			<div class="buttonsContainer">
				<n-grid x-gap="12" :cols="'1 s:1 m:2 l:2 xl:2'" responsive="screen">
					<n-gi>
						<div class="btnCon1">
							<router-link :to="'/studentwelcome'">
								<n-button
									strong
									secondary
									round
									type="info"
									size="large"
									id="bacToMainBtn"
									>Back to Main</n-button
								>
							</router-link>
						</div>
					</n-gi>
					<n-gi>
						<div class="btnCon2">
							<n-button
								strong
								round
								color="#253759"
								size="large"
								id="takeTestBtn"
								@click="takeTest"
								>Proceed and Take the Test</n-button
							>
						</div>
					</n-gi>
				</n-grid>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {};
		},
		methods: {
			takeTest() {
				const url = window.location.origin + "/test";
				window.open(
					url,
					"_blank",
					`toolbar=no,location=no,width=${screen.availWidth},height=${screen.availHeight},scrollbars=yes,status=yes`
				);
			},
		},
	};
</script>

<style scoped>
	.testIntroductionPage {
		min-height: 100vh;
	}

	.titleContainer {
		padding: 10px;
		padding: 60px 0px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.title1,
	.title2 {
		margin: 0px;
		padding: 5px;
		font-size: 40px;
	}

	.testContainer {
		border-radius: 10px;
		padding: 30px;
		min-height: 400px;
		max-width: 900px;

		background-color: white;
		border: 1px solid rgb(212, 212, 212);
		margin: 0px 50px;
		margin: auto;
	}

	:hover.testContainer {
		box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
	}

	.infoContainer {
		text-align: start;
		padding: 20px;
	}

	.info {
		margin: 0px;
		font-size: 50px;
	}

	.content {
		font-weight: 600;
		max-width: 600px;
		min-width: 300px;
		padding: 10px 0px;
		text-align: justify;
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

	.n-button {
		margin: 10px;
	}

	.buttonsContainer {
		display: flex;
		justify-content: space-between;
		padding: 20px;
	}

	.btnCon1 {
		display: flex;
		justify-content: flex-start;
	}

	.btnCon2 {
		display: flex;
		justify-content: flex-end;
	}
</style>
