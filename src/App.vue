<script setup>
import { ref, onMounted } from 'vue'
import Quiz from './components/Quiz.vue';

const quiz = ref( null )
const state = ref( 'loading' )
onMounted( async () =>
{
  try
  {
    const response = await fetch( '/quiz.json' );
    if ( !response.ok ) throw new Error( 'Erreur lors de la récupération' );
    console.log( response )
    quiz.value = await response.json();
    state.value = 'idle';
  } catch ( error )
  {
    console.error( error );
    state.value = 'error';
  }
} )
</script>

<template>
  <div class="container">
    <p v-if="state === 'error'">Impossible de charger le questionnaire</p>
    <div :aria-busy="state === 'loading'">
      <span>Chargement en cours...</span>
      <Quiz :quiz="quiz" v-if="quiz" />
    </div>
  </div>


</template>

<style scoped>
.container {
  margin-top: 2rem;
}

header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
