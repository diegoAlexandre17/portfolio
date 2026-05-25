export const NAV_LINKS = [
  { href: "#about", label: "Sobre mí" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Proyectos" },
  { href: "#process", label: "Proceso" },
  { href: "#contact", label: "Contacto" },
];

export const SKILLS = [
  { name: "React", icon: "devicon-react-original colored" },
  { name: "TypeScript", icon: "devicon-typescript-original colored" },
  { name: "Node.js", icon: "devicon-nodejs-plain colored" },
  { name: "Bootstrap", icon: "devicon-bootstrap-plain colored" },
  { name: "Material UI", icon: "devicon-materialui-plain colored" },
  { name: "Tailwind", icon: "devicon-tailwindcss-plain colored" },
  { name: "Axios", icon: "devicon-axios-plain colored" },
  { name: "Zustand", icon: "devicon-zustand-plain" },
  { name: "Redux Toolkit", icon: "devicon-redux-plain colored" },
  { name: "Supabase", icon: "devicon-supabase-plain colored" },
  { name: "Git", icon: "devicon-git-plain colored" },
  { name: "GitHub", icon: "devicon-github-original colored" },
  { name: "Figma", icon: "devicon-figma-plain" },
];

export const PROJECTS = [
  {
    title: "E-Commerce Platform",
    desc: "Plataforma de comercio electrónico full-stack con Next.js, Stripe y PostgreSQL. Dashboard de administración con métricas en tiempo real y gestión de inventario.",
    tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
  },
  {
    title: "Dashboard Analytics",
    desc: "Visualización de datos interactiva con gráficas personalizadas, filtros dinámicos y exportación a múltiples formatos. Integración con APIs externas en tiempo real.",
    tags: ["React", "D3.js", "GraphQL", "AWS"],
  },
  {
    title: "SaaS de Gestión",
    desc: "Aplicación multi-tenant para equipos remotos con chat en tiempo real, tablero kanban, videoconferencias integradas y permisos granulares por rol.",
    tags: ["React", "Node.js", "Socket.io", "Docker"],
  },
  {
    title: "App Móvil Fintech",
    desc: "Aplicación de finanzas personales con integración bancaria abierta, IA para categorización automática de gastos y metas de ahorro inteligentes.",
    tags: ["React Native", "TypeScript", "Node.js", "AI"],
  },
];

export const PROCESS_STEPS = [
  {
    number: "01",
    title: "Descubrimiento",
    desc: "Analizo tus objetivos, usuarios y requisitos técnicos para construir una visión clara y realista del proyecto.",
  },
  {
    number: "02",
    title: "Diseño & Arquitectura",
    desc: "Wireframes, prototipos en Figma y arquitectura de código pensados para escalar y ser mantenibles a largo plazo.",
  },
  {
    number: "03",
    title: "Desarrollo",
    desc: "Código limpio, componentes reutilizables y pruebas automatizadas entregadas en sprints iterativos.",
  },
  {
    number: "04",
    title: "Lanzamiento",
    desc: "CI/CD, monitoreo de rendimiento y soporte post-lanzamiento para garantizar el éxito en producción.",
  },
];
