<template>
  <body>
    <section class="hero is-primary is-fullheight">
      <!-- Hero head: will stick at the top -->
      <div class="hero-head">
        <nav class="navbar">
          <div class="navbar-brand">
            <div class="navbar-start">
              <a class="navbar-item" v-on:click="goHome()">
                <img src="https://bulma.io/images/bulma-type-white.png" alt="Logo">
              </a>
            </div>
          </div>
        </nav>
      </div>

      <!-- Hero content: will be in the middle -->
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">
            Scan user QR code
          </h1>
        </div>
      </div>
    </section>
  </body>
</template>

<script>
import router from '../router'

export default {
  name: 'Assigned',
  data () {
    return {
    }
  },
  methods: {
    goHome () {
      router.push({ name: 'Home' })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
