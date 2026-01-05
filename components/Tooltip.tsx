
import React from 'react';

interface TooltipProps {
  text: string;
  children: React.ReactNode;
}

export const Tooltip: React.FC<TooltipProps> = ({ text, children }) => {
  return (
    <div className="relative group">
      {children}
      <div className="absolute bottom-full mb-2 w-max max-w-xs left-1/2 -translate-x-1/2 
        invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-opacity duration-300
        bg-slate-800 text-white text-sm rounded-md px-3 py-1.5 shadow-lg">
        {text}
        <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-x-4 border-x-transparent border-t-4 border-t-slate-800"></div>
      </div>
    </div>
  );
};
