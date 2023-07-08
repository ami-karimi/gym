<template>
  <nuxt-layout name="user">
    <div class="sm:h-[250px] h-[450px] mt-6">
      <div class="row">

        <div class="col-md-3 col-xs-6  mb-2 sn:mb-0">
          <div @click="SelectedType('user')" :class="` border-gray-400 bg-gray-800 shadow-xl p-5 ${select_type.includes('user') ? 'bg-gray-800' : ''} text-center hover:bg-gray-800 relative hover:border-gray-700 cursor-pointer transition text-white rounded-lg border-gray-600  focus:bg-gray-700`">
            <div v-if="select_type.includes('user')" class="bg-green-500 absolute rounded top-2 left-2">
              <span class="text-sm px-2 py-1">انتخاب شده</span>
            </div>
            <div class="icon-p flex mb-3 justify-center ">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="62" height="62">
                <path fill="#ffba57" d="M14,4c2.209,0,4,1.791,4,4s-1.791,4-4,4c-2.209,0-4-1.791-4-4S11.791,4,14,4" />
                <path fill="#d2ccc9" d="M41,14c0-1.105-0.895-2-2-2c-0.535,0-1.019,0.213-1.378,0.556l-12.343,7.651l-2.951-4.426c-0.098-0.147-0.217-0.271-0.33-0.401l9.204-5.555c0.731-0.387,1.011-1.295,0.623-2.027c-0.387-0.731-1.297-1.011-2.027-0.623l-17,9c-0.251,0.133-0.459,0.334-0.601,0.581l-4,7c-0.367,0.642-0.211,1.454,0.365,1.915l5,4C13.839,29.892,14.17,30,14.499,30c0.44,0,0.876-0.192,1.172-0.563c0.518-0.647,0.413-1.591-0.234-2.108l-3.998-3.199l3.951-4.443c0.084,0.18,0.168,0.361,0.282,0.532L20,26.54V42c0,1.105,0.895,2,2,2s2-0.895,2-2l2-16l13.926-10.237C40.562,15.428,41,14.769,41,14z" />
                <path fill="#d2ccc9" d="M26 26L24 42 24 27z" />
                <path fill="#606fc4" d="M15.333,19.729l4.662,6.804c2.831-1.941,4.608-4.674,5.413-6.132L22,15.333C22,15.333,18.787,17.358,15.333,19.729z" />
              </svg>
            </div>
            <strong >حساب ورزشکار</strong>
            <ul v-if="select_type.includes('user')"  class="w-[200px] ml-auto sm:mx-auto mt-3">
              <li class="flex items-center mb-2">
                <div class="w-[30px]">
                  <svg v-if="!user.profile_form.gender" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="18" height="18">
                    <path fill="#f44336" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z" />
                    <path fill="#fff" d="M29.656,15.516l2.828,2.828l-14.14,14.14l-2.828-2.828L29.656,15.516z" />
                    <path fill="#fff" d="M32.484,29.656l-2.828,2.828l-14.14-14.14l2.828-2.828L32.484,29.656z" />
                  </svg>
                  <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="18" height="18">
                    <path fill="#4caf50" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z" />
                    <path fill="#ccff90" d="M34.602,14.602L21,28.199l-5.602-5.598l-2.797,2.797L21,33.801l16.398-16.402L34.602,14.602z" />
                  </svg>
                </div>
                <span class="text-xs sm:text-sm"> انتخاب جنسیت</span>
              </li>

              <li class="flex items-center mb-2">
                <div class="w-[30px]">
                  <svg v-if="!user.AthleteProfile.coach.length" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="18" height="18">
                    <path fill="#f44336" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z" />
                    <path fill="#fff" d="M29.656,15.516l2.828,2.828l-14.14,14.14l-2.828-2.828L29.656,15.516z" />
                    <path fill="#fff" d="M32.484,29.656l-2.828,2.828l-14.14-14.14l2.828-2.828L32.484,29.656z" />
                  </svg>
                  <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="18" height="18">
                    <path fill="#4caf50" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z" />
                    <path fill="#ccff90" d="M34.602,14.602L21,28.199l-5.602-5.598l-2.797,2.797L21,33.801l16.398-16.402L34.602,14.602z" />
                  </svg>
                </div>
                <span class="text-xs sm:text-sm"> انتخاب مربی</span>
              </li>
              <li class="flex items-center">
                <div class="w-[30px]">
                  <svg v-if="!user.AthleteProfile.sport_club" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="18" height="18">
                    <path fill="#f44336" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z" />
                    <path fill="#fff" d="M29.656,15.516l2.828,2.828l-14.14,14.14l-2.828-2.828L29.656,15.516z" />
                    <path fill="#fff" d="M32.484,29.656l-2.828,2.828l-14.14-14.14l2.828-2.828L32.484,29.656z" />
                  </svg>
                  <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="18" height="18">
                    <path fill="#4caf50" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z" />
                    <path fill="#ccff90" d="M34.602,14.602L21,28.199l-5.602-5.598l-2.797,2.797L21,33.801l16.398-16.402L34.602,14.602z" />
                  </svg>
                </div>
                <span class="text-xs sm:text-sm"> انتخاب باشگاه ورزشی</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-3 col-xs-6  mb-2 sn:mb-0">
          <div @click="SelectedType('coach')" :class="` border-gray-400 bg-gray-800 shadow-xl p-5 ${select_type.includes('coach') ? 'bg-gray-800' : ''} text-center hover:bg-gray-800 relative hover:border-gray-700 cursor-pointer transition text-white rounded-lg border-gray-600  focus:bg-gray-700`">
            <div v-if="select_type.includes('coach')" class="bg-green-500 absolute rounded top-2 left-2">
              <span class="text-sm px-2 py-1">انتخاب شده</span>
            </div>
            <div class="icon-p flex mb-3 justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="62" height="62">
                <path fill="#757575" d="M45,42.286c0,0-1.75-4.286-7-4.286s-7,4.286-7,4.286V44h14V42.286z" />
                <path fill="#2196f3" d="M18,18.27l-0.34,4.61v0.05L16.11,44h-7.4L7.76,31.31L5,29.5v-7.63c0-2.24,1.06-4.22,2.75-5.47 c0.05-0.04,0.09-0.07,0.14-0.11H7.9c0.27-0.19,0.57-0.37,0.87-0.52c0.24-0.12,0.49-0.23,0.75-0.33c0.06-0.02,0.12-0.04,0.19-0.06 c0.72-0.24,1.5-0.38,2.31-0.38c0.82,0,1.55,0.15,2.19,0.38c0.12,0.03,0.22,0.08,0.33,0.12c0.26,0.1,0.5,0.22,0.73,0.34 c0.17,0.09,0.32,0.18,0.47,0.27c0.1,0.06,0.19,0.13,0.28,0.19c0.03,0.02,0.06,0.04,0.09,0.06c0.06,0.04,0.11,0.08,0.16,0.12 c0.01,0,0.02,0,0.02,0.02h0.01c0.06,0.04,0.12,0.08,0.17,0.14l0.18,0.15h0.01c0.09,0.07,0.17,0.15,0.25,0.22l0.41,0.41 c0.06,0.07,0.12,0.13,0.17,0.19l0.02,0.02C17.83,18,18,18.27,18,18.27z" />
                <path fill="#ffb74d" d="M12,13c-2.206,0-4-1.794-4-4s1.794-4,4-4s4,1.794,4,4S14.206,13,12,13L12,13z" />
                <path fill="#ffb74d" d="M27,36c-2.206,0-4-1.794-4-4s1.794-4,4-4s4,1.794,4,4S29.206,36,27,36" />
                <path fill="#ffb74d" d="M38,36c-2.206,0-4-1.794-4-4s1.794-4,4-4s4,1.794,4,4S40.206,36,38,36" />
                <path fill="#2196f3" d="M26.34,20.94L21.7,24.6c-0.34,0.27-0.75,0.4-1.14,0.4c-0.48,0-0.94-0.18-1.3-0.54l-1.6-1.58 l-0.19-0.19l-3.28-3.26l-0.01-0.01l-0.34-0.35c-0.71-0.7-0.71-1.85,0.01-2.55c0.51-0.5,1.26-0.65,1.89-0.41 c0.1,0.03,0.21,0.08,0.3,0.14c0.02,0.01,0.04,0.02,0.06,0.03c0.01,0,0.02,0,0.02,0.02h0.01c0.06,0.04,0.12,0.08,0.17,0.14 c0.04,0.02,0.08,0.05,0.12,0.09l0.06,0.06h0.01l0.42,0.42l0.41,0.41l3.38,3.36l3.36-2.65c0.78-0.63,1.93-0.5,2.56,0.28 C27.25,19.18,27.12,20.31,26.34,20.94z" />
                <path fill="#bdbdbd" d="M34,42.286c0,0-1.75-4.286-7-4.286s-7,4.286-7,4.286V44h14V42.286z" />
                <path fill="#1565c0" d="M16.04,16.25l-0.02,0.05l-1.83,3.13l-0.01,0.02l-1.95,3.35l-4.34-6.51H7.9 c0.27-0.19,0.57-0.37,0.87-0.52c0.24-0.12,0.49-0.23,0.75-0.33c0.06-0.02,0.12-0.04,0.19-0.06l2.41,3.6l2.09-3.6 c0.12,0.03,0.22,0.08,0.33,0.12c0.26,0.1,0.5,0.22,0.73,0.34c0.17,0.09,0.32,0.18,0.47,0.27C15.84,16.14,15.95,16.19,16.04,16.25z" />
                <ellipse cx="12.311" cy="22.617" fill="#ffba57" rx="1.522" ry="1.538" />
                <polygon fill="#ffba57" points="14.464,24.792 12.312,22.615 13.389,21.529 15.54,23.704" />
              </svg>
            </div>
            <strong>حساب مربی</strong>
            <ul v-if="select_type.includes('coach')"  class="w-[200px] mx-auto mt-3">
              <li class="flex items-center mb-2">
                <div class="w-[30px]">
                  <svg v-if="!user.profile_form.gender" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="18" height="18">
                    <path fill="#f44336" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z" />
                    <path fill="#fff" d="M29.656,15.516l2.828,2.828l-14.14,14.14l-2.828-2.828L29.656,15.516z" />
                    <path fill="#fff" d="M32.484,29.656l-2.828,2.828l-14.14-14.14l2.828-2.828L32.484,29.656z" />
                  </svg>
                  <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="18" height="18">
                    <path fill="#4caf50" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z" />
                    <path fill="#ccff90" d="M34.602,14.602L21,28.199l-5.602-5.598l-2.797,2.797L21,33.801l16.398-16.402L34.602,14.602z" />
                  </svg>
                </div>
                <span class="text-xs sm:text-sm"> انتخاب جنسیت</span>
              </li>

              <li class="flex items-center mb-2">
                <div class="w-[30px]">
                  <svg v-if="!this.user.CoachProfile.docs.length" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="18" height="18">
                    <path fill="#f44336" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z" />
                    <path fill="#fff" d="M29.656,15.516l2.828,2.828l-14.14,14.14l-2.828-2.828L29.656,15.516z" />
                    <path fill="#fff" d="M32.484,29.656l-2.828,2.828l-14.14-14.14l2.828-2.828L32.484,29.656z" />
                  </svg>
                  <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="18" height="18">
                    <path fill="#4caf50" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z" />
                    <path fill="#ccff90" d="M34.602,14.602L21,28.199l-5.602-5.598l-2.797,2.797L21,33.801l16.398-16.402L34.602,14.602z" />
                  </svg>

                </div>
                <span class="text-xs sm:text-sm">  بارگذاری مدارک</span>
              </li>
            </ul>


          </div>
        </div>
        <div class="col-md-3 col-xs-6  mb-2 sn:mb-0">
          <div  @click="SelectedType('ref')" :class="` border-gray-400 bg-gray-800 shadow-xl p-5  ${select_type.includes('ref') ? 'bg-gray-800' : ''} text-center hover:bg-gray-800 relative hover:border-gray-700 cursor-pointer transition text-white rounded-lg border-gray-600  focus:bg-gray-700`">
            <div v-if="select_type.includes('ref')" class="bg-green-500 absolute rounded top-2 left-2">
              <span class="text-sm px-2 py-1">انتخاب شده</span>
            </div>
            <div class="icon-p flex mb-3 justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 47.999" width="62" height="62">
                <path fill="#ff5722" d="M29,28c0,1.656-1.343,3-3,3H13c-1.657,0-3-1.344-3-3V8c0-1.656,1.343-3,3-3h13c1.657,0,3,1.344,3,3V28z" />
                <path fill="#ffb74d" d="M37.844,31.324l-3.795-8.65c-0.471-1.314-1.158-2.445-2.445-2.963c-0.496-0.185-1.404-0.576-2.604-1.021V28c0,1.656-1.343,3-3,3h-5.003L19,22.021c-0.313-1.654-1.094-3.246-3.688-2.996c-0.97,0.099-2.595,1.029-2.22,3.435L15,35.008C16,41,20.343,43,22,43h11l4.586-9.617C38.018,32.813,38.111,31.922,37.844,31.324z" />
                <path fill="#e69329" d="M31,31l-1-5c-0.161-0.708-0.491-1.33-1-1.685V28c0,1.656-1.343,3-3,3h-5.005l0.224,1c0.656,2.5,2.563,1.949,2.563,1.949L29,33C30.344,32.75,31.188,32.125,31,31z" />
                <path fill="#ffcdd2" d="M17.938,21.708c0.158,1.094-3.802,1.663-3.959,0.571c-0.158-1.094,0.602-2.107,1.694-2.266C16.768,19.857,17.781,20.615,17.938,21.708z" />
              </svg>
            </div>
            <strong>حساب داور</strong>
            <ul v-if="select_type.includes('ref')"  class="w-[200px] mx-auto mt-3">
              <li class="flex items-center mb-2">
                <div class="w-[30px]">
                  <svg v-if="!user.RefereeProfile.docs.length" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="18" height="18">
                    <path fill="#f44336" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z" />
                    <path fill="#fff" d="M29.656,15.516l2.828,2.828l-14.14,14.14l-2.828-2.828L29.656,15.516z" />
                    <path fill="#fff" d="M32.484,29.656l-2.828,2.828l-14.14-14.14l2.828-2.828L32.484,29.656z" />
                  </svg>
                  <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="18" height="18">
                    <path fill="#4caf50" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z" />
                    <path fill="#ccff90" d="M34.602,14.602L21,28.199l-5.602-5.598l-2.797,2.797L21,33.801l16.398-16.402L34.602,14.602z" />
                  </svg>

                </div>
                <span class="text-xs sm:text-sm">  بارگذاری مدارک</span>
              </li>
            </ul>

          </div>
        </div>
        <div class="col-md-3 col-xs-6 mb-2 sn:mb-0" >
          <div  @click="SelectedType('more') " :class="` border-gray-400 bg-gray-800 shadow-xl p-5  ${select_type.includes('more') ||  select_type.includes('ref') || select_type.includes('user') ||  select_type.includes('coach') ? 'bg-gray-800' : ''}text-center hover:bg-gray-800 relative hover:border-gray-700 cursor-pointer transition text-white rounded-lg border-gray-600  focus:bg-gray-700`">
            <div v-if="select_type.includes('more') ||  select_type.includes('ref') || select_type.includes('user') ||  select_type.includes('coach')" class="bg-green-500 absolute rounded top-2 left-2">
              <span class="text-sm px-2 py-1">انتخاب شده</span>
            </div>
            <div class="icon-p flex mb-3 justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="62" height="62">
                <path fill="#FFB74D" d="M33,14c0,5-4,9-9,9c-5,0-9-4-9-9s4-9,9-9C29,5,33,9,33,14" />
                <path fill="#607D8B" d="M42,36.1c0,0-5-10.1-18-10.1C11,26,6,36.1,6,36.1V42h36V36.1z" />
              </svg>
            </div>
            <strong> سایر</strong>
            <ul v-if="select_type.includes('more')"   class="w-[200px] mx-auto mt-3">

            </ul>

          </div>
        </div>
      </div>

    </div>


    <div class="row "  v-if="select_type.includes('more') ||  select_type.includes('ref') || select_type.includes('user') ||  select_type.includes('coach')" >

      <div class="col-md-12" >
        <div  class="w-full  mx-auto p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700">
          <div :class="{'opacity-20' : user.profile_form.loading || user.user_profile.loading}" class="flex justify-between mb-5">
            <br>
            <h5 class="mb-3 text-right text-base font-semibold text-gray-900 md:text-xl dark:text-white">
              اطلاعات پروفایل کاربری
            </h5>

          </div>

          <div  :class="{'opacity-20' : user.profile_form.loading || user.user_profile.loading}" class="grid gap-6 mb-6 md:grid-cols-1">
            <div class="row " >
              <div class="col-md-12  mb-3">
                <div class="  items-center justify-start">
                  <img class="w-20 h-20 rounded-full mr-10" :src="typeof user.profile_form.profile_image === 'string' ? (user.profile_form.profile_image ? user.profile_form.profile_image : '/img/no-pic.png') : ConvertImage(user.profile_form.profile_image)" alt="user photo">

                  <label for="upload_profile" type="button" class=" mt-5 text-white relative inline-block bg-green-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2  dark:bg-blue-600 dark:hover:bg-green-500 focus:outline-none dark:focus:ring-blue-800">
                    بارگذاری تصویر 3*4
                    <input id="upload_profile" v-on:change="UploadProfile($event)" class="opacity-0 absolute" type="file">
                  </label>

                </div>
              </div>
              <div class="col-md-6">
                <div class="row">

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
                          format="YYYY-MM-DD"
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
                        <option v-for="item in user.city" :key="item.id" :value="item.id">{{ item.name }}</option>
                      </select>
                    </div>
                  </div>

                  <div class="col-md-12">
                    <div class="col-md-6">
                      <UploadFile :multiple="false" :last="user.profile_form.national_card" @update_image="ChangeNational_card" id_input="inp-4" label="تصویر کارت ملی *"></UploadFile>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6 ">
                <div class="row">
                  <div class="col-md-12  mb-3" v-if="select_type.includes('user')">
                    <div>
                      <label for="sport_club" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">باشگاه ورزشی</label>
                      <select id="sport_club"  v-model="user.AthleteProfile.sport_club"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="">انتخاب کنید</option>
                        <option  :value="user.sport_club.id">{{ user.sport_club.name }}</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-md-12  mb-3" v-if="select_type.includes('user')">
                    <div class="relative">
                      <label  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">مربی</label>
                      <Multiselect
                          v-model="coachSelect"
                          :options="user.coach.map(item => ({...item,value: item.first_name+' '+item.last_name}))"
                          mode="tags"
                          label="value"
                          :searchable="true"
                          :object="true"
                          placeholder="شما میتوانید 1 یا چند مربی انتخاب نمایید"
                      >

                        <template v-slot:tag="{ option, handleTagRemove, disabled }">
                          <div
                              class="multiselect-tag is-user"
                              :class="{
          'is-disabled': disabled
        }"
                          >
                            <img class="w-[16px] h-[16px] rounded-lg ml-2" :src="(option.profile_image ? option.profile_image : '/img/no-img.png')">
                            {{ option.first_name }}   {{ option.last_name }}
                            <span
                                v-if="!disabled"
                                class="multiselect-tag-remove"
                                @mousedown.prevent="handleTagRemove(option, $event)"
                            >
          <span class="multiselect-tag-remove-icon"></span>
        </span>
                          </div>
                        </template>

                      </Multiselect>
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
                        <UploadFile :multiple="false" :last="user.profile_form.insurance_card" @update_image="Changeinsurance_card" id_input="inp-2"  label="کارت بیمه *"></UploadFile>
                      </div>

                      <div class="col-md-6" v-if="this.select_type.length">
                        <UploadFile :multiple="false" :last="user.profile_form.federation_card" @update_image="Changefederation_card" id_input="inp-1" label="کارت فدراسیون *"></UploadFile>
                      </div>

                    </div>
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
      <div class="col-md-6 mt-4 " v-if="select_type.includes('ref')" :class="{'opacity-20' : user.profile_form.loading || user.user_profile.loading}">
        <div  class="w-full  mx-auto p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700">
          <div class="flex justify-between mb-5">
            <h5 class="mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white">
              تکمیل مدارک به عنوان داور
            </h5>
            <button type="button" @click="bt1 = !bt1" class="text-white bg-green-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-green-500 focus:outline-none dark:focus:ring-blue-800">

              {{(bt1 ? 'انصراف' : 'تکمیل مدارک') }}
            </button>


          </div>



          <div v-if="bt1">

            <div class="relative overflow-x-auto  ">
              <label class="text-white mb-3 block text-sm">مدارک بارگذاری شده :</label>
              <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-6 py-3 text-center">
                    سطح
                  </th>
                  <th scope="col" class="px-6 py-3 text-center">
                    رشته
                  </th>
                  <th scope="col" class="px-6 py-3 text-center">
                    پیوست
                  </th>

                </tr>
                </thead>
                <tbody>
                <tr v-for="item in user.RefereeProfile.docs"  :key="item.id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th scope="row" class="px-6 text-center py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {{ item.level }}
                  </th>
                  <td class="px-6 text-center py-4">
                    {{item.field.name}}
                  </td>
                  <td class="px-6 text-center py-4">
                    <a target="_blank" class="text-blue-400" :href="item.file">
                      جهت مشاهده کلیک کنید
                    </a>
                  </td>

                </tr>
                </tbody>
              </table>



            </div>


          </div>
        </div>



      </div>
      <div class="col-md-6 mt-4 " v-if="select_type.includes('coach')"  :class="{'opacity-20' : user.profile_form.loading || user.user_profile.loading}">
        <div  class="w-full  mx-auto p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700">
          <div class="flex justify-between mb-5">
            <h5 class="mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white">
              تکمیل مدارک به عنوان مربی
            </h5>

            <button type="button" @click="bt2 = !bt2" class="text-white bg-green-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-green-500 focus:outline-none dark:focus:ring-blue-800">

              {{(bt2 ? 'انصراف' : 'تکمیل مدارک') }}

            </button>

          </div>

          <div class="grid gap-6 md:grid-cols-1" v-if="bt2">



            <div class="relative overflow-x-auto  ">
              <label class="text-white mb-3 block text-sm">مدارک بارگذاری شده :</label>
              <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-6 py-3 text-center">
                    سطح
                  </th>
                  <th scope="col" class="px-6 py-3 text-center">
                    رشته
                  </th>
                  <th scope="col" class="px-6 py-3 text-center">
                    پیوست
                  </th>

                </tr>
                </thead>
                <tbody>
                <tr v-for="item in user.CoachProfile.docs"  :key="item.id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th scope="row" class="px-6 text-center py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {{ item.level }}
                  </th>
                  <td class="px-6 text-center py-4">
                    {{item.field.name}}
                  </td>
                  <td class="px-6 text-center py-4">
                    <a target="_blank" class="text-blue-400" :href="item.file">
                      جهت مشاهده کلیک کنید
                    </a>
                  </td>

                </tr>
                </tbody>
              </table>



            </div>


          </div>


        </div>

      </div>
    </div>
  </nuxt-layout>
</template>
<script>
import {useAuthStore} from "~/store/auth";
import UploadFile from "~/components/UploadFile";
import Multiselect from '@vueform/multiselect'
import '@vueform/multiselect/themes/default.css'
export default {
  components: {UploadFile,Multiselect},
  data: () => ({
    bt1: false,
    bt2: false,
    select_type: [],
    coachSelect: [],
    tagVisible : false,
    levels: [
      { "value": "1", "display_name": "سطح ۱" }
      , { "value": "2", "display_name": "سطح ۲" }
      , { "value": "3", "display_name": "سطح ۳" }
      , { "value": "4", "display_name": "ملی" }
    ],
    level2: [
      { "value": "1", "display_name": "سطح ۱" },
      { "value": "2", "display_name": "سطح ۲" },
      { "value": "3", "display_name": "سطح ۳" },
      { "value": "4", "display_name": "بین المللی" }
    ],

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
    "coachSelect" : {
      async handler(){
        this.user.AthleteProfile.coach = []
        for (let i = 0; i < this.coachSelect.length; i++) {
          this.user.AthleteProfile.coach.push(this.coachSelect[i].id)
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
    const route = useRoute()

    this.id = route.params.id

    const [coach_profile,Referee,Athlete,profile,city,coach,filed,sport_club] = await Promise.all([
      await this.user.getCoachProfile(),
      await this.user.getRefereeProfile(),
      await this.user.getAthleteProfile(),
      await this.user.getCity(),
      await this.user.getCoach(),
      await this.user.getSportFiled(),
      await this.user.getSportClub(),
      await this.user.getProfile(this.id),

    ]);
    await this.user.GetSportFiledSelect()

    if(this.user.CoachProfile.docs.length){
      this.select_type.push('coach')
      this.bt2 = true
    }
    if(this.user.RefereeProfile.docs.length){
      this.select_type.push('ref')
      this.bt1 = true
    }
    if(this.user.AthleteProfile.coach.length){
      this.select_type.push('user')
      this.coachSelect = this.user.coach.filter((item) => this.user.AthleteProfile.coach.includes(item.id))

    }
  },
  methods:{
    ChangeUpCoach(e){
      if(e.target.files.length){
        this.user.coachProfileForm.docs = e.target.files[0]
      }else{
        this.user.coachProfileForm.docs = null
      }
    },
    ChangeUpRef(e){
      if(e.target.files.length){
        this.user.refProfileForm.docs = e.target.files[0]
      }else{
        this.user.refProfileForm.docs = null
      }
    },
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
        this.user.CoachProfile.docs = file
      }else{
        this.user.CoachProfile.docs = null
      }

    },
    Changereferee_docs(value){
      let file = (value.length ? value : false)
      if(file){
        this.user.RefereeProfile.docs = file
      }else{
        this.user.RefereeProfile.docs = null
      }

    },
    ChangeNational_card(value){
      let file = (value.length ? value[0] : false)
      if(file){
        this.user.profile_form.national_card = file
      }else{
        this.user.profile_form.national_card = null
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
    SelectedType(type){
      if(this.select_type.includes(type)){
        let findIndex = this.select_type.findIndex(e => e == type)
        if(findIndex !== -1){
          this.select_type.splice(findIndex,1)
          return;
        }
      }

      this.select_type.push(type)
      return;
    },

  }
}
</script>