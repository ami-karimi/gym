<template>
  <nav class="bg-white border-gray-200 dark:bg-gray-700 fixed top-0 w-full z-45" style="z-index: 21">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between  p-4 w-full">

      <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
        <span class="sr-only">Open sidebar</span>
        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
        </svg>
      </button>

      <a href="#" class="flex items-center justify-start">
        <span class="hidden md:flex xl:block lg:flex sm:text-2xl text-sm font-semibold whitespace-nowrap dark:text-white"> هیات انجمن های ورزش های رزمی استان مازندران</span>
          <span class=" block lg:hidden text-sm font-semibold whitespace-nowrap dark:text-white">  انجمن های ورزش های رزمی مازندران</span>
      </a>
      <div class="flex items-center  justify-end md:order-2">


        <button type="button" class="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
          <span class="sr-only">Open user menu</span>
          <img class="w-8 h-8 rounded-full" src="/img/no-img.png" alt="user photo">
        </button>
        <!-- Dropdown menu -->
        <div class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
          <div class="px-4 py-3">
            <span class="block text-sm text-gray-900 dark:text-white"></span>
            <span class="block text-sm  text-gray-500 truncate dark:text-gray-400">کاربر</span>
          </div>
          <ul class="py-2" aria-labelledby="user-menu-button">
            <li>
              <nuxt-link :to="`/panel/edit_profile`" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">ویرایش پروفایل</nuxt-link>
            </li>
            <li>
              <a href="javascript:void(0)" @click="Logout" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">خروج از حساب</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import {useAuthStore} from "~/store/auth";

export default {
  setup(){
    const auth = useAuthStore()
    return {
      auth,
    }
  },
  data:() => ({
    name: '',
  }),
  mounted() {
  },
  methods: {
    async Logout(){
      const router = useRouter()
      this.auth.token_type = ''
      this.auth.user_token = ''
      await this.auth.SetToken('','')

      router.push('/')
    }
  }
}
</script>