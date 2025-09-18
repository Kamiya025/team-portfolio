import type { Skill, FeaturesContent } from "@/models"

export const skills: Skill[] = [
  {
    icon: "frontend",
    title: "Frontend Development",
    description:
      "React, Vue.js, Next.js, TypeScript, TailwindCSS - Tạo ra giao diện người dùng hiện đại và responsive.",
  },
  {
    icon: "backend",
    title: "Backend Development",
    description:
      "Node.js, Python, Django, PostgreSQL, MongoDB - Xây dựng API mạnh mẽ và hệ thống backend scalable.",
  },
  {
    icon: "mobile",
    title: "Mobile Development",
    description:
      "React Native, Flutter, iOS, Android - Phát triển ứng dụng di động đa nền tảng với hiệu suất cao.",
  },
  {
    icon: "design",
    title: "UI/UX Design",
    description:
      "Figma, Adobe XD, Sketch, Prototyping - Thiết kế giao diện đẹp mắt và trải nghiệm người dùng tối ưu.",
  },
  {
    icon: "devops",
    title: "DevOps & Cloud",
    description:
      "AWS, Docker, Kubernetes, CI/CD - Triển khai và vận hành hệ thống trên cloud một cách hiệu quả.",
  },
  {
    icon: "data",
    title: "Data & Analytics",
    description:
      "Python, SQL, Apache Spark, Machine Learning - Xử lý và phân tích dữ liệu để đưa ra insights có giá trị.",
  },
]

export const featuresContent: FeaturesContent = {
  title: "Kỹ năng & Công nghệ",
  description:
    "Chúng tôi sở hữu đa dạng kỹ năng và kinh nghiệm trong các lĩnh vực công nghệ hiện đại",
  cta: {
    title: "Bạn có dự án cần hỗ trợ?",
    description: "Hãy để chúng tôi giúp bạn biến ý tưởng thành hiện thực",
    buttons: [
      { text: "Xem Portfolio", variant: "primary" },
      { text: "Liên hệ ngay", variant: "secondary" },
    ],
  },
}
