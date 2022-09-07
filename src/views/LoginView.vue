<template>
  <div class="login">
    <div class="header">
      <div class="logo">
        <RouterLink to="/"><img src="../assets/images/logo-netflix.png" alt="Netflix Logo" id="logo" /></RouterLink>
      </div>
    </div>
    <div class="loginForm">
      <div class="loginBox">
        <div class="loginBoxHeading">
          <h1 id="signInText">Sign In</h1>
          <input type="email" class="inputBox" v-model="email" placeholder="Email or phone number" />
          <span id="warning" style="color: orange;" v-if="errMsg">{{errMsg}}</span>
          <input type="password" class="inputBox" v-model="password" placeholder="Password" />
          <span id="warning" style="color: orange;" v-if="errMsg">{{errMsg}}</span>
          <button id="loginBtn" @click="signIn">Sign In</button>
        </div>
        <div class="loginBoxBelow">
          <div class="loginBoxLeft">
            <input type="checkbox" id="checkbox" />
            <span id="rememberMe">Remember me</span>
          </div>
          <a href="#" id="forgotPassword">Need help?</a>
        </div>
        <div class="loginBoxOther">
          <span id="new">New to Netflix?</span>
          <a href="#" id="signUp" style="color: white"> Sign up now.</a>
          <span id="captcha"><br />
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. Learn more.
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from 'vue-router';
const email = ref("");
const password = ref("");
const errMsg = ref("");
const router = useRouter();

const signIn = () => {
  signInWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => {
      console.log('Successfully logged in.')
      router.push('/browse')
    })
    .catch((error) => {
      console.log(error)
      switch (error.code) {
        case 'auth/invalid-email':
          errMsg.value = 'Invalid email. Please try again.'
          brethis.errorMsgak;
        case 'auth/email-already-in-use':
          errMsg.value = 'The email address is already in use by another account.'
          break;
        case 'auth/user-not-found':
          errMsg.value = 'No account with that email was found.'
          break;
        case 'auth/missing-email':
          errMsg.value = 'Please enter your email.'
          break;
        default:
          errMsg.value = 'Something went wrong.'
      }
    })
}
</script>

<style>
.login {
  position: relative;
  min-height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("../assets/images/background.jpg");
  background-size: cover;
  display: flex;
  flex-direction: column;
}

.header {
  padding-top: 20px;
  margin: 0 56px 0 56px;
}

#logo {
  width: 167px;
  height: 45px;
}

.loginForm {
  display: flex;
  justify-content: center;
}

.loginBox {
  width: 450px;
  height: 660px;
  background-color: rgba(0, 0, 0, 0.8);
  padding: 60px 68px 40px;
  border-radius: 4px;
}

.loginBoxBelow {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.loginBoxOther {
  margin-top: 15%;
}

#signInText {
  color: white;
  font-weight: 500;
  font-size: 34px;
}

.inputBox {
  border: 0;
  border-radius: 4px;
  color: #fff;
  height: 50px;
  padding: 16px;
  width: 100%;
  margin-top: 20px;
  background: #333;
}

#loginBtn {
  background: #e50914;
  border-radius: 4px;
  font-size: 16px;
  margin: 24px 0 12px;
  width: 100%;
  padding: 16px;
  color: white;
  border: 0;
}

#rememberMe {
  margin-left: 5px;
  color: #b3b3b3;
  font-size: 14px;
}

#captcha {
  font-size: 13px;
}

@media only screen and (min-width: 350px) and (max-width: 739px) {
  .login {
    background: none;
    background-color: black;
  }

  .header {
    margin: 0;
    padding: 15px;
  }

  .loginBox {
    width: 100%;
    height: 100%;
    padding: 20px;
  }

  .loginBoxBelow {
    display: flex;
    justify-content: space-between;
  }
}
</style>
