import React, { useState } from 'react';

interface TabItem {
  label: string;
  content: React.ReactNode;
  icon?: React.ReactNode;
}

interface TabsProps {
  items: TabItem[];
}

export const Tabs: React.FC<TabsProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
      <div className="border-b border-slate-200 dark:border-slate-700">
        <nav className="-mb-px flex space-x-2" aria-label="Tabs">
          {items.map((item, index) => (
            <button
              key={item.label}
              onClick={() => setActiveIndex(index)}
              className={`whitespace-nowrap flex items-center py-3 px-4 rounded-t-lg border-x border-t font-medium text-sm transition-colors
                ${
                  activeIndex === index
                    ? 'bg-white dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 text-primary'
                    : 'border-transparent bg-slate-100 dark:bg-slate-800/20 text-slate-600 hover:bg-slate-200 hover:border-slate-200 dark:text-slate-300 dark:hover:bg-slate-700/50 dark:hover:border-slate-700'
                }`
              }
            >
              {item.icon}
              {item.label}
            </button>
          ))}
        </nav>
      </div>
      <div className="mt-6">
        {items[activeIndex] && items[activeIndex].content}
      </div>
    </div>
  );
};
