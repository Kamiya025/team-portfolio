import type { FooterLink, SocialLink, FooterContent } from "@/models"

export const footerLinks: Record<string, FooterLink[]> = {
  company: [
    { name: "Về chúng tôi", href: "#about" },
    { name: "Đội ngũ", href: "#team" },
    { name: "Tin tức", href: "#news" },
    { name: "Tuyển dụng", href: "#careers" },
  ],
  services: [
    { name: "Phát triển Web", href: "#web-dev" },
    { name: "Ứng dụng Mobile", href: "#mobile-dev" },
    { name: "UI/UX Design", href: "#design" },
    { name: "Tư vấn IT", href: "#consulting" },
  ],
  support: [
    { name: "Trung tâm hỗ trợ", href: "#support" },
    { name: "Tài liệu", href: "#docs" },
    { name: "API Reference", href: "#api" },
    { name: "Status", href: "#status" },
  ],
  legal: [
    { name: "Chính sách bảo mật", href: "#privacy" },
    { name: "Điều khoản sử dụng", href: "#terms" },
    { name: "Cookie Policy", href: "#cookies" },
    { name: "GDPR", href: "#gdpr" },
  ],
}

export const socialLinks: SocialLink[] = [
  {
    name: "Facebook",
    href: "#",
    icon: "facebook",
  },
  {
    name: "Twitter",
    href: "#",
    icon: "twitter",
  },
  {
    name: "LinkedIn",
    href: "#",
    icon: "linkedin",
  },
  {
    name: "GitHub",
    href: "#",
    icon: "github",
  },
]

export const footerContent: FooterContent = {
  companyName: "TeamPortfolio",
  description:
    "Chúng tôi là đội ngũ chuyên gia công nghệ với nhiều năm kinh nghiệm, cam kết mang đến những giải pháp công nghệ tối ưu cho doanh nghiệp.",
  copyright: "Tất cả quyền được bảo lưu.",
}
