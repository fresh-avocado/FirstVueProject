<template>
  <div class="image-viewer-container">
       <div v-if="loading" id="loading-animation">
            <h3>Loading...</h3>
            <!-- <hollow-dots-spinner :animation-duration="1500" :dot-size="15" :dots-num="3" color="#ff1d5e"></hollow-dots-spinner> -->
       </div>
       <div v-else class="image" v-for="image in images" v-bind:key="image.id">
            <p class="image-title"><strong>Title: </strong>{{image.title}}</p>
            <img class="image-image" v-bind:src="image.thumbnailUrl" alt="Image Not Found">
       </div>
  </div>
</template>

<script>
import axios from 'axios';
// import { HollowDotsSpinner } from 'epic-spinners';

export default {
     name: 'ImageViewer',
     data() {
          return {
               images: [],
               loading: true,
          }
     },
     components: {
          // HollowDotsSpinner
     },
     created() {
          this.loading = true;
          axios.get('https://jsonplaceholder.typicode.com/photos').then( (response) => {
               this.images = response.data;
               this.loading = false;
          });
     }
}
</script>

<style>

#loading-animation {
     display: flex;
     align-items: center;
}

.image-viewer-container {
     display: flex;
     justify-content: space-evenly;
     flex-wrap: wrap;
     margin: 1%;
}

/* large screens */
.image {
     border: deeppink;
     flex-basis: 10%;
     display: flex;
     flex-direction: column;
     margin: 1%;
}

/* medium screens */
@media(max-width: 1200px) {
     .image {
          flex-basis: 30%;
     }
}

/* small screens */
@media(max-width: 768px) {
     .image {
          flex-basis: 50%;
     }
}

.image-title {
     flex: 3;
}

.image-image {
     flex: 4;
}

</style>