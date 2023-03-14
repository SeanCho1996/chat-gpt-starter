<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="title">Personal Chat GPT(gpt-3.5 model) Demo Server by Tony</div>
  <RouterView />
</template>

<style>
html,
body {
  margin: 0;
  padding: 0;
}

.title {
  font-size: 20px;
  font-weight: 400;
  line-height: 60px;
  background: #000;
  color: #fff;
  padding: 0 10px;
}
</style>
