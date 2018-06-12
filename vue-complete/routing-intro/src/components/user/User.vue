<template>
    <div>
        <h1>User</h1>
        <hr>
        <button @click="navigateToHome" class="btn btn-primary">Go to Home</button>
        <hr>
        <router-view />
    </div>
</template>

<script>
export default {
  methods: {
    navigateToHome() {
      this.$router.push({ path: "/" });
    }
  }
};
</script>

<style>
</style>
