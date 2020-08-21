<template>
     <div class="login-container">
          <h1>Login</h1>
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
     .login-container {
          display: flex;
          flex-direction: column;
     }
</style>