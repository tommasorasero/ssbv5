<template>
  <headerTemp @toggle-reg-overlay="toggleRegD"></headerTemp>
  <registrationDialogue
    v-if="showRegDialogue"
    @toggle-reg-overlay="toggleRegD"
  ></registrationDialogue>
  <div id="center">
    <div id="contentBody">
      <div>
        <blocco1></blocco1>
        <div id="white-gradient"></div>
        <featureTemp
          :title="titleF1"
          :featureBText="'scopri '"
          :freatureRoute="'/'"
        >
          <template v-slot:image>
            <img id="image" src="../assets/image1.png" alt="Image 1" />
          </template>
        </featureTemp>
        <featureTemp
          :title="titleF2"
          :style="right"
          :featureBText="'scopri '"
          :freatureRoute="'/'"
        >
          <template v-slot:image>
            <img id="image" src="../assets/image2.png" alt="Image 1" />
          </template>
        </featureTemp>
        <featureTemp
          :title="titleF3"
          :featureBText="'scopri '"
          :freatureRoute="'/'"
        >
          <template v-slot:image>
            <img id="image" src="../assets/image3.png" alt="Image 1" />
          </template>
        </featureTemp>
        <div id="proposteSec">
          <div id="barraBlu">
            <h2 id="proposteT">Le nostre Proposte</h2>
          </div>
          <div id="proposteC">
            <div class="flex-container">
              <pro-Temp>
                <template v-slot:image>
                  <img src="../assets/imageP1.png" alt="Image 1" />
                </template>
                <template v-slot:proposteOverlay>
                  <h3>Image 1 Title</h3>
                  <buttonTemp :style="white" :route="'testview'" :text="'vai'">
                  </buttonTemp>
                </template>
              </pro-Temp>
              <pro-Temp>
                <template v-slot:image>
                  <img src="../assets/imageP2.png" alt="Image 1" />
                </template>
                <template v-slot:proposteOverlay>
                  <h3>Image 2 Title</h3>
                  <buttonTemp
                    :style="white"
                    :route="'testview'"
                    :text="'vai'"
                  ></buttonTemp>
                </template>
              </pro-Temp>
              <pro-Temp>
                <template v-slot:image>
                  <img src="../assets/imageP3.png" alt="Image 1" />
                </template>
                <template v-slot:proposteOverlay>
                  <h3>Image 2 Title</h3>
                  <buttonTemp
                    :style="white"
                    :route="'testview'"
                    :text="'vai'"
                  ></buttonTemp>
                </template>
              </pro-Temp>
            </div>
          </div>
        </div>
        <div id="offerteCont">
          <h2 id="offtitolo">Le nostre offerte</h2>
          <div id="offerte">
            <offerteTemp
              :giorno="giornoOff1"
              :orario="orarioOff1"
              :prezzo="prezzoOff1"
              :nGiorni="nGiorniOff1"
            ></offerteTemp>
            <offerteTemp
              :giorno="giornoOff2"
              :orario="orarioOff2"
              :prezzo="prezzoOff2"
              :nGiorni="nGiorniOff2"
            ></offerteTemp>
          </div>
        </div>
        <div id="schedeContainer">
          <schedaTemp :desc="schedeS1">
            <template v-slot:icon>
              <img src="../assets/resort-1-1.png" id="iconImage" />
            </template>
            <template v-slot:links>
              <router-link :to="{ path: 'consigli', hash: '#assTitle' }"
                >Assicurazione</router-link
              ><br />
              <router-link :to="{ path: 'consigli', hash: '#bpTitle' }"
                >Buone pratiche per la tua lezione</router-link
              >
            </template>
          </schedaTemp>

          <schedaTemp :desc="schedeS2">
            <template v-slot:icon>
              <img src="../assets/idea-1.png" id="iconImage" />
            </template>
          </schedaTemp>

          <schedaTemp :desc="schedeS3">
            <template v-slot:icon>
              <img src="../assets/faq-1-1.png" id="iconImage" />
            </template>
          </schedaTemp>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import blocco1 from "../components/blocco1.vue";
import headerTemp from "../components/header.vue";

import featureTemp from "../components/feature1.vue";
import proTitle from "../components/proposteTitle.vue";
import proTemp from "../components/proposta1.vue";
import buttonTemp from "../components/button.vue";
import offerteTemp from "../components/offerte.vue";
import schedaTemp from "../components/scheda.vue";
import registrationDialogue from "../components/registrazione.vue";

export default {
  name: "App",
  components: {
    blocco1,
    featureTemp,
    headerTemp,

    "pro-Temp": proTemp,
    proTitle,
    buttonTemp,
    offerteTemp,
    schedaTemp,
    registrationDialogue,
  },
  data() {
    return {
      titleF1: "titolo",
      titleF2: "titolo",
      titleF3: "titolo",

      showB: false,
      scrittaBott: "scopri",
      giornoOff1: "SABATI",
      orarioOff1: "DALLE 13:00 ALLE 16:00",
      prezzoOff1: "220,00",
      nGiorniOff1: "6",

      giornoOff2: "SABATI",
      orarioOff2: "DALLE 13:00 ALLE 16:00",
      prezzoOff2: "220,00",
      nGiorniOff2: "7",

      schedeS1: "Servizi",
      schedeS2: "Consigli",
      schedeS3: "Dubbi?",
      showRegDialogue: false,

      imageUrl: "../src/components/imageP1.png",
      green: "green",
      blue: "blue",
      white: "white",
      right: "right",
      myHrefs: {
        privata: "value1",
        collettiva: "value2",
        freeride: "value3",
      },
    };
  },

  methods: {
    toggleRegD() {
      this.showRegDialogue = !this.showRegDialogue;
    },
    mouseoverM: function (event) {
      event.target.classList.toggle("hovered");
    },
    showBMethod() {
      this.showB = !this.showB;
    },
  },
  beforeDestroy() {},
  mounted() {},
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Six+Caps&display=swap");
div#center {
  text-align: center;
}
#white-gradient {
  width: 100%; /* Adjust the width as needed */
  height: 250px; /* Adjust the height as needed */
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 1)
  );
  margin-top: -270px;
  z-index: 9;
  position: relative;
}
#contentBody {
  margin-left: auto;
  margin-right: auto;
  max-width: 2500px;
}
.flex-container {
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 3;
  padding: 5%;
}

#offerteCont {
  position: relative;
  border-radius: 10px;
  background-color: #ffffff;
  z-index: 4;
}
#schedeContainer {
  min-height: 20vw;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 2%;
  background-color: #ffffff;
  z-index: 3;
}
h2#offtitolo {
  color: var(--greenBorgata);
  margin: 0;
  padding: 2%;
  text-align: center;
  background-color: transparent;
  position: relative;
}
#offerte {
  background-color: transparent;
  display: flex;
  flex-direction: row;
  width: 100%;
  text-align: center;
  z-index: 4;
  position: relative;
}
.blocco1 {
  margin-top: 5%;
}

#proposteSec {
  background-color: #002852;
  position: relative;
  z-index: 3;
  min-height: 50%;
}
.imageP {
  width: 100%;
  position: relative;
  margin: 0;
  padding: 0;
  border-radius: 5px;
}
#proTemp {
  display: block;
  transition: transform 10s ease infinite; /* Add a smooth transition */
  width: 100%;
  padding: 0;
}
#barraBlu {
  position: relative;
  text-align: center;
  color: #ffffff;
  margin: 0;
}

p {
  font-size: 100%;
}
@media screen and (max-width: 700px) {
  .left img {
  }
  #white-gradient {
    height: 120px;
    margin-top: -130px;
  }
}
@media screen and (max-width: 860px) {
  #bottone {
    margin-left: 2%;
    margin-right: 1%;

    margin-bottom: 0px;
  }
  .image-stack {
    margin-top: 35px;
  }
  .image-container {
    padding-bottom: 20%;
    padding-top: 12%;
  }
  #fp,
  #ft {
    font-size: 0.7rem;
  }
}
</style>
