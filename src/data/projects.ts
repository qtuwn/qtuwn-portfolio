export interface Project {
  title: string;
  description: string;
  tech: string[];
  repoUrl?: string;
  liveUrl?: string;
  highlights?: string[];
}

export const projects: Project[] = [
  {
    title: "Calories-App",
    description:
      "A mobile application for tracking daily calorie intake and managing nutrition goals. Features user authentication, food database, and progress tracking.",
    tech: ["Flutter", "Dart", "Firebase", "Cloud Firestore"],
    repoUrl: "https://github.com/qtuwn/Calories-App",
    highlights: [
      "Real-time data sync with Firebase",
      "Custom food entry support",
      "Progress charts and analytics",
    ],
  },
  {
    title: "MilkTeaManager",
    description:
      "A desktop application for managing milk tea shop operations including inventory, orders, and sales reports.",
    tech: ["C#", ".NET", "WinForms", "SQL Server"],
    repoUrl: "https://github.com/qtuwn/MilkTeaManager",
    highlights: [
      "Point of Sale (POS) system",
      "Inventory management",
      "Sales reporting and analytics",
    ],
  },
  {
    title: "ecommerce-live-support",
    description:
      "Real-time customer support chat system for e-commerce platforms with live messaging and agent dashboard.",
    tech: ["Node.js", "React", "MongoDB", "WebSocket", "Socket.io"],
    repoUrl: "https://github.com/qtuwn/ecommerce-live-support",
    highlights: [
      "Real-time bidirectional communication",
      "Agent queue management",
      "Chat history and analytics",
    ],
  },
  {
    title: "websitenoithat_hanokihome",
    description:
      "A furniture e-commerce website featuring product catalog, shopping cart, and order management for Hanoki Home.",
    tech: ["React", "Next.js", "PHP", "WordPress", "MySQL"],
    repoUrl: "https://github.com/qtuwn/websitenoithat_hanokihome",
    highlights: [
      "Responsive product gallery",
      "Shopping cart functionality",
      "Admin dashboard for content management",
    ],
  },
];
