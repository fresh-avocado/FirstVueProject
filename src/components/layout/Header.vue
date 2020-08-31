<template>
  <header class="header">
    <h1>Todo List</h1>
    <div id="nav">
      <router-link class="link" to="/">Home</router-link>| 
      <router-link class="link" to="/about">About</router-link>| 
      <router-link class="link" to="/contact">Contact</router-link>|
      <router-link class="link" to="/posts">Posts</router-link>|
      <router-link class="link" to="/images">Random Images</router-link>|
      <router-link class="link" to="/randomposts">Random Posts</router-link>|
      <!-- FIXME: Cómo prohibir q el usuario tipee /createpost? -->
      <router-link class="link" to="/createpost" v-if="loggedIn && role == 0">New Post |</router-link>
      <router-link class="link" to="/login" v-if="!loggedIn">Login</router-link>
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
  mounted() {
          // as soon as this component is mounted into the DOM, define the event handler
          this.$root.$on('user-logged-in', data => {
               this.loggedIn = true;
               this.role = localStorage.getItem('role');
          });
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
      this.$router.push("home");
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


