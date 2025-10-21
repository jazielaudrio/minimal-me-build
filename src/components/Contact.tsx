import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com" },
    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
    { icon: Twitter, label: "Twitter", href: "https://twitter.com" },
    { icon: Mail, label: "Email", href: "mailto:your.email@example.com" },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 relative bg-[var(--gradient-subtle)]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          
          <p className="text-lg text-muted-foreground mb-12">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          
          <div className="glass-card p-8 md:p-12 hover-glow">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Button
                    key={social.label}
                    variant="outline"
                    size="lg"
                    className="border-primary/50 hover:border-primary hover:bg-primary/10"
                    asChild
                  >
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Icon className="w-5 h-5" />
                      {social.label}
                    </a>
                  </Button>
                );
              })}
            </div>
            
            <div className="pt-8 border-t border-border">
              <p className="text-muted-foreground mb-4">Or send me an email directly:</p>
              <a
                href="mailto:your.email@example.com"
                className="text-2xl font-semibold text-gradient hover:opacity-80 transition-opacity"
              >
                your.email@example.com
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <footer className="mt-20 text-center text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </footer>
    </section>
  );
};

export default Contact;
