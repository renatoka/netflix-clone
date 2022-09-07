<template>
  <div class="browse">
    <div class="header">
      <div class="logo">
        <RouterLink to="/"><img src="../assets/images/logo-netflix.png" alt="Netflix Logo" id="logo" /></RouterLink>
      </div>
    </div>
    <div class="browse-main">
      <div class="browse-main-title">
        <h1 id="browse-title">Who's watching?</h1>
      </div>
      <div class="browse-users">
        <div class="user">
          <RouterLink to="/movies"><img src="../assets/images/userOne.png" alt="" id="user-profile-picture" />
          </RouterLink>
          <p id="browse-user">John</p>
        </div>
        <div class="user">
          <RouterLink to="/movies"><img src="../assets/images/userTwo.png" alt="" id="user-profile-picture" />
          </RouterLink>
          <p id="browse-user">Sarah</p>
        </div>
        <div class="user">
          <RouterLink to="/movies"><img src="../assets/images/userThree.png" alt="" id="user-profile-picture" />
          </RouterLink>
          <p id="browse-user">Me</p>
        </div>
        <div class="user">
          <RouterLink to="/movies"><img src="../assets/images/userFour.png" alt="" id="user-profile-picture" />
          </RouterLink>
          <p id="browse-user">Liz</p>
        </div>
        <div class="user">
          <RouterLink to="/movies"><img src="../assets/images/userFive.png" alt="" id="user-profile-picture" />
          </RouterLink>
          <p id="browse-user">Jake</p>
        </div>
      </div>
      <div class="browse-manageProfile">
        <button id="manage-profile">Manage Profiles</button>
      </div>
    </div>
  </div>
</template>

<style>

.browse-main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 80vh;
}

.header {
  padding-top: 20px;
  margin: 0 56px 0 56px;
}

.browse-users {
  display: flex;
  gap: 2rem;
}

.browse-manageProfile {
  margin-top: 2rem;
}

/* Design */

#browse-title {
  color: #fff;
  font-size: 3.5vw;
  font-weight: unset;
  margin-bottom: 2rem;
}

#user-profile-picture {
  background-color: #333;
  background-repeat: no-repeat;
  background-size: cover;
  border: none;
  border-radius: 4px;
  height: 10vw;
  max-height: 200px;
  max-width: 200px;
  min-height: 84px;
  min-width: 84px;
  width: 10vw;
}

#user-profile-picture:hover {
  border: 2px solid white;
}

#browse-user {
  color: grey;
  font-size: 1.3vw;
  margin: 0.6em 0;
  min-height: 1.8em;
  text-align: center;
}

#manage-profile {
  background-color: transparent;
  border: 1px solid grey;
  color: grey;
  display: block;
  font-size: 1.2vw;
  letter-spacing: 2px;
  padding: 0.5em 1.5em;
}

#manage-profile:hover {
  border: 1px solid white;
  color: white;
}

@media only screen and (min-width: 350px) and (max-width: 767px) {

  #browse-title {
    color: #fff;
    font-size: 2rem;
    font-weight: unset;
    margin-bottom: 1rem;
    margin-top: 1rem;
  }

  .browse-users {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 0.85rem;
  }

  #browse-user {
    font-size: 3vw;
  }

  #manage-profile {
    background: inherit;
    border: 1px solid grey;
    color: grey;
    padding: 1rem;
    font-size: 0.8rem;
  }
}
</style>
