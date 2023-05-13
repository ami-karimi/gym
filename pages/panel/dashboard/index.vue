<template>
  <nuxt-layout name="user">
    <div class="row mt-6">
      <div class="col-md-6" >
        <div  class="w-full  mx-auto p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700">
          <div :class="{'opacity-20' : user.profile_form.loading || user.user_profile.loading}" class="flex justify-between mb-5">
            <h5 class="mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white">
              تکمیل پروفایل کاربری
            </h5>

          </div>

          <div  :class="{'opacity-20' : user.profile_form.loading || user.user_profile.loading}" class="grid gap-6 mb-6 md:grid-cols-1">
            <div class="row ">
              <div class="col-md-12  mb-3">
                <div class="flex items-center justify-start">
                  <img class="w-20 h-20 rounded-full" :src="typeof user.profile_form.profile_image === 'string' ? (user.profile_form.profile_image ? user.profile_form.profile_image : '/img/no-pic.png') : ConvertImage(user.profile_form.profile_image)" alt="user photo">
                  <label for="upload_profile" type="button" class="text-white relative inline-block bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                    بارگذاری تصویر
                    <input id="upload_profile" v-on:change="UploadProfile($event)" class="opacity-0 absolute" type="file">
                  </label>

                </div>
              </div>

              <div class="col-md-6  mb-3">
                <div>
                  <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">نام</label>
                  <input type="text" v-model="user.profile_form.first_name" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="نام شما به فارسی" required>
                </div>
              </div>

              <div class="col-md-6  mb-3">
                <div>
                  <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">نام خانوادگی</label>
                  <input type="text" v-model="user.profile_form.last_name" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="نام خانوادگی شما به فارسی" required>
                </div>
              </div>
              <div class="col-md-6  mb-3">
                <div>
                  <label for="father_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">نام پدر</label>
                  <input type="text" v-model="user.profile_form.father_name" id="father_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="نام پدر" required>
                </div>
              </div>
              <div class="col-md-6  mb-3">
                <div>
                  <label for="telephone_number" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">شماره تلفن ثابت</label>
                  <input type="text" v-model="user.profile_form.telephone_number" id="telephone_number" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="شماره تلفن ثابت همراه با پیش شماره" required>
                </div>
              </div>



              <div class="col-md-6  mb-3">
                <div>
                  <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ایمیل</label>
                  <input type="email" v-model="user.profile_form.email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="example@gmail.com" dir="ltr" required>
                </div>
              </div>

              <div class="col-md-6  mb-3">
                <div>
                  <label for="national_code" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">کد ملی</label>
                  <input type="text" v-model="user.profile_form.national_code" id="national_code" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="215101214" dir="rtl" required>
                </div>
              </div>

              <div class="col-md-6  mb-3">
                <div>
                  <label for="birth_date" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">  تاریخ تولد</label>
                  <input type="text" v-model="user.profile_form.birth_date" id="birth_date" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="1378-10-12" required>
                  <date-picker
                      v-model="user.profile_form.birth_date"
                      type="date"
                      format="jYYYY-jMM-jDD"
                      display-format="jYYYY-jMM-jDD"
                      :element="`birth_date`"
                  />
                </div>
              </div>


              <div class="col-md-6  mb-3">
                <div>
                  <label for="degree" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">تحصیلات</label>
                  <select id="degree"  v-model="user.profile_form.degree"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option value="">انتخاب کنید</option>
                    <option value="DIPLOMA">دیپلم</option>
                    <option value="ASSOCIATE">کاردانی</option>
                    <option value="BACHELOR">کارشناسی</option>
                    <option value="MASTER">ارشد</option>
                    <option value="PHD">دکترا</option>
                  </select>
                </div>
              </div>
              <div class="col-md-6  mb-3">
                <div>
                  <label for="gender" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">جنسیت</label>
                  <select id="gender"  v-model="user.profile_form.gender"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option value="">انتخاب کنید</option>
                    <option value="FEMALE">زن</option>
                    <option value="MALE">مرد</option>
                  </select>
                </div>
              </div>
              <div class="col-md-6  mb-3">
                <div>
                  <label for="city" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">شهر</label>
                  <select id="city"  v-model="user.profile_form.city"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option value="">انتخاب کنید</option>
                    <option v-for="item in user.city" :value="item.id">{{ item.name }}</option>
                  </select>
                </div>
              </div>
              <div class="col-md-6  mb-3">
                <div>
                  <label for="sport_club" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">باشگاه ورزشی</label>
                  <select id="sport_club"  v-model="user.profile_form.sport_club"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option value="">انتخاب کنید</option>
                    <option  :value="user.sport_club.id">{{ user.sport_club.name }}</option>
                  </select>
                </div>
              </div>
              <div class="col-md-6  mb-3">
                <div>
                  <label for="coach" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">مربی</label>
                  <select id="coach"  v-model="user.profile_form.coach"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option value="">انتخاب کنید</option>
                    <option v-for="item in user.coach" :value="item.id">{{ item.first_name }} {{ item.last_name }}</option>
                  </select>
                </div>
              </div>


              <div class="col-md-6  mb-3">
                <div>
                  <label for="field" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">رشته اصلی</label>
                  <select id="field"  v-model="user.profile_form.parent_sport_field"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option value="">انتخاب کنید</option>
                    <option v-for="item in user.sports_field" :value="item.id">{{ item.name }}</option>
                  </select>
                </div>
              </div>

              <div class="col-md-6  mb-3">
                <div>
                  <label for="field_2" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">رشته فرعی</label>
                  <select id="field_2" :disabled="!user.profile_form.parent_sport_field"  v-model="user.profile_form.field"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option value="">انتخاب کنید</option>
                    <option v-for="item in user.sports_field_children" :value="item.id">{{ item.name }}</option>
                  </select>
                </div>
              </div>



              <div class="col-md-12 mb-3">

                <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">آدرس</label>
                <textarea id="message" v-model="user.profile_form.address" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="آدرس کامل را تایپ کنید..."></textarea>

              </div>

              <div class="col-md-12">
                <div class="row items-center "  v-if="!user.user_profile.loading" >
                  <div class="col-md-6">
                    <UploadFile :multiple="false" :last="user.profile_form.federation_card" @update_image="Changefederation_card" id_input="inp-1" label="کارت فدراسیون *"></UploadFile>
                  </div>

                  <div class="col-md-6">
                    <UploadFile :multiple="false" :last="user.profile_form.insurance_card" @update_image="Changeinsurance_card" id_input="inp-2"  label="کارت بیمه *"></UploadFile>
                  </div>

                </div>
              </div>


            </div>

          </div>

          <button type="button" @click="user.SaveProfile" class="mt-8 focus:outline-none w-full text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">

            <span v-if="user.profile_form.loading">
                  <svg aria-hidden="true" class="inline w-4 h-4 mr-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                  </svg>
                  صبر نمایید...
                  </span>
            <span v-else>
                بروزرسانی/ثبت اطلاعات
                </span>

          </button>




        </div>
      </div>
      <div class="col-md-6" :class="{'opacity-20' : user.profile_form.loading || user.user_profile.loading}">
        <div  class="w-full  mx-auto p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700">
          <div class="flex justify-between mb-5">
            <h5 class="mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white">
              تکمیل مدارک به عنوان داور
            </h5>
            <button type="button" @click="bt1 = !bt1" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">

              {{(bt1 ? 'انصراف' : 'تکمیل مدارک') }}
            </button>


          </div>



          <div v-if="bt1">
            <UploadFile :multiple="true"   v-if="!user.user_profile.loading"  :last="user.profile_form.referee_docs"  id_input="inp-4"  @update_image="Changereferee_docs"  ></UploadFile>
          </div>
        </div>

        <div  class="w-full mt-4  mx-auto p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700">
          <div class="flex justify-between mb-5">
            <h5 class="mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white">
              تکمیل مدارک به عنوان مربی
            </h5>

            <button type="button" @click="bt2 = !bt2" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">

              {{(bt2 ? 'انصراف' : 'تکمیل مدارک') }}

            </button>

          </div>

          <div class="grid gap-6 mb-6 md:grid-cols-1" v-if="bt2">

            <div>
              <UploadFile :multiple="true" v-if="!user.user_profile.loading"  :last="user.profile_form.coaching_docs"  id_input="inp-3"  @update_image="Changecoaching_docs"  ></UploadFile>
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

export default {
  components: {UploadFile},
  data: () => ({
    bt1: false,
    bt2: false,
  }),
  setup(){
    const user = useAuthStore()
    useHead({
      title: 'ویرایش پروفایل',
    })

    return {
      user
    }
  },
  watch:{
    "user.profile_form.parent_sport_field" : {
      async handler(){
        let id = this.user.profile_form.parent_sport_field
        let findIndex = this.user.sports_field.findIndex(item => item.id == id )
        if(findIndex !== -1){
          this.user.sports_field_children = this.user.sports_field[findIndex].sub_fields
        }
      },
      deep: true,
    },
    "user.profile_form.coaching_docs" : {
      async handler(){
        if(this.user.profile_form.coaching_docs.length){
          this.bt2 = true
        }
      },
      deep: true,
    },
    "user.profile_form.referee_docs" : {
      async handler(){
        if(this.user.profile_form.referee_docs.length){
          this.bt1 = true
        }
      },
      deep: true,
    },
    "user.profile_form.gender" : {
      async handler(value){
        this.user.getCoach(this.user.profile_form.gender)
      },
      deep: true,
    },
  },
  async mounted() {
    const [profile,city,coach,filed,sport_club] = await Promise.all([
      await this.user.getCity(),
      await this.user.getCoach(),
      await this.user.getSportFiled(),
      await this.user.getSportClub(),
      await this.user.getProfile(),
    ]);
  },
  methods:{
    Changefederation_card(value){
      let file = (value.length ? value[0] : false)
      if(file){
        this.user.profile_form.federation_card = file
      }else{
        this.user.profile_form.federation_card = null
      }

    },
    Changeinsurance_card(value){
      let file = (value.length ? value[0] : false)
      if(file){
        this.user.profile_form.insurance_card = file
      }else{
        this.user.profile_form.insurance_card = null
      }

    },
    Changecoaching_docs(value){
      let file = (value.length ? value : false)
      if(file){
        this.user.profile_form.coaching_docs = file
      }else{
        this.user.profile_form.coaching_docs = null
      }

    },
    Changereferee_docs(value){
      let file = (value.length ? value : false)
      if(file){
        this.user.profile_form.referee_docs = file
      }else{
        this.user.profile_form.referee_docs = null
      }

    },
    UploadProfile(event){
      let file = event.target.files
      if(file.length){
        this.user.profile_form.profile_image = event.target.files[0]
      }else{
        this.user.profile_form.profile_image = null
      }
      document.getElementById('upload_profile').value = ''
    },
    ConvertImage(image){
      if(!image){
        return '/img/no-img.png'
      }
      return  URL.createObjectURL(image)
    },
  }
}
</script>