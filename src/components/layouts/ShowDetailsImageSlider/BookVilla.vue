<template>
  <div class="container">
    <div class="price">From $3.810/nt</div>
    <div class="dates">
      <input
        type="date"
        title="Check-In"
        v-model="startDate"
        :min="currentDate"
        class="form-element"
      />
      <input
        type="date"
        title="Check-Out"
        v-model="endDate"
        :min="startDate || currentDate"
        class="form-element"
      />
    </div>
    <div>
      <TheButton :isLink="false" @click="toggleBookVillaCnf()"
        >Reserve</TheButton
      >
    </div>
  </div>
</template>

<style scoped>
.container {
  padding: 2rem 2rem;
  margin-top: 3.2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  justify-content: center;

  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.price {
  font-size: 2.4rem;
  font-weight: 500;
}
.dates {
  display: flex;
}
.form-element {
  font-size: 1.8rem;
  border: 1px solid #0f1841;
  padding: 1.2rem 1.8rem;
  cursor: pointer;
  border-radius: 1rem;
}
</style>

<script>
import TheButton from "../../UI/TheButton.vue";
export default {
  components: {
    TheButton,
  },
  data() {
    return {
      startDate: "",
      endDate: "",
      color: "0F1841",
      datepickerStyles: `{background-color : red; width : 80px; height : 40px}`,
    };
  },
  methods: {
    toggleBookVillaCnf() {
      if (this.startDate === "" || this.endDate === "") return;
      const payload = {
        name: this.$route.params.id,
        startDate: this.startDate,
        endDate: this.endDate,
      };
      this.$store.dispatch("bookVilla", payload);
    },
  },
  computed: {
    currentDate() {
      const date = new Date();
      const formatDate = `${date.getFullYear()}-0${date.getMonth() + 1}-${(
        "0" + date.getDate()
      ).slice(-2)}`;
      return formatDate;
    },
  },
};
</script>
