<template>
  <div class="container">
       <button v-on:click="toggleRandom" id="toggle-button">{{message}}</button>
       <keep-alive>
            <component v-bind:is="currentComponent"></component>
       </keep-alive>
  </div>
</template>

<script>
import RandomPosts from './RandomPosts.vue';
import RandomImages from '../components/ImageViewer.vue';

export default {
     name: 'Random',
     components: {
          RandomPosts,
          RandomImages
     },
     data() {
          return {
               message: 'Random Images',
               randomPosts: true,
               currentComponent: 'RandomPosts'
          }
     },
     methods: {
          toggleRandom() {
               if (this.randomPosts) {
                    this.message = 'Random Posts';
                    this.currentComponent = 'RandomImages';
               } else {
                    this.message = 'Random Images';
                    this.currentComponent = 'RandomPosts';
               }
               this.randomPosts = !this.randomPosts;
          }
     }
}
</script>

<style>
     .container {
          display: flex;
          flex-direction: column;
     }
     #toggle-button {
          padding: 1%;
          background-color: red;
          color: seashell;
     }
</style>