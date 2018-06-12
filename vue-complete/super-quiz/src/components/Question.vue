<template>
    <div class="panel panel-default">
        <div class="panel-heading">
            <h3 class="panel-title text-center">{{ question }}</h3>
        </div>
        <div class="panel-body">
            <Option v-for="(option,index) in options" :key="index" :option="option" />
        </div>
    </div>
</template>

<script>
import Option from "./Option.vue";

const MODE_ADDITION = 1;
const MODE_SUBTRACTION = 2;

export default {
  data: () => ({
    question: "Oops, an error ocurred :/",
    options: [
      { correct: true, answer: 0 },
      { correct: false, answer: 0 },
      { correct: false, answer: 0 },
      { correct: false, answer: 0 }
    ]
  }),
  methods: {
    generateAnswer(correctAnswer) {
      return this.generateRandomNumber(
        correctAnswer - 10,
        correctAnswer + 10,
        correctAnswer
      );
    },
    generateAnswers(correctAnswer, n) {
      return Array(n)
        .fill()
        .map(el => ({
          answer: this.generateAnswer(correctAnswer),
          correct: false
        }));
    },
    generateQuestion() {
      const firstNumber = this.generateRandomNumber(1, 100);
      const secondNumber = this.generateRandomNumber(1, 100);
      const modeNumber = this.generateRandomNumber(1, 2);

      let correctAnswer = 0;

      switch (modeNumber) {
        case MODE_ADDITION:
          correctAnswer = firstNumber + secondNumber;
          this.question = `What's ${firstNumber} + ${secondNumber}?`;
          break;
        case MODE_SUBTRACTION:
          correctAnswer = firstNumber - secondNumber;
          this.question = `What's ${firstNumber} - ${secondNumber}?`;
          break;
        default:
          correctAnswer = 0;
          this.question = "Oops, an Error occurred :/";
      }

      this.options = this.generateAnswers(correctAnswer, 4);
      const correctButton = this.generateRandomNumber(0, 3);
      this.options[correctButton].correct = true;
      this.options[correctButton].answer = correctAnswer;
    },
    generateRandomNumber(min, max, except) {
      const rndNumber = Math.round(Math.random() * (max - min)) + min;
      if (rndNumber == except) {
        return this.generateRandomNumber(min, max, except);
      }
      return rndNumber;
    }
  },
  created() {
    this.generateQuestion();
  },
  components: { Option }
};
</script>

<style>
</style>