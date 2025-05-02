
import React, { useState } from 'react';
import { Screenshot, getEmployeeNameById } from '@/data/mockData';
import ScreenshotThumbnail from '@/components/ScreenshotThumbnail';
import ScreenshotDetailModal from '@/components/ScreenshotDetailModal';

interface EmployeeSectionProps {
  employeeId: string;
  screenshots: Screenshot[];
}

const EmployeeSection: React.FC<EmployeeSectionProps> = ({ employeeId, screenshots }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [selectedScreenshot, setSelectedScreenshot] = useState<Screenshot | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  
  const employeeName = getEmployeeNameById(employeeId);
  
  const handleScreenshotClick = (screenshot: Screenshot) => {
    setSelectedScreenshot(screenshot);
    setModalOpen(true);
  };
  
  const handleCloseModal = () => {
    setModalOpen(false);
  };
  
  return (
    <div className="mb-6">
      {/* Employee heading with toggle */}
      <div 
        className="flex items-center bg-gray-100 p-3 rounded-md cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <span className="mr-2 text-gray-500 transform transition-transform duration-200">
          {isExpanded ? '▼' : '▶'}
        </span>
        <h3 className="font-medium">
          Employee: {employeeName} (ID: {employeeId})
        </h3>
      </div>
      
      {/* Screenshots grid */}
      {isExpanded && (
        <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pl-6">
          {screenshots.map((screenshot) => (
            <ScreenshotThumbnail
              key={screenshot.id}
              screenshot={screenshot}
              onClick={() => handleScreenshotClick(screenshot)}
            />
          ))}
        </div>
      )}
      
      {/* Screenshot detail modal */}
      <ScreenshotDetailModal
        screenshot={selectedScreenshot}
        isOpen={modalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default EmployeeSection;
