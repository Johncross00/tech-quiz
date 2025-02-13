<template>
<dvi class="question">
  <h3>{{ question.question }}</h3>
  <ul>
    <li v-for="(option, index) in randomOptions" :key="option">
      <label :for="`answer${index}`">
        <input type="radio" name="answer" :id="`answer${index}`" :value="option" v-model="answer" :required/>
        {{ option }}
      </label>
    </li>
  </ul>
  Vous avez choisi: {{ answer }}
  <button :disabled="!hasAnswer" @click="emits('answer', answer)">Question suivante</button>
</dvi>
</template>


<script setup>
import { shuffleArray } from '@/functions/array';
import { computed, ref, watch } from 'vue';

const props = defineProps({
  question: Object
})

const emits = defineEmits(['answer'])
const answer = ref(null)
const hasAnswer = computed(() => answer.value !== null)
const randomOptions = computed(()=> shuffleArray(props.question.options))

</script>

<style>
.question{
  padding-top: 2rem;
}
.question button{
  margin-left: auto;
  display: block;
}
</style>
