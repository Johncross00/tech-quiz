<template>
  <div>
    <h1>RESULTAT</h1>
    <p>{{ hasWon ? quiz.success_message : quiz.failure_message }}</p>
    <p>Votre score est de : {{ score }}/{{ quiz.questions.length }}</p>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps( {
  quiz: Object,
  answers: Array
} );

const score = computed( () =>
  props.quiz.questions.reduce( ( acc, question, k ) =>
    question.answer === props.answers[ k ] ? acc + 1 : acc, 0 )
);

const hasWon = computed( () => score.value >= props.quiz.questions.length / 2 );
</script>
