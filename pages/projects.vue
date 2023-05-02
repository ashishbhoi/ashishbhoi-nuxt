<template>
    <Head>
        <title>Projects | Ashish Kumar Bhoi</title>
    </Head>
    <NuxtLayout :menuName="menu" :name="layout">
        <div class="flex items-center justify-center h-screen">
            <h1 class="text-9xl text-orange-600 text-center">Projects Page</h1>
        </div>
    </NuxtLayout>
</template>
<script lang="ts" setup>
useServerSeoMeta({
    author: 'Ashish Kumar Bhoi',
    description: 'Under development Projects Page'
})
const layout = "nav"
const menu = "projects"
</script>