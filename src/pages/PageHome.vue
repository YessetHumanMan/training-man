<script setup lang="ts">
  import { ref } from 'vue';
import { IDataTraining} from '../dataInterface';
import { useUserStore } from '../store/auth.user';
import { v4 as uuidv4 } from 'uuid';


  const userStore = useUserStore()


  const name = ref('')
  const age = ref()
  const height = ref()
  const weight = ref()
  const trainingGoal = ref<string>('')
  const description = ref<string>('')

  const createTraining = async (): Promise<void> => {
 const payload: IDataTraining = {
  id: uuidv4(),
  name: name.value,
  age: age.value,
  height: height.value,
  weight: weight.value,
  trainingGoal: trainingGoal.value,
  description: description.value
 }

  }
</script>

<template>
  <img src="/public/run-man.jpg" class="absolute top-0 left-0 w-full h-full object-cover -z-10" alt="">
<div class="container">
  
  <div class="w-3/5 mx-auto border border-yellow-500 border-opacity-30 p-5 mt-52 shadow-yellow-500 shadow-md bg-zinc-950">
    <h1 class="font-bold text-yellow-500 text-center">FILLIN IN DATA</h1>
    <div class="flex flex-col ">
      <input type="text" class="input-card" placeholder="name" v-model="name">
      <input type="text" class="input-card" placeholder="age" v-model="age">
      <input type="text" class="input-card" placeholder="height" v-model="height">
      <input type="text" class="input-card" placeholder="weight" v-model="weight">
      <input type="text" class="input-card" placeholder="training goal" v-model="trainingGoal">
      <input type="text" class="input-card" placeholder="description" v-model="description">
      
    </div>
  </div>
  </div>

</template>