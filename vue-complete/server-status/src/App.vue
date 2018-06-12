<template>
  <div class="container">
    <Header />
    <hr>
    <div class="row">
      <ServerList />
      <ServerDetails />
    </div>
    <hr>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/shared/Header.vue";
import Footer from "./components/shared/Footer.vue";
import ServerList from "./components/server/ServerList.vue";
import ServerDetails from "./components/server/ServerDetails.vue";

export default {
  components: {
    Header,
    ServerList,
    ServerDetails,
    Footer
  }
};
</script>

<style></style>