export interface Employee {
  id: string;
  name: string;
  screenshots: Screenshot[];
}

export interface Screenshot {
  id: string;
  employeeId: string;
  timestamp: string;
  imageUrl: string;
  mouseClicks: number;
  keyboardClicks: number;
  activityScore: number; // 0-100

  projectId: number;
  taskId: number;
  screenshotTimeStamp: string;
  calcTimeStamp: string;
  activeFlag: number;
  activeMins: number;
  activeMemo: string;
  thumbNailUrl?: string;
}

// Group by date, then by employee
export interface GroupedData {
  [date: string]: {
    [employeeId: string]: Screenshot[];
  };
}

// Mock data with screenshots for multiple employees across multiple days
export const mockEmployees: Employee[] = [
  {
    id: "EMP123",
    name: "John Doe",
    screenshots: []
  },
  {
    id: "EMP456",
    name: "Jane Smith",
    screenshots: []
  },
  {
    id: "EMP789",
    name: "Alex Johnson",
    screenshots: []
  }
];

  export const mockScreenshots: Screenshot[] = [
    {
      id: "scr1",
      employeeId: "EMP123",
      timestamp: "2025-05-01T09:15:00",
      imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=300&h=200",
      mouseClicks: 45,
      keyboardClicks: 120,
      activityScore: 85,
      projectId: 101,
      taskId: 501,
      screenshotTimeStamp: "2025-05-01T09:15:00",
      calcTimeStamp: "2025-05-01T09:20:00",
      activeFlag: 1,
      activeMins: 5,
      activeMemo: "Bug fixing",
      thumbNailUrl: "https://example.com/thumb1.jpg",
    },
    {
      id: "scr2",
      employeeId: "EMP123",
      timestamp: "2025-05-01T10:30:00",
      imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=300&h=200",
      mouseClicks: 32,
      keyboardClicks: 87,
      activityScore: 68,
      projectId: 101,
      taskId: 502,
      screenshotTimeStamp: "2025-05-01T10:30:00",
      calcTimeStamp: "2025-05-01T10:35:00",
      activeFlag: 1,
      activeMins: 5,
      activeMemo: "Code review",
    },
    {
      id: "scr3",
      employeeId: "EMP123",
      timestamp: "2025-05-01T11:45:00",
      imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=300&h=200",
      mouseClicks: 18,
      keyboardClicks: 42,
      activityScore: 35,
      projectId: 102,
      taskId: 503,
      screenshotTimeStamp: "2025-05-01T11:45:00",
      calcTimeStamp: "2025-05-01T11:50:00",
      activeFlag: 0,
      activeMins: 0,
      activeMemo: "Idle",
    },
    {
      id: "scr4",
      employeeId: "EMP456",
      timestamp: "2025-05-01T09:20:00",
      imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=300&h=200",
      mouseClicks: 56,
      keyboardClicks: 145,
      activityScore: 92,
      projectId: 201,
      taskId: 601,
      screenshotTimeStamp: "2025-05-01T09:20:00",
      calcTimeStamp: "2025-05-01T09:25:00",
      activeFlag: 1,
      activeMins: 5,
      activeMemo: "Documentation",
    },
    {
      id: "scr5",
      employeeId: "EMP456",
      timestamp: "2025-05-01T10:35:00",
      imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=300&h=200",
      mouseClicks: 38,
      keyboardClicks: 103,
      activityScore: 72,
      projectId: 201,
      taskId: 602,
      screenshotTimeStamp: "2025-05-01T10:35:00",
      calcTimeStamp: "2025-05-01T10:40:00",
      activeFlag: 1,
      activeMins: 5,
      activeMemo: "Team discussion",
    },
    {
      id: "scr6",
      employeeId: "EMP123",
      timestamp: "2025-05-02T09:10:00",
      imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=300&h=200",
      mouseClicks: 41,
      keyboardClicks: 110,
      activityScore: 78,
      projectId: 101,
      taskId: 501,
      screenshotTimeStamp: "2025-05-02T09:10:00",
      calcTimeStamp: "2025-05-02T09:15:00",
      activeFlag: 1,
      activeMins: 5,
      activeMemo: "Debugging",
    },
    {
      id: "scr7",
      employeeId: "EMP123",
      timestamp: "2025-05-02T10:25:00",
      imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=300&h=200",
      mouseClicks: 29,
      keyboardClicks: 95,
      activityScore: 64,
      projectId: 101,
      taskId: 504,
      screenshotTimeStamp: "2025-05-02T10:25:00",
      calcTimeStamp: "2025-05-02T10:30:00",
      activeFlag: 1,
      activeMins: 5,
      activeMemo: "Meeting notes",
    },
    {
      id: "scr8",
      employeeId: "EMP789",
      timestamp: "2025-05-02T09:05:00",
      imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=300&h=200",
      mouseClicks: 52,
      keyboardClicks: 131,
      activityScore: 89,
      projectId: 301,
      taskId: 701,
      screenshotTimeStamp: "2025-05-02T09:05:00",
      calcTimeStamp: "2025-05-02T09:10:00",
      activeFlag: 1,
      activeMins: 5,
      activeMemo: "DevOps",
    },
    {
      id: "scr9",
      employeeId: "EMP789",
      timestamp: "2025-05-02T10:20:00",
      imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=300&h=200",
      mouseClicks: 22,
      keyboardClicks: 57,
      activityScore: 43,
      projectId: 301,
      taskId: 702,
      screenshotTimeStamp: "2025-05-02T10:20:00",
      calcTimeStamp: "2025-05-02T10:25:00",
      activeFlag: 1,
      activeMins: 5,
      activeMemo: "Break",
    }
  ];
  

// Helper function to group screenshots by date and then by employee ID
export const groupScreenshotsByDateAndEmployee = (screenshots: Screenshot[]): GroupedData => {
  const grouped: GroupedData = {};
  
  screenshots.forEach(screenshot => {
    const date = new Date(screenshot.timestamp).toISOString().split('T')[0];
    
    if (!grouped[date]) {
      grouped[date] = {};
    }
    
    if (!grouped[date][screenshot.employeeId]) {
      grouped[date][screenshot.employeeId] = [];
    }
    
    grouped[date][screenshot.employeeId].push(screenshot);
  });
  
  Object.keys(grouped).forEach(date => {
    Object.keys(grouped[date]).forEach(employeeId => {
      grouped[date][employeeId].sort((a, b) => 
        new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
      );
    });
  });
  
  return grouped;
};

// Get employee name by ID
export const getEmployeeNameById = (id: string): string => {
  const employee = mockEmployees.find(emp => emp.id === id);
  return employee ? employee.name : 'Unknown Employee';
};

// Group the mock screenshots
export const groupedScreenshots = groupScreenshotsByDateAndEmployee(mockScreenshots);

// Get dates sorted in reverse chronological order (latest first)
export const sortedDates = Object.keys(groupedScreenshots).sort((a, b) => 
  new Date(b).getTime() - new Date(a).getTime()
);
