<template>
  <body>
    <section class="hero is-primary is-fullheight">
      <div class="hero-body">
        <div class="container has-text-centered">
          <img src="../assets/LogoInverted.png" alt="Logo">
          <div class="section">
            <a class="button is-primary is-outlined is-inverted is-fullwidth" style="margin-bottom: 1em" v-on:click="goToUserScan()">Cafe</a>
            <a class="button is-primary is-outlined is-inverted is-fullwidth">Bin</a>
          </div>
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
    goToUserScan () {
      router.push({ name: 'UserScan' })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
