<template>
  <titlePhrase></titlePhrase>
  <div class="image-stack">
    <div class="image-stack__item image-stack__item--top">
      <img src="../assets/Noverlay3.png" alt="img" />
    </div>
    <div class="image-stack__item image-stack__item--bottom">
      <img src="../assets/base_new.png" alt="image" />
    </div>
  </div>
</template>

<script>
import titlePhrase from "./title.vue";

export default {
  name: "blocco1",
  components: {
    titlePhrase,
  },
  props: {},
};
</script>
<style scoped>
.image-stack {
  display: grid;

  grid-template-columns: repeat(12, 1fr);
  position: relative;
  margin-top: 1%;
}
.image-stack__item--top {
  grid-column: 1 / span 12;
  grid-row: 1;
  z-index: 2;
  margin-top: 8%;
}
.image-stack__item--bottom {
  grid-column: 1 / span 12;
  grid-row: 1;
  z-index: 0;
  margin-top: 8%;
}
img {
  width: 100%;
}
.fixed {
  position: fixed;
  text-align: center;
  z-index: 1;
}
@media screen and (max-width: 860px) {
  .image-stack {
    margin-top: 35px;
  }
}
</style>
