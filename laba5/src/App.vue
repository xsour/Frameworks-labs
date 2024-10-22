<script setup lang="ts">
import UserCard from '@/components/UserCard.vue'
import {computed, ref} from "vue";
import {users} from "./data";
import type {User} from "@/models/user";

const localUsers= ref<User[]>([]);
const genders = ['male', 'female'];
const genderOption = ref('');
const usersByGender = computed(() => {
  if (genderOption.value) {
    return localUsers.value.filter(u => u.gender.toLowerCase() === genderOption.value);
  }
  return localUsers.value;
});

function loadUsers (){
  localUsers.value = users;
}

</script>

<template>
  <main>
    <div class="nav-bar">
      <button v-for="gender in genders" :key="gender" class="btn" @click="genderOption = gender">{{gender}}</button>
      <button class="btn" @click="genderOption = ''">All</button>
      <button class="btn" @click="loadUsers">Load users</button>
    </div>
    <div class="flex" v-if="localUsers.length > 0">
      <UserCard v-for="user in usersByGender" :key="user" :user-data="user"></UserCard>
    </div>
    <div v-else>
      <p>User list is empty</p>
    </div>
  </main>
</template>

<style scoped>
.flex {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
}

.btn {
  padding: 10px;
  margin-left: 5px;
  margin-right: 5px;
  background-color: aliceblue;
  border: 1px solid black;
}

.btn:hover {
  background-color: bisque;
}

.nav-bar {
  margin-bottom: 20px;
}
</style>
