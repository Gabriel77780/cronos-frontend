<template>
  <v-row>
    <v-col cols="12" lg="12" xs="12">
      <v-card class="h-100 pt-0 pb-0">
        <v-toolbar color="secondary-darken-1">
          <v-toolbar-title>Quiz</v-toolbar-title>
        </v-toolbar>

        <v-form>
          <v-card-text>
            <v-text-field color="secondary-darken-1">{{ question }}</v-text-field>

            <v-divider class="my-2"></v-divider>
            <div v-for="(answer, index) in answers" :key="index">
              <v-row>
                <v-col>
                  <v-btn
                    style="max-width: none"
                    @click="handleAnswerSelected(index)"
                    color="secondary-darken-1"
                    >{{ answer.answerText }}</v-btn
                  >
                </v-col>
              </v-row>
            </div>
          </v-card-text>
        </v-form>
      </v-card>
    </v-col>
  </v-row>
</template>
  
  <script>
import { useQuizStore } from '../../store/quiz'
import { computed, onMounted } from 'vue'

export default {
  data() {
    return {
      questionName: this.question.questionName
    }
  },
  setup() {
    const quizStore = useQuizStore()

    function handleAnswerSelected(index) {
      setTimeout(() => {
        quizStore.displayNextQuestion(index)
      }, 1000)
    }

    return { handleAnswerSelected }
  },
  props: {
    question: {
      type: String,
      required: true
    },
    answers: {
      type: Array,
      required: true
    }
  }
  //   methods: {
  //     handleAnswerSelected(index) {
  //       this.$emit('answer-selected', index)
  //     }
  //   }
}
</script>