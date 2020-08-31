<template>
     <div class="post">
          <h2>{{post.title}}</h2>
          <p>{{post.description}}</p>
          <p>Rating: {{post.rating}}</p>
          <p>Date created: {{post.date.substring(0,10)}}</p>
          <p>Author: {{post.author.firstName}} {{post.author.lastName}}</p>
          <p>Topic: {{post.topic.topic}}</p>
          <p>Subtopic: {{post.subtopic.subtopic}}</p>
          <!-- <p>Validated: {{post.validated ? "Yes": "No"}}</p> -->
          <div v-if="post.videos && post.videos.length > 0">
               <h4>Videos de YouTube</h4>
               <div class="videos" v-bind:key="i" v-for="(videolink, i) in post.videos">
                    <a v-bind:href="videolink" target="_blank">Link {{i+1}}</a>
               </div>
          </div>
          <div v-if="post.ejercicios && post.ejercicios.length > 0">
               <h4>Ejercicios</h4>
               <div class="ejercicios" v-bind:key="i+10" v-for="(ejercicio, i) in post.ejercicios">
                    <button v-on:click="downloadPdf(ejercicio)">Ejercicio {{i+1}}</button>
               </div>
          </div>
          <div v-if="post.solucionario && post.solucionario.length > 0">
               <h4>Solucionarios</h4>
               <div class="solucionario" v-bind:key="i+20" v-for="(archivo, i) in post.solucionario">
                    <button v-on:click="downloadPdf(archivo)">Solucionario {{i+1}}</button>
               </div>
          </div>
          <div v-if="post.soporte && post.soporte.length > 0">
               <h4>Material de Soporte</h4>
               <div class="material" v-bind:key="i+30" v-for="(archivo, i) in post.soporte">
                    <button v-on:click="downloadPdf(archivo)">Material de Soporte {{i+1}}</button>
               </div>
          </div>
     </div>
</template>

<script>
export default {
     name: 'post',
     props: ['post'],
     methods: {
          downloadPdf(filename) {
               window.open(`http://localhost:8080/files/download/${filename}`, "_blank");
          }
     }
}
</script>

<style>
     .post {
          background: #f4f4f4;
          padding: 1%;
          flex-basis: 50%;
          margin: 1%;
     }
     @media(max-width: 1100px) {
          .post {
               background: #f4f4f4;
               padding: 1%;
               flex-basis: 80%;
               margin: 1%;
          }
     }
</style>