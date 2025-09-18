import type { Team, HeroStat } from "@/models"

export const TEAM_PHOTO = "/hero-background.jpg"

export const listTeams: Team[] = [
  {
    name: {
      en: "Frontend",
      vi: "Frontend",
    },
    slogan: {
      en: "Experts in creating beautiful interfaces, smooth user experiences and responsive design across all devices, from desktop to mobile",
      vi: "Chuyên gia tạo ra những giao diện đẹp mắt, trải nghiệm người dùng mượt mà và responsive trên mọi thiết bị, từ desktop đến mobile",
    },
  },
  {
    name: {
      en: "Backend",
      vi: "Backend",
    },
    slogan: {
      en: "Building solid foundations with scalable architecture, powerful APIs, optimized databases and high security for enterprise systems",
      vi: "Xây dựng nền tảng vững chắc với kiến trúc scalable, API mạnh mẽ, database tối ưu và bảo mật cao cho hệ thống doanh nghiệp",
    },
  },
  {
    name: {
      en: "Mobile App",
      vi: "Mobile App",
    },
    slogan: {
      en: "Developing cross-platform mobile applications with high performance, user-friendly interfaces and full native feature integration",
      vi: "Phát triển ứng dụng di động đa nền tảng với hiệu suất cao, giao diện thân thiện và tích hợp đầy đủ tính năng native",
    },
  },
  {
    name: {
      en: "Full-stack",
      vi: "Full-stack",
    },
    slogan: {
      en: "Providing comprehensive solutions from frontend to backend, from UI/UX design to production deployment and system maintenance",
      vi: "Cung cấp giải pháp toàn diện từ frontend đến backend, từ thiết kế UI/UX đến triển khai production và bảo trì hệ thống",
    },
  },
  {
    name: {
      en: "DevOps",
      vi: "DevOps",
    },
    slogan: {
      en: "Automating CI/CD processes, optimizing infrastructure, 24/7 monitoring and ensuring systems always run stably with high performance",
      vi: "Tự động hóa quy trình CI/CD, tối ưu hóa infrastructure, monitoring 24/7 và đảm bảo hệ thống luôn hoạt động ổn định với hiệu suất cao",
    },
  },
]

export const heroStats: HeroStat[] = [
  {
    value: {
      en: "+30",
      vi: "+30",
    },
    label: {
      en: "Projects Deployed",
      vi: "Dự án triển khai",
    },
    path: "/#projects",
  },
  {
    value: {
      en: "10+",
      vi: "10+",
    },
    label: {
      en: "Core Members",
      vi: "Thành viên cốt lõi",
    },
    path: "/#team",
  },
  {
    value: {
      en: "24/7",
      vi: "24/7",
    },
    label: {
      en: "Support & Operations",
      vi: "Hỗ trợ & vận hành",
    },
    path: "/#support",
  },
]
