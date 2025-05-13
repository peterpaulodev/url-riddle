<script setup>
  import { useRoute } from 'vue-router'
  import { ref, computed } from 'vue'

  // Pegando o ID da rota
  const route = useRoute()
  const id = route.params.id

  /* Lista -
    Joias 1 espelho
    Sapato 2 mala
    Quadro 3 estante-game
    Boina 4 penteadeira
    Caixa final 5 caixa de sapatos
  */

  const riddles = ref([
    {
      id: 'gift1',
      title: 'Presente 1 de 5',
      message: `O reflexo te mostra quem você é,
um lugar onde a verdade e a imagem se encontram.
um lugar que reflete a sua beleza.`,
      romanticNote: `💌 Às vezes, o reflexo não é apenas o que vemos, mas o que sentimos.
E cada vez que me vejo com você, vejo a melhor versão de nós.`
    },
    {
      id: 'gift2',
      title: 'Presente 2 de 5',
      message: `Ela é a menor das 3, mas pelo menos ela tem personalidade e cor. Vermelho cai bem demais nela.`,
      romanticNote: `💌 Simplesmente nós contra o mundo, espero usar muito ela com você ainda.`
    },
    {
      id: 'gift3',
      title: 'Presente 3 de 5',
      message: `Entre pixels e nostalgia, onde o tempo desacelera, uma época que não volta. -
      Talvez, quando eu estiver velho, isso custe uns cem mil reais.`,
      romanticNote: `💌 Eu amo - e estou ansioso por - cada uma de nossas "fases".`
    },
    {
      id: 'gift4',
      title: 'Presente 4 de 5',
      message: `Aqui você se sente mais linda, um acessório desbloquado, que talvez você nunca tenha pensado em usar antigamente. Hoje ele guarda mais do que imagina...`,
      romanticNote: `💌 Cada pequeno detalhe seu me encanta,
e até nos mistérios mais sutis, eu encontro algo novo para amar em você.`
    },
    {
      id: 'gift5',
      title: 'Presente 5 de 5 (O mais díficil de todos 🔥)',
      message: `Onde os passos seguem o caminho sem ser visto,
e cada par tem uma história pra contar.
Procure onde o tempo parece estar parado,
em um lugar onde poucos ousam olhar.`,
      romanticNote: `💌 Te amar é como uma caminhada tranquila no parque com um solzinho gostoso e som de reggae ao fundo. 🎵`
    }
  ])

  // Charada selecionada com base no ID
  const currentRiddle = computed(() => riddles.value.find((r) => r.id === id))

  // Emojis decorativos
  const decorations = ref([
  { char: '❓', top: '5%', left: '10%', opacity: 0.25, rotate: -10 },
  { char: '❓', top: '8%', left: '80%', opacity: 0.35, rotate: 12 },
  { char: '❤️', top: '15%', left: '30%', opacity: 0.3, rotate: 5 },
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
    class="relative min-h-screen bg-purple-200 px-6 py-10 flex flex-col items-center justify-center text-center overflow-hidden"
  >
    <div
      v-for="(item, index) in decorations"
      :key="index"
      class="absolute text-white text-3xl sm:text-3xl"
      :style="{
        top: item.top,
        left: item.left,
        opacity: item.opacity,
        transform: `rotate(${item.rotate}deg)`
      }"
    >
      {{ item.char }}
    </div>

    <div
      v-if="currentRiddle"
      class="z-10 w-full max-w-sm bg-white rounded-3xl shadow-xl p-6 space-y-4 text-center animate-slide-fade"
    >
      <h1 class="text-pink-700 text-xl font-bold">🗺️ {{ currentRiddle.title }}</h1>

      <p
        class="whitespace-pre-line text-gray-700 leading-relaxed"
        v-html="currentRiddle.message"
      ></p>

      <hr class="border-pink-200" />

      <p class="whitespace-pre-line text-pink-600 italic">
        {{ currentRiddle.romanticNote }}
      </p>
    </div>

    <div
      v-else
      class="z-10 max-w-sm bg-white rounded-3xl shadow-xl p-6 space-y-4 text-center animate-slide-fade"
    >
      <h1 class="text-pink-700 text-xl font-bold">Ops! 😢</h1>
      <p class="text-gray-700">Essa charada não foi encontrada.</p>
    </div>
  </div>
</template>

<style scoped>
  @keyframes slide-fade {
    0% {
      opacity: 0;
      transform: translateY(15px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-slide-fade {
    animation: slide-fade 0.5s ease-out;
  }
</style>
