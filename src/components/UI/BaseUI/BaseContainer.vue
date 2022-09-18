<template>
  <div class="base__container">
    <slot></slot>
  </div>
</template>

<style scoped>
.base__container {
  width: 100%;
  height: 80px;
  max-width: 1200px;
  /* border: 1px solid; */
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
