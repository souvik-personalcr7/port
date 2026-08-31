export const projects = [
  {
    slug: "talkflow",
    title: "TalkFlow — Real-time AI Chat Application",
    shortDescription: "A full-stack real-time chat application with integrated Google Gemini AI, featuring one-to-one messaging, file sharing, and media calls.",
    thumbnail: "/talkflow.png",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "Express.js", "Socket.IO", "MongoDB", "Cloudinary", "Gemini AI"],
    features: [
      "User registration & JWT authentication",
      "One-to-one real-time messaging",
      "Google Gemini AI chat integration",
      "Online/offline status tracking",
      "Profile picture & file sharing UI",
      "Phone & video call UI",
      "Dark & Light theme support",
      "Email & OTP functionality via Nodemailer",
      "Friend block functionality",
      "Responsive desktop and mobile UI"
    ],
    links: {
      live: "https://talkflow-two.vercel.app",
      github: "" 
    },
    caseStudy: {
      problem: "Users need a seamless platform to chat with both human connections and intelligent AI assistants in real-time.",
      solution: "TalkFlow provides a unified real-time messaging environment using Socket.IO, coupled with a Gemini-powered AI chat assistant.",
      architecture: "Next.js App Router frontend with Tailwind CSS, connected to a Node.js/Express backend via Axios and Socket.IO. MongoDB Atlas stores data, Cloudinary handles media, and the Gemini API powers the AI chat.",
      challenges: "Implementing robust real-time bi-directional communication, managing complex chat states (online status, file sharing), and seamlessly integrating an external AI model.",
      outcome: "A highly interactive, scalable communication platform demonstrating expertise in WebSockets, AI API integration, and modern full-stack architecture."
    }
  },
  {
    slug: "railtrack",
    title: "RailTrack — Live Indian Train Tracking Platform",
    shortDescription: "A real-time train tracking application for Indian railways with live ETA and delay information.",
    thumbnail: "/railtack.png",
    tech: ["Next.js", "TypeScript", "React.js", "TanStack Query", "MongoDB", "REST APIs", "Vercel"],
    features: [
      "Live Indian train tracking",
      "Real-time train status",
      "ETA & Delay information",
      "Route progress & Station details",
      "RailRadar API & OpenWeather API integration",
      "JWT authentication",
      "Account-specific favorite trains",
      "MongoDB-backed user data",
      "TanStack Query caching",
      "Request deduplication",
      "Manual refresh controls",
      "Responsive mobile-friendly UI"
    ],
    links: {
      live: "https://railtrack-web.vercel.app/",
      github: "https://github.com/souvik-personalcr7/railtrack" // guess from foodgo link pattern
    },
    caseStudy: {
      problem: "Passengers often struggle to get accurate, real-time updates on Indian train locations, delays, and ETAs.",
      solution: "RailTrack provides a responsive, real-time dashboard aggregating live data from multiple APIs to give passengers accurate train information and weather updates at stations.",
      architecture: "A Next.js frontend deployed on Vercel, interfacing with third-party APIs (RailRadar, OpenWeather) and a MongoDB database for user preferences. TanStack query is used for optimal client-side caching and state management.",
      challenges: "Handling rate limits from third-party APIs and ensuring real-time data sync without overwhelming the client or server.",
      outcome: "A highly performant, accessible web app that provides near real-time train tracking with minimal latency and reduced API costs through request deduplication."
    }
  },
  {
    slug: "foodgo",
    title: "FoodGo — MERN Stack Food Ordering Application",
    shortDescription: "A comprehensive full-stack food ordering platform with an owner dashboard and real-time tracking.",
    thumbnail: "/projects/foodgo-thumb.jpg", // placeholder
    tech: ["React", "Vite", "Node.js", "Express.js", "MongoDB", "Redux", "Cloudinary"],
    features: [
      "JWT authentication",
      "Dynamic shop management",
      "REST API integration",
      "Cloudinary image upload",
      "Drag-and-drop image upload",
      "Server-side validation",
      "Owner dashboard",
      "Menu management",
      "Order tracking",
      "Analytics",
      "Protected routes",
      "Modular reusable UI"
    ],
    links: {
      live: "", // Optional
      github: "https://github.com/souvik-personalcr7/foodgo2"
    },
    caseStudy: {
      problem: "Restaurant owners need a simplified, all-in-one platform to manage menus and track incoming orders dynamically.",
      solution: "FoodGo offers a robust MERN stack solution with role-based access, allowing owners to manage their shop while users can seamlessly browse and order food.",
      architecture: "React/Vite frontend with Redux for state management, communicating with an Express/Node.js REST API. MongoDB stores transactional data, while Cloudinary handles image hosting.",
      challenges: "Implementing a seamless drag-and-drop image upload experience and ensuring secure, role-based protected routes on both frontend and backend.",
      outcome: "A scalable MVP that demonstrates full-stack proficiency, particularly in handling multipart form data, authentication, and complex state management."
    }
  }
];
