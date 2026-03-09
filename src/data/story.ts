import { Scene } from "../types/game";

export const STORY_DATA: Record<string, Scene> = {
  start: {
    id: "start",
    title: "The Rusty Gates",
    description: "You stand before the massive bronze gates of Aethelgard, the floating clockwork city. Steam hisses from hidden vents, and the smell of ozone fills the air. The path ahead is shrouded in golden mist.",
    imageUrl: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1000&auto=format&fit=crop",
    choices: [
      { text: "Examine the intricate lock mechanism", nextSceneId: "examine_lock", statChanges: { bravery: 1 } },
      { text: "Call out to the city guards", nextSceneId: "call_guards" },
      { text: "Search the nearby debris for tools", nextSceneId: "search_debris", givesItem: "Small Brass Key" }
    ]
  },
  examine_lock: {
    id: "examine_lock",
    title: "The Masterpiece Lock",
    description: "The lock is a work of art, featuring rotating celestial spheres. It seems to respond to warmth. As your hand nears, the gears click expectantly.",
    imageUrl: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?q=80&w=1000&auto=format&fit=crop",
    choices: [
      { text: "Try to pick it with your dagger", nextSceneId: "broken_lock", statChanges: { sanity: -5 } },
      { text: "Use the Brass Key", nextSceneId: "city_square", requiredItem: "Small Brass Key" },
      { text: "Go back to the gate", nextSceneId: "start" }
    ]
  },
  search_debris: {
    id: "search_debris",
    title: "Among the Ruins",
    description: "Underneath a pile of rusted cogs, you find a Small Brass Key. It pulses with a faint blue light.",
    imageUrl: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=1000&auto=format&fit=crop",
    choices: [
      { text: "Return to the gate with the key", nextSceneId: "start" }
    ]
  },
  call_guards: {
    id: "call_guards",
    title: "Silence from Above",
    description: "Your voice echoes through the metal canyons of the city, but only the sound of grinding gears answers. Suddenly, a mechanical owl swoops down, watching you with sapphire eyes.",
    imageUrl: "https://images.unsplash.com/photo-1501554728187-ce583db33af7?q=80&w=1000&auto=format&fit=crop",
    choices: [
      { text: "Follow the mechanical owl", nextSceneId: "hidden_passage", statChanges: { bravery: 5 } },
      { text: "Retreat in fear", nextSceneId: "start", statChanges: { sanity: -10 } }
    ]
  },
  city_square: {
    id: "city_square",
    title: "The Grand Plaza",
    description: "The gates swing open with a melodic chime. You step into a plaza paved with shimmering obsidian. In the center stands a fountain of liquid silver.",
    imageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1000&auto=format&fit=crop",
    choices: [
      { text: "Drink from the silver fountain", nextSceneId: "ascension_ending", statChanges: { bravery: 10 } },
      { text: "Investigate the Great Archive", nextSceneId: "archive" }
    ]
  },
  hidden_passage: {
    id: "hidden_passage",
    title: "The Steam Tunnels",
    description: "The owl leads you through a narrow vent into the belly of the city. Hissing pipes and glowing pressure gauges surround you. You feel the weight of the city above.",
    imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1000&auto=format&fit=crop",
    choices: [
      { text: "Push forward into the dark", nextSceneId: "city_square" },
      { text: "Try to find a map", nextSceneId: "search_debris", givesItem: "City Map" }
    ]
  },
  broken_lock: {
    id: "broken_lock",
    title: "A Costly Mistake",
    description: "The mechanism shrieks as your dagger snaps inside. A defensive alarm blares, and steam jets fill the air. You barely escape with your life.",
    imageUrl: "https://images.unsplash.com/photo-1533134486753-c833f0ed4866?q=80&w=1000&auto=format&fit=crop",
    choices: [
      { text: "Try to start over", nextSceneId: "start" }
    ]
  },
  ascension_ending: {
    id: "ascension_ending",
    title: "Ending: The New Architect",
    description: "As the silver liquid touches your lips, your mind expands. You see the clockwork of the universe. The city recognizes you as its new master. You have ascended.",
    imageUrl: "https://images.unsplash.com/photo-1464802686167-b939a6910659?q=80&w=1000&auto=format&fit=crop",
    choices: [
      { text: "Play Again", nextSceneId: "start" }
    ]
  }
};