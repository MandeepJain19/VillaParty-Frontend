<template>
  <div class="container">
    <HeroSection></HeroSection>
    <HowItWorks id="howItWorks"></HowItWorks>
    <FilterVilla
      :number="filterVillas.length"
      @change-filter="setfilter"
      id="filters"
    ></FilterVilla>
    <DislpayVilla
      v-if="!spinner"
      :filterVillas="filterVillas"
      id="villas"
    ></DislpayVilla>
    <TheSpinner class="spinner" v-if="spinner"></TheSpinner>
    <Transition name="dialog">
      <TheDialog :text="text" v-if="bookVillaCnf"></TheDialog>
    </Transition>
  </div>
</template>

<script>
import TheSpinner from "../components/UI/TheSpinner.vue";
import HeroSection from "../components/layouts/HeroSections/HeroSection.vue";
import HowItWorks from "../components/layouts/HowItWorks(about) HW/HowItWorks.vue";
import FilterVilla from "../components/layouts/FilterVilla.vue";
import DislpayVilla from "../components/layouts/DisplayVillas/DislpayVilla.vue";
import TheDialog from "../components/layouts/TheDialog.vue";
export default {
  components: {
    HeroSection,
    HowItWorks,
    FilterVilla,
    DislpayVilla,
    TheDialog,
    TheSpinner,
  },
  data() {
    return {
      spinner: false,
      filters: {
        Date: "",
        Location: "",
        Price: "",
        Capacity: "",
      },
    };
  },
  computed: {
    bookVillaCnf() {
      return this.$store.getters.bookVillaCnf;
    },
    text() {
      const date = new Date();
      const formatDate = `${("0" + date.getDate()).slice(-2)}-${(
        "0" +
        (date.getMonth() + 1)
      ).slice(-2)}`;
      let bookDate = this.$store.getters.filterDate.substring(5) || formatDate;
      bookDate = bookDate.substr(3, 2) + "-" + bookDate.substr(0, 2);
      const str = `Booked for ${bookDate}`;
      return str;
    },
    filterVillas() {
      // Filter Villa based selection of user
      const villas = this.$store.getters.getVillas;
      const selectedDate = new Date(this.filters.Date);

      //Based on Location
      const locationFilter = villas.filter((villa) => {
        if (
          this.filters.Location == "" ||
          villa.location.country === this.filters.Location
        ) {
          return true;
        }

        return false;
      });
      //Based on Capacity
      const capacityFilter = locationFilter.filter((villa) => {
        if (this.filters.Capacity === "16" && villa.Facilities.capacity >= 16) {
          return true;
        } else if (
          this.filters.Capacity !== "16" &&
          (this.filters.Capacity === "" ||
            (villa.Facilities.capacity <= Number(this.filters.Capacity) &&
              villa.Facilities.capacity > Number(this.filters.Capacity) - 5))
        ) {
          return true;
        }

        return false;
      });
      //Based on Price

      const priceFilter = capacityFilter.filter((villa) => {
        if (this.filters.Price === "more" && villa.startingPrice >= 6000) {
          return true;
        } else if (
          this.filters.Price !== "more" &&
          (this.filters.Price === "" ||
            (villa.startingPrice >= Number(this.filters.Price) - 2000 &&
              villa.startingPrice < Number(this.filters.Price)))
        ) {
          return true;
        }
        return false;
      });
      //Based on Dates
      const finalvillas = priceFilter.filter((villa) => {
        const startDate = new Date(villa.availableDates.startDate);
        const endDate = new Date(villa.availableDates.endDate);
        if (villa.availableDates.startDate === "") {
          return true;
        } else if (startDate == endDate && startDate != selectedDate) {
          return true;
        } else if (selectedDate < startDate || selectedDate > endDate) {
          return true;
        }

        return false;
      });

      return finalvillas;
    },
  },
  methods: {
    setfilter(filter) {
      this.spinner = true;
      setTimeout(() => {
        this.spinner = false;
      }, 3000);
      this.filters = filter;
    },
  },
  mounted() {
    const date = new Date();
    const currentDate = `${date.getFullYear()}-${(
      "0" +
      (date.getMonth() + 1)
    ).slice(-2)}-${("0" + date.getDate()).slice(-2)}`;
    this.filters.Date = currentDate;
    this.$store.dispatch("fetchVillas");
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 9.6rem;
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
.spinner {
  height: 25rem;
}
</style>
