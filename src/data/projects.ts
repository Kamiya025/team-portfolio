import { Project, ProjectsContent } from '@/models/projects'

export const featuredProjects: Project[] = [
  {
    id: 'koi-flatform',
    title: {
      en: 'Koi Flatform - Smart Laundry System',
      vi: 'Koi Flatform - Hệ thống giặt là thông minh',
    },
    description: {
      en: 'A modern coin-operated laundry platform with a centralized management system, general configuration, and integrated kiosk for user interaction. The system allows users to easily operate washing machines using coins, QR code, or card swipe, while providing administrators with a powerful dashboard for monitoring, configuration, and revenue management.',
      vi: 'Nền tảng giặt là tự động sử dụng xu với hệ thống quản trị tập trung, cấu hình chung và kiosk tích hợp cho người dùng thao tác. Hệ thống cho phép người dùng dễ dàng vận hành máy giặt bằng xu, quét QR hoặc quẹt thẻ, đồng thời cung cấp cho quản trị viên dashboard mạnh mẽ để giám sát, cấu hình và quản lý doanh thu.',
    },
    shortDescription: {
      en: 'Smart laundry platform with admin dashboard, kiosk & multiple payment methods (coin, QR, card)',
      vi: 'Nền tảng giặt là tự động, có quản trị, kiosk & thanh toán đa dạng (xu, QR, quẹt thẻ)',
    },
    image: '/projects/koi.png',
    technologies: [
      'Next.js',
      'TypeScript',
      'NestJS',
      'PostgreSQL',
      'Docker',
      'Raspberry Pi',
      'Kiosk UI',
      'QR Payment',
      'Card Reader',
    ],
    category: 'web',
    status: 'in-progress',
    featured: true,
    year: 2025,
    client: 'Koi Laundry',
    teamSize: 6,
    duration: {
      en: '9 months',
      vi: '9 tháng',
    },
  },
  {
    id: 'product-analytics',
    title: {
      en: 'Product Analytics Platform',
      vi: 'Nền tảng phân tích sản phẩm',
    },
    description: {
      en: 'A powerful analytics platform for tracking user behavior, event funnels, retention, and conversion rates. Real-time dashboards, custom event tracking, and advanced segmentation help businesses optimize their products and make data-driven decisions.',
      vi: 'Nền tảng phân tích mạnh mẽ giúp theo dõi hành vi người dùng, phễu sự kiện, tỷ lệ giữ chân và chuyển đổi. Dashboard realtime, theo dõi sự kiện tuỳ chỉnh và phân khúc nâng cao giúp doanh nghiệp tối ưu sản phẩm và ra quyết định dựa trên dữ liệu.',
    },
    shortDescription: {
      en: 'Analytics platform for user behavior and product optimization',
      vi: 'Nền tảng phân tích hành vi người dùng & tối ưu sản phẩm',
    },
    technologies: [
      'Next.js',
      'TypeScript',
      'Node.js',
      'ClickHouse',
      'React',
      'Tailwind CSS',
      'Redis',
      'Docker',
    ],
    category: 'web',
    status: 'in-progress',
    featured: true,
    githubUrl: 'https://github.com/team/product-analytics',
    year: 2025,

    teamSize: 6,
    duration: {
      en: '8 months',
      vi: '8 tháng',
    },
  },
  {
    id: 'admin-dashboard',
    title: {
      en: 'Admin Dashboard',
      vi: 'Dashboard quản trị',
    },
    description: {
      en: 'Modern admin dashboard with intuitive interface, real-time reports, user management and data analytics. Integrated interactive charts and notification system.',
      vi: 'Dashboard quản trị hiện đại với giao diện trực quan, báo cáo real-time, quản lý người dùng và phân tích dữ liệu. Tích hợp biểu đồ tương tác và hệ thống thông báo.',
    },
    shortDescription: {
      en: 'Admin dashboard with real-time reports',
      vi: 'Dashboard quản trị với báo cáo real-time',
    },
    technologies: [
      'React',
      'TypeScript',
      'Chart.js',
      'Ant Design',
      'Node.js',
      'MongoDB',
    ],
    category: 'web',
    status: 'completed',
    featured: true,

    year: 2024,

    teamSize: 4,
    duration: {
      en: '5 months',
      vi: '5 tháng',
    },
  },
  {
    id: 'ai-chatbot',
    title: {
      en: 'AI Customer Service',
      vi: 'Dịch vụ khách hàng AI',
    },
    description: {
      en: 'Intelligent chatbot system using AI to handle customer requests 24/7. Integrated NLP, sentiment analysis and smart escalation to human agents when needed.',
      vi: 'Hệ thống chatbot thông minh sử dụng AI để xử lý yêu cầu khách hàng 24/7. Tích hợp NLP, sentiment analysis và chuyển tiếp thông minh đến nhân viên khi cần thiết.',
    },
    shortDescription: {
      en: 'Smart AI customer service chatbot',
      vi: 'Chatbot AI phục vụ khách hàng thông minh',
    },
    technologies: [
      'Python',
      'OpenAI GPT',
      'FastAPI',
      'Redis',
      'WebSocket',
      'Docker',
    ],
    category: 'ai',
    status: 'completed',
    featured: true,
    year: 2024,
    teamSize: 4,
    duration: {
      en: '4 months',
      vi: '4 tháng',
    },
  },
  {
    id: 'blog-platform',
    title: {
      en: 'Blog Platform',
      vi: 'Nền tảng blog',
    },
    description: {
      en: 'Modern blog platform with WYSIWYG editor, comment system, SEO optimization and responsive design. Multi-language support and social media integration.',
      vi: 'Nền tảng blog hiện đại với editor WYSIWYG, hệ thống comment, SEO tối ưu và responsive design. Hỗ trợ đa ngôn ngữ và tích hợp social media.',
    },
    shortDescription: {
      en: 'Blog platform with WYSIWYG editor',
      vi: 'Nền tảng blog với editor WYSIWYG',
    },
    technologies: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Prisma',
      'PostgreSQL',
      'Vercel',
    ],
    category: 'web',
    status: 'completed',
    featured: true,
    githubUrl: 'https://github.com/team/blog-platform',
    year: 2024,
    client: 'ContentCreator',
    teamSize: 3,
    duration: {
      en: '3 months',
      vi: '3 tháng',
    },
  },
  {
    id: 'task-management',
    title: {
      en: 'Task Management App',
      vi: 'Ứng dụng quản lý công việc',
    },
    description: {
      en: 'Task management application with Kanban board, timeline, team collaboration and progress reporting. Integrated calendar and notification system.',
      vi: 'Ứng dụng quản lý công việc với Kanban board, timeline, team collaboration và báo cáo tiến độ. Tích hợp calendar và notification system.',
    },
    shortDescription: {
      en: 'Task management app with Kanban board',
      vi: 'Ứng dụng quản lý công việc với Kanban board',
    },
    technologies: [
      'React',
      'Redux',
      'Material-UI',
      'Node.js',
      'MongoDB',
      'Socket.io',
    ],
    category: 'web',
    status: 'completed',
    featured: true,
    year: 2023,
    teamSize: 5,
    duration: {
      en: '7 months',
      vi: '7 tháng',
    },
  },
]

export const projectsContent: ProjectsContent = {
  title: {
    en: 'Featured Projects',
    vi: 'Dự án nổi bật',
  },
  subtitle: {
    en: 'Portfolio',
    vi: 'Portfolio',
  },
  description: {
    en: 'Explore the premium projects we have completed, from modern web applications to advanced AI solutions, all developed to the highest standards.',
    vi: 'Khám phá những dự án đẳng cấp mà chúng tôi đã thực hiện, từ ứng dụng web hiện đại đến giải pháp AI tiên tiến, tất cả đều được phát triển với tiêu chuẩn cao nhất.',
  },
  ctaButton: {
    text: {
      en: 'View All Projects',
      vi: 'Xem tất cả dự án',
    },
    href: '/projects',
  },
  viewAllButton: {
    text: {
      en: 'View Details',
      vi: 'Xem chi tiết',
    },
    href: '/projects',
  },
}
