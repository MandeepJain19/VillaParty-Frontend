<template>
  <div>
    <button class="btn" v-if="!isLink">
      <slot></slot>
    </button>
    <router-link v-else :to="link" class="btn">
      <slot></slot>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    isLink: {
      type: Boolean,
      default: true,
      required: false,
    },
    goto: {
      type: String,
      default: "/",
      required: false,
    },
  },
  data() {
    return {
      link: this.goto || "javascript:void(0)",
    };
  },
  methods: {},
};
</script>
<style scoped>
.btn,
.btn:link,
.btn:visited {
  border: none;
  background-color: #0f1841;
  color: #fff;
  /* add border inside  */
  box-shadow: inset 0 0 0 1px #fff;
  font-weight: 600;
  text-decoration: none;
  display: inline-block;
  padding: 1.2rem 4.8rem;
  letter-spacing: 1px;
  font-size: 2.4rem;
  transition: all 1s ease-in;
}

.btn:hover,
.btn:active {
  background-color: #fff;
  color: #0f1841;
  box-shadow: inset 0 0 0 1px #0f1841;
}

@media (max-width: 34rem) {
  .btn:link,
  .btn:visited {
    padding: 1.2rem 2.4rem;
    letter-spacing: 1px;
    font-size: 1.8rem;
  }
}
</style>
