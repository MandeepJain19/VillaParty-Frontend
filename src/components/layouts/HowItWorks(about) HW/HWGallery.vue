<template>
  <div class="gallery">
    <figure class="gallery-item" v-for="(img, index) in images" :key="index">
      <img
        :src="`${img}`"
        alt="Product image"
      />
    </figure>
  </div>
</template>

<style scoped>
.gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.6rem;
  padding: 1.6rem;
}
.gallery-item img {
  display: block;
  width: 100%;
  height: 100%;
  transition: all 0.4s;
}

.gallery-item img:hover {
  transform: scale(1.1);
}
.gallery-item {
  overflow: hidden;
}

@media (max-width: 75em) {
  .gallery {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 63em) {
  .gallery {
    grid-template-columns: repeat(4, 1fr);
  }
}
@media (max-width: 45em) {
  .gallery {
    gap: 0.8rem;
    padding: 0rem;
  }
  .gallery {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
<script>
export default {
  data() {
    return {
      images: [
"https://i.postimg.cc/90HfSXdV/1.jpg",
"https://i.postimg.cc/htZtn1L2/10.jpg",
"https://i.postimg.cc/BZ2bFD3v/11.jpg",
"https://i.postimg.cc/yNJY83ns/12.jpg",
"https://i.postimg.cc/15HzCQfh/2.jpg",
"https://i.postimg.cc/RFKScrjY/3.jpg",
"https://i.postimg.cc/d3Fq6HFV/4.jpg",
"https://i.postimg.cc/BZ5Zb05L/5.jpg",
"https://i.postimg.cc/fyvMrcWj/6.webp",
"https://i.postimg.cc/Rh10zrdt/7.webp",
"https://i.postimg.cc/8PD5m5km/8.jpg",
"https://i.postimg.cc/Lsr4Y40f/9.jpg",
      ],
      length: 12,
    };
  },
};
</script>
