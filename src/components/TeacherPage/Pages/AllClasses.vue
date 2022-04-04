<template>
	<div class="upperCon">
		<br />
		<div class="pageInfo">
			<div class="infoCon">
				<div class="title">
					<h1>All Classes</h1>
				</div>
				<div class="subdetails">
					<h3>TOTAL CLASSES:</h3>
					<h3 class="classCount" id="classCount">10</h3>
				</div>
			</div>

			<div class="functionsCon">
				<div class="createClassCon">
					<n-button
						strong
						color="#253759"
						size="large"
						id="createClass"
						class="createClass"
					>
						<template #icon>
							<n-icon>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									xmlns:xlink="http://www.w3.org/1999/xlink"
									viewBox="0 0 1024 1024"
								>
									<path
										d="M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"
										fill="currentColor"
									></path>
									<path
										d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372z"
										fill="currentColor"
									></path>
								</svg>
							</n-icon>
						</template>
						Create New Class</n-button
					>
				</div>
				<div class="search">
					<div class="searchIc">
						<svg
							version="1.1"
							xmlns="http://www.w3.org/2000/svg"
							xmlns:xlink="http://www.w3.org/1999/xlink"
							x="0px"
							y="0px"
							viewBox="0 0 512 512"
							enable-background="new 0 0 512 512"
							xml:space="preserve"
						>
							<g>
								<g>
									<g>
										<g>
											<path
												d="M337.509,305.372h-17.501l-6.571-5.486c20.791-25.232,33.922-57.054,33.922-93.257
					C347.358,127.632,283.896,64,205.135,64C127.452,64,64,127.632,64,206.629s63.452,142.628,142.225,142.628
					c35.011,0,67.831-13.167,92.991-34.008l6.561,5.487v17.551L415.18,448L448,415.086L337.509,305.372z M206.225,305.372
					c-54.702,0-98.463-43.887-98.463-98.743c0-54.858,43.761-98.742,98.463-98.742c54.7,0,98.462,43.884,98.462,98.742
					C304.687,261.485,260.925,305.372,206.225,305.372z"
											></path>
										</g>
									</g>
								</g>
							</g>
						</svg>
					</div>
					<input
						type="text"
						name="search"
						id="search"
						class="searchBar"
						placeholder="Search Class"
					/>
				</div>
			</div>
		</div>
	</div>
	<div class="lowerCon">
		<div class="classesCon">
			<div class="classes">
				<div
					class="class"
					v-for="i in 10"
					:key="i"
					id="class"
					@mouseenter="showBTN(i)"
					@mouseleave="leaveBTN(i)"
				>
					<div class="btns" v-show="showBtns && i == classNumber">
						<n-button
							type="tertiary"
							color="white"
							class="editBtn"
							id="classEditBtn"
							>Edit</n-button
						>
						<n-button text color="red" class="deleteBtn" id="classDeleteBtn"
							>Delete</n-button
						>
					</div>

					<div class="classDetails">
						<div class="con">
							<div class="subjectName">Algebra</div>
							<div class="studentsCount">20 students</div>
						</div>
						<br />
						<div class="con">
							<div class="startTime">Start: 8:00 AM</div>
							<div class="endTime">End: 10:30 AM</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			// components: {
			// 	Bars;
			// }
			return {
				showDrawer: true,
				showBtns: false,
				classNumber: 0,
				activeNav: true,
			};
		},
		methods: {
			showBTN(i) {
				this.showBtns = true;
				this.classNumber = i;
			},

			leaveBTN(i) {
				this.showBtns = false;
				this.classNumber = i;
			},
		},
	};
</script>

<style scoped>
	/* ---------------------- */
	/* start main content design */

	.upperCon {
		min-height: 40vh;
		background-color: #0073b0;
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

	/* .infoCon {

	} */

	.title {
		color: white;
		font-size: 24px;
		margin: 0px;
		padding: 0px;
	}

	.subdetails {
		display: flex;
		color: white;
		align-items: center;
	}

	.classCount {
		padding: 2px 20px;
		width: 100px;

		text-align: center;
		margin: 0px 20px;
		background-color: #253759;
		border-radius: 5px;
	}

	.functionsCon {
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
	}

	.searchIc {
		width: 22px;
	}

	.search {
		border: none;
		border-bottom: 1px solid white;
		outline: none;
		font-size: 16px;
		color: white;
		padding: 5px;
		display: flex;
		align-items: center;
	}

	.search svg {
		color: white;
	}
	.searchBar {
		background-color: #0073b0;
		border: none;
		color: white;
		padding: 0px 10px;
		outline: none;
	}

	::placeholder {
		/* Chrome, Firefox, Opera, Safari 10.1+ */
		color: white;
		opacity: 1; /* Firefox */
	}

	::-ms-input-placeholder {
		/* Microsoft Edge */
		color: white;
	}

	.createClass {
		padding: 25px 30px;
	}

	.classes {
		padding: 30px 20px;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		text-align: center;
	}

	.class {
		background-color: white;
		border-radius: 15px;
		width: 300px;
		height: 250px;
		padding: 10px;
		margin: 10px;
		cursor: pointer;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}

	.class:hover {
		background-color: #253759;
		transition: 0.4s ease;
		color: white;
	}

	.btns {
		display: flex;
		justify-content: space-between;
		padding: 5px 10px;
		margin-top: -44px;
		width: 280px;
	}
	.editBtn {
		color: #253759;
		border-radius: 20px;
	}

	.editBtn:hover {
		color: #253759;
		background-color: #c0d9d9;
	}

	.deleteBtn:hover {
		color: rgb(233, 53, 53);
		border-bottom: 1px solid red;
	}

	.subjectName {
		font-size: 28px;
		font-weight: bold;
	}
</style>
