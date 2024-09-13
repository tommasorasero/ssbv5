<template>
  <div id="title">
    <h1 id="sestriere">Sestriere</h1>
    <h1 id="borgata">BORGATA</h1>
    <h1 id="scuola">Scuola</h1>
    <h1 id="sci">Sci</h1>
  </div>
</template>

<script>
export default {
  name: "titlePhrase",
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#title {
  position: fixed;
  text-shadow: 0 0 30px #00000080;
  text-align: center;
  color: #95ff29;
  text-align: left;
  margin: 0;
  padding: 0;
  border: 0;
  z-index: 2;
}
#borgata {
  font-weight: 900;
  font-size: 20vw;
  margin: 0;
  margin-top: -8%;
  padding: 0;
}
#sestriere {
  font-size: 4vw;
  font-weight: 700;
  margin: 0;
  margin-top: 3%;
  margin-left: 10%;
  padding: 0;
}
#scuola {
  font-size: 5vw;
  font-weight: 800;
  margin: 0;
  margin-top: -9%;
  margin-left: 1%;
  padding: 0;
}
#sci {
  font-size: 5vw;
  font-weight: 800;
  margin: 0;
  margin-top: -3%;
  margin-left: 3%;
  padding: 0;
}
</style>
