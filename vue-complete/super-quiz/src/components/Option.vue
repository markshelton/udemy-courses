<template>
    <div class="col-xs-12 col-sm-6 text-center">
        <button class="btn btn-primary btn-lg" style="margin: 10px" 
            @click="onAnswer(option.correct)">{{ option.answer }}</button>
    </div>
</template>

<script>
import { eventBus } from "../main";

export default {
  props: {
    option: { type: Object }
  },
  methods: {
    onAnswer(isCorrect) {
      eventBus.$emit("answered", isCorrect);
    }
  }
};
</script>

<style>
</style>
