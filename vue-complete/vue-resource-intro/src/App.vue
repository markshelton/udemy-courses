<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Http</h1>
                <div class="form-group">
                    <label>Username</label>
                    <input class="form-control" type="text" v-model="user.username" />
                </div>
                <div class="form-group">
                    <label>Email</label>
                    <input class="form-control" type="text" v-model="user.email" />
                </div>
                <button class="btn btn-primary" @click="submit">Submit</button>
                <hr>
                <input type="text" class="form-control" v-model="node" />
                <button class="btn btn-primary" @click="fetch">Get Data</button>
                <ul class="list-group">
                    <li class="list-group-item" v-for="(user,index) in users" :key="index">{{ user.username }} - {{ user.email }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data: () => ({
    user: { username: "", email: "" },
    users: [],
    resource: {},
    node: "data"
  }),
  methods: {
    fetch() {
      this.resource
        .getData({ node: this.node })
        .then(response => response.json())
        .then(data => {
          this.users = Object.values(data);
        });
      //   this.$http
      //     .get("data.json")
      //     .then(response => response.json())
      //     .then(data => {
      //       this.users = Object.values(data);
      //     });
    },
    submit() {
      this.resource.saveAlt({}, this.user);
      //   this.resource.save({}, this.user);
      //   this.$http
      //     .post("data.json", this.user)
      //     .then(response => console.log(response), error => console.error(error));
    }
  },
  created() {
    const customActions = {
      saveAlt: { method: "POST", url: "alternative.json" },
      getData: { method: "GET" }
    };
    this.resource = this.$resource("{node}.json", {}, customActions);
  }
};
</script>

<style>
</style>
