<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
        <button @click="changeName">Change my Name</button>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <UserDetail :name="name" :age="age" />
            </div>
            <div class="col-xs-12 col-sm-6">
                <UserEdit :age="age" />
            </div>
        </div>
    </div>
</template>

<script>
import UserDetail from "./UserDetail.vue";
import UserEdit from "./UserEdit.vue";
import { eventBus } from "../main";

export default {
  data: () => ({ name: "Max", age: 27 }),
  methods: {
    changeName() {
      this.name = "Anna";
    },
    resetName() {
      this.name = "Max";
    }
  },
  components: {
    UserDetail,
    UserEdit
  },
  created() {
    eventBus.$on("nameWasReset", name => (this.name = name));
    eventBus.$on("ageWasEdited", age => (this.age = age));
  }
};
</script>

<style scoped>
div {
  background-color: lightblue;
}
</style>
