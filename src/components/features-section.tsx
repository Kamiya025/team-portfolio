"use client"

import { Icon } from "./icon"

type Skill = {
  icon: string
  title: string
  description: string
}
export function FeaturesSection() {
  const skills: Skill[] = [
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

  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-br from-background to-muted/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Kỹ năng & Công nghệ
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Chúng tôi sở hữu đa dạng kỹ năng và kinh nghiệm trong các lĩnh vực
            công nghệ hiện đại
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-28 py-24">
          {skills.map((skill, index) => (
            <SkillItem key={index} skill={skill} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-palette-soft rounded-2xl p-8 liquid-glass">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Bạn có dự án cần hỗ trợ?
            </h3>
            <p className="text-muted-foreground mb-6">
              Hãy để chúng tôi giúp bạn biến ý tưởng thành hiện thực
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="glass-button px-8 py-3 rounded-full font-semibold transition-all duration-300 hover-lift">
                Xem Portfolio
              </button>
              <button className="glass-button px-8 py-3 rounded-full font-semibold transition-all duration-300 hover-lift">
                Liên hệ ngay
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
const SkillItem = ({ skill }: { skill: Skill }) => {
  return (
    <div className="relative group hover:rotate-3 odd:hover:-rotate-3">
      <div
        className="absolute -top-10 mx-auto right-0 left-0 z-20
          flex items-center justify-center w-32 aspect-square 
          rounded-full bg-gradient-palette 
          group-hover:scale-125 group-hover:animate-pulse"
      >
        <Icon name={skill.icon} className="size-20 text-white" />
      </div>
      <div
        className="relative group px-8 pb-12 rounded-4xl
        transition-all duration-300 liquid-glass animate-fade-in-up"
      >
        <div className="pt-36">
          <h3 className="text-xl font-semibold text-card-foreground mb-4">
            {skill.title}
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            {skill.description}
          </p>
        </div>
      </div>
    </div>
  )
}
