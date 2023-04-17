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
                const response = await axios.get('http://localhost:8080/api/questions')
                const questions = response.data
                this.questions = questions
            } catch (error) {
                console.error(error)
            }

        },
        async saveQuestion(question) {

            axios
                .post('http://localhost:8080/api/questions/create', question)
                .then((response) => {

                })
                .catch((error) => {
                    console.error(error)
                })

            this.questions.push(question)
        },
        async deleteQuestion(questionId) {

            try {

                await axios.delete(`http://localhost:8080/api/questions/${questionId}`);


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