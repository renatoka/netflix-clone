<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<script>
export default {
  name: "Home",
  data() {
    return {
      faqVisible: {
        one: false,
        two: false,
        three: false,
        four: false,
        five: false,
        six: false,
      },
    };
  },
  methods: {
    /* OVO OBAVEZNO POPRAVITI U JEDNU FUNKCIJU KAD NAUCIM KAKO */
    showFaqInfoOne() {
      this.faqVisible.one = !this.faqVisible.one;
    },
    showFaqInfoTwo() {
      this.faqVisible.two = !this.faqVisible.two;
    },
    showFaqInfoThree() {
      this.faqVisible.three = !this.faqVisible.three;
    },
    showFaqInfoFour() {
      this.faqVisible.four = !this.faqVisible.four;
    },
    showFaqInfoFive() {
      this.faqVisible.five = !this.faqVisible.five;
    },
    showFaqInfoSix() {
      this.faqVisible.six = !this.faqVisible.six;
    },
  },
};
</script>
<template>
  <header>
    <div class="our-story-top-content">
      <div class="our-story-header-wrapper">
        <div class="our-story-header-logo">
          <img src="../assets/images/logo-netflix.png" alt="" srcset="" id="logo" />
        </div>
        <div class="our-story-action-buttons">
          <button id="language-btn">English</button>
          <button id="signIn-btn">
            <RouterLink to="/login">Sign in</RouterLink>
          </button>
        </div>
      </div>
      <div class="our-story-cards">
        <div class="our-story-hero-card">
          <h1 id="our-story-title">Unlimited movies, TV</h1>
          <h1 id="our-story-title-second">shows, and more.</h1>
          <h3 id="our-story-subtitle">Watch anywhere. Cancel anytime.</h3>
          <h4 id="email-form-title">
            Ready to watch? Enter your email to create or restart your
            membership.
          </h4>
        </div>
        <div class="our-story-registration-field">
          <input type="text" placeholder="Email address" id="emailField" />
          <button id="getStarted">
            <RouterLink to="/login">Get Started ></RouterLink>
          </button>
        </div>
      </div>
    </div>
  </header>
  <section>
    <div class="our-story-wrapper">
      <div class="our-story-icons">
        <div class="our-story-icon">
          <div class="our-story-icon-left">
            <h1 id="our-story-icon-heading">Enjoy on your TV.</h1>
            <h3 id="our-story-icon-subheading">
              Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
              Blu-ray players and more.
            </h3>
          </div>
          <div class="our-story-icon-right">
            <img src="../assets/images/tv.png" alt="" id="our-story-card-icon" />
            <div class="our-story-card-animation" data-uia="our-story-card-animation">
              <video class="our-story-card-video-tv" data-uia="our-story-card-video" autoplay="" playsinline="" muted=""
                loop="">
                <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
                  type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
        <div class="our-story-icon">
          <div class="our-story-icon-left">
            <h1 id="our-story-icon-heading">
              Download your shows to watch offline.
            </h1>
            <h3 id="our-story-icon-subheading">
              Save your favorites easily and always have something to watch.
            </h3>
          </div>
          <div class="our-story-icon-right">
            <img alt="" id="our-story-card-img"
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
              data-uia="our-story-card-img" />
          </div>
        </div>
        <div class="our-story-icon">
          <div class="our-story-icon-left">
            <h1 id="our-story-icon-heading">Watch everywhere.</h1>
            <h3 id="our-story-icon-subheading">
              Stream unlimited movies and TV shows on your phone, tablet, laptop
              and TV without paying more.
            </h3>
          </div>
          <div class="our-story-icon-right">
            <img src="../assets/images/device-pile.png" alt="" id="our-story-card-icon" />
            <div class="our-story-card-animation" data-uia="our-story-card-animation">
              <video class="our-story-card-video-pc" data-uia="our-story-card-video" autoplay="" playsinline="" muted=""
                loop="">
                <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v"
                  type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
        <div class="our-story-icon">
          <div class="our-story-icon-left">
            <h1 id="our-story-icon-heading">Create profile for kids.</h1>
            <h3 id="our-story-icon-subheading">
              Send kids on adventures with their favorite characters in a space
              made just for them---free with your membership.
            </h3>
          </div>
          <div class="our-story-icon-right">
            <img src="../assets/images/kids.png" alt="" id="our-story-card-icon" />
          </div>
        </div>
      </div>
      <div class="our-story-faq">
        <div class="our-story-faq-heading">
          <h1 id="our-story-faq-title">Frequently Asked Questions</h1>
        </div>
        <div class="our-story-faq-content">
          <button class="faq" @click="showFaqInfoOne">What is Netflix?</button>
          <div class="faq-answer" v-if="this.faqVisible.one">
            Netflix is a streaming service that offers a wide variety of
            award-winning TV shows, movies, anime, documentaries, and more on
            thousands of internet-connected devices.
            <br />
            <br />
            You can watch as much as you want, whenever you want without a
            single commercial – all for one low monthly price. There's always
            something new to discover and new TV shows and movies are added
            every week!
          </div>
          <button class="faq" @click="showFaqInfoTwo">
            How much does Netflix cost?
          </button>
          <div class="faq-answer" v-if="this.faqVisible.two">
            Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
            streaming device, all for one fixed monthly fee. Plans range from
            EUR7.99 to EUR11.99 a month. No extra costs, no contracts.
          </div>
          <button class="faq" @click="showFaqInfoThree">
            Where can I watch?
          </button>
          <div class="faq-answer" v-if="this.faqVisible.three">
            Watch anywhere, anytime. Sign in with your Netflix account to watch
            instantly on the web at netflix.com from your personal computer or
            on any internet-connected device that offers the Netflix app,
            including smart TVs, smartphones, tablets, streaming media players
            and game consoles.
            <br />
            <br />
            You can also download your favorite shows with the iOS, Android, or
            Windows 10 app. Use downloads to watch while you're on the go and
            without an internet connection. Take Netflix with you anywhere.
          </div>
          <button class="faq" @click="showFaqInfoFour">How do I cancel?</button>
          <div class="faq-answer" v-if="this.faqVisible.four">
            Netflix is flexible. There are no pesky contracts and no
            commitments. You can easily cancel your account online in two
            clicks. There are no cancellation fees – start or stop your account
            anytime.
          </div>
          <button class="faq" @click="showFaqInfoFive">
            What can I watch on Netflix?
          </button>
          <div class="faq-answer" v-if="this.faqVisible.five">
            Netflix has an extensive library of feature films, documentaries, TV
            shows, anime, award-winning Netflix originals, and more. Watch as
            much as you want, anytime you want.
          </div>
          <button class="faq" @click="showFaqInfoSix">
            Is Netflix good for kids?
          </button>
          <div class="faq-answer" v-if="this.faqVisible.six">
            The Netflix Kids experience is included in your membership to give
            parents control while kids enjoy family-friendly TV shows and movies
            in their own space.
            <br />
            <br />
            Kids profiles come with PIN-protected parental controls that let you
            restrict the maturity rating of content kids can watch and block
            specific titles you don’t want kids to see.
          </div>
          <div class="our-story-registration-field">
            <h4 id="email-form-title">
              Ready to watch? Enter your email to create or restart your
              membership.
            </h4>
            <input type="text" placeholder="Email address" id="emailField" />
            <button id="getStarted">
              <RouterLink to="/login">Get Started ></RouterLink>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
  <footer>
    <div class="footer">
      <div class="top">
        <p id="footer-text">Questions? Contact us.</p>
      </div>
      <div class="bottom">
        <div class="bottomOne">
          <p id="footer-text">FAQ</p>
          <p id="footer-text">Account</p>
          <p id="footer-text">Investor Relations</p>
          <p id="footer-text">Ways to Watch</p>
        </div>
        <div class="bottomTwo">
          <p id="footer-text">Privacy</p>
          <p id="footer-text">Corporate Information</p>
          <p id="footer-text">Speed Test</p>
          <p id="footer-text">Legal Notices</p>
        </div>
        <div class="bottomThree">
          <p id="footer-text">Help Center</p>
          <p id="footer-text">Media Center</p>
          <p id="footer-text">Jobs</p>
          <p id="footer-text">Terms of Use</p>
        </div>
        <div class="bottomFour">
          <p id="footer-text">Cookie Preferences</p>
          <p id="footer-text">Contact Us</p>
          <p id="footer-text">Legal Guarantee</p>
          <p id="footer-text">Only on Netflix</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

body {
  margin: 0;
  padding: 0;
}

/* Header section */

.our-story-top-content {
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url("@/assets/images/background.jpg");
  background-size: cover;
  border-bottom: 8px solid #222;
}

.our-story-header-wrapper {
  display: flex;
  padding-top: 20px;
  margin: 0 56px 0 56px;
  justify-content: space-between;
  align-items: center;
}

.our-story-action-buttons {
  display: flex;
  gap: 20px;
}

/* Main section inside header*/

.our-story-cards {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  margin-bottom: 100px;
}

/* Cards section */

.our-story-wrapper {
  background-color: black;
  z-index: 1;
}

.our-story-icons>div:nth-child(2n) {
  flex-direction: row-reverse;
}

.our-story-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 8px solid #222;
}

.our-story-icon>.our-story-icon-left {
  width: 650px;
  height: auto;
}

.our-story-card-video-tv {
  position: relative;
  top: -525px;
  left: 72px;
  width: 485px;
  z-index: -1;
  margin-bottom: -390px;
}

.our-story-card-video-pc {
  position: relative;
  top: -620px;
  left: 125px;
  width: 392px;
  z-index: -1;
  margin-bottom: -390px;
}

/* FAQ */

.our-story-faq {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 45px 75px 45px;
  border-bottom: 8px solid #222;
}

.our-story-faq-content {
  display: flex;
  flex-direction: column;
  margin: 2em auto;
}

.faq {
  background: #303030;
  border: 0;
  font-weight: 400;
  margin-bottom: 10px;
  padding: 0.8em 2.2em 0.8em 1.2em;
  width: 750px;
  text-align: left;
  color: white;
  font-size: 24px;
}

.faq-answer {
  background: #303030;
  border: 0;
  font-weight: 400;
  margin-bottom: 10px;
  padding: 0.8em 2.2em 0.8em 1.2em;
  width: 750px;
  text-align: left;
  color: white;
  font-size: 24px;
}

.our-story-registration-field {
  text-align: center;
}

/* Footer */

footer {
  background-color: black;
}

.footer {
  margin: 0 auto;
  max-width: 1000px;
  padding: 20px 45px;
}

.footer .top {
  display: flex;
  align-items: center;
  position: relative;
  left: 85px;
}

.footer .bottom {
  display: flex;
  justify-content: space-evenly;
}

/* Fonts */

a {
  text-decoration: none;
}

a:visited {
  color: white;
}

#logo {
  width: 167px;
  height: 45px;
}

#language-btn {
  background: rgba(0, 0, 0, 0.4);
  border: 1px solid #aaa;
  color: #fff;
  font-size: 0.875rem;
  width: 90px;
  height: 35px;
  font-family: "Poppins", sans-serif;
}

#signIn-btn {
  width: 90px;
  height: 35px;
  background-color: #e50914;
  color: white;
  border-radius: 3px;
  border-color: transparent;
  font-size: 1rem;
  font-family: "Poppins", sans-serif;
}

#our-story-title,
#our-story-title-second {
  font-weight: bold;
  font-size: 4rem;
  position: relative;
  text-align: center;
  color: white;
  font-family: "Poppins", sans-serif;
}

#our-story-title-second {
  position: relative;
  top: -30px;
  font-family: "Poppins", sans-serif;
}

#our-story-subtitle {
  font-size: 1.625rem;
  position: relative;
  top: -25px;
  font-weight: 400;
  text-align: center;
  color: white;
  font-family: "Poppins", sans-serif;
}

#email-form-title {
  font-size: 1.2rem;
  max-width: none;
  padding-bottom: 20px;
  color: white;
  font-family: "Poppins", sans-serif;
}

#emailField {
  border: 0;
  width: 480px;
  height: 75px;
  position: relative;
  top: -4px;
  font-family: "Poppins", sans-serif;
}

textarea:focus,
input:focus {
  outline: none;
}

#getStarted {
  border: 0;
  width: 200px;
  height: 75px;
  color: white;
  font-size: 16px;
  background-color: red;
  padding-left: 15px;
  padding-right: 15px;
  font-size: 1.575rem;
  font-family: "Poppins", sans-serif;
}

#our-story-icon-heading {
  color: white;
  font-size: 3.125rem;
  line-height: 1.1;
  margin-bottom: 0.5rem;
  font-weight: bold;
  font-family: "Poppins", sans-serif;
}

#our-story-icon-subheading {
  color: white;
  font-size: 1.625rem;
  font-weight: 400;
  font-family: "Poppins", sans-serif;
}

#our-story-card-img {
  width: 505px;
  height: 379px;
}

#our-story-faq-title {
  color: white;
  font-size: 3.125rem;
  line-height: 1.1;
  margin-bottom: 0.5rem;
  font-weight: bold;
  font-family: "Poppins", sans-serif;
}

#footer-text {
  color: #737373;
  margin-top: 10px;
  font-family: "Poppins", sans-serif;
}

@media only screen and (min-width: 550px) and (max-width: 949px) {
  /* Header */

  #logo {
    width: 108px;
    height: 29px;
  }

  #signIn-btn {
    font-size: 0.8rem;
    width: 84px;
    height: 34px;
    font-family: "Poppins", sans-serif;
  }

  a {
    text-decoration: none;
  }

  a:visited {
    color: white;
  }

  #our-story-title,
  #our-story-title-second {
    font-size: 3.125rem;
    font-family: "Poppins", sans-serif;
    font-weight: 500;
  }

  #our-story-title-second {
    position: relative;
    top: -15px;
    font-family: "Poppins", sans-serif;
  }

  #our-story-subtitle {
    font-size: 23px;
    margin: 1rem 0 0 0;
    font-family: "Poppins", sans-serif;
    font-weight: 400;
  }

  #email-form-title {
    font-weight: 400;
    margin: 0 auto;
    padding: 0 5%;
    text-align: center;
    font-family: "Poppins", sans-serif;
    font-size: 23px;
  }

  .our-story-registration-field {
    text-align: center;
    display: flex;
    flex-direction: column;
  }

  #emailField {
    width: 351px;
    height: 48px;
    position: relative;
    top: 10px;
    font-family: "Poppins", sans-serif;
  }

  #getStarted {
    font-size: 1rem;
    width: 130px;
    height: 40px;
    box-sizing: border-box;
    border-radius: 2px;
    border: 0;
    position: relative;
    top: 25px;
    font-family: "Poppins", sans-serif;
  }

  /* Main */

  .our-story-icons {
    padding: 0;
  }

  .our-story-icon {
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 5% 0;
  }

  .our-story-icon>.our-story-icon-left {
    width: 800px;
    height: auto;
  }

  .our-story-icons>div:nth-child(2n) {
    flex-direction: column;
  }

  #our-story-icon-heading {
    font-size: 2.5rem;
    font-family: "Poppins", sans-serif;
  }

  #our-story-icon-subheading {
    font-size: 1.25rem;
    font-family: "Poppins", sans-serif;
  }

  .our-story-faq {
    padding: 70px 45px;
  }

  .faq,
  .faq-answer {
    width: inherit;
  }

  /* Footer */

  .our-story-registration-field {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
  }

  #email-form-title {
    font-size: 23px;
    font-family: "Poppins", sans-serif;
  }
}

@media only screen and (min-width: 350px) and (max-width: 767px) {
  .our-story-top-content {
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
      url("@/assets/images/background.jpg");
    border-bottom: 8px solid #222;
  }

  /* Header */

  #logo {
    width: 88px;
    height: 24px;
  }

  #signIn-btn {
    font-size: 0.8rem;
    width: 61px;
    height: 27px;
    font-family: "Poppins", sans-serif;
  }

  a {
    text-decoration: none;
  }

  a:visited {
    color: white;
  }

  #language-btn {
    width: 100px;
    height: 28px;
    font-family: "Poppins", sans-serif;
  }

  .our-story-header-wrapper {
    margin: 0 5%;
  }

  .our-story-action-buttons {
    gap: 10px;
  }

  .our-story-cards {
    margin-top: 0;
    margin-bottom: 0;
    padding: 50px 5%;
  }

  #our-story-title,
  #our-story-title-second {
    font-size: 1.75rem;
    font-family: "Poppins", sans-serif;
    font-weight: 500;
  }

  #our-story-title-second {
    position: relative;
    top: -15px;
    font-family: "Poppins", sans-serif;
  }

  #our-story-subtitle {
    font-size: 1.125rem;
    margin: 1rem 0 0 0;
    font-family: "Poppins", sans-serif;
    font-weight: 400;
  }

  #email-form-title {
    font-weight: 400;
    margin: 0 auto;
    padding: 0 5%;
    text-align: center;
    font-family: "Poppins", sans-serif;
    font-size: 16px;
  }

  #emailField {
    width: 351px;
    height: 48px;
    position: relative;
    top: 10px;
    font-family: "Poppins", sans-serif;
  }

  #getStarted {
    font-size: 0.9rem;
    width: 130px;
    height: 40px;
    box-sizing: border-box;
    border-radius: 2px;
    border: 0;
    position: relative;
    top: 30px;
    font-family: "Poppins", sans-serif;
  }

  /* Main */

  .our-story-icons {
    padding: 0;
  }

  .our-story-icon {
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 5% 0;
  }

  .our-story-icon>.our-story-icon-left {
    width: 350px;
    height: auto;
  }

  .our-story-icons>div:nth-child(2n) {
    flex-direction: column;
  }

  #our-story-icon-heading {
    font-size: 1.625rem;
    font-family: "Poppins", sans-serif;
  }

  #our-story-icon-subheading {
    font-size: 1.125rem;
    font-family: "Poppins", sans-serif;
  }

  /* TV */
  #our-story-card-icon {
    width: 350px;
    height: auto;
  }

  /* Eleven */
  #our-story-card-img {
    width: 351px;
    height: 263px;
  }

  /* TV video */
  .our-story-card-video-tv {
    position: relative;
    top: -465px;
    left: 10px;
    width: 285px;
    z-index: -1;
  }

  /* iMac video */
  .our-story-card-video-pc {
    position: relative;
    top: -525px;
    left: 0px;
    width: 220px;
    z-index: -1;
  }

  .our-story-faq {
    padding: 50px 0;
  }

  .faq,
  .faq-answer {
    width: inherit;
    font-size: 1.2rem;
  }

  /* Footer */

  #our-story-faq-title {
    font-size: 1.625rem;
    text-align: center;
    font-family: "Poppins", sans-serif;
  }

  .footer .top {
    display: flex;
    align-items: center;
    position: relative;
    left: 0;
  }

  #footer-text {
    font-size: 13px;
    font-family: "Poppins", sans-serif;
  }
}
</style>
