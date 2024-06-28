<script setup lang="ts"> 
import { useMutation } from '@tanstack/vue-query'
import {DB_ID, COLLECTION_DEALS} from '../appwrite.const'
import {DB} from '../utils/appwrite'
import { v4 as uuid } from 'uuid';
import { account } from '../utils/appwrite';
import { ref } from 'vue';
import { useForm } from 'vee-validate';
import { IDeal } from '../types/dataClient';
import { IDealFormState } from './Dashboard/dashboard.types';	

const onFormSubmit = ref<boolean>(false)

 const props = defineProps({
   status: {
     type: String,
     default: '',
   },
   refetch: {
     type: Function,
   },

 })

 const { handleSubmit, defineField, resetForm } = useForm<IDealFormState>({
  initialValues: {
    status: props.status
  }
 });

 const [name, nameAtters] = defineField('name')
 const [price, priceAtters] = defineField('price')


 const { mutate, isPending } = useMutation({
   mutationKey:['create a new deal'],
   mutationFn: (data: IDealFormState) => DB.createDocument(DB_ID, COLLECTION_DEALS, uuid(), data),
   onSuccess(data) {
    console.log(data)	
    props.refetch && props.refetch()
    resetForm()
   } 
 })

 const onSubmit = handleSubmit(value => {
   mutate(value)
 })

</script>

<template>
  <div>
    <button @click="onFormSubmit = !onFormSubmit">Create</button>
    <form v-if="onFormSubmit" @submit.prevent="onSubmit">
      <input type="text" v-model="name" v-bind="nameAtters">
      <button type="submit">Create new Deal</button>
    </form>
  </div>
</template>