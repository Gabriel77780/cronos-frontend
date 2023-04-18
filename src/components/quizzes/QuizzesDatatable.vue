<template>
  <v-card class="h-100">
    <v-toolbar color="secondary-darken-1">
      <v-toolbar-title>Quizzes</v-toolbar-title>
    </v-toolbar>

    <v-table>
      <thead>
        <tr>
          <th class="text-left">Question</th>
          <th class="text-left">Add Questions</th>
          <th class="text-left">Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(quiz, index) in quizzes" :key="quiz.id">
          <td>{{ index + 1 + ') ' + quiz.quizName }}</td>
          <td>
            <v-icon
              color="secondary-darken-1"
              @click="addQuestionsToQuiz(quiz.id)"
              icon="mdi-update"
            ></v-icon>
          </td>
          <td>
            <v-icon
              color="secondary-darken-1"
              @click="deleteQuiz(quiz.id)"
              icon="mdi-delete"
            ></v-icon>
          </td>
        </tr>
      </tbody>
    </v-table>
  </v-card>
</template>
  <script>
import { useQuizStore } from '../../store/quiz'
import { computed, onMounted } from 'vue'

export default {
  setup() {
    const quizStore = useQuizStore()

    const quizzes = computed(() => quizStore.getQuizzes)

    onMounted(() => quizStore.fetchQuizzes())

    return { quizStore, quizzes }
  },
  methods: {
    addQuestionsToQuiz: function (quizId) {
      useQuizStore().selectedQuizId = quizId
      this.$router.push({ name: 'TakeQuiz' })
    },
    deleteQuiz: function (quizId) {}
  }
}
</script>
  