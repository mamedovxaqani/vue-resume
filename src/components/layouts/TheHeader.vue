<template>
  <header class="header">
    <base-container>
      <header-brand></header-brand>
      <header-navbar></header-navbar>
    </base-container>
  </header>
</template>

<script>
import headerBrand from "@/components/UI/headerUI/headerBrand.vue";
import headerNavbar from "@/components/UI/headerUI/headerNavbar.vue";
import BaseContainer from "../UI/BaseUI/BaseContainer.vue";
export default {
  components: {
    headerBrand,
    headerNavbar,
    BaseContainer,
  },
};
</script>

<style scoped>
.header {
  border-bottom: 1px solid;
}
</style>
