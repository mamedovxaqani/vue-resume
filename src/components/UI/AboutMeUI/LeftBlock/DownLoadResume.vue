<template>
  <div class="resume__btn">
    <button class="cv__resume">
      Download Resume
      <span class="btn__icon"><i class="fa-solid fa-download"></i></span>
    </button>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/scss/variables.scss";
.resume__btn {
  text-align: end;
}

.cv__resume {
  text-align: end;
  background-color: $base__color;
  border: 1px solid $base__color;
  color: white;
  padding: 10px 15px;
  font-size: 14px;
}

.btn__icon {
  display: inline-block;
  margin-left: 10px;
}
</style>
