<script setup> 
import {useMutation } from 'tanstack/vue-query'
import {DB_ID, COLLECTION_DEALS} from '../../appwrite.const'
import {DB} from '../../utils/appwrite'
import { v4 as uuidv4 } from 'uuid';
import { account } from '../../utils/appwrite';

const onFormSubmit = ref<bolian>(false)

 export interface IDealFormState extend  Pick<IDeal ,"name"|"price"> {
   customer: {
    name:string
    email:string
   }
   status: string
 }

 
</script>

<template>
  <div>
    <button @click="onFormSubmit = !onFormSubmit"></button>
  </div>
</template>