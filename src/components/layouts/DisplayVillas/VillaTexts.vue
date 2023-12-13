<template>
  <div class="info" :class="List === true ? 'info--list' : ''">
    <div class="row1" :class="List === true ? 'row1--list' : ''">
      <div class="name">{{ name }}</div>
      <div class="price">Starting at ${{ startingPrice }} / Nt</div>
    </div>
    <div class="row2">
      <i class="ph ph-map-pin"></i> `{{ location.region }}, {{ location.city }}`
    </div>
    <div class="row3"><hr /></div>
    <div class="row4" :class="List === true ? 'row4--list' : ''">
      <div class="facility">
        <div><i class="ph ph-users"></i></div>
        <div>{{ facilities.capacity }}</div>
        <div><i class="ph ph-bed"></i></div>
        <div>{{ facilities.bedRoom }}</div>
        <div><i class="ph ph-game-controller"></i></div>
        <div>{{ facilities.games }}</div>
      </div>
      <div class="btn">
        <TheButton @click="showConf()">Book Now!!</TheButton>
      </div>
    </div>
  </div>
</template>

<script>
import TheButton from "../../UI/TheButton.vue";

export default {
  props: [
    "name",
    "location",
    "startingPrice",
    "availableDates",
    "description",
    "facilities",
    "equipments",
  ],
  components: {
    TheButton,
  },
  data() {
    return {};
  },
  computed: {
    List() {
      return this.$store.getters.isList;
    },
  },
  methods: {
    showConf() {
      const date = new Date();
      const currentDate = `${date.getFullYear()}-${(
        "0" +
        (date.getMonth() + 1)
      ).slice(-2)}-${("0" + date.getDate()).slice(-2)}`;
      console.log(this.$store.getters.filterDate);
      const payload = {
        name: this.name,
        startDate: this.$store.getters.filterDate || currentDate,
        endDate: this.$store.getters.filterDate || currentDate,
      };
      this.$store.commit("changeFilterDate", payload.startDate);
      this.$store.dispatch("bookVilla", payload);
    },
  },
};
</script>

<style scoped>
.info {
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
}
.info--list {
  justify-content: center;
}
.row1 {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.row1--list {
  /* display list */
  flex-direction: column;
  gap: 2.4rem;
  align-items: start;
}
.name {
  font-size: 3.2rem;
  font-weight: 600;
  text-transform: uppercase;
  word-spacing: 1px;
}
.price {
  font-size: 1.6rem;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
}
.price--list {
  justify-self: flex-start;
}

.row2 {
  font-size: 1.6rem;
}

.row4 {
  display: flex;
  font-size: 1.8rem;
  gap: 1.4rem;
  align-items: center;
}
.row4--list {
  /* display list */
  flex-direction: column;
}

.facility {
  display: flex;
  gap: 1.2rem;
  justify-content: center;
  align-items: center;
}
.ph {
  color: #0f1841;
  font-size: 3rem;
}
</style>
