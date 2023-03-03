<template>
  <div class="pop" @click.self="close">
    <div class="box" >
      <button @click="closeHere()" class="close"><i class="ri-close-line"></i></button>
        <slot></slot>
    </div>
  </div>
</template>

<script>


export default {
  mounted() {
    this.scroll();

  },
  methods : {
    closeHere() {
      const element = event.currentTarget.parentElement.parentElement;
      element.classList.remove("active");
      // element.classList.contains("active") ?  : element.classList.add("active");
      // event.currentTarget.classList.remove()
      // event.currentTarget.classList.add()

      // if(event) {

      // }
    },
    close() {
      const element = event.currentTarget;
      element.classList.remove("active");
    },
    scroll() {
      const pop =  this.$el.querySelector(".box");
    console.log(window.innerHeight);
    console.log(pop.offsetHeight);

    if(window.innerHeight < pop.offsetHeight+20) {
      this.$el.classList.add("scroll");
    }


    }
  }
}
</script>
