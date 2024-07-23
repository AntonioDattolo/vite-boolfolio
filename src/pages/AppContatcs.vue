<script>
import axios from 'axios';
export default {
  name : "AppContacts",
  data() {
    return {
      name: '',
      email: '',
      message: '',
      errors: {},
      loading: false,
      success: false
    }
  },
  methods: {
    sendMessage() {
      const data = {
        'name': this.name,
        'email': this.email,
        'message': this.message,
      }
      console.log(data);
      axios.post('http://127.0.0.1:8000/api/contacts', data).then(response => {
        console.log(response);
        //in caso i dati del form siano validi(if) , altrimenti (else) errors
        if (response.data.success) {
          this.success = true;
          this.errors = {};
          this.name = '';
          this.email = '';
          this.message = '';
        } else {
          this.success = false;
          this.errors = response.data.errors
        }
      })
    }
  }
}
</script>

<template>
  <section>
    <div>
      <div class="p-5 mb-4">
        <div class="container py-5">
          <h1 class="display-5 fw-bold">Contact me</h1>
          <p class="col-md-8 fs-4">
            Hi, compile this form to contact me.
            <p style="font-size:200px">&#128640;</p>
          </p>
        </div>
      </div>

      <div class="container">
        <template v-if="success">
          <div class="alert alert-success" role="alert">
            <strong>Message received</strong>
          </div>
        </template>

        <form @submit.prevent="sendMessage()">
          <div class="mb-3">
            <label for="name" class="form-label">Name &#128129;</label>
            <input type="text" class="form-control" :class="{ 'is-invalid': errors.name }" name="name" id="name" aria-describedby="nameHelper" placeholder="Luke skywalker" v-model="name" />
            <small id="nameHelper" class="text-white">Type your full name</small>
            <p class="text-danger" v-for="(error, index) in errors.name" :key="`name-error-${index}`">
              {{ error }}
            </p>
          </div>

          <div class="mb-3">
            <label for="email" class="form-label">Email &#x1F4BB;</label>
            <input type="email" class="form-control" :class="{ 'is-invalid': errors.email }" name="email" id="email" aria-describedby="emailHelp" placeholder="abc@mail.com" v-model="email" />
            <p class="text-danger" v-for="(error, index) in errors.email" :key="`email-error-${index}`">
              {{ error }}
            </p>
            <small id="emailHelp" class="text-white">Type your email</small>
          </div>

          <div class="mb-3">
            <label for="message" class="form-label">Message &#128231;</label>
            <textarea class="form-control" :class="{ 'is-invalid': errors.message }" name="message" id="message"
              rows="3" v-model="message"></textarea>
            <p class="text-danger" v-for="(error, index) in errors.message" :key="`message-error-${index}`">
              {{ error }}
            </p>
          </div>

          <button type="submit" class="btn btn-success">
            Contact ME! &#128513;
          </button>
        </form>
      </div>
    </div>
  </section>

</template>