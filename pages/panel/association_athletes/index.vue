<template>
  <nuxt-layout name="user">
    <div class="row">
      <div class="col-md-6">

        <div  class="w-full mb-5 p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700">

          <div class="flex justify-between mb-5">
            <h5 class="mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white">
              اعضای هیات
            </h5>

            <button @click="CreateMember" type="button" class="text-white bg-green-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-green-500 focus:outline-none dark:focus:ring-blue-800">ایجاد عضو جدید</button>

          </div>
          <div class="relative overflow-x-auto  ">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3 text-center">
                  شناسه
                </th>
                <th scope="col" class="px-6 py-3 text-center">
                  نام
                </th>
                <th scope="col" class="px-6 py-3 text-center">
                  نام خانوادگی
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
              <tr v-for="item in user.AthleteUsers.members" :key="item.id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="px-6 text-center py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {{ item.id }}
                </th>
                <td class="px-6 text-center py-4">
                  {{item.user.first_name}}
                </td>
                <td class="px-6 text-center py-4">
                  {{item.user.last_name}}
                </td>
                <td class="text-center">
                  <span v-if="item.position === 'CM'">رئیس هیات</span>
                  <span v-if="item.position === 'VC'">نائب هیات</span>
                  <span v-if="item.position === 'MOB'">عضو هیات رئیسه</span>
                  <span v-if="item.position === 'ST'">دبیر</span>
                  <span v-if="item.position === 'TS'">خزانه دار</span>
                  <span v-if="item.position === 'RC'">کمیته داورن</span>
                  <span v-if="item.position === 'CC'">کمیته مربیان</span>
                  <span v-if="item.position === 'IC'">کمیته بازرسی</span>
                  <span v-if="item.position === 'PRC'">کمیته روابط عمومی</span>
                  <span v-if="item.position === 'PC'">کمیته همگانی</span>
                  <span v-if="item.position === 'CTC'">کمیته مسابقات</span>
                  <span v-if="item.position === 'TSC'">کمیته استعدادیابی</span>
                  <span v-if="item.position === 'TC'">کمیته فنی</span>
                </td>
                <td class="text-center">
                  <label v-if="item.position !== 'CM'" @click="DeleteMember(item)" class="text-red-700"> حذف</label>
                </td>

              </tr>

              </tbody>
            </table>



          </div>








        </div>


        <div  class="w-full  p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700">

          <div class="flex justify-between mb-5">
            <h5 class="mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white">
             ورزشکاران هیات
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
                 نام
                </th>
                <th scope="col" class="px-6 py-3 text-center">
                 نام خانوادگی
                </th>

              </tr>
              </thead>
              <tbody>
              <tr v-for="item in user.associationAthletes" :key="item.id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="px-6 text-center py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {{ item.id }}
                </th>
                <td class="px-6 text-center py-4">
                 {{item.first_name}}
                </td>
                <td class="px-6 text-center py-4">
                  {{item.last_name}}
                </td>

              </tr>

              </tbody>
            </table>



          </div>








        </div>

      </div>
      <div class="col-md-6">
        <div  class="w-full  mx-auto p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700">
          <div class="flex justify-between mb-5">
            <h5 class="mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white">
              ویرایش هیات ورزشی
            </h5>

          </div>
          <div :class="{'opacity-20' : user.association_form.loading}">
            <div class="text-white mb-3" >
              <label class="ml-2">رئیس هیات :</label>
              <span class="font-extrabold" v-if="user.association_form.owner">{{user.association_form.owner.first_name}} {{user.association_form.owner.last_name}}</span>
            </div>
            <div class="flex items-center mb-4">
              <input id="default-checkbox" v-model="user.association_form.telephone_number_check" type="checkbox" :value="true" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
              <label for="default-checkbox" class="mr-2 text-sm font-medium text-gray-900 dark:text-gray-300">دارای خط تلفن میباشد؟</label>
            </div>

            <div class="mb-3" v-if="user.association_form.telephone_number_check">
              <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">شماره تلفن</label>
              <input type="tel" v-model="user.association_form.telephone_number" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required="">
            </div>


            <div class="flex items-center mb-4">
              <input id="default-checkbox-2" v-model="user.association_form.fax_number_check"  type="checkbox" :value="true" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
              <label for="default-checkbox-2" class="mr-2 text-sm font-medium text-gray-900 dark:text-gray-300">دارای فکس میباشد؟</label>
            </div>
            <div class="mb-3" v-if="user.association_form.fax_number_check">
              <label for="fax" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">شماره فکس</label>
              <input type="tel" v-model="user.association_form.fax_number" id="fax" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required="">
            </div>


            <div class="flex items-center mb-4">
              <input id="default-checkbox-3"  v-model="user.association_form.computer_count_check"  type="checkbox" :value="true" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
              <label for="default-checkbox-2" class="mr-2 text-sm font-medium text-gray-900 dark:text-gray-300">دارای کامپیوتر میباشد؟</label>
            </div>
            <div class="mb-3" v-if="user.association_form.computer_count_check">
              <label for="computer_count" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">تعداد کامپیوتر</label>
              <input type="number" v-model="user.association_form.computer_count" id="computer_count" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="تعداد کامپیوتر" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required="">
            </div>



            <div class="flex items-center mb-4">
              <input id="default-checkbox-4" v-model="user.association_form.have_office_human_personnel" type="checkbox" :value="true" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
              <label for="default-checkbox-4" class="mr-2 text-sm font-medium text-gray-900 dark:text-gray-300">دارای نیروی انسانی دفتری میباشد؟</label>
            </div>


            <div class="mb-4">
              <label for="city" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">شهر</label>
              <select v-if="user.association_form.city" id="city"  v-model="user.association_form.city.id"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value="">انتخاب کنید</option>
                <option v-for="item in user.city" :value="item.id">{{ item.name }}</option>
              </select>
            </div>

            <div class="mt-3">
              <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">آدرس</label>
              <textarea id="message" v-model="user.association_form.address" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="آدرس کامل را تایپ کنید..."></textarea>
            </div>
          </div>
          <div class="flex justify-end mt-4">
            <button @click="user.SaveAssociation()" type="button" class="text-white bg-green-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-green-500 focus:outline-none dark:focus:ring-blue-800">
            <span v-if="user.association_form.loading">
                 <svg aria-hidden="true" class="inline w-4 h-4 mr-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                  </svg>
                  صبر نمایید...
                  </span>
              <span v-else>
                 بروزرسانی
                </span>
            </button>

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
            <button @click="CreateMemberSend" type="button" class="text-white bg-green-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-green-500 focus:outline-none dark:focus:ring-blue-800">ایجاد</button>
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

    const [profile,city,Association,SportClub] = await Promise.all([
    
      await this.user.getCity(),
      await this.user.getAssociation(),
      await this.user.getSportClub(),
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