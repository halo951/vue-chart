<script lang="ts" setup>
import { onMounted, ref } from 'vue'

const tst = ref(null)

onMounted(() => {
    console.log('tst:', tst.value)
})
</script>

<template>
    <div ref="tst"></div>
</template>
