<template>
    <v-card class="h-100 pt-0 pb-0">
    <v-toolbar color="secondary-darken-1">
      <v-toolbar-title>Add a Quiz</v-toolbar-title>
    </v-toolbar>

    <v-form @submit.prevent="submitForm">
      <v-card-text>
        <v-text-field
          v-model="quizName"
          variant="filled"
          label="Quiz name"
          color="secondary-darken-1"
        ></v-text-field>

      </v-card-text>

      <v-divider class="my-2"></v-divider>

      <v-card-actions>
        <v-divider class="my-2"></v-divider>
        <v-btn type="submit" block color="secondary-darken-1"> Save </v-btn>
      </v-card-actions>
    </v-form>
    <v-divider class="my-2"></v-divider>
  </v-card>
</template>
<script>
import { useQuizStore } from '../../store/quiz'

export default {
  setup() {

    const quizStore = useQuizStore()

    const saveQuiz = async (quiz) => {
      await quizStore.saveQuiz(quiz)
    }

    return { quizStore, saveQuiz }
  },

  data: function () {
    return {
        quizName: ''
    }
  },
  computed: {
    formData() {
      return {
        quizName: this.quizName,
      }
    }
  },
  methods: {
    submitForm: function () {
      this.saveQuiz(this.formData)
    },
    
  }
}
</script>