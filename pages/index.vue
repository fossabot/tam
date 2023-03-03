<template>
  <div class="container">
    <h1 @click="openPop('title')">nnapp</h1>

    <pop class="title large">
      <h1>العنوان</h1>
      <div class="elements">
        <p>
          في هذا المكان نحدد النص المراد كتابته <a href="#">من هنا</a>و ل بلم
          يمبلب ميبلم
        </p>
        <box-input
          title="حقل نصي"
          :value="text"
          @getText="text = $event"
        ></box-input>
        <box-list
          title="حقل اختيار متعدد"
          :items="[
            {
              text: 'Html',
              val: 'html',
            },
            {
              text: 'css',
              val: 'css',
            },
            {
              text: 'javaScript',
              val: 'js',
            },
            {
              text: 'PHP',
              val: 'php',
            },
            {
              text: 'MySQL',
              val: 'mysql',
            },
          ]"
          @selectList="arraySelect = $event"
        ></box-list>

        <box-select
          title="حقل اختيار واحد"
          :items="[
            {
              text: 'العربية',
              val: 'ar',
            },
            {
              text: 'الأنجليزية',
              val: 'en',
            },
          ]"
          :value="eleSelect"
          @selectElement="eleSelect = $event"
        ></box-select>


        <box-boolean
          title="حقل تفعيل/ايقاف"
          des="قم بتفعيل هذا الخيار اذا اردت شي معين مثلا اضافة كذا وكذا وكذا"
          :value="isTrue"
          @selectBool="isTrue = !isTrue"
        ></box-boolean>

        <box-checkbox
          title="حقل اختيار"
          :value="true"
          @selectBool="isTrue = !isTrue"
        ></box-checkbox>


        <button @click="run" class="g-btn">
          <i class="ri-customer-service-line"></i>انشاء
        </button>
      </div>
    </pop>

  </div>
</template>

<script>
import methods from '@/global/methods.js'
import boxList from '~/components/box-list.vue'
export default {
  components: { boxList },
  mixins: [methods],
  data() {
    return {
      isTrue: true,
      eleSelect: 'en',
      text: '',
      arraySelect: [],
    }
  },

  methods: {
    run() {
      console.log(this.arraySelect)
    },
    go() {
      console.log('out')
    },
  },
}
</script>
