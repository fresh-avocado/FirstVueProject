<template>
  <div class="container">
       <div class="search-bar">
            <input type="text" placeholder="Search by title ..." v-model="search" id="searchBar">
       </div>
       <div v-if="loading" class="loading">
            <h3>Loading...</h3>
       </div>
       <div v-else class="random-posts-parser-container" v-for="post in filteredPosts" v-bind:key="post.id">
          <p class="random-post-parse-element"><strong>Title: </strong>{{post.title}}</p>
          <p class="random-post-parse-element"><strong>Body: </strong>{{post.body}}</p>
       </div>
  </div>
</template>

<script>
import axios from 'axios';
import filterPostMixin from '../mixins/filterPostMixin';

export default {
     name: 'RandomPostsParser',
     data() {
          return {
               posts: [],
               search: '',
               loading: true,
          }
     },
     created() {
          axios.get('https://jsonplaceholder.typicode.com/posts').then( (response) => {
               this.posts = response.data;
               this.loading = false;
          });
     },
     mixins: [
          filterPostMixin
     ]
}
</script>

<style>

.loading {
     display: flex;
     align-items: center;
}

.search-bar {
     padding: 1%;
     margin: 2%;
}

#searchBar {
     padding: 1%;
     margin: 1%;
}

.container {
     display: flex;
     justify-content: space-evenly;
     flex-wrap: wrap;
     margin: 1%;
     border-style: solid;
     border: black;
     border-width: 1px;
     flex-direction: column;
}

/* large screens */
.random-posts-parser-container {
     flex-basis: 10%;
     display: flex;
     flex-direction: column;
     margin: 1%;
}

/* medium screens */
@media(max-width: 1200px) {
     .random-posts-parser-container {
          flex-basis: 30%;
     }
}

/* small screens */
@media(max-width: 768px) {
     .random-posts-parser-container {
          flex-basis: 50%;
     }
}

.random-posts-parser-element {
     flex: 2;
}
</style>