<template>
  <ul class="navbar__list">
    <li class="navbar__list-item">Home</li>
    <li class="navbar__list-item">About Me</li>
    <li class="navbar__list-item">Experience</li>
    <li class="navbar__list-item">Portfolio</li>
    <li class="navbar__list-item">Testimonial</li>
    <li class="navbar__list-item">Blog</li>
    <li class="navbar__list-item">Contact</li>
  </ul>
</template>

<style scoped lang="scss">
.navbar__list {
  list-style: none;
  margin: 0;
}

.navbar__list-item {
  display: inline-block;
  margin: 0 8px;
  padding: 15px 7px;
  color: white;

  &:hover {
    border-bottom: 3px solid red;
  }
}
</style>
