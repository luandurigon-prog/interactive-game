import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Scene } from "../../types/game";
import ChoiceButton from "./ChoiceButton";

interface SceneDisplayProps {
  scene: Scene;
  onChoice: (choiceIdx: number) => void;
  inventory: string[];
}

const SceneDisplay = ({ scene, onChoice, inventory }: SceneDisplayProps) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={scene.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="max-w-4xl mx-auto flex flex-col gap-8 pt-20 pb-12"
      >
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl">
            <img 
              src={scene.imageUrl} 
              alt={scene.title}
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
              <h2 className="text-3xl font-bold text-white tracking-tight">{scene.title}</h2>
            </div>
          </div>
        </div>

        <div className="bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border shadow-sm">
          <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300 first-letter:text-4xl first-letter:font-serif first-letter:mr-1">
            {scene.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {scene.choices.map((choice, idx) => {
            const isLocked = choice.requiredItem ? !inventory.includes(choice.requiredItem) : false;
            return (
              <ChoiceButton
                key={idx}
                text={choice.requiredItem && isLocked ? `[Requer ${choice.requiredItem}] ${choice.text}` : choice.text}
                onClick={() => onChoice(idx)}
                isLocked={isLocked}
              />
            );
          })}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default SceneDisplay;