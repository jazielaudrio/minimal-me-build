import { Code2, Database, Layout, Server, Smartphone, Zap } from "lucide-react";

const Skills = () => {
  const skills = [
    {
      icon: Code2,
      title: "Frontend Development",
      description: "React, TypeScript, Tailwind CSS, Next.js",
    },
    {
      icon: Server,
      title: "Backend Development",
      description: "Node.js, Express, REST APIs, GraphQL",
    },
    {
      icon: Database,
      title: "Database Management",
      description: "PostgreSQL, MongoDB, Redis, Supabase",
    },
    {
      icon: Layout,
      title: "UI/UX Design",
      description: "Figma, Responsive Design, User Experience",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "React Native, Progressive Web Apps",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "SEO, Core Web Vitals, Lighthouse",
    },
  ];

  return (
    <section id="skills" className="py-20 md:py-32 relative bg-[var(--gradient-subtle)]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-gradient">Skills</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.title}
                className="glass-card p-6 hover-glow transition-all duration-300 hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                <p className="text-muted-foreground">{skill.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
