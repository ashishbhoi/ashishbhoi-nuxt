<template>
    <NuxtLayout :menuName="menu" :name="layout">
        <div class="flex items-center justify-center h-screen flex-col">
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
                        <input id="last_name" aria-describedby="last_name" class="form-control" name="last_name" placeholder="Last Name"
                               required type="text">
                    </div>
                </div>
                <div class="mb-4"><label class="form-label" for="email_id">Email ID</label>
                    <input id="email_id" aria-describedby="last_name" class="form-control" name="email_id" placeholder="Email Id"
                           required type="text">
                </div>
                <div class="mb-4"><label class="form-label" for="subject">Subject</label>
                    <input id="subject" aria-describedby="subject" class="form-control" name="subject" placeholder="Subject"
                           required type="text">
                </div>
                <div class="mb-4"><label class="form-label" for="message">Message</label>
                    <textarea id="message" class="form-control" name="message" placeholder="Please type your message ...."
                              required
                              rows="6">

          </textarea>
                </div>
                <NuxtTurnstile v-model="token" :options="{ action: 'vue' }"/>
                <button id="submit_btn" class="form-button" type="submit" value="Submit">Submit</button>
            </form>
        </div>
    </NuxtLayout>
</template>

<script lang="ts" setup>
const layout = "nav"
const menu = "contact"

const token = ref()

async function onSubmit() {
    await $fetch('/_turnstile/validate', {
        method: 'POST',
        body: {
            token: token.value,
        }
    }).then((response) => JSON.parse(JSON.stringify(response)))
        .then((response) => {
            if (response.success) console.log("Validation Complete")
            else console.log("Validation Failure")
        });
}
</script>