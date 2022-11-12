import { createStore } from "vuex";

export default createStore({
  state: {
    works: [
      {
        title: "Live room + Google firebase",
        descr:
          "Живая комната - место где все его участники могут переписываться в режиме реального времени . Для использование требуется регистрация. Для backend было использовано firebase.",
        site: "https://live-room-place.netlify.app",
        github: "https://github.com/Shatlyk1011/live-room",
        img: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      },

      {
        title: "Natours",
        descr:
          "Красивейший landing page, со сложными компонентами. На этом сайте, модальное окно(при нажатии на карточки) реализовано на чистом CSS.",
        site: "https://outdoors-shatlyk.netlify.app",
        github: "https://github.com/Shatlyk1011/natours",
        img: "https://images.unsplash.com/photo-1532339142463-fd0a8979791a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        order: "order",
        orderGrid: "orderGrid",
      },
      /*  */
    ],
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
