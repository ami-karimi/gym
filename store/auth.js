import useApiFetch from "~/composables/useApiFetch";
import { defineStore } from 'pinia'
import { useToast } from "vue-toastification";


export  const useAuthStore = defineStore('auth', {
    state: () => ({
        login: false,
        user_token: "",
        token_type: "",
        form: {
            loading: true,
            phone_number: "",
            sms_token: "",
            step: 1,
        },
        user_profile: {  loading: true,},
        city: [],
        coach: [],
        sports_field: {  loading: true,},
        sport_club: {  loading: true,},
        profile_form: {degree: "",gender: "",city: "",coach: "",sport_club: "",parent: "",field: ""},
        sports_field_children: [],
        sport_club_form: {city: "",loading: true},
        association_form: {city: "",loading: true},
    }),
    getters: {
        logined: (state) => state.login,
        getToken: (state) => state.user_token,
        getType: (state) => state.token_type,
    },
    actions: {
        CheckToken() {
            if (this.user_token) {
                return this.user_token
            }
            let cookie = useCookie('AUTH_TOKEN');
            if (cookie.value) {
                let type = useCookie('AUTH_TOKEN_TYPE', {})
                if (type.value) {
                    this.token_type = type.value
                    this.user_token = cookie.value
                    return cookie.value;
                }
            }
            return false;

        },
        SetToken(token = '', user_type = '') {
            let cookie = useCookie('AUTH_TOKEN', {})
            cookie.value = token;
            let type = useCookie('AUTH_TOKEN_TYPE', {})
            type.value = user_type
            this.user_token = token
        },
        async SendLogin() {
            var
                persianNumbers = [/۰/g, /۱/g, /۲/g, /۳/g, /۴/g, /۵/g, /۶/g, /۷/g, /۸/g, /۹/g],
                arabicNumbers  = [/٠/g, /١/g, /٢/g, /٣/g, /٤/g, /٥/g, /٦/g, /٧/g, /٨/g, /٩/g],
                fixNumbers = function (str)
                {
                    if(typeof str === 'string')
                    {
                        for(var i=0; i<10; i++)
                        {
                            str = str.replace(persianNumbers[i], i).replace(arabicNumbers[i], i);
                        }
                    }
                    return str;
                };

            const toast = useToast()
            if (!this.form.phone_number) {
                toast.error('لطفا شماره تماس خود را وارد نمایید')
                return;
            }

            this.form.phone_number = fixNumbers(this.form.phone_number)
            this.form.sms_token = fixNumbers(this.form.sms_token)
            this.form.loading = true
            const router = useRouter()

            let url = (this.form.sms_token ? '/user/sso/verify/' : '/user/sso/send_sms/')
            try {
                const data = await useApiFetch(url, {
                    method: "POST",
                    body: this.form,
                })

                if(data.token) {
                    this.SetToken(data.token, 'user')
                    toast.success('با موفقیت وارد حساب کاربری خود شدید!')
                    router.push('/panel/edit_profile')
                }else{
                    this.form.step = 2
                    toast.success('کد فعال سازی برای شما ارسال شد لطفا در کادر (کد تایید) وارد نمایید!')

                }

                this.form.loading = false
            } catch (e) {
                toast.error('خطا!')
                this.form.loading = false
            }
        },
        async getProfile() {
            const toast = useToast()
            this.user_profile.loading = true
            const router = useRouter()

            let url =  `/user/profile/`
            try {
                const data = await useApiFetch(url, {
                    method: "GET",
                })

                this.profile_form = data
                this.user_profile.loading = false
            } catch (e) {
                toast.error('خطا!')
                this.user_profile.loading = false
            }
        },
        async getCity() {
            const toast = useToast()
            this.city.loading = true
            const router = useRouter()

            let url =  `/user/city`
            try {
                const data = await useApiFetch(url, {
                    method: "GET",
                })
                this.city = data

                this.city.loading = false
            } catch (e) {
                toast.error('خطا!')
                this.city.loading = false
            }
        },
        async getCoach() {
            const toast = useToast()
            this.coach.loading = true
            const router = useRouter()

            let url =  `/user/coachs`
            try {
                const data = await useApiFetch(url, {
                    method: "GET",
                })

                this.coach = data
                this.coach.loading = false
            } catch (e) {
                toast.error('خطا!')
                this.coach.loading = false
            }
        },
        async getSportFiled(parent = false) {
            const toast = useToast()
            this.sports_field.loading = true
            const router = useRouter()

            let url =  (parent ?  `/user/sports_field?id=${parent}` : `/user/sports_field`)
            try {
                const data = await useApiFetch(url, {
                    method: "GET",
                })

                if(!parent) {
                    this.sports_field = data
                }else{
                    this.sports_field_children = data
                }
                this.sports_field.loading = false
            } catch (e) {
                toast.error('خطا!')
                this.sports_field.loading = false
            }
        },
        async getSportClub() {
            const toast = useToast()
            this.sport_club.loading = true
            const router = useRouter()

            let url =  `/user/sport_club/`
            try {
                const data = await useApiFetch(url, {
                    method: "GET",
                })

                this.sport_club = (data.length ? data[data.length -1 ] : [])
                this.sport_club_form =  this.sport_club
                this.sports_field.loading = false
            } catch (e) {
                toast.error('خطا!')
                this.sport_club.loading = false
            }
        },
        async getAssociation() {
            const toast = useToast()
            this.association_form.loading = true
            const router = useRouter()

            let url =  `/user/association/`
            try {
                const data = await useApiFetch(url, {
                    method: "GET",
                })

                this.association_form = (data.length ? data[data.length - 1] : {city: ''} )
                this.association_form.loading = false
            } catch (e) {
                toast.error('خطا!')
                this.association_form.loading = false
            }
        },

        async SaveProfile(){
            let formData  = new FormData()
            const toast = useToast()

            if(!this.profile_form.first_name){
                toast.error('لطفا نام خود را وارد نمایید!')
                return;
            }
            formData.append('first_name',this.profile_form.first_name)
            if(!this.profile_form.last_name){
                toast.error('لطفا نام خانوادگی خود را وارد نمایید!')
                return;
            }
            formData.append('last_name',this.profile_form.last_name)
            if(!this.profile_form.email){
                toast.error('لطفا ایمیل  خود را وارد نمایید!')
                return;
            }
            formData.append('email',this.profile_form.email)
            if(!this.profile_form.telephone_number){
                toast.error('لطفا تلفن ثابت  خود را وارد نمایید!')
                return;
            }
            formData.append('telephone_number',this.profile_form.telephone_number)
            if(!this.profile_form.degree){
                toast.error('لطفا تحصیلات خود را وارد نمایید!')
                return;
            }
            formData.append('degree',this.profile_form.degree)
            if(!this.profile_form.gender){
                toast.error('لطفا جنسیت خود را وارد نمایید!')
                return;
            }
            formData.append('gender',this.profile_form.gender)
            if(!this.profile_form.national_code){
                toast.error('لطفا کد ملی خود را وارد نمایید!')
                return;
            }
            formData.append('national_code',this.profile_form.national_code)
            if(!this.profile_form.birth_date){
                toast.error('لطفاتاریخ تولد خود را وارد نمایید!')
                return;
            }
            formData.append('birth_date',this.profile_form.birth_date)
            if(!this.profile_form.city){
                toast.error('لطفا شهر خود را انتخاب نمایید!')
                return;
            }
            formData.append('city', this.profile_form.city)

            if(this.profile_form.sport_club) {
               formData.append('sport_club', this.profile_form.sport_club)
           }
            if(!this.profile_form.field){
                toast.error('لطفا رشته فرعی را انتخاب نمایید!')
                return;
            }
            formData.append('field',this.profile_form.field)
            if(!this.profile_form.address){
                toast.error('لطفا آدرس را وارد نمایید!')
                return;
            }
            formData.append('address',this.profile_form.address)
            formData.append('coach',this.profile_form.coach)
            if(!this.profile_form.father_name){
                toast.error('لطفا نام پدر خود را انتخاب نمایید!')
                return;
            }

            if (this.profile_form.profile_image instanceof Object) {
                formData.append('profile_image', this.profile_form.profile_image, this.profile_form.profile_image.name)
            }

            formData.append('father_name',this.profile_form.father_name)
            if(!this.profile_form.federation_card){
                toast.error('لطفا کارت فدراسیون خود را بارگذاری نمایید!')
                return;
            }
            if (this.profile_form.federation_card instanceof Object) {
                    formData.append('federation_card', this.profile_form.federation_card, this.profile_form.federation_card.name)

            }
            if(!this.profile_form.insurance_card){
                toast.error('لطفا کارت بیمه خود را بارگذاری نمایید!')
                return;
            }
            if (this.profile_form.insurance_card instanceof Object) {
                    formData.append('insurance_card', this.profile_form.insurance_card, this.profile_form.insurance_card.name)

            }

            if (this.profile_form.coaching_docs instanceof Object) {
                if(this.profile_form.coaching_docs.length) {
                    for (let i = 0; i < this.profile_form.coaching_docs.length; i++) {
                        if(this.profile_form.coaching_docs[i].name) {
                            formData.append('coaching_docs', this.profile_form.coaching_docs[i], this.profile_form.coaching_docs[i].name)
                        }
                    }
                }
            }

            if (this.profile_form.referee_docs instanceof Object) {
                if(this.profile_form.referee_docs.length) {
                    for (let is = 0; is < this.profile_form.referee_docs.length; is++) {
                        if( this.profile_form.referee_docs[is].name) {
                            formData.append('referee_docs', this.profile_form.referee_docs[is], this.profile_form.referee_docs[is].name)
                        }
                    }
                }
            }

            this.profile_form.loading = true

            try {
                const data = await useApiFetch('/user/profile/', {
                    method: "PUT",
                    body: formData,
                })

                toast.success('اطلاعات شما با موفقیت ذخیره شد!')


                this.profile_form.loading = false
            } catch (e) {
                toast.error('خطا!')
                this.profile_form.loading = false
            }



        },
        async SaveSportClub(){
            let formData  = new FormData()
            const toast = useToast()
            if(!this.sport_club_form.name){
                return  toast.error('لطفا نام را وارد نمایید!')
            }
            formData.append('name',this.sport_club_form.name)

            if(!this.sport_club_form.city){
                return  toast.error('لطفا شهر را انتخاب نمایید!')
            }
            formData.append('city',this.sport_club_form.city)

           if(!this.sport_club_form.established_year){
                return  toast.error('لطفا تاریخ تاسیس را انتخاب نمایید!')
            }
            formData.append('established_year',this.sport_club_form.established_year)

           if(!this.sport_club_form.registration_number){
                return  toast.error('لطفا شماره ثبت را وارد نمایید!')
            }
            formData.append('registration_number',this.sport_club_form.registration_number)

           if(!this.sport_club_form.telephone_number){
                return  toast.error('لطفا شماره تلفن ثابت را وارد نمایید!')
            }
            formData.append('telephone_number',this.sport_club_form.telephone_number)
            if(!this.sport_club_form.postal_code){
                return  toast.error('لطفا   کد پستی را وارد نمایید!')
            }
            formData.append('postal_code',this.sport_club_form.postal_code)
           if(!this.sport_club_form.license_expiration_date){
                return  toast.error('لطفا  تاریخ اعتبار مجوز را انتخاب نمایید!')
            }
            formData.append('license_expiration_date',this.sport_club_form.license_expiration_date)
          if(!this.sport_club_form.address){
                return  toast.error('لطفا   آدرس را وارد نمایید!')
            }
            formData.append('address',this.sport_club_form.address)

            if(!this.sport_club_form.license){
                toast.error('لطفا مجاز باشگاه را بارگذاری نمایید!')
                return;
            }
            if (this.sport_club_form.license instanceof Object) {
                formData.append('license', this.sport_club_form.license, this.sport_club_form.license.name)
            }
            this.sport_club_form.loading = true
            try {
                const data = await useApiFetch('/user/sport_club/', {
                    method: "POST",
                    body: formData,
                })

                toast.success('اطلاعات شما با موفقیت ذخیره شد!')


                this.sport_club_form.loading = false
            } catch (e) {
                toast.error('خطا!')
                this.sport_club_form.loading = false
            }


        },
        async SaveAssociation(){
            if(this.association_form.loading){
                return;
            }
            const toast = useToast()

            if(!this.association_form.city){
               return toast.error('لطفا شهر اتحادیه را انتخاب نمایید!')
            }
            if(!this.association_form.address){
               return toast.error('لطفا آدرس اتحادیه را انتخاب نمایید!')
            }
            this.association_form.loading = true
            try {
                const data = await useApiFetch(`/user/association/`, {
                    method: "POST",
                    body: this.association_form
                })
                 toast.success('اطلاعات اتحادیه با موفقیت بروزرسانی شد!')

                this.association_form.loading = false

            } catch (e) {
                toast.error('خطا!')
                this.association_form.loading = false

            }
        }
    }
})
