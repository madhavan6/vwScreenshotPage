
import React from 'react';
import { Screenshot } from '@/data/mockData';
import { formatDistanceToNow } from 'date-fns';

interface ScreenshotThumbnailProps {
  screenshot: Screenshot;
  onClick: () => void;
}

const ScreenshotThumbnail: React.FC<ScreenshotThumbnailProps> = ({ screenshot, onClick }) => {
  const timeAgo = formatDistanceToNow(new Date(screenshot.timestamp), { addSuffix: true });

  // Convert timestamp to UTC time string like "14:30:05 UTC"
  const utcTime = new Date(screenshot.timestamp).toUTCString().split(' ')[4] + ' UTC';

  return (
    <div 
      className="cursor-pointer overflow-hidden rounded-md shadow-md hover:shadow-lg transition-shadow duration-200"
      onClick={onClick}
    >
      <div className="text-xs text-gray-600 text-center mb-1">
        Screenshot taken at: <span className="font-medium">{utcTime}</span>
      </div>
      <div className="relative">
        <img 
          src={screenshot.imageUrl}
          alt={`Screenshot at ${screenshot.timestamp}`}
          className="w-full h-36 object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gray-800 bg-opacity-70 text-white text-xs p-1">
          {timeAgo}
        </div>
      </div>
    </div>
  );
};

export default ScreenshotThumbnail;

