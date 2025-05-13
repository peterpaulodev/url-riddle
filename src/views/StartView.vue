<script setup>
  import { useRouter } from 'vue-router'
  import { ref } from 'vue'

  const router = useRouter()

  const startGame = () => {
    router.push('/riddle/gift1')
  }

  const decorations = ref([
    { char: '❓', top: '5%', left: '10%', opacity: 0.25, rotate: -10 },
    { char: '❤️', top: '8%', left: '80%', opacity: 0.35, rotate: 12 },
    { char: '❓', top: '15%', left: '30%', opacity: 0.3, rotate: 5 },
    { char: '❤️', top: '18%', left: '65%', opacity: 0.4, rotate: -8 },
    { char: '❓', top: '25%', left: '20%', opacity: 0.2, rotate: 0 },
    { char: '❤️', top: '30%', left: '75%', opacity: 0.3, rotate: 15 },
    { char: '❓', top: '38%', left: '45%', opacity: 0.3, rotate: -3 },
    { char: '❤️', top: '45%', left: '85%', opacity: 0.4, rotate: 7 },
    { char: '❓', top: '50%', left: '15%', opacity: 0.25, rotate: 10 },
    { char: '❤️', top: '55%', left: '50%', opacity: 0.35, rotate: -15 },
    { char: '❓', top: '60%', left: '35%', opacity: 0.2, rotate: 4 },
    { char: '❤️', top: '65%', left: '90%', opacity: 0.3, rotate: -6 },
    { char: '❓', top: '70%', left: '5%', opacity: 0.3, rotate: 2 },
    { char: '❤️', top: '75%', left: '60%', opacity: 0.4, rotate: 11 },
    { char: '❓', top: '80%', left: '25%', opacity: 0.2, rotate: -5 },
    { char: '❤️', top: '85%', left: '40%', opacity: 0.35, rotate: 6 },
    { char: '❓', top: '90%', left: '70%', opacity: 0.2, rotate: 3 },
    { char: '❤️', top: '93%', left: '10%', opacity: 0.3, rotate: -12 },
    { char: '❓', top: '95%', left: '50%', opacity: 0.2, rotate: 8 }
  ])
</script>

<template>
  <div
    class="relative min-h-screen bg-purple-100 px-6 py-10 flex flex-col items-center justify-center text-center overflow-hidden"
  >
    <!-- Fundo decorativo com interrogações e corações -->
    <span
      v-for="(item, i) in decorations"
      :key="i"
      class="absolute text-3xl sm:text-4xl md:text-5xl"
      :style="{
        top: item.top,
        left: item.left,
        opacity: item.opacity,
        transform: `rotate(${item.rotate}deg)`,
        pointerEvents: 'none'
      }"
    >
      {{ item.char }}
    </span>

    <!-- Conteúdo principal -->
    <div class="z-10 w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 space-y-6">
      <h1 class="text-2xl sm:text-3xl font-bold text-pink-700">✨ Feliz Aniversário ✨</h1>

      <p class="text-gray-700 leading-relaxed">
        Espalhei pela casa algumas charadas para você decifrar. Em cada lugar, uma surpresa, um
        carinho e mais uma pista para o próximo presente.
      </p>

      <p class="text-pink-500 italic">
        Vai ser como uma caça ao tesouro — só que com amor em cada pedacinho. 💖
      </p>

      <button
        @click="startGame"
        class="bg-pink-600 hover:bg-pink-700 text-white font-bold py-4 px-6 w-full rounded-xl text-lg shadow-md transition"
      >
        💌 Estou preparada...
      </button>
    </div>
  </div>
</template>
