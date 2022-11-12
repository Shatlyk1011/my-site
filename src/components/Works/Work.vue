<template>
  <div class="container">
    <div :class="['work', work.orderGrid]" v-for="work in works" :key="work">
      <div :class="['work__descr', work.order]">
        <div class="work__title">{{ work.title }}</div>
        <div class="work__text">
          {{ work.descr }}
        </div>
        <Links :site="work.site" :github="work.github" class="links" />
      </div>
      <div class="work__image">
        <img :src="work.img" alt="Image 1" class="img" />
      </div>
    </div>
    <div class="more">
      <div class="more__cont">
        <div class="more__text">
          Еще больше на
          <a
            target="_blank"
            class="more__link"
            href="https://github.com/Shatlyk1011"
            >GitHub</a
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

  @media (max-width: 1250px) {
    & {
      padding: 4.8rem;
    }
  }
  @media (max-width: 900px) {
    & {
      display: flex;
      flex-direction: column;
      padding: 3.2rem;
    }
    &:not(:last-child) {
      gap: 9.6rem;
    }
  }
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
  @media (max-width: 1250px) {
    & {
      gap: 4.8rem;
    }
    &:not(:last-child) {
      margin-bottom: 6.4rem;
    }
  }

  @media (max-width: 900px) {
    & {
      display: flex;
      flex-direction: column;
      gap: 2.4rem;
    }
    &:not(:last-child) {
      margin-bottom: 4.8rem;
    }
  }
  @media (max-width: 600px) {
    & {
      gap: 1.6rem;
    }
  }

  &__descr {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    // align-items: center;
    justify-content: center;
    padding: 0 2.4rem;

    @media (max-width: 1250px) {
      & {
        padding: 0;
      }
    }
    @media (max-width: 900px) {
      & {
        gap: 1.2rem;
      }
    }
    @media (max-width: 900px) {
      & {
        text-align: center;
      }
    }
  }

  &__title {
    font-family: "Source Sans Pro", sans-serif;
    font-size: 3.2rem;
    font-weight: 600;

    @media (max-width: 900px) {
      & {
        font-size: 2.8rem;
      }
    }
  }

  &__text {
    font-size: 2.25rem;
    font-weight: 400;
    line-height: 1.5;

    @media (max-width: 900px) {
      & {
        font-size: 1.8rem;
      }
    }

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
    display: flex;
    align-items: center;

    & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    @media (max-width: 1250px) {
      & {
        height: 70%;
        align-self: center;
      }
    }

    @media (max-width: 900px) {
      & {
        height: 75%;
        align-self: center;
      }
    }
  }
}

.more {
  background-color: #3f3f3f;
  display: inline-block;
  padding: 1.2rem 2.4rem;
  display: flex;
  justify-content: center;
  @media (max-width: 1250px) {
    & {
      margin-top: -4.8rem;
    }
  }
  @media (max-width: 600px) {
    & {
      margin-top: -3.2rem;
    }
  }

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
  @media (max-width: 900px) {
    order: 0;
  }
}

.orderGrid {
  grid-template-columns: 3fr 5fr;
}

.links {
  @media (max-width: 900px) {
    justify-content: center;
  }
}
</style>