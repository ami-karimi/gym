<template>
  <nuxt-layout name="user">
    <div class="row">
      <div class="col-md-8">

        <div  class="w-full mb-5 p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700">

          <div class="flex justify-between mb-5">
            <h5 class="mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white">
              هیات ها
            </h5>

          </div>
          <div class="relative overflow-x-auto  ">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3 text-center">
                  شناسه
                </th>
                <th scope="col" class="px-6 py-3 text-center">
                  رئیس هیات
                </th>
                <th scope="col" class="px-6 py-3 text-center">
                شهر
                </th>
                <th scope="col" class="px-6 py-3 text-center">
                 شماره تلفن
                </th>
                <th scope="col" class="px-6 py-3 text-center">
                  عملیات
                </th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="item in user.SuperassociationList" :key="item.id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="px-6 text-center py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {{ item.id }}
                </th>
                <td class="px-6 text-center py-4">
                  {{item.owner.first_name}} {{item.owner.last_name}}
                </td>
                <td class="px-6 text-center py-4">
                  {{item.city.name}}
                </td>
                <td class="text-center">
                  {{item.telephone_number}}
                </td>
                <td class="text-center">
                 <nuxt-link :to="`/panel/association_athletes_admin/view/${item.id}`" class="text-blue-400">مشاهده</nuxt-link>
                </td>

              </tr>

              </tbody>
            </table>



          </div>








        </div>



      </div>
      <div class="col-md-4">
        <div  class="w-full  mx-auto p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700">
          <div class="flex justify-between mb-5">
            <h5 class="mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white">
              ایجاد هیات ورزشی
            </h5>

          </div>
          <div :class="{'opacity-20' : user.association_form.loading}">

          </div>
          <div class="flex justify-end mt-4">

            <div class="w-full">
              <div class="flex p-4 mb-4 text-sm text-blue-800 border border-blue-300 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400 dark:border-blue-800" role="alert">
                <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 ml-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                <span class="sr-only">Info</span>
                <div>
                  <span class="font-medium">توجه :</span> رئیس هیات بصورت خودکار توسط کد ملی وارد شده شناسایی خواهد شد.
                </div>
              </div>

              <div class="row">
                <div class="col-md-6">
                  <div class="mb-3" >
                    <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">نام </label>
                    <input v-model="user.admin_association_form.first_name" type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="نام رئیس هیات" required="">
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="mb-3" >
                    <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">نام خانوادگی </label>
                    <input v-model="user.admin_association_form.last_name"  type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="نام خانوادگی رئیس هیات" required="">
                  </div>
                </div>

                <div class="col-md-12">
                  <div class="mb-3" >
                    <label for="national_code" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">کد ملی </label>
                    <input type="text" v-model="user.admin_association_form.national_code"  id="national_code" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" pattern="[0-9]" placeholder="کد ملی رئیس هیات" required="">
                  </div>
                </div>

              </div>
              <div class="mb-4">
                <label for="city" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">شهر</label>
                <select id="city"  v-model="user.admin_association_form.city"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option value="">انتخاب کنید</option>
                  <option v-for="item in user.city" :value="item.id">{{ item.name }}</option>
                </select>
              </div>

              <div class="mt-3">
                <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">آدرس</label>
                <textarea id="message" v-model="user.admin_association_form.address" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="آدرس کامل را تایپ کنید..."></textarea>
              </div>

              <div class="flex justify-end mt-4">
                <button @click="user.SaveAssociationAdmin()" type="button" class="text-white bg-green-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-green-500 focus:outline-none dark:focus:ring-blue-800">
            <span v-if="user.admin_association_form.loading">
                 <svg aria-hidden="true" class="inline w-4 h-4 mr-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                  </svg>
                  صبر نمایید...
                  </span>
                  <span v-else>
                   ایجاد هیات ورزشی
                </span>
                </button>

              </div>


            </div>

          </div>
        </div>

      </div>
    </div>




  </nuxt-layout>
</template>
<script>
import {useAuthStore} from "~/store/auth";
import UploadFile from "../../../components/UploadFile";
import { Modal } from 'flowbite';
import {useToast} from "vue-toastification";

export  default {
  components: {UploadFile},
  setup(){
    const user = useAuthStore()
    const toast = useToast()
    useHead({
      title: 'میزکاری',
    })

    return {
      user,
      toast
    }
  },
  data: () => ({
    modal: null,
  }),
  async mounted() {

    const [profile,All,city,Association,SportClub] = await Promise.all([
      await this.user.getProfile(),
      await this.user.getAllAssociation(),
      await this.user.getCity(),
      await this.user.getAssociation(),
    ])

  },

  methods:{
    ChangeLicense(value){
      let file = (value.length ? value[0] : false)
      if(file){
        this.user.sport_club_form.license = file
      }else{
        this.user.sport_club_form.license = null
      }
    },
    async DeleteMember(item){
      if(this.user.user_profile.association_info.role !== 'CM'){
        return;
      }
      await  this.user.DeleteAthletePMember(item.id)

    },
    async CreateMember(){

      this.user.AthleteMemberForm = {position : ""}
      this.modal.show()
    },
    async CreateMemberSend(){
      const { $error_log } = useNuxtApp()

      try {
        await  this.user.AddAthlMember()
        await this.user.getAthleteUsers(this.user.association_form.id)
        this.toast.success('عضو جدید با موفقیت ایجاد شد!')
        this.modal.hide()

      }catch (e){
        if(e.response._data){
          this.toast.error($error_log(e.response._data))
        }

      }
    }
  }
}
</script>