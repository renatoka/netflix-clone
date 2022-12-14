import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyBQpo_FF9wy_VCg6U5AdhA3gsd_UEslzGQ",
  authDomain: "netflix-clone-e9eae.firebaseapp.com",
  projectId: "netflix-clone-e9eae",
  storageBucket: "netflix-clone-e9eae.appspot.com",
  messagingSenderId: "689313501708",
  appId: "1:689313501708:web:dfd44c551780514534d429",
  measurementId: "G-Z1KFEJR6HW"
};

// Initialize Firebase
initializeApp(firebaseConfig);

import './assets/main.css'

const app = createApp(App)

app.use(router)

app.mount('#app')
