<template>
  <div class="g-box-input">
    <label>{{ title }}</label>
    <input :value="value" @input="$emit('getText',$event.target.value)" type="text" :placeholder="placeholder" @focus="$emit('focus')" @focusout="$emit('focusout')" v-click-outside="outside" />
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
      type: String,
      required: false,
      default: "",
    },
    placeholder : {
      type: String,
      required: false,
      default: "",
    }
  },
  methods : {
    outside() {
      this.$emit('outside');
    }
  }
}
</script>
