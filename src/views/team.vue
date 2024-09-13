<template>
  <headerTemp></headerTemp>
  <genericTitle :title="titolopg">
    <template v-slot:image>
      <img src="../assets/LIS_0989.jpg" alt="image" />
    </template>
  </genericTitle>
  <div id="chisiamoText">
    <h2 id="chisiamoTitle">Il nostro Team</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>
  </div>
  <div id="teamTree">
    <div id="team-flex">
      <maestroTemp
        v-for="member in maestri"
        :key="member.id"
        :memberData="member"
        :hovOption="true"
      ></maestroTemp>
    </div>
  </div>
  <div id="perche">
    <h2>Perchè scegliere noi</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>
    <div id="beatlesCont">
      <img src="../assets/beatles.jpg" />
    </div>
  </div>
</template>
<script>
import headerTemp from "../components/header.vue";
import maestroTemp from "../components/maestro.vue";
import genericTitle from "../components/genericTitle.vue";
import { supabase } from "../lib/supabaseClient";
export default {
  name: "team",
  components: {
    headerTemp,
    maestroTemp,
    genericTitle,
  },
  data() {
    return {
      titolopg: "chi siamo",
      maestri: [],
      option: false,
    };
  },
  methods: {
    async loadMaestri() {
      try {
        const { data, error } = await supabase.from("maestri").select();
        console.log(data);

        this.maestri = data.map((o) => ({
          name: o.nome_maestro + " " + o.cognome_maestro,
          id: o.id_maestro,
          picture: "src/assets/sagoma.png",
          p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
        }));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
  },
  mounted() {
    console.log("hello");
    this.loadMaestri();
  },
};
</script>
<style>
#chisiamoText h2,
#chisiamoText p,
#perche h2 {
  background-color: #ffffff;
  margin: 0;
  padding: 3%;
  color: #002952;
  z-index: 6;
}
#chisiamoText {
  position: relative;
  margin-top: -1%;
  z-index: 6;
}

#team-flex {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  background-color: #ffffff;
  color: #002952;
  padding: 5%;
}
#maestroCont {
  max-width: 15%;
  padding: 3%;
  position: relative;
}
#perche {
  background-color: #ffffff;

  color: #002952;
}
#perche h2,
#chisiamo h2 {
  margin: 0;
  padding: 3%;
}
#perche p {
  color: #002952;
}
#beatlesCont {
  left: 25%;
  position: relative;
  width: 50%;
}
#beatlesCont img {
  border-radius: 10px;
}
</style>
