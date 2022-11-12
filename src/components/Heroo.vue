<template>
  <div class="container" id="hero">
    <div class="hero">
      <div class="hero__descr">
        <h1 class="heading-primary">
          Привет, Я <br />
          <span>Шатлык!</span>
        </h1>
        <p class="heading-primary__descr">
          Веб-разработчик, студент 3-го курса ИВТФ. Ищу работу на должность
          <br />
          "Frontend developer". Люблю делать качественные работы!
        </p>
        <Button v-scroll-to="'#works'" text="Мои работы" type="primary" />
        <WebLinks class="links" />
      </div>
    </div>
  </div>
</template>

<script>
import Button from "@/components/shared/Button.vue";
import WebLinks from "@/components/shared/WebLinks.vue";
export default {
  name: "Hero",
  components: {
    Button,
    WebLinks,
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  min-height: 73.6rem;
  // height: 100%;
}
.hero {
  background: linear-gradient(
      to left top,
      rgba(0, 0, 0, 0.3),
      rgba(0, 0, 0, 0.6)
    ),
    url("../assets/img/main-bg.jpg");
  background-position: top;
  background-size: cover;

  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;

  width: 100%;

  &__descr {
    margin-top: 22rem;
    margin-left: 33rem;
    max-width: 37rem;
  }
}
.heading-primary {
  font-family: "Source Sans Pro", sans-serif;
  font-size: 7rem;
  font-weight: 700;
  color: #fff;
  line-height: 1.1;
  letter-spacing: 2px;

  & span {
    color: #fba820;
  }

  &__descr {
    margin-top: 1.5rem;
    font-family: "Open Sans", sans-serif;
    font-weight: 300;
    font-size: 1.8rem;
    letter-spacing: 1px;
    color: #f7f7f7;
    line-height: 1.5;
    margin-bottom: 7.4rem;
  }
}

.links {
  margin: 15rem 0 5rem 0.5rem;
}
</style>