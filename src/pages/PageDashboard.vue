<script setup lang="ts">
import { ref } from "vue";
import { useDashboardQuery } from "../components/Dashboard/useDashboardQuery";
import  dayjs from "dayjs"
import CreateDials  from "../components/CreateDials.vue";
import { ICard, IColumn } from "../components/Dashboard/dashboard.types";
import { useMutation } from "@tanstack/vue-query";
import { EnumStatus } from "../types/dataClient";
import { DB } from "../utils/appwrite";
import { COLLECTION_DEALS, DB_ID } from "../appwrite.const";

// const dragCard = ref<ICard | null>(null);
// const sourceColumn = ref<ICard | null>(null);
const { data, isLoading, refetch} = useDashboardQuery();

const dragCard = ref<ICard | null>(null);
const sourceColumn = ref<IColumn | null>(null)

type TypeMutationVariables = {
  docId: string
  status?: EnumStatus
}

const { mutate } = useMutation({
  mutationKey: ['drag card'],
  mutationFn: ({docId, status}: TypeMutationVariables) => 
    DB.updateDocument(DB_ID, COLLECTION_DEALS, docId, {status}),
    onSuccess: () => {refetch()}
})

const handleDragStart = (card: ICard, column: IColumn) => {
  dragCard.value = card
  sourceColumn.value = column
}

  const handleDragOver = (event: DragEvent) => {
    event.preventDefault()
  }

  const handleDrop = (targetColumn: IColumn) => {
    if(dragCard.value && sourceColumn.value){
      mutate({docId:dragCard.value.$id, status:targetColumn.id})
    }

  }


</script>

<template>
  <img
    src="/public/run-man.jpg"
    class="absolute top-0 left-0 w-full h-full object-cover -z-10"
    alt=""
  />
  <div class="container">
    <h1 class="text-2xl text-yellow-500 mb-10 bg-zinc-950 px-3 py-6 rounded-lg border border-yellow-500 mt-7">CLIENTS TABLE</h1>
    <div v-if="isLoading" class="text-2xl text-yellow-500">Loading...</div>
    <div v-else class="grid grid-cols-3 gap-4">
      <div v-for="column in data" :key="column.id" @dragover="handleDragOver" @drop="() => handleDrop(column)">
        <div class="rounded bg-black p-1 mb-4 text-yellow-500 text-center border border-yellow-500">
          {{ column.name }}
        </div>
          <CreateDials :status="column.id" :refetch="refetch" />
          <div draggable="true" v-for="card in column.items" :key="card.$id" @dragstart="() => handleDragStart(card, column)"
          class="flex flex-col bg-black text-yellow-500 border border-yellow-500 p-4 rounded-lg my-4"
        >
          <h1 class="text-xl">{{ card.name }}</h1>
          <!-- <span class="text-sm py-2">Target:  {{ card.trainingGoal }}</span> -->
          <span class="text-sm py-2">{{ dayjs(card.$createdAt).format('DD.MM.YYYY') }}</span>
          
          <button class="btn-card"><span class="pi pi-plus mr-3"></span>show more</button>
        </div>
      </div>
    </div>
  </div>
</template>
