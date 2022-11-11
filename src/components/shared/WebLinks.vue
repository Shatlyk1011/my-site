<template>
  <ul class="social-links">
    <li class="social-link">
      <a target="_blank" href="https://instagram.com/shatlykabdullayew"
        ><ion-icon class="icon" name="logo-instagram"></ion-icon
      ></a>
    </li>
    <li class="social-link">
      <a target="_blank" href="https://vk.com/shatlyk99"
        ><ion-icon class="icon" name="logo-vk"></ion-icon
      ></a>
    </li>
    <li class="social-link">
      <a target="_blank" href="https://t.me/sh_1415926535"
        ><ion-icon class="icon" name="send"></ion-icon
      ></a>
    </li>
  </ul>
</template>


<style scoped lang="scss">
.social-links {
  // margin: 15rem 0 5rem 0.5rem;
  display: flex;
  gap: 3.6rem;
  list-style: none;
}

.icon {
  height: 2rem;
  width: 2rem;
  color: #fff;

  transition: all 0.2s;

  &:hover {
    transform: translateY(-2px) scale(1.1);
    color: #fba820;
  }
}
</style>