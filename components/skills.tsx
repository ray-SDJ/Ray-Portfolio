"use client";

import { motion } from "framer-motion";

export function Skills() {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-4 mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-balance">
            Technical Proficiencies
          </h2>
          <div className="h-1 w-20 bg-primary rounded-full" />
        </div>

        <div className="md:grid-cols-2 grid grid-cols-1 gap-12">
          <div>
            <p className="text-2xl font-bold mb-8 text-primary">Development</p>
            <div className="space-y-6">
              {[
                { name: "React/Next.js", level: 95 },
                { name: "JavaScript/TypeScript", level: 90 },
                { name: "Python-Flask-Django", level: 100 },
                { name: "Java", level: 60 },
                { name: "SQL/PostgreSQL", level: 100 },
              ].map((skill, i) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-foreground font-medium">
                      {skill.name}
                    </span>
                    <span className="text-muted-foreground text-sm">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-primary transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <p className="text-2xl font-bold mb-8 mt-12 text-primary">
              Security & Testing
            </p>
            <div className="space-y-6">
              {[
                { name: "Penetration Testing & Kali Linux", level: 95 },
                { name: "Security Architecture", level: 90 },
                { name: "Risk Management", level: 90 },
                { name: "Security Compliance", level: 85 },
                { name: "SIEM/IDS/IPS", level: 85 },
              ].map((skill, i) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-foreground font-medium">
                      {skill.name}
                    </span>
                    <span className="text-muted-foreground text-sm">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-primary transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-2xl font-bold mb-8 text-primary">
              Tools & Technologies
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                "Kali Linux",
                "Active Directory",
                "Burp Suite",
                "Metasploit",
                "Wireshark",
                "Nmap",
                "OWASP ZAP",
                "Git/GitHub",
                "Vulnerability Scanning",
                "Web Application Security",
              ].map((tool) => (
                <div
                  key={tool}
                  className="bg-card rounded-lg text-center p-4 border border-border hover:shadow-lg transition-shadow"
                >
                  <p className="text-sm font-medium text-foreground">{tool}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
