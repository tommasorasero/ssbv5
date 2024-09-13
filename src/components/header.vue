<template>
  <div class="header">
    <div class="left">
      <router-link to="/">
        <img src="../assets/SCBlogoOld.png" alt="logo" class="logo" />
      </router-link>
    </div>

    <div class="right">
      <buttonTemp :style="white">
        <router-link to="">Login</router-link>
      </buttonTemp>
      <buttonTemp :style="white">
        <router-link to="testview">registra</router-link>
      </buttonTemp>
      <buttonTemp :style="green">
        <router-link to="">Prenota Ora</router-link>
      </buttonTemp>
      <buttonTemp :style="plain">
        <router-link to="team">Chi siamo</router-link></buttonTemp
      >
      <buttonTemp :style="plain">
        <router-link to="">Contatti</router-link></buttonTemp
      >
      <buttonTemp :style="plain">
        <router-link to="">Dove Siamo</router-link></buttonTemp
      >
      <buttonTemp :style="plain">
        <router-link to="consigli">Consigli</router-link></buttonTemp
      >
    </div>
  </div>
</template>

<script>
import buttonTemp from "../components/button.vue";
export default {
  name: "headerTemp",
  components: {
    buttonTemp,
  },

  mounted() {
    window.addEventListener("scroll", this.updateScrollPosition);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.updateScrollPosition);
  },
  methods: {
    updateScrollPosition() {
      this.scrollPosition =
        (window.scrollY || document.documentElement.scrollTop) / 5000;
      document.documentElement.style.setProperty(
        "--dynamic-background-color",
        this.scrollPosition
      );
    },
  },

  props: {},
  data() {
    return {
      scrittaVai: "Vai",
      scrittaPrenotaO: "Prenota Ora",
      green: "green",
      blue: "blue",
      white: "white",
      plain: "plain",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
a {
  text-decoration: none;
  border: 0;
  color: #ffffff;
}
.header > .right {
  padding: 1%;
  margin-right: 20px;
  width: 50%;
  display: flex;
  flex-direction: row-reverse;
}
@keyframes headerFade {
  80% {
    background-color: transparent;
  }
  to {
    background-color: #002852;
  }
}

.header {
  display: flex;
  position: fixed;
  z-index: 10;
  justify-content: space-between;
  text-decoration: none;
  flex-direction: row;
  height: fit-content;
  top: 0;
  width: 100%;
  height: 5, 2vw;

  animation: headerFade 0.5s ease-in-out infinite;
  animation-play-state: paused;
  animation-delay: calc(var(--dynamic-background-color) * -8s);
  animation-iteration-count: 1;
  animation-fill-mode: both;
}
.center {
  flex-grow: 4;
  width: 10%;
}
.logo {
  height: 5vw;

  padding: 10px;
}
a.button {
  text-decoration: none;
  font-family: "Poppins", sans-serif;
  color: #002852;
  height: fit-content;
  font-size: 1vw;
  border-radius: 10px;
  text-align: center;
  color: #ffffff;
  margin: auto;

  word-break: break-word;
}

a#prenota {
  background-color: #95ff29;
  box-shadow: #ffffff 0 6px 10px -5px;
  font-family: "Poppins", sans-serif;
  color: #002852;
}
a#login {
  background-color: #ffffff;
  box-shadow: #ffffff 0 6px 10px -5px;
  font-family: "Poppins", sans-serif;
  color: #002852;
}

a#prenota:hover {
  transform: translateY(-2px);
  box-shadow: #ffffff 0 6px 10px -5px;
}
a#login:hover {
  transform: translateY(-2px);
  box-shadow: #ffffff 0 6px 10px -5px;
}
</style>
