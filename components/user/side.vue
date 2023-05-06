<template>

  <aside id="default-sidebar" class="fixed top-0 right-0 mt-0 sm:mt-2 z-40  w-64 h-screen transition-transform translate-x-full sm:translate-x-0" aria-label="Sidebar">
    <div class="h-full px-3 mt-0 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800 sm:mt-14">
      <ul class="space-y-2 font-medium">
        <li>
          <nuxt-link href="/panel/dashboard" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            <svg aria-hidden="true" class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
            <span class="mr-3">میزکاری</span>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link href="/panel/edit_profile" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
            <span class="mr-3">تکمیل پروفایل</span>
          </nuxt-link>
        </li>

        <li>
          <a href="javascript:void(0)" @click="Logout()" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clip-rule="evenodd"></path></svg>
            <span class="flex-1 mr-3 whitespace-nowrap">خروج</span>
          </a>
        </li>
      </ul>
    </div>
  </aside>
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