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
h2 {
  color: #000;
  margin-top: 2rem;
  font-size: 3.2rem;
  padding: 1.2rem 2rem;
  background-color: #252525;
  color: #fefefe;
  display: inline-block;
  @media (max-width: 900px) {
    & {
      font-size: 2.4rem;
    }
  }
}

.u-tac {
  padding: 2rem;
  margin: 0 4.8rem;
  border-bottom: 2px solid #252525;

  @media (max-width: 900px) {
    & {
      margin: 0 2.4rem;
    }
  }
  @media (max-width: 600px) {
    & {
      margin: 0 1.6rem;
    }
  }
}
</style>