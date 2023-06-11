<template>
    <div class="container">
      <br>
      Ini Bagian Header Dari Pinia Store
    </div>
    <div class="counter-box">
      <pre class="counter-text">{{ counter }}</pre>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  import { useCounterStore } from '@/store/counter';
  
  const CounterStore = useCounterStore()
  const counter = computed(() => CounterStore.count)
  
  CounterStore.$subscribe ((Mutation, state) => {
      console.log(Mutation, state)
  });
  </script>
  
  <style>
  .container {
    text-align: center;
  }
  
  .counter-box {
    margin-top: 20px;
    padding: 10px;
    background-color: #867f7f;
    border: 1px solid #dd0b0b;
    border-radius: 4px;
    display: inline-block;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
  
  .counter-text {
    margin: 0;
    color: white;
    font-size: 30px;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4);
  }
  </style>
  