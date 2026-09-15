export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  category: 'Embedded Systems' | 'Automotive & EV' | 'AI & Software';
  description: string;
  mediaType: 'image' | 'pdf';
  filePath: string;
  credentialUrl?: string;
  skills: string[];
}

export const certificatesData: Certificate[] = [
  {
    id: 'embedded-cpp-cert',
    title: 'Embedded Systems & Modern C++ Track',
    issuer: 'Robotics Corner Academy',
    issueDate: '2025',
    category: 'Embedded Systems',
    description: 'Comprehensive specialization covering Modern C++, embedded peripherals, RTOS architecture, memory management, and deterministic low-level hardware control.',
    mediaType: 'pdf',
    filePath: '/certificates/Embedded c++.pdf',
    skills: ['Modern C++', 'Embedded C', 'FreeRTOS', 'Microcontrollers', 'Bare-Metal Drivers']
  },
  {
    id: 'asu-ev-racing-cert',
    title: 'Formula Student EV Powertrain Academy',
    issuer: 'ASU Racing Team (Ain Shams University)',
    issueDate: '2024',
    category: 'Automotive & EV',
    description: 'Advanced technical curriculum on electric vehicle accumulators, high-voltage battery safety, BMS topology, cell thermal modeling, and powertrain integration.',
    mediaType: 'image',
    filePath: '/certificates/Race.jpeg',
    skills: ['EV Powertrain', 'BMS Systems', 'Battery Safety', 'MATLAB Modeling', 'Cell Interconnects']
  },
  {
    id: 'gb-academy-automotive-cert',
    title: 'Automotive Mechanical Advanced Trainee',
    issuer: 'GB Academy (Ghabbour Auto)',
    issueDate: '08/2024 - 09/2024',
    category: 'Automotive & EV',
    description: 'Rigorous hands-on automotive engineering training covering internal combustion engines, transmission mechanics, steering linkages, and advanced hydraulic braking systems.',
    mediaType: 'image',
    filePath: '/certificates/Ghab.jpeg',
    skills: ['Engine Dynamics', 'Transmission Systems', 'Hydraulic Braking', 'Diagnostics', 'Mechanical Assemblies']
  },
  {
    id: 'automotive-key-components-cert',
    title: 'Automotive Components & Mechanical Systems',
    issuer: 'GB Academy Practical Trainee Program',
    issueDate: '2024',
    category: 'Automotive & EV',
    description: 'Practical workshop credential demonstrating physical teardown, tolerance inspection, and fault analysis on automotive mechanical power transmission components.',
    mediaType: 'image',
    filePath: '/certificates/car_ma.jpeg',
    skills: ['Component Tolerancing', 'Power Transmission', 'Chassis Systems', 'Practical Mechanical Assembly']
  },
  {
    id: 'machine-learning-cert',
    title: 'Machine Learning & Applied Intelligent Algorithms',
    issuer: 'StepsTowardsProgress',
    issueDate: '2024',
    category: 'AI & Software',
    description: 'In-depth program on machine learning foundations, feature engineering, classification models, regression, and data-driven pattern recognition for engineering datasets.',
    mediaType: 'image',
    filePath: '/certificates/mcle.jpeg',
    skills: ['Machine Learning', 'Python', 'Feature Engineering', 'Pattern Recognition', 'NumPy / Scikit-Learn']
  }
];
