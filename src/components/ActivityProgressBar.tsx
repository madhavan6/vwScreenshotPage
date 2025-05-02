
import React from 'react';
import { cn } from '@/lib/utils';

interface ActivityProgressBarProps {
  score: number; // 0-100
  className?: string;
}

const ActivityProgressBar: React.FC<ActivityProgressBarProps> = ({ score, className }) => {
  // Determine color based on score
  const getColorClass = () => {
    if (score < 40) return 'bg-red-500'; // Low activity
    if (score < 70) return 'bg-yellow-400'; // Medium activity
    return 'bg-green-500'; // High activity
  };
  
  return (
    <div className={cn("w-full bg-gray-200 rounded-full h-2.5", className)}>
      <div 
        className={`h-2.5 rounded-full ${getColorClass()}`}
        style={{ width: `${score}%` }}
      />
    </div>
  );
};

export default ActivityProgressBar;
