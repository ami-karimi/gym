<template>
  <nuxt-layout name="user">



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
    select_type: [],
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