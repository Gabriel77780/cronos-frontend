import axios from 'axios'
import { defineStore } from 'pinia'

export const useQuizStore = defineStore('quizzes', {
    state: () => ({
        quiz: {
            quizName: '',
            questions: []
        },
        quizzes: [],
        selectedQuizId: null,
        currentQuestionIndex: 0
    }),
    getters: {
        getQuizzes: state => state.quizzes,
        getQuiz: state => state.quiz,
        getCurrentQuestion: (state) =>
            state.quiz.questions[state.currentQuestionIndex]
    },

    actions: {
        async fetchQuizzes() {

            try {
                const response = await axios.get(import.meta.env.VITE_BACKEND_API_URL + '/api/quizzes')
                const quizzes = response.data
                this.quizzes = quizzes
            } catch (error) {
                console.error(error)
            }

        },
        async fetchQuizById() {

            try {
                const response = await axios.get(import.meta.env.VITE_BACKEND_API_URL + `/api/quizzes/${this.selectedQuizId}`)
                const quizzes = response.data
                this.quiz = quizzes
            } catch (error) {
                console.error(error)
            }

        },
        async saveQuiz(quiz) {

            axios
                .post(import.meta.env.VITE_BACKEND_API_URL + '/api/quizzes/create', quiz)
                .then((response) => {

                })
                .catch((error) => {
                    console.error(error)
                })

            this.quizzes.push(quiz)
        },
        async deleteQuestion(quizId) {

            try {

                await axios.delete(import.meta.env.VITE_BACKEND_API_URL + `/api/quizzes/${quizId}`);


            } catch (error) {

                console.log(error)

            }

            const index = this.quizzes.findIndex(quiz => quiz.id === quizId)

            if (index >= 0) {
                this.quizzes.splice(index, 1)
            }
        },
        displayNextQuestion(index) {

            const currentQuestion = this.quiz.questions[this.currentQuestionIndex]

            if (currentQuestion.answers[index].correctAnswer) {
                alert('Respuesta correcta')
            } else {
                alert('Respuesta incorrecta')
            }

            this.currentQuestionIndex++
        },
        clearCurrentQuestion() {
            this.currentQuestionIndex = null
        }
    }
})