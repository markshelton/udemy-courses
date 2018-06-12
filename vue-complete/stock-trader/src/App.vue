<template>
  <div class="container">
    <div class="col-sm-12 col-md-10 col-md-offset-1">
      <Header />
      <transition name="slide" mode="out-in">
        <router-view />
      </transition>
    </div>
  </div>
</template>

<script>
import Header from "components/Header.vue";
export default {
  components: { Header }
};
</script>

<style>
.slide-enter-active {
  transition: all 0.2s ease;
}
.slide-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-enter,
.slide-leave-to {
  transform: translateX(10px);
}
</style>
