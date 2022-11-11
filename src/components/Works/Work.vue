<template>
  <div class="container">
    <div :class="['work', work.orderGrid]" v-for="work in works" :key="work">
      <div :class="['work__descr', work.order]">
        <div class="work__title">{{ work.title }}</div>
        <div class="work__text">
          {{ work.descr }}
        </div>
        <Links :site="work.site" :github="work.github" />
      </div>
      <div class="work__image">
        <img :src="work.img" alt="Image 1" class="img" />
      </div>
    </div>
    <div class="more">
      <div class="more__cont">
        <div class="more__text">
          Еще больше работ вы сможете найти перейдя по этой
          <a
            target="_blank"
            class="more__link"
            href="https://github.com/Shatlyk1011"
            >ссылке.</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Links from "@/components/shared/Links.vue";
import { useStore } from "vuex";
export default {
  components: {
    Links,
  },

  setup() {
    const store = useStore();

    const works = store.state.works;

    return { works };
  },
};
</script>


<style lang="scss" scoped>
.container {
  background-color: #e9ecef;
  padding: 7.2rem 9.8rem;
}

.work {
  display: grid;
  grid-template-columns: 5fr 3fr;
  gap: 6.4rem;
  color: #252525;
  height: 40rem;
  &:not(:last-child) {
    margin-bottom: 7.2rem;
  }

  &__descr {
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
    // align-items: center;
    justify-content: center;
    padding: 0 2.4rem;
  }

  &__title {
    font-family: "Source Sans Pro", sans-serif;
    font-size: 3.2rem;
    font-weight: 500;
  }

  &__text {
    font-size: 2.25rem;
    font-weight: 400;
    line-height: 1.5;

    & span {
      font-family: "Source Sans Pro", sans-serif;
      font-weight: 500;
      font-size: 2.4rem;
    }

    & a:link,
    a:visited {
      text-decoration: none;
      color: #fba820;
    }
  }

  &__image {
    max-height: 40rem;

    & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}

.more {
  background-color: #3f3f3f;
  display: inline-block;
  padding: 1.2rem 2.4rem;
  display: flex;
  justify-content: center;

  &__cont {
    display: flex;
    gap: 3.2rem;
  }

  &__text {
    font-size: 1.4rem;
    font-weight: 600;
    line-height: 1.5;
    color: #fff;
  }
  &__link {
    color: #fba820;
    text-decoration: none;
    border-bottom: 1px solid #fba820;

    transition: all 0.2s;
    &:hover {
      border-bottom: 1px solid transparent;
    }
  }
  &__icon {
    font-size: 1.6rem;
  }
}

.order {
  order: 1;
}

.orderGrid {
  display: grid !important;
  grid-template-columns: 3fr 5fr !important;
}
</style>