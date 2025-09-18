import type { Skill, FeaturesContent } from "@/models"

export const skills: Skill[] = [
  {
    icon: "frontend",
    title: {
      en: "Frontend Development",
      vi: "Frontend Development",
    },
    description: {
      en: "React, Vue.js, Next.js, TypeScript, TailwindCSS - Creating modern and responsive user interfaces.",
      vi: "React, Vue.js, Next.js, TypeScript, TailwindCSS - Tạo ra giao diện người dùng hiện đại và responsive.",
    },
  },
  {
    icon: "backend",
    title: {
      en: "Backend Development",
      vi: "Backend Development",
    },
    description: {
      en: "Node.js, Python, Django, PostgreSQL, MongoDB - Building powerful APIs and scalable backend systems.",
      vi: "Node.js, Python, Django, PostgreSQL, MongoDB - Xây dựng API mạnh mẽ và hệ thống backend scalable.",
    },
  },
  {
    icon: "mobile",
    title: {
      en: "Mobile Development",
      vi: "Mobile Development",
    },
    description: {
      en: "React Native, Flutter, iOS, Android - Developing cross-platform mobile applications with high performance.",
      vi: "React Native, Flutter, iOS, Android - Phát triển ứng dụng di động đa nền tảng với hiệu suất cao.",
    },
  },
  {
    icon: "design",
    title: {
      en: "UI/UX Design",
      vi: "UI/UX Design",
    },
    description: {
      en: "Figma, Adobe XD, Sketch, Prototyping - Creating beautiful interfaces and optimal user experiences.",
      vi: "Figma, Adobe XD, Sketch, Prototyping - Thiết kế giao diện đẹp mắt và trải nghiệm người dùng tối ưu.",
    },
  },
  {
    icon: "devops",
    title: {
      en: "DevOps & Cloud",
      vi: "DevOps & Cloud",
    },
    description: {
      en: "AWS, Docker, Kubernetes, CI/CD - Deploying and operating cloud systems efficiently.",
      vi: "AWS, Docker, Kubernetes, CI/CD - Triển khai và vận hành hệ thống trên cloud một cách hiệu quả.",
    },
  },
  {
    icon: "data",
    title: {
      en: "Data & Analytics",
      vi: "Data & Analytics",
    },
    description: {
      en: "Python, SQL, Apache Spark, Machine Learning - Processing and analyzing data to provide valuable insights.",
      vi: "Python, SQL, Apache Spark, Machine Learning - Xử lý và phân tích dữ liệu để đưa ra insights có giá trị.",
    },
  },
]

export const featuresContent: FeaturesContent = {
  title: {
    en: "Skills & Technology",
    vi: "Kỹ năng & Công nghệ",
  },
  description: {
    en: "We possess diverse skills and experience in modern technology fields",
    vi: "Chúng tôi sở hữu đa dạng kỹ năng và kinh nghiệm trong các lĩnh vực công nghệ hiện đại",
  },
  cta: {
    title: {
      en: "Do you have a project that needs support?",
      vi: "Bạn có dự án cần hỗ trợ?",
    },
    description: {
      en: "Let us help you turn your ideas into reality",
      vi: "Hãy để chúng tôi giúp bạn biến ý tưởng thành hiện thực",
    },
    buttons: [
      {
        text: {
          en: "View Portfolio",
          vi: "Xem Portfolio",
        },
        variant: "primary",
      },
      {
        text: {
          en: "Contact Now",
          vi: "Liên hệ ngay",
        },
        variant: "secondary",
      },
    ],
  },
}
