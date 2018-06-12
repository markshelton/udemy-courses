<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{ name }}</p>
        <p>User Age: {{ age }}</p>
        <button @click="resetName()">Reset Name</button>
    </div>
</template>

<script>
import { eventBus } from "../main";

export default {
  props: {
    name: { type: String, required: true },
    age: { type: Number, required: true }
  },
  methods: {
    resetName() {
      this.name = "Max";
      eventBus.$emit("nameWasReset", this.name);
    }
  }
};
</script>

<style scoped>
div {
  background-color: lightcoral;
}
</style>
