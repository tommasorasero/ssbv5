<template>
  <div class="back-img-cont">
    <img src="../assets/base_new.png" alt="image" id="baseImg" />
    <img src="../assets/Noverlay3.png" alt="image" id="overlay" />
  </div>
</template>

<script>
export default {
  name: "backgroundTemp",
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.back-img-cont {
  position: absolute;
  width: 100%;
  height: 500px;
}
#baseImg,
#overlay {
  position: absolute;
  margin: 0;
  margin-top: 7%;
  padding: 0;
  width: 100%;
}
#overlay {
  z-index: 2;
}
</style>
