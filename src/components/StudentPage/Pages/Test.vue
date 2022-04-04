<template>
	<div class="testPage">
		{{ listenfortabs }}
		<div class="pageHeader">
			<n-modal v-model:show="showWarning" :mask-closable="false">
				<n-card style="width: 400px; padding: 25px" class="cardWarning">
					<div class="warningTitle"><h2>Warning</h2></div>
					<p class="warningMessage">
						You are not allowed to leave the tab while you are taking the test.
						This activity is recorded and will be evaluated by the teacher
					</p>
					<br />

					<p>
						times you left the tab: <b>{{ this.leftTheTab }}</b>
					</p>
					<br />
					<n-button
						strong
						secondary
						type="warning"
						size="medium"
						@click="showWarning = false"
						id="closeWarningBtn"
						>Close</n-button
					>
				</n-card>
			</n-modal>

			{{ timeListener }}

			<n-modal v-model:show="timeIsUp" :mask-closable="false">
				<n-card style="width: 400px; padding: 25px" class="cardWarning">
					<div><h1>Time is up!</h1></div>
					<br />
					<p class="warningMessage">
						You are not allowed to answer the test anymore. Please submit your
						answers.
					</p>
					<br />

					<br />
					<n-button
						strong
						primary
						color="#253759"
						size="medium"
						@click="closeWindow"
						id="submitBtn"
						>Submit and Finish</n-button
					>
				</n-card>
			</n-modal>
			<n-modal v-model:show="confirm">
				<n-card style="width: 400px; padding: 25px" class="cardWarning">
					<div><h1>Finish?</h1></div>
					<br />
					<p class="warningMessage">
						Please review all your answers because once you submit, this can't
						be undone.
					</p>
					<br />

					<br />
					<n-button
						strong
						primary
						color="#253759"
						size="medium"
						@click="closeWindow"
						>Confirm Submission</n-button
					>
				</n-card>
			</n-modal>
			<div class="titleContainer">
				<h1 class="title1">Math</h1>
				<h1 class="title2">World</h1>
			</div>

			<div class="penalty"></div>
		</div>
		<div class="header">
			<div class="studentName">Student Name: <b>Mark Rey Ronolo</b></div>
			<div class="testName">
				<b>{{ this.test.test_name }}</b>
			</div>
			{{ timeRemaining }}
			<div class="timer">
				Time Remaining:
				<b
					>{{ durationInMinutes }} : <span v-if="durationInSeconds < 10">0</span
					>{{ durationInSeconds }}</b
				>
			</div>
		</div>
		<div class="container">
			<div class="main">
				<div v-for="(question, index) in test.questions" :key="index">
					<div class="questionContainer" v-if="index + 1 == counter">
						<br />
						<div class="questionCounter">
							Question <b>{{ counter }}</b> of {{ this.test.total_items }}
						</div>
						<div class="innerCon">
							<div class="flagCon">
								<div class="points">2 points</div>
								<n-button
									size="tiny"
									class="flag"
									@click="question.is_flagged = !question.is_flagged"
									:type="question.is_flagged ? 'error' : ''"
									id="flag"
								>
									<template #icon>
										<n-icon
											><svg
												xmlns="http://www.w3.org/2000/svg"
												xmlns:xlink="http://www.w3.org/1999/xlink"
												viewBox="0 0 512 512"
											>
												<path
													d="M80 480a16 16 0 0 1-16-16V68.13a24 24 0 0 1 11.9-20.72C88 40.38 112.38 32 160 32c37.21 0 78.83 14.71 115.55 27.68C305.12 70.13 333.05 80 352 80a183.84 183.84 0 0 0 71-14.5a18 18 0 0 1 25 16.58v219.36a20 20 0 0 1-12 18.31c-8.71 3.81-40.51 16.25-84 16.25c-24.14 0-54.38-7.14-86.39-14.71C229.63 312.79 192.43 304 160 304c-36.87 0-55.74 5.58-64 9.11V464a16 16 0 0 1-16 16z"
													fill="currentColor"
												></path></svg
										></n-icon>
									</template>
									Flag
								</n-button>
							</div>

							<div class="question">
								<span v-html="question.question"></span>
							</div>
							<div class="choices">
								<div
									class="choiceCon"
									v-for="(choice, value) in question.choices"
									:key="value"
								>
									<n-button
										round
										size="large"
										class="choice"
										:type="choice.is_chosen ? 'info' : ''"
										@click="chooseAnswer(question.choices, value, question)"
										:id="'letter' + String.fromCharCode(65 + value) + 'Btn'"
									>
										<n-button
											class="itemNumber"
											circle
											size="large"
											type="info"
											tertiary
											:color="choice.is_chosen ? 'white' : ''"
											>{{ String.fromCharCode(65 + value) }}</n-button
										>
										<div class="choiceContent">
											<span v-html="choice.choice"></span>
										</div>
									</n-button>
									<br />
								</div>
							</div>
						</div>
						<div class="navButtons">
							<n-button
								strong
								secondary
								round
								type="info"
								size="large"
								id="prevBtn"
								class="prevBtn"
								:disabled="this.counter == 1"
								@click="this.counter--"
								>Previous</n-button
							>
							<n-button
								strong
								round
								class="nextBtn"
								color="#253759"
								size="large"
								id="nextBtn"
								@click="this.counter++"
								:disabled="this.counter == this.test.total_items"
								>Next</n-button
							>
						</div>
					</div>
				</div>

				<div class="testInfoContainer">
					<div class="calculatorCon">
						<n-button primary block type="info" id="calculatorBtn">
							Calculator
						</n-button>
					</div>
					<div class="testProgressCon">
						<h2>Answers</h2>
						<div class="answers">
							<n-button
								class="items"
								size="tiny"
								tertiary
								type="info"
								v-for="(question, index) in this.test.questions"
								:key="index"
								block
								id="itemBtn"
								@click="counter = index + 1"
							>
								<div :class="question.is_flagged ? 'flagged' : ''"></div>
								<n-button
									class="itemNumber"
									circle
									size="tiny"
									type="info"
									color="#c0d9d9"
									:class="counter == index + 1 ? 'indicator' : ''"
									>{{ index + 1 }}
								</n-button>
								<div v-for="(choice, index) in question.choices" :key="index">
									<div v-if="choice.is_chosen" class="chosenAnswer">
										{{ choice.letter }}
									</div>
								</div>
							</n-button>
						</div>
						<br />

						<div class="submitCon">
							<n-button
								primary
								block
								color="#253759"
								id="submitBtn"
								@click="this.confirm = true"
							>
								Submit and Finish
							</n-button>
						</div>
						<br />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import contentAPI from "@/apis/contentAPI";

	export default {
		data() {
			return {
				flagged: false,
				counter: 1,
				showWarning: false,
				test: {},
				item: 0,
				leftTheTab: 0,
				duration: 0,
				durationInSeconds: 0,
				durationInMinutes: 0,
				timeIsUp: false,
				confirm: false,
			};
		},

		created() {
			this.test = contentAPI.prototype.getTest("Algebra 1 Midterm");
			this.duration = this.test.test_duration;
			this.durationInMinutes = this.duration / 60;
		},

		methods: {
			closeWindow() {
				window.close();
			},
			chooseAnswer(choices, value, question) {
				for (let i = 0; i < choices.length; i++) {
					if (value == i) {
						if (choices[i].is_chosen) {
							choices[i].is_chosen = false;
							question.answered = false;
						} else {
							choices[i].is_chosen = true;
							question.answered = true;
						}
					} else {
						choices[i].is_chosen = false;
						question.answered = true;
					}
				}
			},
			tabout() {
				this.leftTheTab = this.leftTheTab + 1;
				this.showWarning = true;
			},

			tabin() {
				// this.showWarning = false;
			},
			tabclose(event) {
				this.showWarning = false;
				// Cancel the event as stated by the standard.
				if (!this.confirm) {
					event.preventDefault();
					event.returnValue = "";
				}

				// Chrome requires returnValue to be set.
			},
		},
		computed: {
			listenfortabs: function () {
				window.addEventListener("blur", this.tabout);
				window.addEventListener("focus", this.tabin);
				window.addEventListener("beforeunload", this.tabclose);
			},

			timeRemaining: function () {
				if (this.duration > 0) {
					setTimeout(() => {
						this.duration--;

						if (this.durationInSeconds != 0) {
							this.durationInSeconds--;
						} else {
							this.durationInSeconds = 59;
						}

						if (this.durationInSeconds == 59) {
							this.durationInMinutes--;
						}
					}, 1000);
				}
			},

			timeListener: function () {
				if (this.duration == 0) {
					this.timeIsUp = true;
				}
			},
		},
	};
</script>

<style scoped>
	.testPage {
		background-color: #e5e5e5;
		min-height: 100vh;
		padding: 0px;
		margin: 0px;
	}

	.pageHeader {
		display: flex;
		background-color: #fff;
		box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
		padding: 15px 40px;
		justify-content: space-between;
		align-items: center;
	}

	.penalty {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.ic {
		width: 50px;
	}

	.header {
		display: flex;
		background-color: #fff;
		box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
		padding: 15px;
		justify-content: space-around;
		align-items: center;
	}

	.titleContainer {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.title1,
	.title2 {
		margin: 0px;
		font-size: 20px;
	}

	.title1 {
		color: #253759;
	}

	.title2 {
		color: #c0d9d9;
	}

	.container {
		padding: 20px;
	}
	.main {
		display: flex;
		justify-content: center;
		align-items: flex-start;
	}

	.questionContainer {
		width: 1000px;
		min-height: 550px;
		background-color: #fff;
		box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
		margin: 40px;
		border-radius: 10px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.testInfoContainer {
		min-height: 550px;
		width: 300px;
		margin: 40px;
		display: flex;
		align-items: center;
		flex-direction: column;
	}

	.calculatorCon {
		width: 300px;
	}

	.n-button {
		padding: 25px;
		border-radius: 10px;
	}

	.testProgressCon {
		background-color: #fff;
		box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
		min-height: 450px;
		width: 300px;
		border-radius: 10px;
		margin: 20px 0px;
	}

	.innerCon {
		padding: 30px 0px;
	}

	.questionCounter {
		font-size: 20px;
	}

	.flagCon {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0px 40px;
	}

	.flag {
		padding: 10px;
	}

	.question {
		font-size: 18px;
		padding: 20px 80px;
		text-align: justify;
	}

	.choices {
		text-align: start;
		padding: 0px 80px;
	}

	.choice {
		border-radius: 40px;
		padding: 25px 10px;
		min-width: 400px;
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}

	.choiceContent {
		padding: 0px 20px;
	}

	.navButtons {
		display: flex;
		justify-content: space-between;
		align-items: center;

		padding: 0px 60px;
		padding-bottom: 40px;
	}

	.nextBtn,
	.prevBtn {
		border-radius: 30px;
		padding: 20px;
	}

	.testProgressCon {
		padding: 10px 10px;
	}

	.testProgressCon h2 {
		padding: 10px;
	}

	.items {
		padding: 18px;
		border-radius: 5px;
		margin: 5px;
		text-align: flex-start;
		display: flex;
		justify-content: flex-start;
	}

	.itemNumber {
		padding: 3px;
		text-align: center;
		border-radius: 100%;
	}

	.answers {
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-start;
		align-items: flex-start;
		height: 320px;
		max-height: 350px;
		padding: 10px;
		overflow-y: auto;
		overflow-x: hidden;
	}

	.submitCon {
		margin: 0px 20px;
	}

	.flagged {
		background-color: rgb(182, 19, 19);
		width: 10px;
		height: 10px;
		position: absolute;
		border-radius: 20px;
		margin-left: 210px;
	}

	.chosenAnswer {
		padding: 0px 20px;
		font-size: 16px;
		color: #253759;
		font-weight: bold;
	}

	.indicator {
		background-color: #253759;
		color: white;
	}

	.cardWarning {
		text-align: center;
	}

	.warningTitle h2 {
		padding: 10px 0px;
	}

	.warningMessage {
		font-size: 16px;
		font-weight: 600;
	}
</style>
