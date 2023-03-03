<template>
  <div class="g-box-checkbox">
    <!-- <input type="checkbox" :checked="value" @input="$emit('getBool',$event.target.value)" /> -->
    <div @click="select" :class="{active : isTrue}">
      <span><i class="ri-check-line"></i></span>
    </div>
    <label>{{ title }}</label>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: false,
      default: 'عنوان',
    },
    value: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data() {
    return {
      isTrue : this.value
    }
  },
  methods : {
    select() {
      this.isTrue = !this.isTrue
      this.$emit("selectBool",this.isTrue);
    }
  }
}
</script>
