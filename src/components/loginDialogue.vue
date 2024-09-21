<template>
  <form @submit.prevent="handleSubmit">
    <input type="email" v-model="email" placeholder="Email" />
    <input type="password" v-model="password" placeholder="Password" />
    <button type="submit">Login</button>
  </form>
</template>

<script>
import { ref } from "vue";
import { supabase } from "../lib/supabaseClient";

export default {
  name: "loginTemp",
  setup() {
    const email = ref("");
    const password = ref("");

    const handleSubmit = async () => {
      const { error } = await supabase.auth.signInWithPassword({
        email: email.value,
        password: password.value,
      });

      if (error) {
        console.error(error);
        // Handle error
      } else {
        // Login successful, redirect or show success message
      }
    };

    return {
      email,
      password,
      handleSubmit,
    };
  },
};
</script>
