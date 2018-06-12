<template>
  <div class="col-xs-12 col-sm-6">
      <p v-if="!server">Please select a Server</p>
      <p v-else>Server #{{ server.id }}, Server Status: {{ server.status }}</p>
      <hr>
      <button @click="resetStatus">Change to Normal</button>
  </div>
</template>

<script>
import { eventBus } from "../../main";

export default {
  props: {
    server: { type: Object, default: null }
  },
  methods: {
    resetStatus() {
      this.server.status = "Normal";
    }
  },
  created() {
    eventBus.$on("selectServer", server => (this.server = server));
  }
};
</script>

<style>
</style>