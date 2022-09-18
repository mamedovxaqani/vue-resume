<template>
  <section class="panel">
    <base-second-container>
      <main-panel-text></main-panel-text>
    </base-second-container>
  </section>
</template>

<script>
import MainPanelText from "@/components/UI/MainPanelUI/MainPanelText.vue";
export default {
  components: {
    MainPanelText,
  },
};
</script>

<style lang="scss" scoped>
.panel {
  display: flex;
  height: 95vh;
}
</style>
