<template>
  <div class="left-block">
    <objective-block></objective-block>
    <what-do></what-do>
    <the-resume></the-resume>
  </div>
</template>

<script>
import TheResume from "@/components/UI/AboutMeUI/LeftBlock/TheResume.vue";
import ObjectiveBlock from "@/components/UI/AboutMeUI/LeftBlock/ObjectiveBlock.vue";
import WhatDo from "@/components/UI/AboutMeUI/LeftBlock/WhatDo.vue";

export default {
  components: {
    ObjectiveBlock,
    WhatDo,
    TheResume,
  },
};
</script>

<style scoped>
.left-block {
  width: 100%;
  max-width: 730px;
}
</style>
