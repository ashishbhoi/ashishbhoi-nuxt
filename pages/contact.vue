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
                           required type="text">
                </div>
                <div class="mb-4"><label class="form-label" for="subject">Subject</label>
                    <input id="subject" aria-describedby="subject" class="form-control" name="subject"
                           placeholder="Subject"
                           required type="text">
                </div>
                <div class="mb-4"><label class="form-label" for="message">Message</label>
                    <textarea id="message" class="form-control" name="message"
                              placeholder="Please type your message ...."
                              required
                              rows="6">

                    </textarea>
                </div>
                <NuxtTurnstile v-model="token" :options="{ action: 'vue' }"/>
                <button id="submit_btn" class="form-button" type="submit" value="Submit">Submit</button>
            </form>
        </div>
        <PopUpModal :key="modalKey" :isActive="button" :message="message_sent" :taskComplete="taskComplete"/>
    </NuxtLayout>
</template>

<script lang="ts" setup>
import {getElementById} from "domutils";

useServerSeoMeta({
    author: 'Ashish Kumar Bhoi',
    description: 'Under development Contact Page'
})
const layout = "nav"
const menu = "contact"
const modalKey = ref(0)
const pageRefresh = ref(0)
let button = false
let message_sent = "Sending Email..."
let taskComplete = false
const token = ref()

async function onSubmit() {
    const first_name = document.getElementById("first_name") as HTMLInputElement
    const middle_name = document.getElementById("middle_name") as HTMLInputElement
    const last_name = document.getElementById("last_name") as HTMLInputElement
    const message_email = document.getElementById("email_id") as HTMLInputElement
    const message_subject = document.getElementById("subject") as HTMLInputElement
    const message = document.getElementById("message") as HTMLInputElement

    button = true
    message_sent = "Sending Email..."
    taskComplete = false
    modalKey.value++
    pageRefresh.value++

    await $fetch('https://turnstile.ashishbhoi.workers.dev', {
        method: 'POST',
        body: {
            token: token.value,
            first_name: first_name.value,
            middle_name: middle_name.value,
            last_name: last_name.value,
            message_email: message_email.value,
            message_subject: message_subject.value,
            message: message.value
        }
    }).then((response: any) => JSON.parse(response))
        .then((response) => {
            if (response.success) {
                message_sent = "Email sent successfully"
                taskComplete = true
                modalKey.value++
            } else {
                message_sent = "Failed to send email: "
                taskComplete = true
                modalKey.value++
            }
        });
}
</script>