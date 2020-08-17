<template>
     <div>
          <h1>Login</h1>
          <LoginForm v-on:userLoggedIn="$emit('user-logged-in')"></LoginForm>
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

</style>