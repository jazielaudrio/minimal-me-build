const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            About <span className="text-gradient">Me</span>
          </h2>
          
          <div className="glass-card p-8 md:p-12 hover-glow">
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              I'm a dedicated full-stack developer with a passion for creating elegant solutions to complex problems. 
              With expertise in modern web technologies, I transform ideas into engaging digital experiences.
            </p>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              My journey in web development has equipped me with a diverse skill set, allowing me to handle 
              everything from responsive front-end interfaces to robust back-end systems.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-gradient mb-2">5+</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gradient mb-2">50+</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gradient mb-2">30+</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
