<template>
     <div>
          <div class="posts-container" v-bind:key="post.id" v-for="post in posts">
               <Post v-bind:post="post" />
          </div>
     </div>
</template>

<script>
import Post from './Post.vue';

export default {
     name: 'postsparser',
     components: {
          Post
     },
     props: ['posts']
}
</script>

<style>
     .posts-container {
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 1%;
     }
</style>