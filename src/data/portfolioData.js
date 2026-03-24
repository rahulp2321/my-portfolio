// ============================================================
//  PORTFOLIO DATA — Edit this file to update your portfolio
// ============================================================

export const personal = {
  name: "Rahul Patil",
  title: "DevOps Engineer",
  tagline: " CI/CD | Kubernetes |",
  description:
    "I help organizations streamline build, release, and deployment pipelines by implementing scalable DevOps practices, Docker-based container strategies, and Kubernetes orchestration..",
  location: "Kolhapur, Maharashtra, India",
  email: "rahul.patil@gmail.com",
  phone: "+91 8796685268",
  linkedin: "https://www.linkedin.com/in/rahul-patil-b782332a8",
  github: "https://github.com/rahulp2321",
  resume: "/resume-rahul-patil.pdf",
  available: true,
  yearsExperience: 10,
  projectsDelivered: 60,
  certifications: 0,
};

export const skills = [
  {
    icon: "☁️",
    title: "Cloud Platforms",
    tags: ["AWS", "GCP", "Azure"],
  },
  {
    icon: "🐳",
    title: "Containers & Orchestration",
    tags: ["Docker", "Kubernetes","Containerd", "Docker Compose"],
  },
  {
    icon: "⚙️",
    title: "CI/CD & Automation",
    tags: ["Jenkins", "GitLab CI", "Azure DevOps", "GitHub"],
  },
  {
    icon: "💻",
    title: "Scripting & Languages",
    tags: ["Bash", "Groovy", "PowerShell"],
  },
  {
    icon: "🗄️",
    title: "Databases & Messaging",
    tags: ["PostgreSQL", "Redis", "Kafka", "SQL"],
  },
];

export const experience = [
  {
    role: "Senior DevOps Engineer",
    company: "Manorama infosolution PVT. LTD",
    period: "Jan 2016 – Present",
    description:
      "Lead cloud infrastructure for a fintech platform serving 2M+ users. Architected multi-region AWS setup with 99.99% uptime. Reduced deployment time from 45 mins to under 8 mins by rewriting Jenkins pipelines and adopting GitOps with ArgoCD.",
    tech: ["AWS", "Kubernetes", "ArgoCD", "Terraform", "Prometheus", "GitHub Actions"],
  },
  {
    role: "Junior DevOps / Infra Engineer",
    company: "StartupHub India",
    period: "Aug 2020 – May 2021",
    description:
      "Maintained AWS infrastructure for 3 SaaS products. Set up CI/CD pipelines from scratch using Jenkins. Automated nightly backups and disaster recovery runbooks.",
    tech: ["AWS EC2", "Jenkins", "Bash", "Python", "Nginx", "MySQL"],
  },
];

export const projects = [
  {
    icon: "🚀",
    title: "Deploying a Web Project with Kubernetes Manifests",
    description:
      "Detailed steps for deploying a .Net core web application using Kubernetes YAML manifests.",
    stack: ["Jenkins", "Azure Devops", "Gitlab"],
    github: "",
    demo: null,
  },
  {
    icon: "📊",
    title: "Implementing a CICD Workflow with Jenkins and Azure DevOps",
    description:
      "Demonstration of CICD pipeline using Jenkins and Azure DevOps for automated testing, Docker builds and Deployment at client server.",
    stack: ["Jenkins", "Azure Devop", "Kubernetes"],
    github: "",
    demo: "",
  },
  {
    icon: "🔒",
    title: "Deploying a React Project host it on Vercel",
    description:
      "Demonstration of CICD pipeline using Vercel for automated builds and Deployment.",
    stack: ["Jenkins", "Azure Devop"],
    github: "",
    demo: null,
  },
];

export const certifications = [

];
