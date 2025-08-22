<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()

// Get the path and break it into parts
const pathSegments = computed(() => {
  return route.path
    .split('/')
    .filter(segment => segment.length > 0)
})

// Build breadcrumb links
const breadcrumbs = computed(() => {
  let cumulativePath = ''
  return pathSegments.value.map((segment, index) => {
    cumulativePath += '/' + segment
    return {
      label: decodeURIComponent(segment),
      to: cumulativePath
    }
  })
})
</script>

<template>
  <nav class="px-1 my-6 text-slate-600" aria-label="breadcrumb">
    <NuxtLink to="/">Accueil</NuxtLink>
    <span v-if="breadcrumbs.length"> > </span>
    <template v-for="(crumb, index) in breadcrumbs" :key="crumb.to">
      <NuxtLink :to="crumb.to">{{ crumb.label }}</NuxtLink>
      <span v-if="index < breadcrumbs.length - 1"> > </span>
    </template>
  </nav>
</template>

