<template>
  <div class="footer-container">
    <footer class="footer">
      <div class="footer__descr">
        <div class="footer__rights">&#169; 2022 Все права защищены.</div>
        <WebLinks />
      </div>
    </footer>
  </div>
</template>

<script>
import WebLinks from "@/components/shared/WebLinks";
export default {
  name: "Footer",
  components: { WebLinks },
};
</script>

<style lang="scss">
.footer-container {
  background-color: #252525;
}

.footer {
  margin: 0 25rem;
  border-top: 1px solid #3e3e3e;
  color: #fff;
  &__descr {
    display: flex;
    justify-content: space-between;
    padding: 5rem 9rem;
  }

  &__rights {
    font-size: 1.2rem;
    font-weight: 600;
    color: #ababab;
    line-height: 1.4;
  }

  &__icons {
    display: flex;
    list-style: none;
    font-size: 1.6rem;
    gap: 3.2rem;
  }

  &__icon {
    color: #fff;

    transition: all 0.2s;

    &:hover {
      transform: translateY(-2px) scale(1.1);
      color: #fba820;
    }
  }
}

.no-margin {
  margin: 0;
}
</style>