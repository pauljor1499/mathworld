<template>
  <nav>
    <a href="/dashboard"><h1 style="color: black">MathWorld</h1></a>
    <ul>
      <router-link :to="'/register'">
        <n-button
          color="#253759"
          type="default"
          size="medium"
          id="signupBtn"
          style="margin: 10px; color: #253759"
          ghost
          >Register</n-button
        >
      </router-link>
      <router-link :to="'/login'">
        <n-button
          color="#253759"
          size="medium"
          id="loginBtn"
          style="margin: 10px"
          >Log In</n-button
        >
      </router-link>
      <li><a class="vl">|</a></li>
      <li><a href="/dashboard">Teachers</a></li>
      <li><a href="/dashboard">Community</a></li>
      <li><a href="/dashboard">About</a></li>
      <li><a href="/dashboard">Courses</a></li>
    </ul>
  </nav>

  <div class="content">
    <div class="content-video"></div>
    <hr />
    <div class="title">
      <h1>What do you want to learn today?</h1>
    </div>
    <div class="grid">
      <div class="col">
        <h2>Course 1</h2>
        <p style="margin: 10px 0px">
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
          fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
          sequi nesciunt. Neque porro quisquam est.
        </p>
        <n-button
          color="#253759"
          type="default"
          size="medium"
          id="enroll-c1"
          style="margin: 10px 0px; color: #253759"
          ghost
          >Learn more</n-button
        >
      </div>

      <div class="col">
        <h2>Course 2</h2>
        <p style="margin: 10px 0px">
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
          fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
          sequi nesciunt. Neque porro quisquam est.
        </p>
        <n-button
          color="#253759"
          type="default"
          size="medium"
          id="enroll-c2"
          style="margin: 10px 0px; color: #253759"
          ghost
          >Learn more</n-button
        >
      </div>

      <div class="col">
        <h2>Course 3</h2>
        <p style="margin: 10px 0px">
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
          fugit, sed quia consequuntur magni dlores eos qui ratione voluptatem
          sequi nesciunt. Neque porro quisquam est.
        </p>
        <n-button
          color="#253759"
          type="default"
          size="medium"
          id="enroll-c3"
          style="margin: 10px 0px; color: #253759"
          ghost
          >Learn more</n-button
        >
      </div>

      <div class="col">
        <h2>Course 4</h2>
        <p style="margin: 10px 0px">
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
          fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
          sequi nesciunt. Neque porro quisquam est.
        </p>
        <n-button
          color="#253759"
          type="default"
          size="medium"
          id="enroll-c4"
          style="margin: 10px 0px; color: #253759"
          ghost
          >Learn more</n-button
        >
      </div>
    </div>
    <hr />
    <div class="about">
      <div class="about-message">
        <h1>Open your knowledge</h1>
        <p>
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
          fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
          sequi nesciunt. Neque porro quisquam est, qui dolorem.
        </p>
      </div>
      <img
        src="https://img.freepik.com/free-photo/books-pencils-desk-by-blackboard_181624-47246.jpg?w=900"
        alt="knowledge"
      />
    </div>
    <hr />
    <div class="feedback">
      <h1>What people say about us?</h1>
      <n-carousel autoplay>
        <div>
          <img
            class="carousel-img"
            src="https://cdn.now.howstuffworks.com/media-content/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg"
          />
          <h3>Randell L. Cardwell</h3>
          <p>
            Thank you for your hard work in supporting my son as they develop.
            Your patience and commitment to supporting my child has mean a lot
            to our family.
          </p>
        </div>
        <div>
          <img
            class="carousel-img"
            src="https://thumbs.dreamstime.com/b/filipino-youth-thumbs-up-attractive-asian-person-158307375.jpg"
          />
          <h3>Keith A. Hand</h3>
          <p>
            With your guidance, our daughter has developed into a confident and
            capable child. Thank you for being such an important part in our
            child’s development.
          </p>
        </div>
        <div>
          <img
            class="carousel-img"
            src="https://www.incimages.com/uploaded_files/image/1920x1080/getty_481292845_77896.jpg"
          />
          <h3>Claude S. Black</h3>
          <p>
            Your expertise in teaching has put our minds at ease. We are so
            grateful to have you as our child’s teacher.
          </p>
        </div>
        <div>
          <img
            class="carousel-img"
            src="https://t4.ftcdn.net/jpg/02/26/67/23/360_F_226672340_FUInCFzn7Yyso0I1KNaekRg2JBqw4XC9.jpg"
          />
          <h3>Michelle F. Molina</h3>
          <p>
            It is clear that our child’s literacy and numeracy skills have
            developed considerably while under your care. Thank you for helping
            him to develop the skills and confidence that he will carry forward
            into the next school year.
          </p>
        </div>
      </n-carousel>
    </div>
  </div>

  <footer>
    <div class="footer-content">
      <h3 style="font-size: 20px">MathWorld</h3>
      <p>
        Ssdad asdadsadsa Nemo enim ipsam voluptatem quia voluptas sit aspernatur
        aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem sequi nesciunt. Neque porro quisquam est. source code.
      </p>
    </div>
  </footer>
  <div class="footer-bottom">
    <p>Copyright &copy;2022</p>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
/* nav */
nav {
  border-bottom: 1px solid #dee2e6;
}

nav h1 {
  float: left;
  margin: 5px 0px 0px 5%;
  font-size: 30px;
}

nav ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  font-size: 18px;
  margin-right: 5%;
}

nav ul button {
  float: right;
  padding: 10px;
}

nav ul li a {
  float: right;
  display: block;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  color: black;
}

nav ul li a:hover:not(.active, .vl) {
  background-color: #d0ebff;
  transition: 0.8s;
}

.active {
  background-color: #d0ebff;
  border-bottom: 1px solid #003a74;
}
/* nav */

.content {
  padding: 50px;
}

.content .content-video {
  width: 85%;
  height: 550px;
  margin: auto;
  margin-bottom: 50px;
  background-color: gray;
}

.content .title {
  width: 85%;
  margin: auto;
  text-align: left;
  margin-top: 50px;
}

.content .grid {
  width: 85%;
  margin: auto;
  display: grid;
  margin-bottom: 50px;
  grid-template-columns: 1fr 1fr;
}

.content .grid .col {
  padding: 0px 0px 20px;
  margin: auto;
}

.content .grid .col h2 {
  text-align: left;
}

.content .grid .col p {
  padding-right: 40px;
  text-align: left;
}

.content .grid .col .n-button {
  float: left;
}

hr {
  margin: auto;
  width: 85%;
}

.about {
  width: 85%;
  margin: auto;
  padding: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.about-message {
  text-align: left;
}

.about img {
  width: 85%;
  height: 240px;
  object-fit: cover;
  margin: 0px 80px 0px;
}

.feedback {
  width: 85%;
  margin: auto;
  text-align: center;
  padding: 50px;
}

.feedback h1 {
  margin: auto;
  width: 50%;
  text-align: center;
  margin-bottom: 50px;
}

.feedback p {
  margin: auto;
  width: 50%;
  text-align: center;
}

.feedback .n-carousel img {
  width: 50%;
  height: 240px;
  object-fit: cover;
  margin: auto;
}

/* footer */
.footer-content {
  background-color: #d0ebff;
  padding: 50px;
  text-align: center;
}

.footer-content p {
  margin: auto;
  width: 50%;
}

.footer-bottom {
  background-color: #253759;
  color: white;
  padding: 10px;
}
/* footer */
</style>
