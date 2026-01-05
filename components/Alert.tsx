
import React from 'react';
import { Info, CheckCircle, AlertTriangle, XCircle } from './Icons';

type AlertVariant = 'info' | 'success' | 'warning' | 'danger';

interface AlertProps {
  variant?: AlertVariant;
  message: string;
}

const variantConfig = {
  info: {
    bg: 'bg-blue-100 dark:bg-blue-900/30',
    text: 'text-blue-800 dark:text-blue-300',
    icon: <Info className="h-5 w-5 text-blue-500" />,
  },
  success: {
    bg: 'bg-green-100 dark:bg-green-900/30',
    text: 'text-green-800 dark:text-green-300',
    icon: <CheckCircle className="h-5 w-5 text-green-500" />,
  },
  warning: {
    bg: 'bg-yellow-100 dark:bg-yellow-900/30',
    text: 'text-yellow-800 dark:text-yellow-300',
    icon: <AlertTriangle className="h-5 w-5 text-yellow-500" />,
  },
  danger: {
    bg: 'bg-red-100 dark:bg-red-900/30',
    text: 'text-red-800 dark:text-red-300',
    icon: <XCircle className="h-5 w-5 text-red-500" />,
  },
};

export const Alert: React.FC<AlertProps> = ({ variant = 'info', message }) => {
  const config = variantConfig[variant];
  return (
    <div className={`rounded-md p-4 ${config.bg}`}>
      <div className="flex">
        <div className="flex-shrink-0">{config.icon}</div>
        <div className="ml-3">
          <p className={`text-sm font-medium ${config.text}`}>{message}</p>
        </div>
      </div>
    </div>
  );
};
