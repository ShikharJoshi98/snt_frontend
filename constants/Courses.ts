export const courseCategories = [
  { courseCategory: "Software Engineering" },
  { courseCategory: "Cloud & DevOps" },
  { courseCategory: "Cybersecurity" },
  { courseCategory: "Networking" },
  { courseCategory: "Data & AI" },
  { courseCategory: "Quantum Computing" },
];

export interface CurriculumItem {
  topic: string;
  subTopic: string[];
}

export interface Course {
  id: number;
  course: string;
  courseCategory: string;
  courseLogo: string;
  courseDuration: string;
  description: string;
  incomeRange: string;
  jobOpportunities: string;
  curriculum: CurriculumItem[];
}

export const courses: Course[] = [
  {
    id: 1,
    course: "Full-Stack Cloud Developer Program",
    courseCategory: "Software Engineering",
    courseLogo: "/spring-boot-logo-icon-hd.webp",
    courseDuration: "12–16 Weeks",
    description:
      "Learn to build secure and scalable applications using Java/Spring Boot, Node.js, React, or Angular, with continuous integration and deployment pipelines.",
    incomeRange: "₹6–15 LPA",
    jobOpportunities:
      "Full-Stack Developer, Frontend Engineer, Backend Developer, Software Engineer",
    curriculum: [
      {
        topic: "Frontend Development",
        subTopic: ["HTML5, CSS3, JavaScript (ES6+)", "React or Angular Frameworks", "State Management (Redux / Context API)", "Responsive UI Design"],
      },
      {
        topic: "Backend Development",
        subTopic: ["Java & Spring Boot", "Node.js & Express", "RESTful APIs", "Authentication & Authorization (JWT/OAuth)"],
      },
      {
        topic: "Database & ORM",
        subTopic: ["SQL (MySQL/PostgreSQL)", "NoSQL (MongoDB)", "JPA/Hibernate", "Data Modeling & Relationships"],
      },
      {
        topic: "DevOps & CI/CD",
        subTopic: ["Docker Basics", "Git & GitHub Actions", "CI/CD Pipelines", "Cloud Deployment on AWS/GCP"],
      },
      {
        topic: "Capstone Project",
        subTopic: ["Build & deploy a full-stack web app", "Implement CI/CD automation", "Peer code reviews & optimization"],
      },
    ],
  },
  {
    id: 2,
    course: "Cloud & DevOps Engineer Program",
    courseCategory: "Cloud & DevOps",
    courseLogo: "/download.png",
    courseDuration: "12–16 Weeks",
    description:
      "Master Docker, Kubernetes, Terraform, and GitOps (ArgoCD) while understanding SLOs, reliability, and FinOps best practices.",
    incomeRange: "₹7–18 LPA",
    jobOpportunities:
      "DevOps Engineer, Cloud Engineer, SRE, Infrastructure Automation Engineer",
    curriculum: [
      {
        topic: "Cloud Fundamentals",
        subTopic: ["AWS / GCP / Azure Basics", "Compute, Storage, and Networking Services", "IAM & Security Best Practices"],
      },
      {
        topic: "Containerization",
        subTopic: ["Docker Concepts", "Docker Compose", "Container Image Optimization", "Private Registries"],
      },
      {
        topic: "Kubernetes & Orchestration",
        subTopic: ["Kubernetes Architecture", "Pods, Services, and Deployments", "Helm Charts", "Monitoring with Prometheus & Grafana"],
      },
      {
        topic: "Infrastructure as Code (IaC)",
        subTopic: ["Terraform Fundamentals", "Modules & State Management", "Provisioning Multi-Cloud Resources"],
      },
      {
        topic: "GitOps & Automation",
        subTopic: ["GitHub Actions", "ArgoCD Setup", "SLO/SLI Metrics", "FinOps Optimization"],
      },
    ],
  },
  {
    id: 3,
    course: "Cybersecurity & DevSecOps",
    courseCategory: "Cybersecurity",
    courseLogo: "/devops.webp",
    courseDuration: "10–14 Weeks",
    description:
      "Develop real-world security expertise with SAST/DAST, container security, IAM, and SOC operations, and learn to harden CI/CD pipelines.",
    incomeRange: "₹6–16 LPA",
    jobOpportunities:
      "Cybersecurity Analyst, DevSecOps Engineer, SOC Analyst, Application Security Engineer",
    curriculum: [
      {
        topic: "Security Fundamentals",
        subTopic: ["CIA Triad & Security Concepts", "Threat Modeling", "Risk Assessment"],
      },
      {
        topic: "Application Security",
        subTopic: ["SAST & DAST Tools", "OWASP Top 10", "Secure Coding Practices"],
      },
      {
        topic: "Cloud & Container Security",
        subTopic: ["Docker & Kubernetes Hardening", "IAM & RBAC Policies", "Vulnerability Management"],
      },
      {
        topic: "DevSecOps Pipelines",
        subTopic: ["Integrating Security in CI/CD", "Secrets Management", "Automated Compliance Checks"],
      },
      {
        topic: "SOC & Incident Response",
        subTopic: ["SIEM Tools (Splunk, ELK)", "Incident Detection & Response", "Forensics & Reporting"],
      },
    ],
  },
  {
    id: 4,
    course: "Enterprise Networking",
    courseCategory: "Networking",
    courseLogo: "/ICON-enterprise-networks-lime-min.png",
    courseDuration: "8–12 Weeks",
    description:
      "Get practical exposure to Routing, Switching, SD-WAN, VPNs, Firewalls, and Zero-Trust Architecture aligned with CCNA standards.",
    incomeRange: "₹4–10 LPA",
    jobOpportunities:
      "Network Engineer, System Administrator, Network Security Engineer, IT Support Specialist",
    curriculum: [
      {
        topic: "Networking Basics",
        subTopic: ["OSI Model", "IP Addressing & Subnetting", "LAN/WAN Concepts"],
      },
      {
        topic: "Routing & Switching",
        subTopic: ["Static & Dynamic Routing", "VLANs & Trunking", "Spanning Tree Protocol"],
      },
      {
        topic: "Enterprise Connectivity",
        subTopic: ["VPN Configuration", "SD-WAN Fundamentals", "QoS & Traffic Engineering"],
      },
      {
        topic: "Network Security",
        subTopic: ["Firewalls & ACLs", "IDS/IPS", "Zero-Trust Architecture"],
      },
      {
        topic: "Practical Labs",
        subTopic: ["Cisco Packet Tracer", "Network Troubleshooting", "Performance Monitoring"],
      },
    ],
  },
  {
    id: 5,
    course: "Data Science & GenAI Engineer",
    courseCategory: "Data & AI",
    courseLogo: "/dsai logo.png",
    courseDuration: "16–24 Weeks",
    description:
      "Work on Machine Learning, Deep Learning, and RAG applications using Python, TensorFlow, and vector databases for real-time insights.",
    incomeRange: "₹7–20 LPA",
    jobOpportunities:
      "Data Scientist, GenAI Engineer, ML Engineer, AI Research Associate",
    curriculum: [
      {
        topic: "Python & Data Fundamentals",
        subTopic: ["Python for Data Analysis", "NumPy, Pandas, Matplotlib", "Data Wrangling & EDA"],
      },
      {
        topic: "Machine Learning",
        subTopic: ["Supervised & Unsupervised Learning", "Model Evaluation", "Feature Engineering"],
      },
      {
        topic: "Deep Learning",
        subTopic: ["Neural Networks", "TensorFlow & PyTorch", "CNNs & RNNs"],
      },
      {
        topic: "Generative AI & RAG",
        subTopic: ["LLM Basics", "Prompt Engineering", "Vector Databases (FAISS, Pinecone)", "RAG Pipelines"],
      },
      {
        topic: "Capstone Project",
        subTopic: ["Build an ML/GenAI Model", "Deploy with Streamlit/FastAPI", "Cloud Integration & Monitoring"],
      },
    ],
  },
  {
    id: 6,
    course: "Quantum Foundations",
    courseCategory: "Quantum Computing",
    courseLogo: "/QuantumFoundation.png",
    courseDuration: "8–12 Weeks",
    description:
      "Explore Qubits, Quantum Circuits, and Qiskit to understand emerging computing paradigms and post-quantum security.",
    incomeRange: "₹8–25 LPA",
    jobOpportunities:
      "Quantum Researcher, Quantum Software Developer, Post-Quantum Security Analyst",
    curriculum: [
      {
        topic: "Quantum Fundamentals",
        subTopic: ["Qubits & Superposition", "Quantum Entanglement", "Quantum Gates"],
      },
      {
        topic: "Quantum Circuits",
        subTopic: ["Quantum Algorithms", "Measurement & Noise", "Circuit Design with Qiskit"],
      },
      {
        topic: "Quantum Programming",
        subTopic: ["Python & Qiskit Basics", "Simulation & Visualization", "Quantum Error Correction"],
      },
      {
        topic: "Quantum Cryptography",
        subTopic: ["Post-Quantum Security", "Quantum Key Distribution", "Quantum-Safe Algorithms"],
      },
      {
        topic: "Capstone Project",
        subTopic: ["Implement Quantum Circuits", "Run on IBM Quantum Simulator", "Analyze Quantum Results"],
      },
    ],
  },
];

