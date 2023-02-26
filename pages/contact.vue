<template>
  <div class="flex items-center justify-center h-screen flex-col">
    <h1 class="text-4xl md:text-7xl text-gray-900 font-bold">Contact Page</h1>
      <form class="mt-10 container px-6 sm:px-10 md:px-24 lg:px-60" action="" method="post" @submit.prevent="onSubmit">
        <div class="flex flex-col md:flex-row lg:container">
          <div class="container mb-4"><label for="first_name" class="form-label">First Name</label>
            <input type="text"
                   class="form-control"
                   id="first_name"
                   name="first_name"
                   placeholder="First Name"
                   aria-describedby="first_name"
                   required="">
          </div>
          <div class="container md:ml-6 mb-4"><label for="middle_name" class="form-label">Middle Name</label>
            <input type="text"
                   class="form-control"
                   id="middle_name"
                   name="middle_name"
                   placeholder="Middle Name"
                   aria-describedby="middle_name">
          </div>
          <div class="container md:ml-6 mb-4"><label for="last_name" class="form-label">Last Name</label>
            <input type="text"
                   class="form-control"
                   id="last_name"
                   name="last_name"
                   placeholder="Last Name"
                   aria-describedby="last_name"
                   required="">
          </div>
        </div>
        <div class="mb-4"><label for="email_id" class="form-label">Email ID</label>
          <input type="text"
                 class="form-control"
                 id="email_id"
                 name="email_id"
                 placeholder="Email Id"
                 aria-describedby="last_name"
                 required="">
        </div>
        <div class="mb-4"><label for="subject" class="form-label">Subject</label>
          <input type="text"
                 class="form-control"
                 id="subject" name="subject"
                 placeholder="Subject"
                 aria-describedby="subject"
                 required="">
        </div>
        <div class="mb-4"><label for="message" class="form-label">Message</label>
          <textarea class="form-control"
                    rows="6" id="message"
                    name="message"
                    placeholder="Please type your message ...."
                    required="">

          </textarea>
        </div>
        <Turnstile v-model="token" :options="{ action: 'vue' }" />
        <button type="submit" class="form-button" id="submit_btn" value="Submit">Submit</button>
      </form>
  </div>
</template>

<script setup lang="ts">
import {$fetch} from "ofetch";

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