<template>
  <div class="header">
    <div class="left">
      <router-link to="/">
        <img src="../assets/SCBlogoOld.png" alt="logo" class="logo" />
      </router-link>
    </div>

    <div class="right">
      <buttonTemp :style="'white'" :route="'testview'" :text="'login'">
      </buttonTemp>
      <buttonTemp :style="white" :route="'testview'" :text="'registrati'">
      </buttonTemp>
      <buttonTemp :style="green" :route="'testview'" :text="'prenota'">
      </buttonTemp>
      <buttonTemp :style="plain" :route="'testview'" :text="'contatti'">
      </buttonTemp>
      <buttonTemp :style="plain" :route="'testview'" :text="'dove siamo'">
      </buttonTemp>
      <buttonTemp :style="plain" :route="'testview'" :text="'chi siamo'">
      </buttonTemp>
      <buttonTemp :style="plain" :route="'testview'" :text="'login'">
      </buttonTemp>
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
    emitEvent() {
      this.$emit("someEvent");
    },
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
      registrationD: false,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.header > .right {
  margin-right: 20px;
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
  top: 0;
  width: 100%;
  height: clamp(60px, 7rem, 150px);

  animation: headerFade 0.5s ease-in-out infinite;
  animation-play-state: paused;
  animation-delay: calc(var(--dynamic-background-color) * -8s);
  animation-iteration-count: 1;
  animation-fill-mode: both;
}
.center {
  flex-grow: 4;
}

.left {
  margin: 0;
  height: 100%;
  max-height: 150px;
}
</style>
