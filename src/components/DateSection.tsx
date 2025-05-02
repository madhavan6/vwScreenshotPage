
import React from 'react';
import { GroupedData } from '@/data/mockData';
import EmployeeSection from '@/components/EmployeeSection';
import { format } from 'date-fns';

interface DateSectionProps {
  date: string;
  employeeData: GroupedData[string];
}

const DateSection: React.FC<DateSectionProps> = ({ date, employeeData }) => {
  const formattedDate = format(new Date(date), 'MMMM d, yyyy');
  
  return (
    <div className="mb-10">
      <div className="border-b-2 border-gray-300 pb-2 mb-4">
        <h2 className="text-xl font-bold">[Date: {formattedDate}]</h2>
      </div>
      
      {Object.keys(employeeData).map((employeeId) => (
        <EmployeeSection
          key={employeeId}
          employeeId={employeeId}
          screenshots={employeeData[employeeId]}
        />
      ))}
    </div>
  );
};

export default DateSection;
