import React, { useState } from "react";
import { STORY_DATA } from "../data/story";
import { GameState } from "../types/game";
import StatsBar from "../components/game/StatsBar";
import SceneDisplay from "../components/game/SceneDisplay";
import { showSuccess } from "../utils/toast";
import { MadeWithDyad } from "@/components/made-with-dyad";

const Index = () => {
  const [state, setState] = useState<GameState>({
    currentSceneId: "start",
    inventory: [],
    stats: {
      sanity: 100,
      bravery: 0
    },
    history: []
  });

  const currentScene = STORY_DATA[state.currentSceneId];

  const handleChoice = (choiceIdx: number) => {
    const choice = currentScene.choices[choiceIdx];
    
    // Update Inventory
    const newInventory = [...state.inventory];
    if (choice.givesItem && !newInventory.includes(choice.givesItem)) {
      newInventory.push(choice.givesItem);
      showSuccess(`Obtained: ${choice.givesItem}`);
    }

    // Update Stats
    const newStats = { ...state.stats };
    if (choice.statChanges) {
      if (choice.statChanges.sanity) newStats.sanity += choice.statChanges.sanity;
      if (choice.statChanges.bravery) newStats.bravery += choice.statChanges.bravery;
    }

    setState(prev => ({
      ...prev,
      currentSceneId: choice.nextSceneId,
      inventory: newInventory,
      stats: newStats,
      history: [...prev.history, prev.currentSceneId]
    }));
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 px-4 md:px-8">
      <StatsBar 
        sanity={state.stats.sanity} 
        bravery={state.stats.bravery} 
        inventory={state.inventory} 
      />
      
      <main className="container mx-auto">
        <SceneDisplay 
          scene={currentScene} 
          onChoice={handleChoice} 
          inventory={state.inventory}
        />
      </main>

      <div className="fixed bottom-4 left-0 right-0">
        <MadeWithDyad />
      </div>
    </div>
  );
};

export default Index;