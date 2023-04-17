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
                const response = await axios.get('https://cronos-backend-production.up.railway.app/api/questions')
                const questions = response.data
                this.questions = questions
            } catch (error) {
                console.error(error)
            }

        },
        async saveQuestion(question) {

            axios
                .post('https://cronos-backend-production.up.railway.app/api/questions/create', question)
                .then((response) => {

                })
                .catch((error) => {
                    console.error(error)
                })

            this.questions.push(question)
        },
        async deleteQuestion(questionId) {

            try {

                await axios.delete(`https://cronos-backend-production.up.railway.app/api/questions/${questionId}`);


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