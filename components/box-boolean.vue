<template>
  <div class="g-box-boolean">
    <div>
      <div>
        <label>{{ title }}</label>
        <p> {{ des }}</p>
      </div>
      <div>
        <div :class="{ active: isTrue }" @click="changeBool()">
          <span></span>
        </div>
      </div>
    </div>
  </div>
</template>


<script>


export default {

props : {
  title : {
    type : String,
    required : true,
    default : "عنوان"
  },
  des : {
    type : String,
    required : true,
    default : "عنوان"
},
value : {
    type : Boolean,
    required : false,
    default : false
}
},
data() {
  return {
    isTrue : this.value
  }
},
methods : {
  changeBool() {
    this.isTrue = !this.isTrue
    this.$emit("selectBool",this.isTrue);
  }
}
}
// methods : {
//   selectElement(item) {
//     this.showList = !this.showList;
//     this.select = item.text;
//     this.$emit("selectElement",item);
//   },
//   show() {
//     this.showList = !this.showList
//   }
// }

</script>
