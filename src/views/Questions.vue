<template>
  <v-row>
    <v-col cols="12" lg="6" xs="12">
      <QuestionForm></QuestionForm>
    </v-col>
    <v-col cols="12" lg="6" xs="12">
      <QuestionDatatable></QuestionDatatable>
    </v-col>
  </v-row>
</template>

<script>
import QuestionForm from '../components/questions/QuestionForm.vue'
import QuestionDatatable from '../components/questions/QuestionDatatable.vue'

export default {
  components: {
    QuestionForm,
    QuestionDatatable
  }
}
</script>