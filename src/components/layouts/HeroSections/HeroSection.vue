<template>
  <div class="hero">
    <VueCarousel
      :need-Auto-Play="autoPlay"
      :auto-play-duration="6000"
      class="carousel"
      v-slot="{ currentSlide }"
    >
      <VueSlide v-for="(slide, index) in carouselSlides" :key="index">
        <div v-show="index + 1 === currentSlide" class="slideInfo">
          <img
            class="images"
            :src="`${slide}`"
            alt="SlidingImages"
          />
        </div>
      </VueSlide>
    </VueCarousel>
    <div class="hero-text">
      <p>Have your dream party, the way you want it.</p>
      <the-button :isLink="true" @click="scrollTo()" goto="#villas"
        >Check Out!!</the-button
      >
    </div>
  </div>
</template>

<script>
import VueSlide from "./VueSlide.vue";
import TheButton from "../../UI/TheButton.vue";
import VueCarousel from "../HeroSections/VueCarousel.vue";

export default {
  components: {
    VueCarousel,
    TheButton,
    VueSlide,
  },
  computed: {},
  data() {
    return {
      // carouselSlides: ["first", "second", "third"],
      carouselSlides: [
"https://i.postimg.cc/525NYMWk/first.jpg",
"https://i.postimg.cc/4N93G9LG/second.jpg",
"https://i.postimg.cc/fLqbzjQz/third.jpg",
      ],
      autoPlay: false,
    };
  },
  methods: {
    setAutoPlay() {
      this.autoPlay = true;
    },
    scrollTo() {
      document.querySelector("#filters").scrollIntoView({ behavior: "smooth" });
    },
  },
  mounted: function mounted() {
    this.setAutoPlay();
  },
};
</script>

<style scoped>
.carousel {
  position: relative;
  max-width: 100%;
  height: 100vh;
}
.slideInfo {
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100vh;
}
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-text {
  position: absolute;
  left: 6rem;
  top: 12rem;
  z-index: 99;
  font-size: 6rem;
  font-weight: 800;
  text-transform: uppercase;
  line-height: 1.1;
  letter-spacing: 0.6rem;
  color: #fff;
  display: inline-block;
  width: 73rem;
  padding: 1.2rem;

  background-image: linear-gradient(
    rgba(34, 34, 34, 0.6),
    rgba(34, 34, 34, 0.6)
  );
}

@media (max-width: 56em) {
  .hero-text {
    font-size: 3.6rem;
    line-height: 1.2;
    letter-spacing: 0.1rem;
    width: 60rem;
  }
  p {
    margin-bottom: 1rem;
  }
}
@media (max-width: 45em) {
  .hero-text {
    top: 9.6rem;
    width: 45rem;
  }
  p {
    margin-bottom: 1rem;
  }
}
@media (max-width: 34rem) {
  .hero-text {
    font-size: 2.4rem;
    line-height: 1.2;
    letter-spacing: 0.1rem;
    width: 29rem;
  }
}
</style>
