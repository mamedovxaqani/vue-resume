<template>
  <h1 class="section__title">
    {{ title }}
    <span class="title__me">{{ redTitle }}</span>
  </h1>
</template>

<script>
export default {
  props: ["title", "redTitle"],
};
</script>

<style scoped>
.section__title {
  margin-top: 40px;
  text-align: center;
  text-transform: uppercase;
}

.title__me {
  display: inline-block;
  background-color: #fc6f5c;
  color: white;
  padding: 0 5px;
  border-radius: 0.25rem;
}
</style>
