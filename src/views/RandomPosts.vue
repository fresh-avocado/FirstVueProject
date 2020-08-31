<template>
  <div class="random-posts-container">
       <h1 id="title">Random Posts</h1>
       <RandomPostsParser></RandomPostsParser>
  </div>
</template>

<script>
import RandomPostsParser from '../components/RandomPostsParser.vue';

export default {
     name: 'RandomPosts',
     components: {
          RandomPostsParser
     }
}
</script>

<style>
#title {
     margin: 1%;
}
</style>