import React, { useEffect, useState } from 'react';
import { GroupedData, sortedDates } from '@/data/mockData';
import DateSection from '@/components/DateSection';

interface ActivityTimelineProps {
  groupedData: GroupedData;
}

const ActivityTimeline: React.FC<ActivityTimelineProps> = ({ groupedData }) => {
  const [utcTime, setUtcTime] = useState<string>('');

  useEffect(() => {
    const updateUtcTime = () => {
      const now = new Date();
      const utcString = now.toUTCString(); // e.g., "Fri, 02 May 2025 09:15:00 GMT"
      setUtcTime(utcString);
    };

    updateUtcTime(); // Set initially
    const interval = setInterval(updateUtcTime, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="py-6">
      <div className="mb-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Employee Activity Timeline</h1>
        <div className="text-sm text-gray-600">
          <span className="font-medium">Current UTC Time:</span> {utcTime}
        </div>
      </div>

      {sortedDates.length > 0 ? (
        sortedDates.map((date) => (
          <DateSection
            key={date}
            date={date}
            employeeData={groupedData[date]}
          />
        ))
      ) : (
        <div className="text-center py-10">
          <p className="text-gray-500">No activity data available</p>
        </div>
      )}
    </div>
  );
};

export default ActivityTimeline;
