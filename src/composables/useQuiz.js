// import { ref, onMounted } from 'vue'

// export function useQuiz() {
//   const quiz = ref(null)
//   const state = ref('loading')

//   async function fetchQuiz() {
//     try {
//       const response = await fetch('/quiz.json')
//       if (!response.ok) throw new Error('Erreur lors de la récupération')
//       console.log(response)
//       quiz.value = await response.json()
//       state.value = 'idle'
//     } catch (error) {
//       console.error(error)
//       state.value = 'error'
//     }
//   }

//   onMounted(fetchQuiz)

//   return { quiz, state }
// }
