<template>
  <div id="regBackground">
    <div id="regContainer">
      <button id="closeDialogue" @click="this.$emit('toggleRegOverlay')">
        <img src="../assets/closeIcon.png" class="closeIcon" />
      </button>
      <div id="topElementsReg">
        <div>
          <h1 id="regTitle">Registrati</h1>
        </div>
      </div>

      <form @submit.prevent="handleSubmit()">
        <input type="email" v-model="email" placeholder="Email" required />
        <br />
        <input v-model="password" :type="passwordType" placeholder="Password" />
        <button @click="togglePassword()">
          <span v-if="passwordType === 'password'">Show</span>
          <span v-else>hide</span>
        </button>
        <br />
        <input
          v-model="confirmPassword"
          placeholder="Confirm Password"
          :type="passwordType"
          required
        />
        <br />
        <input type="text" v-model="name" placeholder="name" />
        <br />
        <input type="text" v-model="surname" placeholder="surname" />
        <br />
        <div>
          <p v-if="errorMessage">{{ errorMessage }}</p>
        </div>
        <button type="submit">ciao</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { supabase } from "../lib/supabaseClient";
import buttonTemp from "../components/button.vue";

const email = ref("");
const password = ref("");
const name = ref("");
const surname = ref("");
const confirmPassword = ref("");
const errorMessage = ref("");
const passwordType = ref("password");

const togglePassword = () => {
  passwordType.value = passwordType.value === "password" ? "text" : "password";
};
const handleSubmit = async () => {
  console.log("submit");
  if (password.value !== confirmPassword.value) {
    errorMessage.value = "Le password che hai inserito non combaciano";
    return;
  }

  if (!isValidEmail(email.value)) {
    errorMessage.value = "formato email non valido";
    return;
  }

  if (!isValidPassword(password.value)) {
    errorMessage.value =
      "La password deve contenere almeno 8 caratteri e un carattere speciale: @$!%*#?&";
    return;
  }
  try {
    const { data, error } = await supabase.auth.signUp({
      email: email.value,
      password: password.value,
    });
    if (error) {
      if (error.message.includes("email")) {
        //gestire caso di errori comuni registrazione
        console.log("email rater log");
      }
      console.log(error.message);
    }
  } catch (error) {
    errorMessage.value = error.message;
  }
};
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const isValidPassword = (password) => {
  const passwordRegex =
    /^(?=.*[!@#$%^&*()_+|}{\[\]:;<>?,./])(?=.{8,})[a-zA-Z0-9!@#$%^&*()_+|}{\[\]:;<>?,./]+$/;
  return passwordRegex.test(password);
};
</script>
<style>
#regContainer {
  background-color: var(--blueBorgata);
  border-radius: 10px;
  width: 80%;
  margin: 5%;
  padding: 5%;
  padding-top: 1%;
  text-align: center;
  top: 12%;
}
#regBackground {
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 11;
  background-color: var(--blueBorgataLow);
}
#topElementsReg > div {
  font-size: 0.5rem;
  color: var(--greenBorgata);
}
#regContainer > button {
  background-color: transparent;
  border: 0px;
  left: 50%;
  position: relative;
}
#regTitle {
  margin: 1%;
}

#regContainer > form,
#topElementsReg {
  width: 90%;
  border-radius: 10px;
  margin-left: 5%;

  position: relative;
}
#topElementsReg {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  top: 5%;
}

#regContainer > form,
input {
  color: var(--blueBorgata);
  background-color: white;
  border: 0px;
  text-align: left;
}
</style>
