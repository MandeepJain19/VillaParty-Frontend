<template>
  <div class="confirmation">
    <div @click="toggleBookVillaCnf()" class="close-icon">
      <i class="ph ph-x"></i>
    </div>
    <div class="confirmation--flex">
      <TheSpinner v-if="spinner"></TheSpinner>
      <div v-else class="text">
        <p>{{ text }} ✅</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.confirmation {
  background-color: #cfd1d9;
  height: 25rem;
  width: 50rem;
  position: fixed;
  top: 35%;
  left: 40%;
  /* transform: translate(-50%, -50%); */
  z-index: 3000;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.close-icon {
  font-size: 4.8rem;
  display: flex;
  justify-content: end;
  cursor: pointer;
  padding: 1.2rem;
}
.confirmation--flex {
  margin-top: 2.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.confirmation--flex:first-child {
  max-width: 100%;
}
.text {
  font-size: 4.8rem;
  font-weight: 700;
  color: #0f1841;
}

.dialog-enter-from,
.dialog-leave-to {
  opacity: 0;
  transform: scale(0.8);
}
.dialog-enter-active {
  transition: all 0.3s ease-out;
}
.dialog-leave-active {
  transition: all 0.3s ease-in;
}
.dialog-leave-from,
.dialog-enter-to {
  opacity: 1;
  transform: scale(1);
}

@media (max-width: 56em) {
  .confirmation {
    height: 20rem;
    width: 40rem;
    position: fixed;
    top: 25%;
    left: 30%;
  }
  .text {
    font-size: 3.6rem;
    font-weight: 600;
    color: #0f1841;
  }
}
@media (max-width: 34em) {
  .confirmation {
    height: 20rem;
    width: 38rem;
    position: fixed;
    top: 15%;
    left: 10%;
  }
}
</style>

<script>
import TheSpinner from "../UI/TheSpinner.vue";
export default {
  props: ["text"],
  components: {
    TheSpinner,
  },
  computed: {
    spinner() {
      return this.$store.getters.spinner;
    },
  },
  methods: {
    toggleBookVillaCnf() {
      this.$store.commit("toggleCnf");
    },
  },
};
</script>
