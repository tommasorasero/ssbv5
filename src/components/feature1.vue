<template>
  <div class="image-container">
    <div id="feature" :class="style">
      <h2 id="ft">{{ title }}</h2>
      <p id="fp">
        Triggering a CSS animation on scroll is a type of scroll-triggered
        animation. When people say "on scroll", what they usually mean is "when
        the element is scrolled into view". This tutorial will cover creating a
      </p>
      <buttonTemp
        :style="white"
        :route="featureRoute"
        :text="featureBText + title"
      ></buttonTemp>
    </div>
    <div id="image-cont" :class="style">
      <slot name="image"></slot>
    </div>
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
    featureRoute: {
      type: String,
    },
    featureBText: {
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
  background-color: white;
  height: 100%;
  z-index: 4;
  padding: 3%;
  padding-bottom: 15%;
  padding-top: 8%;
}

#image-cont img {
  display: block;
  width: 86%;
  right: 0;
  position: relative;
  margin-left: 15%;
  border-radius: 10px;
  box-shadow: #00000080 0 4px 8px 0px;
}

#feature {
  width: 55%;
  top: 0;
  position: absolute;
  background-color: #00295280;
  margin: 1%;
  color: white;
  border-radius: 10px;
  padding-bottom: 2%;
  box-shadow: #00000080 0 4px 8px 0px;

  z-index: 4;
}
#feature > h2 {
  background-color: transparent;
  font-size: 1.5rem;
}
#feature.right {
  right: 0;
}
#image-cont.right img {
  margin-right: 15%;
  margin-left: 0;
  position: relative;
}
#fp,
#ft {
  text-align: left;
  font-size: 1rem;
}
</style>
