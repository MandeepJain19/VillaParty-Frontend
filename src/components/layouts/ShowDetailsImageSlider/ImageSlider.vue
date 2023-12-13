<template>
  <div class="container">
    <div class="grid">
      <div class="grid--carousel">
        <VueCarousel
          :need-Auto-Play="autoPlay"
          :auto-play-duration="5000"
          class="carousel"
          v-slot="{ currentSlide }"
        >
          <Vue-Slide v-for="(slide, index) in images" :key="index">
            <div v-show="index + 1 === currentSlide" class="slideInfo">
              <img
                class="images"
                :src="`${slide}`"
                alt="SlidingImages"
              />
            </div>
          </Vue-Slide>
        </VueCarousel>
      </div>
      <div class="secondary-images" @click="showGallery()">
        <img
          class="images"
          
          :src="`${images[3]}`"
          alt="SlidingImages"
        />
      </div>
      <div class="secondary-images" @click="showGallery()">
        <img
          class="images"
          :src="`${images[4]}`"

          alt="SlidingImages"
        />
      </div>
    </div>
    <button @click="showGallery()" class="btn">
      View photos ({{ totalImages }})
    </button>
  </div>
</template>
<script>
import VueCarousel from "../HeroSections/VueCarousel.vue";
import VueSlide from "../HeroSections/VueSlide.vue";
export default {
  props: ["images", "totalImages"],
  components: {
    VueCarousel,
    VueSlide,
  },
  data() {
    return {
      carouselSlides: ["first", "second", "third"],
      autoPlay: false,
    };
  },
  methods: {
    setAutoPlay() {
      this.autoPlay = true;
    },
    showGallery() {
      this.$emit("showGallery", true);
    },
  },
  mounted: function mounted() {
    this.setAutoPlay();
  },
};
</script>
<style scoped>
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 0.8rem;
}
.grid--carousel {
  grid-row: 1 / -1;
  grid-column: 1 / 3;
}

.carousel {
  position: relative;
  height: 100%;
}
.slideInfo {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  max-height: 100%;
  height: 100%;
}
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.grid--carousel:hover,
.secondary-images:hover {
  cursor: pointer;
  opacity: 0.8;
  transition: all 1s ease;
}

.btn {
  position: absolute;
  bottom: 2rem;
  right: 2rem;

  font-size: 1.8rem;
  font-weight: 600;
  color: #0f1841;
  padding: 0.4rem 0.8rem;
  border: none;
  opacity: 0.8;
}
.btn:hover {
  cursor: pointer;
  opacity: 1;
  transition: all 1s ease;
}

@media (max-width: 65em) {
  .container {
    padding: 0 1.2rem;
  }
}
@media (max-width: 45em) {
  .btn {
    bottom: 1rem;
    right: 1.8rem;

    font-size: 1.8rem;
    font-weight: 600;

    padding: 0.2rem 0.6rem;
  }
}
@media (max-width: 34em) {
  .btn {
    bottom: 1rem;
    right: 1.8rem;

    font-size: 1.2rem;
    font-weight: 400;

    padding: 0.2rem 0.4rem;
  }
}
</style>
