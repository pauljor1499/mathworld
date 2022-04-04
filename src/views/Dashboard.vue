<template>
  <!-- Nav bar -->
  <nav>
    <router-link :to="'/'"><h1>MathWorld</h1> </router-link>
    <ul>
      <n-button
        color="#253759"
        size="medium"
        id="loginBtn"
        style="margin: 10px"
        @click="showModal = true"
        >Logout
      </n-button>
    </ul>
  </nav>
  <body>
    <div class="container">
      <!-- Side bar -->
      <div class="sidebar">
        <div class="profile">
          <img
            src="https://thetaiwantimes.com/wp-content/uploads/2020/06/President_Rodrigo_Duterte-1.jpg"
            alt="profile_picture"
          />
          <h3>Rodrigo Duterte</h3>
          <p>Code: 142-4342-1</p>
          <p style="margin-bottom: 10px">Teacher</p>
          <a href="/">
            <span>View Profile</span>
          </a>
        </div>
        <hr />
        <ul>
          <li>
            <a href="#" class="active">
              <span class="icon"><i class="fas fa-home"></i></span>
              <span class="item">Dashboard</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span class="icon"><i class="fas fa-desktop"></i></span>
              <span class="item">All Classes</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span class="icon"><i class="fas fa-user-friends"></i></span>
              <span class="item">Class Periods</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span class="icon"><i class="fas fa-tachometer-alt"></i></span>
              <span class="item">Reports</span>
            </a>
          </li>
        </ul>
      </div>
      <!-- Board -->
      <div class="board">
        <h1>Welcome to your Dashboard!</h1>
        <!-- Card -->
        <div class="row">
          <div class="column">
            <n-card
              title="Subjects"
              :segmented="{
                content: true,
                footer: 'soft',
              }"
              hoverable
              style="text-align: left"
            >
              <template #header-extra>View</template>
              Card Content
            </n-card>
          </div>
          <div class="column">
            <n-card
              title="Classes"
              :segmented="{
                content: true,
                footer: 'soft',
              }"
              hoverable
              style="text-align: left"
            >
              <template #header-extra>View</template>
              Card Content
            </n-card>
          </div>
          <div class="column">
            <n-card
              title="Notifications"
              :segmented="{
                content: true,
                footer: 'soft',
              }"
              hoverable
              style="text-align: left"
            >
              <template #header-extra>View</template>
              Card Content
            </n-card>
          </div>
          <div class="column">
            <n-card class="calendar">
              <div class="date">21</div>
              <div>
                <div class="month">December</div>
                <div class="year">2018</div>
                <div class="day">Sunday</div>
              </div>
            </n-card>
          </div>
        </div>
      </div>
    </div>
  </body>
  <footer></footer>
  <n-modal
    v-model:show="showModal"
    preset="dialog"
    title="Warning"
    content="Are you sure?"
    positive-text="Logout"
    negative-text="Cancel"
    @positive-click="positive_modal()"
    @negative-click="negative_modal()"
    style="color: black"
  >
    <h3>Do you want to logout?</h3>
  </n-modal>
</template>

<script>
import { ref } from "vue";
import router from "@/router";

export default {
  name: "Modal",
  components: {},

  setup() {
    function positive_modal() {
      router.push({ path: "/logout" });
      return true;
    }

    function negative_modal() {
      return true;
    }

    return {
      positive_modal,
      negative_modal,
      showModal: ref(false),
    };
  },
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  text-decoration: none;

  list-style: none;
  font-family: "Open Sans", sans-serif;
}
/* nav-bar */
nav {
  border-bottom: 1px solid #dee2e6;
}

footer {
  background-color: rgb(255, 255, 255);
  width: 100%;
  height: 100px;
}

nav h1 {
  float: left;
  margin: 5px 0px 0px 5%;
  font-size: 30px;
  color: black;
}

nav ul {
  list-style-type: none;
  overflow: hidden;
  font-size: 18px;
  margin-right: 5%;
}

nav ul button {
  float: right;
  padding: 10px;
}
/* nav-bar */

.sidebar {
  background-color: #253759;
  width: 280px;
  height: 100%;
  transition: all 0.5s ease;
  text-align: center;
}

.sidebar .profile {
  margin-top: 50px;
  text-align: center;
}

.sidebar .profile img {
  display: block;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  margin: 0 auto;
  border: 2px solid #ffffff;
}

.sidebar .profile h3 {
  color: #ffffff;
  margin: 20px 0 10px;
}

.sidebar .profile p {
  color: rgb(206, 240, 253);
  font-size: 14px;
}

.sidebar .profile a {
  display: inline-block;
  font-size: 12px;
  padding: 10px;
  padding-left: 140px;
  color: rgba(255, 255, 255, 0.61);
}

.sidebar ul {
  display: inline-block;
  margin-top: 20px;
}

/* ------------- */

.sidebar ul li a {
  display: block;
  padding: 13px 30px;
  border-bottom: 1px solid #10558d;
  color: #ffffff;
  font-size: 16px;
  position: relative;
}

.sidebar ul li a .icon {
  color: #dee4ec;
  width: 30px;
  float: left;
}

.sidebar ul li a:hover,
.sidebar ul li a.active {
  color: #253759;
  background: white;
}

.sidebar ul li a:hover .icon,
.sidebar ul li a.active .icon {
  color: #0073b0;
}

/* body */
.container {
  display: flex;
  background-color: hsl(0, 0%, 95%);
  height: 750px;
}

.board {
  width: 100%;
  height: 200px;
  background-color: #0073b0;
  float: right;
}

.board h1 {
  color: white;
  float: left;
  margin: 50px 80px 0;
}

/* Cards */
.row {
  width: 95%;
  display: grid;
  margin: auto;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 20px;
}

.column {
  width: 100%;
  height: 200px;
}

.row .column .n-card {
  max-width: 300px;
  top: 50px;
}

.row .column .calendar {
  display: flex;
}

.row .column .calendar .date {
  float: left;
  font-weight: bold;
  font-size: 55px;
  margin: 0px 20px 0px;
  color: #2ab6b6;
}

.row .column .calendar .month {
  font-weight: bold;
  font-size: 16px;
  margin: 10px 0px 0px;
}
</style>