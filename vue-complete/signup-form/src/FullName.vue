<template>
    <div class="form-group">
        <label for="firstName">First Name
            <input
                type="text"
                id="firstName"
                class="form-control"
                placeholder="First Name"
                v-model="firstName" >
        </label>
        <label for="lastName">Last Name
            <input
                type="text"
                id="lastName"
                class="form-control"
                placeholder="Last Name"
                v-model="lastName" >
        </label>
    </div>
</template>

<script>
export default {
  data: () => ({ firstName: "", lastName: "" }),
  computed: {
    fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  },
  watch: {
    fullName(newName) {
      this.$emit("input", newName);
    }
  }
};
</script>

<style scoped>
</style>
