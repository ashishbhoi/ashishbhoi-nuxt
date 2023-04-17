<template>
    <div>
        <NavBar :activeMenu="menuName"/>
        <div class="pt-11">
        </div>
        <slot/>
    </div>
</template>
<script lang="ts" setup>
defineProps({
    menuName: String
})
</script>