<template>
  <div class="modal">
    <div class="wrap">
      <div class="thanks">Спасибо!</div>
      <p class="thanks__text">
        За ваш интерес. Я с вами свяжусь в ближайшее время
      </p>

      <button
        class="thanks__close"
        @click="closeThankYou"
        v-scroll-to="'#hero'"
      >
        закрыть
      </button>
    </div>
  </div>

  <div class="overlay" @click="closeThankYou"></div>
</template>

<script>
import Button from "@/components/shared/Button.vue";
export default {
  components: {
    Button,
  },

  props: ["closeThankYou"],
};
</script>

<style lang="scss" scoped>
.modal {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30%;
  background-color: #fba820;
  padding: 3.2rem 4.8rem;
  border-radius: 2px;
  box-shadow: 0 3rem 5rem rgba(0, 0, 0, 0.3);
  z-index: 1500;

  @media (max-width: 1250px) {
    width: 50%;
  }
  @media (max-width: 600px) {
    width: 75%;
  }
}

.wrap {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  text-align: center;
  align-items: center;
}

.thanks {
  font-family: "Source Sans Pro", sans-serif;
  font-size: 3.6rem;
  font-weight: 600;

  &__text {
    font-size: 1.8rem;
    font-weight: 400;
    line-height: 1.2;
    color: #252525;
    @media (max-width: 600px) {
      line-height: 1.2;
    }
  }

  &__close {
    padding: 0.2rem 0.4rem;
    background: #252525;
    padding: 0.4rem 0.6rem;
    font-size: 1.2rem;
    font-weight: 500;
    line-height: 1;
    border: none;
    outline: none;
    margin-top: 2rem;
    cursor: pointer;
    color: #fba820;

    transition: all 0.1s;
    &:active {
      transform: translateY(1px) scale(0.98);
    }
  }
}

.close-modal {
  position: absolute;
  top: 0;
  right: 2rem;
  font-size: 4.2rem;
  color: #333;
  cursor: pointer;
  border: none;
  background: none;
  color: #252525;
}

/* CLASSES TO MAKE MODAL WORK */

.hidden {
  display: none;
}

.overlay {
  position: absolute;
  top: -100%;
  left: 0;
  width: 100%;
  height: 230%;
  background-color: rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(7px);
  z-index: 1000;

  @media (max-width: 900px) {
    height: 260%;
  }
}
</style>