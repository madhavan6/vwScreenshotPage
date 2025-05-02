
import React from 'react';
import ActivityTimeline from '@/components/ActivityTimeline';
import { groupedScreenshots } from '@/data/mockData';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-900">VerifiedWork</h1>
            <div className="text-sm text-gray-500">
              Employee Monitoring Dashboard
            </div>
          </div>
        </header>
        
        <main>
          <ActivityTimeline groupedData={groupedScreenshots} />
        </main>
        
        <footer className="py-6 border-t border-gray-200">
          <div className="text-center text-sm text-gray-500">
            ActivityEye © {new Date().getFullYear()} | Employee Monitoring System
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
