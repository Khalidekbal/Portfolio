export interface SkillCategory {
  title: string;
  subtitle: string;
  iconName: 'Wrench' | 'Cpu' | 'Code' | 'Activity';
  badgeColor: string;
  skills: {
    name: string;
    level: string; // e.g., "Advanced", "Proficient", "Core"
    highlight?: boolean;
  }[];
}

export const skillsData: SkillCategory[] = [
  {
    title: 'Mechanical & CAD',
    subtitle: 'Structural modeling, kinematic assemblies, and additive prototyping',
    iconName: 'Wrench',
    badgeColor: 'border-cyan-500/30 text-cyan-300 bg-cyan-500/10',
    skills: [
      { name: 'SolidWorks (CSWA Level)', level: 'Advanced', highlight: true },
      { name: 'Autodesk Inventor', level: 'Proficient' },
      { name: 'Autodesk Fusion 360', level: 'Proficient' },
      { name: '3D Prototyping & DFM', level: 'Expert (1000+ hrs)', highlight: true },
      { name: 'Finite Element Analysis (FEA)', level: 'Proficient' },
      { name: 'Ansys Mechanical', level: 'Intermediate' },
      { name: 'Actuator Sizing & Linkages', level: 'Advanced' },
      { name: 'Tolerance & GD&T', level: 'Proficient' }
    ]
  },
  {
    title: 'Robotics & Embedded Systems',
    subtitle: 'Real-time firmware, microcontrollers, and multi-agent robotics middleware',
    iconName: 'Cpu',
    badgeColor: 'border-blue-500/30 text-blue-300 bg-blue-500/10',
    skills: [
      { name: 'ROS 2 (Humble/Iron)', level: 'Advanced', highlight: true },
      { name: 'Micro-ROS', level: 'Proficient', highlight: true },
      { name: 'ESP32 & FreeRTOS', level: 'Advanced', highlight: true },
      { name: 'STM32 (ARM Cortex-M)', level: 'Proficient' },
      { name: 'Arduino Ecosystem', level: 'Advanced' },
      { name: 'Raspberry Pi Orchestration', level: 'Advanced' },
      { name: 'PID & Closed-Loop Control', level: 'Advanced', highlight: true },
      { name: 'Sensor Fusion (IMU / Encoders)', level: 'Advanced' },
      { name: 'Siemens S7-1500 PLC & HMI', level: 'Proficient' }
    ]
  },
  {
    title: 'Software & Programming',
    subtitle: 'Low-level systems programming, algorithms, and simulation suites',
    iconName: 'Code',
    badgeColor: 'border-emerald-500/30 text-emerald-300 bg-emerald-500/10',
    skills: [
      { name: 'Modern C++ (C++17/20)', level: 'Advanced', highlight: true },
      { name: 'Embedded C', level: 'Advanced', highlight: true },
      { name: 'Python (NumPy / SciPy)', level: 'Advanced', highlight: true },
      { name: 'MATLAB & Simulink', level: 'Advanced' },
      { name: 'Linux / Ubuntu (Bash)', level: 'Advanced' },
      { name: 'Git & Version Control', level: 'Advanced' },
      { name: 'Computer Vision (OpenCV)', level: 'Intermediate' },
      { name: 'Machine Learning Basics', level: 'Intermediate' }
    ]
  },
  {
    title: 'Biomechatronics & Signal Processing',
    subtitle: 'Biosignal telemetry, real-time filtering, and prosthetic actuators',
    iconName: 'Activity',
    badgeColor: 'border-purple-500/30 text-purple-300 bg-purple-500/10',
    skills: [
      { name: 'Surface Electromyography (sEMG)', level: 'Advanced', highlight: true },
      { name: 'Digital Signal Processing (DSP)', level: 'Advanced', highlight: true },
      { name: 'Butterworth & IIR Notch Filters', level: 'Advanced' },
      { name: 'Time-Domain Feature Extraction', level: 'Advanced', highlight: true },
      { name: 'Gesture Classification Loops', level: 'Proficient' },
      { name: 'Bionic Prosthetics Kinematics', level: 'Proficient' },
      { name: 'Bio-Potential Isolation Circuits', level: 'Proficient' }
    ]
  }
];
