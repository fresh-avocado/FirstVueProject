<template>
     <div class="create-post">
          <h1 class="create-post-title">Create a Post</h1>
          <CreatePostForm></CreatePostForm>
     </div>
</template>

<script>
import CreatePostForm from '../components/CreatePostForm.vue';

export default {
     name: 'CreatePost',
     components: {
          CreatePostForm
     }
}
</script>

<style>



</style>