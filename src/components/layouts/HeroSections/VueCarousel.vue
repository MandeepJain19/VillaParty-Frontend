<template>
  <div class="carousel" @onMouseover="autoPlay()">
    <slot :currentSlide="currentSlide"></slot>
    <!-- NAvigation -->
    <div v-if="enableNavigation" class="navigate">
      <div class="toggle left" @click="prevSlide()">
        <i class="fa-sharp fa-solid fa-chevron-left"></i>
      </div>
      <div class="toggle right" @click="nextSlide(true)">
        <i class="fa-sharp fa-solid fa-chevron-right"></i>
      </div>
    </div>
    <!-- <div v-else-if="enableOnHover" class="navigate">
      <div class="toggle left" @click="prevSlide(), stopAutoPlay()">
        <i class="ph ph-caret-left villaIcon"></i>
      </div>
      <div class="toggle right" @click="nextSlide(), stopAutoPlay()">
        <i class="ph ph-caret-right villaIcon"></i>
      </div>
    </div> -->
    <!-- Pagenation -->
    <div v-if="enablePagination" class="pagination">
      <span
        v-for="(slide, index) in slideCount"
        :key="index"
        :class="{ active: index + 1 === currentSlide }"
        @click="gotoSlide(index)"
      >
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    "needAutoPlay",
    "needTimeout",
    "needNavigation",
    "needPagination",
    "autoPlayDuration",
    "enableOnHover",
  ],
  computed: {
    enablePagination() {
      return this.needPagination === undefined ? true : false;
    },
    enableNavigation() {
      return this.needNavigation === undefined ? true : false;
    },
  },
  watch: {
    needAutoPlay() {
      if (this.needAutoPlay) {
        this.autoPlay();
      } else {
        this.stopAutoPlay();
      }
    },
  },
  data() {
    return {
      currentSlide: 1,
      slideCount: 3,
      autoPlayEnabled: true,
      timeOutDuration: this.autoPlayDuration,
      interval: null,
    };
  },
  methods: {
    nextSlide(click) {
      if (click) this.stopAutoPlay();
      if (this.currentSlide === this.slideCount) {
        this.currentSlide = 1;
        return;
      } else {
        this.currentSlide += 1;
      }
    },
    prevSlide() {
      this.stopAutoPlay();
      if (this.currentSlide === 1) {
        this.currentSlide = this.slideCount;
      } else {
        this.currentSlide -= 1;
      }
    },
    gotoSlide(index) {
      this.stopAutoPlay();
      this.currentSlide = index + 1;
    },
    autoPlay() {
      this.nextSlide(false);
      this.interval = setInterval(() => {
        this.nextSlide(false);
      }, this.timeOutDuration);
    },
    stopAutoPlay() {
      clearInterval(this.interval);
    },
  },
};
</script>

<style scoped>
.navigate {
  padding: 0 16px;
  height: 100%;
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
}

.toggle {
  display: flex;
  flex: 1;
}
.right {
  justify-content: flex-end;
}

i {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 4rem;
  height: 4rem;
  background-color: #0f1841;
  color: #fff;
}

.villaIcon {
  background-color: rgba(0, 0, 0, 0.1);
  font-size: 3.6rem;
}

.pagination {
  position: absolute;
  bottom: 2.4rem;
  width: 100%;
  display: flex;
  gap: 1.6rem;
  justify-content: center;
  align-items: center;
}
span {
  cursor: pointer;
  width: 2.4rem;
  height: 2rem;
  border-radius: 50%;
  background-color: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.6);
}
.active {
  background-color: #0f1841;
}

@media (max-width: 34em) {
  i {
    width: 2.4rem;
    height: 2.4rem;
  }
  span {
    width: 2rem;
    height: 1.8rem;
  }
  .pagination {
    bottom: 2rem;
    gap: 1.4rem;
  }
}
</style>
