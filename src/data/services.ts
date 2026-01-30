import { Briefcase, Users, Building2, Gavel, Shield, Scale, Siren, Info } from 'lucide-react';

export interface ExpertiseItem {
  term: string;
  desc: string; // Brief definition for tooltip/feedback
}

export interface ServiceDetail {
  id: string;
  title: string;
  subtitle: string;
  scenario: string;
  description: string;
  fullDescription: string;
  image: string;
  expertise: ExpertiseItem[];
  approach: string;
  icon: any;
}

export const servicesData: ServiceDetail[] = [
  {
    id: 'conciliacion',
    title: "Arbitraje y Conciliación",
    subtitle: "Solución de conflictos sin juicio.",
    scenario: "Un litigio judicial puede ser costoso y eterno. El arbitraje es la vía inteligente para cerrar disputas.",
    description: "Especialistas en Conciliación Extrajudicial y Arbitraje certificados por la PUCP. Resolvemos conflictos civiles y comerciales de manera eficiente, evitando el desgaste de un juicio largo.",
    fullDescription: "Como Árbitros y Conciliadores certificados por la Pontificia Universidad Católica del Perú (PUCP), ofrecemos una alternativa superior al litigio tradicional. Entendemos que para una empresa o un particular, el tiempo es dinero.\n\nNuestra gestión se enfoca en lograr acuerdos firmes con valor de sentencia judicial (Acta de Conciliación o Laudo Arbitral). Ya sea en disputas contractuales, indemnizaciones o conflictos societarios, utilizamos técnicas de negociación avanzada para proteger sus intereses y cerrar capítulos conflictivos con seguridad jurídica inmediata.",
    image: "/images/services/economico.png", // Using existing corporate image
    expertise: [
      { term: "Conciliación PUCP", desc: "Mecanismo célere con valor de sentencia judicial." },
      { term: "Arbitraje Comercial", desc: "Justicia privada especializada para empresas." },
      { term: "Negociación Avanzada", desc: "Estrategias para lograr acuerdos favorables." },
      { term: "Ejecución de Laudos", desc: "Cumplimiento forzoso de decisiones arbitrales." },
      { term: "Contrataciones", desc: "Resolución de disputas con el Estado." },
      { term: "Saneamiento Legal", desc: "Prevención de conflictos futuros." }
    ],
    approach: "La mejor victoria es la que se gana sin ir a juicio.",
    icon: Scale
  },
  {
    id: 'penal-constitucional',
    title: "Penal y Constitucional",
    subtitle: "Defensa de derechos fundamentales.",
    scenario: "Cuando el poder punitivo del Estado amenaza su libertad, necesita una defensa técnica absoluta.",
    description: "Defensa Penal de alta complejidad y garantías Constitucionales. Protegemos su libertad ante detenciones arbitrarias y procesos viciados.",
    fullDescription: "Nuestra práctica fusiona la litigación penal estratégica con la defensa de garantías constitucionales. No solo debatimos pruebas; cuestionamos la validez misma del proceso cuando se vulneran derechos fundamentales.\n\nInterponemos Hábeas Corpus, Amparos y Nulidades para corregir abusos de autoridad, detenciones ilegales o sentencias inconstitucionales. Respaldados por nuestra trayectoria en el Frente Policial y convenciones de Derecho Constitucional, somos la barrera entre usted y el abuso del poder estatal.",
    image: "/images/services/apelaciones.png", // Using existing appeals image
    expertise: [
      { term: "Hábeas Corpus", desc: "Acción inmediata contra detenciones arbitrarias." },
      { term: "Acción de Amparo", desc: "Protección de derechos ante actos de autoridad." },
      { term: "Prisión Preventiva", desc: "Defensa técnica en audiencias de medida cautelar." },
      { term: "Casación", desc: "Recurso ante la Corte Suprema por errores de derecho." },
      { term: "Nulidades Procesales", desc: "Invalidación de actos que vulneran el debido proceso." },
      { term: "Tutela de Derechos", desc: "Mecanismo correctivo durante la investigación fiscal." }
    ],
    approach: "Blindaje constitucional contra el abuso de poder.",
    icon: Shield
  },
  {
    id: 'asesoria-regional',
    title: "Asesoría Tingo María y Huánuco",
    subtitle: "Expertos en el entorno legal local.",
    scenario: "El éxito legal requiere conocer no solo la ley, sino el terreno donde se aplica.",
    description: "Asesoría Legal Integral con sede en Tingo María y Huánuco. Conocemos a profundidad la realidad judicial, administrativa y empresarial de la región.",
    fullDescription: "Más de 20 años de ejercicio ininterrumpido en la región de Huánuco y Tingo María nos otorgan una ventaja estratégica única: conocemos el criterio de los juzgados locales, la dinámica de la administración pública regional y los desafíos del empresariado local.\n\nBrindamos soporte legal a empresas y ciudadanos que requieren representación en la selva central, garantizando que sus trámites, defensas y negocios fluyan sin los obstáculos que enfrentan los foráneos. Su puente legal seguro en la región.",
    image: "/images/services/propiedad.png", // Using existing property image
    expertise: [
      { term: "Litigio Regional", desc: "Representación en Cortes de Huánuco y Selva Central." },
      { term: "Trámites Municipales", desc: "Gestión ante gobiernos locales de Tingo María." },
      { term: "Saneamiento de Tierras", desc: "Legalización de predios en zona de selva." },
      { term: "Defensa Corporativa", desc: "Blindaje legal para empresas de la región." },
      { term: "Recuperación de Activos", desc: "Cobranza y ejecución de garantías locales." },
      { term: "Representación Foránea", desc: "Soporte a empresas de Lima con intereses en la región." }
    ],
    approach: "Dominio total del escenario legal local.",
    icon: Building2
  },
  {
    id: 'economico',
    title: "Empresas y Lavado",
    subtitle: "Protegemos su patrimonio y reputación.",
    scenario: "En el complejo mundo empresarial, un error administrativo puede escalar a una crisis penal.",
    description: "Defensa especializada en Lavado de Activos y Delitos Tributarios. Protegemos el patrimonio de su empresa frente a investigaciones fiscales invasivas.",
    fullDescription: "En el clima regulatorio actual, una transacción inusual o un desbalance patrimonial pueden detonar investigaciones por Lavado de Activos que paralizan su negocio. Nosotros construimos un blindaje legal con peritos contables para demostrar la licitud de sus fondos y desvirtuar tesis fiscales agresivas.",
    image: "/images/services/economico.png",
    expertise: [
      { term: "Lavado de Activos", desc: "Justificación de incremento patrimonial." },
      { term: "Defraudación Tributaria", desc: "Defensa ante denuncias de SUNAT." },
      { term: "Compliance Penal", desc: "Prevención de riesgos delictivos en la empresa." },
      { term: "Extinción de Dominio", desc: "Defensa de bienes ante incautaciones del Estado." },
      { term: "Fraude en Administración", desc: "Conflictos penales entre socios." },
      { term: "Contrabando", desc: "Defensa en delitos aduaneros." }
    ],
    approach: "Hablamos el idioma de los negocios.",
    icon: Briefcase
  },
  {
    id: 'administracion',
    title: "Funcionarios Públicos",
    subtitle: "Defensa de la gestión pública.",
    scenario: "Cuando el servicio público se convierte en un riesgo legal, blindamos su gestión.",
    description: "Representación legal para funcionarios ante denuncias por Corrupción, Colusión y Peculado. Desactivamos denuncias políticas y defendemos su carrera.",
    fullDescription: "Servir al Estado es una actividad de alto riesgo. Defendemos la legalidad de sus actos administrativos frente a acusaciones de Colusión, Peculado o Cohecho. Analizamos expedientes de contratación para demostrar que su gestión se ajustó a derecho, protegiendo su honorabilidad y futuro.",
    image: "/images/services/corrupcion.png",
    expertise: [
      { term: "Colusión", desc: "Defensa en contrataciones con el Estado." },
      { term: "Peculado", desc: "Uso de recursos públicos." },
      { term: "Cohecho", desc: "Supuestos sobornos a funcionarios." },
      { term: "Negociación Incompatible", desc: "Interés indebido en contratos." },
      { term: "Abuso de Autoridad", desc: "Actos administrativos cuestionados." },
      { term: "Inhabilitación", desc: "Defensa administrativa y disciplinaria." }
    ],
    approach: "Defensa técnica contra el Lawfare.",
    icon: Gavel
  },
  {
    id: 'personas',
    title: "Delitos Graves",
    subtitle: "Homicidios y libertad sexual.",
    scenario: "En los casos más críticos, la ciencia y la técnica son su única defensa.",
    description: "Defensa experta en Homicidios, Lesiones y Delitos Sexuales. Utilizamos criminalística y pericias psicológicas para probar su verdad.",
    fullDescription: "En acusaciones por delitos contra la vida o la libertad sexual, el estigma es inmediato. Nuestra defensa no es pasiva; es científica. Utilizamos peritos de parte, reconstrucción de hechos y contra-interrogatorios rigurosos para desmontar acusaciones falsas o sesgadas y garantizar un juicio justo.",
    image: "/images/services/homicidios.png",
    expertise: [
      { term: "Homicidio", desc: "Defensa en casos de muerte dolosa o culposa." },
      { term: "Violación Sexual", desc: "Cuestionamiento técnico de pruebas." },
      { term: "Feminicidio", desc: "Defensa especializada con enfoque de género." },
      { term: "Lesiones Graves", desc: "Daños a la integridad física." },
      { term: "Prueba de ADN", desc: "Uso de genética forense en la defensa." },
      { term: "Cámara Gesell", desc: "Control de interrogatorios a menores." }
    ],
    approach: "Ciencia forense para demostrar inocencia.",
    icon: Siren
  }
];