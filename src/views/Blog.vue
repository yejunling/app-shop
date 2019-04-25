<template>
  <div class="blog">
    <v-header/>
    <v-blog/>
    <v-footer/>
  </div>
</template>

<script>
  import Header from '@/components/index/header.vue'
  import Footer from '@/common/_footer.vue'
  import Blog from '@/components/blog/blog.vue'

    export default {
      components: {
        'v-header': Header,
        'v-footer': Footer,
        'v-blog':Blog
      },
    }
</script>

<style  scoped>

</style>
