<template>
    <div>
      <p>Ini Bagian Header Dari Pinia Store</p>
      <br />
      <button @click="increment">increment +</button>
      <button @click="decrement">discrement -</button>
      <button @click="reset">reset</button>
    </div>
  </template>
  
  <script setup>
  import { useCounterStore } from "../store/counter";
  
  const counter = useCounterStore();
  const increment = () => {
    counter.$patch((state) => {
     state.count++;  
    });
  };

  const decrement = () => {
    counter.$patch((state) => {
     state.count --;   
    });
  };

  const reset = () => {
    counter.$reset()
  };
  </script>
  