<template>
     <div class="container">
          <!-- TODO: añadir search bar que permita buscar posts por título -->
          <!-- TODO: para el search bar, usar: mixins, filters y custom-directives (ver videos de NetNinja) -->
          <div class="search-bar">
               <input type="text" v-model="search" placeholder="Search by post title ..." id="searchBar">
          </div>
          <div v-if="loading">
               <h3 id="loading-message">Loading...</h3>
          </div>
          <!-- implicitly using 'filteredPosts' from the mixin -->
          <div v-else class="posts-container" v-bind:key="post.id" v-for="post in filteredPosts">
               <Post v-bind:post="post" />
          </div>
     </div>
</template>

<script>
import Post from './Post.vue';
import axios from 'axios';
import filterPostMixin from '../mixins/filterPostMixin';

export default {
     name: 'postsparser',
     components: {
          Post
     },
     data() {
          return {
               posts: [],
               search: '',
               loading: true,
          }
     },
     created() {
          axios.get('http://localhost:8080/post')
          // fetch all validated posts, this can be done by changing the request
          .then(response => {
               this.loading = false;
               this.posts = response.data;
          }) // .data !!!!!!!
          .catch(error => {console.log(`Error when fetching Pachay posts: ${error}`)});
     },
     mixins: [
          filterPostMixin
     ]
}
</script>

<style>
     .container {
          display: flex;
          justify-content: center;
          flex-direction: column;
          margin: 1%;
     }
     .search-bar {
          padding: 1%;
          margin: 1%;
     }
     #searchBar {
          padding: 1%;
          margin: 1%;
     }
     .posts-container {
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 1%;
     }
</style>