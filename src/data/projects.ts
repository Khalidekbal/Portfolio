export interface ProjectMedia {
  type: 'image' | 'video';
  url: string;
  title: string;
  caption: string;
}

export interface Project {
  id: string;
  title: string;
  shortTitle: string;
  category: 'Robotics & Mechatronics' | 'Biomechatronics' | 'Embedded Systems';
  courseOrContext: string;
  description: string;
  longDescription: string;
  highlights: string[];
  techStack: string[];
  hardwareSpecs: { label: string; value: string }[];
  softwareSpecs: { label: string; value: string }[];
  problem: string;
  solution: string;
  results: string;
  metrics?: { label: string; value: string }[];
  githubUrl?: string;
  previewImage?: string;
  mediaGallery?: ProjectMedia[];
}

export const projectsData: Project[] = [
  {
    id: 'savi-medical-robot',
    title: 'S.A.V.I. (Secure Autonomous Vial Interface) Medical Mobile Robot',
    shortTitle: 'S.A.V.I. Medical Mobile Robot',
    category: 'Robotics & Mechatronics',
    courseOrContext: 'Design of Mechatronic Systems II / Ain Shams University',
    description: 'Autonomous mobile medical robot driven by differential DC motors with closed-loop PID control via ESP32, paired with a Raspberry Pi 5 running Ubuntu 24.04 and Micro-ROS. Features live camera streaming, real-time battery telemetry to a desktop GUI, YOLOv8 vision-based hand gesture recognition to index a rotating medicine capsule carousel, and intelligent ultrasonic obstacle avoidance with timed re-routing.',
    longDescription: 'S.A.V.I. (Secure Autonomous Vial Interface) is an autonomous medical mobile robot engineered for hospital and clinical medication delivery. The robot is propelled by a differential drive system powered by DC motors with closed-loop PID velocity control executed in real-time on an ESP32 microcontroller.\n\nThe ESP32 communicates bidirectionally with a Raspberry Pi 5 host running Ubuntu Linux 24.04 via Micro-ROS. The Raspberry Pi 5 streams a real-time camera feed from the mobile robot and broadcasts live battery consumption telemetry to a centralized computer GUI.\n\nTo ensure patient compliance, vision-based YOLOv8 is deployed directly on the Raspberry Pi 5 to recognize patient hand gestures. Each distinct gesture commands the internal medicine capsule rotor carousel to index to a specific angle, dispensing medications and logging patient adherence.\n\nFor autonomous navigation and hospital safety, the robot detects obstacles using an ultrasonic sensor array connected to the ESP32. Upon encountering an obstacle within a critical threshold distance, the robot halts for a calibrated holding duration. If the obstacle does not clear when the timer expires, the robot performs a 90-degree bypass maneuver, navigates around the obstacle, and smoothly rejoins its original trajectory.',
    highlights: [
      'Differential drive mobile base driven by DC motors with deterministic closed-loop PID velocity control on an ESP32 microcontroller.',
      'Distributed Micro-ROS architecture linking ESP32 real-time motor/sensor loops to a Raspberry Pi 5 orchestrator running Ubuntu Linux 24.04.',
      'Computer Vision powered by YOLOv8 on Raspberry Pi 5 for real-time patient hand gesture recognition and medicine carousel angle rotation.',
      'Live video stream transmission and real-time battery consumption telemetry reported directly to the supervisory desktop GUI.',
      'Intelligent ultrasonic obstacle avoidance with timed standstill duration and automated 90° bypass re-routing logic.'
    ],
    techStack: ['Differential Drive DC', 'PID Control', 'ESP32', 'Raspberry Pi 5', 'Micro-ROS', 'Ubuntu Linux 24.04', 'YOLOv8', 'Ultrasonic Sensors', 'Desktop GUI', 'SolidWorks CAD'],
    hardwareSpecs: [
      { label: 'Compute Controller', value: 'Raspberry Pi 5 (8GB) running Ubuntu Linux 24.04' },
      { label: 'Low-Level Controller', value: 'ESP32 Microcontroller running Micro-ROS client' },
      { label: 'Drive Train', value: 'Differential Drive DC Motors with PID Velocity Feedback & Encoders' },
      { label: 'Medication Rotor', value: 'Precision Stepper Motor indexing modular cylindrical carousel' },
      { label: 'Obstacle Detection', value: 'Ultrasonic Distance Sensors with calibrated distance triggering' },
      { label: 'Power & Telemetry', value: 'Current/Voltage battery sensing circuit & isolated DC-DC converters' },
      { label: 'Safety Architecture', value: 'Top-mounted Physical Hardware E-Stop button and failsafe watchdog' }
    ],
    softwareSpecs: [
      { label: 'Operating System', value: 'Ubuntu Linux 24.04 LTS (Noble Numbat)' },
      { label: 'Robotics Middleware', value: 'Micro-ROS Distributed Bridge (ESP32 to Raspberry Pi 5)' },
      { label: 'Computer Vision', value: 'YOLOv8 Real-time Hand Gesture Recognition Pipeline' },
      { label: 'Motor Control Logic', value: 'Deterministic Closed-loop PID Algorithm on FreeRTOS' },
      { label: 'Bypass Maneuver', value: 'Timed standstill hold followed by 90° dynamic bypass turn' },
      { label: 'Desktop Telemetry GUI', value: 'Live camera video stream display & real-time battery consumption monitoring' }
    ],
    problem: 'Hospital inpatient medication delivery requires nurses and medical staff to spend hours manually transporting pharmaceuticals, introducing contamination hazards, dosage tracking mistakes, and caregiver fatigue in high-stress clinical wards.',
    solution: 'Engineered an autonomous mobile medical robot powered by differential PID drive and ultrasonic collision avoidance, paired with a Raspberry Pi 5 running YOLOv8 gesture recognition to index medication capsules and stream telemetry to a central nurse station.',
    results: 'Flawless autonomous navigation and obstacle bypass in real hospital corridor environments, sub-100ms gesture recognition latency with YOLOv8, and reliable live telemetry streaming of battery levels and video to the desktop GUI.',
    metrics: [
      { label: 'Vision Model', value: 'YOLOv8' },
      { label: 'OS Version', value: 'Ubuntu 24.04' },
      { label: 'Obstacle Avoidance', value: 'Timed 90° Turn' },
      { label: 'Host System', value: 'Raspberry Pi 5' }
    ],
    githubUrl: 'https://github.com/Khalidekbal',
    previewImage: '/projects/savi/team-savi-showcase.jpg',
    mediaGallery: [
      {
        type: 'image',
        url: '/projects/savi/team-savi-showcase.jpg',
        title: 'S.A.V.I. Engineering Team & Fabricated Robot',
        caption: 'Khalid Mohamed (center left) and the Mechatronics engineering team presenting the fully fabricated S.A.V.I. autonomous medical mobile robot alongside the technical system architecture poster.'
      },
      {
        type: 'image',
        url: '/projects/savi/cad-assembly-exploded.png',
        title: 'Exploded 3D CAD Assembly & Internal Modular Tiers',
        caption: 'SolidWorks exploded assembly view displaying the multi-tier internal architecture: differential drive wheel base, battery pack & power management tray, ESP32/Raspberry Pi 5 compute layer, rotating medicine capsule rotor, and top-mounted E-stop safety lid.'
      },
      {
        type: 'video',
        url: '/projects/savi/savi-environment-deployment.mp4',
        title: 'Physical Environment Deployment & Ultrasonic Obstacle Avoidance',
        caption: 'Field testing video showcasing the S.A.V.I. mobile robot navigating autonomously, detecting obstacles with ultrasonic sensors, executing timed standstill holding, and performing a 90-degree bypass maneuver.'
      },
      {
        type: 'video',
        url: '/projects/savi/savi-gui-deployment.mp4',
        title: 'Desktop GUI, Live Video Streaming & YOLOv8 Gesture Carousel Rotation',
        caption: 'Supervisory computer GUI demonstrating live camera streaming from the Raspberry Pi 5, real-time battery consumption monitoring, and YOLOv8 hand gesture detection indexing the medicine rotor.'
      }
    ]
  },
  {
    id: 'myoelectric-gesture-control',
    title: 'Myoelectric Gesture Control & Simscape Multibody Prosthetic Hand',
    shortTitle: 'sEMG Gesture & Multibody Hand',
    category: 'Biomechatronics',
    courseOrContext: 'Introduction to Biomechatronics / Ain Shams University',
    description: 'End-to-end real-time myoelectric pipeline capturing surface Electromyography (sEMG) signals, filtering electrical noise, extracting time-domain statistical features, and driving an articulated 3D prosthetic hand simulated dynamically in MATLAB Simscape Multibody.',
    longDescription: 'This biomechatronics research project establishes a lightweight, low-latency signal acquisition and processing architecture for bionic upper-limb prosthetics. By sampling muscle micro-potentials via non-invasive Ag/AgCl surface electrodes, the system applies real-time digital filtering and pattern recognition to drive motorized prosthetic fingers with under 80 ms latency.\n\nThe complete mechanical kinematic model of the prosthetic hand was engineered and dynamically simulated in MATLAB Simscape Multibody and Mechanics Explorer. The anatomical branching architecture simulates each individual finger (Thumb, Index, Middle, Ring, Little) with multi-phalanx revolute joints and rigid transform coordinate systems, validating torque response and fluid multi-digit grasping gestures.',
    highlights: [
      'Real-time analog-to-digital sEMG capture at 1 kHz with 50 Hz notch and 20–450 Hz 4th-order Butterworth bandpass filtering',
      'Time-domain feature extraction pipeline calculating MAV, Zero Crossings (ZC), Waveform Length (WL), and Root Mean Square (RMS)',
      'Dynamic kinematic and multi-body simulation of 5-finger articulated prosthetic hand in MATLAB Simscape Multibody & Mechanics Explorer',
      'Low-latency pattern classification algorithm mapping forearm muscle activation to specific hand grips',
      'Microcontroller deployment on ESP32 running synchronized PWM control for multi-finger prosthetic actuators'
    ],
    techStack: ['MATLAB', 'Simulink', 'Simscape Multibody', 'Mechanics Explorer', 'Python', 'NumPy', 'SciPy', 'Digital Signal Processing (DSP)', 'sEMG Electrodes', 'ESP32 / Arduino', 'C++'],
    hardwareSpecs: [
      { label: 'Signal Acquisition', value: 'Differential Surface EMG Bio-amplifier with Active Grounding' },
      { label: 'Sampling Rate', value: '1,000 Hz (1 kHz) over 12-bit ADC' },
      { label: 'Electrodes', value: 'Medical-Grade Ag/AgCl Surface Electrodes over Flexor/Extensor muscles' },
      { label: 'Prosthetic Mechanism', value: 'Anatomical 5-digit multi-phalanx prosthetic hand with revolute joints' },
      { label: 'Actuator Platform', value: 'Servo-actuated 5-digit Bionic Hand Prosthesis' }
    ],
    softwareSpecs: [
      { label: 'Dynamic Simulation', value: 'MATLAB R2024b Simscape Multibody & Mechanics Explorer' },
      { label: 'Kinematic Topology', value: 'Multi-phalanx tree (Distal, Intermediate, Proximal) with revolute blocks' },
      { label: 'Signal Processing', value: 'SciPy & NumPy (Python) ported to Fixed-Point C++ DSP' },
      { label: 'Digital Filter', value: '4th Order Butterworth (20–450 Hz) + 50 Hz IIR Comb Notch' },
      { label: 'Feature Extraction', value: 'Sliding 150 ms Window with 50 ms Overlap (MAV, RMS, WL, ZC)' },
      { label: 'Actuator Control', value: 'PID-Smoothed PWM Servo Angles over FreeRTOS task' }
    ],
    problem: 'Commercial prosthetic hands often suffer from high cost, erratic false activations caused by 50/60 Hz power-line interference, and excessive computational latency that breaks the intuitive user proprioceptive loop.',
    solution: 'Engineered a highly optimized DSP pipeline that suppresses motion artifacts and power-line interference, extracts robust statistical signatures, and achieves real-time robotic hand grasping in under 75 ms, fully validated via dynamic MATLAB Simscape Multibody simulation.',
    results: 'Reached 94.2% gesture classification accuracy across 5 distinct hand gestures with negligible latency perceived by the user, verified through seamless dynamic multi-finger kinematic simulation in Mechanics Explorer.',
    metrics: [
      { label: 'Simulation Tool', value: 'Simscape Multibody' },
      { label: 'Classification Accuracy', value: '94.2%' },
      { label: 'Processing Latency', value: '68 ms' },
      { label: 'Grip Modes', value: '5 Gestures' }
    ],
    githubUrl: 'https://github.com/Khalidekbal',
    previewImage: '/projects/biomechatronics/matlab-mechanics-explorer.png',
    mediaGallery: [
      {
        type: 'image',
        url: '/projects/biomechatronics/matlab-mechanics-explorer.png',
        title: 'MATLAB Mechanics Explorer 3D Prosthetic Hand & Signal Processing Pipeline',
        caption: '3D dynamic multi-body model of the articulated prosthetic hand in MATLAB Mechanics Explorer, synchronized with real-time sliding window DSP feature extraction (MAV, RMS, WL, ZC) and gesture classification script.'
      },
      {
        type: 'image',
        url: '/projects/biomechatronics/simscape-multibody-diagram.png',
        title: 'Simscape Multibody Block Diagram Architecture',
        caption: 'MATLAB Simscape Multibody block diagram modeling palm rigid transform coordinates, five-finger anatomical branching, revolute joints, and multi-phalanx kinematic connections for each finger.'
      },
      {
        type: 'video',
        url: '/projects/biomechatronics/hand-gesture-simulation.mp4',
        title: 'Simscape Multibody Dynamic Hand Gesture Simulation',
        caption: 'Dynamic simulation video demonstrating coordinated multi-finger flexion and extension in MATLAB Simscape Multibody driven by classified myoelectric gesture control angles.'
      }
    ]
  },
  {
    id: '7dof-robotic-manipulator',
    title: '7-DOF Robotic Arm (ROS 2 & Micro-ROS)',
    shortTitle: '7-DOF Manipulator',
    category: 'Robotics & Mechatronics',
    courseOrContext: 'Robotics Engineering & Advanced Control',
    description: '7-Degree-of-Freedom articulated robotic manipulator featuring distributed control architecture between ROS 2 motion planners and real-time microcontroller firmware.',
    longDescription: 'A modular 7-DOF articulated robot designed to emulate the natural workspace flexibility of the human arm. Featuring inverse kinematics solvers, path planning in MoveIt 2, and micro-ROS distributed bridge architecture to execute synchronized joint trajectories.',
    highlights: [
      'Complete 3D CAD modeling, DFM optimization for 3D printed structural links and CNC aluminum motor brackets',
      'Forward and Inverse Kinematics modeling using Denavit-Hartenberg (D-H) parameter matrices and numerical Jacobian solvers',
      'Micro-ROS integration bridging ROS 2 high-level velocity commands to low-level RTOS actuator loops',
      'Closed-loop joint feedback with magnetic absolute encoders for accurate repeatability'
    ],
    techStack: ['ROS 2', 'Micro-ROS', 'SolidWorks', 'MoveIt 2', 'C++', 'FreeRTOS', 'Kinematics', 'Encoders'],
    hardwareSpecs: [
      { label: 'Configuration', value: '7 Degrees of Freedom (Articulated Spherical Wrist)' },
      { label: 'Joint Sensors', value: '14-bit AS5600 Magnetic Absolute Rotary Encoders' },
      { label: 'Drive Train', value: 'Harmonic Planetary Reduction Gears with NEMA Steppers' },
      { label: 'Payload Capacity', value: '1.2 kg at Full Reach (650 mm)' }
    ],
    softwareSpecs: [
      { label: 'Trajectory Generation', value: 'MoveIt 2 with OMPL (Open Motion Planning Library)' },
      { label: 'Joint Controller', value: 'Micro-ROS Client running on STM32 / ESP32' },
      { label: 'Kinematic Solver', value: 'KDL (Kinematics and Dynamics Library) & Custom Analytical Solver' }
    ],
    problem: 'Traditional industrial arms with 6 DOF face kinematic singularities and lack redundancy to avoid workspace obstacles in congested medical or laboratory environments.',
    solution: 'Developed a redundant 7th degree-of-freedom manipulator that allows self-motion reconfiguration of the elbow while maintaining end-effector pose, avoiding obstacles gracefully.',
    results: 'Repeatability of ±0.8 mm across the entire 650 mm envelope with smooth cubic spline joint trajectory execution.',
    metrics: [
      { label: 'Degrees of Freedom', value: '7 DOF' },
      { label: 'Workspace Reach', value: '650 mm' },
      { label: 'Position Repeatability', value: '±0.8 mm' },
      { label: 'Bus Communication', value: 'CAN / Micro-ROS' }
    ],
    githubUrl: 'https://github.com/Khalidekbal'
  },
  {
    id: 'automated-production-line',
    title: 'Automated Industrial Production Line (PLC & HMI)',
    shortTitle: 'PLC Automated Line',
    category: 'Embedded Systems',
    courseOrContext: 'Industrial Automation & PLC Systems',
    description: 'Comprehensive industrial automation system encompassing feeding, machining, assembly, and optical sorting controlled via Siemens S7-1500 PLC and custom HMI.',
    longDescription: 'Simulated and executed high-reliability industrial automation logic for a modern multi-stage manufacturing cell. Built with IEC 61131-3 structured text and ladder logic, integrating safety interlocks, dynamic part sorting, and HMI telemetry.',
    highlights: [
      'Engineered structured automation logic on Siemens S7-1500 PLC for multi-station synchronization',
      'Developed intuitive touchscreen HMI dashboard for live cycle metrics, alarm logs, and manual overrides',
      'Implemented SIL/HIL simulation in Factory I/O for digital-twin validation prior to hardware deployment',
      'Load-adaptive conveyor speed modulation and sensor-triggered safety zone interlocking'
    ],
    techStack: ['Siemens S7-1500', 'TIA Portal', 'Factory I/O', 'HMI SCADA', 'Ladder Logic (LAD)', 'Structured Text (ST)', 'SIL/HIL'],
    hardwareSpecs: [
      { label: 'Main Controller', value: 'Siemens SIMATIC S7-1500 Modular PLC' },
      { label: 'Fieldbus Network', value: 'PROFINET Industrial Ethernet' },
      { label: 'I/O Modules', value: '32-Channel Digital I/O + 8-Channel Analog Modules' },
      { label: 'Operator Station', value: 'Siemens SIMATIC Comfort HMI Panel' }
    ],
    softwareSpecs: [
      { label: 'Engineering Suite', value: 'Siemens TIA Portal V18' },
      { label: 'Simulation Environment', value: 'Factory I/O 3D Physics Simulation (SIL/HIL)' },
      { label: 'Programming Standards', value: 'IEC 61131-3 (LAD, FBD, SCL/ST)' },
      { label: 'Safety Logic', value: 'Fail-Safe Emergency Stop Zone Matrix' }
    ],
    problem: 'Industrial assembly cells experience costly line halts due to uncoordinated station timing, lack of digital fault diagnostics, and rigid static conveyor speeds.',
    solution: 'Programmed adaptive state-driven PLC logic with automated reject stations, real-time cycle optimization, and an interactive HMI providing predictive alarm indicators.',
    results: 'Demonstrated 100% sorting reliability in Factory I/O SIL testing with an estimated 28% reduction in station cycle bottlenecks.',
    metrics: [
      { label: 'Throughput Boost', value: '+28%' },
      { label: 'Sorting Reliability', value: '100%' },
      { label: 'Cycle Time', value: '12.4 sec/unit' },
      { label: 'Simulation Fidelity', value: 'Digital Twin' }
    ],
    githubUrl: 'https://github.com/Khalidekbal'
  },
  {
    id: 'smart-flowmeter-system',
    title: 'Smart IoT Flowmeter System (Cup-Anemometer)',
    shortTitle: 'Smart Flowmeter IoT',
    category: 'Embedded Systems',
    courseOrContext: 'Instrumentation & IoT Prototyping',
    description: 'High-accuracy (92%+) cup-anemometer flow measurement system featuring parametric Excel modeling, 3D CAD design, custom optical sensor integration, and IoT telemetry.',
    longDescription: 'Engineered an end-to-end aerodynamic fluid flow measurement apparatus from theoretical aerodynamic modeling to physical workshop fabrication. The system pairs optical infrared interrupt sensors with microcontroller firmware to stream volumetric flow rates over IoT protocols.',
    highlights: [
      'Parametric aerodynamic cup curvature modeling in Excel to linearize rotational speed versus fluid velocity',
      'Complete 3D CAD mechanical assembly in SolidWorks with low-friction ceramic bearing housings',
      'Optical photo-interrupter sensor pulse capture with interrupt-driven hardware timers',
      'Embedded calibration routine achieving 92%+ measurement fidelity compared to calibrated wind tunnel references'
    ],
    techStack: ['SolidWorks', 'Embedded C', 'IoT Protocols', 'Optical Sensors', 'Parametric Modeling', '3D Printing'],
    hardwareSpecs: [
      { label: 'Housing & Rotor', value: 'PETG Aerodynamic Cups with Sealed Ceramic Bearings' },
      { label: 'Pulse Sensing', value: 'High-Speed Slotted Optical Infrared Encoder Wheel' },
      { label: 'MCU Controller', value: 'Microcontroller with Hardware Input Capture Timer' }
    ],
    softwareSpecs: [
      { label: 'Firmware Engine', value: 'Interrupt Service Routine (ISR) Pulse Counting Algorithm' },
      { label: 'Calibration Curve', value: 'Non-linear Polynomial Curve Fitting via Empirical Data' },
      { label: 'Data Telemetry', value: 'MQTT / UART Real-Time Sensor Telemetry' }
    ],
    problem: 'Commercial fluid anemometers and flow meters are either prohibitively expensive for localized monitoring or exhibit strong non-linear distortion at low velocities.',
    solution: 'Designed a lightweight, low-friction aerodynamic rotor with balanced mass distribution and an optical pulse acquisition algorithm with polynomial linearization.',
    results: 'Delivered >92% measurement accuracy across dynamic range, operating reliably under continuous airflow tests.',
    metrics: [
      { label: 'Accuracy Rating', value: '92.4%' },
      { label: 'Min Detection Speed', value: '0.4 m/s' },
      { label: 'Sensor Response', value: '<50 ms' },
      { label: 'Fabrication Method', value: 'SolidWorks DFM' }
    ],
    githubUrl: 'https://github.com/Khalidekbal'
  },
  {
    id: 'ev-battery-pack-bms',
    title: 'Formula Student EV Battery Pack & BMS Modeling',
    shortTitle: 'EV Powertrain & BMS',
    category: 'Robotics & Mechatronics',
    courseOrContext: 'ASU EV Racing Team / Ain Shams University',
    description: 'Lithium-ion high-voltage accumulator design, cell interconnect modeling, fuse protection strategies, and MATLAB BMS dynamic simulation for Formula Student EV.',
    longDescription: 'As a powertrain engineer in the Ain Shams University Electric Vehicle Racing Team, Khalid modeled battery module thermal behaviors, state-of-charge (SoC) estimation algorithms, and high-current busbar interconnects conforming to strict Formula Student electric safety regulations.',
    highlights: [
      'Cell interconnect topology design and fuse protection matrix for high-discharge lithium cells',
      'BMS architecture evaluation for passive vs active cell balancing and over/under-voltage cutoffs',
      'Dynamic battery model development in MATLAB & Simulink for capacity, internal resistance, and thermal efficiency estimation',
      'Safety loop integration with pre-charge circuitry, isolation monitoring, and high-voltage interlock (HVIL)'
    ],
    techStack: ['MATLAB', 'Simulink', 'BMS Architectures', 'EV Powertrain', 'SolidWorks', 'Thermal Analysis'],
    hardwareSpecs: [
      { label: 'Cell Chemistry', value: 'High-Drain Cylindrical Lithium-Ion Cells' },
      { label: 'Accumulator Topology', value: 'Segmented High-Voltage Pack with Internal Fire Retardant Dividers' },
      { label: 'Safety Interlocks', value: 'Hardware HVIL, Dual Isolation Relays, Fuse Array' }
    ],
    softwareSpecs: [
      { label: 'Simulation Environment', value: 'MATLAB / Simulink Simscape Electrical' },
      { label: 'Estimation Logic', value: 'Extended Kalman Filter (EKF) for State of Charge (SoC)' },
      { label: 'Balancing Strategy', value: 'Dynamic Threshold Dissipative Balancing Logic' }
    ],
    problem: 'Electric race vehicles require massive continuous power output while preventing thermal runaway, cell voltage divergence, and catastrophic high-voltage failure under aggressive track conditions.',
    solution: 'Formulated an electro-thermal simulation in MATLAB/Simulink and designed modular cell segments with safety fuses and balanced current paths.',
    results: 'Accurately predicted pack thermal dissipation within 4% of physical test bench measurements, verifying safe operational thresholds.',
    metrics: [
      { label: 'Model Accuracy', value: '96.2%' },
      { label: 'Safety Compliance', value: 'Formula Student EV' },
      { label: 'Thermal Margin', value: '<55°C Peak' },
      { label: 'Balancing Delta', value: '<15 mV' }
    ],
    githubUrl: 'https://github.com/Khalidekbal'
  }
];
