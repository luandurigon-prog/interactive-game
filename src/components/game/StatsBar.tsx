import React from "react";
import { Shield, Brain, Package } from "lucide-react";

interface StatsBarProps {
  sanity: number;
  bravery: number;
  inventory: string[];
}

const StatsBar = ({ sanity, bravery, inventory }: StatsBarProps) => {
  return (
    <div className="fixed top-0 left-0 right-0 p-4 bg-background/80 backdrop-blur-md border-b z-50 flex justify-between items-center shadow-sm">
      <div className="flex gap-6">
        <div className="flex items-center gap-2">
          <Brain className="text-purple-500 w-5 h-5" />
          <span className="font-semibold text-sm">Sanity: {sanity}%</span>
          <div className="w-24 h-2 bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full bg-purple-500 transition-all duration-500" 
              style={{ width: `${Math.max(0, Math.min(100, sanity))}%` }}
            />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Shield className="text-amber-500 w-5 h-5" />
          <span className="font-semibold text-sm">Bravery: {bravery}</span>
        </div>
      </div>
      
      <div className="flex items-center gap-3 overflow-x-auto max-w-[40%] px-2">
        <Package className="text-blue-500 w-5 h-5 shrink-0" />
        {inventory.length === 0 ? (
          <span className="text-xs text-muted-foreground">Empty Pockets</span>
        ) : (
          <div className="flex gap-2">
            {inventory.map((item, i) => (
              <span key={i} className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full border border-blue-200 whitespace-nowrap">
                {item}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default StatsBar;