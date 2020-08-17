<template>
  <header class="header">
    <h1>Todo List</h1>
    <div id="nav">
      <router-link class="link" to="/">Home</router-link>| 
      <router-link class="link" to="/about">About</router-link>| 
      <router-link class="link" to="/contact">Contact</router-link>|
      <router-link class="link" to="/posts">Posts</router-link>|
      <!-- Cómo prohibir q el usuario tipee /createpost? -->
      <router-link class="link" to="/createpost" v-if="role == 0">New Post |</router-link>
      <router-link class="link" to="/login" v-if="!loggedIn">Login</router-link>
      <!-- TODO: emit a 'userLoggedIn' event so that we can update the login button with the logout button -->
      <button class="link" to="/logout" v-if="loggedIn" v-on:click="logout">Logout</button>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data () {
    return {
      loggedIn: localStorage.getItem('jwt') != null ? true : false,
      role: localStorage.getItem('role')
    }
  },
  methods: {
    logout() {
      localStorage.removeItem('firstName');
      localStorage.removeItem('lastName');
      localStorage.removeItem('jwt');
      localStorage.removeItem('role');
      this.loggedIn = false;
      this.isProfessor = false;
      this.isStudent = false;
      // it's better to let the server know the user logged out
    }
  }
}
</script>

<style scoped>
  .header {
    background: #333;
    color: #fff;
    text-align: center;
    padding: 10px;
  }

  .header a {
    color: #fff;
    padding-right: 5px;
    text-decoration: none;
  }

  #nav {
    justify-content: space-evenly;
  }

  .link:hover {
    color: darkmagenta;
  }

</style>


