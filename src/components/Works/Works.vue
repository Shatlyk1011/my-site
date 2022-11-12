<template>
  <div class="u-tac" id="works">
    <h2>Работы</h2>
  </div>
  <Work />
</template>

<script>
import Work from "@/components/Works/Work.vue";
export default {
  name: "Works",
  components: { Work },
};
</script>

<style lang="scss" scoped>
.u-tac {
  padding: 2rem;
  margin: 0 4.8rem;
  border-bottom: 2px solid #252525;

  @media (max-width: 900px) {
    & {
      margin: 0 2.4rem;
    }
  }
}
</style>