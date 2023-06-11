<template>
    <Header/>
        <hr />
     <Footer/>
   <br><br><br><br><br><br>

   <div class="navbar">
</div>

    <div class="shopping-form">
      <h2>Form Pengisian Belanja</h2>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="item">Item:</label>
          <input type="text" id="item" v-model="item" required />
        </div>
        <div class="form-group">
          <label for="quantity">Quantity:</label>
          <input type="number" id="quantity" v-model="quantity" required />
        </div>
        <div class="form-group">
          <label for="price">Price:</label>
          <input type="number" id="price" v-model="price" required />
        </div>
        <button type="submit">Add to Cart</button>
      </form>
      
    </div>

  </template>
  
  <script>
  export default {
    data() {
      return {
        item: "",
        quantity: 0,
        price: 0
      };
    },
    methods: {
      submitForm() {
        // Validasi data
        if (this.item === "" || this.quantity <= 0 || this.price <= 0) {
          alert("Mohon lengkapi semua field dengan benar.");
          return;
        }
  
        // Simpan data belanja ke dalam variabel atau lakukan operasi lain yang diinginkan
        const shoppingItem = {
          item: this.item,
          quantity: this.quantity,
          price: this.price
        };
  
        // Lakukan sesuatu dengan data belanja, misalnya menyimpan ke database atau menambahkannya ke keranjang belanja
  
        // Reset form setelah submit
        this.item = "";
        this.quantity = 0;
        this.price = 0;
  
        alert("Item berhasil ditambahkan ke keranjang belanja!");
      }
    }
  };
  </script>
  
  <style>
.navbar {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  background-color: #02d6fc;
  border: 1px solid #ccc;
}

.navbar:before,
.navbar:after {
  content: "";
  height: 1px;
  background-color: #ccc;
  margin: 0 10px;
}

.navbar:before {
  margin-right: auto;
}

.navbar:after {
  margin-left: auto;
}
  .shopping-form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .form-group {
    margin-bottom: 1rem;
  }
  
  label {
    font-weight: bold;
  }
  
  input {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  button {
    padding: 0.5rem 1rem;
    background-color: #3f51b5;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  </style>
  
  <script setup>

 import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
</script>