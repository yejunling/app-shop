<template>
  <div class="content">
    <v-header/>
    <v-content/>
    <v-footer/>
  </div>
</template>

<script>
  import Header from '@/components/index/header.vue'
  import Footer from '@/common/_footer.vue'
  import Content from '@/components/blog/content.vue'

    export default {
      components: {
        'v-header': Header,
        'v-footer': Footer,
        'v-content':Content
      },
    }
</script>

<style scoped>

</style>
