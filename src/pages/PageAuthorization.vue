<script setup lang="ts">
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { ref } from "vue";
import { useRouter } from "vue-router";


const router = useRouter();
const isLogin = ref<boolean>(true);

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

const submitForm = () => {
  if (isLogin.value) {
    signIn();
  } else {
    signUp();
  }
}

const signUp = async (): Promise<void> => {
try {
  const auth = getAuth();
  await createUserWithEmailAndPassword(auth, email.value, password.value);
  router.push("/");
} catch (error:unknown) {
  if(error instanceof Error){
    console.log(error.message)
  }
}
};

const signIn = async (): Promise<void> => {
  try {
  const auth = getAuth();
  await signInWithEmailAndPassword(auth, email.value, password.value);
  router.push("/");
} catch (error:unknown) {
  if(error instanceof Error){
    console.log(error.message)
  }
}
}
</script>

<template>
  <div class="container w-9/12 py-20 h-screen">
    <div class="p-10 h-4/5">
      <div
        class="w-1/2 border shadow-yellow-500 shadow-md border-yellow-500 text-center rounded-md mb-5 mx-auto p-5 bg-zinc-900"
      >
        <h1 class="text-3xl text-yellow-500">Welcome</h1>

        <form
        @submit.prevent
        class="flex flex-col gap-3 w-1/2 mb-12 mx-auto mt-5">
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
            class="absolute translate-x-52 translate-y-14"
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
            class="absolute translate-x-52 translate-y-24"
          >
            <img
              v-if="isPasswordVisibleConfirm"
              class="w-4 h-4"
              src="/password-notshow.svg"
              alt="show"
            />
            <img v-else class="w-4 h-4" src="/password-show.svg" alt="" />
          </button>
          <button class="btn" @click="submitForm">
            Enter
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
