export interface Choice {
  text: string;
  nextSceneId: string;
  requiredItem?: string;
  givesItem?: string;
  statChanges?: {
    sanity?: number;
    bravery?: number;
  };
}

export interface Scene {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  choices: Choice[];
}

export interface GameState {
  currentSceneId: string;
  inventory: string[];
  stats: {
    sanity: number;
    bravery: number;
  };
  history: string[];
}