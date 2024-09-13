<template>
  <div id="container">
    <div
      id="scheda"
      ref="container"
      @mouseenter="mouseOverSchedaE"
      @mouseleave="mouseOverSchedaO"
    >
      <div id="icon" ref="icon">
        <slot name="icon"></slot>
      </div>
      <div id="desc" ref="desc">
        <p id="descP">{{ desc }}</p>
      </div>

      <div id="links" ref="links">
        <slot name="links"></slot>
      </div>
    </div>
  </div>
</template>
<script>
//setup
//import {ref} from 'vue'
const remove = false;
export default {
  name: "schedaTemp",
  props: ["desc"],
  data() {
    return {
      hidden: false,
    };
  },
  methods: {
    delayedE(delay) {
      setTimeout(function () {
        document.getElementById("links").classList.add("hovered"); // Call myFunction2 after the delay
      }, delay);
    },
    delayedL(delay) {
      setTimeout(function () {
        document.getElementById("container").classList.remove("hovered"); // Call myFunction2 after the delay
      }, delay);
    },
    mouseOverSchedaE() {
      this.hidden = !this.hidden;

      this.$refs.container.classList.add("hovered");
      this.$refs.icon.classList.add("hovered");
      this.$refs.desc.classList.add("hovered");
      this.$refs.links.classList.add("hovered");
    },
    mouseOverSchedaO() {
      this.hidden = !this.hidden;

      this.$refs.container.classList.remove("hovered"); // Call myFunction2 after the delay
      this.$refs.icon.classList.remove("hovered");
      this.$refs.desc.classList.remove("hovered");
      this.$refs.links.classList.remove("hovered");
    },
  },
};
</script>
<!-- module=mystyles-->
<style>
img#iconImage {
  position: relative;
  max-width: 20%;
}
p#descP {
  position: relative;
  max-width: 100%;
  text-align: center;
}
p {
  margin: 0;
}
div#desc {
  position: absolute;
  width: 100%;
  top: 27%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 5%;
  font-size: 2vw;
  text-align: center;
  transition: 0.3s ease-in-out;
}
#icon {
  position: absolute;
  width: 40%;
  top: 10%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 5%;
  transition: 0.3s ease-in-out;
}
#links {
  visibility: hidden;
  font-weight: 400;
  bottom: 0%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.5vw;
}
#scheda {
  background-color: #f0f0f0;
  height: 10vw;
  margin: 2%;
  padding: 2%;
  width: 80vw;
  transition: 0.3s ease-in-out;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #002952;
}
#container {
  text-align: center;
  position: relative;
  background-color: white;
  width: 33%;
  z-index: 3;
  min-height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
#scheda.hovered {
  color: #002952;
}
#links.hovered {
  visibility: visible;
  color: #002952;
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: auto;
  font-size: 1.5vw;
  text-align: center;
  transition: 0.6s ease-in-out;
  transition-delay: 0.4s;
}
a.link {
  color: #002952;
  padding: 3%;
  width: 100%;
  position: relative;
}
#icon.hovered {
  top: 2vw;
  left: 5vw;
}
#desc.hovered {
  top: 1.4vw;
}
</style>
