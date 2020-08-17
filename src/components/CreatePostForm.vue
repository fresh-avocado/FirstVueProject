<template>
     <div class="new-post-form">
          <input v-model="title" placeholder="Post Title..." class="post-title form-element">
          <!-- <span class="error" v-if="!$v.postTitle.required">Post title is required.</span> -->
          <textarea v-model="description" placeholder="Post Description..." class="post-description form-element"></textarea>
          <!-- <span class="error" v-if="!$v.postDescription.required">Post title is required.</span> -->
          <h3 class="form-element">Links de YouTube</h3>
          <input class="form-element" v-for="i in youtubeLinksCount" v-bind:key="i" placeholder="Link ...">
          <button class="form-element" v-on:click="youtubeLinksCount++">Add Link</button>
          <button class="form-element" v-if="youtubeLinksCount > 0" v-on:click="youtubeLinksCount--">Remove Link</button>
          <div class="topic-dropdown form-element">
               <h3>Tema:</h3>
               <select v-model="selectedTopic">
                    <option disabled value="">Please a topic</option>
                    <option v-for="(item, index) in topics" v-bind:key="item">{{index}}</option>
               </select>
               <!-- <span class="error" v-if="!$v.selectedTopic.required">Post title is required.</span> -->
          </div>
          <div v-if="selectedTopic" class="subtopic-dropdown form-element">
               <h3>Subtema:</h3>
               <select v-model="selectedSubtopic">
                    <option disabled value="">Please a subtopic</option>
                    <option v-for="subtopic in topics[selectedTopic]" v-bind:key="subtopic">{{subtopic}}</option>
               </select>
               <!-- <span class="error" v-if="!$v.selectedSubtopic.required">Post title is required.</span> -->
          </div>
          <h3 class="form-element">Ejercicios</h3>
               <input class="form-element" type="file" accept=".pdf" id="ejercicio"> 
               <button class="cancel-file-selection form-element" v-on:click="deleteSelectedFile('ejercicio')">Cancel</button>
          <h3 class="form-element">Solucionario</h3>
               <input class="form-element" type="file" accept=".pdf" id="solucionario"> 
               <button class="cancel-file-selection form-element" v-on:click="deleteSelectedFile('solucionario')">Cancel</button>
          <h3 class="form-element">Material de Soporte</h3>
               <input class="form-element" type="file" accept=".pdf" id="material"> 
               <button class="cancel-file-selection form-element" v-on:click="deleteSelectedFile('material')">Cancel</button>
          <button type="submit" class="form-element submit-post">Create Post</button>
     </div>
</template>

<script>
import { required, minLength, between } from 'vuelidate/lib/validators';

export default {
     name: 'NewPostForm',
     data() {
          return {
               formErrors: [],
               postTitle: null,
               postDescription: null,
               youtubeLinksCount: 0,
               youtubeLinks: [],
               selectedTopic: null,
               selectedSubtopic: null,
               topics: {
                    'Matemática': ['Ecuaciones', 'Geometría'],
                    'Física': ['MRU', 'Leyes de Newton'],
                    'Química': ['Ácidos y Bases', 'Estequiometría'],
                    'Biología': ['Genética Mendeliana', 'Células']
               }
          }
     },
     // las validaciones no funcionan aun, TODO: arreglarlas
     validations: {
          postTitle: {
               required,
               minLength: minLength(10)
          },
          postDescription: {
               required,
               between: between(50, 500)
          },
          selectedTopic: {
               required
          },
          selectedSubtopic: {
               required
          }
     },
     methods: {
          deleteSelectedFile(name) {
               if (name == "ejercicio" || name == "solucionario" || name == "material") {
                    document.getElementById(name).value = "";
               } else {
                    console.log("Invalid name passed to deleteSelectedFile funtion.");
               }
          }
     }
}
</script>

<style scoped>

.new-post-form {
     display: flex;
     flex-direction: column;
     padding: 5%;
}

.form-element {
     margin: 1%;
}

.submit-post {
     background-color: red;
}


</style>