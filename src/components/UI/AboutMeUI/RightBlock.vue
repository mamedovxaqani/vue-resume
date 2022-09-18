<template>
  <div class="pictures">
    <user-pictures></user-pictures>
    <user-information></user-information>
  </div>
</template>

<script>
import UserPictures from "@/components/UI/AboutMeUI/RightBlock/UserPictures.vue";
import UserInformation from "@/components/UI/AboutMeUI/RightBlock/UserInformation.vue";

export default {
  components: {
    UserPictures,
    UserInformation,
  },
};
</script>
