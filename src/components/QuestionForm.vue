<template>
  <form>
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Email address</label>
      <input
        type="email"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
      />
      <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1" />
    </div>
    <div class="mb-3 form-check">
      <input type="checkbox" class="form-check-input" id="exampleCheck1" />
      <label class="form-check-label" for="exampleCheck1">Check me out</label>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</template>

<script>
import axios from 'axios'

export default {
  data: function () {
    return {
      questionText: '',
      category: '',
      subcategory: '',
      answer1: '',
      answer2: '',
      answer3: '',
      answer4: '',
      // categories: [],
      // subcategories: [],
      successMessage: ''
    }
  },
  methods: {
    submitForm: function () {
      var formData = {
        questionText: this.questionText,
        category: this.category,
        //subcategory: this.subcategory,
        answers: [
          { text: this.answer1, correct: false },
          { text: this.answer2, correct: false },
          { text: this.answer3, correct: false },
          { text: this.answer4, correct: false }
        ]
      }

      axios
        .post('http://localhost:8080/api/questions', formData)
        .then((response) => {
          this.successMessage = 'Question saved successfully!'
        })
        .catch((error) => {
          console.error(error)
        })
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
  }
  // watch: {
  //   category: function (newVal, oldVal) {

  //     this.subcategory = '';
  //     this.subcategories = [];
  //     if (newVal) {
  //       this.loadSubcategories();
  //     }
  //   }
  // }
}
</script>