import { useAuthStore } from "~/store/auth"
export default defineNuxtRouteMiddleware(async (to, from) => {
     const auth = useAuthStore()
     const token = auth.CheckToken('midd')
     if(!token){
        navigateTo('/')
     }
 })