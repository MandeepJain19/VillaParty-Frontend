<template>
  <the-header></the-header>
  <router-view></router-view>
  <the-footer> </the-footer>
</template>

<script>
import TheFooter from "./components/layouts/TheFooter.vue";
import TheHeader from "./components/layouts/TheHeader.vue";
export default {
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>
