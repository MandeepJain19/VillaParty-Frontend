<template>
  <div class="container" v-if="displayFilter">
    <form class="form">
      <h3>Filter By</h3>
      <div class="filter">
        <div @click="toggleFilter()" class="icons">
          <i class="ph ph-x"></i>
        </div>
        <div @click="changeMode()" class="icons type">
          <i v-if="List" class="ph ph-grid-four"></i>
          <i v-else class="ph ph-list-bullets"></i>
        </div>

        <div>
          <input
            class="form-element"
            type="date"
            :min="min"
            v-model="currentDate"
            @change="setfilter()"
          />
        </div>
        <select
          name="Location"
          placeholder="Location"
          class="form-element"
          @change="setfilter($event)"
          v-model="location"
        >
          <option value="" selected="selected">Location</option>
          <option value="USA">USA</option>
          <option value="Caribbean">Caribbean</option>
          <option value="Europe">Europe</option>
          <option value="Asia">Asia</option>
        </select>
        <select
          name="Price"
          placeholder="Price"
          class="form-element"
          @change="setfilter($event)"
          v-model="price"
        >
          <option value="" selected="selected">Price</option>
          <option value="2000">$0 - $1999</option>
          <option value="4000">$2000 - $3999</option>
          <option value="6000">$4000 - $5999</option>
          <option value="more">$6000+</option>
        </select>
        <select
          name="Capacity"
          placeholder="Capacity"
          class="form-element"
          @change="setfilter($event)"
          v-model="capacity"
        >
          <option value="" selected="selected">Capacity</option>
          <option value="5">1 - 5</option>
          <option value="10">6 - 10</option>
          <option value="15">11 - 15</option>
          <option value="16">15 +</option>
        </select>
        <div class="number">
          <p>({{ this.number }})</p>
        </div>
      </div>
    </form>
  </div>
  <div v-else @click="toggleFilter()" class="showFilter-btn icons">
    <i class="ph ph-list icon"></i>
  </div>
</template>

<script>
export default {
  emits: ["change-filter"],
  props: ["number"],
  data() {
    return {
      displayFilter: window.innerWidth <= 896 ? false : true,
      selectedDate: null,
      isList: false,
      currentDate: null,
      location: "",
      price: "",
      capacity: "",
      min: null,
      filters: {
        date: this.currentDate,
        Location: String,
        price: String,
        capacity: String,
      },
    };
  },
  computed: {
    List() {
      return this.$store.getters.isList;
    },
  },
  methods: {
    changeMode() {
      this.$store.commit("toggleList");
    },
    toggleFilter() {
      this.displayFilter = !this.displayFilter;
    },
    onWidthChange() {
      const windowWidth = window.innerWidth;
      console.log(windowWidth);
      if (windowWidth < 896 && this.displayFilter) {
        this.displayFilter = false;
      }
    },
    formatDate() {},
    setfilter(event) {
      console.log(event);
      const allFilters = {
        Date: this.currentDate,
        Location: this.location,
        Price: this.price,
        Capacity: this.capacity,
      };
      this.$store.commit("changeFilterDate", this.currentDate);
      console.log(allFilters);
      this.$emit("change-filter", allFilters);
    },
  },
  mounted() {
    const date = new Date();
    const formatDate = `${date.getFullYear()}-${(
      "0" +
      (date.getMonth() + 1)
    ).slice(-2)}-${("0" + date.getDate()).slice(-2)}`;
    this.currentDate = formatDate;
    this.min = this.currentDate;
    window.addEventListener("resize", this.onWidthChange);
  },

  beforeUnmount() {
    window.removeEventListener("resize", this.onWidthChange);
  },
};
</script>

<style scoped>
.container {
  position: sticky;
  top: 5rem;
  margin: 0 auto;
  background-color: rgba(255, 255, 255, 0.9);
  z-index: 1001;

  transition: all 0.3s ease;
}

h3 {
  font-size: 1.6rem;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  color: #0f1841;
  display: block;
  margin-bottom: 1.2rem;
}
.filter {
  padding: 1.6rem 3.6rem;
  display: flex;
  gap: 3.2rem;
  justify-content: center;
  align-items: center;
  color: #0f1841;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.287);

  transition: all 0.3s ease;
}
i {
  font-size: 6.4rem;
  justify-self: center;
}
.form-element,
.number {
  font-size: 3.2rem;
  border: none;
  padding: 1.2rem 1.8rem;
  background-color: #cfd1d9;
  cursor: pointer;
  border-radius: 1rem;
}
.number {
  background-color: #fff;
}
select {
  appearance: none;
}
.icons {
  transition: all 0.3s;
  cursor: pointer;
}

.showFilter-btn {
  width: fit-content;
  height: fit-content;
  position: sticky;
  top: 7rem;
  z-index: 1000;
  background-color: #0f1841;
  padding: 0.8rem 1.6rem;
  color: #fff;
}

@media (max-width: 65em) {
  .form-element {
    font-size: 2.4rem;
  }
  i {
    font-size: 4.8rem;
  }
}

@media (max-width: 56em) {
  .filter {
    flex-direction: column;
    overflow-y: scroll;
    position: fixed;
    top: 8rem;
    left: 0;
    background-color: rgba(255, 255, 255, 0.9);
    align-items: stretch;
  }
  h3 {
    display: none;
  }
  .form-element {
    font-size: 2.4rem;
  }
  i {
    font-size: 4.8rem;
  }
  .type {
    display: none;
  }
}
</style>
