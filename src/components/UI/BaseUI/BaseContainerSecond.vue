<template>
  <div class="base__container">
    <slot></slot>
  </div>
</template>

<style scoped>
.base__container {
  width: 100%;
  max-width: 1200px;
  /* border: 1px solid; */
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
  margin: 0 auto;
}
</style>
