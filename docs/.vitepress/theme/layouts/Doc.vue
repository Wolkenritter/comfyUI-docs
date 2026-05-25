<template>
  <DefaultTheme.Layout>
    <!-- 页面顶部广告 -->
    <template #doc-before v-if="showAdBanner">
      <AdBanner type="adsense" position="top" />
    </template>
  </DefaultTheme.Layout>
</template>

<script setup>
import DefaultTheme from 'vitepress/theme'
import AdBanner from '../components/AdBanner.vue'

const showAdBanner = true;
</script>