import type { Team, HeroStat } from '@/models'

export const TEAM_PHOTO = '/hero-background.jpg'

export const listTeams: Team[] = [
  {
    name: 'Frontend',
    slogan: {
      en: 'Experts in creating beautiful interfaces, smooth user experiences and responsive design across all devices, from desktop to mobile',
      vi: 'Chuyên gia tạo ra những giao diện đẹp mắt, trải nghiệm người dùng mượt mà và responsive trên mọi thiết bị, từ desktop đến mobile',
    },
  },
  {
    name: 'Backend',
    slogan: {
      en: 'Building solid foundations with scalable architecture, powerful APIs, optimized databases and high security for enterprise systems',
      vi: 'Xây dựng nền tảng vững chắc với kiến trúc scalable, API mạnh mẽ, database tối ưu và bảo mật cao cho hệ thống doanh nghiệp',
    },
  },
  {
    name: 'Mobile App',
    slogan: {
      en: 'Developing cross-platform mobile applications with high performance, user-friendly interfaces and full native feature integration',
      vi: 'Phát triển ứng dụng di động đa nền tảng với hiệu suất cao, giao diện thân thiện và tích hợp đầy đủ tính năng native',
    },
  },
  {
    name: 'Full-stack',
    slogan: {
      en: 'Providing comprehensive solutions from frontend to backend, from UI/UX design to production deployment and system maintenance',
      vi: 'Cung cấp giải pháp toàn diện từ frontend đến backend, từ thiết kế UI/UX đến triển khai production và bảo trì hệ thống',
    },
  },
  {
    name: 'DevOps',
    slogan: {
      en: 'Automating CI/CD processes, optimizing infrastructure, 24/7 monitoring and ensuring systems always run stably with high performance',
      vi: 'Tự động hóa quy trình CI/CD, tối ưu hóa infrastructure, monitoring 24/7 và đảm bảo hệ thống luôn hoạt động ổn định với hiệu suất cao',
    },
  },
  {
    name: 'UI/UX',
    slogan: {
      en: 'Designing intuitive, user-centered interfaces and seamless experiences that delight users and drive business goals',
      vi: 'Thiết kế giao diện trực quan, lấy người dùng làm trung tâm và trải nghiệm liền mạch, tạo ấn tượng và thúc đẩy mục tiêu kinh doanh',
    },
  },
  {
    name: 'Business Analyst',
    slogan: {
      en: 'Bridging business needs and technology by analyzing requirements, optimizing processes, and ensuring project success',
      vi: 'Kết nối nhu cầu kinh doanh và công nghệ thông qua phân tích yêu cầu, tối ưu quy trình và đảm bảo thành công dự án',
    },
  },
]

export const heroStats: HeroStat[] = [
  {
    value: '+30',

    label: {
      en: 'Projects Deployed',
      vi: 'Dự án triển khai',
    },
    path: '/#projects',
  },
  {
    value: '10+',
    label: {
      en: 'Core Members',
      vi: 'Thành viên cốt lõi',
    },
    path: '/#team',
  },
  {
    value: '24/7',
    label: {
      en: 'Support & Operations',
      vi: 'Hỗ trợ & vận hành',
    },
    path: '/#support',
  },
]
