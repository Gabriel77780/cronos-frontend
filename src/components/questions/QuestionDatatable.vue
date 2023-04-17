<template>
  <v-card class="h-100">
    <v-toolbar color="secondary-darken-1">
      <v-toolbar-title>Questions</v-toolbar-title>
    </v-toolbar>

    <v-table>
      <thead>
        <tr>
          <th class="text-left">Question</th>
          <th class="text-left">Answers</th>
          <th class="text-left">Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(question, index) in questions" :key="question.questionText">
          <td>{{ index + 1 + ') ' + question.questionText }}</td>
          <td>
            <div v-for="(answer, index) in question.answers" :key="answer.answerText">
              {{
                index === 0
                  ? 'A) ' + answer.answerText
                  : index === 1
                  ? 'B) ' + answer.answerText
                  : index === 2
                  ? 'C) ' + answer.answerText
                  : index === 3
                  ? 'D) ' + answer.answerText
                  : ''
              }}
              {{ answer.correctAnswer ? '*' : '' }}
            </div>
          </td>
          <td>
            <v-icon
              color="secondary-darken-1"
              @click="deleteQuestion(question.id)"
              icon="mdi-delete"
            ></v-icon>
          </td>
        </tr>
      </tbody>
    </v-table>
  </v-card>
</template>
<script>
import { useQuestionStore } from '../../store/question'
import { computed, onMounted } from 'vue'

export default {
  setup() {
    const questionStore = useQuestionStore()

    const questions = computed(() => questionStore.getQuestions)

    onMounted(() => questionStore.fetchQuestions())

    const deleteQuestion = async (questionId) => {
      await questionStore.deleteQuestion(questionId)
    }

    return {questionStore , questions ,deleteQuestion }
  },
  methods: {
    deleteQuestion: function(questionId){
      this.deleteQuestion(questionId)
    }
  }
}
</script>
