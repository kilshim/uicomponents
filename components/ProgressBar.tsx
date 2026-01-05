
import React from 'react';

interface ProgressBarProps {
  progress: number; // 0 to 100
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  const clampedProgress = Math.max(0, Math.min(100, progress));

  return (
    <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5">
      <div
        className="bg-primary h-2.5 rounded-full transition-all duration-300 ease-out"
        style={{ width: `${clampedProgress}%` }}
      ></div>
    </div>
  );
};
