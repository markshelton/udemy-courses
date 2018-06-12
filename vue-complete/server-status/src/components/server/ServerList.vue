<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <ServerItem v-for="server in servers" :server="server" :key="server.id" />
        </ul>
    </div>
</template>

<script>
import ServerItem from "./ServerItem.vue";
export default {
  data: () => ({
    servers: [
      { id: 1, status: "Normal" },
      { id: 2, status: "Critical" },
      { id: 3, status: "Unknown" },
      { id: 4, status: "Normal" }
    ]
  }),
  components: {
    ServerItem
  }
};
</script>

<style>
</style>