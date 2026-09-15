export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  type: 'Internship' | 'Leadership / Business' | 'Student Formula' | 'Education';
  location: string;
  description: string[];
  tags: string[];
  featured?: boolean;
}

export const experienceData: ExperienceItem[] = [
  {
    id: 'el-sewedy-rd',
    role: 'Research & Development (R&D) Intern',
    organization: 'El Sewedy Electrometer',
    period: '07/2026 - Present',
    type: 'Internship',
    location: '6th of October City, Egypt',
    description: [
      'Analyzed smart meter architectures with focus on RTOS implementation, low-power MCU optimization, and industrial telemetry protocols (RF, GPRS, PLC).',
      'Contributed to ultrasonic flowmeter integration and PCB design principles adhering to DFM/DFT and EMC compliance standards.',
      'Mapped end-to-end product lifecycle from 3D CAD mechanical modeling to software integration (ASP.NET Core, Angular) with ISTQB-aligned system testing.'
    ],
    tags: ['RTOS', 'Low-Power MCU', 'Ultrasonic Flowmeter', 'DFM/DFT', 'EMC Compliance', 'Smart Meters'],
    featured: true
  },
  {
    id: '3d-printing-business',
    role: 'Founder & 3D Printing Prototyping Specialist',
    organization: 'Freelance 3D Printing Business',
    period: '09/2025 - Present',
    type: 'Leadership / Business',
    location: 'Giza / Cairo, Egypt',
    description: [
      'Engineered and manufactured customized functional prototypes tailored to precision engineering client specifications.',
      'Modeled and optimized complex CAD assemblies in SolidWorks with Design for Additive Manufacturing (DFAM) methodologies.',
      'Managed a continuous production volume exceeding 1,000+ printing hours, matching mechanical strain and thermal properties to materials (PLA, PETG, TPU, ABS, Carbon Fiber).',
      'Calibrated advanced slicer settings and kinematics to minimize failure rates, reduce material waste, and achieve tight fit tolerances.'
    ],
    tags: ['SolidWorks', 'DFAM', 'Additive Manufacturing', 'Client Prototyping', '1,000+ Print Hours'],
    featured: true
  },
  {
    id: 'asu-racing-team',
    role: 'EV Powertrain Member',
    organization: 'ASU EV Racing Team (Ain Shams University)',
    period: '11/2024 - 05/2026',
    type: 'Student Formula',
    location: 'Ain Shams University, Cairo',
    description: [
      'Engineered electric vehicle high-voltage accumulator configurations, cell interconnects, and fuse protection matrices ensuring high safety and reliability.',
      'Analyzed Battery Management System (BMS) architectures for thermal monitoring, cell voltage balancing, and over-current protection.',
      'Constructed dynamic MATLAB & Simulink models for battery sizing, internal impedance behavior, and real-time efficiency estimation under race cycle loads.'
    ],
    tags: ['EV Powertrain', 'BMS', 'Lithium Accumulators', 'MATLAB/Simulink', 'Formula Student'],
    featured: true
  },
  {
    id: 'gb-academy',
    role: 'Automotive Mechanical Advanced Trainee',
    organization: 'GB Academy (Ghabbour Auto)',
    period: '08/2024 - 09/2024',
    type: 'Internship',
    location: 'Cairo, Egypt',
    description: [
      'Completed comprehensive hands-on training on modern internal combustion engine architectures, power transfer dynamics, manual/automatic transmissions, and hydraulic braking circuits.',
      'Acquired practical diagnostic and mechanical teardown knowledge of critical automotive chassis assemblies.'
    ],
    tags: ['Automotive Mechanics', 'Engine Dyno', 'Hydraulics', 'Transmission', 'Chassis Systems']
  },
  {
    id: 'asu-education',
    role: 'Bachelor of Engineering in Mechatronics & Automation',
    organization: 'Ain Shams University — Faculty of Engineering',
    period: 'Expected 2027',
    type: 'Education',
    location: 'Abbassia, Cairo, Egypt',
    description: [
      'Pursuing specialized engineering degree in Mechatronics & Automation, encompassing robotics kinematics, micro-ROS distributed systems, industrial PLC automation, and biomechatronic signal interfaces.',
      'Active contributor to student racing engineering and university biomedical robotics research.'
    ],
    tags: ['Ain Shams University', 'Mechatronics', 'Robotics', 'Embedded Firmware', 'Control Theory']
  }
];
