<template>
    <Head>
        <title>Home | Ashish Kumar Bhoi</title>
    </Head>
    <NuxtLayout :menuName="menu" :name="layout">
        <div class="flex items-center justify-center h-screen">
            <h1 class="text-9xl text-orange-600 text-center">Home Page</h1>
        </div>
    </NuxtLayout>
</template>
<script lang="ts" setup>
useServerSeoMeta({
    author: 'Ashish Kumar Bhoi',
    description: 'Under development Home Page'
})
const layout = "nav"
const menu = "home"
</script>