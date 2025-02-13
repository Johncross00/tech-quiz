<template>
  <h1>RESULTAT</h1>
  <p>
    {{ hasWon ? quiz.success_message : quiz.failure_message }}
  </p>
  <p>Votre score est de : {{ score }}/{{ quiz.questions.length }}</p>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  quiz: Object,
  answers: Array
})
const score = computed(()=>{
  return props.quiz.questions.reduce((acc, question, k)=>{
    if(question.answer === props.answers[k]){
      return acc + 1
    }
    return acc
  }, 0)
})

const hasWon = computed(()=> score.value >= props.quiz.questions.length / 2)
</script>
