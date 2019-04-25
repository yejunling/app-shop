<template>
  <div>
    <v-header/>
    <v-blogContent/>
  </div>
</template>

<script>
    import Header from '@/components/index/header.vue'
    import BlogContent from '@/components/blog/content.vue'

    export default {
      components: {
        'v-header': Header,
        'v-blogContent':BlogContent
      },
    }
</script>

<style scoped>

</style>
