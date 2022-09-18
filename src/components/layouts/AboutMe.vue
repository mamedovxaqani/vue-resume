<template>
  <base-title title="About" redTitle="me!"></base-title>
  <section class="about">
    <base-second-container>
      <left-block></left-block>
      <right-block></right-block>
    </base-second-container>
  </section>
</template>

<script>
import LeftBlock from "@/components/UI/AboutMeUI/LeftBlock.vue";
import RightBlock from "@/components/UI/AboutMeUI/RightBlock.vue";
export default {
  components: {
    LeftBlock,
    RightBlock,
  },
};
</script>

<style></style>
