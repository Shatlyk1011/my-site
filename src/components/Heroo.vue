<template>
  <div class="container" id="hero">
    <div class="hero">
      <!-- <div class="hehe"> -->
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
      <!-- </div> -->
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
  min-height: 101.5rem;
  // height: 100vh;

  @media (max-width: 1250px) {
    & {
      min-height: 83.5rem;
    }
  }

  @media (max-width: 900px) {
    & {
      min-height: 65rem;
    }
  }
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

  @media (max-width: 900px) {
    & {
      max-height: 65rem;
      background-position: 50% 20%;
    }
  }
  @media (max-width: 600px) {
    & {
      background-position: 75% 100%;
    }
  }

  &__descr {
    margin: 22rem 0 20rem 33rem;
    max-width: 37rem;
    animation: moveInLeft 1s ease;
    @media (max-width: 1250px) {
      & {
        margin-left: 23rem;
        margin-top: 20rem;
      }
    }
    @media (max-width: 900px) {
      & {
        margin-left: 12rem;
        margin-top: 15rem;

        text-align: center;

        margin: 15rem auto 15rem;
      }
    }
    @media (max-width: 600px) {
      & {
        text-align: center;
        margin: 15rem auto 15rem;
        // margin-top: 15rem;
      }
    }
  }
}
.heading-primary {
  font-family: "Source Sans Pro", sans-serif;
  font-size: 7.2rem;
  font-weight: 700;
  color: #fff;
  line-height: 1.1;
  letter-spacing: 2px;

  @media (max-width: 1250px) {
    font-size: 4.8rem;
  }
  @media (max-width: 600px) {
    & {
      font-size: 3.8rem;
    }
  }
  @media (max-width: 360px) {
    & {
      font-size: 3.2rem;
    }
  }

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
    @media (max-width: 1250px) {
      margin-bottom: 4.8rem;
    }
    @media (max-width: 900px) {
      & {
        font-size: 1.6rem;

        width: 100%;
      }
    }
  }
}

.links {
  margin: 15rem 0 5rem 0.5rem;

  @media (max-width: 1250px) {
    & {
      margin: 7rem 0 13rem;
    }
  }
}
</style>