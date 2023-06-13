<template>
  <div>
    <NuxtPage  />
  </div>
</template>
<script setup>
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite();
    document.documentElement.classList.add('light')

})
</script>
