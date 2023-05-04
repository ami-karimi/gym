<template>
  <nav class="bg-white border-gray-200 dark:bg-gray-700 fixed top-0 w-full z-45" style="z-index: 21">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

      <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
        <span class="sr-only">Open sidebar</span>
        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
        </svg>
      </button>

      <a href="#" class="flex items-center">
        <img src="/img/logo-login.png" class="h-8 ml-3 " alt="" />
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">باشگاه فرهنگی و ورزشی</span>
      </a>
      <div class="flex items-center md:order-2">
        <div class="notification relative flex items-center ml-8" dir="ltr">
          <button id="dropdownNotificationButton" data-dropdown-toggle="dropdownNotification"   class="relative inline-flex items-center text-sm font-medium text-center text-gray-500 hover:text-gray-900 focus:outline-none dark:hover:text-white dark:text-gray-400" type="button">
            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path></svg>
            <div class="relative flex" >
              <div class="relative inline-flex w-3 h-3 bg-red-500 border-2 border-white rounded-full -top-2 right-3 dark:border-gray-900"></div>
            </div>
          </button>
          <!-- Dropdown menu -->
          <div id="dropdownNotification" dir="rtl" class="z-20 hidden w-auto min-w-[300px] max-w-sm bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-800 dark:divide-gray-700" aria-labelledby="dropdownNotificationButton">
            <div class="block px-4 py-2 font-medium text-center text-gray-700 rounded-t-lg bg-gray-50 dark:bg-gray-800 dark:text-white">
              اطلاع رسانی ها
            </div>
            <div class="divide-y divide-gray-100 dark:divide-gray-700">


              <div class="p-2 flex items-center flex-col justify-center">
                <svg class="svg-icon mb-3 " viewBox="0 0 20 20">
                  <path d="M10.219,1.688c-4.471,0-8.094,3.623-8.094,8.094s3.623,8.094,8.094,8.094s8.094-3.623,8.094-8.094S14.689,1.688,10.219,1.688 M10.219,17.022c-3.994,0-7.242-3.247-7.242-7.241c0-3.994,3.248-7.242,7.242-7.242c3.994,0,7.241,3.248,7.241,7.242C17.46,13.775,14.213,17.022,10.219,17.022 M15.099,7.03c-0.167-0.167-0.438-0.167-0.604,0.002L9.062,12.48l-2.269-2.277c-0.166-0.167-0.437-0.167-0.603,0c-0.166,0.166-0.168,0.437-0.002,0.603l2.573,2.578c0.079,0.08,0.188,0.125,0.3,0.125s0.222-0.045,0.303-0.125l5.736-5.751C15.268,7.466,15.265,7.196,15.099,7.03"></path>
                </svg>

                <p class="text-white text-xs mb-4">اطلاعیه جدیدی برای نمایش وجود ندارد!</p>

              </div>
            </div>
            <nuxt-link to="/panel/notifications" class="block py-2 text-sm font-medium text-center text-gray-900 rounded-b-lg bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white">
              <div class="inline-flex items-center text-xs text-blue-500 ">
                <svg class="w-4 h-4 ml-2 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path><path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"></path></svg>
                مشاهده همه
              </div>
            </nuxt-link>
          </div>
        </div>


        <button type="button" class="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
          <span class="sr-only">Open user menu</span>
          <img class="w-8 h-8 rounded-full" src="/img/no-pic.png" alt="user photo">
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