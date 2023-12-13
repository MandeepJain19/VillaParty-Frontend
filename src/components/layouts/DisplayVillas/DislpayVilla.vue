<template>
  <div class="center" v-if="displayVillas">
    <div :class="List === true ? 'villa-container--list' : 'villa-container'">
      <div
        class="router"
        :class="List === true ? 'villa--list' : 'villa'"
        :v-if="index < totalVillas"
        v-for="(villa, index) in villas"
        :key="index"
      >
        <router-link
          :to="link(villa.name)"
          class="router"
          :class="List === true ? 'cols' : ''"
        >
          <villaImages
            :allImages="villa.images"
            :name="villa.name"
          ></villaImages>
        </router-link>
        <VillasTexts
          :class="List === true ? 'colsText' : ''"
          :name="villa.name"
          :location="villa.location"
          :startingPrice="villa.startingPrice"
          :availableDates="villa.availableDates"
          :description="villa.Description"
          :facilities="villa.Facilities"
          :equipments="villa.Equipments"
        ></VillasTexts>
      </div>
    </div>
    <div class="btn-center" v-if="villaToShow < totalVillas">
      <TheButton @click="showMore(2)">Show More</TheButton>
    </div>
  </div>
  <div v-else class="center">
    <h1>No villa available for this filter</h1>
  </div>
</template>
<style scoped>
.router {
  text-decoration: none;
  color: inherit;
}
.cols {
  grid-column: 1 / 3;
}
.colsText {
  grid-column: 3 / 4;
}
.center {
  margin: 0 auto;
}
.villa-container {
  display: grid;

  grid-template-columns: repeat(2, 1fr);
  column-gap: 4.8rem;

  gap: 9.6rem;
  justify-content: center;
  align-content: center;
}

.villa-container--list {
  /* Display List */
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 6.4rem;
}
.villa {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.4rem;
}
.villa--list {
  /* display list */
  display: grid;
  gap: 2.4rem;
  grid-template-columns: repeat(3, 1fr);
  grid-column: 1/4;
}
.btn-center {
  margin-top: 9.6rem;
  display: flex;
  justify-content: center;
}
@media (max-width: 65em) {
  .villa-container {
    grid-template-columns: 1fr;
  }
}
@media (max-width: 75em) {
  .villa-container--list {
    margin: 0 2rem;
  }
}
</style>
<script>
import TheButton from "../../UI/TheButton.vue";
import villaImages from "./VillaImages.vue";
import VillasTexts from "./VillaTexts.vue";
export default {
  props: ["filterVillas"],
  components: {
    villaImages,
    VillasTexts,
    TheButton,
  },
  data() {
    return {
      isList: false,
      villaToShow: 4,
      villaParty: "/villa-party",
      displayVilla: true,
    };
  },
  mounted() {
    window.addEventListener("resize", this.onWidthChange);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.onWidthChange);
  },
  methods: {
    showMore(x) {
      this.villaToShow += x;
    },
    onWidthChange() {
      const windowWidth = window.innerWidth;
      if (windowWidth <= 896 && this.$store.getters.isList) {
        this.$store.dispatch("closeList");
      }
    },
    link(name) {
      return `/villa-party/${name}`;
    },
  },
  computed: {
    List() {
      return this.$store.getters.isList;
    },
    villas() {
      return this.filterVillas.slice(0, this.villaToShow);
    },
    totalVillas() {
      return this.filterVillas.length;
    },
    displayVillas() {
      if (this.filterVillas.length == 0) return false;
      return true;
    },
  },
};
</script>
