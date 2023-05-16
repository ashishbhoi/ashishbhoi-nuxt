<template>
    <Head>
        <title>Contact | Ashish Kumar Bhoi</title>
    </Head>
    <NuxtLayout :menuName="menu" :name="layout">
        <div id="contact-page" :key="pageRefresh" class="flex items-center justify-center h-screen flex-col">
            <h1 class="text-4xl md:text-7xl text-gray-900 font-bold">Contact Page</h1>
            <form action="" class="mt-10 container px-6 sm:px-10 md:px-24 lg:px-60" method="post"
                  @submit.prevent="onSubmit">
                <div class="flex flex-col md:flex-row lg:container">
                    <div class="container mb-4"><label class="form-label" for="first_name">First Name</label>
                        <input id="first_name" aria-describedby="first_name" class="form-control" name="first_name"
                               placeholder="First Name"
                               required type="text">
                    </div>
                    <div class="container md:ml-6 mb-4"><label class="form-label" for="middle_name">Middle Name</label>
                        <input id="middle_name" aria-describedby="middle_name" class="form-control" name="middle_name"
                               placeholder="Middle Name"
                               type="text">
                    </div>
                    <div class="container md:ml-6 mb-4"><label class="form-label" for="last_name">Last Name</label>
                        <input id="last_name" aria-describedby="last_name" class="form-control" name="last_name"
                               placeholder="Last Name"
                               required type="text">
                    </div>
                </div>
                <div class="mb-4"><label class="form-label" for="email_id">Email ID</label>
                    <input id="email_id" aria-describedby="last_name" class="form-control" name="email_id"
                           placeholder="Email Id"
                           required type="email">
                </div>
                <div class="mb-4"><label class="form-label" for="subject">Subject</label>
                    <input id="subject" aria-describedby="subject" class="form-control" name="subject"
                           placeholder="Subject"
                           required type="text">
                </div>
                <div class="mb-4"><label class="form-label" for="message">Message</label>
                    <textarea id="message" class="form-control" name="message"
                              placeholder="Please type your message ...."
                              required type="text"
                              rows="6"/>
                </div>
                <NuxtTurnstile v-model="token" :options="{ action: 'vue' }" class="mb-4"/>
                <button id="submit_btn" class="form-button" type="submit" value="Submit">Submit</button>
            </form>
        </div>
        <PopUpModal :key="modalKey" :isActive="button" :message="message" :taskComplete="taskComplete"/>
    </NuxtLayout>
</template>

<script lang="ts" setup>
useServerSeoMeta({
    author: 'Ashish Kumar Bhoi',
    description: 'Under development Contact Page'
})
const layout = "nav"
const menu = "contact"
const modalKey = ref(0)
const pageRefresh = ref(0)
let button = false
let message = "Sending Email..."
let taskComplete = false

const token = ref()

async function onSubmit() {
    button = true
    message = "Sending Email..."
    taskComplete = false
    modalKey.value++
    pageRefresh.value++

    await $fetch('https://turnstile.ashishbhoi.com/', {
        method: 'POST',
        body: {
            token: token.value,
        }
    }).then((response: any) => JSON.parse(response))
        .then((response) => {
            if (response.success) {
                message = "Email sent successfully"
                taskComplete = true
                modalKey.value++
            } else {
                message = "Failed to send email: "
                taskComplete = true
                modalKey.value++
            }
        });
}
</script>