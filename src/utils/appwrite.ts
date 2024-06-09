import { APP_WRITE_ID } from '../appwrite.const'
import { Client, Account, Storage, Databases } from 'appwrite'

export client = new Client()

client.setEndpoint('https://cloud.appwrite.io/v1')

    export const account = new Account(client).setProject('training-man');
    export const DB = new Databases(client)
    export const Storage = new Storage(client)

    

    
