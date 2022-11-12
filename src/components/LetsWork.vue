<template>
  <div class="lw-container">
    <div class="contact" id="contact">
      <h3 class="contact__heading">Давайте работать вместе!</h3>
      <div class="contact__descr">
        Если вам понравились мои работы, то пожалуйста дайте обратную связь!!
      </div>
      <div class="wrap-btn">
        <Button text="Оставить контакты" @click="modalWindow" />
      </div>
    </div>
    <Form :submitForm="submitForm" :modal="modalWindow" v-if="showModal" />
    <ThankYouModal :closeThankYou="closeThankYou" v-if="showThankYou" />
  </div>
</template>

<script>
import { ref } from "vue";

import Form from "@/components/shared/Form.vue";
import ThankYouModal from "@/components/shared/ThankYouModal.vue";
import Button from "@/components/shared/Button.vue";

export default {
  name: "LetsWork",
  components: {
    Form,
    ThankYouModal,
    Button,
  },

  setup() {
    const showModal = ref(false);
    const showThankYou = ref(false);

    const modalWindow = () => {
      showModal.value = !showModal.value;
    };

    const submitForm = () => {
      showModal.value = !showModal.value;
      showThankYou.value = true;
    };

    const closeThankYou = () => {
      showThankYou.value = false;
    };

    return { showModal, showThankYou, modalWindow, submitForm, closeThankYou };
  },
};
</script>

<style lang="scss" scoped>
.lw-container {
  background-color: #252525;
  min-height: 52rem;
  position: relative;
  @media (max-width: 1250px) {
    & {
      min-height: 45rem;
    }
  }
  @media (max-width: 900px) {
    & {
      min-height: 37rem;
    }
  }
}

.contact {
  text-align: center;
  padding: 8rem 0 6rem 0;
  margin: 0 auto;

  @media (max-width: 1250px) {
    padding: 6rem 0 4rem 0;
  }

  @media (max-width: 900px) {
    & {
      padding: 4.2rem 2.4rem 3.2rem;
    }
  }
  &__heading {
    font-family: "Source Sans Pro", sans-serif;
    font-size: 6.4rem;
    font-weight: 700;
    color: #eaeaea;
    letter-spacing: 1px;

    @media (max-width: 1250px) {
      & {
        font-size: 4.8rem;
      }
    }
    @media (max-width: 600px) {
      & {
        font-size: 3.2rem;
      }
    }
  }

  &__descr {
    color: #d9d9d9;
    font-size: 1.8rem;
    font-weight: 400;
    margin: 0 auto;
    margin-top: 2.2rem;
    max-width: 50rem;
    line-height: 1.5;
    @media (max-width: 900px) {
      & {
        font-size: 1.6rem;
        margin-top: 1.4rem;
      }
    }
  }
}

.wrap-btn {
  margin-top: 6rem;
  display: flex;
  gap: 2.4rem;
  justify-content: center;

  @media (max-width: 900px) {
    margin-top: 4.8rem;
  }
}
</style>