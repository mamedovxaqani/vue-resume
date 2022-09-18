<template>
  <div class="user__picture">
    <img class="picture" :src="require('@/assets/imgs/user.jpeg')" alt="" />
  </div>
</template>

<style scoped>
.user__picture {
  width: 100%;
  max-width: 380px;
  border: 1px solid grey;
}

.picture {
  width: 100%;
}
</style>
