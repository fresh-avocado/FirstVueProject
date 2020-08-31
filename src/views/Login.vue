<template>
     <div class="login-container">
          <h1 id="title">Login&copy;&reg;&trade;&dagger;</h1>
          <LoginForm></LoginForm>
     </div>
</template>

<script>
import LoginForm from '../components/LoginForm.vue';

export default {
     name: 'Login',
     components: {
          LoginForm
     }
}
</script>

<style scoped>
     #title {
          margin: 1%;
     }

     .login-container {
          display: flex;
          flex-direction: column;
     }
</style>