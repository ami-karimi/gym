<template>
  <div dir="rtl " class=" overflow-hidden">

    <!-- <LoadingBase v-if="loading" /> -->
    <UserHeader />
    <UserSide  />

    <div class="sm:p-4 sm:pt-4 mt-14  pt-10 p-4 sm:mr-64" >
      <div dir="rtl">
        <slot />
      </div>
    </div>
  </div>
</template>
<script>
import {useAuthStore} from "~/store/auth";
import { initFlowbite } from 'flowbite'

export default {
  setup(){
    const user = useAuthStore();

    return {
      user
    }
  },
  data: () => ({
    loading: true,
  }),
  async mounted() {
    initFlowbite();

    this.loading = true
    this.loading = false

  }
}
</script>