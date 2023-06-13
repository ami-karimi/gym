<template>
  <nuxt-layout name="user">
    <div  class="w-full mb-5 p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700">

      <div class="flex justify-between mb-5">
        <h5 class="mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white">
          لیست کاربران
        </h5>

      </div>



     <div class="flex items-center mb-5 " style="justify-content: space-between;">
     <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="text-white bg-green-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-green-500 dark:focus:ring-blue-800" type="button"> فیلترها <svg class="w-4 h-4 mr-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
      <!-- Dropdown menu -->
     <div id="dropdown" class="z-10 hidden p-4 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
         <ul class="p-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
           <li class="mb-3">
            <input id="default-checkbox" type="checkbox" v-model="user.filterUser.is_athlete" :value="true" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
           <label for="default-checkbox" class="mr-3 text-sm font-medium text-gray-900 dark:text-gray-300">ورزشکاران</label>
           </li>
          <li class="mb-3">
             <input  id="checked-checkbox" type="checkbox" v-model="user.filterUser.is_coach" :value="true"  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
            <label for="checked-checkbox" class="mr-3 text-sm font-medium text-gray-900 dark:text-gray-300">مربی ها</label>
           </li>
           <li class="mb-3">
             <input  id="checked-checkbox-4" type="checkbox"  v-model="user.filterUser.is_referee" :value="true" value=""  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
             <label for="checked-checkbox-4" class="mr-3 text-sm font-medium text-gray-900 dark:text-gray-300">داوران</label>
           </li>
           <li class="mb-3">
             <input  id="checked-checkbox-5" type="checkbox"  v-model="user.filterUser.is_association_member" :value="true" value=""  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
             <label for="checked-checkbox-5" class="mr-3 text-sm font-medium text-gray-900 dark:text-gray-300">رئیس هیات</label>
           </li>
         </ul>
     </div>
       
      <button  @click="search = !search"  class="left-100 bg-green-500 p-2 text-white ring-4  rounded-lg">
              سرچ پیشرفته
      </button>
       
     </div>

      <div v-if="search" class="border mb-5 mt-3 p-5 rounded-lg relative border-gray-700">
        <label class="absolute -top-3 right-3 bg-white rounded px-3 text-sm">فیلتر پیشرفته</label>
        <div class="row items-center justify-start">
           <div class="col-md-3 mb-3">
               <label for="fields"  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">رشته</label>
               <Select2 v-model="user.filterUser.field" style="width: 100%;"  id="fields" :options="user.subTreeData" placeholder="رشته را انتخاب کنید..." />
           </div>

          <div class="col-md-2 mb-3">
               <label for="national_code"  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> نام</label>
              <input type="text" v-model="user.filterUser.first_name" id="national_code" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="نام" required>
          </div>
          <div class="col-md-2 mb-3">
               <label for="national_code"  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">نام خانوادگی </label>
              <input type="text" v-model="user.filterUser.last_name" id="national_code" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="نام خانوادگی" required>
          </div>
           <div class="col-md-2 mb-3">
              <label for="national_code"  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">کد ملی</label>
              <input type="text" v-model="user.filterUser.national_code" id="national_code" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="کد ملی" required>
          </div>
          <div class="col-md-3 mb-3">
               <label for="phone_number"  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> شماره تماس </label>
              <input type="text" v-model="user.filterUser.phone_number" id="phone_number" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="شماره تماس" required>
          </div>
          <div class="col-md-2 mb-3">
            <label for="gender" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">جنسیت</label>
            <select id="gender"  v-model="user.filterUser.gender"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option value="">انتخاب کنید</option>
              <option value="FEMALE">زن</option>
              <option value="MALE">مرد</option>
            </select>
          </div>
          <div class="col-md-2 mb-3">
            <label for="date_joined_choice" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">عضویت در</label>
            <select id="date_joined_choice"  v-model="user.filterUser.date_joined_choice"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option value="">انتخاب کنید</option>
              <option value="today">امروز</option>
              <option value="yesterday">دیروز</option>
              <option value="week">7 روز پیش</option>
           
            </select>
          </div>
          <div class="col-md-2 mb-3">
            <label for="city" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">شهر</label>
            <select id="city"  v-model="user.filterUser.city"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option value="">انتخاب کنید</option>
              <option v-for="item in user.city" :key="item.id" :value="item.id">{{ item.name }}</option>
            </select>
          </div>
        </div>
      </div>

      <div class="relative overflow-x-auto  ">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3 text-center">
              شناسه
            </th>
            <th scope="col" class="px-6 py-3 text-center">
              نام و نام خانوادگی
            </th>
            <th scope="col" class="px-6 py-3 text-center">
             کد ملی
            </th>
            <th scope="col" class="px-6 py-3 text-center">
             رشته ورزشی
            </th>
            <th scope="col" class="px-6 py-3 text-center">
             شماره تماس
            </th>

            <th scope="col" class="px-6 py-3 text-center">
             سمت
            </th>
            <th scope="col" class="px-6 py-3 text-center">
              عملیات
            </th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="item in user.userList" :key="item.id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th scope="row" class="px-6 text-center py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              {{ item.id }}
            </th>
            <td class="px-6 text-center py-4">
              {{item.first_name}} {{item.last_name}}
            </td>
            <td class="px-6 text-center py-4">
              {{item.national_code}}
            </td>
            <td class="px-6 text-center py-4">
             <span v-if="item.field">
                {{item.field_name}}
             </span>
              <span v-else >
                ----
              </span>
            </td>
           <td class="px-6 text-center py-4">
              {{item.phone_number}}
            </td>

            <td class="px-6 text-center py-4">
              <p v-if="item.association_info !== null">
              <span v-if="item.association_info.role === 'CM'">رئیس هیات</span>
              <span v-if="item.association_info.role === 'VC'">نائب هیات</span>
              <span v-if="item.association_info.role === 'MOB'">عضو هیات رئیسه</span>
              <span v-if="item.association_info.role === 'ST'">دبیر</span>
              <span v-if="item.association_info.role === 'TS'">خزانه دار</span>
              <span v-if="item.association_info.role === 'RC'">کمیته داورن</span>
              <span v-if="item.association_info.role === 'CC'">کمیته مربیان</span>
              <span v-if="item.association_info.role === 'IC'">کمیته بازرسی</span>
              <span v-if="item.association_info.role === 'PRC'">کمیته روابط عمومی</span>
              <span v-if="item.association_info.role === 'PC'">کمیته همگانی</span>
              <span v-if="item.association_info.role === 'CTC'">کمیته مسابقات</span>
              <span v-if="item.association_info.role === 'TSC'">کمیته استعدادیابی</span>
              <span v-if="item.association_info.role === 'TC'">کمیته فنی</span>
              </p>
              <span v-else>کاربر</span>

            </td>
            <td class="px-6 text-center py-4 flex justify-center items-center">
              <nuxt-link  class="text-blue-400" :to="`/panel/users/view/${item.id}`"> مشاهده پروفایل </nuxt-link>
              <a @click="DeleteUser(item)" href="javascript:void(0)" class="text-red-600 mr-2 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="25" height="25">
                  <path d="M28 6C25.791 6 24 7.791 24 10L24 12L23.599609 12L10 14L10 17L54 17L54 14L40.400391 12L40 12L40 10C40 7.791 38.209 6 36 6L28 6 z M 28 10L36 10L36 12L28 12L28 10 z M 12 19L14.701172 52.322266C14.869172 54.399266 16.605453 56 18.689453 56L45.3125 56C47.3965 56 49.129828 54.401219 49.298828 52.324219L51.923828 20L12 19 z M 20 26C21.105 26 22 26.895 22 28L22 51L19 51L18 28C18 26.895 18.895 26 20 26 z M 32 26C33.657 26 35 27.343 35 29L35 51L29 51L29 29C29 27.343 30.343 26 32 26 z M 44 26C45.105 26 46 26.895 46 28L45 51L42 51L42 28C42 26.895 42.895 26 44 26 z" fill="red" />
                </svg>
              </a>

            </td>

          </tr>

          </tbody>
        </table>



      </div>








    </div>
    <div id="action-modal" tabindex="-1" class="fixed top-0 left-0 right-0 z-50 hidden p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
      <div class="relative w-full max-w-md max-h-full">
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <button type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" @click=" modal.hide()">
            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            <span class="sr-only">Close modal</span>
          </button>
          <div class="p-6 text-center">

            <div >
              <svg aria-hidden="true" class="mx-auto mb-4 text-gray-400 w-14 h-14 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>

              <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400"> آیا اطمینان دارید میخواهید این کاربر را حذف نمایید ؟</h3>
              <p class="text-white mb-3">با حذف کاربر کلیه اطلاعات آن حذف خواهد شد و این عملیات غیرقابل برگشت میباشد</p>

              <button @click="SendDelete" type="button" class="ml-4 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                بله،حذف شود.
              </button>
              <button @click="modal.hide()" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">خیر، انصراف</button>
            </div>

          </div>
        </div>
      </div>
    </div>

  </nuxt-layout>
</template>
<script>
import {useAuthStore} from "~/store/auth";
import { Modal } from 'flowbite';
import {useToast} from "vue-toastification";

export default {
  data: () => ({
    modal: null,
    deleteId: null,
    search: false
  }),
  setup(){
    const user = useAuthStore()
    const toast = useToast()
    useHead({
      title: 'کاربران',
    })

    return {
      toast,
      user
    }
  },
  watch:{
    'user.filterUser':{
      async handler(){
        await this.user.getUsersList()
       
      },
      deep: true,
      immediate: true,
    }
  },
  async mounted() {
  
    await this.user.getCity()
    await this.user.getUsersList()
    await this.user.getSportFiled()

    await this.user.GetSportFiledSelect()

    const $targetElQr = document.getElementById('action-modal');
    this.modal = new Modal($targetElQr,{});
  },
  methods: {
    DeleteUser(item){
      this.deleteId = item.id
      this.modal.show()
    },
    async SendDelete(){
      const { $error_log } = useNuxtApp()

      try{
        await  this.user.deleteUser(this.deleteId)
        this.toast.success('کاربر مورد نظر با موفقیت حذف شد!')
        this.modal.hide()
        await this.user.getUsersList()
      }catch (e){
        if(e.response._data){
          this.toast.error($error_log(e.response._data))
        }
      }
    }
  }
}
</script>