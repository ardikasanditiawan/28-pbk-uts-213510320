<template>
    <div>
      <h2 class="hhs">Catatan Kegiatan</h2>
      <form>
        <label for="activity">Kegiatan:</label>
        <input type="text" id="activity" v-model="newActivity">
        <button type="button" @click="addActivity">Tambah</button>
        <button type="button" @click="filterUnfinished">Filter Belum Selesai</button>
      </form>
      <ul>
        <li v-for="(activity, index) in activities" :key="index" :class="{ completed: activity.completed }">
          {{ activity.name }}
          <button @click="removeActivity(index)">Cancel</button>
          <button @click="completeActivity(index)">Complete</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
    import { ref } from 'vue';
    import { useRouter } from 'vue-router';
  
    export default {
      name: 'CatatanKegiatan',
      setup() {
        const router = useRouter();
        const newActivity = ref('');
        const activities = ref([]);
  
        function addActivity() {
          if (newActivity.value.trim() !== '') {
            activities.value.push({ name: newActivity.value, completed: false });
            newActivity.value = '';
          }
        }
  
        function removeActivity(index) {
          activities.value.splice(index, 1);
        }
  
        function completeActivity(index) {
          activities.value[index].completed = true;
        }
  
        function filterUnfinished() {
          activities.value = activities.value.filter((activity) => !activity.completed);
        }
  
        return {
          newActivity,
          activities,
          addActivity,
          removeActivity,
          completeActivity,
          filterUnfinished,
        };
      },
    };
  </script>

  <style>/* Font */
  /* Font */
  
  body {
      font-family: 'Roboto', sans-serif;
    }
    .hhs{
        color: #04a6e6;
        
    }
    
    /* Header */
    header {
      background-color: #34495e;
      color: #fff;
      padding: 10px 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    header h1 {
      font-style: italic;
      font-size: 2em;
      margin: 0;
    }
  
    /* Main Content */
    .main {
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
      box-sizing: border-box;
    }
    
    /* Form */
    form {
      display: flex;
      flex-direction: column;
      margin-bottom: 20px;
    }
    label {
      font-weight: bold;
      margin-bottom: 5px;
    }
    input[type="text"] {
      padding: 10px;
      border-radius: 5px;
      border: 1px solid #ccc;
      font-size: 1.2em;
      margin-bottom: 10px;
    }
    button {
      font-size: 1.2em;
      padding: 10px;
      border-radius: 5px;
      border: none;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
      background-color: #2c3b3a;
      color: white;
      margin-right: 10px;
      cursor: pointer;
      transition: all 0.3s ease;
      
    }
    button:hover {
      
      background-color: #2d19df;
    }
    
    /* List */
    ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
    }
    li {
      display: flex;
      align-items: center;
      margin-bottom: 10px;
      font-size: 1.2em;
    }
    .completed {
      text-decoration: line-through;
      color: #aaa;
    }
    .cancel-button {
      font-style: italic;
      font-size: 1em;
      padding: 10px;
      border-radius: 5px;
      border: none;
      
      background-color: #e74c3c;
      color: white;
      margin-right: 10px;
      cursor: pointer;
      transition: all 0.3s ease;
    }
    .cancel-button:hover {
      background-color: #c0392b;
    }
    .complete-button {
      font-style: italic;
      font-size: 1em;
      padding: 10px;
      border-radius: 5px;
      border: none;
      background-color: #3498db;
      color: white;
      margin-right: 10px;
      cursor: pointer;
      transition: all 0.3s ease;
    }
    .complete-button:hover {
      background-color: #2980b9;
    }
    
    /* Filter Button */
    .filter-button {
      font-style: italic;
      font-size: 1.2em;
      padding: 10px;
      border-radius: 5px;
      border: none;
      background-color: #3498db;
      
      color: white;
      margin-top: 10px;
      cursor: pointer;
      transition: all 0.3s ease;
    }
    .filter-button:hover {
      background-color: #2980b9;
    }
    
    
    
    
    #activityList {
      list-style: none;
      margin: 0;
      padding: 0;
    }
    
    #activityList li {
      background-color: #fff;
      border: 1px solid #138df1;
      border-radius: 5px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
      margin-bottom: 10px;
      padding: 10px;
      position: relative;
    }
    
    #activityList li:before {
      content: "";
      display: block;
      height: 100%;
      left: -10px;
      position: absolute;
      top: 0;
      width: 10px;
    }
    
    #activityList li.completed:before {
      background-color: #0B7C2D;
    }
    
    #activityList li.cancelled:before {
      background-color: #FF0000;
    }
    li button:nth-of-type(1) {
      background-color: red;
      color: white;
      margin-left: 10px;
    
    }</style>