import type { Value, Technology, AboutContent } from "@/models"

export const values: Value[] = [
  {
    icon: "lightning",
    title: "Tốc độ & Hiệu suất",
    description:
      "Chúng tôi luôn tối ưu hóa code và quy trình để đảm bảo sản phẩm hoạt động nhanh và mượt mà.",
  },
  {
    icon: "shield",
    title: "Chất lượng cao",
    description:
      "Mọi dòng code đều được review kỹ lưỡng và test toàn diện trước khi deploy.",
  },
  {
    icon: "team",
    title: "Làm việc nhóm",
    description:
      "Tinh thần hợp tác và hỗ trợ lẫn nhau là nền tảng của mọi dự án thành công.",
  },
  {
    icon: "lightbulb",
    title: "Sáng tạo",
    description:
      "Luôn tìm kiếm những giải pháp mới và cách tiếp cận sáng tạo cho mọi vấn đề.",
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
  title: "Về chúng tôi",
  description:
    "Chúng tôi là một đội ngũ developers trẻ trung, năng động và đầy đam mê với công nghệ, luôn sẵn sàng đón nhận những thử thách mới.",
  story: {
    title: "Câu chuyện của chúng tôi",
    paragraphs: [
      "Được thành lập vào năm 2019, chúng tôi bắt đầu với 3 thành viên có chung đam mê về công nghệ và mong muốn tạo ra những sản phẩm có ý nghĩa.",
      "Từ những dự án nhỏ đầu tiên, chúng tôi đã không ngừng học hỏi, phát triển và mở rộng đội ngũ. Hiện tại, chúng tôi tự hào có 8 thành viên tài năng, mỗi người đều là chuyên gia trong lĩnh vực của mình.",
      "Chúng tôi tin rằng công nghệ có thể thay đổi thế giới, và chúng tôi muốn là một phần của sự thay đổi đó.",
    ],
  },
  mission: {
    title: "Sứ mệnh của chúng tôi",
    description:
      "Tạo ra những sản phẩm công nghệ chất lượng cao, đáp ứng nhu cầu thực tế của người dùng và góp phần phát triển cộng đồng tech Việt Nam.",
    points: [
      "Đổi mới sáng tạo không ngừng",
      "Chất lượng là ưu tiên hàng đầu",
      "Học hỏi và phát triển liên tục",
    ],
  },
}
