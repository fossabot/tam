<template>
  <div class="box">
    <box-list
      title="الهوايات"
      :items="[
        {
          text: 'البرمجة',
          val: 'pro',
        },
        {
          text: 'التصميم',
          val: 'des',
        }
      ]"
      @selectList="run($event)"
    ></box-list>


    <box-list
      title="اللغة"
      :items="[
        {
          text: 'العربية',
          val: 'Arabic',
        },
        {
          text: 'الانجليزية',
          val: 'English',
        }
      ]"
      @selectList="run($event)"
    ></box-list>
  </div>
</template>

<script>
export default {
  methods: {
    run(e) {
      console.log(e)
    },
  },
}
</script>

<style scoped>
.box {
  width: 250px;
  margin: 100px auto;
}
</style>
