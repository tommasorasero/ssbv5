<template>
  <div id="titleCont">
    <div id="overlayT"></div>
    <h1 id="titleG">{{ title }}</h1>

    <slot name="image"></slot>
  </div>
</template>
<script>
export default {
  name: "genericTitle",
  props: ["title"],
};
</script>
<style>
#titleCont {
  position: relative;
}
#titleCont > img {
  z-index: 3;
  height: 100%;
}
h2 {
  font-size: 3vw;
}
#titleG {
  width: auto;
  position: absolute;

  bottom: 1%;
  margin: 0%;

  font-size: 5rem;
  color: #95ff29;
  z-index: 5;
}
#overlayT {
  background: linear-gradient(to left bottom, #ffffff00, #00000080);
  width: 100%;
  height: 100%;

  position: absolute;
  z-index: 4;
}
</style>
