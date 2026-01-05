
import React from 'react';

interface RadioOption {
  label: string;
  value: string;
  disabled?: boolean;
}

interface RadioGroupProps {
  name: string;
  options: RadioOption[];
  selectedValue: string;
  onChange: (value: string) => void;
}

export const RadioGroup: React.FC<RadioGroupProps> = ({ name, options, selectedValue, onChange }) => {
  return (
    <fieldset>
      <div className="space-y-4">
        {options.map((option) => (
          <div key={option.value} className="flex items-center">
            <input
              id={`${name}-${option.value}`}
              name={name}
              type="radio"
              value={option.value}
              checked={selectedValue === option.value}
              onChange={(e) => onChange(e.target.value)}
              disabled={option.disabled}
              className="h-4 w-4 text-primary border-slate-300 focus:ring-primary disabled:opacity-50"
            />
            <label
              htmlFor={`${name}-${option.value}`}
              className={`ml-3 block text-sm font-medium ${option.disabled ? 'text-slate-400 dark:text-slate-500' : 'text-slate-700 dark:text-slate-300'}`}
            >
              {option.label}
            </label>
          </div>
        ))}
      </div>
    </fieldset>
  );
};
