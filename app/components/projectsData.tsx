interface Project {
  id: string;
  title: string;
  description: string;
  images: {
    src: string;
    alt: string;
  }[];
  tags: string[];
  githubLink: string;
  fullDescription: string;
  category: "security" | "development";
  liveLink?: string;
}

interface ProjectsData {
  security: Project[];
  engineering: Project[];
}

export const allProjects: ProjectsData = {
  security: [
    {
      id: "offensive-security-journey",
      title: "Offensive Security Training & Certification Path",
      description:
        "Currently pursuing OSCP certification while actively participating in HackTheBox and OffSec platforms to enhance penetration testing skills.",
      images: [
        {
          src: "/linkedin_thumb_image.png",
          alt: "OSCP certification progress tracking",
        },
      ],
      tags: [
        "OSCP",
        "HackTheBox",
        "OffSec",
        "Penetration Testing",
        "CTF",
        "Active Directory",
        "Network Exploitation",
      ],
      githubLink: "https://github.com/yourusername/ctf-writeups",
      fullDescription: `
        Currently immersed in intensive offensive security training:
        • Working towards OSCP certification with focus on hands-on penetration testing
        • Active participation in HackTheBox challenges, solving both active and retired machines
        • Developing custom exploitation scripts and maintaining detailed documentation
        • Practicing privilege escalation techniques in Windows and Linux environments
        • Strengthening skills in Active Directory exploitation and lateral movement
        • Building comprehensive methodology for network penetration testing
      `,
      category: "security",
    },
    {
      id: "lane-trucking",
      title: "Lane Trucking Corp Security Infrastructure",
      description:
        "Led implementation of enterprise-wide security infrastructure including ELK Stack SIEM, advanced threat protection, and network segmentation strategy.",
      images: [
        {
          src: "https://placehold.co/600x400/252525/E0E0E0?text=Lane+Trucking+1",
          alt: "Network security infrastructure diagram",
        },
        {
          src: "https://placehold.co/600x400/252525/E0E0E0?text=Lane+Trucking+2",
          alt: "Security monitoring dashboard",
        },
        {
          src: "https://placehold.co/600x400/252525/E0E0E0?text=Lane+Trucking+3",
          alt: "Network topology diagram",
        },
      ],
      tags: ["SIEM", "Network Security", "Penetration Testing"],
      githubLink: "https://github.com/yourusername/project",
      fullDescription:
        "Led implementation of enterprise-wide security infrastructure including ELK Stack SIEM, advanced threat protection, and network segmentation strategy. Implemented comprehensive monitoring solutions and established security protocols across the organization.",
      category: "security",
    },
  ],
  engineering: [
    {
      id: "tongue-diagnosis-ai",
      title: "Tongue Diagnosis AI",
      description:
        "AI-powered web application for traditional Chinese medicine diagnosis through tongue image analysis, utilizing deep learning and computer vision.",
      images: [
        {
          src: "/side-view-examination-with-peak-flow-metre.jpg",
          alt: "AI-powered tongue diagnosis application interface",
        },
      ],
      tags: ["Python", "TensorFlow", "Flask"],
      githubLink: "https://github.com/ray-SDJ/tongue-diagnosis",
      fullDescription:
        "AI-powered web application for traditional Chinese medicine diagnosis through tongue image analysis, utilizing deep learning and computer vision. Integrated machine learning models for accurate diagnosis.",
      category: "development",
    },
    {
      id: "Universum Industries, INC",
      title: "Company Website",
      description:
        "Company website for Universum Industries, INC, showcasing their services and products.",
      images: [
        {
          src: "/uii1.PNG",
          alt: "UII",
        },
        {
          src: "/uii2.PNG",
          alt: "UII",
        },
      ],
      tags: ["Next.js", "Tailwind CSS", "TypeScript"],
      githubLink: "https://github.com/ray-SDJ",
      fullDescription:
        "Company website for Universum Industries, INC, showcasing their services and products.",
      category: "development",
    },
    {
      id: "Serenity",
      title: "Same Serenity",
      description:
        "website for Same Serenity, a company specializing in wellness and relaxation products.",
      images: [
        {
          src: "/sc1.PNG",
          alt: "Serenity Website Screenshot 1",
        },
        {
          src: "/sc2.PNG",
          alt: "Serenity Website Screenshot 2",
        },
        {
          src: "/sc3.PNG",
          alt: "Serenity Website Screenshot 3",
        },
      ],
      tags: ["Next.js", "Tailwind CSS", "TypeScript", "Sanity.io"],
      githubLink: "https://github.com/ray-SDJ/tongue-diagnosis",
      fullDescription:
        "website for Same Serenity, a company specializing in wellness and relaxation products. A website where the client and cost plogs, articles and services are posted. As well as social Media",
      category: "development",
    },
    {
      id: "Quiz Helper",
      title: "Quiz Helper",
      description:
        "Widget to help students with their quizzes, using AI to generate answers based on the questions provided.",
      images: [
        {
          src: "/question-mark-sign-led-light-illustration.jpg",
          alt: "AI-powered tongue diagnosis application interface",
        },
      ],
      tags: ["Python", "ttkinter", "GROK API"],
      githubLink: "https://github.com/ray-SDJ/tongue-diagnosis",
      fullDescription:
        "a widget to help students with their quizzes, using AI to generate answers based on the questions provided. The application uses the GROK API to generate answers based on the questions provided by the user.",
      category: "development",
    },
    {
      id: "Dungeons & Dragons Campaign",
      title: "Dungeons & Dragons Campaign",
      description:
        "A web application for managing a Dungeons & Dragons campaign",
      images: [
        {
          src: "/woman-with-dragon-fantasy-scene.jpg",
          alt: "D&D Campaign Scene",
        },
      ],
      tags: ["Next.js", "Tailwind CSS", "TypeScript", "Google Gemini"],
      githubLink: "https://github.com/ray-SDJ/MyDDCampaigns",
      fullDescription:
        "A web application for managing a Dungeons & Dragons campaign, with the power of Google Gemini, this application can help Dungeon Masters create campaigns and create character images.",
      category: "development",
    },
  ],
};

export type { Project, ProjectsData };
