<template>
     <div class="posts">
          <div class="posts-header">
               <h1 class="title posts-header-title">All Posts from Pachay</h1>
               <!-- TODO: toggle entre "Ordenar por Rating" y "Ordenar por Fecha" -->
               <button v-on:click="orderPosts" class="posts-header-button">{{orderBy}}</button>
          </div>
          <PostsParser/>
     </div>
</template>

<script>
import PostsParser from '../components/PostsParser.vue';

export default {
     name: 'posts',
     components: {
          PostsParser,
     },
     data () {
          return {
               orderBy: "Ordenar por Rating",
               orderByRating: true,
          }
     },
     methods: {
          orderPosts() {
               if (this.orderByRating) {
                    // TODO: send prop in order to sort by rating
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
     .posts-header-button {
          background-color: chartreuse;
          padding: 1%;
          border: none;
          border-radius: 50px;
     }
</style>