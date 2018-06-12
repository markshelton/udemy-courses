<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <User />
            </div>
        </div>
    </div>
</template>

<script>
import User from "./components/User.vue";

export default {
  components: {
    User
  }
};
</script>

<style>
div.component {
  border: 1px solid black;
  padding: 30px;
}
</style>
