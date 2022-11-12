<template>
  <button :class="buttonClass">{{ text }}</button>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: false,
      default: "primary",
    },
    redirect: {
      required: false,
    },
  },
  computed: {
    buttonClass() {
      return {
        [this.type.toLowerCase()]: true,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  padding: 2rem 4.8rem;
  border: 2px solid #fba820;
  border-radius: 50rem;
  transition: transform 0.1s, background-color 0.2s;
  display: inline-block;
  text-decoration: none;
  font-size: 1.6rem;
  font-weight: 500;

  @media (max-width: 600px) {
    & {
      padding: 1.6rem 3.2rem;
      font-size: 1.4rem;
    }
  }

  &:hover {
    background-color: #252525;
    transform: translateY(-4px);
  }
  &:active {
    transform: translateY(0) scale(0.98);
  }
}

.primary {
  background: none;
  color: #fff;
  &:hover {
    background-color: #fba820;
    transform: translateY(-4px);
    color: #252525;
  }
  &:active {
    transform: translateY(0) scale(0.98);
  }
}

.secondary {
  background-color: #252525;
  color: #fff;
  padding: 1.2rem 2.4rem;
  font-size: 1.4rem;

  transition: all 0.2s;
  &:hover {
    color: #fba820;
  }
}
</style>