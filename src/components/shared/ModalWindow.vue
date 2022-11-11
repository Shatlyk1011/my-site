<template>
  <div class="modal">
    <button class="close-modal" @click="modal">&times;</button>
    <form @submit.prevent="submitForm" class="form">
      <h3 class="form__heading">Обратная связь</h3>
      <div class="form__group">
        <input
          class="form__input"
          type="text"
          id="name"
          placeholder="Ваше имя*"
          required
        />
        <label class="form__label" for="name">Ваше имя</label>
      </div>
      <div class="form__group">
        <input
          class="form__input"
          type="text"
          id="hh-page"
          placeholder="Телефон"
        />
        <label class="form__label" for="hh-page">Телефон</label>
      </div>
      <div class="form__group">
        <input
          class="form__input"
          type="text"
          id="webpage"
          placeholder="Социальная сеть*"
          required
        />
        <label class="form__label" for="webpage">Социальная сеть</label>
      </div>
      <Button type="secondary" text="Отправить!" />
    </form>
  </div>
  <div class="overlay" @click="modal"></div>
</template>

<script>
import Button from "@/components/shared/Button.vue";
export default {
  components: {
    Button,
  },
  props: ["modal", "submitForm"],
  data() {
    return {
      showModal: false,
    };
  },
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
  padding: 4.8rem 3.2rem;
  border-radius: 2px;
  box-shadow: 0 3rem 5rem rgba(0, 0, 0, 0.3);
  z-index: 2;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  align-items: center;
  // justify-content: start;
  &__heading {
    font-family: "Source Sans Pro", sans-serif;
    font-weight: 600;
    font-size: 3.2rem;
    margin-right: 2rem;
    margin-bottom: 1.6rem;
  }
  &__group {
    font-size: 1.6rem;
    display: flex;
    width: 80%;
    flex-direction: column;
  }

  &__input {
    border: none;
    outline: none;
    padding: 1rem 2rem;
    border-radius: 2px;
    border-bottom: 3px solid transparent;
    border-top: 3px solid transparent;
    transition: all 0.2s;
    &::placeholder {
      font-family: "Open Sans", sans-serif;
      font-size: 1.4rem;
      font-weight: 600;
      color: rgba(#252525, 0.7);
      margin: 0;
      line-height: 1;
    }
    &:focus {
      box-shadow: 0 0 2rem rgba(0, 0, 0, 0.1);
      border-bottom: 3px solid #008f00;
    }
    &:focus:invalid {
      border-bottom: 3px solid #d00000;
    }
  }

  &__label {
    font-family: "Open Sans", sans-serif;
    color: rgba(#252525, 0.8);
    font-size: 1.2rem;
    font-weight: 600;
    margin-left: 1.2rem;
    // margin: 0;
    margin-top: 5px;
    transition: all 0.2s;
  }
  &__input:placeholder-shown + &__label {
    opacity: 0;
    visibility: hidden;
    transform: translateY(-3rem);
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
  height: 200%;
  background-color: rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(5px);
  z-index: 1;
}
</style>