<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <router-link to="/" tag="a" class="navbar-brand">Stock Trader</router-link>
      </div>
      <div id="navbar" class="navbar-collapse collapse">
        <ul class="nav navbar-nav">
          <router-link to="/portfolio" tag="li" active-class="active">
            <a>Portfolio</a>
          </router-link>
          <router-link to="/stocks" tag="li" active-class="active">
            <a>Stocks</a>
          </router-link>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li @click="endDay" role="button">
            <a>End Day</a>
          </li>
          <li class="dropdown">
            <a class="dropdown-toggle" data-toggle="dropdown" role="button">
              Save &amp; Load
              <span class="caret"></span>
            </a>
            <ul class="dropdown-menu">
              <li @click="saveData" role="button">
                <a>Save Data</a>
              </li>
              <li @click="loadData" role="button">
                <a>Load Data</a>
              </li>
            </ul>
          </li>
          <li class="navbar-text">Funds: ${{ funds }}</li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters(["funds"])
  },
  methods: {
    ...mapActions(["loadData", "saveData", "endDay"])
  }
};
</script>

<style>
</style>
