export function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold text-balance">
              About Me
            </h2>
            <div className="h-1 w-20 bg-primary rounded-full" />
          </div>

          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Full Stack Developer and Penetration Tester with strong
              foundations in both software development and cybersecurity,
              actively pursuing the Offensive Security Certified Professional
              (OSCP) certification. Recently earned CompTIA Security+ and Google
              Cybersecurity certifications, along with Codecademy certificates
              in Full-Stack Development and Computer Science.
            </p>
            <p>
              Passionate about offensive security, vulnerability detection, and
              ethical hacking, with hands-on experience in penetration testing
              tools, vulnerability scanning, and secure authentication. Equally
              passionate about full stack development, creating secure web
              applications that bridge the gap between robust functionality and
              cybersecurity best practices.
            </p>
            <p>
              Based in Bergen County, New Jersey, I combine my expertise in
              modern web technologies like React, Next.js, Python, and
              PostgreSQL with security tools like Kali Linux, Burp Suite, and
              Metasploit. Whether building scalable applications or conducting
              security assessments, I focus on creating solutions that are both
              powerful and secure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-8">
            <div className="p-4 bg-card rounded-lg border border-border">
              <p className="text-sm font-bold text-primary mb-1">NAME</p>
              <p className="text-foreground">Rayner Soto</p>
            </div>
            <div className="p-4 bg-card rounded-lg border border-border">
              <p className="text-sm font-bold text-primary mb-1">EMAIL</p>
              <p className="text-foreground">raynersoto0908@outlook.com</p>
            </div>
            <div className="p-4 bg-card rounded-lg border border-border">
              <p className="text-sm font-bold text-primary mb-1">LOCATION</p>
              <p className="text-foreground">Bergen County, NJ</p>
            </div>
            <div className="p-4 bg-card rounded-lg border border-border">
              <p className="text-sm font-bold text-primary mb-1">
                AVAILABILITY
              </p>
              <p className="text-foreground">Open to opportunities</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
