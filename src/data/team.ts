import type { TeamMember, TeamStat } from "@/models"

export const teamMembers: TeamMember[] = [
  {
    name: "Nguyễn Văn A",
    role: "Tech Lead & Full-stack Developer",
    avatar: "/user.png",
    skills: ["React", "Node.js", "TypeScript", "AWS"],
    description:
      "5+ năm kinh nghiệm, chuyên về kiến trúc hệ thống và mentoring team.",
  },
  {
    name: "Kamiya",
    role: "Frontend Developer",
    avatar: "/user.png",
    skills: ["React", "Next.js", "React Native", "TailwindCSS"],
    description:
      "Chuyên gia UI/UX với đam mê tạo ra giao diện đẹp và trải nghiệm người dùng tuyệt vời.",
  },
  {
    name: "Lê Văn C",
    role: "Backend Developer",
    avatar: "/user.png",
    skills: ["Python", "Django", "PostgreSQL", "Docker"],
    description: "Expert về backend architecture và database optimization.",
  },
  {
    name: "Trần D",
    role: "Mobile Developer",
    avatar: "/user.png",
    skills: ["React Native", "Flutter", "iOS", "Android"],
    description:
      "Chuyên phát triển ứng dụng di động đa nền tảng với hiệu suất cao.",
  },
  {
    name: "Hoàng Văn E",
    role: "DevOps Engineer",
    avatar: "/user.png",
    skills: ["AWS", "Kubernetes", "CI/CD", "Terraform"],
    description: "Đảm bảo hệ thống hoạt động ổn định và scalable.",
  },
  {
    name: "Võ Thị F",
    role: "UI/UX Designer",
    avatar: "/user.png",
    skills: ["Figma", "Adobe XD", "Sketch", "Prototyping"],
    description: "Tạo ra những thiết kế sáng tạo và user-friendly.",
  },
  {
    name: "Đặng Văn G",
    role: "QA Engineer",
    avatar: "/user.png",
    skills: ["Testing", "Automation", "Selenium", "Jest"],
    description: "Đảm bảo chất lượng sản phẩm thông qua testing toàn diện.",
  },
  {
    name: "Bùi Thị H",
    role: "Data Engineer",
    avatar: "/user.png",
    skills: ["Python", "SQL", "Apache Spark", "Machine Learning"],
    description: "Xử lý và phân tích dữ liệu để đưa ra insights có giá trị.",
  },
]

export const teamStats: TeamStat[] = [
  {
    value: "100%",
    label: "Commitment",
    gradient:
      "from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400",
  },
  {
    value: "Agile",
    label: "Methodology",
    gradient:
      "from-emerald-600 to-blue-600 dark:from-emerald-400 dark:to-blue-400",
  },
  {
    value: "24/7",
    label: "Support",
    gradient:
      "from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400",
  },
  {
    value: "5★",
    label: "Quality",
    gradient:
      "from-yellow-500 to-orange-500 dark:from-yellow-400 dark:to-orange-400",
  },
]
