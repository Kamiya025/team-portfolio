import type { TeamMember, TeamStat } from "@/models"

export const teamMembers: TeamMember[] = [
  {
    name: {
      en: "Nguyễn Văn A",
      vi: "Nguyễn Văn A",
    },
    role: {
      en: "Tech Lead & Full-stack Developer",
      vi: "Tech Lead & Full-stack Developer",
    },
    avatar: "/user.png",
    skills: ["React", "Node.js", "TypeScript", "AWS"],
    description: {
      en: "5+ years of experience, specializing in system architecture and team mentoring.",
      vi: "5+ năm kinh nghiệm, chuyên về kiến trúc hệ thống và mentoring team.",
    },
    funFact: {
      en: "🎯 Can debug any code while drinking 5 cups of coffee per day!",
      vi: "🎯 Có thể debug mọi đoạn code trong khi uống 5 cốc cà phê mỗi ngày!",
    },
  },
  {
    name: {
      en: "Kamiya",
      vi: "Kamiya",
    },
    role: {
      en: "Frontend Developer",
      vi: "Frontend Developer",
    },
    avatar: "/user.png",
    skills: ["React", "Next.js", "React Native", "TailwindCSS"],
    description: {
      en: "UI/UX expert with a passion for creating beautiful interfaces and amazing user experiences.",
      vi: "Chuyên gia UI/UX với đam mê tạo ra giao diện đẹp và trải nghiệm người dùng tuyệt vời.",
    },
    funFact: {
      en: "🎨 Once redesigned a button 47 times before being satisfied!",
      vi: "🎨 Đã từng thiết kế lại một button 47 lần trước khi hài lòng!",
    },
  },
  {
    name: {
      en: "Lê Văn C",
      vi: "Lê Văn C",
    },
    role: {
      en: "Backend Developer",
      vi: "Backend Developer",
    },
    avatar: "/user.png",
    skills: ["Python", "Django", "PostgreSQL", "Docker"],
    description: {
      en: "Expert in backend architecture and database optimization.",
      vi: "Expert về backend architecture và database optimization.",
    },
    funFact: {
      en: "🐍 Writes Python code in his sleep and it actually works!",
      vi: "🐍 Viết code Python trong giấc ngủ và nó thực sự chạy được!",
    },
  },
  {
    name: {
      en: "Trần D",
      vi: "Trần D",
    },
    role: {
      en: "Mobile Developer",
      vi: "Mobile Developer",
    },
    avatar: "/user.png",
    skills: ["React Native", "Flutter", "iOS", "Android"],
    description: {
      en: "Specializing in cross-platform mobile application development with high performance.",
      vi: "Chuyên phát triển ứng dụng di động đa nền tảng với hiệu suất cao.",
    },
    funFact: {
      en: "📱 Has 23 different phones for testing - and counting!",
      vi: "📱 Có 23 chiếc điện thoại khác nhau để test - và vẫn đang tăng!",
    },
  },
  {
    name: {
      en: "Hoàng Văn E",
      vi: "Hoàng Văn E",
    },
    role: {
      en: "DevOps Engineer",
      vi: "DevOps Engineer",
    },
    avatar: "/user.png",
    skills: ["AWS", "Kubernetes", "CI/CD", "Terraform"],
    description: {
      en: "Ensuring systems run stably and scalably.",
      vi: "Đảm bảo hệ thống hoạt động ổn định và scalable.",
    },
    funFact: {
      en: "☁️ Can deploy to production with just one command... and a prayer!",
      vi: "☁️ Có thể deploy lên production chỉ với một lệnh... và một lời cầu nguyện!",
    },
  },
  {
    name: {
      en: "Võ Thị F",
      vi: "Võ Thị F",
    },
    role: {
      en: "UI/UX Designer",
      vi: "UI/UX Designer",
    },
    avatar: "/user.png",
    skills: ["Figma", "Adobe XD", "Sketch", "Prototyping"],
    description: {
      en: "Creating innovative and user-friendly designs.",
      vi: "Tạo ra những thiết kế sáng tạo và user-friendly.",
    },
    funFact: {
      en: "✨ Turns coffee stains into beautiful design inspiration!",
      vi: "✨ Biến vết cà phê đổ thành nguồn cảm hứng thiết kế đẹp!",
    },
  },
  {
    name: {
      en: "Đặng Văn G",
      vi: "Đặng Văn G",
    },
    role: {
      en: "QA Engineer",
      vi: "QA Engineer",
    },
    avatar: "/user.png",
    skills: ["Testing", "Automation", "Selenium", "Jest"],
    description: {
      en: "Ensuring product quality through comprehensive testing.",
      vi: "Đảm bảo chất lượng sản phẩm thông qua testing toàn diện.",
    },
    // No funFact - this member doesn't have a fun fact
  },
  {
    name: {
      en: "Bùi Thị H",
      vi: "Bùi Thị H",
    },
    role: {
      en: "Data Engineer",
      vi: "Data Engineer",
    },
    avatar: "/user.png",
    skills: ["Python", "SQL", "Apache Spark", "Machine Learning"],
    description: {
      en: "Processing and analyzing data to provide valuable insights.",
      vi: "Xử lý và phân tích dữ liệu để đưa ra insights có giá trị.",
    },
    funFact: {
      en: "📊 Can predict the weather by analyzing coffee consumption patterns!",
      vi: "📊 Có thể dự đoán thời tiết bằng cách phân tích mẫu tiêu thụ cà phê!",
    },
  },
]

export const teamStats: TeamStat[] = [
  {
    value: {
      en: "100%",
      vi: "100%",
    },
    label: {
      en: "Commitment",
      vi: "Cam kết",
    },
    gradient:
      "from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400",
  },
  {
    value: {
      en: "Agile",
      vi: "Agile",
    },
    label: {
      en: "Methodology",
      vi: "Phương pháp",
    },
    gradient:
      "from-emerald-600 to-blue-600 dark:from-emerald-400 dark:to-blue-400",
  },
  {
    value: {
      en: "24/7",
      vi: "24/7",
    },
    label: {
      en: "Support",
      vi: "Hỗ trợ",
    },
    gradient:
      "from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400",
  },
  {
    value: {
      en: "5★",
      vi: "5★",
    },
    label: {
      en: "Quality",
      vi: "Chất lượng",
    },
    gradient:
      "from-yellow-500 to-orange-500 dark:from-yellow-400 dark:to-orange-400",
  },
]
