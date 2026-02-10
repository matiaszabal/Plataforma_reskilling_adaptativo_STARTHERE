
import { Hypothesis, PathWeight } from './types';

export const HYPOTHESES: Hypothesis[] = [
  {
    id: 1,
    title: "Aprendizaje Adaptativo Inteligente",
    description: "Es el motor más potente. Ajusta el nivel de dificultad y contenido automáticamente según el ritmo de cada empleado.",
    keyMetric: "Fuerza de Impacto",
    metricValue: "Muy Alta",
    impact: 'Transformative',
    icon: 'target',
    findingDetail: "Optimiza la curva de aprendizaje y reduce el tiempo muerto en formación hasta en un 45%."
  },
  {
    id: 2,
    title: "Alianza Academia-Industria",
    description: "El 'puente' obligatorio. Sin esta conexión, la tecnología no sirve para las necesidades reales del negocio.",
    keyMetric: "Rol Crítico",
    metricValue: "Mediador",
    impact: 'Critical',
    icon: 'link',
    findingDetail: "Garantiza que lo que se enseña en la plataforma sea exactamente lo que la empresa necesita hoy."
  },
  {
    id: 3,
    title: "Impulso Psicológico y Motivación",
    description: "La IA genera 'pequeñas victorias' constantes, aumentando la autoconfianza del trabajador en su proceso de cambio.",
    keyMetric: "Compromiso",
    metricValue: "+68%",
    impact: 'High',
    icon: 'smile',
    findingDetail: "Feedback inmediato que mantiene la motivación alta y reduce el abandono de los cursos."
  },
  {
    id: 4,
    title: "Escalabilidad Inclusiva",
    description: "Permite que el reentrenamiento llegue a todos los niveles de la organización de forma sostenible.",
    keyMetric: "Capacidad",
    metricValue: "10x",
    impact: 'Critical',
    icon: 'globe',
    findingDetail: "Democratiza el acceso a habilidades digitales críticas sin importar el nivel base del empleado."
  },
  {
    id: 5,
    title: "Preparación para el Futuro",
    description: "La adaptabilidad de la plataforma predice directamente el éxito de la transformación del modelo de negocio.",
    keyMetric: "Confianza",
    metricValue: "95%",
    impact: 'Transformative',
    icon: 'bar-chart',
    findingDetail: "Valida que invertir en esta tecnología asegura la competitividad a largo plazo."
  }
];

export const COMPARISON_DATA = [
  { name: 'Velocidad', traditional: 40, aiEnabled: 85 },
  { name: 'Retención', traditional: 30, aiEnabled: 75 },
  { name: 'Aplicación Real', traditional: 45, aiEnabled: 80 },
  { name: 'Eficiencia Costo', traditional: 20, aiEnabled: 90 },
  { name: 'Escalabilidad', traditional: 15, aiEnabled: 95 },
];
