<template>

<v-row>
    <v-col cols="6" lg="6" xs="12">
      <QuizzesForm/>
    </v-col>
    <v-col cols="12" lg="6" xs="12">
    <QuizzesDatatable/>
    </v-col>
  </v-row>
   
  </template>
  
  <script>
  import QuizzesForm from '../components/quizzes/QuizzesForm.vue'
  import QuizzesDatatable from '../components/quizzes/QuizzesDatatable.vue'
  import Question from '../components/questions/Question.vue';
  
  export default {
    components: {
      QuizzesForm,
      QuizzesDatatable,
      Question
    },
    data() {
      return {
        question: 'What is the capital of France?',
        answers: ['Paris', 'Berlin', 'Madrid', 'London']
      }
    },
    methods: {
      handleAnswerSelected(index) {
        // Handle the user's answer here
        // Clear the current question
        this.question = null;
        // Wait for a short delay to give the user time to see the answer
        setTimeout(() => {
          // Display a new question
          this.question = 'What is the capital of Spain?';
          this.answers = ['Barcelona', 'Madrid', 'Seville', 'Valencia'];
        }, 1000);
      }
    }
  }
  </script>
  