<template>
  <div class="box">


    <box-list
      title="اختيار متعدد"
      :items="[
        {
          text: 'الخيار 1',
          val: 'select-1',
        },
        {
          text: 'الخيار 2',
          val: 'select-2',
        }
      ]"
      @selectList="yourVariable = $event"
    ></box-list>

    <br>
    <p>القيم التي في المتغير : </p>
    <p>{{ yourVariable }}</p>


  </div>
</template>

<script>
export default {
  data() {
    return {
      yourVariable : []
    }
  },
  methods: {
  },
}
</script>

<style scoped>
.box {
  width: 250px;
  margin: 100px auto;
}
</style>
