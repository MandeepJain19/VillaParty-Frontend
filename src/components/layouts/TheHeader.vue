<template>
  <div>
    <header>
      <ul class="nav">
        <li><a href="/villa-party" class="title">Villa Party</a></li>
        <li>
          <img
            src="../../../public/images/logo2.png"
            class="logo"
            alt="Comapany Logo"
          />
        </li>
        <li @click="toggleMenu()">
          <i class="ph ph-list icon"></i>
        </li>
      </ul>
    </header>
    <Transition name="menu">
      <div class="me" v-if="menu">
        <div @click="toggleMenu()" class="close-icon">
          <i class="ph ph-x"></i>
        </div>
        <div class="contents">
          <h1>Menu Under Construction.. 😉</h1>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menu = !this.menu;
    },
  },
};
</script>

<style scoped>
header {
  background-color: rgba(255, 255, 255, 0.97);
  box-shadow: 0 1.2rem 3.2rem rgba(0, 0, 0, 0.3);

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 999;
}
.nav {
  list-style: none;
  margin: 0 4.8rem;
  border: 2px solid rgba(255, 255, 255, 0.6);
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.title {
  text-decoration: none;
  font-size: 1.8rem;
  font-weight: 700;
  letter-spacing: 0.6rem;
  text-transform: uppercase;
  color: #0f1841;
}
.icon {
  color: #0f1841;
  font-size: 4.8rem;
}
.ph {
  cursor: pointer;
}
.logo {
  height: 6.2rem;
}

.me {
  background-color: rgba(207, 209, 217, 0.9);
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100vh;
  padding-top: 0;
  padding-bottom: 0;
  z-index: 2000;
}
.me h1 {
  font-size: 4.8rem;
  color: #0f1841;
}
.close-icon {
  font-size: 6.4rem;
  display: flex;
  justify-content: end;

  padding: 1.2rem;
}
.contents {
  margin: 0.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
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
  opacity: 1;
}
@media (max-width: 34em) {
  .logo {
    display: none;
  }
  .nav {
    margin: 0 1.2rem;
  }
}
</style>
