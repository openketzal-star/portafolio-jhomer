export const projects = [
  {
    id: 1,
    title: 'Arquitectura de Microservicios con IA',
    description: 'Sistema distribuido para procesamiento de lenguaje natural en tiempo real, escalando a millones de solicitudes diarias con latencia <100ms.',
    technologies: ['Node.js', 'Python', 'Kubernetes', 'Redis', 'Vector DB', 'OpenAI'],
    category: 'architect',
    demoUrl: '#',
    githubUrl: '#',
    featured: true,
    impact: 'Reducción del 70% en costos de infraestructura',
    client: 'FinTech Scale-up',
    year: 2024
  },
  {
    id: 2,
    title: 'Plataforma de Análisis Predictivo',
    description: 'Dashboard empresarial con modelos de ML para predecir tendencias de mercado y optimizar estrategias de marketing con 92% de precisión.',
    technologies: ['React', 'D3.js', 'FastAPI', 'scikit-learn', 'PostgreSQL', 'Docker'],
    category: 'data',
    demoUrl: '#',
    githubUrl: '#',
    featured: true,
    impact: 'Aumento del 35% en tasa de conversión',
    client: 'E-commerce Global',
    year: 2024
  },
  {
    id: 3,
    title: 'Sistema de Recomendación en Tiempo Real',
    description: 'Motor de recomendaciones personalizado procesando 10M+ eventos diarios, integrando aprendizaje por refuerzo para optimización continua.',
    technologies: ['Python', 'Apache Kafka', 'TensorFlow', 'React', 'GraphQL', 'AWS Lambda'],
    category: 'ml',
    demoUrl: '#',
    githubUrl: '#',
    featured: true,
    impact: 'Incremento del 28% en engagement',
    client: 'Streaming Platform',
    year: 2023
  },
  {
    id: 4,
    title: 'Framework de Automatización de Marketing',
    description: 'Herramienta end-to-end para generación automática de campañas, análisis de competencia y optimización de presupuestos con IA.',
    technologies: ['TypeScript', 'Next.js', 'LangChain', 'Supabase', 'Stripe', 'Vercel'],
    category: 'automation',
    demoUrl: '#',
    githubUrl: '#',
    featured: false,
    impact: 'Ahorro de 50 horas/semana en operaciones',
    client: 'Agencia Digital',
    year: 2023
  },
  {
    id: 5,
    title: 'Plataforma de Aprendizaje Adaptativo',
    description: 'Sistema educativo que personaliza contenido en tiempo real basado en performance del estudiante, utilizando modelos de NLP avanzados.',
    technologies: ['React Native', 'Python', 'FastAPI', 'MongoDB', 'OpenAI', 'Redis'],
    category: 'edtech',
    demoUrl: '#',
    githubUrl: '#',
    featured: false,
    impact: 'Mejora del 45% en retención de estudiantes',
    client: 'EdTech Startup',
    year: 2023
  },
  {
    id: 6,
    title: 'Sistema de Monitoreo de Infraestructura',
    description: 'Plataforma de observabilidad completa con alertas inteligentes, correlación de logs y análisis predictivo de fallos.',
    technologies: ['Go', 'React', 'InfluxDB', 'Grafana', 'Prometheus', 'Kafka'],
    category: 'devops',
    demoUrl: '#',
    githubUrl: '#',
    featured: false,
    impact: 'Reducción del 80% en tiempo de resolución',
    client: 'SaaS Enterprise',
    year: 2022
  },
];

export const categories = [
  { id: 'all', label: 'Todos los Proyectos', count: 6 },
  { id: 'architect', label: 'Arquitectura', count: 1 },
  { id: 'data', label: 'Data Science', count: 1 },
  { id: 'ml', label: 'Machine Learning', count: 1 },
  { id: 'automation', label: 'Automatización', count: 1 },
  { id: 'edtech', label: 'EdTech', count: 1 },
  { id: 'devops', label: 'DevOps', count: 1 },
];

// Category colors for UI consistency
export const categoryColors = {
  architect: 'from-blue-500 to-cyan-500',
  data: 'from-purple-500 to-pink-500',
  ml: 'from-green-500 to-emerald-500',
  automation: 'from-orange-500 to-amber-500',
  edtech: 'from-indigo-500 to-violet-500',
  devops: 'from-gray-600 to-gray-800',
};