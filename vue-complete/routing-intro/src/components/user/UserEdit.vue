<template>
    <div>
        <h1>Edit user</h1>
        <p>User loaded has ID: {{ $route.params.id }}</p>
        <p>Locale: {{ $route.query.locale }}</p>
        <p>Analytics: {{ $route.query.q }}</p>
        <hr>
        <button class="btn btn-primary" @click="confirmed=true">Confirm</button>
        <div style="height: 1500px"></div>
        <p id="data">Some extra data</p>
    </div>
</template>

<script>
export default {
  data() {
    return {
      confirmed: false
    };
  },
  beforeRouteLeave(to, from, next) {
    if (this.confirmed) next();
    if (confirm("Are you sure?")) next();
  }
};
</script>

<style>
</style>
