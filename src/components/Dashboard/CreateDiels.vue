<script setup> 
import {useMutation } from 'tanstack/vue-query'
import {DB_ID, COLLECTION_DEALS} from '../../appwrite.const'
import {DB} from '../../utils/appwrite'
import { v4 as uuidv4 } from 'uuid';
import { account } from '../../utils/appwrite';
import { ref } from 'vue';
import { useForm } from 'vee-validate';

const onFormSubmit = ref<bolian>(false)

 export interface IDealFormState extend  Pick<IDeal ,"name"|"price"> {
   customer: {
    name:string
    email:string
   }
   status: string
 }

 const props = defineProps({
   status {
     type: string
     Default: ''
   },
   refetch: {
     type: Function
   }

 })

 const { handleSubmit, defineField, resetForm } = useForm<IDealFormState>(
  initialValues: {
    status: props.status
  }
 );

 const [name, nameAtter] = defineField('name')
 const [eamil, emailAtter] = defineField('name')
 const [customerEmail, customerEmailAtter] = defineField('customer.email')
 const [customerName, customerNameAtte] = defineField('customer.name')


 const { mutate} = useMutation(async () => {
   mutateKey:['create a new deal']
   mutateFn: {data} => {
     return DB.createDocument(DB_ID, COLLECTION_DEALS, uuidv4(), data)
   },
   onSuccess: () => {
     props.refetch = props.refetch()
     
   }
 })

 
</script>

<template>
  <div>
    <button @click="onFormSubmit = !onFormSubmit"></button>
  </div>
</template>