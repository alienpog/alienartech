import { Brain, LayoutDashboard, CodeXml } from "lucide-react";

export const features = [
  {
    icon: Brain,
    name: "Strategy",
    content:
      "I analyze problems, define user journeys, and architect product direction before writing a single line of code.",
  },
  {
    icon: LayoutDashboard,
    name: "Experience",
    content:
      "I design seamless UI/UX systems that reduce friction and elevate user engagement.",
  },
  {
    icon: CodeXml,
    name: "Development",
    content:
      "I engineer full-stack systems — from APIs to dynamic frontends — ensuring performance, scalability, and maintainability.",
  },
];



export const projectHighlight = [
  {
    id: 1,
     project: "I",
    name: "X-Token",
    content: "Full-Stack Crypto Platform with Real-Time Transaction Dashboard",
    demo: "https://x-token-nine.vercel.app/",
    button: "X-token.Link",
    icon: "/asset/A5_4.png",
    repository: [
      {
        name: "Frontend",
        link: "https://github.com/alienpog/x-token",
      },
      {
        name: "Backend",
        link: "https://github.com/alienpog/x-token-backend",
      },
    ],
    image: "/asset/images/project1/image01.png",
    color: "#FFA5A4",

    othercontents: [
      {
        id: 1,
        headername: "UX & Product Design (Figma)",
        bodyname1:
          "X-Token was designed as a token purchase and tracking platform. I mapped the full user journey in Figma.",
        color: "#FFA5A4",
        bodyname1colorchange: false,

        contentloop01: [
          "Token purchase flow",
          "Confirmation states",
          "Transaction feedback",
          "Dashboard balance display",
          "Responsive layouts",
        ],

        bodyname2: "The focus was on:",
        bodyname2colorchange: false,

        contentloop02: [
          "Trust and clarity in financial UI",
          "Immediate balance visibility",
          "Reduced friction in token purchase",
        ],

        image: "/asset/images/project1/image02.png",
      },

      {
        id: 2,
        headername: "Full-Stack Implementation",
        bodyname1: "Frontend",
        color: "#FF4646",
        bodyname1colorchange: true,

        contentloop01: [
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          "Dynamic dashboard updates",
        ],

        bodyname2: "Backend",
        bodyname2colorchange: true,

        contentloop02: [
          "Django",
          "Transaction models",
          "REST API endpoints",
          "Server-side balance calculations",
        ],

        image: "/asset/images/project1/image03.png",
      },

      {
        id: 3,
        bodyname1: "When a user purchases tokens:",
        color: "#E90000",
        bodyname1colorchange: true,

        contentloop01: [
          "Transaction is stored in the database",
          "Balance recalculates server-side",
          "API returns updated values",
          "Dashboard updates instantly",
        ],

        closingcontent01: "This simulates real financial dashboard behavior.",

        bodyname2: "Outcome",
        bodyname2colorchange: true,

        contentloop02: [
          "Built a working token transaction system",
          "Implemented dynamic balance updates",
          "REST API endpoints",
          "Designed and deployed full-stack architecture",
          "Created scalable foundation for blockchain integration",
        ],

        closingcontent02:
          "This project highlights my ability to design and engineer real product systems.",

        image: "/asset/images/project1/image04.png",
      },
    ],
  },

  {
    id: 2,
     project: "II",
    name: "Dapplinker",
    content: "Web3 Wallet Integration & Protocol Utility",
    demo: "https://dapplinker.vercel.app/",
    button: "Dapplinker.Link",
    icon: "/asset/Group_5.png",

    repository: [
      {
        name: "Frontend",
        link: "https://github.com/alienpog/dapplinker",
      },
    ],

    image: "/asset/images/project2/image01.png",
    color: "#D183FF",

    othercontents: [
      {
        id: 1,
        headername: "UX & Product Design (Figma)",
         color: "#D183FF",
        contentloop01: [
          "Wallet connection flow",
          "Connection success & error states",
          "Deep linking between dApps",
          "Responsive layouts (desktop & mobile)",
        ],

        bodyname2: "The focus was on:",
        bodyname2colorchange: false,

        contentloop02: [
          "Trust and clarity in Web3 interactions",
          "Clear visual feedback for wallet states",
          "Creating a predictable and seamless navigation flow",
        ],

        closingcontent02:
          "The goal was to simplify a technically complex Web3 experience into something intuitive and user-friendly.",

        image: "/asset/images/project2/image02.png",
      },

      {
        id: 2,
        headername: "Full-Stack Implementation",
        bodyname1: "Frontend",
        color: "#C053FF",
        bodyname1colorchange: true,

        contentloop01: [
          "Next.js",
          "TypeScript",
          "Component-based architecture",
          "Responsive UI design",
          "Wallet state detection logic",
          "Deep linking integration",
        ],

        image: "/asset/images/project2/image03.png",
      },

      {
        id: 3,
        bodyname1: "Dapplinker handles wallet interaction logic by:",
        color: "#9519DD",
        bodyname1colorchange: true,

        contentloop01: [
          "Detecting wallet connection state",
          "Managing redirects between decentralized applications",
          "Handling connection feedback states",
          "Ensuring smooth transitions between wallet and target dApps",
        ],

        closingcontent01:
          "This ensures reliability, maintainability, and improved usability across Web3 environments.",

        bodyname2: "Outcome",
        bodyname2colorchange: true,

        contentloop02: [
          "Delivered a responsive Web3 wallet integration utility",
          "Solved real client connectivity and navigation issues",
          "Reduced friction in wallet-to-dApp transitions",
          "Authentication flows",
        ],

        closingcontent02:
          "This project demonstrates my ability to solve complex Web3 usability challenges through intentional UX design and scalable frontend engineering.",

        image: "/asset/images/project2/image04.png",
      },
    ],
  },

  {
    id: 3,
    project: "III",
    name: "Yeye Unique",
    content: "Fashion E-Commerce Platform",
    demo: null,
    button: "Yeye Unique.Link",
     icon: "/asset/Frame_475.png",

    repository: [
      {
        name: "Frontend",
        link: "https://github.com/alienpog/yeye-unque-frontend",
      },
      {
        name: "Backend",
        link: "https://github.com/alienpog/yeye-unique-backend",
      },
    ],

    image: "/asset/images/project3/image01.png",
    color: "#FF83F3",

    othercontents: [
      {
        id: 1,
        headername: "UX/UI Design & Product Strategy",

        bodyname1:
          "I led a complete UX/UI redesign for a fashion e-commerce platform, focusing on improving user engagement, clarity, and brand identity.",

        color: "#FF83F3",
        bodyname1colorchange: false,

        contentloop01: [
          "Conducted user behavior analysis",
          "Redesigned the shopping journey",
          "Improved product discovery and navigation",
          "Optimized checkout experience",
        ],

        closingcontent01:
          "Every design decision — typography, color systems, spacing, layout hierarchy — was intentionally crafted to reflect the brand's fashion-forward identity while improving usability.",

        image: "/asset/images/project3/image02.png",
      },

      {
        id: 2,
        headername: "Full-Stack Development (Next.js + Django)",

        bodyname1: "Frontend",
        color: "#FF5DEF",
        bodyname1colorchange: true,

        contentloop01: [
          "Next.js",
          "Tailwind CSS",
          "Redux (state management)",
          "Responsive architecture",
          "Responsive layouts (desktop & mobile)",
        ],

        closingcontent01:
          "The frontend was built for performance, accessibility, and scalability.",

        bodyname2: "Backend",
        bodyname2colorchange: true,

        contentloop02: [
          "Django",
          "REST API architecture",
          "Transaction handling",
          "Business logic implementation",
        ],

        closingcontent02:
          "The backend handled product management, order processing, and transactional workflows with optimized database structure.",

        image: "/asset/images/project3/image03.png",
      },

      {
        id: 3,
        headername: "Brand Identity & Motion Design",
        color: "#FF17E9",

        contentloop01: [
          "Elevating Brand Engagement",
          "Logo Design",
          "Packaging & Visual Assets",
          "2D Animations",
        ],

        closingcontent01:
          "Tools Used: After Effects, Adobe Illustrator, Adobe Photoshop.",

        closingcontent02:
          "This project demonstrates my ability to merge design, branding, and development into a unified digital product.",

        image: "/asset/images/project3/image04.png",
      },
    ],
  },
];


export const testimonials = [
  {
    id: 1,
    name: "Michael O.",
    rank: "Product Manager, Abuja / Nigeria",
    image: "/asset/images/testimonials/nigeria.png",
    content: `Working with Abbey (AlienarTech) was a seamless experience. He doesn&apos;t just write code — he thinks in systems. During our collaboration, he handled both the UX design and full-stack development with impressive clarity and structure.

What stood out most was his ability to translate complex requirements into scalable solutions. He’s reliable, technically strong, and always focused on delivering real product value.`,
  },

  {
    id: 2,
    name: "Lucas M.",
    rank: "Creative Director, Paris / France",
    image: "/asset/images/testimonials/france.png",
    content: `Abbey combines aesthetics with engineering discipline. While working together, I was impressed by how he balanced clean UI design with robust backend logic.

He communicates clearly, meets deadlines, and genuinely cares about product quality. His ability to think beyond the interface makes him a strong full-stack partner.`,
  },

  {
    id: 3,
    name: "Daniel K.",
    rank: "Web3 Consultant, Nairobi / Kenya",
    image: "/asset/images/testimonials/kenya.png",
    content: `Abbey brought both design precision and backend intelligence to our Web3 project. His understanding of wallet integrations and frontend architecture made a significant difference in the user experience.

He approaches development strategically and ensures the final product feels intuitive and stable. I would confidently collaborate with him again.`,
  }
]