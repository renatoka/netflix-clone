<template>
  <div class="login">
    <div class="header">
      <div class="logo">
        <img
          src="../assets/images/logo-netflix.png"
          alt=""
          srcset=""
          id="logo"
        />
      </div>
    </div>
    <div class="loginForm">
      <div class="loginBox">
        <div class="loginBoxHeading">
          <h1 id="signInText">Sign In</h1>
          <input
            type="text"
            id="inputBox"
            placeholder="Email or phone number"
          />
          <input type="text" id="inputBox" placeholder="Password" />
          <button id="loginBtn">Sign In</button>
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
          <span id="captcha"
            ><br />
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. Learn more.</span
          >
        </div>
      </div>
    </div>
    <div class="footer" hidden>
      <div class="footerTop">
        <span><a href="">Questions? Contact us.</a></span>
      </div>
      <div class="footerLinks">
        <span><a href="">FAQ</a></span>
        <span><a href="">Help Center</a></span>
        <span><a href="">Terms of Use</a></span>
        <span><a href="">Privacy</a></span>
      </div>
    </div>
  </div>
</template>

<style>
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
}

.loginBoxOther {
  margin-top: 30%;
}

/* .footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 150px;
  background: rgba(0,0,0,.75);
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
} */

/* 

.footerLinks a{
  margin-right: 50px;
} */

#signInText {
  color: white;
  font-weight: 500;
  font-size: 34px;
}

#inputBox {
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
  font-weight: 700;
  margin: 24px 0 12px;
  width: 100%;
  padding: 16px;
  color: white;
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
