<template>
  <body>
    <section class="hero is-primary is-fullheight">
      <!-- Hero head: will stick at the top -->
      <div class="hero-head">
        <nav class="navbar">
          <div class="container">
            <div class="navbar-brand">
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
          <h1 class="title">
            Cup #7294 assigned to {{ customer }}
          </h1>
          <h2 style="margin-bottom: 1em">{{ customer }} now has {{ cups }} cup(s) left</h2>
          <a class="button is-primary is-inverted" v-on:click="goHome()">
            <span>Ok</span>
          </a>
        </div>
      </div>
    </section>
  </body>
</template>

<script>
import router from '../router'

export default {
  name: 'Assigned',
  props: {
    customer: String,
    cups: Number
  },
  data () {
    return {
      customer: this.cups,
      cups: this.cups
    }
  },
  computed: {
    addToCups: function () {
      return this.cups + 1
    }
  },
  methods: {
    goHome () {
      router.push({ name: 'Home' })
    },
    test () {
      router.push({ name: 'cupscan' })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
