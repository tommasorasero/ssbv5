<template>
  <div id="maestroCont">
    <img
      id="fotoM"
      :src="memberData.picture"
      alt="sagoma"
      @mouseenter="hoveredM"
      @mouseleave="notHoveredM"
    />
    <h3 id="nomeDesc">
      {{ memberData.name }}
    </h3>
  </div>
  <div
    id="maestroScheda"
    v-show="(divHov || pHov) && hovOption"
    :style="descriptionStyle"
    @mouseenter="pHoveredM"
    @mouseleave="pNotHoveredM"
  >
    <p>
      {{ memberData.p }}
    </p>
  </div>
</template>
<script>
export default {
  name: "maestroTemp",
  data() {
    return {
      divHov: false,
      pHov: false,
      descriptionStyle: {},
    };
  },
  props: {
    memberData: {
      type: Object,
    },
    hovOption: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    hoveredM() {
      this.divHov = true;
      const imageRect = event.target.getBoundingClientRect();

      const viewportW = document.documentElement.clientWidth;
      const viewportH = document.documentElement.clientHeight;

      // Calculate the position based on the image's position and dimensions
      let left = 0;
      let top = 0;
      const pTop = imageRect.top / viewportH;
      const pLeft = imageRect.left / viewportW;
      // Add some spacing between the image and description

      if (pLeft > 0.6) {
        left = 50;
      } else {
        left = (imageRect.left / viewportW) * 100 - 5;
      }
      top = event.target.parentElement.offsetTop + 0.1 * viewportW;

      this.descriptionStyle = {
        left: `${left}vw`,
        top: `${top}px`,
      };
    },
    notHoveredM() {
      this.divHov = false;
    },
    pHoveredM() {
      this.pHov = true;
    },
    pNotHoveredM() {
      this.pHov = false;
    },
  },
};
</script>
<style>
h3,
#fotoM,
#maestroCont {
  text-align: center;
  z-index: 3;
  position: relative;
}
#fotoM {
  border-radius: 30px;
  border: #95ff29;
}
h3 {
  position: absolute;
  bottom: 10%;
  right: 2%;
  background-color: #95ff29;
  padding-left: 2%;
  padding-right: 2%;
  border-radius: 10px;
  font-size: 0.8rem;
}
#maestroScheda {
  position: absolute;

  background-color: white;
  border-radius: 10px;
  border: 5px solid #95ff29;
  padding: 3%;
  z-index: 9;
  max-width: 20%;
}
</style>
