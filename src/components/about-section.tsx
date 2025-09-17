"use client"

const technologies = [
  { name: "React", level: 95 },
  { name: "Node.js", level: 90 },
  { name: "TypeScript", level: 88 },
  { name: "Python", level: 85 },
  { name: "AWS", level: 80 },
  { name: "Docker", level: 75 },
]
export function AboutSection() {
  const values = [
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      title: "Tốc độ & Hiệu suất",
      description:
        "Chúng tôi luôn tối ưu hóa code và quy trình để đảm bảo sản phẩm hoạt động nhanh và mượt mà.",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      title: "Chất lượng cao",
      description:
        "Mọi dòng code đều được review kỹ lưỡng và test toàn diện trước khi deploy.",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      title: "Làm việc nhóm",
      description:
        "Tinh thần hợp tác và hỗ trợ lẫn nhau là nền tảng của mọi dự án thành công.",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
      title: "Sáng tạo",
      description:
        "Luôn tìm kiếm những giải pháp mới và cách tiếp cận sáng tạo cho mọi vấn đề.",
    },
  ]

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Về chúng tôi
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Chúng tôi là một đội ngũ developers trẻ trung, năng động và đầy đam
            mê với công nghệ, luôn sẵn sàng đón nhận những thử thách mới.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Story */}
          <div className="animate-fade-in-left">
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Câu chuyện của chúng tôi
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Được thành lập vào năm 2019, chúng tôi bắt đầu với 3 thành viên
                có chung đam mê về công nghệ và mong muốn tạo ra những sản phẩm
                có ý nghĩa.
              </p>
              <p>
                Từ những dự án nhỏ đầu tiên, chúng tôi đã không ngừng học hỏi,
                phát triển và mở rộng đội ngũ. Hiện tại, chúng tôi tự hào có 8
                thành viên tài năng, mỗi người đều là chuyên gia trong lĩnh vực
                của mình.
              </p>
              <p>
                Chúng tôi tin rằng công nghệ có thể thay đổi thế giới, và chúng
                tôi muốn là một phần của sự thay đổi đó.
              </p>
            </div>
          </div>

          {/* Mission */}
          <div className="animate-fade-in-right">
            <div className="bg-gradient-palette-soft rounded-2xl p-8 border border-palette-2/20">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Sứ mệnh của chúng tôi
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Tạo ra những sản phẩm công nghệ chất lượng cao, đáp ứng nhu cầu
                thực tế của người dùng và góp phần phát triển cộng đồng tech
                Việt Nam.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-palette-1 rounded-full"></div>
                  <span className="text-foreground">
                    Đổi mới sáng tạo không ngừng
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-palette-1 rounded-full"></div>
                  <span className="text-foreground">
                    Chất lượng là ưu tiên hàng đầu
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-palette-1 rounded-full"></div>
                  <span className="text-foreground">
                    Học hỏi và phát triển liên tục
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-foreground text-center mb-12">
            Giá trị cốt lõi
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-card border border-border hover:border-palette-1/50 transition-all duration-300 hover-lift animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-center w-16 h-16 bg-palette-1/10 text-palette-1 rounded-lg mx-auto mb-4">
                  {value.icon}
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies */}
        <Technologies />
      </div>
    </section>
  )
}
const Technologies = () => {
  return (
    <div>
      <h3 className="text-3xl font-bold text-foreground text-center mb-12">
        Công nghệ chúng tôi sử dụng
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="animate-fade-in-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex justify-between items-center mb-2">
              <span className="text-foreground font-medium">{tech.name}</span>
              <span className="font-semibold text-slate-500 dark:text-slate-50">
                {tech.level}%
              </span>
            </div>
            <div className="w-full bg-muted rounded-full h-3">
              <div
                className="bg-gradient-palette h-3 rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${tech.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
