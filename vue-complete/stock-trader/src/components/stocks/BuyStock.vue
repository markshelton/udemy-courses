<template>
  <div class="col-sm-6 col-md-4">
    <div class="panel panel-default panel-success">
      <div class="panel-heading">
        <h3 class="panel-title">{{ stock.name }}
          <small>(Price: ${{ stock.price }})</small>
        </h3>
      </div>
      <div class="panel-body">
        <div class="pull-left">
          <input type="number" :min="1" step="1" id="quantity" class="form-control" placeholder="Quantity" v-model.number="quantity">
        </div>
        <div class="pull-right">
          <button class="btn btn-success" @click.prevent="buyStock({stock, quantity})">Buy</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data: () => ({ quantity: 0 }),
  props: {
    stock: {
      name: { type: String, required: true },
      price: { type: Number, required: true },
      quantity: { type: Number, required: false }
    }
  },
  methods: {
    ...mapActions(["buyStock"])
  }
};
</script>

<style>
</style>
