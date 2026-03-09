import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ChevronRight, Lock } from "lucide-react";

interface ChoiceButtonProps {
  text: string;
  onClick: () => void;
  disabled?: boolean;
  isLocked?: boolean;
}

const ChoiceButton = ({ text, onClick, disabled, isLocked }: ChoiceButtonProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="w-full"
    >
      <Button
        variant={isLocked ? "outline" : "default"}
        className={`w-full justify-between h-auto py-4 px-6 text-left text-wrap ${isLocked ? "opacity-60 cursor-not-allowed" : "hover:bg-primary/90 shadow-lg"}`}
        onClick={isLocked ? undefined : onClick}
        disabled={disabled}
      >
        <span className="flex-1 font-medium">{text}</span>
        {isLocked ? <Lock className="ml-2 w-4 h-4" /> : <ChevronRight className="ml-2 w-4 h-4" />}
      </Button>
    </motion.div>
  );
};

export default ChoiceButton;