
import React from 'react';

interface SliderProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
}

export const Slider: React.FC<SliderProps> = ({ value, onChange, min = 0, max = 100, step = 1 }) => {
  return (
    <input
      type="range"
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer"
      style={{
        background: `linear-gradient(to right, hsl(210, 40%, 50%) 0%, hsl(210, 40%, 50%) ${value}%, #e2e8f0 ${value}%, #e2e8f0 100%)`
      }}
    />
  );
};
