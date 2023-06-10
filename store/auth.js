import useApiFetch from "~/composables/useApiFetch";
import { defineStore } from 'pinia'
import { useToast } from "vue-toastification";


export  const useAuthStore = defineStore('auth', {
    state: () => ({
        login: false,
        user_token: "",
        token_type: "",
        form: {
            loading: false,
            phone_number: "",
            sms_token: "",
            step: 1,
        },
        user_profile: {  loading: true,},
        city: [],
        coach: [],
        sports_field: {  loading: true,},
        sport_club: {  loading: true,},
        sport_club_admin: {  loading: true,},
        profile_form: {degree: "",gender: "",city: "",coach: "",sport_club: "",parent: "",field: ""},
        sports_field_children: [],
        sport_club_form: {city: "",loading: true},
        association_form: {city: "",loading: true},
        associationAthletes: [],
        SportClubAthletes: [],
        CoachProfile: {docs: []},
        RefereeProfile: {docs: []},
        AthleteProfile: {coach: []},
        AthleteUsers: {},
        AthleteMemberForm: {},
        SuperassociationList: [],
        filterUser: {},
        userList: [],
        pro_id: false,
        admin_association_form: {
            city: "",
        },
        sport_field: [],
        sub_sport_field: [],
        sub_sport_field_form: {
            parent: "",
        },
        coachProfileForm: {level: "",p_field: "",field: "",docs: ""},
        refProfileForm: {level: "",p_field: "",field: "",docs: ""},
        subTreeData: [],
    }),
    getters: {
        logined: (state) => state.login,
        getToken: (state) => state.user_token,
        getType: (state) => state.token_type,
    },
    actions: {
        GetSportFiledSelect(map = []){

            let re = [];
            let data = (map.length ? map : this.sports_field)
            for (let i = 0; i < data.length ; i++) {

                let obj = {id: data[i].id,
                    text: (data[i].sub_fields ? `${data[i].name}:` : data[i].name) }
                if(data[i].sub_fields){
                    obj.children = this.GetSportFiledSelect(data[i].sub_fields)
                }
                re.push(obj)
            }


            if(!map.length) {
                this.subTreeData = re
            }
            return re;
        },
        async SaveSubSportField(){
            const { $error_log } = useNuxtApp()

            if(this.sub_sport_field_form.loading){
                return;
            }
            const toast = useToast()

            if(!this.sub_sport_field_form.parent){
                return toast.error('لطفا رشته اصلی را انتخاب نمایید!')
            }

            if(!this.sub_sport_field_form.first_name && this.sub_sport_field_form.select_custom){
                return toast.error('لطفا نام صاحب سبک را وارد نمایید!')
            }
            if(!this.sub_sport_field_form.last_name && this.sub_sport_field_form.select_custom){
                return toast.error('لطفا  نام خانوادگی صاحب سبک را وارد نمایید!')
            }
            if(!this.sub_sport_field_form.national_code){
                return toast.error('لطفا کد ملی صاحب سبک را وارد نمایید!')
            }

            this.sub_sport_field_form.loading = true
            let url = (this.sub_sport_field_form.id ? `/user/sub_sports_field/${this.sub_sport_field_form.id}/` : `/user/sub_sports_field/` )
            try {
                const data = await useApiFetch(url, {
                    method: (this.sub_sport_field_form.id  ? "PUT" : "POST"),
                    body: this.sub_sport_field_form
                })
                if(this.sub_sport_field_form.id){
                    toast.success('سبک ورزرشی با موفقیت ویرایش شد!')
                }else{
                    toast.success('سبک ورزشی با موفقیت ایجاد شد!')

                }
                await this.getSportField()
                this.sub_sport_field_form.loading = false

            } catch (e) {
                this.sub_sport_field_form.loading = false

                if(e.response._data){
                    toast.error($error_log(e.response._data))
                }

            }
        },
        async getSportField() {
            const { $error_log } = useNuxtApp()

            const toast = useToast()
            this.sport_field.loading = true
            let url_m = `/user/sports_field`

            try {
                const data = await useApiFetch(url_m, {
                    method: "GET",
                })
                this.sport_field.loading = false

                this.sport_field = data
            } catch (e) {
                if(e.response._data){
                    toast.error($error_log(e.response._data))
                }
                this.sport_field.loading = false
            }
        },

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
            const { $error_log } = useNuxtApp()

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

            let url = (this.form.sms_token ? '/user/sso/verify-login/' : '/user/sso/sms/login/')
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
                if(e.response._data){
                    toast.error($error_log(e.response._data))
                }
                this.form.loading = false
            }
        },
        async AddAthlMember() {
            let url = (this.AthleteMemberForm.id ? `/user/association_profile/${this.AthleteMemberForm.id}/` : `/user/association_profile/`  )
           return await useApiFetch(url, {
                    method: (this.AthleteMemberForm.id ? "PATCH" : "POST"),
                    body: this.AthleteMemberForm,
                })

        },
        async SendRegister() {
            const { $error_log } = useNuxtApp()


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
         if (!this.form.national_code) {
                toast.error('لطفا کد ملی  خود را وارد نمایید')
                return;
            }

            this.form.phone_number = fixNumbers(this.form.phone_number)
            this.form.national_code = fixNumbers(this.form.national_code)
            this.form.sms_token = fixNumbers(this.form.sms_token)
            this.form.loading = true
            const router = useRouter()

            let url = (this.form.sms_token ? '/user/sso/verify-register/' : '/user/sso/sms/register/')
            try {
                const data = await useApiFetch(url, {
                    method: "POST",
                    body: this.form,
                })

                if(data.token) {
                    this.SetToken(data.token, 'user')
                    toast.success('با موفقیت وارد حساب کاربری شما ایجاد شد!')
                    router.push('/panel/edit_profile')
                }else{
                    this.form.step = 2
                    toast.success('کد فعال سازی برای شما ارسال شد لطفا در کادر (کد تایید) وارد نمایید!')

                }

                this.form.loading = false
            } catch (e) {
                if(e.response._data){
                    toast.error($error_log(e.response._data))
                }

                this.form.loading = false
            }
        },
        async getProfile(id = false) {
            this.pro_id = id
            const { $error_log } = useNuxtApp()

            const toast = useToast()
            this.user_profile.loading = true
            const router = useRouter()

            let url =  (id ? `/user/users/${id}` : `/user/profile/` )
            try {
                const data = await useApiFetch(url, {
                    method: "GET",
                })

                this.profile_form = data
                this.user_profile = data
                this.user_profile.loading = false
            } catch (e) {
                if(e.response._data){
                    toast.error($error_log(e.response._data))
                }
                this.user_profile.loading = false
            }
        },
        async getCoachProfile() {
            const { $error_log } = useNuxtApp()

            const toast = useToast()
            this.CoachProfile.loading = true

            let url =  `/user/coach-profile/`
            try {
                const data = await useApiFetch(url, {
                    method: "GET",
                })

                this.CoachProfile = (data.docs ? data : {docs: []})
                this.CoachProfile.loading = false
            } catch (e) {
                if(e.response._data){
                    toast.error($error_log(e.response._data))
                }
                this.CoachProfile.loading = false
            }
        },
        async SaveCoachProfile() {
            const { $error_log } = useNuxtApp()

            if(this.coachProfileForm.loading){
                return;
            }
            const toast = useToast()
            this.coachProfileForm.loading = true

            let form = new FormData()

            if(!this.coachProfileForm.docs){
                toast.error('لطفا مدارک مربی گری خود را وارد نمایید!')
                return;
            }

            if(!this.coachProfileForm.field){
                toast.error('لطفا رشته ورزش را انتخاب نمایید!')
                return;
            }
            form.append('field', this.coachProfileForm.field)

            if(!this.coachProfileForm.level){
                toast.error('لطفا سطح مدرک را انتخاب نمایید!')
                return;
            }
            if(!this.profile_form.gender){
                toast.error('لطفا جنسیت خود را از قسمت تکمیل پروفایل انتخاب نمایید!')
                return;
            }
            form.append('level', this.coachProfileForm.level)

            if (this.coachProfileForm.docs instanceof Object) {
                    form.append('docs', this.coachProfileForm.docs, this.coachProfileForm.docs.name)
            }


            let url_m = (this.pro_id ? `/user/users/coach-profile/${this.pro_id}/` : '/user/coach-profile/')

            try {
                const data = await useApiFetch(url_m, {
                    method: "PUT",
                    body: form
                })
                this.getCoachProfile()
                toast.success('مدرک مربی گری با موفقیت بارگذاری شد')

                this.coachProfileForm.loading = false
            } catch (e) {
                if(e.response._data){
                    toast.error($error_log(e.response._data))
                }
                this.coachProfileForm.loading = false
            }
        },
        async getRefereeProfile() {
            const { $error_log } = useNuxtApp()

            const toast = useToast()
            this.RefereeProfile.loading = true
            let url_m = (this.pro_id ? `/user/users/referee-profile/${this.pro_id}/` : '/user/referee-profile/')

            try {
                const data = await useApiFetch(url_m, {
                    method: "GET",
                })

                this.RefereeProfile = (data.docs ? data : {docs: []})
                this.RefereeProfile.loading = false
            } catch (e) {
                if(e.response._data){
                    toast.error($error_log(e.response._data))
                }
                this.RefereeProfile.loading = false
            }
        },
        async SaveRefereeProfile() {
            const { $error_log } = useNuxtApp()

            const toast = useToast()
            this.RefereeProfile.loading = true

            let form = new FormData()


            if(!this.refProfileForm.docs){
                toast.error('لطفا مدارک داوری خود را وارد نمایید!')
                return;
            }

            if(!this.refProfileForm.field){
                toast.error('لطفا رشته ورزش را انتخاب نمایید!')
                return;
            }
            form.append('field', this.refProfileForm.field)

            if(!this.refProfileForm.level){
                toast.error('لطفا سطح مدرک را انتخاب نمایید!')
                return;
            }
            form.append('level', this.refProfileForm.level)

            if (this.refProfileForm.docs instanceof Object) {
             form.append('docs', this.refProfileForm.docs, this.refProfileForm.docs.name)
            }

            let url =  `/user/referee-profile/`
            try {
                const data = await useApiFetch(url, {
                    method: "PUT",
                    body: form
                })

                this.refProfileForm.loading = false
                toast.success('مدرک داوری با موفقیت بارگذاری شد')

            } catch (e) {
                if(e.response._data){
                    toast.error($error_log(e.response._data))
                }
                this.refProfileForm.loading = false
            }
        },
        async SaveAthleteProfile(){
            const { $error_log } = useNuxtApp()

            const toast = useToast()
            this.AthleteProfile.loading = true
            let url = (this.pro_id ? `/user/users/athlete-profile/${this.pro_id}` : '/user/athlete-profile/' )
            try {
                const data = await useApiFetch(url, {
                    method: "PUT",
                    body: {coach: this.AthleteProfile.coach,sport_club: this.AthleteProfile.sport_club }
                })

            } catch (e) {
                if(e.response._data){
                    toast.error($error_log(e.response._data))
                }
                this.AthleteProfile.loading = false
            }
        },
        async getAthleteProfile() {
            const { $error_log } = useNuxtApp()

            const toast = useToast()
            this.AthleteProfile.loading = true

            let url =  `/user/athlete-profile/`
            try {
                const data = await useApiFetch(url, {
                    method: "GET",
                })

                this.AthleteProfile = data
                this.AthleteProfile.loading = false
            } catch (e) {
                if(e.response._data){
                    toast.error($error_log(e.response._data))
                }
                this.AthleteProfile.loading = false
            }
        },
        async getAthleteUsers(at_id) {
            const { $error_log } = useNuxtApp()

            const toast = useToast()
            this.AthleteUsers.loading = true

            let url =  `/user/association/${at_id}/members/`
            try {
                const data = await useApiFetch(url, {
                    method: "GET",
                })

                this.AthleteUsers = data
                this.AthleteUsers.loading = false
            } catch (e) {
                if(e.response._data){
                    toast.error($error_log(e.response._data))
                }
                this.AthleteUsers.loading = false
            }
        },
        async DeleteAthletePMember(id) {
            const { $error_log } = useNuxtApp()
            const toast = useToast()
            let url =  `/user/association_profile/${id}/delete_member/`
            try {
                const data = await useApiFetch(url, {
                    method: "DELETE",
                })
                toast.success('آیتم با موفقیت حذف شد!')
                await this.getAthleteUsers(this.association_form.id)
            } catch (e) {
                if(e.response._data){
                    toast.error($error_log(e.response._data))
                }
            }
        },
        async getCity() {
            const { $error_log } = useNuxtApp()

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
                if(e.response._data){
                    toast.error($error_log(e.response._data))
                }
                this.city.loading = false
            }
        },
        async getCoach(sex = 'MALE') {
            if(sex === null){
                return;
            }
            const { $error_log } = useNuxtApp()

            const toast = useToast()
            this.coach.loading = true
            const router = useRouter()

            let url =  `/user/coachs/?gender=${sex}`
            try {
                const data = await useApiFetch(url, {
                    method: "GET",
                })

                this.coach = data
                this.coach.loading = false
            } catch (e) {
                if(e.response._data){
                    toast.error($error_log(e.response._data))
                }
                this.coach.loading = false
            }
        },
        async getSportFiled(parent = false) {
            const { $error_log } = useNuxtApp()


            const toast = useToast()
            this.sports_field.loading = true
            const router = useRouter()

            let url =  (parent ?  `/user/sports_field?id=${parent}` : `/user/sports_field`)
            try {
                const data = await useApiFetch(url, {
                    method: "GET",
                })
                this.sports_field.loading = false

                if(!parent) {
                    this.sports_field = data
                }else{
                    this.sports_field_children = data
                }
            } catch (e) {
                if(e.response._data){
                    toast.error($error_log(e.response._data))
                }
                this.sports_field.loading = false
            }
        },
        async getSportClub() {
            const { $error_log } = useNuxtApp()

            const toast = useToast()
            this.sport_club.loading = true
            const router = useRouter()

            let url =  `/user/sport_club/`
            try {
                const data = await useApiFetch(url, {
                    method: "GET",
                })

                this.sport_club = (data.length ? data[data.length -1 ] : [])
                if(this.sport_club.id){
                    this.getSportClubAthletes(this.sport_club.id)
                }
                this.sport_club_form =  this.sport_club
                this.sports_field.loading = false
            } catch (e) {
                if(e.response._data){
                    toast.error($error_log(e.response._data))
                }
                this.sport_club.loading = false
            }
        },
        async getSportClubAdmin() {
            const { $error_log } = useNuxtApp()

            const toast = useToast()
            this.sport_club_admin.loading = true

            let url =  `/user/sport_club/`
            try {
                const data = await useApiFetch(url, {
                    method: "GET",
                })

                this.sport_club_admin = data.map(item => ({
                    ...item,
                    city_name: this.city.filter(e => e.id == item.city)
                }))
                this.sport_club_form.loading = false
            } catch (e) {
                if(e.response._data){
                    toast.error($error_log(e.response._data))
                }
                this.sport_club_admin.loading = false
            }
        },
        async getSportClubAthletes(id) {
            if(!id){
                return false;
            }
            const { $error_log } = useNuxtApp()

            const toast = useToast()
            this.SportClubAthletes.loading = true
            const router = useRouter()

            let url =  `/user/sport_club/${id}/athletes/`
            try {
                const data = await useApiFetch(url, {
                    method: "GET",
                })

                this.SportClubAthletes = data.athletes
                this.SportClubAthletes.loading = false
            } catch (e) {
                if(e.response._data){
                    toast.error($error_log(e.response._data))
                }
                this.SportClubAthletes.loading = false
            }
        },
        async getAssociation(id = false) {
            if(!this.user_profile.is_association_member && !id){
                return;
            }
            const { $error_log } = useNuxtApp()

            const toast = useToast()
            this.association_form.loading = true
            const router = useRouter()

            let url =  (!id ? `/user/association/` : `/user/association/${id}`)
            try {
                const data = await useApiFetch(url, {
                    method: "GET",
                })


                this.association_form = (!id ? (data.length ? data[data.length - 1] : {city: ''} ) : data)
                if(this.association_form.id) {

                    this.getAthleteUsers(this.association_form.id)

                    if(this.association_form.telephone_number){
                        this.association_form.telephone_number_check = true
                    }
                    if(this.association_form.fax_number){
                        this.association_form.fax_number_check = true
                    }
                    if(this.association_form.computer_count){
                        this.association_form.computer_count_check = true
                    }
                      

                    this.getAssociationAthletes(this.association_form.id)
                }
                this.association_form.loading = false
            } catch (e) {
                if(e.response._data){
                    toast.error($error_log(e.response._data))
                }
                this.association_form.loading = false
            }
        },
        async getAssociationAthletes(id = false){
            const { $error_log } = useNuxtApp()
            if(!id){
                return;
            }

            const toast = useToast()
            this.associationAthletes.loading = true
            const router = useRouter()

            let url =  `/user/association/${id}/athletes/`
            try {
                const data = await useApiFetch(url, {
                    method: "GET",
                })

                this.associationAthletes = data.athletes
                this.associationAthletes.loading = false
            } catch (e) {
                if(e.response._data){
                    toast.error($error_log(e.response._data))
                }
                this.associationAthletes.loading = false
            }

        },
        async getAllAssociation(){
            const { $error_log } = useNuxtApp()
            const toast = useToast()
            this.SuperassociationList.loading = true
            const router = useRouter()

            let url =  `/user/association/`
            try {
                const data = await useApiFetch(url, {
                    method: "GET",
                })

                this.SuperassociationList = data
                this.SuperassociationList.loading = false
            } catch (e) {
                if(e.response._data){
                    toast.error($error_log(e.response._data))
                }
                this.SuperassociationList.loading = false
            }

        },
        async SaveProfile(){
            const { $error_log } = useNuxtApp()

            let formData  = new FormData()
            const toast = useToast()

            if(!this.profile_form.first_name && !this.pro_id){
                toast.error('لطفا نام خود را وارد نمایید!')
                return;
            }
            formData.append('first_name',this.profile_form.first_name)
            if(!this.profile_form.last_name && !this.pro_id){
                toast.error('لطفا نام خانوادگی خود را وارد نمایید!')
                return;
            }
            formData.append('last_name',this.profile_form.last_name)
            if(!this.profile_form.email && !this.pro_id){
                toast.error('لطفا ایمیل  خود را وارد نمایید!')
                return;
            }
            formData.append('email',this.profile_form.email)
            if(!this.profile_form.telephone_number && !this.pro_id){
                toast.error('لطفا تلفن ثابت  خود را وارد نمایید!')
                return;
            }
            formData.append('telephone_number',this.profile_form.telephone_number)
            if(!this.profile_form.degree && !this.pro_id){
                toast.error('لطفا تحصیلات خود را وارد نمایید!')
                return;
            }
            formData.append('degree',this.profile_form.degree)
            if(!this.profile_form.gender && !this.pro_id){
                toast.error('لطفا جنسیت خود را وارد نمایید!')
                return;
            }
            formData.append('gender',this.profile_form.gender)
            if(!this.profile_form.national_code && !this.pro_id){
                toast.error('لطفا کد ملی خود را وارد نمایید!')
                return;
            }
            formData.append('national_code',this.profile_form.national_code)
            if(!this.profile_form.birth_date && !this.pro_id){
                toast.error('لطفاتاریخ تولد خود را وارد نمایید!')
                return;
            }
            formData.append('birth_date',this.profile_form.birth_date)
            if(!this.profile_form.city && !this.pro_id){
                toast.error('لطفا شهر خود را انتخاب نمایید!')
                return;
            }
            formData.append('city', this.profile_form.city)

            if(this.profile_form.sport_club && !this.pro_id) {
               formData.append('sport_club', this.profile_form.sport_club)
           }
            if(!this.profile_form.field && !this.pro_id){
                toast.error('لطفا رشته فرعی را انتخاب نمایید!')
                return;
            }
            formData.append('field',this.profile_form.field)
            if(!this.profile_form.address && !this.pro_id){
                toast.error('لطفا آدرس را وارد نمایید!')
                return;
            }
            formData.append('address',this.profile_form.address)
            formData.append('coach',this.profile_form.coach)
            if(!this.profile_form.father_name && !this.pro_id){
                toast.error('لطفا نام پدر خود را انتخاب نمایید!')
                return;
            }

            if (this.profile_form.profile_image instanceof Object) {
                formData.append('profile_image', this.profile_form.profile_image, this.profile_form.profile_image.name)
            }

            formData.append('father_name',this.profile_form.father_name)

            if(this.CoachProfile.docs.length || this.RefereeProfile.docs.length || this.AthleteProfile.sport_club ) {
                if (!this.profile_form.federation_card && !this.pro_id) {
                    toast.error('لطفا کارت فدراسیون خود را بارگذاری نمایید!')
                    return;
                }
               if (this.profile_form.federation_card instanceof Object) {
                    formData.append('federation_card', this.profile_form.federation_card, this.profile_form.federation_card.name)
               }
            }
            if(!this.profile_form.insurance_card && !this.pro_id) {
                toast.error('لطفا کارت بیمه خود را بارگذاری نمایید!')
                return;
            }
            if (this.profile_form.insurance_card instanceof Object) {
                    formData.append('insurance_card', this.profile_form.insurance_card, this.profile_form.insurance_card.name)

            }
            if(!this.profile_form.national_card && !this.pro_id) {
                toast.error('لطفا تصویر کارت ملی خود را بارگذاری نمایید!')
                return;
            }
            if (this.profile_form.national_card instanceof Object) {
                    formData.append('national_card', this.profile_form.national_card, this.profile_form.national_card.name)

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

            let url = (this.pro_id ? `/user/users/${this.pro_id}/` : '/user/profile/' )
            await this.SaveAthleteProfile()
            try {
                const data = await useApiFetch(url, {
                    method: "PUT",
                    body: formData,
                })

                toast.success('اطلاعات شما با موفقیت ذخیره شد!')


                this.profile_form.loading = false
            } catch (e) {
                if(e.response._data){
                    toast.error($error_log(e.response._data))
                }
                this.profile_form.loading = false
            }



        },
        async SaveSportClub(type = 'user'){
            const { $error_log } = useNuxtApp()

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
            if(this.sport_club_form.id){
                formData.append('id', this.sport_club_form.id)
            }
            let url = (!this.sport_club_form.id ? `/user/sport_club/` : `/user/sport_club/${this.sport_club_form.id}/` )

            this.sport_club_form.loading = true
            try {
                const data = await useApiFetch(url, {
                    method: !this.sport_club_form.id ? "POST" : "PUT",
                    body: formData,
                })
                this.sport_club_form.id = data.id
                toast.success('اطلاعات شما با موفقیت ذخیره شد!')

                if(type === 'admin'){
                    await this.getSportClubAdmin()
                }

                this.sport_club_form.loading = false

            } catch (e) {
                if(e.response){
                    toast.error($error_log(e.response._data))
                }
                this.sport_club_form.loading = false
            }


        },
        async SaveAssociationAdmin(){
            const { $error_log } = useNuxtApp()

            if(this.admin_association_form.loading){
                return;
            }
            const toast = useToast()

            if(!this.admin_association_form.city){
                return toast.error('لطفا شهر هیات را انتخاب نمایید!')
            }
            if(!this.admin_association_form.address){
                return toast.error('لطفا آدرس هیات را انتخاب نمایید!')
            }
            if(!this.admin_association_form.first_name){
                return toast.error('لطفا نام رئیس هیات را وارد نمایید!')
            }
            if(!this.admin_association_form.last_name){
                return toast.error('لطفا  نام خانوادگی رئیس هیات را وارد نمایید!')
            }
            if(!this.admin_association_form.national_code){
                return toast.error('لطفا کد ملی رئیس هیات را وارد نمایید!')
            }

            this.admin_association_form.loading = true
            let url = `/user/association/`
            try {
                const data = await useApiFetch(url, {
                    method: "POST",
                    body: this.admin_association_form
                })
                this.admin_association_form = {
                    city: ""
                }
                toast.success('هیات ورزشی با موفقیت ایجاد شد!')
                await this.getAllAssociation()
            } catch (e) {
                if(e.response._data){
                    toast.error($error_log(e.response._data))
                }
                this.admin_association_form.loading = false

            }
        },

        async SaveAssociation(){
            const { $error_log } = useNuxtApp()

            if(this.association_form.loading){
                return;
            }
            const toast = useToast()

            if(!this.association_form.city){
               return toast.error('لطفا شهر هیات را انتخاب نمایید!')
            }
            if(!this.association_form.address){
               return toast.error('لطفا آدرس هیات را انتخاب نمایید!')
            }
            if(this.association_form.city.id){
                this.association_form.city = this.association_form.city.id
            }
            this.association_form.loading = true
            let url = (!this.association_form.id ? `/user/association/` : `/user/association/${this.association_form.id}/` )
            try {
                const data = await useApiFetch(url, {
                    method: !this.association_form.id ? "POST" : "PUT",
                    body: this.association_form
                })
                 toast.success('اطلاعات هیات با موفقیت بروزرسانی شد!')
                this.association_form.id = data.id
                this.association_form.loading = false

            } catch (e) {
                if(e.response._data){
                    toast.error($error_log(e.response._data))
                }
                this.association_form.loading = false

            }
        },
        async getUsersList(page = 1) {
            let serialize = function(obj) {
                var str = [];
                for (var p in obj)
                    if (obj.hasOwnProperty(p)) {
                        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                    }
                return str.join("&");
            }

            this.userList.loading = true
            const toast = useToast();
            try {
                const data = await useApiFetch(`/user/users/?${serialize(this.filterUser)}`,{
                    method: "GET",
                })
                this.userList = data

            } catch (e) {
                toast.error(e.response._data.message)
                this.userList.loading = false

            }
        },
        async deleteUser(id){
            return await useApiFetch(`/user/users/${id}/`,{
                method: "DELETE",
            })
        },
        async deleteSportClub(id){
            return await useApiFetch(`/user/sport_club/${id}/`,{
                method: "DELETE",
            })
        }
    },
})
