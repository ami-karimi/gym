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

        <li v-if="auth.user_profile.is_association_member">
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
        <li>
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