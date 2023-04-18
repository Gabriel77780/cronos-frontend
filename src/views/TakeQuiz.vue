<template>
  <v-row>
    <v-col cols="12" lg="12" xs="12">
      <!-- <h1>{{ quiz.quizName }}</h1> -->
      <Question
        v-if="currentQuestion"
        :question="currentQuestion.questionText"
        :answers="currentQuestion.answers"
        @answer-selected="handleAnswerSelected"
      />
    </v-col>
  </v-row>
</template>
  
  <script>
import { useQuizStore } from '../store/quiz'
import { computed, onMounted } from 'vue'
import Question from '../components/questions/Question.vue'

export default {
  components: {
    Question
  },
  setup() {
    const quizStore = useQuizStore()

    const quiz = computed(() => quizStore.getQuiz)
    const currentQuestion = computed(() => quizStore.getCurrentQuestion)

    onMounted(() => quizStore.fetchQuizById())

    function handleAnswerSelected(index) {
      setTimeout(() => {
        quizStore.displayNextQuestion()
      }, 1000)
    }

    return { quiz, currentQuestion, handleAnswerSelected }
  }
}
</script>
  