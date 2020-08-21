<template>
  <div class="image-viewer-container">
       <div class="image" v-for="image in images" v-bind:key="image.id">
            <p class="image-title"><strong>Title: </strong>{{image.title}}</p>
            <img class="image-image" v-bind:src="image.thumbnailUrl" alt="Image Not Found">
       </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
     name: 'ImageViewer',
     data() {
          return {
               images: []
          }
     },
     created() {
          axios.get('https://jsonplaceholder.typicode.com/photos').then( (response) => {
               this.images = response.data;
          });
     }
}
</script>

<style>
.image-viewer-container {
     display: flex;
     justify-content: space-evenly;
     flex-wrap: wrap;
     margin: 1%;
}

.image {
     border: deeppink;
     flex-basis: 10%;
     display: flex;
     flex-direction: column;
     margin: 1%;
}

.image-title {
     flex: 3;
}

.image-image {
     flex: 4;
}

</style>