<template>
  <div class="about-container">
    <div class="name">
      <h1>{{ villa.name }}</h1>
    </div>
    <div class="location">
      {{ villa.location.country }} <span class="arrow">&rsaquo;</span>
      {{ villa.location.region }} <span class="arrow">&rsaquo;</span>
      {{ villa.location.city }}
    </div>
    <div class="menu-container" :class="fixHeader && 'fixed'">
      <ul class="sub-menu">
        <li>
          <a
            class="item"
            :class="
              currentScrollPos > 741 && currentScrollPos < 1200
                ? 'borderBottom'
                : ''
            "
            href="#description"
          >
            Description</a
          >
        </li>
        <li class="item">
          <a
            :class="
              currentScrollPos > 1200 && currentScrollPos < 1677
                ? 'borderBottom'
                : ''
            "
            class="item"
            href="#facilities"
          >
            Facilities</a
          >
        </li>
        <li>
          <a
            :class="
              currentScrollPos > 1677 && currentScrollPos < 2200
                ? 'borderBottom'
                : ''
            "
            class="item"
            href="#equipments"
          >
            Equipments</a
          >
        </li>
      </ul>
    </div>
    <div><span id="description">&nbsp;</span></div>
    <div class="details">
      <div ref="description" class="description">
        <h2 class="heading">Description</h2>
        <p class="content">
          {{ villa.Description }}
        </p>
        <span id="facilities"></span>
      </div>
      <div ref="facilities" class="facilities">
        <h2 class="heading">Facilities</h2>
        <div class="facilities-flex">
          <div class="facility">
            <span>capacity</span><span>{{ villa.Facilities.capacity }}</span>
          </div>
          <div class="facility">
            <span>Build area</span><span>{{ villa.Facilities.BuildArea }}</span>
          </div>
          <div class="facility">
            <span>Bed Rooms</span><span>{{ villa.Facilities.bedRoom }}</span>
          </div>
          <div class="facility">
            <span>Bathroom</span><span>{{ villa.Facilities.bathRoom }}</span>
          </div>
          <div class="facility" id="equipments">
            <span>Beds</span><span>{{ villa.Facilities.beds }}</span>
          </div>
        </div>
      </div>
      <div ref="equipments" class="equipments">
        <h2 class="heading">Equipments</h2>
        <div class="equip-flex">
          <div class="inside">
            <h3>Inside</h3>
            <ul class="inside-equipments">
              <li v-for="(item, index) in inside" :key="index">{{ item }}</li>
            </ul>
          </div>
          <div class="outside">
            <h3>Outside</h3>

            <ul class="inside-equipments">
              <li v-for="(item, index) in outside" :key="index">{{ item }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["villa"],
  data() {
    return {
      fixHeader: false,
      descriptionIndicator: false,
      facilityIndicator: false,
      equipmentIndicator: false,
      currentScrollPos: undefined,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  unmounted() {
    window.removeEventListener("scroll", this.onScroll);
  },
  watch: {
    currentScrollPos() {
      if (this.currentScrollPos > 750 && this.currentScrollPos < 850) {
        this.descriptionIndicator = true;
      }
    },
  },
  methods: {
    scrollTo(el) {
      const element = this.$refs[el];
      element.scrollIntoView({
        block: "start",
        behavior: "smooth",
      });
    },
    onScroll(e) {
      // Fixheader
      this.windowTop = e.target.documentElement.scrollTop;
      this.currentScrollPos = this.windowTop;
      if (this.windowTop >= 353) {
        this.fixHeader = true;
      } else {
        this.fixHeader = false;
      }
    },
  },
  computed: {
    inside() {
      return this.villa.Equipments.inside;
    },
    outside() {
      return this.villa.Equipments.outside;
    },
  },
};
</script>

<style scoped>
.borderBottom {
  color: #cfd1d9 !important ;
}
.about-container {
  margin-top: 3.2rem;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  position: relative;
}
.name {
  color: #0f1841;
  font-weight: 600;
  font-size: 3.2rem;
  text-transform: uppercase;
  letter-spacing: 1.2px;
}
.location {
  font-size: 2rem;
}
.arrow {
  font-size: 2.4rem;
}
.menu-container {
  padding-top: 2rem;
  padding-bottom: 2rem;
  padding-left: 1rem;
  border-bottom: 1px solid #e4e4e4;
}
.sub-menu {
  display: flex;
  font-size: 1.8rem;
  gap: 6.4rem;
}
.fixed {
  position: sticky;
  top: 5.4rem;
  z-index: 100;
  background-color: #fff;
}
li {
  list-style: none;
  text-decoration: none;
}
.item:link,
.item:visited {
  text-decoration: none;
  transition: all 2s;
  cursor: pointer;
  letter-spacing: 1px;
  color: #0f1841;
}

.item:hover,
.item:active {
  color: #cfd1d9;
}
.description,
.facilities,
.equipments {
  margin-top: 4.8rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 3.6rem 3.6rem;
}

.facilities-flex {
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
}

.facility {
  text-transform: uppercase;
  font-size: 2.4rem;
  color: #555;
  font-weight: 800;
  letter-spacing: 1.4px;

  border-bottom: 1px solid #999;
  padding-bottom: 2rem;

  display: flex;
  justify-content: space-between;
}

.facility:last-child {
  border-bottom: none;
  padding-bottom: none;
}
.equip-flex {
  display: flex;

  gap: 4.8rem;
}
.heading {
  color: #999;
  font-size: 3.2rem;
  font-weight: 900;
  letter-spacing: 1.4px;
  text-transform: uppercase;

  margin-bottom: 5.2rem;
}

h3 {
  font-size: 2rem;
  text-transform: uppercase;
  margin-bottom: 1.8rem;
  letter-spacing: 1px;
}
.content {
  font-size: 1.8rem;
  line-height: 1.4;
  letter-spacing: 0.5;
}

.inside-equipments {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  font-size: 1.8rem;
  color: #555;
}
@media (max-width: 82em) {
  .about-container {
    padding: 0 1.2rem;
  }
}
@media (max-width: 75em) {
  .content,
  .inside-equipments {
    font-size: 2rem;
    line-height: 1.6;
    letter-spacing: 0.8;
    word-spacing: 0.4rem;
  }
}
@media (max-width: 34em) {
  .name {
    font-size: 2.4rem;
  }

  .sub-menu {
    gap: 2.4rem;
  }
  .description {
    margin-top: 2.4rem;
    padding: 1.6rem 1.6rem;
  }
}
</style>
