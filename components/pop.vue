<template>
  <div class="pop">
    <div class="box">
      <button @click="ClosePop()">Close</button>
      <h1>Title</h1>
      <div class="elements">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import methdos from "@/global/methods.js"

export default {
  mixins : methdos
}
</script>
