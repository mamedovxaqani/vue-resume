<template>
  <div class="objective">
    <div class="objective__container">
      <div class="objective__icon">
        <span class="icon">
          <i class="fa-sharp fa-solid fa-bullseye"></i>
        </span>
      </div>
      <div class="objective__text">
        <h3 class="objective__title">Objective</h3>
        <p class="objecttive__texter">
          An opportunity to work and upgrade oneself, as well as being involved
          in an organization that believes in gaining a competitive edge and
          giving back to the community. I’m presently expanding my solid
          experience in UI / UX design. I focus on using my interpersonal skills
          to build good user experience and create a strong interest in my
          employers. I hope to develop skills in motion design and my knowledge
          of the Web, and become an honest asset to the business. As an
          individual, I’m self-confident you’ll find me creative, funny and
          naturally passionate. I’m a forward thinker, which others may find
          inspiring when working as a team.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/scss/variables.scss";

.objective__container {
  display: flex;
}

.icon {
  @include icon;
}

.objecttive__texter {
  @include about__text;
}
</style>
