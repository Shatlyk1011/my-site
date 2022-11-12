<template>
  <nav class="nav" id="nav">
    <div class="logo"><span>Shat</span> AB</div>
    <div class="nav-menu">
      <ul class="nav-menu__lists">
        <li v-for="menuItem in menuItems" :key="menuItem.text">
          <a class="nav-menu__list" v-scroll-to="menuItem.id">
            {{ menuItem.text }}</a
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "MainNav",

  data() {
    return {
      menuItems: [
        { text: "Работы", id: "#works" },
        // { text: "Резюме", id: "#contact" },
        { text: "Контакты", id: "#contact" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.nav {
  display: flex;
  justify-content: space-between;
  padding: 3rem 20rem 5rem;
  font-size: 2.4rem;
  z-index: 1000;
  position: absolute;
  width: 100%;

  @media (max-width: 1250px) {
    & {
      padding: 3rem 10rem 5rem;
    }
  }
  @media (max-width: 900px) {
    & {
      padding: 2rem 8rem 3rem;
    }
  }
  @media (max-width: 600px) {
    & {
      padding: 2rem 4rem 3rem;
    }
  }
}

.logo {
  font-family: "Source Sans Pro", sans-serif;
  font-size: 4.4rem;
  font-weight: 400;
  letter-spacing: -0.5px;
  color: #fff;
  text-decoration: none;
  cursor: pointer;

  @media (max-width: 600px) {
    & {
      font-size: 3.2rem;
    }
  }
  @media (max-width: 360px) {
    & {
      font-size: 2.4rem;
    }
  }

  & span {
    color: #fba820;
  }

  &__img {
    height: 2.4rem;
    width: 100%;
  }
}

.nav-menu {
  display: flex;
  align-items: flex-end;
  &__lists {
    display: flex;
    list-style: none;
    font-family: "Source Sans Pro", sans-serif;
    font-size: 2.25rem;
    font-weight: 400;
    color: #eee;
    @media (max-width: 600px) {
      & {
        font-size: 1.6rem;
      }
    }
    @media (max-width: 360px) {
      & {
        font-size: 1.4rem;
      }
    }

    & li:not(:last-child) {
      margin-right: 4rem;

      @media (max-width: 600px) {
        & {
          margin-right: 2.4rem;
        }
      }
    }
  }

  &__list {
    text-decoration: none;
    color: #fff;
    padding-bottom: 0.3rem;
    transition: all 0.2s;
    cursor: pointer;

    &:hover,
    &:focus {
      color: #fba820;
    }
  }
}
.active-nav {
  background-color: #252525;
}
</style>