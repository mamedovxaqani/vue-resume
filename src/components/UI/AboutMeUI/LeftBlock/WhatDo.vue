<template>
  <div class="what">
    <div class="what__container">
      <div class="what__icon">
        <span class="icon">
          <i class="fa-regular fa-star"></i>
        </span>
      </div>
      <div class="what__text">
        <h5 class="what__title">What I do?</h5>
        <p class="what__texter">
          I have been working as a web interface designer since. I have a love
          of clean, elegant styling, and I have lots of experience in the
          production of CSS3 and HTML5 for modern websites. I loving creating
          awesome as per my clients’ need. I think user experience when I try to
          craft something for my clients. Making a design awesome.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/scss/variables.scss";

.what__container {
  display: flex;
}

.what__title {
  text-transform: uppercase;
  font-weight: bold;
}

.icon {
  @include icon;
}

.what__texter {
  @include about__text;
}
</style>
