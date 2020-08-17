<template>
  <header class="header">
    <h1>Todo List</h1>
    <div id="nav">
      <router-link class="link" to="/">Home</router-link>| 
      <router-link class="link" to="/about">About</router-link>| 
      <router-link class="link" to="/contact">Contact</router-link>|
      <router-link class="link" to="/posts">Posts</router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header"
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


