<template>
  <button :class="style" id="bottone">
    <router-link :to="route">{{ text }}</router-link>
  </button>
</template>
<script>
export default {
  name: "buttonTemp",
  props: {
    style: {
      type: String,
    },
    text: {
      type: String,
    },
    route: { type: String },
  },
  methods: {
    mounted() {},
  },
};
</script>
<style>
#bottone {
  border: 0;
  padding: 1%;
  margin: clamp(3px, 2%, 10px);
  font-size: 2 rem;
  text-align: center;
}
button > a {
  font-size: clamp(10px, 1rem, 2vw);
}

#bottone.green,
#bottone.white {
  border-radius: 10px;
  border: 0;
  text-decoration: none;
  box-shadow: #ffffff80 0 6px 10px -5px;

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
a {
  text-decoration: none;
  border: 0;
  color: #ffffff;
  margin: 0;
}
@media screen and (max-width: 860px) {
  #bottone {
    margin-left: 2%;
    margin-right: 1%;

    margin-bottom: 0px;
  }
}
</style>
