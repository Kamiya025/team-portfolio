import { Project, ProjectsContent } from "@/models/projects"

export const featuredProjects: Project[] = [
  {
    id: "ecommerce-platform",
    title: {
      en: "E-Commerce Platform",
      vi: "Nền tảng thương mại điện tử",
    },
    description: {
      en: "Comprehensive e-commerce platform with order management system, diverse payment methods and responsive interface. Integrated AI for product recommendations and customer support chatbot.",
      vi: "Nền tảng thương mại điện tử toàn diện với hệ thống quản lý đơn hàng, thanh toán đa dạng và giao diện responsive. Tích hợp AI để gợi ý sản phẩm và chatbot hỗ trợ khách hàng.",
    },
    shortDescription: {
      en: "Modern e-commerce platform with AI integration",
      vi: "Nền tảng thương mại điện tử hiện đại với AI tích hợp",
    },
    image: "/projects/ecommerce.jpg",
    technologies: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Stripe",
      "OpenAI",
    ],
    category: "web",
    status: "completed",
    featured: true,
    githubUrl: "https://github.com/team/ecommerce-platform",
    year: 2024,
    client: "TechCorp",
    teamSize: 5,
    duration: {
      en: "6 months",
      vi: "6 tháng",
    },
  },
  {
    id: "admin-dashboard",
    title: {
      en: "Admin Dashboard",
      vi: "Dashboard quản trị",
    },
    description: {
      en: "Modern admin dashboard with intuitive interface, real-time reports, user management and data analytics. Integrated interactive charts and notification system.",
      vi: "Dashboard quản trị hiện đại với giao diện trực quan, báo cáo real-time, quản lý người dùng và phân tích dữ liệu. Tích hợp biểu đồ tương tác và hệ thống thông báo.",
    },
    shortDescription: {
      en: "Admin dashboard with real-time reports",
      vi: "Dashboard quản trị với báo cáo real-time",
    },
    image: "/projects/dashboard.jpg",
    technologies: [
      "React",
      "TypeScript",
      "Chart.js",
      "Ant Design",
      "Node.js",
      "MongoDB",
    ],
    category: "web",
    status: "completed",
    featured: true,
    githubUrl: "https://github.com/team/admin-dashboard",
    year: 2024,
    client: "StartupXYZ",
    teamSize: 4,
    duration: {
      en: "5 months",
      vi: "5 tháng",
    },
  },
  {
    id: "ai-chatbot",
    title: {
      en: "AI Customer Service",
      vi: "Dịch vụ khách hàng AI",
    },
    description: {
      en: "Intelligent chatbot system using AI to handle customer requests 24/7. Integrated NLP, sentiment analysis and smart escalation to human agents when needed.",
      vi: "Hệ thống chatbot thông minh sử dụng AI để xử lý yêu cầu khách hàng 24/7. Tích hợp NLP, sentiment analysis và chuyển tiếp thông minh đến nhân viên khi cần thiết.",
    },
    shortDescription: {
      en: "Smart AI customer service chatbot",
      vi: "Chatbot AI phục vụ khách hàng thông minh",
    },
    image: "/projects/ai-chatbot.jpg",
    technologies: [
      "Python",
      "OpenAI GPT",
      "FastAPI",
      "Redis",
      "WebSocket",
      "Docker",
    ],
    category: "ai",
    status: "completed",
    featured: true,
    githubUrl: "https://github.com/team/ai-chatbot",
    year: 2024,
    client: "ServiceCorp",
    teamSize: 4,
    duration: {
      en: "4 months",
      vi: "4 tháng",
    },
  },
  {
    id: "blog-platform",
    title: {
      en: "Blog Platform",
      vi: "Nền tảng blog",
    },
    description: {
      en: "Modern blog platform with WYSIWYG editor, comment system, SEO optimization and responsive design. Multi-language support and social media integration.",
      vi: "Nền tảng blog hiện đại với editor WYSIWYG, hệ thống comment, SEO tối ưu và responsive design. Hỗ trợ đa ngôn ngữ và tích hợp social media.",
    },
    shortDescription: {
      en: "Blog platform with WYSIWYG editor",
      vi: "Nền tảng blog với editor WYSIWYG",
    },
    image: "/projects/blog.jpg",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "Vercel",
    ],
    category: "web",
    status: "completed",
    featured: true,
    githubUrl: "https://github.com/team/blog-platform",
    year: 2024,
    client: "ContentCreator",
    teamSize: 3,
    duration: {
      en: "3 months",
      vi: "3 tháng",
    },
  },
  {
    id: "task-management",
    title: {
      en: "Task Management App",
      vi: "Ứng dụng quản lý công việc",
    },
    description: {
      en: "Task management application with Kanban board, timeline, team collaboration and progress reporting. Integrated calendar and notification system.",
      vi: "Ứng dụng quản lý công việc với Kanban board, timeline, team collaboration và báo cáo tiến độ. Tích hợp calendar và notification system.",
    },
    shortDescription: {
      en: "Task management app with Kanban board",
      vi: "Ứng dụng quản lý công việc với Kanban board",
    },
    image: "/projects/task-management.jpg",
    technologies: [
      "React",
      "Redux",
      "Material-UI",
      "Node.js",
      "MongoDB",
      "Socket.io",
    ],
    category: "web",
    status: "completed",
    featured: true,
    githubUrl: "https://github.com/team/task-management",
    year: 2023,
    client: "TeamWork Inc",
    teamSize: 5,
    duration: {
      en: "7 months",
      vi: "7 tháng",
    },
  },
  {
    id: "portfolio-website",
    title: {
      en: "Portfolio Website",
      vi: "Website portfolio",
    },
    description: {
      en: "Personal portfolio website with smooth animations, dark/light mode, responsive design and integrated contact form. SEO and performance optimized.",
      vi: "Website portfolio cá nhân với animation mượt mà, dark/light mode, responsive design và tích hợp contact form. Tối ưu SEO và performance.",
    },
    shortDescription: {
      en: "Portfolio website with smooth animations",
      vi: "Website portfolio với animation mượt mà",
    },
    image: "/projects/portfolio.jpg",
    technologies: [
      "Next.js",
      "Framer Motion",
      "Tailwind CSS",
      "TypeScript",
      "Vercel",
    ],
    category: "web",
    status: "completed",
    featured: true,
    githubUrl: "https://github.com/team/portfolio-website",
    year: 2023,
    client: "Freelancer",
    teamSize: 2,
    duration: {
      en: "2 months",
      vi: "2 tháng",
    },
  },
]

export const projectsContent: ProjectsContent = {
  title: {
    en: "Featured Projects",
    vi: "Dự án nổi bật",
  },
  subtitle: {
    en: "Portfolio",
    vi: "Portfolio",
  },
  description: {
    en: "Explore the premium projects we have completed, from modern web applications to advanced AI solutions, all developed to the highest standards.",
    vi: "Khám phá những dự án đẳng cấp mà chúng tôi đã thực hiện, từ ứng dụng web hiện đại đến giải pháp AI tiên tiến, tất cả đều được phát triển với tiêu chuẩn cao nhất.",
  },
  ctaButton: {
    text: {
      en: "View All Projects",
      vi: "Xem tất cả dự án",
    },
    href: "/projects",
  },
  viewAllButton: {
    text: {
      en: "View Details",
      vi: "Xem chi tiết",
    },
    href: "/projects",
  },
}
