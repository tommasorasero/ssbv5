<template>
  <div id="regContainer">
    <form @submit.prevent="handleSubmit">
      <input type="email" v-model="email" placeholder="Email" />
      <br />
      <input type="password" v-model="password" placeholder="Password" />
      <br />
      <input type="text" v-model="name" placeholder="name" />
      <br />
      <input type="text" v-model="surname" placeholder="surname" />
      <br />
      <button type="submit">Registrati</button>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import { supabase } from "../lib/supabaseClient";

export default {
  name: "registrationDialogue",
  setup() {
    const email = ref("");
    const password = ref("");
    const name = ref("");
    const surname = ref("");

    const handleSubmit = async () => {
      const { error } = await supabase.auth.signUp({
        email: email.value,
        password: password.value,
        name: name.value,
        surname: surname.value,
      });

      if (error) {
        console.error(error);
      } else {
        // Registrazione avvenuta con successo
      }
    };

    return {
      email,
      password,
      name,
      surname,
      handleSubmit,
    };
  },
};
</script>
<style>
#regContainer {
  background-color: white;
  border-radius: 10px;
  width: 90%;
  height: 70%;
  margin: 3%;
  text-align: center;
}
</style>
