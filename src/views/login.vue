<template>
  <div class="login-container">
    <form class="login-form">
      <h2 class="login-title">Login</h2>
      <div class="form-group">
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username" />
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" />
      </div>
      <button type="submit" class="login-button" @click.prevent="login">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    login() {
      // login logic here
      alert("Login berhasil!");
     // refresh halaman
  location.reload();
    }
  }
};
</script>



  
  <style>
  .login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  
  .login-form {
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);
    padding: 2rem;
    width: 400px;
  }
  
  .login-title {
    text-align: center;
  }
  
  .form-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
  }
  
  label {
    font-size: 1.2rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
  }
  
  input[type="text"],
  input[type="password"] {
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1.2rem;
    padding: 0.5rem;
  }
  
  .login-button {
    background-color: #3f51b5;
    border: none;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
    font-size: 1.2rem;
    padding: 0.5rem 1rem;
    margin-top: 1rem;
  }
  </style>
  