<template>
  <n-card :bordered="false" size="small">
    <div class="header">
      <h1>Create New Class</h1>
      <n-button
        text
        color="black"
        style="border: 1px solid black; border-radius: 100%"
        circle
        @click="this.$emit('closeCreateClass')"
      >
        <i class="fa-solid fa-xmark"></i>
      </n-button>
    </div>
    <div class="body">
      <div class="class-name">
        <input
          type="text"
          maxlength="10"
          placeholder="Class Name"
          v-model="this.newClass.className"
        />
      </div>
      <div class="time">
        <div class="start">
          <input
            type="text"
            maxlength="10"
            placeholder="Start Time"
            v-model="this.newClass.startTime"
          />
        </div>
        <div class="end">
          <input
            type="text"
            maxlength="10"
            placeholder="End Time"
            v-model="this.newClass.endTime"
          />
        </div>
      </div>
      <h3 class="choose-day">Choose Day</h3>
      <div class="check-box">
        <div class="day" v-for="day in days" :key="day">
          <input type="checkbox" style="accent-color: #253759" :value="day" />
          <span>{{ day }}</span>
        </div>
      </div>
      <h3 class="set-grade-weight">Set Grade Weight</h3>
      <div class="title">
        <div>Select</div>
        <div>Equivalent (Percentage)</div>
      </div>
      <div class="grades" v-for="category in categories" :key="category">
        <div class="grade-category">
          <input
            type="radio"
            style="accent-color: #253759"
            :value="category"
          />{{ category }}
        </div>
        <div class="grade-weight">
          <input type="text" maxlength="10" />
        </div>
      </div>
      <div class="total">
        <div class="total-label"><div>Total</div></div>
        <div>
          <input type="text" value="100%" />
        </div>
      </div>
    </div>
    <div class="footer">
      <n-button
        color="#253759"
        @click="this.$emit('createClass', this.newClass)"
        >Create</n-button
      >
    </div>
    <!-- {{ this.newClass }} -->
  </n-card>
</template>

<script>
export default {
  data() {
    return {
      newClass: {
        className: "",
        studentCount: 0,
        startTime: "",
        endTime: "",
        scheduledDays: [],
        gradeWeights: [],
      },
      days: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"],
      categories: [
        "Test",
        "Quiz",
        "Mid Term Exam",
        "Project",
        "Final Exam",
        "Other",
      ],
    };
  },
};
</script>

<style scoped>
.n-card {
  padding: 20px;
  max-width: 500px;
}

.header {
  width: 100%;
}

.header h1 {
  float: left;
}

.header button {
  float: right;
  width: 30px;
  height: 30px;
}

.header button:hover {
  float: right;
  background-color: #e7e7e7;
  width: 30px;
  height: 30px;
}

.body {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 20px;
  display: inline-block;
}

.body .class-name {
  font-size: 15px;
  width: 50%;
}

.body .class-name input {
  width: 75%;
  padding: 5px;
  border: none;
  border-bottom: 1px solid #253759;
}

.time {
  width: 100%;
  display: flex;
}

.time .start,
.time .end {
  flex: 1;
}

.time input {
  width: 75%;
  font-size: 15px;
  padding: 5px;
  border: none;
  border-bottom: 1px solid #253759;
}

.body .choose-day,
.body .set-grade-weight {
  margin: 25px 0px 20px;
}

.check-box {
  width: 100%;
  display: flex;
}

.check-box .day {
  display: inline-flex;
  flex: 1;
}

.check-box .day input {
  width: 15px;
  height: 15px;
}
.check-box .day span {
  padding-left: 5px;
  padding-right: 15px;
}

.title {
  width: 100%;
  display: flex;
  font-weight: bold;
}

.title div,
.title div {
  flex: 1;
}

.grades {
  width: 100%;
  display: flex;
  margin-top: 10px;
}

.grades .grade-category {
  flex: 1;
}

.grades .grade-category input {
  margin-right: 10px;
}

.grades .grade-weight {
  flex: 1;
}

.grades .grade-weight input {
  border: none;
  border-bottom: 1px solid #253759;
  text-align: center;
  width: 50%;
}

.total {
  width: 100%;
  display: flex;
}

.total div {
  flex: 1;
}

.total .total-label {
  width: 50%;
}

.total .total-label div {
  text-align: right;
  margin-right: 20px;
}

.total input {
  width: 50%;
  border: none;
  border-bottom: 1px solid #253759;
  font-weight: bold;
  text-align: center;
}

.n-button {
  margin: 0 auto;
}

.footer {
  width: 100%;
}

.footer .n-button {
  float: right;
}

input:focus {
  outline: none;
}
</style>
