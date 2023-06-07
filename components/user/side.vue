<template>
  <aside   id="default-sidebar" class="fixed top-0 right-0 mt-0 sm:mt-2 z-40  w-64 h-screen transition-transform translate-x-full sm:translate-x-0" aria-label="Sidebar">
    <div class="h-full px-3 mt-0 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800 sm:mt-14">
      <ul class="space-y-2 font-medium">
        <li>
          <nuxt-link href="/panel/dashboard" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            <svg aria-hidden="true" class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
            <span class="mr-3">میزکاری</span>
          </nuxt-link>
        </li>
        <li v-if="auth.user_profile.is_association_member && !auth.user_profile.is_superuser">
          <nuxt-link href="/panel/association_athletes" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            <svg class="svg-icon" style="width: 24px;height: 24px;" viewBox="0 0 20 20">
              <path style="fill: #9ca3af !important;"  d="M10.001,9.658c-2.567,0-4.66-2.089-4.66-4.659c0-2.567,2.092-4.657,4.66-4.657s4.657,2.09,4.657,4.657
							C14.658,7.569,12.569,9.658,10.001,9.658z M10.001,1.8c-1.765,0-3.202,1.437-3.202,3.2c0,1.766,1.437,3.202,3.202,3.202
							c1.765,0,3.199-1.436,3.199-3.202C13.201,3.236,11.766,1.8,10.001,1.8z"></path>
              <path style="fill: #9ca3af !important;"  d="M9.939,19.658c-0.091,0-0.179-0.017-0.268-0.051l-7.09-2.803c-0.276-0.108-0.461-0.379-0.461-0.678
							c0-4.343,3.535-7.876,7.881-7.876c4.343,0,7.878,3.533,7.878,7.876c0,0.302-0.182,0.572-0.464,0.68l-7.213,2.801
							C10.118,19.64,10.03,19.658,9.939,19.658z M3.597,15.639l6.344,2.507l6.464-2.512c-0.253-3.312-3.029-5.927-6.404-5.927
							C6.623,9.707,3.848,12.326,3.597,15.639z"></path>
              <path style="fill: #9ca3af !important;"  d="M9.939,19.658c0,0-0.003,0-0.006,0c-0.347-0.003-0.646-0.253-0.709-0.596L7.462,9.567
							C7.389,9.172,7.65,8.79,8.046,8.718C8.442,8.643,8.82,8.906,8.894,9.301l1.076,5.796l1.158-5.741
							c0.08-0.394,0.461-0.655,0.86-0.569c0.396,0.08,0.649,0.464,0.569,0.859l-1.904,9.427C10.585,19.413,10.286,19.658,9.939,19.658z"></path>
            </svg>
            <span class="mr-3">اعضای هیات </span>
          </nuxt-link>
        </li>
        <li v-if="auth.user_profile.is_superuser">
          <nuxt-link href="/panel/association_athletes_admin" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            <svg class="svg-icon" style="width: 24px;height: 24px;" viewBox="0 0 20 20">
              <path style="fill: #9ca3af !important;"  d="M10.001,9.658c-2.567,0-4.66-2.089-4.66-4.659c0-2.567,2.092-4.657,4.66-4.657s4.657,2.09,4.657,4.657
							C14.658,7.569,12.569,9.658,10.001,9.658z M10.001,1.8c-1.765,0-3.202,1.437-3.202,3.2c0,1.766,1.437,3.202,3.202,3.202
							c1.765,0,3.199-1.436,3.199-3.202C13.201,3.236,11.766,1.8,10.001,1.8z"></path>
              <path style="fill: #9ca3af !important;"  d="M9.939,19.658c-0.091,0-0.179-0.017-0.268-0.051l-7.09-2.803c-0.276-0.108-0.461-0.379-0.461-0.678
							c0-4.343,3.535-7.876,7.881-7.876c4.343,0,7.878,3.533,7.878,7.876c0,0.302-0.182,0.572-0.464,0.68l-7.213,2.801
							C10.118,19.64,10.03,19.658,9.939,19.658z M3.597,15.639l6.344,2.507l6.464-2.512c-0.253-3.312-3.029-5.927-6.404-5.927
							C6.623,9.707,3.848,12.326,3.597,15.639z"></path>
              <path style="fill: #9ca3af !important;"  d="M9.939,19.658c0,0-0.003,0-0.006,0c-0.347-0.003-0.646-0.253-0.709-0.596L7.462,9.567
							C7.389,9.172,7.65,8.79,8.046,8.718C8.442,8.643,8.82,8.906,8.894,9.301l1.076,5.796l1.158-5.741
							c0.08-0.394,0.461-0.655,0.86-0.569c0.396,0.08,0.649,0.464,0.569,0.859l-1.904,9.427C10.585,19.413,10.286,19.658,9.939,19.658z"></path>
            </svg>
            <span class="mr-3">هیات های ورزشی </span>
          </nuxt-link>
        </li>
        <li v-if="auth.user_profile.is_superuser">
          <nuxt-link href="/panel/users" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            <svg class="svg-icon" style="width: 24px;height: 24px;" viewBox="0 0 20 20">
              <path style="fill: #9ca3af !important;"  d="M10.001,9.658c-2.567,0-4.66-2.089-4.66-4.659c0-2.567,2.092-4.657,4.66-4.657s4.657,2.09,4.657,4.657
							C14.658,7.569,12.569,9.658,10.001,9.658z M10.001,1.8c-1.765,0-3.202,1.437-3.202,3.2c0,1.766,1.437,3.202,3.202,3.202
							c1.765,0,3.199-1.436,3.199-3.202C13.201,3.236,11.766,1.8,10.001,1.8z"></path>
              <path style="fill: #9ca3af !important;"  d="M9.939,19.658c-0.091,0-0.179-0.017-0.268-0.051l-7.09-2.803c-0.276-0.108-0.461-0.379-0.461-0.678
							c0-4.343,3.535-7.876,7.881-7.876c4.343,0,7.878,3.533,7.878,7.876c0,0.302-0.182,0.572-0.464,0.68l-7.213,2.801
							C10.118,19.64,10.03,19.658,9.939,19.658z M3.597,15.639l6.344,2.507l6.464-2.512c-0.253-3.312-3.029-5.927-6.404-5.927
							C6.623,9.707,3.848,12.326,3.597,15.639z"></path>
              <path style="fill: #9ca3af !important;"  d="M9.939,19.658c0,0-0.003,0-0.006,0c-0.347-0.003-0.646-0.253-0.709-0.596L7.462,9.567
							C7.389,9.172,7.65,8.79,8.046,8.718C8.442,8.643,8.82,8.906,8.894,9.301l1.076,5.796l1.158-5.741
							c0.08-0.394,0.461-0.655,0.86-0.569c0.396,0.08,0.649,0.464,0.569,0.859l-1.904,9.427C10.585,19.413,10.286,19.658,9.939,19.658z"></path>
            </svg>
            <span class="mr-3">کاربران</span>
          </nuxt-link>
        </li>
        <li  v-if="auth.user_profile.is_superuser">
          <nuxt-link href="/panel/admin/sport_clubs" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            <svg class="svg-icon" style="width: 24px;height: 24px;" viewBox="0 0 20 20">
              <path style="fill: #9ca3af !important;" d="M14.584,1.617l-4.625,2.89L5.333,2.195L0.709,4.495v13.888l4.625-2.313l4.625,1.157l4.625-1.734l4.625,1.734
								V3.93L14.584,1.617z M18.053,15.492l-3.469-1.157l-4.625,1.734l-4.625-1.155l-3.468,1.734V5.086l3.468-1.734l4.625,2.312
								l4.625-2.891l3.469,1.734V15.492z M10.248,6.827c-0.16,0-0.29,0.163-0.29,0.363v6.781c0,0.201,0.129,0.363,0.29,0.363
								c0.16,0,0.289-0.162,0.289-0.363V7.19C10.537,6.99,10.408,6.827,10.248,6.827z M5.623,5.093c-0.16,0-0.29,0.163-0.29,0.363v7.938
								c0,0.201,0.129,0.363,0.29,0.363c0.16,0,0.289-0.162,0.289-0.363V5.456C5.912,5.256,5.783,5.093,5.623,5.093z M14.584,12.815
								c0,0.2,0.129,0.363,0.289,0.363s0.289-0.163,0.289-0.363V4.878c0-0.2-0.129-0.364-0.289-0.364s-0.289,0.164-0.289,0.364V12.815z"></path>
            </svg>
            <span class="mr-3">باشگاه ها</span>
          </nuxt-link>
        </li>

        <li  v-if="auth.user_profile.is_superuser">
          <nuxt-link href="/panel/admin/sport_field" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" width="24" height="24">
              <path d="M9 0C7.894531 0 7 0.894531 7 2C7 3.105469 7.894531 4 9 4C10.105469 4 11 3.105469 11 2C11 0.894531 10.105469 0 9 0 Z M 17.5 2C16.121094 2 15 3.121094 15 4.5C15 5.878906 16.121094 7 17.5 7C18.878906 7 20 5.878906 20 4.5C20 3.121094 18.878906 2 17.5 2 Z M 5.875 2.96875C5.132813 2.851563 4.75 3.582031 5.5 4.40625C5.800781 4.804688 7.804688 6.800781 8.40625 7.5C8.507813 7.800781 8.800781 7.898438 9 8L11.5 8.40625L7.5 14.59375C7.5 14.59375 6.300781 16.5 5.5 18C5 19 6.085938 19.6875 7.1875 18.6875C7.886719 17.988281 11.3125 14.5 11.3125 14.5L6.5 24.09375C6.300781 24.59375 5.8125 25.414063 6.8125 25.8125C7.710938 26.210938 8.40625 24.8125 8.40625 24.8125L17.40625 10.90625C17.40625 10.90625 18.699219 11.792969 19 12.09375C19.300781 12.394531 19.289063 12.507813 19.1875 12.90625C19.085938 13.304688 18.507813 14.695313 18.40625 15.09375C18.304688 15.394531 18.085938 15.988281 18.6875 16.1875C19.289063 16.386719 19.710938 15.804688 19.8125 15.40625C19.914063 15.105469 20.601563 13.710938 21 12.8125C21 12.613281 21.011719 12.085938 20.8125 11.6875L18.3125 8.59375C18.210938 8.394531 18.011719 8.289063 17.8125 8.1875L14.40625 6.5C13.605469 6.101563 12.6875 6.09375 12.6875 6.09375L9.5 5.8125C9.5 5.8125 7.289063 4.007813 6.6875 3.40625C6.386719 3.15625 6.121094 3.007813 5.875 2.96875Z" fill="#9ca3af" />
            </svg>
            <span class="mr-3">رشته های ورزشی</span>
          </nuxt-link>
        </li>

        <li  v-if="!auth.user_profile.is_superuser">
          <nuxt-link href="/panel/sport_club_athletes" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            <svg class="svg-icon" style="width: 24px;height: 24px;" viewBox="0 0 20 20">
              <path style="fill: #9ca3af !important;" d="M14.584,1.617l-4.625,2.89L5.333,2.195L0.709,4.495v13.888l4.625-2.313l4.625,1.157l4.625-1.734l4.625,1.734
								V3.93L14.584,1.617z M18.053,15.492l-3.469-1.157l-4.625,1.734l-4.625-1.155l-3.468,1.734V5.086l3.468-1.734l4.625,2.312
								l4.625-2.891l3.469,1.734V15.492z M10.248,6.827c-0.16,0-0.29,0.163-0.29,0.363v6.781c0,0.201,0.129,0.363,0.29,0.363
								c0.16,0,0.289-0.162,0.289-0.363V7.19C10.537,6.99,10.408,6.827,10.248,6.827z M5.623,5.093c-0.16,0-0.29,0.163-0.29,0.363v7.938
								c0,0.201,0.129,0.363,0.29,0.363c0.16,0,0.289-0.162,0.289-0.363V5.456C5.912,5.256,5.783,5.093,5.623,5.093z M14.584,12.815
								c0,0.2,0.129,0.363,0.289,0.363s0.289-0.163,0.289-0.363V4.878c0-0.2-0.129-0.364-0.289-0.364s-0.289,0.164-0.289,0.364V12.815z"></path>
            </svg>
            <span class="mr-3">باشگاه ها</span>
          </nuxt-link>
        </li>
        <li >
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