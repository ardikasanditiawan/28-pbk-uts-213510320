<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> | 
    <router-link to="/catatan">catatan</router-link> |
    <router-link to="/login">login</router-link>  |
    <router-link to="/pinia">pinia</router-link>
  </nav>
  <header>
    
  </header>
  <router-view/>

 
</template>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #0b0c0c;
  background-color: #8a00fc;
    border-radius: 5px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);
    padding: 0.5rem;
    width: 400px;
}

nav a.router-link-exact-active {
  color: #f5f5f5;
}

</style>


<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
 
</script>