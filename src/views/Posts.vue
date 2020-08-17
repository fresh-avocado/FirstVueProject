<template>
     <div class="posts">
          <h1 class="title">All Posts from Pachay</h1>
          <PostsParser v-bind:posts="posts" />
     </div>
</template>

<script>
import PostsParser from '../components/PostsParser.vue';
import axios from 'axios';

export default {
     name: 'posts',
     components: {
          PostsParser,
     },
     data () {
          return {
               posts: []
          }
     },
     created() {
          axios.get('http://localhost:8080/post')
          // fetch all validated posts
          .then(response => this.posts = response.data.filter(post => post.validated)) // .data !!!!!!!
          .catch(error => console.log("Error when fetching Pachay posts."));
     }
}
</script>

<style scoped>
     .title {
          padding: 10px;
     }
</style>