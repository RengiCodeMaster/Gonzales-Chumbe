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
    id: 'economico',
    title: "Empresas y Lavado",
    subtitle: "Protegemos su patrimonio y reputación.",
    scenario: "En el complejo mundo empresarial, un error administrativo puede escalar a una crisis penal.",
    description: "Defensa especializada para directivos y empresas ante investigaciones por Lavado de Activos, Defraudación Tributaria y delitos financieros. Protegemos su patrimonio y su libertad.",
    fullDescription: "En el clima regulatorio actual, la línea entre un error contable y un delito penal es cada vez más delgada. Una transacción inusual, un desbalance patrimonial o una relación comercial con terceros cuestionados pueden detonar investigaciones por Lavado de Activos o Evasión Fiscal que amenazan la continuidad de su empresa y su libertad personal. \n\nNosotros no solo defendemos; construimos un blindaje legal. Trabajamos con peritos contables y auditores forenses para reconstruir la realidad económica de sus operaciones, demostrando la licitud de sus fondos y desvirtuando las tesis fiscales. Entendemos que su reputación es su activo más valioso, y luchamos para que una investigación no se convierta en una condena anticipada.",
    image: "/images/services/economico.png",
    expertise: [
      { term: "Lavado de Activos", desc: "Proceso para ocultar el origen ilícito de bienes o dinero." },
      { term: "Evasión Tributaria", desc: "Uso de medios ilegales para reducir el pago de tributos." },
      { term: "Régimen Cambiario", desc: "Infracciones a las normas de cambio de divisas." },
      { term: "Fraude Corporativo", desc: "Engaño financiero dentro de una organización." },
      { term: "Contrabando", desc: "Ingreso o salida de mercancías burlando control aduanero." },
      { term: "Balances Falsos", desc: "Alteración de estados financieros para engañar a terceros." }
    ],
    approach: "Hablamos el idioma de los negocios y el de los jueces.",
    icon: Briefcase
  },
  {
    id: 'narcotrafico',
    title: "Narcotráfico",
    subtitle: "Defensa técnica contra penas altas.",
    scenario: "Cuando la libertad pende de un hilo, cada detalle del procedimiento policial cuenta.",
    description: "Estrategias de defensa técnica en casos complejos de Tráfico Ilícito de Drogas. Cuestionamos la legalidad de los operativos y buscamos la nulidad de pruebas viciadas.",
    fullDescription: "Enfrentar cargos por Narcotráfico es enfrentar todo el peso del Estado. Las penas son severas y el estigma es inmediato. Sin embargo, muchas intervenciones policiales están llenas de irregularidades: detenciones arbitrarias, actas mal redactadas, rupturas en la cadena de custodia o allanamientos sin orden judicial. \n\nNo nos limitamos a esperar el juicio. Nuestra estrategia es activa y técnica: atacamos la legalidad de la prueba desde el primer día. Si la policía cometió 'errores', nosotros los convertimos en su libertad. Ya sea microcomercialización o grandes organizaciones, garantizamos que se respeten sus derechos fundamentales frente a los abusos del sistema.",
    image: "/images/services/drogas.png",
    expertise: [
      { term: "Tráfico de Drogas", desc: "Promoción, favorecimiento o facilitación del consumo ilegal." },
      { term: "Microcomercialización", desc: "Venta de drogas en pequeñas cantidades (Art. 298)." },
      { term: "Insumos Químicos", desc: "Desvío de químicos para elaboración de drogas." },
      { term: "Transporte (Burriers)", desc: "Transporte internacional de estupefacientes en el cuerpo o equipaje." },
      { term: "Cultivo Ilegal", desc: "Siembra de amapola, coca o marihuana sin autorización." },
      { term: "Nulidad de Operativos", desc: "Litigio para invalidar pruebas obtenidas ilegalmente." }
    ],
    approach: "Atacamos la legalidad del procedimiento policial.",
    icon: Siren
  },
  {
    id: 'personas',
    title: "Homicidios y Lesiones",
    subtitle: "Defensa en delitos contra la vida.",
    scenario: "En momentos de tragedia y confusión, somos la voz que defiende su verdad.",
    description: "Defensa penal experta en Homicidios, Lesiones y Accidentes. Utilizamos ciencia forense y criminalística para esclarecer los hechos y probar su inocencia.",
    fullDescription: "Una acusación por delitos contra la vida es una carrera contra el tiempo y los prejuicios. Ya sea un caso de legítima defensa mal interpretado, un accidente de tránsito infortunado o una acusación falsa, la presión por 'encontrar un culpable' es inmensa. \n\nAquí es donde la ciencia hace la diferencia. No confiamos solo en testimonios; utilizamos peritos balísticos, médicos legistas y reconstrucción de la escena para probar científicamente lo que realmente ocurrió. Desmontamos las narrativas acusatorias con evidencia técnica sólida, asegurando que un hecho lamentable no se convierta en una injusticia de por vida.",
    image: "/images/services/homicidios.png",
    expertise: [
      { term: "Homicidios", desc: "Muerte causada a una persona, sea dolosa o culposa." },
      { term: "Accidentes Fatales", desc: "Homicidio o lesiones derivadas del tránsito vehicular." },
      { term: "Lesiones Graves", desc: "Daño considerable a la integridad corporal o salud." },
      { term: "Mala Praxis", desc: "Negligencia médica con resultado de muerte o lesiones." },
      { term: "Legítima Defensa", desc: "Causa de justificación que exime de responsabilidad penal." },
      { term: "Femicidios", desc: "Homicidio de una mujer por su condición de tal." }
    ],
    approach: "Ciencia forense para demostrar la verdad.",
    icon: Users
  },
  {
    id: 'propiedad',
    title: "Estafas y Robos",
    subtitle: "Estafas, robos y recuperación.",
    scenario: "Protegiendo su patrimonio ante fraudes, estafas y acusaciones injustas.",
    description: "Representación legal en delitos contra el patrimonio: Estafas, Apropiación Ilícita y Robos. Recuperamos activos y defendemos sus intereses comerciales.",
    fullDescription: "¿Ha sido víctima de un fraude millonario? ¿O lo acusan penalmente por un conflicto que debería ser civil? Los delitos patrimoniales requieren una visión estratégica dual. \n\nPara las víctimas, actuamos con celeridad para rastrear activos y asegurar la reparación del daño. Para los acusados, trazamos una línea firme entre un incumplimiento contractual (deudas) y un delito (estafa), evitando que la justicia penal sea utilizada indebidamente como herramienta de cobranza. Sea cual sea su posición, protegemos lo que es suyo con firmeza y conocimiento de la ley.",
    image: "/images/services/propiedad.png",
    expertise: [
      { term: "Estafas Complejas", desc: "Inducción a error mediante engaño para beneficio propio." },
      { term: "Usurpaciones", desc: "Despojo de la posesión de un inmueble (invasiones)." },
      { term: "Extorsión", desc: "Obligar a otro a dar una ventaja económica mediante amenaza." },
      { term: "Robos", desc: "Apoderamiento de bienes ajenos con fuerza o violencia." },
      { term: "Ciberdelito", desc: "Fraudes cometidos mediante tecnología (Phishing, Hacking)." },
      { term: "Falsificación", desc: "Alteración o fabricación de documentos públicos/privados." }
    ],
    approach: "Seguimos la ruta del dinero.",
    icon: Building2
  },
  {
    id: 'administracion',
    title: "Funcionarios Públicos",
    subtitle: "Defensa de funcionarios públicos.",
    scenario: "Cuando el servicio público se convierte en un riesgo legal, blindamos su gestión.",
    description: "Defensa especializada para funcionarios y servidores públicos ante denuncias por Corrupción, Colusión y Peculado. Desactivamos el 'Lawfare' y las denuncias políticas.",
    fullDescription: "Servir al Estado hoy es una actividad de alto riesgo. Una firma en un contrato, una decisión administrativa o una licitación de hace años pueden ser reexaminadas hoy bajo sospecha de corrupción, a menudo impulsadas por cambios políticos o revanchismos. \n\nNos especializamos en defender la legalidad de la gestión pública. Analizamos al detalle los expedientes de contratación, la normativa administrativa y los reglamentos internos para demostrar que sus actos se ajustaron a derecho. Protegemos su carrera, su honorabilidad y su futuro frente a acusaciones infundadas o politizadas.",
    image: "/images/services/corrupcion.png",
    expertise: [
      { term: "Cohecho (Coimas)", desc: "Solicitar o aceptar sobornos a cambio de actos funcionales." },
      { term: "Malversación", desc: "Dar al dinero público una aplicación diferente a la oficial." },
      { term: "Enriquecimiento", desc: "Incremento patrimonial no justificado de un funcionario." },
      { term: "Tráfico de Influencias", desc: "Invocar influencias reales/simuladas a cambio de beneficios." },
      { term: "Negociaciones Incompatibles", desc: "Interés indebido en contratos u operaciones estatales." },
      { term: "Abuso de Autoridad", desc: "Acto arbitrario en perjuicio de terceros usando el cargo." }
    ],
    approach: "Blindaje legal y manejo de crisis.",
    icon: Gavel
  },
  {
    id: 'sexual',
    title: "Denuncias Sexuales",
    subtitle: "Defensa técnica y garantías.",
    scenario: "En casos de alta sensibilidad, la presunción de inocencia es nuestra prioridad.",
    description: "Defensa reservada y rigurosa en delitos sexuales. Cuestionamos la prueba psicológica y garantizamos un juicio justo sin prejuicios.",
    fullDescription: "Pocas acusaciones son tan devastadoras como las de índole sexual. Destruyen la reputación, la familia y el empleo mucho antes de llegar a juicio. En un entorno donde a menudo es 'la palabra de uno contra otro', la defensa debe ser científica y meticulosa. \n\nSometemos las declaraciones en Cámara Gesell a un análisis crítico con psicólogos expertos para detectar inconsistencias o inducciones. Hacemos valer contrapruebas objetivas (ubicación, comunicaciones, pericias biológicas). Defendemos la verdad de los hechos frente al estigma social, garantizando un trato digno y el respeto absoluto a sus derechos.",
    image: "/images/services/proteccion.png",
    expertise: [
      { term: "Abuso Sexual", desc: "Actos contra la libertad sexual sin consentimiento válido." },
      { term: "Denuncias Falsas", desc: "Acusaciones sin sustento fáctico por venganza o custodia." },
      { term: "Grooming", desc: "Ciberacoso de un adulto a un menor para fines sexuales." },
      { term: "Trata de Personas", desc: "Captación y explotación de seres humanos." },
      { term: "Violación de Domicilio", desc: "Ingreso sin permiso a morada ajena, agravante común." },
      { term: "Difusión Imágenes", desc: "Compartir contenido íntimo sin consentimiento (Sexting)." }
    ],
    approach: "Control estricto de pericias psicológicas.",
    icon: Shield
  },
  {
    id: 'recursos',
    title: "Recuperar Libertad",
    subtitle: "Recursos y ejecución de pena.",
    scenario: "Una sentencia injusta no es el final. Aún hay caminos hacia la libertad.",
    description: "Especialistas en Recursos de Apelación, Casación y Beneficios Penitenciarios. Revisamos su condena para encontrar los errores que otros ignoraron.",
    fullDescription: "¿Siente que fue juzgado injustamente? El sistema judicial comete errores: pruebas mal valoradas, leyes mal aplicadas o defensas deficientes. Una condena en primera instancia no es el final. \n\nNos dedicamos a encontrar la 'aguja en el pajar' de su expediente. Identificamos vicios procesales y constitucionales para fundamentar recursos de Apelación o Casación ante la Corte Suprema. Asimismo, gestionamos Beneficios Penitenciarios para quienes buscan reintegrarse a la sociedad. No vendemos falsas esperanzas; ofrecemos una revisión técnica y honesta de las posibilidades reales de recuperar su libertad.",
    image: "/images/services/apelaciones.png",
    expertise: [
      { term: "Casación", desc: "Recurso extraordinario ante Corte Suprema por error de derecho." },
      { term: "Corte Suprema", desc: "Litigio en la última instancia de la justicia ordinaria." },
      { term: "Revisión de Condena", desc: "Acción para anular sentencia firme ante nuevas pruebas." },
      { term: "Excarcelaciones", desc: "Cese de prisión preventiva o detención arbitraria." },
      { term: "Libertad Condicional", desc: "Beneficio para cumplir el saldo de pena en libertad." },
      { term: "Prisión Domiciliaria", desc: "Cumplimiento de pena en el hogar por salud o edad." }
    ],
    approach: "Buscamos el error técnico que otros ignoraron.",
    icon: Scale
  }
];