// -----------------------------------------------------------------------------
// TECH STACK — Categorized
// -----------------------------------------------------------------------------

export interface StackItem {
  name: string;
  icon: string; // react-icons import name
  color: string;
  proficiency: "Expert" | "Advanced" | "Proficient";
}

export interface StackCategory {
  id: string;
  label: string;
  emoji: string;
  items: StackItem[];
}

export const techStack: StackCategory[] = [
  {
    id: "frontend",
    label: "Frontend",
    emoji: "🎨",
    items: [
      { name: "Next.js", icon: "SiNextdotjs", color: "#000000", proficiency: "Expert" },
      { name: "React", icon: "SiReact", color: "#61DAFB", proficiency: "Expert" },
      { name: "TypeScript", icon: "SiTypescript", color: "#3178C6", proficiency: "Expert" },
      { name: "Tailwind CSS", icon: "SiTailwindcss", color: "#06B6D4", proficiency: "Expert" },
      { name: "Framer Motion", icon: "SiFramer", color: "#0055FF", proficiency: "Advanced" },
      { name: "JavaScript", icon: "SiJavascript", color: "#F7DF1E", proficiency: "Expert" },
      { name: "HTML5", icon: "SiHtml5", color: "#E34F26", proficiency: "Expert" },
      { name: "CSS3", icon: "SiCss3", color: "#1572B6", proficiency: "Expert" },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    emoji: "⚙️",
    items: [
      { name: "Node.js", icon: "SiNodedotjs", color: "#339933", proficiency: "Expert" },
      { name: "Go", icon: "SiGo", color: "#00ADD8", proficiency: "Advanced" },
      { name: "Express.js", icon: "SiExpress", color: "#000000", proficiency: "Expert" },
      { name: "gRPC", icon: "SiGrpc", color: "#244C5A", proficiency: "Advanced" },
      { name: "REST APIs", icon: "SiOpenapiinitiative", color: "#6BA539", proficiency: "Expert" },
      { name: "GraphQL", icon: "SiGraphql", color: "#E10098", proficiency: "Proficient" },
      { name: "Prisma", icon: "SiPrisma", color: "#2D3748", proficiency: "Advanced" },
      { name: "Python", icon: "SiPython", color: "#3572A5", proficiency: "Advanced" },
    ],
  },
  {
    id: "databases",
    label: "Databases",
    emoji: "🗄️",
    items: [
      { name: "PostgreSQL", icon: "SiPostgresql", color: "#336791", proficiency: "Expert" },
      { name: "MongoDB", icon: "SiMongodb", color: "#47A248", proficiency: "Expert" },
      { name: "Redis", icon: "SiRedis", color: "#DC382D", proficiency: "Advanced" },
      { name: "MySQL", icon: "SiMysql", color: "#4479A1", proficiency: "Advanced" },
      { name: "Pinecone", icon: "SiPinecone", color: "#00D4AA", proficiency: "Advanced" },
      { name: "Supabase", icon: "SiSupabase", color: "#3ECF8E", proficiency: "Proficient" },
    ],
  },
  {
    id: "devops",
    label: "DevOps",
    emoji: "🛠️",
    items: [
      { name: "Docker", icon: "SiDocker", color: "#2496ED", proficiency: "Advanced" },
      { name: "GitHub Actions", icon: "SiGithubactions", color: "#2088FF", proficiency: "Advanced" },
      { name: "Vercel", icon: "SiVercel", color: "#000000", proficiency: "Expert" },
      { name: "AWS", icon: "SiAmazon", color: "#FF9900", proficiency: "Proficient" },
      { name: "Nginx", icon: "SiNginx", color: "#009639", proficiency: "Advanced" },
      { name: "Linux", icon: "SiLinux", color: "#FCC624", proficiency: "Advanced" },
      { name: "Git", icon: "SiGit", color: "#F05032", proficiency: "Expert" },
    ],
  },
  {
    id: "ai",
    label: "AI & ML",
    emoji: "🧠",
    items: [
      { name: "OpenAI GPT-4", icon: "SiOpenai", color: "#412991", proficiency: "Advanced" },
      { name: "LangChain", icon: "SiLangchain", color: "#1C3C3C", proficiency: "Advanced" },
      { name: "Hugging Face", icon: "SiHuggingface", color: "#FFD21E", proficiency: "Proficient" },
      { name: "Pinecone", icon: "SiPinecone", color: "#00D4AA", proficiency: "Advanced" },
      { name: "Claude (Anthropic)", icon: "SiAnthropic", color: "#D4702A", proficiency: "Proficient" },
      { name: "Ollama", icon: "SiOllama", color: "#000000", proficiency: "Proficient" },
    ],
  },
];

export const proficiencyColor = {
  Expert: "#10B981",
  Advanced: "#3B82F6",
  Proficient: "#8B5CF6",
} as const;
