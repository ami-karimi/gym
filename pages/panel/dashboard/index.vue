<template>
  <nuxt-layout name="user">

    <div v-if="!user.user_profile.loading">
    <div v-if="!user.user_profile.first_name && !user.user_profile.last_name" id="alert-additional-content-1" class="p-4 mb-4 text-blue-800 border border-blue-300 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400 dark:border-blue-800" role="alert">
      <div class="flex items-center">
        <svg aria-hidden="true" class="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
        <span class="sr-only">Info</span>
        <h3 class="text-lg font-medium">سلام خوش آمدید!</h3>
      </div>
      <div class="mt-2 mb-4 text-sm">
        لطفا نسبت به تکمیل پروفایل خود اقدام نمایید
      </div>
      <div class="flex">
        <nuxt-link to="/panel/edit_profile" class="text-white bg-blue-800  hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-xs px-3 py-1.5 mr-2 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-green-500 dark:focus:ring-blue-800">
           تکمیل پروفایل
        </nuxt-link>

      </div>
    </div>
    <div v-else id="alert-additional-content-2" class="p-4 mb-4 text-green-800 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400 dark:border-green-800" role="alert">
      <div class="flex items-center justify-center">
        <svg aria-hidden="true" class="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
        <span class="sr-only">Info</span>
        <h3 class="text-lg font-medium">پروفایل شما تکمیل شد</h3>
      </div>
      <div class="mt-2 mb-4 text-sm flex items-center flex-col justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="150" height="150">
          <circle cx="24" cy="24" r="20" fill="#3ddab4" />
          <polygon fill="#c1f5ea" points="39.091,17.515 35.015,13.604 22.775,26.233 16.679,20.433 12.768,24.509 18.843,30.289 18.843,30.289 22.92,34.179 22.926,34.173 22.932,34.179 26.86,30.119 26.86,30.119" />
          <polygon fill="#fff" points="22.926,34.173 26.86,30.119 22.775,26.233 18.843,30.289" />
        </svg>

        <p class="font-semibold mt-3 text-white">نتیجه ثبت اطلاعات طی روز های آتی بصورت پیامکی به شما اطلاع رسانی خواهد شد</p>
      </div>

    </div>
    </div>

  </nuxt-layout>
</template>
<script>
import {useAuthStore} from "~/store/auth";

export default {
  data: () => ({

  }),
  setup(){
      definePageMeta({
        middleware: ["auth"]
      })  
    const user = useAuthStore()
    
    useHead({
      title: 'ویرایش پروفایل',
    })

    return {
      user
    }
  },
  async mounted() {

  },
  methods: {}
}
</script>