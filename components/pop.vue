<template>
  <div class="pop">
    <div class="box">
      <button @click="closeHere()" class="close"><i class="ri-close-line"></i></button>
        <slot></slot>
    </div>
  </div>
</template>

<script>


export default {
  methods : {
    closeHere() {
      const element = event.currentTarget.parentElement.parentElement;
      element.classList.remove("active");
      // element.classList.contains("active") ?  : element.classList.add("active");
      // event.currentTarget.classList.remove()
      // event.currentTarget.classList.add()

      // if(event) {

      // }
    }
  }
}
</script>
