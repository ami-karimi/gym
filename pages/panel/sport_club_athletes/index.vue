<template>
  <nuxt-layout name="user">
    <div class="row">
      <div class="col-md-6">
        <div  class="w-full  p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700">

          <div class="flex justify-between mb-5">
            <h5 class="mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white">
              اعضای باشگاه
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
              <tr v-for="item in user.SportClubAthletes" :key="item.id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
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
              اطلاعات باشگاه ورزشی
            </h5>

          </div>

          <div class="row" :class="{'opacity-20' : user.sport_club_form.loading}">
            <div class="col-md-6 mb-3">
              <div>
                <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">نام</label>
                <input type="text" v-model="user.sport_club_form.name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="نام را وارد کنید" required>
              </div>
            </div>
            <div class="col-md-6 mb-3">
              <label for="city_2"  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">شهر</label>
              <select id="city_2" v-model="user.sport_club_form.city"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value="">انتخاب کنید</option>
                <option v-for="item in user.city" :value="item.id">{{ item.name }}</option>
              </select>
            </div>
            <div class="col-md-6  mb-3">
              <div>
                <label for="established_year" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">  تاریخ تاسیس </label>
                <input type="text" id="established_year" v-model="user.sport_club_form.established_year" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="1378-10-12" required>
                <date-picker
                    v-model="user.sport_club_form.established_year"
                    type="date"
                    format="jYYYY-jMM-jDD"
                    display-format="jYYYY-jMM-jDD"
                    :element="`established_year`"
                />
              </div>
            </div>
            <div class="col-md-6 mb-3">
              <div>
                <label for="registration_number"   class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">شماره ثبت</label>
                <input type="number" v-model="user.sport_club_form.registration_number" id="registration_number" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="1234" required>
              </div>
            </div>
            <div class="col-md-6 mb-3">
              <div>
                <label for="telephone_number" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">َشماره تلفن ثابت</label>
                <input type="text" v-model="user.sport_club_form.telephone_number" id="telephone_number" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="همراه با پیش شماره" required>
              </div>
            </div>
            <div class="col-md-6 mb-3">
              <div>
                <label for="postal_code" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">کد پستی</label>
                <input type="text" id="postal_code" v-model="user.sport_club_form.postal_code" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="کد پستی" required>
              </div>
            </div>
            <div class="col-md-12 mb-3">
              <label for="address" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">آدرس</label>
              <textarea id="address" rows="4" v-model="user.sport_club_form.address" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="آدرس کامل را تایپ کنید..."></textarea>
            </div>
            <div class="col-md-6 mb-3">
              <UploadFile v-if="!user.sport_club_form.loading" :multiple="false" :last="user.sport_club_form.license"   @update_image="ChangeLicense" id_input="inp-1" label="مجوز باشگاه *"></UploadFile>
            </div>
            <div class="col-md-6  mb-3">
              <div>
                <label for="license_expiration_date" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">تاریخ اعتبار مجوز</label>
                <input    v-model="user.sport_club_form.license_expiration_date" type="text" id="license_expiration_date" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="1378-10-12" required>
                <date-picker
                    v-model="user.sport_club_form.license_expiration_date"
                    type="date"
                    format="jYYYY-jMM-jDD"
                    display-format="jYYYY-jMM-jDD"
                    :element="`license_expiration_date`"
                />
              </div>
            </div>

          </div>


          <div class="flex justify-end mt-4">
            <button @click="user.SaveSportClub()" type="button" class="text-white bg-green-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-green-500 focus:outline-none dark:focus:ring-blue-800">
            <span v-if="user.sport_club_form.loading">
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
  </nuxt-layout>

</template>
<script>
import {useAuthStore} from "~/store/auth";
import UploadFile from "../../../components/UploadFile";
export  default {
  components: {UploadFile},
  setup(){
    const user = useAuthStore()
    useHead({
      title: 'میزکاری',
    })

    return {
      user
    }
  },
  async mounted() {
    const [city,Association,SportClub] = await Promise.all([
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
    }
  }
}
</script>