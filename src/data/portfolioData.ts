import {
  MiloProfile,
  MiloProject,
  MiloExperience,
  MiloEducation,
  SkillGroup,
  InterestArea,
} from '../types/portfolio';

export const MILO_DEFAULT_PROFILE: MiloProfile = {
  name: "MILO",
  greeting: "Hi, I'm Bhavatharni J.",
  headline: "Java Developer | Backend Engineer | Image Processing Enthusiast",
  heroBio: "I build robust backend applications, develop scalable REST APIs, and explore intelligent image-processing solutions. I enjoy turning complex technical challenges into practical software solutions.",
  availability: "Open to Java Developer and Software Engineering opportunities.",
  techHighlights: ["Java", "Spring Boot", "Python", "OpenCV", "MySQL"],
  email: "jbhavatharni@gmail.com",
  github: "https://github.com/Bhavatharni",
  linkedin: "https://www.linkedin.com/in/bhavatharni-j/",
  aboutHeadline: "More Than Just Writing Code.",
  aboutParagraphs: [
    "I'm a Computer Science and Engineering graduate with a strong interest in Java development, backend engineering, and computer vision.",
    "My technical experience includes building backend applications using Java and Spring Boot, developing REST APIs, working with databases, and exploring AI-driven solutions.",
    "During my experience at HTIC, IIT Madras Research Park, I worked on surgical imaging and image signal processing, gaining hands-on exposure to RAW image processing, custom ROGB demosaicing, white balance, color correction, and image enhancement techniques.",
    "I enjoy understanding how systems work internally, solving challenging problems, and continuously improving my engineering skills. My goal is to become a skilled software engineer who builds reliable, scalable, and impactful technology."
  ],
  personalHighlights: [
    { label: "Degree", detail: "B.E. Computer Science and Engineering" },
    { label: "Academic Standing", detail: "8.38 CGPA" },
    { label: "Algorithms", detail: "180+ LeetCode problems solved" },
    { label: "Specialization", detail: "Experience with surgical imaging and image processing" },
    { label: "Core Focus", detail: "Focused on Java and Spring Boot development" },
  ],
  leetcodeCount: 180,
  cgpa: "8.38 / 10",
};

export const MILO_PROJECTS: MiloProject[] = [
  {
    id: "ai-net-banker",
    projectNumber: "Project 01",
    title: "AI-Based Net Banker System",
    category: "Backend Development / AI Integration",
    technologies: ["Java", "Spring Boot", "AI/ML", "MySQL", "REST APIs", "Spring Security"],
    summary: "An AI-integrated banking application focused on building backend services and incorporating intelligent features into financial workflows.",
    keyAreas: [
      "Backend application development using Spring Boot.",
      "REST API development with secure JWT authentication.",
      "Database integration and management using MySQL and Hibernate.",
      "Integration of AI/ML predictive risk scoring capabilities.",
      "Structured microservices-ready layered application architecture."
    ],
    fullDescription: "The AI-Based Net Banker System provides a resilient, security-first banking backend designed to streamline account operations, fund transfers, and automated financial insights. Built with Java 17 and Spring Boot 3, it isolates sensitive banking operations through modular services while exposing clean, validated REST endpoints. An integrated AI scoring module analyzes anomalous transaction patterns and flags potential high-risk activities in real-time.",
    architectureDetails: [
      "Layered MVC architecture separating Controllers, Service Business Logic, and DAO Repositories.",
      "ACID transactional consistency for atomic balance updates across multiple bank accounts.",
      "Automated payload validation and cryptographic password hashing with BCrypt.",
      "Lightweight AI evaluation hook checking velocity and geographic variance before authorizing transactions."
    ],
    image: "/src/assets/images/project_net_banker_1794382396837.jpg",
    links: {
      githubUrl: "https://github.com/Bhavatharni/ai-net-banker-system",
      demoUrl: "https://github.com/Bhavatharni",
    },
    highlightMetrics: [
      { label: "REST Endpoints", value: "24+" },
      { label: "Security", value: "Spring Security + JWT" },
      { label: "Database", value: "MySQL ACID" },
    ],
  },
  {
    id: "image-forgery-detection",
    projectNumber: "Project 02",
    title: "Image Forgery Detection System",
    category: "Computer Vision",
    technologies: ["Python", "OpenCV", "MongoDB", "NumPy", "Digital Forensics"],
    summary: "An image analysis application designed to identify potential image manipulation and forgery using image-processing techniques.",
    keyAreas: [
      "Image preprocessing and frequency-domain analysis.",
      "Computer vision techniques including Error Level Analysis (ELA).",
      "Copy-move and splice manipulation detection workflows.",
      "Backend data management and audit log storage using MongoDB.",
      "Image analysis, forensic heatmap generation, and result handling."
    ],
    fullDescription: "With the proliferation of digital photo manipulation, verifying visual authenticity is critical. This system employs OpenCV and custom algorithmic pipelines to evaluate compression discrepancies, noise inconsistencies, and duplicate feature patches. It generates visual error heatmaps pinpointing forged regions and stores forensic metadata and detection confidence scores in a flexible MongoDB database.",
    architectureDetails: [
      "Error Level Analysis (ELA) pipeline recompressing inputs at known quality thresholds to isolate resaved artifacts.",
      "Keypoint matching via SIFT/ORB for detecting copy-move cloning within identical frames.",
      "Non-relational document schema in MongoDB storing inspection reports, EXIF metadata, and confidence metrics.",
      "Modular Python backend API exposing batch verification and heatmap rendering."
    ],
    image: "/src/assets/images/project_forgery_detection_1794382395910.jpg",
    links: {
      githubUrl: "https://github.com/Bhavatharni/image-forgery-detection",
      demoUrl: "https://github.com/Bhavatharni",
    },
    highlightMetrics: [
      { label: "Forensic Modules", value: "ELA + SIFT" },
      { label: "Processing Speed", value: "<1.4s / image" },
      { label: "Database", value: "MongoDB" },
    ],
  },
  {
    id: "rogb-isp-pipeline",
    projectNumber: "Project 03",
    title: "ROGB Image Signal Processing Pipeline",
    category: "Image Processing / Surgical Imaging",
    technologies: ["Python", "OpenCV", "NumPy", "MATLAB", "Simulink", "Color Science"],
    summary: "A custom image-processing pipeline designed to reconstruct and enhance images captured using a four-channel ROGB sensor pattern for surgical applications.",
    keyAreas: [
      "Custom ROGB CFA (Color Filter Array) pattern analysis.",
      "Four-channel RAW image extraction and de-interleaving.",
      "Custom demosaicing and spatial interpolation algorithms.",
      "White balance correction based on Gray World and White Point estimation.",
      "Color Correction Matrix (CCM) implementation and calibration.",
      "ColorChecker-based calibration and Delta E color accuracy evaluation.",
      "Yellow tissue and surgical cavity enhancement.",
      "Image denoising, bilateral smoothing, and edge-preserving sharpening."
    ],
    fullDescription: "Developed during research at HTIC (IIT Madras Research Park), this pipeline addresses the limitations of standard Bayer sensors in laparoscopic and endoscopic surgical environments. By replacing one green pixel with an Orange channel (Red-Orange-Green-Blue), the sensor captures critical blood vessel and tissue spectra. The pipeline reconstructs RAW sensor data through custom interpolation, calculates a 3x4 Color Correction Matrix calibrated via standard 24-patch ColorCheckers, and enhances subtle yellow fatty tissue boundaries critical for surgeon navigation.",
    architectureDetails: [
      "Custom ROGB 2x2 mosaic pattern demosaicing with adaptive gradient-directed interpolation.",
      "Delta E (CIE76 & CIEDE2000) quantitative color accuracy benchmarks against physical spectral patches.",
      "Targeted hue-specific contrast enhancement boosting micro-vascular contrast without saturating healthy tissue.",
      "Validated end-to-end in MATLAB/Simulink and ported to vectorized NumPy/OpenCV for rapid execution."
    ],
    image: "/src/assets/images/project_rogb_surgical_pipeline_1794382394378.jpg",
    links: {
      caseStudyUrl: "#experience",
      githubUrl: "https://github.com/Bhavatharni/rogb-isp-surgical-pipeline",
    },
    highlightMetrics: [
      { label: "Sensor Pattern", value: "Custom 4-Channel ROGB" },
      { label: "Accuracy Metric", value: "Delta E Optimization" },
      { label: "Domain", value: "Surgical Laparoscopy" },
    ],
  },
  {
    id: "realtime-chat-app",
    projectNumber: "Project 04",
    title: "Real-Time Chat Application",
    category: "Full-Stack Development",
    technologies: ["React", "Java", "Spring Boot", "WebSocket", "STOMP", "MySQL"],
    summary: "A real-time messaging application designed to support instant communication through a responsive interface and persistent backend services.",
    keyAreas: [
      "Full-duplex real-time communication using WebSocket and STOMP protocol.",
      "Backend messaging broker and state management with Spring Boot.",
      "RESTful API integration for user authentication and chat room management.",
      "Database-backed message history persistence using MySQL.",
      "Responsive, accessible user interface built with React and Tailwind CSS."
    ],
    fullDescription: "A full-stack collaboration platform enabling instantaneous group and direct messaging. The backend leverages Spring Boot with Spring WebSocket and STOMP message brokers to manage concurrent client connections with minimal latency. Chat history, read receipts, and user profiles are stored in MySQL, while the React frontend ensures smooth optimistic UI updates and live typing indicators.",
    architectureDetails: [
      "WebSocket handshake with Spring Security session validation.",
      "STOMP topic subscriptions allowing dynamic multi-room event broadcasting.",
      "Optimistic frontend rendering in React with auto-reconnection fallback.",
      "Indexed MySQL relational schema ensuring fast retrieval of historical chat logs."
    ],
    image: "/src/assets/images/project_mobile_design_1794377101397.jpg",
    links: {
      githubUrl: "https://github.com/Bhavatharni/spring-websocket-chat",
      demoUrl: "https://github.com/Bhavatharni",
    },
    highlightMetrics: [
      { label: "Protocol", value: "WebSocket / STOMP" },
      { label: "Backend", value: "Spring Boot" },
      { label: "Frontend", value: "React + Tailwind" },
    ],
  },
];

export const MILO_EXPERIENCE: MiloExperience = {
  company: "HTIC — IIT Madras Research Park",
  organizationDivision: "Healthcare Technology Innovation Centre",
  role: "Image Signal Processing / Surgical Imaging Engineering Intern",
  domain: "Medical Imaging and Computer Vision",
  period: "Internship",
  location: "Chennai, India",
  summary: "Worked on surgical imaging and image signal processing workflows, focusing on RAW image reconstruction, color correction, and image enhancement for next-generation surgical visualization.",
  contributions: [
    "Analyzed RAW image data and sensor-level image processing pipelines.",
    "Worked with custom ROGB (Red-Orange-Green-Blue) color filter array patterns.",
    "Explored demosaicing and spatial interpolation techniques for multi-channel sensors.",
    "Implemented white balance and color correction workflows.",
    "Experimented with Color Correction Matrix (CCM) calibration against standard ColorChecker charts.",
    "Developed yellow enhancement techniques for surgical imaging to aid tissue differentiation.",
    "Evaluated color accuracy using ColorChecker patches and Delta E metrics.",
    "Explored image denoising, Gaussian filtering, and image sharpening algorithms."
  ],
  toolsUsed: ["Python", "OpenCV", "NumPy", "MATLAB", "Simulink", "ColorChecker"],
};

export const MILO_EDUCATION: MiloEducation = {
  degree: "Bachelor of Engineering",
  major: "Computer Science and Engineering",
  institution: "Sri Ramakrishna Engineering College, Coimbatore",
  duration: "2022 – 2026",
  cgpa: "8.38 / 10",
  academicFocus: [
    "Data Structures and Algorithms",
    "Object-Oriented Programming (OOP)",
    "Database Management Systems (DBMS)",
    "Computer Networks",
    "Software Engineering",
    "Artificial Intelligence"
  ],
};

export const MILO_SKILL_GROUPS: SkillGroup[] = [
  {
    category: "Programming Languages",
    icon: "code",
    skills: ["Java", "Python", "C", "JavaScript"],
  },
  {
    category: "Backend Development",
    icon: "server",
    skills: [
      "Spring Boot",
      "Spring Security",
      "Spring Web",
      "Hibernate",
      "REST API Development",
      "Microservices Fundamentals"
    ],
  },
  {
    category: "Frontend Development",
    icon: "layout",
    skills: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS"],
  },
  {
    category: "Databases",
    icon: "database",
    skills: ["MySQL", "MongoDB", "Firebase"],
  },
  {
    category: "Image Processing & AI",
    icon: "eye",
    skills: [
      "OpenCV",
      "NumPy",
      "Image Signal Processing",
      "RAW Image Processing",
      "Demosaicing",
      "Color Correction Matrix",
      "Machine Learning Fundamentals"
    ],
  },
  {
    category: "Development Tools",
    icon: "wrench",
    skills: [
      "Git",
      "GitHub",
      "Postman",
      "IntelliJ IDEA",
      "VS Code",
      "MATLAB / Simulink"
    ],
  },
];

export const MILO_ACHIEVEMENTS = {
  problemSolving: {
    count: "180+ Problems Solved on LeetCode",
    description: "Consistent practice in Data Structures and Algorithms with a focus on optimal time and space complexity.",
    topics: [
      "Arrays and Strings",
      "Linked Lists",
      "Trees and Graphs",
      "Dynamic Programming",
      "Searching and Sorting",
      "Recursion and Backtracking"
    ],
  },
  certifications: [
    {
      issuer: "HackerRank",
      title: "Java Certification",
      detail: "Verified proficiency in core Java language fundamentals, OOP concepts, collections framework, and exception handling.",
    },
    {
      issuer: "HackerRank",
      title: "Problem Solving Certification",
      detail: "Demonstrated analytical capability in algorithmic problem solving, graph theory, and dynamic programming.",
    },
  ],
};

export const MILO_INTERESTS: InterestArea[] = [
  {
    title: "Backend Engineering",
    headline: "Scalable APIs & Systems",
    description: "Building reliable applications, designing high-performance REST APIs, and understanding scalable backend architecture with Java and Spring Boot.",
    tags: ["Java", "Spring Boot", "REST APIs", "Database Design"],
  },
  {
    title: "Artificial Intelligence",
    headline: "Intelligent Workflows & LLMs",
    description: "Exploring LLM applications, AI integrations, predictive algorithms, and intelligent software solutions that augment traditional backend systems.",
    tags: ["LLM Applications", "AI Integrations", "Machine Learning"],
  },
  {
    title: "Computer Vision",
    headline: "Image Reconstruction & Color Science",
    description: "Understanding RAW image reconstruction, image enhancement, color correction matrices, and surgical imaging signal processing algorithms.",
    tags: ["OpenCV", "ROGB ISP", "Color Correction", "Demosaicing"],
  },
  {
    title: "Problem Solving",
    headline: "Algorithms & Algorithmic Rigor",
    description: "Developing efficient solutions through data structures, algorithmic complexity optimization, and continuous competitive problem solving.",
    tags: ["LeetCode 180+", "Data Structures", "Dynamic Programming"],
  },
];
