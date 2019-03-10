<template>
  <body>

    <section class="hero is-primary">
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
    </section>

    <section class="section">
      <div class="container has-text-centered">
        <p class="content is-large">
          Currently serving: {{ customer }}
        </p>
        <p class="content is-medium">
          Available cups: {{ cups }}
        </p>
        <a class="button is-primary is-fullwidth" style="margin-bottom: 1em" v-on:click="goToCupScan()">Use cup</a>
        <a class="button is-primary is-fullwidth">Buy new cup</a>
      </div>
    </section>

  </body>
</template>

<script>
import router from '../router'

export default {
  name: 'Dashboard',
  props: {
    customer: String,
    cups: Number
  },
  data () {
    return {
      // customer: 'Mark',
      // cups: this.cups
    }
  },
  methods: {
    goToCupScan () {
      router.push({ name: 'CupScan', params: { customer: this.customer, cups: this.cups } })
    },
    goHome () {
      router.push({ name: 'Home' })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
