import { createStore } from "vuex";

export default createStore({
  state: {
    works: [
      {
        title: "Live room + Google firebase",
        descr:
          "Для использование требуется регистрация. Для backend было использовано firebase. Живая комната, место где в режиме реального времени могут переписываться все его участники.",
        site: "https://live-room-place.netlify.app",
        github: "https://github.com/Shatlyk1011/live-room",
        img: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      },

      {
        title: "Natours",
        descr:
          "Красивейший landing page, со сложными компонентами. На этом сайте, модальное окно(при нажатии на карточки) реализовано на чистом CSS. .",
        site: "https://outdoors-shatlyk.netlify.app",
        github: "https://github.com/Shatlyk1011/natours",
        img: "https://images.unsplash.com/photo-1543965860-0a2c912bc32f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dHJhdmVsaW5nfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        order: "order",
        orderGrid: "orderGrid",
      },

      {
        title: "Google Works",
        descr:
          "Проект разрабатывается на подобии сайта careers.google.com. Используется: Vue3, Vue router, Typescript, Tailwind, Composition API. Из особенностей: навигация страниц, фильтр по 3+ параметрам в разделе 'Jobs'. GitHub",
        site: "https://outdoors-shatlyk.netlify.app",
        github: "https://github.com/Shatlyk1011/natours",
        img: "https://images.unsplash.com/photo-1600783245777-080fd7ff9253?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      },
    ],
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
