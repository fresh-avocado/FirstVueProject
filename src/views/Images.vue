<template>
     <div class="images-container">
          <h1 id="title">Random Images</h1>
          <ImageViewer></ImageViewer>
          <!-- TODO: hacerlo con algo parecido al RecyclerViewer -->
     </div>
</template>

<script>
import ImageViewer from '../components/ImageViewer.vue';

export default {
     name: 'Images',
     components: {
          ImageViewer
     }
}
</script>

<style scoped>
#title {
     margin-top: 1%;
     display: flex;
     justify-content: center;
}
</style>