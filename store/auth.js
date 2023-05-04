import useApiFetch from "~/composables/useApiFetch";
import { defineStore } from 'pinia'
import { useToast } from "vue-toastification";


export  const useAuthStore = defineStore('auth', {
    state: () => ({
        login: false,
        user_token: "",
        token_type: "",
        form: {
            phone_number: "",
            sms_token: "",
            step: 1,
        },
    }),
    getters: {
        logined: (state) => state.login,
        getToken: (state) => state.token,
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
                    return cookie;
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
            const toast = useToast()
            if (!this.form.phone_number) {
                toast.error('لطفا شماره تماس خود را وارد نمایید')
                return;
            }

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
                }

                this.form.loading = false
            } catch (e) {
                toast.error('خطا!')
                this.form.loading = false
            }
        },

    }
})
