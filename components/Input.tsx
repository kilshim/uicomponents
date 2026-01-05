
import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

export const Input: React.FC<InputProps> = ({ error, ...props }) => {
  const baseClasses = "block w-full rounded-md shadow-sm sm:text-sm";
  const borderClasses = error 
    ? "border-pink-500 text-pink-600 placeholder-pink-300 focus:ring-pink-500 focus:border-pink-500"
    : "border-slate-300 dark:border-slate-600 dark:bg-slate-800 focus:ring-primary focus:border-primary";
  const disabledClasses = "disabled:bg-slate-100 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none dark:disabled:bg-slate-700 dark:disabled:text-slate-400";
  
  return (
    <div>
      <input
        className={`${baseClasses} ${borderClasses} ${disabledClasses}`}
        {...props}
      />
      {error && <p className="mt-2 text-sm text-pink-600">{error}</p>}
    </div>
  );
};
