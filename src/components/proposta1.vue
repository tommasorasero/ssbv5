<template>
  <div
    class="flex-item"
    id="image1"
    ref="image1"
    @mouseenter="imageHovered"
    @mouseleave="imageNotHovered"
  >
    <slot name="image"></slot>
    <div ref="imageOver" class="overlay">
      <slot name="proposteOverlay"></slot>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
const activeColor = ref("red");
import buttonTemp from "./button.vue";
export default {
  name: "proTemp",
  props: ["imageSrc"],
  methods: {
    imageHovered() {
      this.$refs.image1.classList.add("hoveredImg");
      this.$refs.imageOver.classList.add("hoveredImg");
    },
    imageNotHovered() {
      this.$refs.image1.classList.remove("hoveredImg");
      this.$refs.imageOver.classList.remove("hoveredImg");
    },
  },
  components: {
    buttonTemp,
  },
  data() {
    return {
      scrittaVai: "Vai",
    };
  },
};
</script>

<style>
/*
faq-1-1    class="picture"
    @mouseenter="isHovered = !isHovered"
    @mouseleave="isHovered = !isHovered"
    :class="{ hovered: isHovered }"
  >
    <slot name="image&title"></slot>
  </div>
  */
.flex-item {
  position: relative;
  margin: 0;
  flex: 0 0 30%;
  margin-top: 5%;
  margin-bottom: 5%;
  font-size: 1vw;
  transition: 0.3s ease-in-out;
}
.flex-item img {
  display: block;
  max-width: 100%;
  text-align: center;

  object-fit: cover;
}

.overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

  color: #fff;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.overlay h3 {
  margin: 0;
  color: #002852;
  z-index: 3;
  padding: 2%;
}

#image1.hoveredImg {
  flex: 0 0 40%;
  font-size: 2.5vw;
  margin: 0;
  border: 10px solid #95ff29;
  border-radius: 10px;
}
#image1.hoveredImg::before {
  background: linear-gradient(to left bottom, #ffffff00, #95ff29);

  z-index: 1;
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
