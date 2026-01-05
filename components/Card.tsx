import React from 'react';
import { Button } from './Button';
import { ArrowUpRight } from './Icons';

interface CardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  onLaunch?: () => void;
}

export const Card: React.FC<CardProps> = ({ title, children, className = '', onLaunch }) => {
  return (
    <div className={`bg-white dark:bg-slate-800/50 rounded-xl shadow-md ring-1 ring-slate-200 dark:ring-slate-700 transition-all duration-300 ease-in-out hover:ring-2 hover:ring-primary-400 hover:shadow-[0_0_30px_theme(colors.primary.400)] ${className}`}>
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">{title}</h2>
            {onLaunch && (
                <Button variant="ghost" onClick={onLaunch} className="!p-2 h-auto text-slate-400 hover:text-primary" aria-label={`${title} 앱 실행`}>
                    <ArrowUpRight className="w-5 h-5" />
                </Button>
            )}
        </div>
        <div className="text-slate-700 dark:text-slate-300">
          {children}
        </div>
      </div>
    </div>
  );
};
