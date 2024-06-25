<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { account } from "../utils/appwrite";
import { useUserStore } from "../store/auth.user";
import { v4 as uuid } from "uuid";
import { isGlobalLoading } from "../store/loading";

const isLoading = isGlobalLoading()
const userStore = useUserStore()
const router = useRouter()


const name = ref<string>("");
const email = ref<string>("");
const password = ref<string>("");
const passwordRepeat = ref<string>("");

const isPasswordVisible = ref(false);
const isPasswordVisibleConfirm = ref(false);

function toggleNewPassword() {
  isPasswordVisible.value = !isPasswordVisible.value;
}

function toggleConfirmPassword() {
  isPasswordVisibleConfirm.value = !isPasswordVisibleConfirm.value;
}


const signIn = async () => {
  
  await account.createEmailPasswordSession(email.value, password.value);
 const response = await account.get();
 if(response){
   userStore.set({
      email:response.email,
      name:response.name,
      status:response.status
  })
 } 
 email.value = "",
 password.value = "",
 name.value = "",
 await router.push("/")

}

const signUp = async () => {
  
  await account.create(uuid(), email.value, password.value,name.value);
  await signIn();

}


</script>

<template>
  
  <div class="container w-9/12 py-20">
    
    <div class="p-10 h-4/5">
      <div
        class="w-1/2 border shadow-yellow-500 shadow-lg border-yellow-500 text-center mb-5 mx-auto p-5 bg-zinc-950"
      >
        <h1 class="text-3xl text-yellow-500">Welcome</h1>

        <form
        @submit.prevent
        class="flex flex-col gap-3 w-1/2 mb-12 mx-auto mt-5">
        <input
            v-model="name"
            type="text"
            class="input"
            placeholder="Name*"
          />
          <input
            v-model="email"
            type="text"
            class="input"
            placeholder="Email*"
          />

          <input
            v-model="password"
            :type="!isPasswordVisible ? 'text' : 'password'"
            class="input"
            placeholder="Password*"
          />
          <button
            @click="toggleNewPassword"
            class="absolute translate-x-52 translate-y-24"
          >
            <img
              v-if="isPasswordVisible"
              class="w-4 h-4"
              src="/password-notshow.svg"
              alt="show"
            />
            <img v-else class="w-4 h-4" src="/password-show.svg" alt="" />
          </button>

          <input
            v-model="passwordRepeat"
            :type="!isPasswordVisibleConfirm ? 'text' : 'password'"
            class="input"
            required
            placeholder="Password repeat*"
          />
          <button
            @click="toggleConfirmPassword"
            class="absolute translate-x-52 translate-y-36"
          >
            <img
              v-if="isPasswordVisibleConfirm"
              class="w-4 h-4"
              src="/password-notshow.svg"
              alt="show"
            />
            <img v-else class="w-4 h-4" src="/password-show.svg" alt="" />
          </button>
          <div class="flex justify-between gap-3">
            <button class="btn" @click="signIn">
            LOGIN
          </button>
          <button class="btn" @click="signUp">
            SIGNUP
          </button>
          </div>
          
        </form>
      </div>
    </div>
  </div>
</template>
