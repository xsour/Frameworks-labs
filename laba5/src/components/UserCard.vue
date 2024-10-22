<script setup lang="ts">
import type {PropType} from "vue";
import type {User} from "@/models/user";
import {ref} from "vue";

defineProps({
  userData: Object as PropType<User>
});

const adultStyle = ref('adult');
const teenStyle = ref('teen');
</script>

<template>
  <div v-if="userData" :class="userData.age > 18 ? adultStyle : teenStyle" class="card">
    <img class="card-image" :src="userData.photo" alt="user-photo">
    <div class="card-body">
      <p>First Name: {{ userData.firstName }}</p>
      <p>Last Name: {{ userData.lastName }}</p>
      <p v-if="userData.age >= 18">Age: {{ userData.age }}</p>
      <p>Position: {{ userData.position }}</p>
      <p>Gender: {{ userData.gender }}</p>
      <div v-if="userData.hobbies.length > 0">
        <p>Hobbies:</p>
        <ul>
          <li v-for="hobby in userData.hobbies" :key="hobby">
            {{ hobby }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  width: 200px;
  border: 1px solid black;
}

.card-image {
  width: 100%;
}

.card-body {
  padding-left: 10px;
}

.adult {
  background-color: lightgray;
}

.teen {
  background-color: dimgray;
}
</style>
