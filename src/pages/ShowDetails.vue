<template>
  <div class="container">
    <ImageSlider
      :images="villa.images.slice(0, 5)"
      :totalImages="villa.images.length"
      @showGallery="openGallery()"
    ></ImageSlider>
    <div class="flex">
      <AboutProduct :villa="villa"></AboutProduct>
      <transition name="menu">
        <BookVilla
          class="bookvilla"
          v-if="displayBookVilla"
          :class="fixBookVilla && 'fixed'"
        ></BookVilla>
      </transition>
      <div @click="toggleBookVilla()" class="icon">
        <transition name="icons">
          <i v-if="displayBookVilla" class="ph ph-arrow-right"></i>
          <i v-else class="ph ph-arrow-left"></i>
        </transition>
      </div>
    </div>
  </div>
  <transition name="dialog">
    <div v-if="gallery" class="gallery-dialog">
      <div class="gallery-container">
        <div class="gallery-heading">
          <h2>{{ villa.name }}</h2>
          <button @click="closeGallery()">Close</button>
        </div>
        <div class="gallery-contents">
          <div class="gallery-grid">
            <div
              class="image"
              v-for="(image, index) in villa.images"
              :key="index"
            >
              <!-- <h1>{{ villa.images }}</h1> -->
              <img
              :src="`${image}`"
                alt="Villa Images"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
  <transition name="dialog">
    <TheDialog text="Villa Booked" v-if="bookVillaCnf"></TheDialog>
  </transition>
  <div class="showFilter-btn icons" @click="goBack()">
    <i class="ph ph-arrow-left"></i>
  </div>
</template>

<script>
import TheDialog from "../components/layouts/TheDialog.vue";
import AboutProduct from "../components/layouts/ShowDetailsImageSlider/AboutProduct.vue";
import BookVilla from "../components/layouts/ShowDetailsImageSlider/BookVilla.vue";
import ImageSlider from "../components/layouts/ShowDetailsImageSlider/ImageSlider.vue";

export default {
  components: {
    ImageSlider,
    AboutProduct,
    BookVilla,
    TheDialog,
  },

  data() {
    return {
      gallery: false,
      fixBookVilla: false,
      displayBookVilla: window.innerWidth <= 1040 ? false : true,
    };
  },
  methods: {
    openGallery() {
      this.gallery = true;
    },
    closeGallery() {
      this.gallery = false;
    },
    onScroll(e) {
      // Fixheader
      this.windowTop = e.target.documentElement.scrollTop;
      if (this.windowTop > 545) {
        this.fixBookVilla = true;
      } else {
        this.fixBookVilla = false;
      }
    },
    toggleBookVillaCnf() {
      this.$store.commit("toggleCnf");
    },
    stopSpinner() {},
    toggleBookVilla() {
      this.displayBookVilla = !this.displayBookVilla;
    },
    onWidthChange() {
      const width = window.innerWidth;
      if (width <= 1040) {
        this.displayBookVilla = false;
      } else {
        this.displayBookVilla = true;
      }
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    },
    async fetch() {
      const ret = await this.$store.dispatch("fetchVillas");
      return ret;
    },
    goBack() {
      this.$router.go(-1);
    },
  },
  watch: {},
  computed: {
    bookVillaCnf() {
      return this.$store.getters.bookVillaCnf;
    },
    villa() {
      const villas = this.$store.getters.getVillas;
      if (villas.length == 0) {
        this.fetch();
      }
      return villas.find((villa) => villa.name === this.$route.params.id);
    },
  },
  mounted() {
    this.scrollToTop();
    window.addEventListener("scroll", this.onScroll);
    window.addEventListener("resize", this.onWidthChange);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.onWidthChange);
  },
  unmounted() {
    window.removeEventListener("scroll", this.onScroll);
  },
};
</script>

<style scoped>
.vuejs3-datepicker {
  width: 100px !important;
}
.container {
  position: relative;
  margin: 8.6rem auto 0 auto;
  max-width: 130rem;
}
.fixed {
  position: sticky;
  top: 15rem;
  z-index: 100;
  background-color: #fff;
}
.flex {
  display: flex;
  gap: 2.4rem;
  align-items: flex-start;
}
.gallery-dialog {
  width: 100%;
  height: 100%;
  max-height: 100%;
  position: fixed;
  overflow-y: scroll;
  top: 0;
  left: 0;
  background-color: #fff;
  z-index: 2000;
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
.menu-enter-from,
.menu-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.menu-enter-active {
  transition: all 0.3s ease-in;
}
.menu-leave-active {
  transition: all 0.3s ease-in;
}
.menu-leave-from,
.menu-enter-to {
  opacity: 0;
}
.icons-enter-from,
.icons-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.icons-enter-active {
  transition: all 0.3s ease-in;
}
.icons-leave-active {
  transition: all 0.3s ease-out;
}
.icons-leave-from,
.icons-enter-to {
  opacity: 0;
}
.gallery-container {
  margin: 3.2rem auto;
  max-width: 130rem;
}

.gallery-heading {
  position: sticky;
  top: 0;
  background-color: #fff;
  opacity: 0.8;

  display: flex;
  justify-content: space-between;
  padding: 0.8rem 0.6rem;
}
h2 {
  color: #0f1841;
  font-size: 3.6rem;
}
button {
  padding: 1rem 2rem;
  font-size: 1.8rem;
  font-weight: 600;
  letter-spacing: 1.5px;
  background-color: #0f1841;
  color: #fff;

  border: none;
  cursor: pointer;
}
button:hover {
  opacity: 0.8;
}

.gallery-grid {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1.8rem;
}
.image:nth-child(4n) {
  cursor: pointer;
  grid-column: 1/-1;
}
img {
  width: 100%;
}

.icon {
  display: none;
}

.showFilter-btn {
  width: fit-content;
  height: fit-content;
  position: fixed;
  top: 12rem;
  z-index: 1000;
  font-size: 2.4rem;
  background-color: #0f1841;
  padding: 0.8rem 1.6rem;
  color: #fff;

  cursor: pointer;
  opacity: 0.8;
}

@media (max-width: 82em) {
  .gallery-container {
    padding: 0 1.2rem;
  }
}
@media (max-width: 65em) {
  .flex {
    padding: 0 1.2rem;
  }

  .bookvilla {
    position: fixed;
    top: 7rem;
    right: 0rem;

    align-items: flex-end;
    width: fit-content;
    height: fit-content;
    opacity: 0.95;
    z-index: 200;
  }
  .icon {
    display: inline;
    font-size: 3.6rem;
    position: fixed;
    bottom: 8rem;
    right: 0;
    z-index: 1000;
    background-color: #0f1841;
    padding: 0.8rem 1.6rem;
    color: #fff;
    width: fit-content;
    height: fit-content;
    opacity: 0.9;
  }
  .showFilter-btn {
    font-size: 1.8rem;
  }
}

@media (max-width: 45em) {
  .gallery-grid {
    gap: 1rem;
  }
  .flex {
    padding: 0 1rem;
  }
  h2 {
    font-size: 2.8rem;
  }
  button {
    padding: 0.8rem 1.8rem;
    font-size: 1.8rem;
  }
}
</style>
