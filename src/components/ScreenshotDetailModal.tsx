import React from 'react';
import { Screenshot, getEmployeeNameById } from '@/data/mockData';
import ActivityProgressBar from '@/components/ActivityProgressBar';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { format } from 'date-fns';
import { Keyboard, Mouse } from 'lucide-react';

interface ScreenshotDetailModalProps {
  screenshot: Screenshot | null;
  isOpen: boolean;
  onClose: () => void;
}

const ScreenshotDetailModal: React.FC<ScreenshotDetailModalProps> = ({ 
  screenshot, 
  isOpen, 
  onClose 
}) => {
  if (!screenshot) return null;

  const formattedDate = format(new Date(screenshot.timestamp), 'MMMM d, yyyy h:mm a');
  const utcTime = new Date(screenshot.timestamp).toUTCString();
  const employeeName = getEmployeeNameById(screenshot.employeeId);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl">
        <DialogHeader className="mb-4">
          <DialogTitle className="text-xl font-bold">
            {employeeName} (ID: {screenshot.employeeId})
          </DialogTitle>
          <DialogDescription>{formattedDate}</DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left side: Screenshot */}
          <div className="flex items-center justify-center">
            <img 
              src={screenshot.imageUrl.replace('w=300&h=200', 'w=600&h=400')} 
              alt={`Screenshot from ${formattedDate}`}
              className="max-w-full h-auto rounded-md border border-gray-200 shadow-sm"
              style={{ maxHeight: '400px', objectFit: 'contain' }}
            />
          </div>

          {/* Right side: Details */}
          <div className="space-y-4 text-sm text-gray-700">
            {/* UTC Time */}
            <div>
              <span className="font-medium">UTC Time: </span>
              <span className="font-mono">{utcTime}</span>
            </div>

            {/* Click Data */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-3 rounded-md shadow-sm">
                <div className="flex items-center space-x-1 mb-1">
                  <Mouse className="h-4 w-4 text-gray-600" />
                  <span className="font-medium">Mouse Clicks:</span>
                </div>
                <span className="text-xl font-bold">{screenshot.mouseClicks}</span>
              </div>

              <div className="bg-gray-50 p-3 rounded-md shadow-sm">
                <div className="flex items-center space-x-1 mb-1">
                  <Keyboard className="h-4 w-4 text-gray-600" />
                  <span className="font-medium">Keyboard Clicks:</span>
                </div>
                <span className="text-xl font-bold">{screenshot.keyboardClicks}</span>
              </div>
            </div>

            {/* Activity Bar */}
            <div>
              <div className="flex justify-between items-center">
                <span className="font-medium">Activity Progress:</span>
                <span className="text-sm font-bold">{screenshot.activityScore}%</span>
              </div>
              <ActivityProgressBar score={screenshot.activityScore} />
            </div>

            {/* Additional Info */}
            <div className="bg-gray-100 p-4 rounded-md space-y-2">
            <div><span className="font-medium">Project ID:</span> {screenshot.projectId}</div>
            <div><span className="font-medium">Task ID:</span> {screenshot.taskId}</div>
              <div><span className="font-medium">Active Flag:</span> {screenshot.activeFlag ? 'Yes' : 'No'}</div>
              <div><span className="font-medium">Active Minutes:</span> {screenshot.activeMins} min</div>
              <div><span className="font-medium">Memo:</span> {screenshot.activeMemo || 'N/A'}</div>
              <div><span className="font-medium">Calc Timestamp:</span> {format(new Date(screenshot.calcTimeStamp), 'MMMM d, yyyy h:mm a')}</div>
              <div><span className="font-medium">UTC Calc Timestamp:</span> {new Date(screenshot.calcTimeStamp).toUTCString()}</div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ScreenshotDetailModal;
