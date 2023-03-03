<template>
  <div class="g-box-list">
    <box-input
      :title="title"
      placeholder="ابحث..."
      :value="searchText"
      @getText="searchText = $event"
      @focus="toogleList"
      @outside="close"
    ></box-input>
    <div>
      <div :class="{ active: showList }">
        <ul>
        <li v-for="(item, i) in arraySearch.filter((e)=>e.text.toLowerCase().includes(searchText.toLowerCase()))" :key="i" @click="selectItem(item)">
          {{ item.text }}
        </li>
        <p v-if="!arraySearch.filter((e)=>e.text.toLowerCase().includes(searchText.toLowerCase())).length">لا يوجد عناصر</p>
      </ul>
      </div>

    </div>
    <div>
      <p v-for="(item, i) in selectElement" :key="i" @click="removeList(item)">
        <span>{{ item.text }}</span>
        <span>حذف</span>
      </p>
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
      type: Array,
      required: false,
      default : null
    },
  },
  data() {
    return {
      showList: false,
      arraySearch: this.value !== null ? this.items.filter((e)=> !this.value.includes(e.val)) : this.items,
      selectElement: this.value !== null ? this.items.filter((e)=> this.value.includes(e.val)) : [] ,
      searchText : ""
    }
  },
  methods: {
    toogleList() {
      this.showList = true
    },
    close() {
      this.showList = false
    },
    selectItem(item) {
      this.searchText = "";
      this.selectElement.push(item)
      this.arraySearch = this.arraySearch.filter((e) => e.val !== item.val)
      const select = this.selectElement.map((e) => e.val)
      this.$emit('selectList', select);
    },
    removeList(item) {
      this.arraySearch.push(item)
      this.selectElement = this.selectElement.filter((e) => e.val !== item.val)

      const select = this.selectElement.map((e) => e.val)
      this.$emit('selectList', select)
    },
    // searchText(text) {
    //   this.arraySearch.filter((e)=>e.text.includes(text))
    // },
  },
}
</script>
