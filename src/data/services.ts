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
    image: "/images/services/service-arbitraje.jpg",
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
    image: "/images/services/service-penal.jpg",
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
    id: 'civil-corporativo',
    title: "Derecho Civil y Corporativo",
    subtitle: "Protección integral de su patrimonio.",
    scenario: "Un contrato mal redactado o una estructura legal débil pueden costarle su patrimonio. Prevéngalo con asesoría experta.",
    description: "Asesoría experta en contratos, propiedad, obligaciones y estructura societaria. Blindamos sus intereses personales y comerciales.",
    fullDescription: "Brindamos soluciones legales sólidas en el ámbito civil y empresarial. Desde la redacción de contratos complejos hasta la resolución de disputas patrimoniales y societarias.\n\nNos encargamos de la estructuración legal de su empresa, saneamiento de propiedades, recuperación de deudas y defensa en litigios civiles, asegurando que cada paso comercial que dé esté respaldado por la ley.",
    image: "/images/services/service-civil-clean.jpg",
    expertise: [
      { term: "Contratos Civiles", desc: "Redacción y revisión de acuerdos blindados." },
      { term: "Derecho Inmobiliario", desc: "Saneamiento físico-legal de predios." },
      { term: "Derecho Societario", desc: "Constitución y reestructuración de empresas." },
      { term: "Obligaciones", desc: "Gestión de deudas y patrimonio." },
      { term: "Sucesiones", desc: "Testamentos y división de herencias." },
      { term: "Responsabilidad Civil", desc: "Indemnizaciones por daños y perjuicios." }
    ],
    approach: "Seguridad jurídica para su crecimiento.",
    icon: Building2
  },
  {
    id: 'economico',
    title: "Empresas y Lavado",
    subtitle: "Protegemos su patrimonio y reputación.",
    scenario: "En el complejo mundo empresarial, un error administrativo puede escalar a una crisis penal.",
    description: "Defensa especializada en Lavado de Activos y Delitos Tributarios. Protegemos el patrimonio de su empresa frente a investigaciones fiscales invasivas.",
    fullDescription: "En el clima regulatorio actual, una transacción inusual o un desbalance patrimonial pueden detonar investigaciones por Lavado de Activos que paralizan su negocio. Nosotros construimos un blindaje legal con peritos contables para demostrar la licitud de sus fondos y desvirtuar tesis fiscales agresivas.",
    image: "/images/services/service-empresas.jpg",
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
    image: "/images/services/service-funcionarios.jpg",
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
    id: 'narcotrafico-comunes',
    title: "Narcotráfico y Delitos Comunes",
    subtitle: "Defensa en TID y procesos penales ordinarios.",
    scenario: "Una acusación por drogas o delitos comunes requiere acción inmediata para evitar la prisión preventiva.",
    description: "Especialistas en defensa por Tráfico Ilícito de Drogas (TID), Robo Agravado y delitos comunes. Estrategia inmediata para proteger su libertad.",
    fullDescription: "El Tráfico Ilícito de Drogas (TID) y los delitos contra el patrimonio son las causas más frecuentes de prisión en el país. Nuestra defensa no juzga; actúa. Conocemos los vacíos de las intervenciones policiales, las fallas en la cadena de custodia y los requisitos para desvirtuar la prisión preventiva.\n\nAtendemos también casos de Omisión a la Asistencia Familiar, Conducción en Estado de Ebriedad y Usurpación. No deje que un error o una acusación injusta arruine su vida; tenemos la estrategia para pelear su caso.",
    image: "/images/services/service-narcotrafico.jpg",
    expertise: [
      { term: "Tráfico Ilícito de Drogas", desc: "Defensa en TID, insumos y microcomercialización." },
      { term: "Robo y Hurto", desc: "Estrategia técnica ante delitos patrimoniales." },
      { term: "Omisión de Asistencia", desc: "Solución a procesos de alimentos." },
      { term: "Peligro Común", desc: "Defensa en conducción en estado de ebriedad." },
      { term: "Usurpación", desc: "Defensa en conflictos por posesión de terrenos." },
      { term: "Beneficios Penitenciarios", desc: "Semilibertad y liberación condicional." }
    ],
    approach: "Defensa rápida y efectiva en casos comunes.",
    icon: Siren
  }
];