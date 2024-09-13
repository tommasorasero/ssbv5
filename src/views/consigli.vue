<template>
  <headerTemp></headerTemp>
  <genericTitle :title="titolopg">
    <template v-slot:image>
      <img src="../assets/consigliImg.png" alt="image" />
    </template>
  </genericTitle>
  <div id="assicurazione">
    <div id="assTitle">
      <h2>Assicurazione</h2>
    </div>
    <div id="assCont">
      <img src="../assets/life-insurance-1.png" alt="assicIcon" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </div>
  </div>
  <div id="bp">
    <div id="bpTitle">
      <h2>Buone pratiche per la tua lezione</h2>
    </div>
    <div class="bp">
      <img src="../assets/image-loc.png" alt="assicIcon" />
      <div>
        <h2>Nel posto giusto, al momento giusto</h2>
        <p>
          Recati al nostro meeting point 10 minuti prima dell’inizio della tua
          lezione. Se tutto sta filando liscio, inizierai la lezione con qualche
          minuto di anticipo.
        </p>
      </div>
    </div>
    <div class="bpR">
      <img src="../assets/ski-1.png" alt="assicIcon" />
      <div>
        <h2>Preparati al meglio</h2>
        <p>
          Se devi affittare l’attrezzatura, abbi cura di arrivare al noleggio
          almeno 45' prima della lezione. Potresti non trovare subito gli
          scarponi della tua taglia, e nei giorni di alta stagione potresti
          trovare della coda!
        </p>
      </div>
    </div>
    <div class="bp">
      <img src="../assets/helmet-1.png" alt="assicIcon" />
      <div>
        <h2>Sciare leggeri è bello, sciare sicuri di più</h2>
        <p>
          Indipendentemente dal tuo livello e la tua età, indossare il casco è
          sempre una buona idea. Se sei minorenne, per te il casco è
          obbligatorio
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import genericTitle from "../components/genericTitle.vue";
import headerTemp from "../components/header.vue";
export default {
  components: { genericTitle, headerTemp },
  data() {
    return {
      titolopg: "consigli",
    };
  },
};
</script>
<style>
#assicurazione {
  position: relative;
  z-index: 5;
  margin-top: -1%;
}
.bp h2,
.bpR h2 {
  background-color: #ffffff;
  font-size: 2rem;
}
#assTitle,
#bpTitle {
  background-color: #002952;
  color: #ffffff;
  padding: 4%;
}

#assCont,
.bp,
.bpR {
  background-color: #ffffff;
  color: #002952;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  text-align: center;
}
.bpR {
  flex-direction: row-reverse;
}
.bp img,
.bpR img {
  width: 10%;
  height: 10%;
  margin: 10%;
}
#assCont img {
  margin: 5%;
  width: 15%;
}
.bp > div,
.bpR > div {
  width: 65%;

  padding: 5%;
}
</style>
