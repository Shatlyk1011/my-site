<template>
  <nav class="nav">
    <div class="logo"><span>Shat</span> AB</div>
    <div class="nav-menu">
      <ul class="nav-menu__lists">
        <li v-for="menuItem in menuItems" :key="menuItem.text">
          <a class="nav-menu__list" :to="menuItem.url"> {{ menuItem.text }}</a>
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
        { text: "Работы", url: "/work" },
        { text: "Инструменты", url: "/tools" },
        { text: "Контакты", url: "/contacts" },
      ],
    };
  },
  computed: {
    active() {
      return {};
    },
  },
};
</script>

<style lang="scss" scoped>
.nav {
  display: flex;
  justify-content: space-between;
  padding: 3rem 11rem 5rem 8rem;
  font-size: 2.4rem;
  z-index: 1000;
  position: relative;
}

.logo {
  font-family: "Source Sans Pro", sans-serif;
  font-size: 4.4rem;
  font-weight: 400;
  letter-spacing: -0.5px;
  color: #fff;
  text-decoration: none;
  cursor: pointer;

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
    font-size: 1.6rem;
    font-weight: 400;
    color: #eee;

    & li:not(:last-child) {
      margin-right: 3rem;
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