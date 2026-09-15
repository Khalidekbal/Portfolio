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
}

export const projectsData: Project[] = [
  {
    id: 'savi-medical-robot',
    title: 'S.A.V.I. (Secure Autonomous Vial Interface) Medical Robot',
    shortTitle: 'S.A.V.I. Medical Robot',
    category: 'Robotics & Mechatronics',
    courseOrContext: 'Design of Mechatronic Systems II / Ain Shams University',
    description: 'Autonomous medical robotic system engineered for sterile, high-precision handling, optical barcode identification, and manipulation of clinical vials to eliminate human error and contamination.',
    longDescription: 'S.A.V.I. is an autonomous mobile robot designed to bridge clinical laboratories and inpatient pharmacies. Operating with ROS 2 on a Raspberry Pi orchestrator paired with an ESP32 real-time motion controller, the robot navigates hospital corridors, aligns with pharmaceutical sample docks, and executes sterile vial grasping with zero direct human contact.',
    highlights: [
      'Multi-axis kinematic manipulation with specialized sterile end-effector geometry',
      'Optical 2D barcode identification and automated sample tracking database integration',
      'Sensor fusion combining IMU, wheel odometry, and ultrasonic sensors for sub-millimeter vial alignment',
      'Deterministic hierarchical finite state machine (FSM) ensuring fail-safe recovery on network drops',
      'Real-time Wi-Fi supervisory telemetry dashboard with safety E-stop protection'
    ],
    techStack: ['ROS 2', 'SolidWorks', 'Embedded C++', 'Raspberry Pi', 'ESP32', 'FreeRTOS', 'Stepper/Servo Control', 'Computer Vision'],
    hardwareSpecs: [
      { label: 'Compute Controller', value: 'Raspberry Pi 4 (High-Level) + ESP32-WROOM (Low-Level)' },
      { label: 'Actuation', value: 'Closed-loop Stepper Motors + High-Torque Precision Metal Micro-Servos' },
      { label: 'End-Effector', value: 'Custom 3D Printed DFM Gripper with Soft Silicone Contact Pads' },
      { label: 'Power Architecture', value: 'Isolated Dual-Rail 12V / 5V DC-DC with Emergency Hardware E-Stop' },
      { label: 'Sensory Array', value: 'Optical Barcode Camera, MPU6050 6-Axis IMU, Time-of-Flight Lasers' }
    ],
    softwareSpecs: [
      { label: 'ROS Distribution', value: 'ROS 2 Humble Hawksbill' },
      { label: 'Low-Level Firmware', value: 'C++ with FreeRTOS & Deterministic PID Motor Control' },
      { label: 'Communication Protocol', value: 'Micro-XRCE-DDS over UART & WebSocket Telemetry' },
      { label: 'State Machine', value: 'Hierarchical State Pattern with Watchdog Supervisor' }
    ],
    problem: 'Hospital clinical laboratories process thousands of hazardous biological vials daily. Manual handling causes sample misidentification, ergonomic repetitive stress, and hazardous bio-contamination risks for hospital staff.',
    solution: 'Designed an integrated autonomous robotics platform featuring custom kinematic grasping, closed-loop sensor-guided docking, optical identification, and fail-safe motion planning to transport and orient clinical vials autonomously.',
    results: 'Achieved 99.4% vial identification accuracy, zero slippage during 100+ simulated clinical transfers, and sub-second fail-safe E-stop reaction times.',
    metrics: [
      { label: 'Docking Accuracy', value: '±1.2 mm' },
      { label: 'Barcode Recognition', value: '<120 ms' },
      { label: 'Fail-Safe Reaction', value: '<25 ms' },
      { label: 'Continuous Run-time', value: '4.5 Hours' }
    ],
    githubUrl: 'https://github.com/Khalidekbal'
  },
  {
    id: 'myoelectric-gesture-control',
    title: 'Myoelectric Gesture Control Pipeline',
    shortTitle: 'sEMG Gesture Pipeline',
    category: 'Biomechatronics',
    courseOrContext: 'Introduction to Biomechatronics',
    description: 'End-to-end real-time myoelectric pipeline capturing surface Electromyography (sEMG) signals, filtering electrical noise, extracting time-domain features, and classifying hand/arm gestures for prosthetic control.',
    longDescription: 'This biomechatronics research project establishes a lightweight, low-latency signal acquisition and processing architecture for bionic upper-limb prosthetics. By sampling muscle micro-potentials via non-invasive Ag/AgCl surface electrodes, the system applies real-time digital filtering and pattern recognition to drive motorized prosthetic fingers with under 80 ms latency.',
    highlights: [
      'Real-time analog-to-digital sEMG capture at 1 kHz with 50 Hz notch and 20–450 Hz 4th-order Butterworth bandpass filtering',
      'Time-domain feature extraction pipeline calculating MAV, Zero Crossings (ZC), Waveform Length (WL), and Root Mean Square (RMS)',
      'Low-latency pattern classification algorithm mapping forearm muscle activation to specific hand grips',
      'Microcontroller deployment on ESP32 running synchronized PWM control for multi-finger prosthetic actuators'
    ],
    techStack: ['Python', 'NumPy', 'SciPy', 'Digital Signal Processing (DSP)', 'sEMG Electrodes', 'ESP32 / Arduino', 'C++', 'MATLAB'],
    hardwareSpecs: [
      { label: 'Signal Acquisition', value: 'Differential Surface EMG Bio-amplifier with Active Grounding' },
      { label: 'Sampling Rate', value: '1,000 Hz (1 kHz) over 12-bit ADC' },
      { label: 'Electrodes', value: 'Medical-Grade Ag/AgCl Surface Electrodes over Flexor/Extensor muscles' },
      { label: 'Actuator Platform', value: 'Servo-actuated 5-digit Bionic Hand Prosthesis' }
    ],
    softwareSpecs: [
      { label: 'Signal Processing', value: 'SciPy & NumPy (Python) ported to Fixed-Point C++ DSP' },
      { label: 'Digital Filter', value: '4th Order Butterworth (20–450 Hz) + 50 Hz IIR Comb Notch' },
      { label: 'Feature Extraction', value: 'Sliding 150 ms Window with 50 ms Overlap (MAV, RMS, WL, ZC)' },
      { label: 'Actuator Control', value: 'PID-Smoothed PWM Servo Angles over FreeRTOS task' }
    ],
    problem: 'Commercial prosthetic hands often suffer from high cost, erratic false activations caused by 50/60 Hz power-line interference, and excessive computational latency that breaks the intuitive user proprioceptive loop.',
    solution: 'Engineered a highly optimized DSP pipeline that suppresses motion artifacts and power-line interference, extracts robust statistical signatures, and achieves real-time robotic hand grasping in under 75 ms.',
    results: 'Reached 94.2% gesture classification accuracy across 5 distinct hand gestures with negligible latency perceived by the user.',
    metrics: [
      { label: 'Classification Accuracy', value: '94.2%' },
      { label: 'Processing Latency', value: '68 ms' },
      { label: 'Noise Rejection (SNR)', value: '>38 dB' },
      { label: 'Grip Modes', value: '5 Gestures' }
    ],
    githubUrl: 'https://github.com/Khalidekbal'
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
