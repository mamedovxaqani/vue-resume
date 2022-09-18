<template>
  <div class="wrapper">
    <the-header></the-header>
    <main-panel></main-panel>
  </div>
  <about-me></about-me>
  <the-education></the-education>
</template>

<script>
import TheHeader from "@/components/layouts/TheHeader.vue";
import MainPanel from "@/components/layouts/MainPanel.vue";
import AboutMe from "@/components/layouts/AboutMe.vue";
import TheEducation from "@/components/layouts/TheEducation.vue";
export default {
  components: {
    TheHeader,
    MainPanel,
    AboutMe,
    TheEducation,
  },
};
</script>

<style>
@import url("./assets/scss/variables.scss");

.wrapper {
  background-image: url("@/assets/imgs/sliderOne.jpeg");
}
</style>
