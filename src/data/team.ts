import type { TeamMember, TeamStat } from '@/models'

export const teamMembers: TeamMember[] = [
  {
    name: 'Lê Thanh Bình',
    role: 'Solutions Architect',
    avatar: '/users/male2.png',
    skills: [
      'Solution Architecture',
      'System Design',
      'Cloud',
      'Microservices',
      'DevOps',
    ],
    description: {
      en: 'Designing scalable, secure, and high-performance system architectures.',
      vi: 'Thiết kế kiến trúc hệ thống mở rộng, bảo mật và hiệu suất cao.',
    },
    funFact: {
      en: '🧩 Can visualize system diagrams faster than drawing doodles!',
      vi: '🧩 Vẽ sơ đồ hệ thống còn nhanh hơn cả vẽ doodle!',
    },
  },
  {
    name: 'TuânPH',
    role: 'Product Owner',
    avatar: '/users/male.png',
    skills: [
      'Product Management',
      'Scrum',
      'Stakeholder Communication',
      'Roadmapping',
    ],
    description: {
      en: 'Bridging business needs and development team, ensuring product vision and value delivery.',
      vi: 'Kết nối nhu cầu kinh doanh và đội phát triển, đảm bảo tầm nhìn sản phẩm và giá trị mang lại.',
    },
    funFact: {
      en: '📝 Can turn a napkin sketch into a full product backlog!',
      vi: '📝 Có thể biến bản vẽ trên khăn giấy thành backlog sản phẩm hoàn chỉnh!',
    },
  },
  {
    name: 'LinhDD',
    role: {
      en: 'Project Manager',
      vi: 'Quản lý dự án',
    },
    avatar: '/users/female2.png',
    skills: ['Project Management', 'Scrum', 'Agile', 'Communication'],
    description: {
      en: 'Expert in project planning, team coordination, and ensuring timely delivery.',
      vi: 'Chuyên gia lập kế hoạch dự án, điều phối nhóm và đảm bảo tiến độ giao hàng đúng hạn.',
    },
    funFact: {
      en: '🗂️ Can organize a team meeting in under 2 minutes, even before the coffee is ready!',
      vi: '🗂️ Có thể tổ chức họp nhóm trong chưa đầy 2 phút, thậm chí trước khi cà phê pha xong!',
    },
  },
  {
    name: 'Vương Mạnh Hùng',
    role: {
      en: 'Tech Lead & Full-stack Developer',
      vi: 'Tech Lead & Full-stack Developer',
    },
    avatar: '/users/user.png',
    skills: [
      'React',
      'Node.js',
      'TypeScript',
      'AWS',
      'Docker',
      'Kubernetes',
      'CI/CD',
      'Python',
    ],
    description: {
      en: '5+ years of experience, specializing in system architecture and team mentoring.',
      vi: '5+ năm kinh nghiệm, chuyên về kiến trúc hệ thống và mentoring team.',
    },
  },
  {
    name: 'Quang Hưng',
    role: 'Frontend Developer & Mobile Developer',
    avatar: '/users/kamiya.png',
    skills: [
      'React',
      'Next.js',
      'React Native',
      'TailwindCSS',
      'JavaScript',
      'TypeScript',
    ],
    description: {
      en: ' Curious and experimental; write scalable FE logic to drive sustainable growth.',
      vi: 'Tò mò và ưa thử nghiệm; viết logic FE dễ mở rộng để sản phẩm tăng trưởng bền vững.',
    },
    funFact: {
      en: '"Work smart, not hard" – and sometimes, "not working" at all!',
      vi: '"Làm việc thông minh, không làm việc chăm chỉ" – và đôi khi, "không làm việc" luôn.!',
    },
  },
  {
    name: 'Trịnh Đức Thành',
    role: 'Backend Developer',
    avatar: '/users/user.png',
    skills: [
      'Javascript',
      'Typescript',
      'Python',
      'Java',
      'NodeJS',
      'VueJS',
      'Spring boot',
      'Django',
      'FastAPI',
      'Microservice',
      'MySQL',
      'PostgreSQL',
      'MongoDB',
    ],
    description: {
      en: 'Introverted and weeaboo :))',
      vi: 'Wibu hướng nội :))',
    },
    funFact: {
      en: 'Introverted and weeaboo :))',
      vi: 'Wibu hướng nội :))',
    },
  },
  {
    name: 'Giang Nguyễn',
    role: 'Frontend Developer',
    avatar: '/users/user.png',
    skills: [
      'React',
      'Next.js',
      'React Native',
      'TailwindCSS',
      'JavaScript',
      'TypeScript',
    ],
    description: {
      en: 'Frontend developer with 2 years of experience, passionate about building modern, user-friendly web interfaces and always eager to learn new technologies.',
      vi: 'Frontend developer với 2 năm kinh nghiệm, đam mê xây dựng giao diện web hiện đại, thân thiện với người dùng và luôn sẵn sàng học hỏi công nghệ mới.',
    },
  },
  {
    name: 'NamNH',
    role: 'DevOps Engineer',
    avatar: '/users/user.png',
    skills: ['AWS', 'Kubernetes', 'CI/CD', 'Terraform', 'Azure', 'GCP'],
    description: {
      en: 'Ensuring systems run stably and scalably.',
      vi: 'Đảm bảo hệ thống hoạt động ổn định và scalable.',
    },
    funFact: {
      en: '☁️ Can deploy to production with just one command... and a prayer!',
      vi: '☁️ Có thể deploy lên production chỉ với một lệnh... và một lời cầu nguyện!',
    },
  },
  {
    name: 'Thái Quỳnh',
    role: 'UI/UX Designer',
    avatar: '/users/male.png',
    skills: ['Figma', 'Adobe XD', 'Sketch', 'Prototyping'],
    description: {
      en: 'Creating innovative and user-friendly designs.',
      vi: 'Tạo ra những thiết kế sáng tạo và user-friendly.',
    },
    funFact: {
      en: '✨ Turns coffee stains into beautiful design inspiration!',
      vi: '✨ Biến vết cà phê đổ thành nguồn cảm hứng thiết kế đẹp!',
    },
  },

  {
    name: 'Trâm',
    role: 'Test Lead & QA Engineer',
    avatar: '/users/female2.png',
    skills: ['Testing', 'Automation', 'Selenium', 'Jest', 'Playwright'],
    description: {
      en: 'Ensuring product quality through comprehensive testing.',
      vi: 'Đảm bảo chất lượng sản phẩm thông qua testing toàn diện.',
    },
    // No funFact - this member doesn't have a fun fact
  },
  {
    name: 'Thu Hoàng',
    role: 'QA Engineer',
    avatar: '/users/female.png',
    skills: ['Testing', 'Automation', 'Selenium', 'Jest', 'Playwright'],
    description: {
      en: 'Ensuring product quality through comprehensive testing.',
      vi: 'Đảm bảo chất lượng sản phẩm thông qua testing toàn diện.',
    },
    // No funFact - this member doesn't have a fun fact
  },
]

export const teamStats: TeamStat[] = [
  {
    value: '100%',

    label: {
      en: 'Commitment',
      vi: 'Cam kết',
    },
    gradient:
      'from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400',
  },
  {
    value: 'Agile',

    label: {
      en: 'Methodology',
      vi: 'Phương pháp',
    },
    gradient:
      'from-emerald-600 to-blue-600 dark:from-emerald-400 dark:to-blue-400',
  },
  {
    value: '24/7',
    label: {
      en: 'Support',
      vi: 'Hỗ trợ',
    },
    gradient:
      'from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400',
  },
  {
    value: '5★',
    label: {
      en: 'Quality',
      vi: 'Chất lượng',
    },
    gradient:
      'from-yellow-500 to-orange-500 dark:from-yellow-400 dark:to-orange-400',
  },
]
