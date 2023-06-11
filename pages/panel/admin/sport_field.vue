<template>
  <nuxt-layout name="user">
    <div class="row">
      <div class="col-md-12">
        <div  class="w-full  p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700">

          <div class="flex justify-between mb-5">
            <h5 class="mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white">
             رشته های ورزشی
            </h5>

          </div>
          <div class="relative ">
            <label class="text-sm text-white mb-4 block">لطفا جهت مشاهده زیر رشته، رشته اصلی را انتخاب نمایید</label>
            <div class="flex  justify-start min-h-[200px]  w-full">
              <ul class="min-w-[150px] list-none">
              <li  v-for="item in user.sport_field" :key="item.id" @click="SelectSub(item)" class="flex items-center mb-3 justify-between rounded-lg  px-3 text-gray-700 py-1.5  bg-white cursor-pointer">
                {{item.name}}

                <div v-if="item.sub_fields.length">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="12" height="12">
                    <path d="M29.449219 4.9863281 A 1.50015 1.50015 0 0 0 28.423828 5.4550781L11.423828 22.955078 A 1.50015 1.50015 0 0 0 11.423828 25.044922L28.423828 42.544922 A 1.50015 1.50015 0 1 0 30.576172 40.455078L14.591797 24L30.576172 7.5449219 A 1.50015 1.50015 0 0 0 29.449219 4.9863281 z" fill="#8a8a8a" />
                  </svg>
                </div>
              </li>
            </ul>
              <ul class="min-w-[300px] mr-3 list-none">
                 <li  v-for="item in user.sub_sport_field" :key="item.id"  class="flex items-center mb-3 justify-between  px-3 text-gray-700 py-1.5 border-r-2 text-white  cursor-pointer">
                    <div>
                      {{item.name}}
                      >>
                      <span class="text-xs">{{getOwnerName(item.owner)}}</span>

                    </div>
                   <div class="action flex items-center">
                     
                     <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="22" height="22">
                       <path d="M28 6C25.791 6 24 7.791 24 10L24 12L23.599609 12L10 14L10 17L54 17L54 14L40.400391 12L40 12L40 10C40 7.791 38.209 6 36 6L28 6 z M 28 10L36 10L36 12L28 12L28 10 z M 12 19L14.701172 52.322266C14.869172 54.399266 16.605453 56 18.689453 56L45.3125 56C47.3965 56 49.129828 54.401219 49.298828 52.324219L51.923828 20L12 19 z M 20 26C21.105 26 22 26.895 22 28L22 51L19 51L18 28C18 26.895 18.895 26 20 26 z M 32 26C33.657 26 35 27.343 35 29L35 51L29 51L29 29C29 27.343 30.343 26 32 26 z M 44 26C45.105 26 46 26.895 46 28L45 51L42 51L42 28C42 26.895 42.895 26 44 26 z" fill="#a6a6a6" />
                     </svg>
                     -->
                      <!-- <span @click="EditSub(item)" class="text-xs mr-3 text-blue-400 cursor-pointer">ویرایش</span> -->
              
                     <svg class="ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="22" height="22">
                         <path d="M25 12C11.667969 12 1.25 24.34375 1.25 24.34375C0.921875 24.71875 0.921875 25.28125 1.25 25.65625C1.25 25.65625 11.667969 38 25 38C38.332031 38 48.75 25.65625 48.75 25.65625C49.078125 25.28125 49.078125 24.71875 48.75 24.34375C48.75 24.34375 38.332031 12 25 12 Z M 25 14C27.628906 14 30.140625 14.542969 32.46875 15.375C34.03125 17.140625 35 19.449219 35 22C35 27.535156 30.535156 32 25 32C19.464844 32 15 27.535156 15 22C15 19.449219 15.9375 17.140625 17.5 15.375C19.835938 14.539063 22.363281 14 25 14 Z M 14.1875 16.84375C13.4375 18.40625 13 20.15625 13 22C13 28.617188 18.382813 34 25 34C31.617188 34 37 28.617188 37 22C37 20.164063 36.582031 18.40625 35.84375 16.84375C41.492188 19.714844 45.554688 23.878906 46.59375 25C44.96875 26.757813 35.972656 36 25 36C14.027344 36 5.03125 26.757813 3.40625 25C4.445313 23.875 8.527344 19.714844 14.1875 16.84375 Z M 25 17C22.238281 17 20 19.238281 20 22C20 24.761719 22.238281 27 25 27C27.761719 27 30 24.761719 30 22C30 19.238281 27.761719 17 25 17Z" fill="#2390ef" />
                     </svg>
                     <svg  @click="EditSub(item)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="22" height="22">
                        <path d="M4 0L4 48L21 48 A 1.0001 1.0001 0 1 0 21 46L6 46L6 2L24 2L24 16L38 16L38 27 A 1.0001 1.0001 0 1 0 40 27L40 14.585938L25.414062 0L4 0 z M 26 3.4140625L36.585938 14L26 14L26 3.4140625 z M 11 19L11 21L33 21L33 19L11 19 z M 45.900391 24.900391C44.850391 24.900391 43.8 25.299609 43 26.099609L42.300781 26.800781L42.34375 26.84375L26.892578 42.292969 A 1.0001 1.0001 0 0 0 26.638672 42.726562L24.9375 48.726562 A 1.0001 1.0001 0 0 0 26.158203 49.966797L32.158203 48.367188 A 1.0001 1.0001 0 0 0 32.605469 48.109375L48.404297 32.410156 A 1.0001 1.0001 0 0 0 48.638672 32.060547L48.800781 31.900391C50.400781 30.300391 50.400781 27.699609 48.800781 26.099609C48.000781 25.299609 46.950391 24.900391 45.900391 24.900391 z M 11 25L11 27L33 27L33 25L11 25 z M 43.757812 28.257812L46.742188 31.242188L31.384766 46.501953L28.457031 43.640625L28.490234 43.523438L43.757812 28.257812 z M 11 31L11 33L33 33L33 31L11 31 z M 11 37L11 39L24 39L24 37L11 37 z" fill="#2390ef" />
                     </svg>
                    
                   </div>
              
                  </li>
                 </ul>
              <div v-if="user.sub_sport_field.length" class="mr-3 border-r-2">
                <h4 v-if="!user.sub_sport_field_form.id" class="text-white pr-4">ایجاد رشته در  ({{ parent_name }})</h4>
                <h4 v-else class="text-white pr-4">بروزرسانی رشته فرعی ({{user.sub_sport_field_form.name}}) در رشته اصلی ({{ parent_name }})</h4>
                <div class="row mt-5 ">
                  <div class="col-md-8">

                    <div class="col-md-12">
                      <div class="mb-3" >
                        <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">نام سبک</label>
                        <input type="text" v-model="user.sub_sport_field_form.name"  id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" pattern="[0-9]" placeholder="نام سبک را بنویسید...." required="">
                      </div>
                    </div>

                    <div class="col-md-12 mb-3" v-if="!user.sub_sport_field_form.select_custom">
                      <label   class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">انتخاب از کاربران </label>
                      <Select2 v-model="user.sub_sport_field_form.national_code" style="width: 100%;"  :options="user.userList.map(item => ({text: (item.first_name ? item.first_name+' '+item.last_name : item.national_code),id: item.national_code}))" placeholder="صاحب سبک" />
                    </div>

                    <div class="col-md-12">
                      <div class="flex items-center mb-4">
                        <input id="default-checkbox" v-model="user.sub_sport_field_form.select_custom" type="checkbox" :value="true" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="default-checkbox" class="mr-2 text-sm font-medium text-gray-900 dark:text-gray-300">ایا میخواهید اطلاعات کاربر را دستی وارد نمایید؟</label>
                      </div>
                    </div>

                    <div class="col-md-12" v-if="user.sub_sport_field_form.select_custom">
                      <div class="row">

                        <div class="col-md-6">
                          <div class="mb-3" >
                            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">نام </label>
                            <input v-model="user.sub_sport_field_form.first_name" type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="نام صاحب سبک" required="">
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="mb-3" >
                            <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">نام خانوادگی </label>
                            <input v-model="user.sub_sport_field_form.last_name"  type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="نام خانوادگی صاحب سبک" required="">
                          </div>
                        </div>
                        <div class="col-md-12" >
                          <div class="mb-3" >
                            <label for="national_code" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">کد ملی </label>
                            <input type="text" v-model="user.sub_sport_field_form.national_code"  id="national_code" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" pattern="[0-9]" placeholder="کد ملی صاحب سبک" required="">
                          </div>
                        </div>

                      </div>
                    </div>

                    <div class="col-md-12 mb-3">
                      <label for="parent"  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">رشته اصلی</label>
                      <select id="parent" v-model="user.sub_sport_field_form.parent"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="">انتخاب کنید</option>
                        <option v-for="item in user.sport_field" :value="item.id">{{ item.name }}</option>
                      </select>
                    </div>
                    <label class="text-xs mt-2 pr-5 text-white block">چنانچه قصد جایجایی این سبک به رشته دیگیری را دارید میتوانید تغییر دهید سبک اصلی را در غیر اینصورت نیازی به تغییر این آیتم نمیباشد</label>


                    <div class="col-md-12">
                      <div class="flex justify-end mt-4">
                        <button @click="CanceleEdit()"  type="button" class="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800 ml-2"  v-if="user.sub_sport_field_form.id">
                          انصراف
                        </button>
                        <button @click="user.SaveSubSportField()" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            <span v-if="user.sub_sport_field_form.loading">
                 <svg aria-hidden="true" class="inline w-4 h-4 mr-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                  </svg>
                  صبر نمایید...
                  </span>
                          <span v-else v-text="(user.sub_sport_field_form.id ? 'بروزرسانی رشته فرعی' : ' ایجاد رشته فرعی' )">

                </span>
                        </button>

                      </div>

                    </div>

                  </div>
                </div>
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

export default {
  setup(){
    const user = useAuthStore()

    return {
      user
    }
  },
  data: () => ({
    parent_name : "",
    loading: true,
    view : false,
  }),
  async mounted() {
    this.loading = true
    const [profile,SportField,users] = await Promise.all([
      await this.user.getProfile(),
      await this.user.getSportField(),
      await this.user.getUsersList()

    ])
    this.loading = false

  },
  methods:{
  
    getOwnerName(id){
      let index = this.user.userList.findIndex(item => item.id == id)
      if(index !== -1){
        return this.user.userList[index].first_name+" "+this.user.userList[index].last_name
      }
      return 'ناشناس';
    },
    getOwnerData(id){
      let index = this.user.userList.findIndex(item => item.id == id)
      if(index !== -1){
        return this.user.userList[index]
      }
      return {};
    },
    EditSub(item){
      let owner = this.getOwnerData(item.owner)
      this.user.sub_sport_field_form.id = item.id
      this.user.sub_sport_field_form.first_name = owner.first_name
      this.user.sub_sport_field_form.name = item.name
      this.user.sub_sport_field_form.last_name = owner.last_name
      this.user.sub_sport_field_form.national_code = owner.national_code
    },
    CanceleEdit(){
      this.user.sub_sport_field_form.id = false
      this.user.sub_sport_field_form.first_name = ""
      this.user.sub_sport_field_form.last_name = ""
      this.user.sub_sport_field_form.national_code = ""
      this.user.sub_sport_field_form.name = ""
    },
    SelectSub(item){
      this.parent_name = item.name
      this.user.sub_sport_field_form.parent = item.id
      this.user.sub_sport_field = item.sub_fields

    }
  }
}
</script>