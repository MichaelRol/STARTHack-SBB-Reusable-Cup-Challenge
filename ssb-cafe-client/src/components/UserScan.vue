<template>
  <body>
    <section class="hero is-primary is-fullheight">
      <!-- Hero head: will stick at the top -->
      <div class="hero-head">
        <nav class="navbar">
          <div class="navbar-brand">
            <div class="navbar-start">
              <a class="navbar-item" v-on:click="goHome()">
                <img src="../assets/FinalLogo.png" alt="Logo">
              </a>
            </div>
          </div>
        </nav>
      </div>

      <!-- Hero content: will be in the middle -->
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title" v-if='codeRead === false'>
            Scan the customer's QR code
          </h1>
          <img src="../assets/GreenTick.png" v-if='codeRead === true' style="height: 200px; width: 200px">
          <br>
          <a class='button is-success has-text-centered' v-if='codeRead === true' v-on:click="goToDashboard()">Customer identified!</a>
        </div>
      </div>
      <div>
        <p class="error">{{ error }}</p>
        <!-- <p class="decode-result">Last result: <b>{{ result }}</b></p> -->
        <qrcode-stream @decode="onDecode" @init="onInit" />
      </div>
    </section>

  </body>
</template>

<script>
import router from '../router'

export default {
  name: 'UserScan',
  data () {
    return {
      result: '',
      error: '',
      codeRead: false
    }
  },
  methods: {
    goHome () {
      router.push({ name: 'Home' })
    },
    goToDashboard () {
      router.push({ name: 'Dashboard' })
    },
    onDecode (result) {
      this.result = result
      this.codeRead = true
    },
    async onInit (promise) {
      try {
        await promise
      } catch (error) {
        if (error.name === 'NotAllowedError') {
          this.error = 'ERROR: you need to grant camera access permisson'
        } else if (error.name === 'NotFoundError') {
          this.error = 'ERROR: no camera on this device'
        } else if (error.name === 'NotSupportedError') {
          this.error = 'ERROR: secure context required (HTTPS, localhost)'
        } else if (error.name === 'NotReadableError') {
          this.error = 'ERROR: is the camera already in use?'
        } else if (error.name === 'OverconstrainedError') {
          this.error = 'ERROR: installed cameras are not suitable'
        } else if (error.name === 'StreamApiNotSupportedError') {
          this.error = 'ERROR: Stream API is not supported in this browser'
        }
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
