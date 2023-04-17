<template>
  <v-card class="h-100 pt-0 pb-0">
    <v-toolbar color="secondary-darken-1">
      <v-toolbar-title>Add a Question</v-toolbar-title>
    </v-toolbar>

    <v-form @submit.prevent="submitForm">
      <v-card-text>
        <v-text-field
          v-model="questionText"
          variant="filled"
          label="Question"
          color="secondary-darken-1"
        ></v-text-field>

        <v-divider class="my-2"></v-divider>

        <v-row>
          <v-col>
            <v-textarea
              v-model="answerText1"
              label="Answer 1"
              color="secondary-darken-1"
            ></v-textarea>
            <v-checkbox
              @click="onCheckboxClick('correctAnswer1')"
              v-model="checkboxValues.correctAnswer1"
              label="correct answer?"
              color="secondary-darken-1"
            ></v-checkbox>
          </v-col>
          <v-col>
            <v-textarea
              v-model="answerText2"
              color="secondary-darken-1"
              label="Answer 2"
            ></v-textarea>
            <v-checkbox
              @click="onCheckboxClick('correctAnswer2')"
              v-model="checkboxValues.correctAnswer2"
              label="correct answer?"
              color="secondary-darken-1"
            ></v-checkbox>
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <v-textarea
              v-model="answerText3"
              label="Answer 3"
              color="secondary-darken-1"
            ></v-textarea>
            <v-checkbox
              @click="onCheckboxClick('correctAnswer3')"
              v-model="checkboxValues.correctAnswer3"
              label="correct answer?"
              color="secondary-darken-1"
            ></v-checkbox>
          </v-col>
          <v-col>
            <v-textarea
              v-model="answerText4"
              label="Answer 4"
              color="secondary-darken-1"
            ></v-textarea>
            <v-checkbox
              @click="onCheckboxClick('correctAnswer4')"
              v-model="checkboxValues.correctAnswer4"
              label="correct answer?"
              color="secondary-darken-1"
            ></v-checkbox>
          </v-col>
        </v-row>
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
import { useQuestionStore } from '../../store/question'

export default {
  setup() {
    const questionStore = useQuestionStore()

    const saveQuestion = async (question) => {
      await questionStore.saveQuestion(question)
    }

    return { questionStore, saveQuestion }
  },

  data: function () {
    return {
      questionText: '',
      category: '',
      subcategory: '',
      answerText1: '',
      answerText2: '',
      answerText3: '',
      answerText4: '',
      // categories: [],
      // subcategories: [],
      checkboxValues: {
        correctAnswer1: false,
        correctAnswer2: false,
        correctAnswer3: false,
        correctAnswer4: false
      },
      checkedCheckbox: null,
      successMessage: '',
      category: 'Test',
      subcategory: 'Test'
    }
  },
  computed: {
    formData() {
      return {
        questionText: this.questionText,
        category: {
          name: this.category,
          subcategory: {
            name: this.subcategory
          }
        },
        answers: [
          { answerText: this.answerText1, correctAnswer: this.checkboxValues.correctAnswer1 },
          { answerText: this.answerText2, correctAnswer: this.checkboxValues.correctAnswer2 },
          { answerText: this.answerText3, correctAnswer: this.checkboxValues.correctAnswer3 },
          { answerText: this.answerText4, correctAnswer: this.checkboxValues.correctAnswer4 }
        ]
      }
    }
  },
  methods: {
    submitForm: function () {
      this.saveQuestion(this.formData)
    },
    onCheckboxClick(checkboxName) {
      if (this.checkedCheckbox === checkboxName) {
        this.checkedCheckbox = null
        this.checkboxValues[checkboxName] = false
      } else {
        if (this.checkedCheckbox) {
          this.checkboxValues[this.checkedCheckbox] = false
        }

        this.checkedCheckbox = checkboxName
        this.checkboxValues[checkboxName] = true
      }
    }
    // loadCategories: function () {

    //   axios.get('/api/categories')
    //     .then((response) => {``
    //       this.categories = response.data;
    //     })
    //     .catch((error) => {
    //       console.error(error);
    //     });
    // },
    // loadSubcategories: function () {

    //   axios.get('/api/subcategories', {
    //     params: {
    //       category: this.category
    //     }
    //   })
    //     .then((response) => {
    //       this.subcategories = response.data;
    //     })
    //     .catch((error) => {
    //       console.error(error);
    //     });
    // }
  },
  mounted: function () {
    //this.loadCategories();
  },
  watch: {
    // category: function (newVal, oldVal) {
    //   this.subcategory = '';
    //   this.subcategories = [];
    //   if (newVal) {
    //     this.loadSubcategories();
    //   }
    // }
  }
}
</script>