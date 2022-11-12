<template>
  <div class="work__links">
    <a target="_blank" :href="site" class="work__link icon--css">
      <span class="work__icon"
        ><ion-icon name="planet-outline"></ion-icon
      ></span>
      Site</a
    >
    <a target="_blank" :href="github" class="work__link work__link--site">
      <span class="work__icon"><ion-icon name="logo-github"></ion-icon></span>
      Github</a
    >
  </div>
</template>
 
<script>
export default {
  name: "Links",
  props: ["site", "github"],
};
</script>

<style lang="scss" scoped>
.work {
  &__links {
    display: flex;
    gap: 2.4rem;
    justify-content: flex-start;
    text-align: center;
    z-index: 999;
    position: relative;
    // margin-top: auto;
  }
  &__link {
    font-size: 1.4rem;
    font-weight: 500;
    text-decoration: none;
    color: #252525;
    gap: 0.6rem;
    padding: 0.6rem 1.2rem;
    background-color: #fba820;
    border-radius: 3px;
    display: block;
    margin-top: auto;
    &--site {
      background-color: #252525;
      color: #fba820;
    }
  }
  &__icon {
    font-size: 1.4rem;
    margin-right: 0.5rem;
  }
}
</style>