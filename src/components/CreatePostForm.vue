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
          <input type="submit" class="form-element submit-post" v-on:click="uploadPost" value="Create Post">
     </div>
</template>

<script>
import { required, minLength, between } from 'vuelidate/lib/validators';
import axios from 'axios';

export default {
     name: 'NewPostForm',
     data() {
          return {
               token: localStorage.getItem('jwt'),
               formErrors: [],
               title: null,
               description: null,
               youtubeLinksCount: 0,
               youtubeLinks: [],
               ejercicios: [],
               solucionarios: [],
               material: [],
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
     methods: {
          deleteSelectedFile(name) {
               if (name == "ejercicio" || name == "solucionario" || name == "material") {
                    document.getElementById(name).value = "";
               } else {
                    console.log("Invalid name passed to deleteSelectedFile funtion.");
               }
          },
          uploadPost() {
               axios({
                    method: 'post',
                    url: 'http://localhost:8080/post',
                    headers: {
                         'Content-Type': 'application/json',
                         'Authorization': `Bearer ${this.token}`
                    },
                    data: {
                         'title': this.title,
                         'description': this.description,
                         'topic': this.selectedTopic,
                         'subtopic': this.selectedSubtopic,
                         // TODO: agarrar los links que el usuario pone, porq por ahora se estan ignorando 
                         'videos': this.youtubeLinks,
                         // si quiero subir archivos, tengo que hacer un request antes para crearlos en el server
                         // por ahora no mandaré archivos
                         'ejercicios': [],
                         'solucionario': [],
                         'soporte': []
                    }
               }).then(response => {
                    if (response.status == 200) {
                         console.log(response.data);
                         alert('¡Éxito al subir el Post! Espere a que un moderador valide su Post.');
                         this.$router.push("home");
                    } else {
                         aler('Ocurrió un error. El Post no se pudo subir.');
                    }
               });
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
     margin: 1% 15% 1% 15%;
     flex: 2;
     flex-basis: 80%;
     padding: 0.5%;
}

@media(max-width: 700px) {
     .form-element {
          margin: 1% 5% 1% 5%;
     }
}

.submit-post {
     background-color: red;
}


</style>