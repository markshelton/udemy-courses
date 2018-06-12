<template>
    <div class="container">
        <form v-if="!isSubmitted">
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <h1>Signup Form</h1>
                    <hr>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <FullName v-model="userData.fullName" />
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            class="form-control"
                            placeholder="Email"
                            v-model="userData.email">
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            class="form-control"
                            placeholder="Password"
                            v-model="userData.password">
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
                    Store in database?
                    <label for="yes">
                        <input
                                type="radio"
                                id="yes"
                                value="Yes"
                                v-model="toStore"> Yes
                    </label>
                    <label for="no">
                        <input
                                type="radio"
                                id="no"
                                value="No"
                                v-model="toStore"> No
                    </label>
                </div>
            </div>
            <hr>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <button class="btn btn-primary" @click.prevent="submitted">Submit!</button>
                </div>
            </div>
        </form>
        <div class="row" v-else>
            <hr>
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{ userData.fullName }}</p>
                        <p>Mail: {{ userData.email }}</p>
                        <p>Password: {{ userData.password }}</p>
                        <p>Store in Database?: {{ toStore }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import FullName from "./FullName.vue";

export default {
  data: () => ({
    userData: { fullName: "", email: "", password: "" },
    toStore: true,
    isSubmitted: false
  }),
  methods: {
    submitted() {
      this.isSubmitted = true;
    }
  },
  components: { FullName }
};
</script>

<style>
</style>
