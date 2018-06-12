<template>
  <div>
    <BuyStock v-if="mode==='buy'" v-for="(stock,index) in stocks" :key="index" :stock="stock" />
    <SellStock v-if="mode==='sell'" v-for="(stock,index) in portfolio" :key="index" :stock="stock" />
  </div>
</template>

<script>
const BuyStock = () => import("components/stocks/BuyStock.vue");
const SellStock = () => import("components/stocks/SellStock.vue");

import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["stocks", "portfolio"])
  },
  props: {
    mode: {
      validator(value) {
        return ["buy", "sell"].indexOf(value) !== -1;
      }
    }
  },
  components: { BuyStock, SellStock }
};
</script>

<style>
</style>
