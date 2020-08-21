<template>
     <div class="posts">
          <div class="posts-header">
               <h1 class="title posts-header-title">All Posts from Pachay</h1>
               <!-- TODO: toggle entre "Ordenar por Rating" y "Ordenar por Fecha" -->
               <button v-on:click="orderPosts" class="posts-header-button">{{orderBy}}</button>
          </div>
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
               posts: [],
               orderBy: "Ordenar por Rating",
               orderByRating: true
          }
     },
     created() {
          axios.get('http://localhost:8080/post')
          // fetch all validated posts, this can be done by changing the request
          .then(response => this.posts = response.data) // .data !!!!!!!
          .catch(error => console.log("Error when fetching Pachay posts."));
     },
     methods: {
          orderPosts() {
               if (this.orderByRating) {
                    // fetch posts again ordered by rating (need to change request)
                    this.orderBy = "Ordenar por Fecha";
               } else {
                    // fetch posts again ordered by date (original request)
                    this.orderBy = "Ordenar por Rating";
               }
               this.orderByRating = !this.orderByRating;
          }
     }
}
</script>

<style scoped>
     .title {
          padding: 10px;
     }
     .posts-header {
          display: flex;
          justify-content: space-between;
          margin: 1%;
     }
     .posts-header-title {
          
     }
     .posts-header-button {
          background-color: chartreuse;
          padding: 1%;
          border: none;
          border-radius: 50px;
     }
</style>