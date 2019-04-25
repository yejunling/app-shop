<template>
  <v-header/>
  <v-order/>
  <v-footer/>
</template>
<script>
    import Header from '@/common/_header.vue'
    import Order from '@/order/order.vue'
    import Footer from '@/common/_footer.vue'
    export default {
      components:{
        "v-header":Header,
        "v-order":Order,
        'v-footer': Footer
      },
    }
</script>

<style scoped>

</style>
