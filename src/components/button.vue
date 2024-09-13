<template>
  <button :class="style" id="bottone">
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: "buttonTemp",
  props: {
    style: {
      type: String,
    },
  },
  methods: {
    mounted() {},
  },
};
</script>
<style>
#bottone {
  border: 0;
  padding-left: 2%;
  padding-right: 2%;
  margin: 2%;
  font-size: 1.2vw;
}

#bottone.green,
#bottone.white {
  border-radius: 10px;
  border: 0;
  text-decoration: none;
  box-shadow: #ffffff80 0 6px 10px -5px;
  width: 9vw;
  font-family: "Poppins", sans-serif;
  font-weight: 600;

  z-index: 3;
}
#bottone.white {
  color: #002852;
  background-color: white;
}
#bottone.green {
  background-color: #95ff29;
  color: #002852;
}
#bottone.plain {
  background-color: transparent;
  color: white;
}
#bottone.green:hover,
#bottone.white:hover {
  transform: translateY(-3px);
  box-shadow: #ffffff80 0 6px 10px -5px;
}
#bottone.green > a,
#bottone.white > a {
  color: #002852;
}
</style>
