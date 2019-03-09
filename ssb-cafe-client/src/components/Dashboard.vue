<template>
  <body>

    <section class="hero is-primary">
      <div class="hero-head">
        <nav class="navbar">
          <div class="navbar-brand">
            <div class="navbar-start">
              <a class="navbar-item">
                <img src="https://bulma.io/images/bulma-type-white.png" alt="Logo">
              </a>
            </div>
            <div class="navbar-end">
              <span class="navbar-item">
                <a class="button is-primary is-inverted">
                  <span>Home</span>
                </a>
              </span>
            </div>
          </div>
        </nav>
      </div>
    </section>

    <section class="section">
      <div class="container has-text-centered">
        <p class="content is-large">
          Currently serving: Mark Nicholl
        </p>
        <p class="content is-medium">
          Mark's available cups: 2 cups
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
  name: 'Assigned',
  data () {
    return {
    }
  },
  methods: {
    goToCupScan () {
      router.push({ name: 'CupScan' })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
