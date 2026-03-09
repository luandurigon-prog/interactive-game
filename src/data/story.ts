import { Scene } from "../types/game";

export const STORY_DATA: Record<string, Scene> = {
  start: {
    id: "start",
    title: "Os Portões Enferrujados",
    description: "Você está diante dos imensos portões de bronze de Aethelgard, a cidade flutuante movida a engrenagens. O vapor sibila por aberturas escondidas, e o cheiro de ozônio preenche o ar. O caminho à frente está envolto em uma névoa dourada.",
    imageUrl: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1000&auto=format&fit=crop",
    choices: [
      { text: "Examinar o intrincado mecanismo da fechadura", nextSceneId: "examine_lock", statChanges: { bravery: 1 } },
      { text: "Chamar pelos guardas da cidade", nextSceneId: "call_guards" },
      { text: "Procurar ferramentas nos escombros próximos", nextSceneId: "search_debris", givesItem: "Chave Pequena de Latão" }
    ]
  },
  examine_lock: {
    id: "examine_lock",
    title: "A Fechadura Obra-Prima",
    description: "A fechadura é uma obra de arte, com esferas celestiais rotativas. Parece responder ao calor. Conforme sua mão se aproxima, as engrenagens estalam em expectativa.",
    imageUrl: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?q=80&w=1000&auto=format&fit=crop",
    choices: [
      { text: "Tentar forçá-la com sua adaga", nextSceneId: "broken_lock", statChanges: { sanity: -5 } },
      { text: "Usar a Chave de Latão", nextSceneId: "city_square", requiredItem: "Chave Pequena de Latão" },
      { text: "Voltar para o portão", nextSceneId: "start" }
    ]
  },
  search_debris: {
    id: "search_debris",
    title: "Entre as Ruínas",
    description: "Debaixo de uma pilha de engrenagens enferrujadas, você encontra uma Chave Pequena de Latão. Ela pulsa com uma fraca luz azul.",
    imageUrl: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=1000&auto=format&fit=crop",
    choices: [
      { text: "Retornar ao portão com a chave", nextSceneId: "start" }
    ]
  },
  call_guards: {
    id: "call_guards",
    title: "Silêncio Vindo do Alto",
    description: "Sua voz ecoa pelos cânions de metal da cidade, mas apenas o som de engrenagens rangendo responde. De repente, uma coruja mecânica mergulha, observando você com olhos de safira.",
    imageUrl: "https://images.unsplash.com/photo-1501554728187-ce583db33af7?q=80&w=1000&auto=format&fit=crop",
    choices: [
      { text: "Seguir a coruja mecânica", nextSceneId: "hidden_passage", statChanges: { bravery: 5 } },
      { text: "Recuar de medo", nextSceneId: "start", statChanges: { sanity: -10 } }
    ]
  },
  city_square: {
    id: "city_square",
    title: "A Grande Praça",
    description: "Os portões se abrem com um carrilhão melódico. Você entra em uma praça pavimentada com obsidiana cintilante. No centro, ergue-se uma fonte de prata líquida.",
    imageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1000&auto=format&fit=crop",
    choices: [
      { text: "Beber da fonte de prata", nextSceneId: "ascension_ending", statChanges: { bravery: 10 } },
      { text: "Investigar o Grande Arquivo", nextSceneId: "archive" }
    ]
  },
  hidden_passage: {
    id: "hidden_passage",
    title: "Os Túneis de Vapor",
    description: "A coruja leva você por uma pequena ventilação até as entranhas da cidade. Canos sibilantes e medidores de pressão brilhantes o cercam. Você sente o peso da cidade acima.",
    imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1000&auto=format&fit=crop",
    choices: [
      { text: "Seguir em frente na escuridão", nextSceneId: "city_square" },
      { text: "Tentar encontrar um mapa", nextSceneId: "search_debris", givesItem: "Mapa da Cidade" }
    ]
  },
  broken_lock: {
    id: "broken_lock",
    title: "Um Erro Caro",
    description: "O mecanismo grita enquanto sua adaga quebra lá dentro. Um alarme defensivo soa e jatos de vapor preenchem o ar. Você escapa por pouco com vida.",
    imageUrl: "https://images.unsplash.com/photo-1533134486753-c833f0ed4866?q=80&w=1000&auto=format&fit=crop",
    choices: [
      { text: "Tentar recomeçar", nextSceneId: "start" }
    ]
  },
  ascension_ending: {
    id: "ascension_ending",
    title: "Final: O Novo Arquiteto",
    description: "Assim que o líquido prateado toca seus lábios, sua mente se expande. Você vê a engrenagem do universo. A cidade reconhece você como seu novo mestre. Você ascendeu.",
    imageUrl: "https://images.unsplash.com/photo-1464802686167-b939a6910659?q=80&w=1000&auto=format&fit=crop",
    choices: [
      { text: "Jogar Novamente", nextSceneId: "start" }
    ]
  }
};