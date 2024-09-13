<template>
  <div class="image-container">
    <div id="feature" :class="style">
      <h2 id="ft">{{ title }}</h2>
      <p id="fp">
        Triggering a CSS animation on scroll is a type of scroll-triggered
        animation. When people say "on scroll", what they usually mean is "when
        the element is scrolled into view". This tutorial will cover creating a
        CSS animation from scratch and applying it when the element has been
        scrolled into view. It will also cover the same technique using CSS
        transitions and how to apply the animation to multiple elements on a
        page.
      </p>
      <buttonTemp :style="white"
        ><router-link to="">Scopri {{ title }}</router-link></buttonTemp
      >
    </div>
    <slot name="image"></slot>
  </div>
</template>

<script>
import buttonTemp from "./button.vue";
export default {
  name: "featureTemp",
  data() {
    return {
      green: "green",
      blue: "blue",
      white: "white",
    };
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    style: {
      type: String,
    },
  },
  components: {
    buttonTemp,
  },
};
</script>

<style>
.image-container {
  position: relative;
  height: 100%;
  z-index: 4;
}

.image-container img {
  display: block;
  width: 100%;
}

#feature {
  width: 40%;
  position: absolute;
  background-color: #00295280;
  height: 95%;
  margin: 1%;
  color: white;
  border-radius: 10px;

  z-index: 4;
}
#feature > h2 {
  background-color: transparent;
}
#feature.right {
  right: 0;
}
#fp,
#ft {
  text-align: left;
}
</style>
