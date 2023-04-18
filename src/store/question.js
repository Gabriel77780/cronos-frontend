import axios from 'axios'
import { defineStore } from 'pinia'

export const useQuestionStore = defineStore('questions', {
    state: () => ({
        questions: []
    }),
    getters: {
        getQuestions: state => state.questions
    },
    actions: {
        async fetchQuestions() {

            try {
                const response = await axios.get(import.meta.env.VITE_BACKEND_API_URL + '/api/questions')
                const questions = response.data
                this.questions = questions
            } catch (error) {
                console.error(error)
            }

        },
        async saveQuestion(question) {

            axios
                .post(import.meta.env.VITE_BACKEND_API_URL + '/api/questions/create', question)
                .then((response) => {

                })
                .catch((error) => {
                    console.error(error)
                })

            this.questions.push(question)
        },
        async deleteQuestion(questionId) {

            try {

                await axios.delete(import.meta.env.VITE_BACKEND_API_URL + `/api/questions/${questionId}`);


            } catch (error) {

                console.log(error)

            }

            const index = this.questions.findIndex(question => question.id === questionId)

            if (index >= 0) {
                this.questions.splice(index, 1)
            }
        }
    }
})