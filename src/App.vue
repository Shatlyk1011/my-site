<template>
  <MainNav />
  <Heroo />
  <Works />
  <LetsWork />
  <Footer />
</template>

<script>
import MainNav from "@/components/MainNav.vue";
import Heroo from "@/components/Heroo.vue";
import Works from "@/components/Works/Works.vue";
import LetsWork from "@/components/LetsWork.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "App",
  components: { MainNav, Heroo, Works, Footer, LetsWork },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
