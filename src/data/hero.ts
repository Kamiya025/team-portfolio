import type { Team, HeroStat } from "@/models"

export const TEAM_PHOTO = "/hero-background.jpg"

export const listTeams: Team[] = [
  {
    name: "Frontend",
    slogan:
      "Chuyên gia tạo ra những giao diện đẹp mắt, trải nghiệm người dùng mượt mà và responsive trên mọi thiết bị, từ desktop đến mobile",
  },
  {
    name: "Backend",
    slogan:
      "Xây dựng nền tảng vững chắc với kiến trúc scalable, API mạnh mẽ, database tối ưu và bảo mật cao cho hệ thống doanh nghiệp",
  },
  {
    name: "Mobile App",
    slogan:
      "Phát triển ứng dụng di động đa nền tảng với hiệu suất cao, giao diện thân thiện và tích hợp đầy đủ tính năng native",
  },
  {
    name: "Full-stack",
    slogan:
      "Cung cấp giải pháp toàn diện từ frontend đến backend, từ thiết kế UI/UX đến triển khai production và bảo trì hệ thống",
  },
  {
    name: "DevOps",
    slogan:
      "Tự động hóa quy trình CI/CD, tối ưu hóa infrastructure, monitoring 24/7 và đảm bảo hệ thống luôn hoạt động ổn định với hiệu suất cao",
  },
]

export const heroStats: HeroStat[] = [
  {
    value: "+30",
    label: "Dự án triển khai",
    path: "/#projects",
  },
  {
    value: "10+",
    label: "Thành viên cốt lõi",
    path: "/#team",
  },
  {
    value: "24/7",
    label: "Hỗ trợ & vận hành",
    path: "/#support",
  },
]
