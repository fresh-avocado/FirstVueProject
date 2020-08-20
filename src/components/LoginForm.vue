<template>
     <div class="login-form-container">
          <!-- TODO: hacer validacion -->
          <input v-model="email" type="email" placeholder="Email ..." class="form-element">
          <input v-model="password" type="password" placeholder="Password ..." class="form-element">
          <input type="submit" class="form-element" value="Login" v-on:click="login(email, password)">
     </div>
</template>

<script>
import axios from 'axios';

export default {
     name: 'LoginForm',
     data() {
          // this initialization is required, otherwise it yields an error
          return {
               email: '',
               password: ''
          }
     },
     methods: {
          login(email, password) {
               axios({
                    method: 'post',
                    url: 'http://localhost:8080/authenticate',
                    headers: {
                         'Content-Type': 'application/json'
                    },
                    data: {
                         'email': email,
                         'password': password // should be encrypted
                    }
               }).then(response => {
                    if (response.status == 200) {
                         alert('¡Se ha loggeado con éxito!');
                         console.log(response.data);
                         localStorage.setItem('firstName', response.data.firstName);
                         localStorage.setItem('lastName', response.data.lastName);
                         localStorage.setItem('role', response.data.role);
                         localStorage.setItem('jwt', response.data.jwt);
                         this.$root.$emit('user-logged-in');
                         this.$router.push("posts");
                         // TODO: redirect user to the profile page (posts page for now)
                    } else {
                         aler('Ocurrió un error. Revise su correo y/o contraseña.');
                    }
               });
          }
     }
}
</script>

<style scoped>
.login-form-container {
     display: flex;
     flex-direction: column;
     padding: 5%;
}

.form-element {
     margin: 1%;
}
</style>