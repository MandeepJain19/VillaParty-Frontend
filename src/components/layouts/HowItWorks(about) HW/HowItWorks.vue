<template>
  <div class="HW">
    <div class="details">
      <HWText class="text"></HWText>
      <HWGallery class="gallery">gallery</HWGallery>
    </div>
  </div>
</template>
<script>
import HWText from "./HWText.vue";
import HWGallery from "./HWGallery.vue";

export default {
  components: {
    HWText,
    HWGallery,
  },
};
</script>
<style scoped>
.HW {
  background-color: #cfd1d9;
  max-width: 100%;
  padding-left: 3.2rem;
}
.details {
  display: grid;
  grid-template-columns: 55fr 55fr;
  gap: 9.6rem;
}
@media (max-width: 93em) {
  .details {
    gap: 1rem;
  }
}
@media (max-width: 63em) {
  .details {
    grid-template-columns: 1fr;
    gap: 3.2rem;
  }
  .HW {
    padding: 3.2rem 3.2rem;
  }
}
@media (max-width: 45em) {
  .HW {
    padding: 1.2rem 1.2rem;
  }
}
@media (max-width: 34em) {
  .HW {
    padding: 0.6rem;
  }
}
</style>
