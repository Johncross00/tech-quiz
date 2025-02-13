<template>
  <div class="question">
    <h3>{{ question.question }}</h3>
    <ul>
      <li v-for="(option, index) in randomOptions" :key="option">
        <Answer :id="`answer${index}`" :value="option" @change="onAnswer" :disabled="hasAnswer"
          :correctAnswer="question.answer" v-model="answer"/>
      </li>
    </ul>
    <!-- Vous avez choisi: {{ answer }} -->
    <!-- <button :disabled="!hasAnswer" @click="emits('answer', answer)">Question suivante</button> -->
  </div>
</template>


<script setup>
import { shuffleArray } from '@/functions/array';
import { computed, onMounted, onUnmounted, ref, watch } from 'vue';
import Answer from './Answer.vue'

const props = defineProps( {
  question: Object
} )

const emits = defineEmits( [ 'answer' ] )
const answer = ref( null )
const hasAnswer = computed( () => answer.value !== null )
const randomOptions = computed( () => shuffleArray( props.question.options ) )

let timer
const onAnswer = ( ) =>
{
  clearTimeout( timer )
  timer = setTimeout( () =>
  {
    emits( 'answer', answer.value )
  }, 750 )
}

onMounted( () =>
{
  setTimeout( () =>
  {
    answer.value = ''
    onAnswer()
  }, 10000 )
} )

onUnmounted( () =>
{
  if ( timer ) clearTimeout( timer )
} )
</script>

<style>
.question {
  padding-top: 2rem;
}

.question button {
  margin-left: auto;
  display: block;
}
</style>
