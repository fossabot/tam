export default {
  methods: {
    closePop(eleClass) {
      const element = document.querySelector(`.${eleClass}`);
      element.classList.remove("active");
    },
    openPop(eleClass) {
      const element = document.querySelector(`.${eleClass}`);
       element.classList.add("active");
    },
  },
}
