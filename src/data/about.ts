import type { Value, Technology, AboutContent } from "@/models"

export const values: Value[] = [
  {
    icon: "lightning",
    title: {
      en: "Speed & Performance",
      vi: "Tốc độ & Hiệu suất",
    },
    description: {
      en: "We always optimize code and processes to ensure products run fast and smoothly.",
      vi: "Chúng tôi luôn tối ưu hóa code và quy trình để đảm bảo sản phẩm hoạt động nhanh và mượt mà.",
    },
  },
  {
    icon: "shield",
    title: {
      en: "High Quality",
      vi: "Chất lượng cao",
    },
    description: {
      en: "Every line of code is carefully reviewed and thoroughly tested before deployment.",
      vi: "Mọi dòng code đều được review kỹ lưỡng và test toàn diện trước khi deploy.",
    },
  },
  {
    icon: "team",
    title: {
      en: "Teamwork",
      vi: "Làm việc nhóm",
    },
    description: {
      en: "Collaboration and mutual support are the foundation of every successful project.",
      vi: "Tinh thần hợp tác và hỗ trợ lẫn nhau là nền tảng của mọi dự án thành công.",
    },
  },
  {
    icon: "lightbulb",
    title: {
      en: "Innovation",
      vi: "Sáng tạo",
    },
    description: {
      en: "Always seeking new solutions and creative approaches to every problem.",
      vi: "Luôn tìm kiếm những giải pháp mới và cách tiếp cận sáng tạo cho mọi vấn đề.",
    },
  },
]

export const technologies: Technology[] = [
  { name: "React", level: 95 },
  { name: "Node.js", level: 90 },
  { name: "TypeScript", level: 88 },
  { name: "Python", level: 85 },
  { name: "AWS", level: 80 },
  { name: "Docker", level: 75 },
]

export const aboutContent: AboutContent = {
  title: {
    en: "About Us",
    vi: "Về chúng tôi",
  },
  description: {
    en: "We are a young, dynamic and passionate team of developers with technology, always ready to take on new challenges.",
    vi: "Chúng tôi là một đội ngũ developers trẻ trung, năng động và đầy đam mê với công nghệ, luôn sẵn sàng đón nhận những thử thách mới.",
  },
  story: {
    title: {
      en: "Our Story",
      vi: "Câu chuyện của chúng tôi",
    },
    paragraphs: [
      {
        en: "Founded in 2019, we started with 3 members who share a passion for technology and a desire to create meaningful products.",
        vi: "Được thành lập vào năm 2019, chúng tôi bắt đầu với 3 thành viên có chung đam mê về công nghệ và mong muốn tạo ra những sản phẩm có ý nghĩa.",
      },
      {
        en: "From our first small projects, we have continuously learned, developed and expanded our team. Currently, we are proud to have 8 talented members, each of whom is an expert in their field.",
        vi: "Từ những dự án nhỏ đầu tiên, chúng tôi đã không ngừng học hỏi, phát triển và mở rộng đội ngũ. Hiện tại, chúng tôi tự hào có 8 thành viên tài năng, mỗi người đều là chuyên gia trong lĩnh vực của mình.",
      },
      {
        en: "We believe that technology can change the world, and we want to be part of that change.",
        vi: "Chúng tôi tin rằng công nghệ có thể thay đổi thế giới, và chúng tôi muốn là một phần của sự thay đổi đó.",
      },
    ],
  },
  mission: {
    title: {
      en: "Our Mission",
      vi: "Sứ mệnh của chúng tôi",
    },
    description: {
      en: "To create high-quality technology products that meet the real needs of users and contribute to the development of the Vietnamese tech community.",
      vi: "Tạo ra những sản phẩm công nghệ chất lượng cao, đáp ứng nhu cầu thực tế của người dùng và góp phần phát triển cộng đồng tech Việt Nam.",
    },
    points: [
      {
        en: "Continuous innovation",
        vi: "Đổi mới sáng tạo không ngừng",
      },
      {
        en: "Quality is the top priority",
        vi: "Chất lượng là ưu tiên hàng đầu",
      },
      {
        en: "Continuous learning and development",
        vi: "Học hỏi và phát triển liên tục",
      },
    ],
  },
}
