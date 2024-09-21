<template>
  <div class="offerte">
    <div class="numero">
      <p id="ngiorni">{{ nGiorni }}</p>
    </div>
    <div class="desc">
      <p id="giorno">{{ giorno }}</p>
      <p id="orario">{{ orario }}</p>
      <div id="price">
        <p id="prezzo">{{ prezzo }}</p>
        <p id="euro">EURO</p>
      </div>
    </div>
  </div>
</template>
<script>
import schedaTemp from "./scheda.vue";
export default {
  name: "offerteTemp",
  props: ["giorno", "orario", "prezzo", "nGiorni"],
  components: {
    schedaTemp,
  },
  data() {
    return {
      var: "ciaone",
    };
  },
};
</script>
<style>
div.offerte {
  padding: 5%;
  background-color: white;
  display: flex;
  flex-direction: row;
  height: 20%;
  width: 40%;
  text-align: center;
}
div.numero,
div.desc {
  margin: 0;
}
div.desc {
  margin-top: 4%;
}
#ngiorni {
  font-family: "Six Caps";
  font-size: 14vw;
  margin: 0;
  color: #002952;
}
#giorno,
#orario,
#prezzo,
#euro {
  margin: 0;
  text-align: left;
}
#euro {
  bottom: 100%;
  position: relative;
  height: auto;
  font-size: 1vw;
}
#giorno {
  color: #95ff29;
  font-size: 5vw;
  font-weight: 600;
  position: inherit;
}
#prezzo {
  color: #95ff29;
  font-size: 7vw;
  font-weight: 700;
  margin-top: -9%;
}
#orario {
  margin-top: -7%;
  font-size: 2vw;
}
#price {
  display: flex;
  flex-direction: row;
}
</style>
