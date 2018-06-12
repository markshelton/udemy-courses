<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Routing</h1>
        <hr>
        <router-view name="header-top" />
        <transition name="slide" mode="out-in">
          <router-view />
        </transition>
        <router-view name="header-bottom" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>