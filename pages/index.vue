<template>
  <div class="login-page flex justify-center items-center" dir="rtl">
    <section class="max-w-[400px]  w-full">
      <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a href="#" class="flex items-center mb-6 text-xl text-center font-semibold text-white dark:text-white">
           هیات انجمن های ورزش های رزمی استان مازندران
        </a>
        <div :class="{'opacity-20' : auth.form.disabled}" class=" w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              ورود به حساب
            </h1>
            <div class="space-y-4 md:space-y-6">
              <div >
                <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">شماره همراه</label>
                <div class="relative">
                  <input :disbabled="auth.form.disabled" type="text" :disabled="auth.form.step === 2" v-model="auth.form.phone_number" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="09111234567" required>
                  <div v-if="auth.form.step === 2" :class="{'text-gray-500': auth.form.step === 1,'text-blue-500': auth.form.step === 2}" class="absolute  top-2 left-2  whitespace-normal cursor-pointer" @click="auth.form.step = 1">
                  ویرایش
                  </div>
                </div>
              </div>
              <div v-if="auth.form.step === 2">
                <label for="sms_token" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">کد فعال سازی</label>
                <input :disbabled="auth.form.disabled" style="letter-spacing: 20px;" type="text" v-model="auth.form.sms_token" id="sms_token" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-center" placeholder="12345" required>
              </div>



              <div class="flex items-center justify-center">
                <button :disbabled="auth.form.disabled" @click="auth.SendLogin()" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                  <span v-if="auth.form.loading">
                  <svg aria-hidden="true" class="inline w-4 h-4 mr-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                  </svg>
                  صبر نمایید...
                  </span>
                  <span v-else>
                 ارسال
                </span>

                </button>
              </div>

              <div class="text-white text-center">
                حساب کاربری ندارید؟ <nuxt-link class="text-blue-600" to="/register">ثبت نام کنید</nuxt-link>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import {useAuthStore} from "~/store/auth";

export  default  {
  setup(){
    const auth = useAuthStore()
    useHead({
      title: 'ورود/ثبت نام'
    })
    
    return {
      auth
    }
  }
  ,watch:{
    'auth.form.sms_token':{
      handler(){
          if(this.auth.form.sms_token.length >= 5 ){
            this.auth.SendLogin()
            this.auth.form.disabled = true
          }
      },
      
      deep:true
    }
  }

}
</script>