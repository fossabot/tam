<template>
  <div class="container">
    <h1 @click="openPop('title')">nnapp</h1>
    <pop class="title">
      <h1>العنوان</h1>
      <div class="elements">
        <p>في هذا المكان نحدد النص المراد كتابته <a href="#">من هنا</a>و ل بلم يمبلب ميبلم</p>
        <div class="g-box-input">
          <label>اسم المستخدم</label>
          <input type="text">
        </div>
        <div class="g-box-input">
          <label>اسم المستخدم</label>
          <input type="text">
        </div>
        <button @click="run" class="g-btn"><i class="ri-customer-service-line"></i>انشاء</button>
      </div>
    </pop>
  </div>
</template>

<script>
import methods from "@/global/methods.js"
export default {
  mixins : [methods],
  methods :{
    run() {
      alert('ff')
    }
  }
}
</script>
