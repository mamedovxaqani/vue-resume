<template>
  <div class="panel__text">
    <h2 class="panel__title">Hi, I'm Jhon Doe</h2>
    <div class="panel__profession">
      <span class="panel__profession-item">Developer</span>
    </div>
    <div class="panel__based">Based in Lima- Perú</div>
    <button class="panel__works">My Works</button>
    <div class="panel__down-icon">
      <span class="down__icon">
        <i class="fa-solid fa-down-long"></i>
      </span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.panel {
  &__text {
    color: white;
    margin: 0 auto;
    text-align: center;
    width: 500px;
  }
  &__title {
    text-transform: uppercase;
    font-weight: bold;
  }

  &__profession {
    &-item {
      text-transform: uppercase;
      font-size: 60px;
      font-weight: bold;
    }
  }

  &__works {
    font-size: 16px;
    padding: 0.4357rem 1.25rem;
    border-radius: 4px;
    border: 1px solid #fc6f5c;
    background-color: #fc6f5c;
    color: white;
  }

  &__based {
    margin-bottom: 10px;
  }
}

.down__icon {
  display: inline-block;
  margin: 36px 0;
  border: 1px solid #cccccc;
  font-size: 20px;
  border-radius: 50%;
  padding: 10px 20px;
  background-color: #cccccc;
  color: white;
}
</style>
