<template>
  <div class="upload-input">
    <label class="text-white text-sm mb-3 block">{{label}}</label>
    <div class="flex items-center justify-center " :class="{'max-w-[180px]' : !multiple}">
      <label :for="id_input" class="flex flex-col items-center justify-center w-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
        <div v-if="!files.length" class="flex flex-col items-center justify-center pt-5 pb-6">
          <svg aria-hidden="true" class="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
          <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">جهت بارگذاری کلیک کنید</span></p>
          <p class="text-xs text-gray-500  text-center dark:text-gray-400">پسوند های مجاز برای بارگذاری (PNG, JPG)</p>
        </div>
        <div class="row">
          <div v-if="files.length" v-for="(item,index) in files" :class="`${!multiple ? 'col-md-12' : 'col-md-6'} mb-3 mt-3 rounded-lg  relative`">
            <div class="relative">
            <img  v-if="multiple" :src="(item.id ? item.file : ConvertImage(item))"  class="p-1.5 w-full  rounded-lg grayscale hover:grayscale-0 transition  overflow-hidden"   style="border-radius: 20px;height:172px;object-fit: cover;min-width: 200px;" />
            <img  v-else :src="(typeof item === 'string' ? item : ConvertImage(item))" class="p-1.5 w-full rounded-lg grayscale hover:grayscale-0 transition  overflow-hidden"   style="border-radius: 20px;height:172px;object-fit: cover;min-width: 200px;" />
            <div @click="remImage(index)"  class="trs w-full  z-50 absolute  text-white text-xs right-0 pl-2 bottom-1 pr-2">
              <div class="bg-red-400 text-center  pt-1 pb-1" style="border-bottom-left-radius: 10px;border-bottom-right-radius: 10px;">
              حذف تصویر
              </div>
            </div>
            </div>

          </div>
        </div>
      </label>
      <input :id="id_input" v-on:change="SelectedFile($event)" :multiple="multiple " type="file" class="hidden z-20" />

    </div>
  </div>
</template>
<script>
 export default {
   emits: ['rem_image','update_image'],
   props: ['label','last_image','multiple','id_input','last'],
   data :() =>({
      files: [],
   }),

   mounted() {
     if(this.last){
       this.files =  (this.multiple ? this.last : [this.last])
     }
   },
   methods:{

     SelectedFile(e){
       if(e.target.files.length){
         if(this.multiple){
           for (let i = 0; i < e.target.files.length ; i++) {
             this.files.push(e.target.files[i])

           }
         }else{
           this.files = []
           this.files.push(e.target.files[0])
         }

         this.$emit('update_image',this.files)
       }


       document.getElementById(this.id_input).value = ''
     },
     ConvertImage(image){
       return  URL.createObjectURL(image)
     },
     remImage(index){
       this.files.splice(index,1)
       this.$emit('update_image',this.files)
     }
   }
 }
</script>