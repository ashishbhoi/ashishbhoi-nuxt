<template>
  <div>
    <NavBar />
    <div class="pt-11">
    </div>
    <slot />
  </div>
</template>
<script setup lang="ts">
import NavBar from "~/components/NavBar.vue";
</script>