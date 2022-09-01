<template>
  <div class="login">
    <div class="header">
      <div class="logo">
        <RouterLink to="/"><img src="../assets/images/logo-netflix.png" alt="" srcset="" id="logo" /></RouterLink>
      </div>
    </div>
    <div class="loginForm">
      <div class="loginBox">
        <div class="loginBoxHeading">
          <h1 id="signInText">Sign In</h1>
          <input type="email" class="inputBox" v-model="state.email" placeholder="Email or phone number" />
          <span v-if="v$.email.$error">Proper email format is required.</span>
          <input type="password" class="inputBox" v-model="state.password" placeholder="Password" />
          <span v-if="v$.email.$error">Use at least six characters.</span>
          <button id="loginBtn" @click="submitLogin">Sign In</button>
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

<script>

import useValidate from '@vuelidate/core';
import { required, email, minLength } from '@vuelidate/validators';
import { reactive, computed } from 'vue';

export default {
  data() {
    return {

    }
  },
  setup() {
    const state = reactive({
      email: '',
      password: '',
    });
    const rules = computed(() => {
      return {
        email: { required, email },
        password: { required, minLength: minLength(6) },
      };
    });
    const v$ = useValidate(rules, state)
    return {
      state,
      v$,
    }
  },
  methods: {
    submitLogin() {
      this.v$.$validate()
      if (!this.v$.$error) {
        console.log(this.v$)
        this.$router.push({ name: "browse" });
      }
    }
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

body {
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
}

a:visited {
  color: #b3b3b3;
}

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
  background-color: rgba(0, 0, 0, 0.75);
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
  font-family: 'Poppins', sans-serif;
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
  font-family: 'Poppins', sans-serif;
}

#loginBtn {
  background: #e50914;
  border-radius: 4px;
  font-size: 16px;
  margin: 24px 0 12px;
  width: 100%;
  padding: 16px;
  color: white;
  font-family: 'Poppins', sans-serif;
}

#rememberMe {
  margin-left: 5px;
  color: #b3b3b3;
  font-size: 14px;
  font-family: 'Poppins', sans-serif;
}

#captcha {
  font-size: 13px;
  font-family: 'Poppins', sans-serif;
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

  #loginBtn {
    border: 0;
  }

  .loginBoxOther {
    margin-top: 1rem;
  }

  .loginBoxBelow {
    display: flex;
    justify-content: space-between;
  }
}
</style>
