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



          </div>
        </div>

      </div>
    </div>


    <div id="modal"  tabindex="-1" aria-hidden="true" class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
      <div class="relative w-full max-w-[350px] max-h-full">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <!-- Modal header -->
          <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
              ایجاد عضو جدید هیات
            </h3>
            <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 mr-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" @click="modal.hide()">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>
          </div>
          <!-- Modal body -->
          <div class="px-5 py-5">
            <div class="row">
              <div class="col-md-12 mb-3">
                <label for="role" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">سمت</label>
                <select v-model="user.AthleteMemberForm.position" id="role" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option value=""> انتخاب کنید</option>
                  <option value="CM">رئیس هیات</option>
                  <option value="VC">نائب هیات</option>
                  <option value="MOB">عضو هیات رئیسه</option>
                  <option value="ST">دبیر</option>
                  <option value="TS">خزانه دار</option>
                  <option value="RC">کمیته داورن</option>
                  <option value="CC">کمیته مربیان</option>
                  <option value="IC">کمیته بازرسی</option>
                  <option value="PRC">کمیته روابط عمومی</option>
                  <option value="PC">کمیته همگانی</option>
                  <option value="CTC">کمیته مسابقات</option>
                  <option value="TSC">کمیته استعدادیابی</option>
                  <option value="TC">کمیته فنی</option>
                </select>
              </div>
              <div class="col-md-6 mb-3">
                  <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">نام</label>
                  <input v-model="user.AthleteMemberForm.first_name" type="text" name="first_name" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="نام" required />
              </div>
              <div class="col-md-6 mb-3">
                  <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">نام خانوادگی</label>
                  <input   v-model="user.AthleteMemberForm.last_name" type="text" name="last_name" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="نام خانوادگی" required />
              </div>
              <div class="col-md-12 mb-3">
                  <label for="national_code" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">کد ملی</label>
                  <input v-model="user.AthleteMemberForm.national_code"  type="text" name="national_code" id="national_code" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="کد ملی" required />
              </div>
            </div>
          </div>
          <!-- Modal footer -->
          <div class="flex items-center justify-between p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
            <button @click="modal.hide()" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">خروج</button>
            <button @click="CreateMemberSend" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">ایجاد</button>
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
    const $targetElQr = document.getElementById('modal');
    this.modal = new Modal($targetElQr,{});

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