import {useAuthStore} from "~/store/auth";

const useApiFetch =  async (url: string, options: object) => {
    const config = useRuntimeConfig()


    let headers = {}

    const user = useAuthStore()
    const userToken = await user.CheckToken()

    if(userToken){
        // @ts-ignore
        headers['Authorization'] = `Token ${user.getToken}`
    }


    return  await $fetch(url, {
        headers,
        baseURL: config.apiBase,
        async onRequest() {
        },
        ...options
    })


}

export default useApiFetch