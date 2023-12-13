<template>
  <div
    class="carousel"
    @mouseover="onHover = true"
    @mouseleave="onHover = false"
  >
    <VueCarousel
      :need-navigation="navigation"
      :need-pagination="pagination"
      :need-auto-play="onHover"
      :enable-on-hover="onHover"
      :auto-play-duration="3000"
      v-slot="{ currentSlide }"
    >
      <VueSlide v-for="(slide, index) in allImages" :key="index">
        <div v-show="index + 1 === currentSlide" class="slideInfo">
          <img
            class="images"
            :src="`${slide}`"
            alt="Sliding Image"
          />
        </div>
      </VueSlide>
    </VueCarousel>
  </div>
</template>

<style scoped>
.carousel {
  position: relative;
  height: 40rem;
  min-width: 100%;
  width: 100%;
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
  min-width: 100%;
  max-width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>

<script>
import VueCarousel from "../HeroSections/VueCarousel.vue";
import VueSlide from "../HeroSections/VueSlide.vue";
export default {
  components: { VueCarousel, VueSlide },
  props: ["allImages", "name"],
  data() {
    return {
      navigation: false,
      pagination: false,
      autoPlay: false,
      onHover: false,
    };
  },
  watch: {
    onHover() {
      return this.onHover;
    },
  },
  computed: {
    link(name) {
      return `/villa-party/${name}`;
    },
  },
  methods: {},
};
</script>
