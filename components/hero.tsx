import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-balance leading-tight">
                Full-Stack Engineer & Penetration Tester
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                OSCP Candidate and Full Stack Engineer specializing in
                application security, vulnerability assessment, and ethical
                hacking. Passionate about making website dreams come true while
                combining development expertise with offensive security to
                strengthen organizational defenses.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gap-2" asChild>
                <a
                  href="https://www.upwork.com/freelancers/~01e5a9d4ae6c5c438d?mp_source=share"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Hire Me
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a
                  href="https://github.com/ray-SDJ"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Work
                </a>
              </Button>
            </div>

            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/ray-SDJ"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/rayner-soto-de-jesus-baa6b6215"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="mailto:raynersoto0908@outlook.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-sm border border-border overflow-hidden">
              <img
                src="/profile-pic.jpg"
                alt="Rayner Soto - Full Stack Developer and Cybersecurity Specialist"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
