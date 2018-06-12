<template>
  <div class="panel panel-default">
    <div class="container-fluid">
      <h1>Trade or View your Portfolio</h1>
      <p>You may Save &amp; Load your Data</p>
      <p>Click on 'End Day' to begin a new Day!</p>
      <hr>
      <h3>Your Funds: ${{ funds }}</h3>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["funds"])
  }
};
</script>

<style>
</style>
