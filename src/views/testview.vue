<template>
  <headerTemp></headerTemp>
  <h1 id="prenTitle">Prenota la tua lezione</h1>
  <div id="flex-row-prenotazioni">
    <div id="prenLeft">
      <div id="prenotazioneContent">
        <div id="selezionaMaestro">
          <h2>scegli il maestro</h2>
          <button @click="changeOpenDD" v-if="!openDD" id="mostraMaestri">
            mostra maestri
          </button>
          <button @click="changeOpenDD" v-if="openDD" id="nascondiMaestri">
            nascondi maestri
          </button>

          <div id="maestriList" v-if="openDD">
            <div
              id="divMaestro"
              v-for="(maestro, id_maestro) in maestri"
              @click="selectMaestro(maestro)"
              :class="{ selected: maestro == selMaestro }"
            >
              <maestroTemp
                :key="id_maestro"
                :memberData="maestro"
              ></maestroTemp>
            </div>
          </div>

          <button @click="deselectMaestro" id="annullaS" v-if="selMaestro">
            annulla
          </button>
        </div>
        <div id="selezionaData">
          <h2>scegli la data</h2>
          <el-date-picker
            v-model="selDate"
            type="date"
            placeholder="Pick a day"
            :disabled-date="disabledDate"
            :size="size"
            @change="dateChange"
          />
        </div>

        <div id="selezionaOra">
          <h2>scegli l'orario</h2>
          <div v-if="selDate" id="slotList">
            <div
              v-for="(slot, index) in slots"
              :ref="slot.slot"
              @click="selectSlot(slot)"
              :class="{
                selected: slot.selected,
                sameMaestro: containsMaestro(slot.maestri),
                disabled: slotSenzaMaestro(slot.maestri),
              }"
            >
              <p>
                {{ slot.orario }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="prenRight">
      <div id="resoconto" :class="{ fixed: scrollPosition > 180 }">
        <h2>aggiungi al carrello</h2>
        <div id="res1">
          <p>{{ nOreSel }}</p>
          <p v-if="nOreSel == 1">Ora</p>
          <p v-if="nOreSel != 1">Ore</p>
        </div>
        <div id="res3">
          <p>$ {{ costo }}</p>
        </div>
        <buttonTemp
          :style="'green'"
          :text="'aggiungi al carrello'"
          :route="'/'"
        >
          Aggiungi al carrello</buttonTemp
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

import { supabase } from "../lib/supabaseClient";
import headerTemp from "../components/header.vue";
import maestroTemp from "../components/maestro.vue";
import buttonTemp from "../components/button.vue";

const selMaestro = ref(null);
const maestri = ref([]);
let maestriDisp = [];
const openDD = ref(false);
const selDate = ref(null);
const availab = ref([]);
const size = "large";
const lezioniLoaded = [];
const maestriCom = ref([]);
const nOreSel = ref(0);
const costo = ref(0);
const scrollPosition = ref(null);

const seasonBeg = ref(new Date(2024, 11, 1));
const seasonEnd = ref(new Date(2025, 3, 15));
const unavailableDateRanges = ref([]);
const lezioni = [];
const oreOccupate = [];
const lezioniRef = ref([]);
const slots = ref([
  { slot: 9, orario: "09:00-10:00", maestri: [], selected: false },
  { slot: 10, orario: "10:00-11:00", maestri: [], selected: false },
  { slot: 11, orario: "11:00-12:00", maestri: [], selected: false },
  { slot: 12, orario: "12:00-13:00", maestri: [], selected: false },
  { slot: 13, orario: "13:00-14:00", maestri: [], selected: false },
  { slot: 14, orario: "14:00-15:00", maestri: [], selected: false },
  { slot: 15, orario: "15:00-16:00", maestri: [], selected: false },
]);

function slotSenzaMaestro(array) {
  return !array.some((id) => id != null);
}
const selectSlot = (slot) => {
  if (slot.maestri.length != 0) {
    slot.selected = !slot.selected;
    maestriCom.value = maestriComuni();
    nOreSel.value = 0;
    for (slot of slots.value) {
      if (slot.selected == true) nOreSel.value++;
    }
    costo.value = 48 * nOreSel.value;
  }

  console.log(slots);
  console.log("UPDATE");
};
const containsMaestro = (array) => {
  return array.some((number) => maestriCom.value.includes(number));
};

function maestriComuni() {
  const selSlotsMaestri = slots.value
    .filter((obj) => obj.selected)
    .map((obj) => obj.maestri);

  if (selSlotsMaestri.length === 0) return [];
  return selSlotsMaestri.reduce((intersection, currentArray) => {
    return intersection.filter((num) => currentArray.includes(num));
  });
}

const disabledDate = (time) => {
  if (time < seasonBeg.value) return true;
  if (time > seasonEnd.value) return true;
  else {
    for (const tuple of availab.value) {
      if (time <= tuple[1] && time >= tuple[0]) return false;
    }
    return true;
  }
};
const previousDay = (dateObj) => {
  return new Date(
    dateObj.getFullYear(),
    dateObj.getMonth(),
    dateObj.getDate() - 1
  );
};
const dayAfter = (dateObj) => {
  return new Date(
    dateObj.getFullYear(),
    dateObj.getMonth(),
    dateObj.getDate() + 1
  );
};

const dateChange = () => {
  maestriDisp = [];
  if (selDate.value) {
    loadLezioni();
    loadSlots();
  } else {
    for (const s of slots.value) {
      s.maestri = [];
    }
  }

  //load maestri negli slot
};
const updateSlots = () => {
  let nOre = 0;
  const oreOccupate = [];
  for (const l of lezioniRef.value) {
    nOre =
      Number(l.alle.split(":")[0].replace(/^0+/, "")) -
      Number(l.dalle.split(":")[0].replace(/^0+/, ""));
    oreOccupate.push([nOre, l.dalle, l.alle, l.maestroId]);
  }
  for (const s of slots.value) {
    for (const o of oreOccupate) {
      if (
        s.slot >= o[1].split(":")[0].replace(/^0+/, "") &&
        s.slot < o[2].split(":")[0].replace(/^0+/, "") &&
        s.maestri.includes(o[3])
      ) {
        s.maestri.splice(s.maestri.indexOf(o[3]), 1);
      }
    }
  }
  console.log(slots);
};
const loadSlots = () => {
  if (selMaestro.value) {
    for (const s of slots.value) {
      s.maestri = [selMaestro.value.id];
    }
  } else {
    for (const e of availab.value) {
      if (e[0] <= selDate.value && e[1] >= selDate.value) {
        maestriDisp.push(e[2]);
      }
    }

    for (const s of slots.value) {
      for (const m of maestriDisp) s.maestri.push(m);
    }
  }
};

const loadLezioni = async () => {
  const adjDate = dayAfter(selDate.value);
  lezioniRef.value = [];

  if (selMaestro.value != null) {
    try {
      let { data, error } = await supabase
        .from("lezioni")
        .select("dalle,alle")
        .eq("data", adjDate.toISOString().split("T")[0])
        .eq("id_maestro", selMaestro.value.id);
      //.eq("id_maestro", selMaestro.value.id).group()
      for (const l of data) {
        lezioniRef.value.push({
          dalle: l.dalle,
          alle: l.alle,
          maestroId: selMaestro.value.id,
        });
      }
    } catch (error) {
      console.log(error);
    }
  } else {
    try {
      let { data, error } = await supabase
        .from("lezioni")
        .select("dalle,alle,id_maestro")
        .eq("data", adjDate.toISOString().split("T")[0]);
      for (const l of data) {
        lezioniRef.value.push({
          dalle: l.dalle,
          alle: l.alle,
          maestroId: l.id_maestro,
        });
      }
    } catch (error) {
      console.log(error);
    }
  }
  updateSlots();
};
const changeOpenDD = () => {
  openDD.value = !openDD.value;
};
const selectMaestro = (maestro) => {
  selDate.value = null;
  selMaestro.value = maestro;
  console.log(selMaestro.value);
  loadAvailability();
};
const deselectMaestro = () => {
  selMaestro.value = null;
  loadAvailability();
  dateChange();
};
const loadAvailability = async () => {
  unavailableDateRanges.value = [];
  availab.value = [];
  if (selMaestro.value != null) {
    try {
      let { data, error } = await supabase
        .from("disponibilita")
        .select("inizio_periodo,fine_periodo")
        .eq("id_maestro", selMaestro.value.id);
      for (const o of data) {
        availab.value.push([
          new Date(o.inizio_periodo),
          new Date(o.fine_periodo),
        ]);
      }
    } catch (error) {
      console.log(error);
    }
  } else {
    try {
      let { data, error } = await supabase
        .from("disponibilita")
        .select("inizio_periodo,fine_periodo,id_maestro");
      for (const o of data) {
        availab.value.push([
          new Date(o.inizio_periodo),
          new Date(o.fine_periodo),
          o.id_maestro,
        ]);
      }
    } catch (error) {
      console.log(error);
    }
  }

  //compongo array unavailable
  if (availab.value[0] != null) {
    if (seasonBeg.value < availab.value[0][0])
      unavailableDateRanges.value.push([
        seasonBeg.value,
        previousDay(availab.value[0][0]),
      ]);
    const range = availab.value.length - 1;
    for (let i = 0; i < range; i++) {
      let unavailFirstDay = dayAfter(availab.value[i][1]);
      let unavailLastDay = previousDay(availab.value[i + 1][0]);
      unavailableDateRanges.value.push([unavailFirstDay, unavailLastDay]);
    }
    if (seasonEnd.value > availab.value[availab.value.length - 1][1])
      unavailableDateRanges.value.push([
        dayAfter(availab.value[availab.value.length - 1][1]),
        seasonEnd.value,
      ]);
  }
};

onBeforeUnmount(() => {
  window.removeEventListener("scroll", updateScrollPosition);
});
onMounted(() => {
  window.addEventListener("scroll", updateScrollPosition);
  loadMaestri();
  loadAvailability();
});
const updateScrollPosition = () => {
  scrollPosition.value = window.scrollY || document.documentElement.scrollTop;
};
const channel = supabase
  .channel("availabChannel")
  .on(
    "postgres_changes",
    {
      event: "*",
      schema: "public",
      table: "lezioni",
    },
    (event) => {
      console.log(event);
      dateChange();
    }
  )
  .subscribe();

const loadMaestri = async () => {
  try {
    const { data, error } = await supabase.from("maestri").select();
    for (const o of data) {
      maestri.value.push({
        name: o.nome_maestro,
        id: o.id_maestro,
        cognome: o.cognome_maestro,
        picture: "src/assets/sagoma.png",
        p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      });
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
</script>

<style>
.fixed {
  position: fixed;
  top: 8vw;
}
#flex-row-prenotazioni {
  display: flex;
  direction: row;
}
#prenLeft {
  flex: 0 1 80%;
}
#prenRight {
  flex: 0 1 20%;
}

#res1 {
  display: flex;
  flex-direction: row;
}
#slotList {
  display: flex;
  flex-direction: row;

  justify-content: left;
  flex-wrap: wrap;
}
#slotList > div {
  padding: 1%;
  margin: 2%;

  border-radius: 10px;
  border: solid grey;
  transition: 0.1s ease-in-out;
}
#slotList > div:hover {
  transform: translate(0, -10%);
}
#slotList .sameMaestro {
  background-color: #95ff2980;
}
#slotList .selected {
  background-color: #95ff29;
}
#slotList .disabled {
  background-color: rgb(203, 203, 203);
  color: rgb(167, 167, 167);
}

#mostraMaestri,
#annullaS,
#nascondiMaestri {
  border: 0;
  background-color: transparent;
  font-family: "Poppins";
  padding-left: 4%;
  color: #002852;
}
#annullaS {
  color: red;
}
#divMaestro.selected {
  width: 18%;
}
#selezionaMaestro h2,
#selezionaData h2,
#selezionaOra h2 {
  font-size: 1rem;
}

#maestriList {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  background-color: white;
  padding: 5%;
}

#prenTitle {
  font-size: 3rem;
  padding-left: 2%;
  padding-top: 8%;
  color: #95ff29;
}
#selezionaMaestro,
#selezionaData,
#selezionaOra,
#resoconto {
  margin: 2vw;
  border-radius: 10px;
  background-color: white;
  padding: 3%;
}
#resoconto {
  margin-left: 1vw;
}
#selezionaMaestro {
}
#divMaestro {
  width: 15%;
  transition: width 0.1s ease-in-out;
  margin: 1%;
}
#divMaestro:hover {
  transform: translate(0, -5%);
}
#selezionaMaestro {
  background-color: white;
}
#selezionaMaestro h2,
#selezionaData h2,
#selezionaOra h2,
#resoconto h2 {
  background-color: white;
  font-size: 1rem;
}
</style>
