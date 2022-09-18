<template>
  <section class="resume">
    <div class="resume__container">
      <the-signature></the-signature>
      <download-resume></download-resume>
    </div>
  </section>
</template>

<script>
import TheSignature from "@/components/UI/AboutMeUI/LeftBlock/TheSignature.vue";
import DownloadResume from "@/components/UI/AboutMeUI/LeftBlock/DownLoadResume.vue";

export default {
  components: {
    TheSignature,
    DownloadResume,
  },
};
</script>

<style scoped>
.resume__container {
  margin: 20px 0;
  display: flex;
  justify-content: space-around;
}
</style>
