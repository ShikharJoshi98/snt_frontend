import { FaBrain, FaCertificate, FaEye, FaIndustry, FaLaptopCode, FaRobot, FaTools } from "react-icons/fa";
import { GiStairsGoal } from "react-icons/gi";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { SiSpringboot } from "react-icons/si";
import { TbCertificate } from "react-icons/tb";

export const courseCategories = [
  { courseCategory: "Java" },
  { courseCategory: "AI / Machine Learning" },
  { courseCategory: "Cloud / DevOps" },
  { courseCategory: "Quantum Computing" },
];

export interface CurriculumItem {
  topic: string;
  subTopic: string[];
}

export interface HeroPointItem {
  icon: any;      
  desc: string;
}

export interface TargetAudienceItem {
  title: string;
  desc: string;
}

export interface Course {
  id: number;
  course: string;
  courseCategory: string;
  courseLogo: string;
  courseDuration: string;
  description: string;
  incomeRange: string;
  jobOpportunities?: string;

  curriculum: CurriculumItem[];

  heroPoints?: HeroPointItem[];

  coursePoints?: string[];
  coursePointsText?: string,
quoteText?:string,
  whyText?: string;

  targetAudience?: TargetAudienceItem[];
}


export const courses: Course[] = [
  {
    id: 1,
    course: "JUnit, Mockito & Spring Boot Testing Masterclass",
    courseCategory: "Java",
    courseLogo: "/junit.png",
    courseDuration: "12–16 Weeks",
    description:
      "Become a Complete Test Engineer — from JUnit Basics to Mockito, Test Coverage, PowerMock, Spring Testing & Microservices Testing.",
    incomeRange: "₹6–15 LPA",
    quoteText: "Write Better Code. Catch Bugs Early. Become Test-Ready for Any Job.",
    coursePointsText:'You become a fully capable Test Automation Developer or a professional Full-Stack Developer with strong testing skills.',
    coursePoints: [
      "JUnit 4 & JUnit 5",
      "Mockito from basics to advanced",
      "PowerMock for static mocking",
      "Test-driven approach to building microservices",
      "Real testing of Spring Boot applications",
      "Testing DAO, Service, Controller layers",
      "Test coverage improvement",
      "Industry-level patterns and best practices",
    ],
    whyText: 'You become a fully capable Test Automation Developer or a professional Full-Stack Developer with strong testing skills.',
    heroPoints: [
      { icon: FaTools, desc: "100% Practical" },
      { icon: GiStairsGoal, desc: "Beginner to Advanced" },
      { icon: FaLaptopCode, desc: "Real Projects Included" },
      { icon: TbCertificate, desc: "Certificate Provided" },
    ],

    targetAudience: [
      {
        title: "Java Developers",
        desc: "Develop stronger testing foundations for real-world Java applications."
      },
      {
        title: "Spring Boot Developers",
        desc: "Improve your ability to test APIs, services, and microservices effectively."
      },
      {
        title: "Testing / QA Engineers",
        desc: "Master modern testing frameworks and become industry-ready."
      },
      {
        title: "Automation Engineers",
        desc: "Enhance automation workflows with proper unit and integration testing skills."
      },
      {
        title: "Students Preparing for IT Jobs",
        desc: "Gain practical testing expertise that helps you stand out in interviews."
      },
      {
        title: "Anyone Seeking Strong Testing Foundations",
        desc: "Build a deep understanding of testing tools, patterns, and best practices."
      }
    ],

    curriculum: [
      {
        topic: "Software Setup",
        subTopic: [
          "Install Java SDK",
          "Install Eclipse IDE",
          "Download project files"
        ]
      },
      {
        topic: "Course Introduction",
        subTopic: [
          "Overview of the complete course"
        ]
      },
      {
        topic: "JUnit in Action",
        subTopic: [
          "Introduction to testing",
          "JUnit introduction",
          "Hello JUnit",
          "Test for exceptions",
          "Using @Before and @After"
        ]
      },
      {
        topic: "Using JUnit 5",
        subTopic: [
          "JUnit 5 introduction",
          "Maven basics",
          "Creating a Maven project",
          "Migrating annotations",
          "Assert exceptions",
          "Running tests in IDE & Maven"
        ]
      },
      {
        topic: "Mockito in Action",
        subTopic: [
          "Introduction to Mockito",
          "What is mocking?",
          "Order processor use case",
          "DAO layer creation",
          "Business layer creation",
          "Add Mockito dependency",
          "Stubbing & expectations",
          "Verify results",
          "Negative scenario testing",
          "Mock exceptions",
          "Testing cancel order",
          "Cancel order: negative & exception scenarios"
        ]
      },
      {
        topic: "Mockito with JUnit 5",
        subTopic: [
          "Update use-case",
          "Add dependencies",
          "Setup mocks",
          "Positive scenario tests",
          "Negative scenario tests"
        ]
      },
      {
        topic: "Test Coverage",
        subTopic: [
          "Introduction to coverage",
          "Measuring coverage",
          "Install EclEmma",
          "Improve coverage step-by-step"
        ]
      },
      {
        topic: "Advanced Mockito",
        subTopic: [
          "Verification modes",
          "More verification options",
          "ScrapBook project setup",
          "Stub void methods (implicit & explicit)",
          "Use doNothing + consecutive calls"
        ]
      },
      {
        topic: "Best Practices & Testing Patterns",
        subTopic: [
          "The F.I.R.S.T principle",
          "Test doubles (dummy, stub, mock, spy)",
          "Test doubles in Mockito",
          "Partial mocking with Spy",
          "Spy vs Mock"
        ]
      },
      {
        topic: "Maven + JUnit Quick Start",
        subTopic: [
          "Maven overview",
          "Creating a Maven project",
          "Running tests with Maven"
        ]
      },
      {
        topic: "Testing Maven Java Web Application",
        subTopic: [
          "Download & setup project",
          "Create tests & mocks",
          "Test doGet",
          "Test doPost"
        ]
      },
      {
        topic: "Parameterized JUnit",
        subTopic: [
          "Introduction",
          "Create fields & constructor",
          "Create static dataset",
          "Update test with parameters",
          "Parameterized test execution flow"
        ]
      },
      {
        topic: "PowerMock Jump Start",
        subTopic: [
          "PowerMock introduction",
          "Use-case",
          "Create project",
          "Add PowerMock dependencies",
          "Prepare for testing",
          "Mock static methods"
        ]
      },
      {
        topic: "Spring Testing Quick Start",
        subTopic: [
          "Spring Framework introduction",
          "Ticketing use-case",
          "Create Maven project",
          "DAO layer",
          "Service layer",
          "Update pom.xml",
          "Create Spring config",
          "Inject dependencies",
          "Create JUnit test",
          "Use Spring Test API",
          "Understand test flow",
          "Unit vs Integration testing"
        ]
      },
      {
        topic: "Create Spring Boot Microservices",
        subTopic: [
          "Install Spring Tool Suite",
          "Configure JDK",
          "Install MySQL & Workbench",
          "Create database tables",
          "Create microservice project",
          "Model + Repository",
          "REST controllers",
          "Configure datasource",
          "Test microservice",
          "Create second microservice",
          "Integrate microservices",
          "Integration testing",
          "Refactoring"
        ]
      },
      {
        topic: "Test Spring Boot Applications",
        subTopic: [
          "Add Mockito dependency",
          "Test create method",
          "Test getCoupon",
          "Test exception scenarios",
          "Product service setup",
          "Test create product"
        ]
      },
      {
        topic: "Test E-Dating Spring Boot REST API",
        subTopic: [
          "Project introduction",
          "Setup",
          "How to test",
          "Setup Lombok",
          "Setup mocking",
          "Test register user",
          "Test update interests",
          "Test fetch users",
          "Test delete interest",
          "Test find matches"
        ]
      }
    ],
  },
  {
    id: 2,
    course: "Spring AI Masterclass",
    courseCategory: "Java",
    courseLogo: "/springAI.png",
    courseDuration: "12–16 Weeks",
    description:
      "Learn Spring AI, LLM Integrations, Multi-Modal APIs, RAG Workflows, Vector Databases, PGVector, and Real AI-Driven App Development.",
    incomeRange: "₹6–15 LPA",
    coursePoints: [
  "Connect your Spring Boot app to OpenAI",
  "Build intelligent chatbots",
  "Use DALLE for image generation",
  "Use Whisper for audio transcription",
  "Implement multi-modal AI pipelines",
  "Build RAG systems using Vector DBs",
  "Build complete AI-driven frontends",
  "Deploy enterprise-ready AI microservices"
    ],
     quoteText: "Spring + AI = The Future of Enterprise Applications",
    coursePointsText:'Modern Spring Boot applications are now deeply integrated with ML/LLM capabilities. Spring AI makes it incredibly easy to:',
    whyText: 'Every Java/Spring developer MUST know these technologies in 2025 and beyond.',
    heroPoints: [
      { icon: SiSpringboot, desc: "Java + Spring Boot Required" },
      { icon: FaBrain, desc: "AI + RAG + Vector D" },
      { icon: FaLaptopCode, desc: "Real Full-Stack AI Project" },
      { icon: TbCertificate, desc: "Certificate Provided" },
    ],

    targetAudience: [
  {
    title: "Spring Boot Developers",
    desc: "Integrate AI models into production-grade Spring Boot applications."
  },
  {
    title: "Full-Stack Java Developers",
    desc: "Build intelligent full-stack applications powered by OpenAI APIs."
  },
  {
    title: "Backend/API Engineers",
    desc: "Enhance backend systems with AI-driven APIs, automation, and microservices."
  },
  {
    title: "Cloud Developers",
    desc: "Deploy scalable AI services using cloud platforms and modern DevOps practices."
  },
  {
    title: "AI-ML Enthusiasts",
    desc: "Experiment with multi-modal models such as GPT, DALLE, and Whisper."
  },
  {
    title: "Architects Building AI-Powered Systems",
    desc: "Design enterprise-ready architectures that incorporate AI pipelines and vector search."
  },
  {
    title: "Students Preparing for Modern Java Career Paths",
    desc: "Build future-ready Java + AI development skills aligned with industry needs."
  }
],
    curriculum: [
  {
    topic: "Introduction to Spring AI",
    subTopic: [
      "Introduction",
      "Role of AI in Spring Ecosystem",
      "Spring AI Capabilities"
    ]
  },
  {
    topic: "Working with AI Models in Spring",
    subTopic: [
      "What is an LLM",
      "Spring AI Documentation Overview",
      "OpenAI ChatGPT Overview",
      "Generate Spring AI Project",
      "OpenAI API Keys & Setup",
      "Configuring application with API keys",
      "Calling ChatClient via Controller",
      "ChatResponse object",
      "API using PromptTemplate",
      "API using String-based prompts",
      "Prompt roles (system/user/assistant)",
      "API with Prompt + Data Objects",
      "OutputConverters & BeanOutputConverter",
      "ListOutputConverter for entities"
    ]
  },
  {
    topic: "Spring AI with DALLE & Audio (Multi-Modality)",
    subTopic: [
      "Spring AI Multimodal Introduction",
      "Image-to-Text Generation API",
      "Image Generation API (DALLE)",
      "Audio Transcription API (Whisper)",
      "Text-to-Speech API"
    ]
  },
  {
    topic: "Retrieval-Augmented Generation (RAG) with Spring AI",
    subTopic: [
      "What is RAG",
      "Vector & Vector DB concepts",
      "RAG architecture overview",
      "Simple Vector Store implementation",
      "Understanding LLM tokens",
      "Loading SimpleVector store",
      "Implementing RAG API using SimpleVector",
      "Adding PGVector to your application",
      "Loading data into PGVector",
      "Implementing Similarity Search with PGVector",
      "Full RAG Implementation with PGVector"
    ]
  },
  {
    topic: "Building an AI-Driven Application (End-to-End Project)",
    subTopic: [
      "Application overview",
      "Creating frontend app & environment",
      "Adding feedback form",
      "Adding feedback history",
      "Creating AI-powered Spring Boot backend",
      "Feedback API",
      "Save Feedback API",
      "Fetch Feedback API",
      "Implement Save Feedback in UI",
      "Implement Feedback History in UI",
      "UI Enhancements"
    ]
  }
],
  },
  {
    id: 3,
    course: "Spring Boot Web Services & JPA Masterclass",
    courseCategory: "Java",
    courseLogo: "/spring-boot-logo-icon-hd.webp",
    courseDuration: "12–16 Weeks",
    description:
      "Learn the complete Spring ecosystem: REST APIs, SOAP services, JPA/Hibernate, Spring Security, Swagger, Versioning & Functional Programming.",
    incomeRange: "₹6–15 LPA",
    coursePoints: [
  "RESTful Web Services (Beginner → Advanced)",
  "SOAP Web Services (Contract-first, WSDL, XSD, JAXB)",
  "Spring Boot fundamentals",
  "Spring Framework internals",
  "JPA & Hibernate",
  "Connecting REST API → Database",
  "Spring Security basics",
  "Functional programming in Java",
  "Real-world backend + database integration"
],
     quoteText: "Become a Complete Spring Boot Backend Developers",
    coursePointsText:'Spring Boot powers millions of enterprise applications. This course gives you EXACTLY the skills top companies want:',
    whyText: 'You will be ready to build production-grade APIs used in real systems worldwide.',
    heroPoints: [
      { icon: GiStairsGoal, desc: "Complete Beginner → Advanced" },
      { icon: SiSpringboot, desc: "100% Practical Spring Boot" },
      { icon: FaLaptopCode, desc: "Real Backend Projects Included" },
      { icon: TbCertificate, desc: "Certificate Provided" },
    ],

    targetAudience: [
  {
    title: "Java Developers",
    desc: "Strengthen your backend and API development skills using the Spring ecosystem."
  },
  {
    title: "Backend Developers",
    desc: "Build robust, scalable REST and SOAP services with Spring Boot and JPA."
  },
  {
    title: "Spring Boot Beginners",
    desc: "Learn Spring Boot from the ground up with real-world projects and database integration."
  },
  {
    title: "Full-Stack Developers",
    desc: "Enhance your full-stack applications with strong backend logic and secure APIs."
  },
  {
    title: "Students Preparing for IT Jobs",
    desc: "Gain practical Java + Spring skills required for modern backend roles."
  },
  {
    title: "Anyone Wanting to Master the Spring Ecosystem",
    desc: "Build a complete understanding of Spring Boot, JPA, and real-world backend architectures."
  }
]
,
    curriculum: [
  {
    topic: "Getting Started",
    subTopic: [
      "Introduction to course",
      "Course guide & setup"
    ]
  },
  {
    topic: "Introduction to Web Services",
    subTopic: [
      "What is a Web Service",
      "Key terminology",
      "SOAP vs REST overview",
      "SOAP architecture",
      "SOAP use cases",
      "REST concepts",
      "Why REST is more popular"
    ]
  },
  {
    topic: "Introduction to Spring Framework (16 Steps)",
    subTopic: [
      "Goals of Spring",
      "Creating a new project via Initializr",
      "Tightly coupled example (GameRunner + Mario)",
      "Loose coupling design",
      "Using interfaces (Mario, Pacman)",
      "How Dependency Injection solves loose coupling",
      "Spring terminology (IOC, Bean, Context)",
      "Does Spring add real value?",
      "Running Super Contra example",
      "Maven overview",
      "Types of Dependency Injection",
      "Spring modules",
      "Spring projects",
      "Review of key concepts"
    ]
  },
  {
    topic: "Introduction to Spring Boot (14 Steps)",
    subTopic: [
      "Before Spring Boot → The old world",
      "Spring Boot project setup",
      "Build Hello World API",
      "Starter projects",
      "Auto-configuration",
      "DevTools",
      "Profiles",
      "ConfigurationProperties",
      "Embedded servers",
      "Actuator endpoints",
      "Spring vs Spring Boot vs Spring MVC",
      "Course review"
    ]
  },
  {
    topic: "SOAP Web Services with Spring & Spring Boot",
    subTopic: [
      "Contract-first approach",
      "Defining XSD for request/response",
      "JAXB configuration",
      "Creating endpoints",
      "Message dispatcher servlet",
      "Generating WSDL",
      "Testing SOAP with Wizdler",
      "Course details service",
      "Get all course details",
      "Delete course service",
      "Enum-based status",
      "SOAP faults & exception handling",
      "SOAP security with WS-Security"
    ]
  },
  {
    topic: "RESTful Web Services with Spring & Spring Boot",
    subTopic: [
      "Create REST project",
      "Build Hello World API",
      "Return a bean in GET API",
      "Add path variables",
      "User bean & DAO service",
      "Implement GET/POST/DELETE",
      "Return status codes correctly",
      "POST location header",
      "Validations",
      "Exception handling for all resources",
      "OpenAPI and Swagger documentation",
      "XML response support",
      "Internationalization (i18n)",
      "Versioning approaches",
      "HATEOAS implementation",
      "Static & dynamic filtering",
      "Actuator monitoring",
      "HAL explorer"
    ]
  },
  {
    topic: "Introduction to JPA in 12 Steps",
    subTopic: [
      "Create JPA project",
      "Launch H2 console",
      "Spring JDBC basics (insert, delete, query)",
      "JPA & Hibernate magic",
      "Spring Data JPA introduction",
      "Spring Data JPA features",
      "Hibernate vs JPA"
    ]
  },
  {
    topic: "Connecting RESTful Web Services to JPA",
    subTopic: [
      "Connect REST API → H2 DB",
      "Create User entity",
      "Create Post entity (Many-to-One)",
      "Get posts of a user",
      "Create post for a user",
      "JPA/Hibernate queries",
      "Connect to MySQL",
      "(Optional) Docker setup",
      "Basic Authentication with Spring Security",
      "Enhancing Spring Security"
    ]
  },
  {
    topic: "RESTful Web Services — Best Practices",
    subTopic: [
      "Richardson Maturity Model",
      "Industry best practices"
    ]
  },
  {
    topic: "Congratulations",
    subTopic: [
      "Course completion steps"
    ]
  },
  {
    topic: "Appendix — Functional Programming in 30 Minutes",
    subTopic: [
      "First functional program",
      "Using filter",
      "Using lambdas",
      "Using streams",
      "Using map",
      "Optional class",
      "FP exercises & review"
    ]
  }
],
  },
  {
  id: 4,
  course: "Computer Vision & Deep Learning Masterclass",
  courseCategory: "AI / Machine Learning",
  courseLogo: "/computerVisionDeepLearning.png",
  courseDuration: "12–20 Weeks",
  description:
    "Learn Image Classification, Object Detection, GANs, Segmentation, Tracking, Captioning, Deepfake, and AI Image Generation with TensorFlow + Keras + YOLO.",
  incomeRange: "₹8–25 LPA",
  quoteText: "Become a Full-Stack Computer Vision Engineer",
  coursePointsText:
    "Master the exact techniques used in self-driving cars, medical imaging, manufacturing automation, video analytics, retail intelligence, and generative AI.",
  
  coursePoints: [
    "CNNs & Deep Learning foundations",
    "Full TensorFlow/Keras mastery",
    "YOLOv8 object detection",
    "GANs & image generation",
    "Image captioning with CNN + RNN",
    "Segmentation using FAST-SAM",
    "Deepfake creation",
    "Stable Diffusion prompting, UI & code",
    "RNN/LSTM/GRU sequence modeling",
    "Transfer learning on real datasets",
    "Object tracking & counting",
    "Face detection & mood/gender/age recognition"
  ],

  heroPoints: [
    { icon: GiStairsGoal, desc: "Complete Beginner → Advanced" },
    { icon: FaRobot, desc: "End-to-End Computer Vision" },
    { icon: FaLaptopCode, desc: "50+ Projects & Exercises" },
    { icon: TbCertificate, desc: "Certificate Included" }
  ],

  targetAudience: [
    { title: "Deep Learning Beginners", desc: "Start from zero and master advanced CV and DL models." },
    { title: "ML Engineers", desc: "Enhance your skill set with state-of-the-art CV architectures." },
    { title: "AI Enthusiasts", desc: "Build real AI systems using CNNs, GANs, RNNs, and YOLO." },
    { title: "Computer Vision Learners", desc: "Learn detection, segmentation, classification, and tracking." },
    { title: "Students Preparing for AI Jobs", desc: "Gain practical experience with real datasets and projects." },
    { title: "Python Developers", desc: "Implement AI with TensorFlow, Keras, and Ultralytics." },
    { title: "Researchers & Project Builders", desc: "Build research-ready implementations of modern models." },
    { title: "Professionals Shifting to AI/ML", desc: "Get industry-ready skills for AI-driven roles." }
  ],

  curriculum: [
    {
      topic: "Computer Vision Introduction & Basics",
      subTopic: [
        "Introduction",
        "Past, Present & Future of CV",
        "Applications across industries",
        "Image processing basics",
        "Color spaces & transformations"
      ]
    },
    {
      topic: "Neural Networks — Introduction to Deep Learning",
      subTopic: [
        "Intuition behind neural networks",
        "Neural Network architecture",
        "Approach to deep learning problems",
        "5-step lifecycle of deep learning models"
      ]
    },
    {
      topic: "TensorFlow & Keras",
      subTopic: [
        "Sequential vs Functional API",
        "Sequential API — code implementation",
        "Functional API — code implementation",
        "Cost, gradient & CV pipeline",
        "Activation functions",
        "Tips to improve model performance",
        "Feed-forward network",
        "Keras callbacks",
        "Optimizers",
        "Loss functions",
        "Evaluation metrics"
      ]
    },
    {
      topic: "Image Classification + CNN Project",
      subTopic: [
        "CNN introduction",
        "CNN architecture",
        "Full CNN implementation",
        "CNN exercise 1 (with solution)",
        "CNN exercise 2 (with solution)"
      ]
    },
    {
      topic: "Keras Preprocessing & Transfer Learning",
      subTopic: [
        "Image augmentation with preprocessing layers",
        "TensorFlow/Keras code implementation",
        "Exercise 3 + solution",
        "Transfer learning introduction",
        "Transfer learning implementation",
        "X-ray dataset implementation (exercise + solution)"
      ]
    },
    {
      topic: "RNN, LSTM & GRU",
      subTopic: [
        "Introduction to RNNs",
        "LSTM concepts",
        "GRU concepts",
        "Where to use RNN architectures"
      ]
    },
    {
      topic: "GANs & Image Captioning Project",
      subTopic: [
        "What are GANs?",
        "GAN components",
        "Training process",
        "Pros & cons",
        "Full GAN implementation",
        "Image captioning — problem statement",
        "Image captioning — Part 1",
        "Image captioning — Part 2",
        "Image captioning — Part 3"
      ]
    },
    {
      topic: "Object Detection — Complete Theory",
      subTopic: [
        "Object detection introduction",
        "Semantic vs instance segmentation",
        "Types of segmentation",
        "Two-step detection",
        "RCNN architecture",
        "Fast RCNN",
        "Faster RCNN",
        "Mask RCNN",
        "YOLO introduction",
        "SSD architecture"
      ]
    },
    {
      topic: "Image Annotation Tools",
      subTopic: [
        "Popular annotation tools",
        "Preparing custom datasets"
      ]
    },
    {
      topic: "YOLO Models for Object Detection, Classification & Segmentation",
      subTopic: [
        "YOLOv8 introduction",
        "YOLO for real-time video detection"
      ]
    },
    {
      topic: "Segmentation using FAST-SAM",
      subTopic: [
        "FAST-SAM introduction",
        "Segment Anything Model (SAM) overview"
      ]
    },
    {
      topic: "Object Tracking & Counting Project",
      subTopic: [
        "YOLOv8-based tracking",
        "Full tracking & counting project"
      ]
    },
    {
      topic: "Human Action Recognition Project",
      subTopic: [
        "Action recognition from video",
        "Full project workflow"
      ]
    },
    {
      topic: "Image Analysis Models",
      subTopic: [
        "YOLO-WORLD demo",
        "Moondream1 model"
      ]
    },
    {
      topic: "Face Detection & Recognition",
      subTopic: [
        "DeepFace project implementation",
        "Age, gender & emotion recognition"
      ]
    },
    {
      topic: "Deepfake Generation",
      subTopic: [
        "Deepfake workflow overview",
        "Full deepfake generation project"
      ]
    },
    {
      topic: "Generative AI — Diffusion Models & Image Generation",
      subTopic: [
        "Stable Diffusion concepts",
        "Prompting techniques",
        "Stable Diffusion tools",
        "Stable Diffusion code implementation",
        "Stable Diffusion UI",
        "Stable Cascade",
        "Forge setup"
      ]
    }
  ]
  },
  {
  id: 5,
  course: "Machine Learning & Deep Learning Mega Projects Masterclass",
  courseCategory: "AI / Machine Learning",
  courseLogo: "/machineLearning.png",
  courseDuration: "10–18 Weeks",
  description:
    "Learn Machine Learning & Deep Learning through 23 real-world projects. Covers ML algorithms, ANN, CNN, RNN/LSTM, NLP, Transfer Learning, Fraud Detection, House Pricing, Medical Analytics, and more.",
  incomeRange: "₹6–20 LPA",
  quoteText: "Learn Machine Learning the Only Way That Works — Through Real Projects",
  coursePointsText:
    "This masterclass is fully based on real practical ML/DL projects, each explaining:",
  
  coursePoints: [
  "Business Problem Understanding",
  "Data Cleaning & Preprocessing",
  "Model Building with Multiple Algorithms",
  "Hyperparameter Tuning",
  "Final Model Deployment Logic",
  "Predicting a Single Observation",
  "ANN (Binary & Multi-Class)",
  "CNN (Image Classification)",
  "RNN/LSTM (Sequence Models)",
  "NLTK (Text Classification)",
  "Transfer Learning (Cats vs Dogs)",
  "Fraud Detection using ML + CNN",
  "Job-ready, project-centered ML & DL workflow"
],

  heroPoints: [
    { icon: GiStairsGoal, desc: "Zero → Advanced ML + DL" },
    { icon: FaRobot, desc: "23 End-to-End Projects" },
    { icon: FaLaptopCode, desc: "Business + Technical Explanations" },
    { icon: TbCertificate, desc: "Certificate Included" }
  ],

  targetAudience: [
    { title: "ML Beginners", desc: "Start your machine learning journey through hands-on projects." },
    { title: "Engineering Students", desc: "Gain project experience required for internships and placements." },
    { title: "Python Developers", desc: "Upgrade your skills by learning ML & DL practically." },
    { title: "Data Science Aspirants", desc: "Master end-to-end ML workflows using real datasets." },
    { title: "Job Seekers", desc: "Build ML/DL projects that strengthen your resume." },
    { title: "AI Enthusiasts", desc: "Learn ML, CNNs, RNNs, NLP, and transfer learning." },
    { title: "Professionals Shifting to AI", desc: "Get hands-on experience with 23 real projects." }
  ],

  curriculum: [
    {
      topic: "Introduction",
      subTopic: [
        "Course overview",
        "Important Udemy review update"
      ]
    },
    {
      topic: "Project 1 — Breast Cancer Detection (ML)",
      subTopic: [
        "Business problem",
        "Data preprocessing (Part 1 & 2)",
        "Logistic Regression",
        "Random Forest Classifier",
        "Hyperparameter tuning (Randomized Search)",
        "Predicting a single observation"
      ]
    },
    {
      topic: "Project 2 — Customer Churn Rate Prediction (ML)",
      subTopic: [
        "Business problem",
        "Data preprocessing (Part 1 & 2)",
        "Logistic Regression",
        "Random Forest",
        "XGBoost Classifier",
        "Hyperparameter tuning",
        "Single prediction"
      ]
    },
    {
      topic: "Project 3 — Medical Insurance Premium Prediction (ML)",
      subTopic: [
        "Business problem",
        "Data preprocessing",
        "Build & finalize model",
        "Predict single observation"
      ]
    },
    {
      topic: "Project 4 — House Price Prediction (ML)",
      subTopic: [
        "Business problem",
        "Data preprocessing",
        "Model building",
        "Hyperparameter tuning"
      ]
    },
    {
      topic: "Project 5 — E-Signing Prediction (ML)",
      subTopic: [
        "Business problem",
        "Data preprocessing",
        "Build & finalize model",
        "Hyperparameter tuning",
        "Single prediction"
      ]
    },
    {
      topic: "Project 6 — Credit Card Fraud Detection (ML)",
      subTopic: [
        "Business problem",
        "Data preprocessing",
        "Build & evaluate model",
        "Predict single observation"
      ]
    },
    {
      topic: "Project 7 — Employee Attrition Prediction (ML)",
      subTopic: [
        "Business problem",
        "Data preprocessing",
        "Model building",
        "Hyperparameter tuning",
        "Single prediction"
      ]
    },
    {
      topic: "Project 8 — Customer Segmentation (Clustering)",
      subTopic: [
        "Business problem",
        "Data preprocessing",
        "Build segmentation model & interpret results"
      ]
    },
    {
      topic: "Project 9 — Used Car Price Prediction (ML)",
      subTopic: [
        "Business problem",
        "Data preprocessing (Part 1 & 2)",
        "Build & finalize model",
        "Hyperparameter tuning"
      ]
    },
    {
      topic: "Project 10 — Restaurant Reviews Classification (NLP)",
      subTopic: [
        "Business problem",
        "Data preprocessing (3 parts)",
        "Build & finalize model"
      ]
    },
    {
      topic: "Project 11 — Multi-Class Image Classification with ANN",
      subTopic: [
        "Installation & setup",
        "Data preprocessing",
        "Build ANN model",
        "Train ANN",
        "Model evaluation"
      ]
    },
    {
      topic: "Project 12 — Binary Data Classification with ANN",
      subTopic: [
        "Step 1 → Step 5 (complete ANN workflow)"
      ]
    },
    {
      topic: "Project 13 — Object Recognition in Images with CNN",
      subTopic: [
        "Step 1 → Step 5 (CNN recognition)"
      ]
    },
    {
      topic: "Project 14 — Binary Image Classification with CNN",
      subTopic: [
        "Step 1 → Step 5 (binary CNN)"
      ]
    },
    {
      topic: "Project 15 — Digit Recognition with CNN",
      subTopic: [
        "Step 1 → Step 3 (MNIST-style)"
      ]
    },
    {
      topic: "Project 16 — Breast Cancer Detection with CNN",
      subTopic: [
        "Step 1 → Step 3 (CNN implementation)"
      ]
    },
    {
      topic: "Project 18 — Credit Card Fraud Detection with CNN",
      subTopic: [
        "Step 1 → Step 4 (deep learning approach)"
      ]
    },
    {
      topic: "Project 19 — IMDB Review Classification with RNN LSTM",
      subTopic: [
        "Step 1 → Step 3 (sequence modeling)"
      ]
    },
    {
      topic: "Project 22 — Transfer Learning for Cats & Dogs Classification",
      subTopic: [
        "Step 1 → Step 4 (VGG / ResNet / EfficientNet)"
      ]
    },
    {
      topic: "Project 23 — Movie Review Classification with NLTK",
      subTopic: [
        "Step 1 → Step 2 (classical ML + NLTK)"
      ]
    }
  ]
},
{
  id: 6,
  course: "AI Agents Masterclass",
  courseCategory: "AI / Machine Learning",
  courseLogo: "/aiAgent.png",
  courseDuration: "8–16 Weeks",
  description:
    "Learn Agent Design, Reinforcement Learning, Decision-Making, NLP Agents, Transfer Learning, Deployment & Hands-On Real Projects.",
  incomeRange: "₹8–25 LPA",
  quoteText: "AI Agents Are the Future of Automation — Become a Builder Today",
  coursePointsText:
    "AI agents can think, decide, take actions, learn from data, and interact with environments. They power:",
  
  coursePoints: [
  "Self-driving cars",
  "Trading bots",
  "Autonomous customer support",
  "Healthcare monitoring",
  "Gaming agents",
  "Robotics",
  "Workflow automation",
  "Smart assistants"
]
,

  heroPoints: [
    { icon: GiStairsGoal, desc: "Beginner → Advanced" },
    { icon: FaRobot, desc: "Hands-on Agent Development" },
    { icon: FaLaptopCode, desc: "RL + NLP + Deep Learning" },
    { icon: TbCertificate, desc: "Certificate Included" }
  ],

  targetAudience: [
    { title: "Developers entering AI automation", desc: "Start building intelligent autonomous agents." },
    { title: "ML/AI engineers", desc: "Enhance your skills with practical agent design and RL." },
    { title: "Data scientists", desc: "Learn to integrate AI agents with real-world data." },
    { title: "Python developers", desc: "Upgrade your Python skills for AI agent development." },
    { title: "Students preparing for AI jobs", desc: "Gain hands-on experience building AI agents." },
    { title: "Researchers & innovators", desc: "Experiment with advanced RL and LLM-based agents." },
    { title: "Professionals wanting workflow automation", desc: "Implement AI agents to automate tasks." }
  ],

  curriculum: [
    {
      topic: "Introduction to AI Agents",
      subTopic: [
        "What is an AI agent?",
        "Types of AI agents (reflex, goal-based, RL agents, etc.)",
        "Applications across industries",
        "Challenges in agent development",
        "Intro Demo"
      ]
    },
    {
      topic: "AI Agent Design Principles",
      subTopic: [
        "Goal setting for agents",
        "Environment modeling",
        "Decision-making algorithms",
        "Learning algorithms",
        "Design principles demo"
      ]
    },
    {
      topic: "AI Agent Development Process",
      subTopic: [
        "Problem formulation",
        "Data collection & preprocessing",
        "Agent training & evaluation",
        "Full development process demo"
      ]
    },
    {
      topic: "Tools for Developing AI Agents",
      subTopic: [
        "ML libraries (TensorFlow, PyTorch, Scikit-Learn)",
        "Reinforcement Learning frameworks (Gym, RLlib, Stable Baselines)",
        "Visualization tools (TensorBoard, matplotlib, dashboards)",
        "Tools demo"
      ]
    },
    {
      topic: "Building a Simple AI Agent",
      subTopic: [
        "Problem statement",
        "Data collection & preprocessing",
        "Model development",
        "Evaluation & optimization",
        "Simple agent demo"
      ]
    },
    {
      topic: "Advanced AI Agent Development",
      subTopic: [
        "Deep Reinforcement Learning (DQN, PPO, A3C)",
        "Natural Language Processing for AI agents",
        "Neural network architectures for agents",
        "Transfer learning for agent performance",
        "Advanced agent demo"
      ]
    },
    {
      topic: "Deploying AI Agents",
      subTopic: [
        "Integration with web applications",
        "Scalability considerations (APIs, load balancing, caching)",
        "Security aspects (authorization, privacy, misuse prevention)",
        "Deployment demo"
      ]
    },
    {
      topic: "Case Studies of AI Agent Applications",
      subTopic: [
        "Healthcare agents",
        "Finance/trading agents",
        "Gaming agents (RL)",
        "Autonomous vehicle agents",
        "Case study demo"
      ]
    },
    {
      topic: "Ethical Considerations in AI Agent Development",
      subTopic: [
        "Bias in agents",
        "Privacy concerns",
        "Transparency & accountability",
        "Regulatory implications"
      ]
    },
    {
      topic: "The Future of AI Agents",
      subTopic: [
        "Emerging trends (LLM Agents, AutoGPT, workflow agents)",
        "Agent-to-agent collaboration",
        "Human-AI interaction",
        "Ethical AI design",
        "Future agents demo"
      ]
    },
    {
      topic: "Hands-On Demo — Build & Deploy an AI Agent",
      subTopic: [
        "Model training & testing",
        "Deploying the agent",
        "Interactive session with your AI agent"
      ]
    }
  ]
},
{
  id: 7,
  course: "LangGraph Mastery Bootcamp",
  courseCategory: "AI / Machine Learning",
  courseLogo: "/langraph.png",
  courseDuration: "8–16 Weeks",
  description:
    "Build Advanced Agentic Workflows Using LangGraph, LLMs, Memory, RAG, Conditional Routing, Subgraphs & FastAPI. Learn to design production-grade AI agents and workflows.",
  incomeRange: "₹8–25 LPA",
  quoteText: "LangGraph Is the Backbone of Modern Agentic AI — Learn It Right",
  coursePointsText:
    "LLM apps today need more than prompts. They need structured workflows, state management, conditional execution, memory, tool calling, human review, and long-term knowledge storage. That’s exactly what LangGraph enables. You'll learn how to:",
  coursePoints: [
  "Build deterministic AI workflows",
  "Model graph-based agent systems",
  "Add memory, validation, and reducers",
  "Integrate tools & LLM calls",
  "Add conditional routing",
  "Use agentic RAG",
  "Implement human-in-the-loop",
  "Build FastAPI-based production endpoints",
  "Store results using PostgreSQL & vector search"
]
,

  heroPoints: [
    { icon: GiStairsGoal, desc: "Beginner-Friendly → Advanced" },
    { icon: FaLaptopCode, desc: "Hands-on Projects" },
    { icon: FaRobot, desc: "Covers Agentic RAG + HITL" },
    { icon: TbCertificate, desc: "Certificate Included" }
  ],

  targetAudience: [
    { title: "AI Developers", desc: "Learn to build agentic AI workflows and apps." },
    { title: "ML/LLM Engineers", desc: "Integrate LangGraph with LLMs and RAG pipelines." },
    { title: "Backend Developers", desc: "Deploy agentic workflows using FastAPI." },
    { title: "Prompt Engineers", desc: "Enhance workflows with conditional routing and memory." },
    { title: "Automation Engineers", desc: "Automate tasks using advanced AI workflows." },
    { title: "Python Developers", desc: "Leverage Python for production-grade AI workflows." },
    { title: "Anyone building advanced AI apps", desc: "From beginner to advanced agentic applications." }
  ],

  curriculum: [
    {
      topic: "Introduction",
      subTopic: [
        "Introduction to LangGraph",
        "Why graph-based AI workflows"
      ]
    },
    {
      topic: "The Fundamentals",
      subTopic: [
        "What is LangGraph?",
        "Understanding a simple workflow"
      ]
    },
    {
      topic: "LangGraph in Action",
      subTopic: [
        "Setup the project",
        "Build first workflow",
        "Define EntryPoint",
        "Generate workflow image",
        "State validation",
        "Pydantic schema usage"
      ]
    },
    {
      topic: "Async Invocation & Streaming",
      subTopic: [
        "Introduction",
        "Async execution workflow",
        "Streaming fundamentals",
        "Streaming demos & examples"
      ]
    },
    {
      topic: "Conditional Routing",
      subTopic: [
        "Introduction",
        "Conditional routing in action",
        "Using match nodes"
      ]
    },
    {
      topic: "Reducers",
      subTopic: [
        "What are reducers?",
        "Reducer execution in real workflows",
        "Using MessagesState"
      ]
    },
    {
      topic: "Tools & LLM Integration",
      subTopic: [
        "Introduction",
        "Tool calling with LLM",
        "ToolNode usage",
        "ToolNode theory explained",
        "Practical ToolNode + LLM examples"
      ]
    },
    {
      topic: "Memory",
      subTopic: [
        "Why memory is essential",
        "Implementing memory in LangGraph"
      ]
    },
    {
      topic: "Agentic RAG",
      subTopic: [
        "Introduction to RAG with LangGraph",
        "Build a full Agentic RAG pipeline"
      ]
    },
    {
      topic: "Human-in-the-Loop (HITL)",
      subTopic: [
        "Introduction",
        "Use cases + code walkthrough",
        "HITL in action",
        "Passing extra metadata"
      ]
    },
    {
      topic: "Long-Term Memory",
      subTopic: [
        "Setup PostgreSQL",
        "Create persistent database",
        "Use persistent memory in workflows"
      ]
    },
    {
      topic: "Subgraphs",
      subTopic: [
        "Understanding subgraphs",
        "Use subgraph as a node",
        "Invoke subgraph from parent graph"
      ]
    },
    {
      topic: "End-to-End Use Case",
      subTopic: [
        "Introduction",
        "Database setup",
        "API invocation",
        "Vector search integration",
        "LLM usage",
        "Conditional routing",
        "Database storage",
        "Human review interruptions",
        "Build a Chainlit UI",
        "Implement HITL",
        "Test Approve / Reject flows",
        "Validate human review cases"
      ]
    },
    {
      topic: "Implement FastAPI",
      subTopic: [
        "Introduction",
        "Build FastAPI endpoint using LangGraph",
        "Test and validate"
      ]
    },
    {
      topic: "Agentic Patterns",
      subTopic: [
        "Introduction",
        "Reflection pattern",
        "Tree-of-Thought (ToT) pattern",
        "Parallel execution pattern"
      ]
    }
  ]
},
{
  id: 8,
  course: "Quantum Computing Mastery Program",
  courseCategory: "Quantum Computing",
  courseLogo: "/QuantumFoundation.png",
  courseDuration: "10–16 Weeks",
  description:
    "Learn Quantum Mechanics, Linear Algebra for QC, Qubits, Quantum Gates & Foundations of Quantum Algorithms — From Zero to Strong Foundation.",
  incomeRange: "₹10–30 LPA",
  quoteText: "Quantum Computing Is the Next Technological Revolution — Be Part of It",
  coursePointsText:
    "Quantum computing is transforming industries by solving problems impossible for classical machines:",

  coursePoints: [
    "Build a rock-solid math foundation (vectors, matrices, tensor products)",
    "Understand classical computing before jumping into quantum",
    "Learn quantum mechanics intuitively",
    "Visualize qubits on the Bloch sphere",
    "Understand superposition, interference & measurement",
    "Learn all major single-qubit gates",
    "Understand why gates are unitary",
    "Prepare for quantum programming (Qiskit/Cirq)",
    "Real-world applications: cryptography, AI/ML acceleration, material & drug discovery, optimization, finance, physics simulations",
    "By the end, you’ll think like a quantum engineer"
  ],

  heroPoints: [
    { icon: GiStairsGoal, desc: "Beginner → Advanced" },
    { icon: FaLaptopCode, desc: "Mathematics + Physics + Coding" },
    { icon: FaEye, desc: "Fully Visual & Intuition-Driven" },
    { icon: TbCertificate, desc: "Certificate Upon Completion" }
  ],

  targetAudience: [
    { title: "Computer Science Students", desc: "Build a strong foundation in quantum computing." },
    { title: "Engineering Students", desc: "Understand quantum mechanics and its applications." },
    { title: "Developers Curious About Quantum Computing", desc: "Learn the theory and programming behind quantum algorithms." },
    { title: "Math/Physics Enthusiasts", desc: "Apply your knowledge to quantum computing fundamentals." },
    { title: "Professionals Preparing for Future Computing", desc: "Stay ahead in AI/Quantum tech industries." },
    { title: "Researchers", desc: "Get ready for quantum algorithm design and research." }
  ],

  curriculum: [
    {
      topic: "Course Overview",
      subTopic: [
        "Why Learn Quantum Computing — Motivation",
        "Real-world applications",
        "Quantum vs Classical computing"
      ]
    },
    {
      topic: "Introduction to Classical Computing",
      subTopic: [
        "Classical hardware fundamentals",
        "Digital logic & binary operations",
        "Classical logic gates",
        "Constructing classical circuits",
        "Algorithm complexity"
      ]
    },
    {
      topic: "Linear Algebra (Quantum Computing Essentials)",
      subTopic: [
        "Vectors & vector spaces",
        "Dot products & inner products",
        "Euclidean norm",
        "Hilbert space properties",
        "Matrices & transformations",
        "Matrix arithmetic",
        "Outer products",
        "Inverse matrices & unitary transformations",
        "Determinant, trace & expectation values",
        "Eigenvalues & eigenvectors",
        "Tensor products (critical for multi-qubit systems)"
      ]
    },
    {
      topic: "Trigonometry & Complex Numbers",
      subTopic: [
        "2D & 3D coordinate systems",
        "Polar coordinate system",
        "Complex numbers & the complex plane"
      ]
    },
    {
      topic: "Probability Theory",
      subTopic: [
        "Probability axioms",
        "Random variables, expectation & variance",
        "Law of large numbers"
      ]
    },
    {
      topic: "Overview of Quantum Mechanics",
      subTopic: [
        "Primary quantum mechanical principles",
        "Interference & wave-particle duality",
        "Young’s double-slit experiment",
        "Wavefunctions & Hamiltonians",
        "Schrödinger equation",
        "Postulates of quantum mechanics"
      ]
    },
    {
      topic: "Introduction to Quantum Computing",
      subTopic: [
        "Qubits & superposition",
        "Bra-ket (Dirac) notation",
        "Visualizing qubits",
        "Bloch sphere representation",
        "Math behind Bloch sphere coordinates",
        "Quantum measurement theory"
      ]
    },
    {
      topic: "Single-Qubit Quantum Logic Gates",
      subTopic: [
        "Pauli I Gate (Identity)",
        "Pauli X Gate (NOT gate)",
        "Pauli Y Gate",
        "Pauli Y — Eigenvalues & eigenvectors",
        "Pauli Z Gate",
        "Pauli Z — Eigenvalues & eigenvectors",
        "Hadamard (H) Gate",
        "Quantum S & S† Gates",
        "Quantum T & T† Gates",
        "Rotation Gates (Rx, Ry, Rz)",
        "Universal quantum gates & their importance"
      ]
    }
  ]
},
{
  id: 9,
  course: "Azure AKS & Kubernetes DevOps Mastery Program",
  courseCategory: "Cloud / DevOps",
  courseLogo: "/devops.webp",
  courseDuration: "12–20 Weeks",
  description:
    "Master Kubernetes, AKS, Docker, Ingress, Storage, DevOps CI/CD, Terraform & Real-World Cloud Deployments — From Zero to Advanced Production Skills.",
  incomeRange: "₹12–35 LPA",
  quoteText: "Kubernetes + AKS + DevOps = The #1 Cloud Skill in 2025",
  coursePointsText:
    "Modern companies run their entire infrastructure on",
  coursePoints: [
  "Kubernetes for orchestration",
  "AKS for managed Kubernetes on Azure",
  "Docker for containerization",
  "CI/CD (Azure DevOps)",
  "Terraform for IaC automation"
],
  heroPoints: [
    { icon: GiStairsGoal, desc: "Beginner → Advanced Cloud DevOps" },
    { icon: FaLaptopCode, desc: "100% Hands-on with Real AKS Labs" },
    { icon: FaIndustry, desc: "Enterprise-Grade Deployments" },
    { icon: TbCertificate, desc: "Certificate Upon Completion" }
  ],
  targetAudience: [
    { title: "Beginners in Cloud & DevOps", desc: "Start your cloud and Kubernetes journey from scratch." },
    { title: "Kubernetes Learners", desc: "Learn real AKS cluster creation and management." },
    { title: "Docker Beginners", desc: "Understand containerization for DevOps." },
    { title: "Azure Developers", desc: "Gain expertise in AKS, ACR, and Azure CLI." },
    { title: "System Administrators", desc: "Manage multi-cluster deployments efficiently." },
    { title: "DevOps Engineers", desc: "Master CI/CD pipelines and infrastructure automation." },
    { title: "Students preparing for cloud careers", desc: "Hands-on labs for production-ready skills." },
    { title: "Anyone wanting hands-on AKS expertise", desc: "Practical deployment experience in real scenarios." }
  ],
  curriculum: [
    {
      topic: "Introduction",
      subTopic: [
        "Course introduction",
        "Prerequisites"
      ]
    },
    {
      topic: "Create Azure AKS Cluster",
      subTopic: [
        "Intro to AKS",
        "Create AKS Cluster",
        "Explore AKS using kubectl & Azure Portal",
        "Setup Azure CLI locally",
        "Deploy sample application"
      ]
    },
    {
      topic: "Docker Fundamentals",
      subTopic: [
        "What is Docker & why it matters",
        "Docker architecture",
        "Install Docker",
        "Pull, run, build images",
        "Push to Docker Hub",
        "Docker commands essential for Kubernetes"
      ]
    },
    {
      topic: "Kubernetes Fundamentals — Imperative (kubectl)",
      subTopic: [
        "Kubernetes architecture explained",
        "Kubernetes basics",
        "Pods & creating pods",
        "LoadBalancer service",
        "Logs, exec, cleanup",
        "ReplicaSets",
        "Deployments — scale, update, rollback, pause/resume",
        "Services: ClusterIP, LoadBalancer"
      ]
    },
    {
      topic: "Kubernetes Fundamentals — Declarative (YAML)",
      subTopic: [
        "Why declarative config?",
        "YAML basics",
        "Create Pod YAML",
        "Create LB service YAML",
        "YAML for ReplicaSets, Deployments",
        "Build backend & frontend deployments"
      ]
    },
    {
      topic: "AKS Storage — Azure Disks",
      subTopic: [
        "Azure disks in AKS",
        "StorageClass",
        "PersistentVolumeClaim",
        "ConfigMaps",
        "MySQL deployment",
        "MySQL ClusterIP service",
        "Build user management application (UWB) + service"
      ]
    },
    {
      topic: "AKS Storage — Azure MySQL Database",
      subTopic: [
        "Azure MySQL introduction",
        "Create cloud MySQL DB",
        "ExternalName service",
        "Wire up UWB application"
      ]
    },
    {
      topic: "Kubernetes Secrets",
      subTopic: [
        "Create & use Kubernetes secrets"
      ]
    },
    {
      topic: "AKS Storage — Azure Files",
      subTopic: [
        "Azure Files introduction",
        "StorageClass + PVC manifests",
        "Deploy app & test file uploads"
      ]
    },
    {
      topic: "Ingress Basics",
      subTopic: [
        "Ingress introduction",
        "Static Public IP",
        "Install Ingress Controller",
        "Create & deploy Ingress rules"
      ]
    },
    {
      topic: "Ingress — Context Path Routing",
      subTopic: [
        "Context-path routing",
        "Review manifests",
        "Deploy & test"
      ]
    },
    {
      topic: "Azure DNS Zones",
      subTopic: [
        "Create DNS Zone",
        "Delegate domain from registrar",
        "Test domain"
      ]
    },
    {
      topic: "ExternalDNS for Azure DNS",
      subTopic: [
        "ExternalDNS introduction",
        "Create Managed Identity",
        "Deploy ExternalDNS",
        "Automate DNS records"
      ]
    },
    {
      topic: "Domain-Based Ingress Routing",
      subTopic: [
        "Domain-based routing",
        "Review manifests",
        "Deploy & test"
      ]
    },
    {
      topic: "Ingress SSL (Let’s Encrypt)",
      subTopic: [
        "SSL setup",
        "Install CertManager",
        "ClusterIssuer",
        "Deploy HTTPS-enabled application"
      ]
    },
    {
      topic: "Kubernetes Resource Requests & Limits",
      subTopic: [
        "What are requests & limits?",
        "Implement & test resource limits"
      ]
    },
    {
      topic: "Kubernetes Namespaces",
      subTopic: [
        "Intro to namespaces",
        "Imperative & declarative namespaces",
        "LimitRange",
        "ResourceQuota"
      ]
    },
    {
      topic: "Azure AKS Virtual Nodes",
      subTopic: [
        "Virtual Kubelet & ACI",
        "Create AKS with Virtual Nodes",
        "Mixed mode deployments",
        "Test & cleanup"
      ]
    },
    {
      topic: "Azure Container Registry (ACR)",
      subTopic: [
        "ACR introduction",
        "ACR + AKS integration",
        "Build & push images",
        "Pull using service principal",
        "Virtual nodes + private images"
      ]
    },
    {
      topic: "Azure DevOps — Build Docker Image & Push to ACR",
      subTopic: [
        "CI pipeline introduction",
        "Local to GitHub push",
        "Build pipeline to push image",
        "Namespace usage",
        "Review pipeline code"
      ]
    },
    {
      topic: "Azure DevOps — Build + Deploy to AKS",
      subTopic: [
        "Deploy to AKS pipeline",
        "Build & deploy stages",
        "Update & redeploy",
        "Cleanup workloads"
      ]
    },
    {
      topic: "Azure DevOps — Starter Pipelines",
      subTopic: [
        "Key pipeline concepts",
        "Build + push custom pipeline",
        "Build + push + deploy custom pipeline"
      ]
    },
    {
      topic: "Azure DevOps Release Pipelines",
      subTopic: [
        "Release pipelines introduction",
        "Multi-namespace deployment",
        "Dev → QA → Prod stages",
        "Approvals & artifact usage",
        "Full CI/CD flow"
      ]
    },
    {
      topic: "AKS HTTP Application Routing Add-On",
      subTopic: [
        "Enable add-on",
        "Deploy sample ingress app",
        "Test & disable add-on"
      ]
    },
    {
      topic: "Access Multiple AKS Clusters",
      subTopic: [
        "Multi-cluster kubeconfig",
        "Create AKS demo clusters",
        "Switch, view & manage contexts"
      ]
    },
    {
      topic: "AKS Azure AD Authentication",
      subTopic: [
        "Enable Azure AD for AKS",
        "Create AD groups + users",
        "Login via kubectl"
      ]
    },
    {
      topic: "RBAC — Role & RoleBinding with Azure AD",
      subTopic: [
        "Kubernetes RBAC basics",
        "Role & RoleBinding",
        "Assign roles to users",
        "Test namespace access"
      ]
    },
    {
      topic: "ClusterRoles & ClusterRoleBindings",
      subTopic: [
        "Cluster-level RBAC",
        "Create & test cluster roles"
      ]
    },
    {
      topic: "AKS Autoscaling — Cluster Autoscaler",
      subTopic: [
        "Create autoscaling cluster",
        "Deploy app & test autoscaling"
      ]
    },
    {
      topic: "AKS Autoscaling — HPA",
      subTopic: [
        "Horizontal Pod Autoscaler",
        "Load generation demo",
        "HPA testing"
      ]
    },
    {
      topic: "Production-Grade AKS Cluster Design",
      subTopic: [
        "VNETs, subnets, identity, logging",
        "Creating prod cluster",
        "NodePools: Linux, Windows, GPU",
        "Deploying multi-app scenarios"
      ]
    },
    {
      topic: "Provision AKS with Terraform (Complete)",
      subTopic: [
        "Terraform language basics",
        "Providers, modules",
        "Variables, outputs, state mgmt",
        "Create AKS cluster via Terraform",
        "Log Analytics, AD Groups, SSH keys",
        "NodePools, sample app deployment",
        "Terraform destroy workflow",
        "Custom VNET cluster creation"
      ]
    },
    {
      topic: "Terraform + Azure DevOps for AKS Provisioning",
      subTopic: [
        "Use Terraform inside pipelines",
        "Validate & plan stages",
        "Deploy Dev & QA clusters",
        "Multi-nodepool automation",
        "Full cleanup"
      ]
    }
  ]
  },
  {
    id: 10,
    course: "Full-Stack Generative AI with Azure OpenAI",
    courseCategory: "AI / Machine Learning",
    courseLogo: "/azure.jpg",
    courseDuration: "8–12 Weeks",
    description:
      "Learn AI Fundamentals, ChatGPT Skills, Prompt Engineering, RAG, Fine-Tuning, APIs, Image/Audio Models & Enterprise Deployment.",
    incomeRange: "₹8–25 LPA",
    quoteText: "Transform Your Career with the Most In-Demand AI Skills",
    coursePointsText:
      "Transform Your Career with the Most In-Demand AI Skills",
    coursePoints: [
  "Building AI apps using Azure OpenAI",
  "Creating, deploying & integrating GPT models",
  "Working with images, audio, embeddings, and your own data",
  "Implementing RAG (Retrieval Augmented Generation)",
  "Fine-tuning models for custom use cases",
  "Using enterprise-grade security, scalability, and APIs"
],
    heroPoints: [
      { icon: GiStairsGoal, desc: "100% Practical" },
      { icon: FaLaptopCode, desc: "No Prior AI Knowledge Needed" },
      { icon: FaIndustry, desc: "Industry Projects Included" },
      { icon: TbCertificate, desc: "Certificate on Completion" }
    ],

    targetAudience: [
      { title: "Software Developers", desc: "Learn to integrate AI apps with Azure OpenAI." },
      { title: "Data Engineers / Cloud Engineers", desc: "Deploy AI pipelines and services." },
      { title: "AI / ML Beginners", desc: "Start hands-on AI projects from scratch." },
      { title: "Tech Students", desc: "Build skills for generative AI careers." },
      { title: "IT Professionals moving to AI roles", desc: "Upskill for enterprise AI applications." },
      { title: "Startup Founders", desc: "Implement AI in your products and workflows." },
      { title: "Corporate Teams", desc: "Adopt Azure/OpenAI for enterprise solutions." }
    ],

    curriculum: [
      {
        topic: "Introduction",
        subTopic: [
          "How to use this course",
          "Tools and GitHub resources"
        ]
      },
      {
        topic: "Fundamentals of AI & OpenAI",
        subTopic: [
          "What is AI",
          "What is Generative AI",
          "OpenAI overview"
        ]
      },
      {
        topic: "ChatGPT Crash Course",
        subTopic: [
          "ChatGPT in action",
          "Prompt engineering",
          "Summarization / Expansion / Translation",
          "Classification",
          "Marketing prompts",
          "Coding with ChatGPT",
          "Structured outputs",
          "Sample data creation"
        ]
      },
      {
        topic: "Azure OpenAI Service",
        subTopic: [
          "What is Azure OpenAI",
          "Setting up the account",
          "Model documentation & pricing",
          "Deploying Azure OpenAI"
        ]
      },
      {
        topic: "Text Processing with Azure OpenAI",
        subTopic: [
          "Azure OpenAI Studio",
          "Working with Playground",
          "Setting up Postman",
          "Calling API programmatically",
          "Deploying as Web App",
          "Using content filters"
        ]
      },
      {
        topic: "Image Models (DALLE)",
        subTopic: [
          "Creating images in Studio",
          "DALLE via API",
          "Error handling"
        ]
      },
      {
        topic: "Embeddings & Semantic Intelligence",
        subTopic: [
          "Deploy embedding model",
          "Generate embeddings",
          "Similarity search"
        ]
      },
      {
        topic: "Audio AI Models (Whisper)",
        subTopic: [
          "Deploy Whisper",
          "Transcribe & Translate",
          "Mix models for A/V applications"
        ]
      },
      {
        topic: "RAG — Using Your Own Data",
        subTopic: [
          "Cognitive Search",
          "Data ingestion",
          "Keyword / Hybrid / Vector Search",
          "End-to-end RAG workflow"
        ]
      },
      {
        topic: "Fine-Tuning GPT Models",
        subTopic: [
          "Preparing training data",
          "Fine-tuning via Studio",
          "Fine-tuning via Python & API",
          "Managing fine-tuned models"
        ]
      },
      {
        topic: "Advanced API Programming",
        subTopic: [
          "Async processing",
          "Streaming responses"
        ]
      },
      {
        topic: "Wrap-Up",
        subTopic: [
          "Bonus resources",
          "Next steps for your AI career"
        ]
      }
    ]
  }
];

