<script setup lang="ts">
import { ref } from "vue";
import AppCard from "../components/AppCard.vue";
import { ICard } from "../components/Dashboard/dashboard.types";
import { useDashboardQuery } from "../components/Dashboard/useDashboardQuery";

const dragCard = ref<ICard | null>(null);
const sourceColumn = ref<ICard | null>(null);
const { data, isLoading, refetch } = useDashboardQuery();
</script>

<template>
  <img
    src="/public/run-man.jpg"
    class="absolute top-0 left-0 w-full h-full object-cover -z-10"
    alt=""
  />
  <div class="container">
    <h1 class="text-3xl text-yellow-500 mb-10">CLIENTS TABLE</h1>
    <div v-if="isLoading">Loading...</div>
    <div v-else class="grid grid-cols-3 gap-4">
      <div v-for="column in data" :key="column.id">
        <div class="rounded bg-black p-1 mb-4 text-yellow-500 text-center">
          {{ column.name }}
        </div>
      
          <div draggable="true" v-for="card in column.items" :key="card.$id"
          class="flex flex-col bg-black text-yellow-500 border border-yellow-500 p-2 rounded-lg"
        >
          <h1 class="text-xl">{{ card.name }}</h1>
          <span class="text-sm">{{ card.trainingMethod }}</span>
          <span class="text-sm">{{ card.status }}</span>
          <span class="text-sm">{{ card.$createdAt }}</span>
          <span>{{  }}</span>
          <button class="btn-card">+</button>
        </div>
        
        
      </div>
    </div>
  </div>
</template>
