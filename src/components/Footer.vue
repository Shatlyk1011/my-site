<template>
  <div class="footer-container">
    <footer class="footer">
      <div class="contacts">
        <div class="mail">
          <span>Email: </span>
          <a href="mailto:shatlykabdullayev@mail.ru"
            >shatlykabdullayev@mail.ru</a
          >
        </div>
        <div class="phone">
          <span>Телефон:</span> <a href="tel:+79965177225">+79965177225</a>
        </div>
      </div>
      <div class="footer__descr">
        <WebLinks />
        <div class="footer__rights">&#169; 2022 Все права защищены.</div>
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
  z-index: 999;
  position: relative;
}

.contacts {
  font-size: 1.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.4rem;
  align-items: flex-start;

  & span {
    font-weight: 600;
    letter-spacing: 0.8px;
  }

  & a:link,
  a:visited {
    text-decoration: none;
    color: #fba820;
    border-bottom: 1px solid transparent;
    transition: all 0.2s;
    letter-spacing: 0.4px;

    &:hover {
      border-bottom: 1px solid #fba820;
    }
  }
}

.footer {
  margin: 0 25rem;
  border-top: 1px solid #3e3e3e;
  color: #fff;
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 2rem;
  column-gap: 3rem;
  padding: 5rem 10rem;
  &__descr {
    display: flex;
    justify-content: space-between;
    gap: 1.4rem;
    align-items: flex-end;

    display: flex;
    flex-direction: column;
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