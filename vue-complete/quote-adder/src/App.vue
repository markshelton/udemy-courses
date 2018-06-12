<template>
    <div class="container">
        <Header :quoteCount="quoteCount" :maxQuotes="maxQuotes" />
        <NewQuote @quoteAdded="newQuote" />
        <QuoteGrid :quotes="quotes" @deleteQuote="deleteQuote" />
        <div class="row">
            <div class="col-sm-12 text-center">
                <div class="alert alert-info">Info: Click on a Quote to delete it!</div>
            </div>
        </div>
    </div>
</template>

<script>
import QuoteGrid from "./components/QuoteGrid.vue";
import NewQuote from "./components/NewQuote.vue";
import Header from "./components/Header.vue";

export default {
  data: () => ({ quotes: ["Just a quote to see something"], maxQuotes: 3 }),
  computed: {
    quoteCount() {
      return this.quotes.length;
    }
  },
  methods: {
    newQuote(quote) {
      if (this.quotes.length >= this.maxQuotes) {
        return alert("Please remove some quotes first.");
      }
      if (quote === "") {
        return alert("Please write a quote.");
      }
      this.quotes.push(quote);
    },
    deleteQuote(index) {
      this.quotes.splice(index, 1);
    }
  },
  components: { QuoteGrid, NewQuote, Header }
};
</script>

<style>
</style>
