<template>
    <div>
        <button class="btn btn-primary" @click="increment(500)">Increment</button>
        <button class="btn btn-primary" @click="decrement(1000)">Decrement</button>
    </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions("counter", ["increment", "decrement"])
  }
};
</script>