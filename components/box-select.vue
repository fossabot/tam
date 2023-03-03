<template>
  <div class="g-box-select">
    <div>
      <label>{{ title }}</label>
    </div>
    <div v-click-outside="close">
      <div @click="show">
        <p>{{ select }}</p>
      </div>
      <div>
        <div :class="{ active: showList }">
          <ul>
          <li v-for="(item, i) in items" :key="i" @click="selectElement(item)">
            {{ item.text }}
          </li>
        </ul>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
      default: 'عنوان',
    },
    items: {
      type: Array,
      required: true,
    },
    value: {
      type: String,
      required: false,
      default: null,
    },
  },
  data() {
    return {
      showList: false,
      select:
        this.value === null
          ? 'اختر'
          : this.items.find((e) => e.val === this.value).text,
    }
  },
  methods: {
    selectElement(item) {
      this.showList = !this.showList
      this.select = item.text
      this.$emit('selectElement', item.val)
    },
    show() {
      this.showList = !this.showList
    },
    close() {
      this.showList = false
    }

  }
}
</script>
