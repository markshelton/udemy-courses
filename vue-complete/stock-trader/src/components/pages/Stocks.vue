<template>
  <StockGrid :mode="mode" />
</template>

<script>
import StockGrid from "components/stocks/StockGrid.vue";
export default {
  data: () => ({ mode: "buy" }),
  components: { StockGrid }
};
</script>

<style>
</style>
