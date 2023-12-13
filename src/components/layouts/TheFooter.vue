<template>
  <div class="footer-container">
    <div class="grid">
      <div class="header"><a href="/" class="company"> Villa Party </a></div>
      <div class="allLinks">
        <li class="title">Resources</li>
        <li class="links">Become a travel Partner</li>
        <li class="links">Why book with us</li>
        <li class="links">Help Center</li>
        <li class="links">Reviews</li>
      </div>
      <div class="allLinks">
        <li class="title">Discover</li>
        <li class="links">Be inspired</li>
        <li class="links">Our story</li>
        <li class="links">Affiliates</li>
        <li class="links">ravel planners</li>
      </div>
      <div class="allLinks">
        <li class="title">Company</li>
        <li class="links">Terms and conditions</li>
        <li class="links">Privacy policy</li>
        <li class="links">Help Center</li>
        <li class="links">Contact us</li>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.footer-container {
  margin-top: 9.6rem;
  width: 100%;
  background-color: #0f1841;
  color: #cfd1d9;
}
.grid {
  padding: 3.6rem 0 4.8rem 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr 1fr;
  justify-items: center;
}
.header {
  grid-column: 1/-1;
  align-self: center;
}
.company {
  color: #cfd1d9;
  text-decoration: none;
  font-size: 1.8rem;
  font-weight: 700;
  letter-spacing: 0.6rem;
  text-transform: uppercase;
}

li {
  list-style: none;
  margin-bottom: 0.8rem;
}

.allLinks :first-child {
  font-weight: 500;
  margin-bottom: 2rem;
}
.allLinks:last-child {
  margin-bottom: 0;
}
.title {
  font-size: 2.4rem;
  letter-spacing: 0.1rem;
}
.links {
  font-size: 1.8rem;
  cursor: pointer;
}
</style>
