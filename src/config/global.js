export default {
  global: {
    componenteFormativo: 'Tratamiento de riesgos de ciberseguridad',
    descripcionCurso:
      'Con este componente, el aprendiz profundizará en los fundamentos necesarios para aplicar las acciones de análisis y valoración de riesgos y controles de ciberseguridad, aplicando métodos y técnicas que ayuden a la priorización, elementos fundamentales para definir un plan adecuado de tratamiento acorde a las necesidades y contexto analizado.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Técnicas de recolección de información',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Técnicas de recolección más usuales',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Características de las técnicas de recolección',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Vulnerabilidades y amenazas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Valoración de amenazas y vulnerabilidades',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Tratamiento de riesgos',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo:
          'Seguridad e infraestructura de <em>hardware</em> y <em>software</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Infraestructura de <em>hardware</em> y <em>software</em>',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Componentes de infraestructura y seguridad',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Interconexiones de redes y seguridad perimetral',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Herramientas de análisis de seguridad digital',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Inventario de activos y evaluación de impacto de riesgos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Riesgos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo: 'Valoración',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '7.1',
            titulo: 'Riesgo inherente',
            hash: 't_7_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '7.2',
            titulo: 'Evaluación de controles de seguridad',
            hash: 't_7_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '7.3',
            titulo: 'La importancia del control',
            hash: 't_7_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '7.4',
            titulo: 'Riesgo residual',
            hash: 't_7_4',
          },
        ],
      },
      {
        nombreRuta: 'tema8',
        icono: 'far fa-file-alt',
        numero: '8',
        titulo: 'Matriz de riesgos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '8.1',
            titulo: 'Diligenciamiento de la matriz de riesgos',
            hash: 't_8_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '8.2',
            titulo: 'Plan de tratamiento de riesgos',
            hash: 't_8_2',
          },
        ],
      },
      {
        nombreRuta: 'tema9',
        icono: 'far fa-file-alt',
        numero: '9',
        titulo: 'Reglas de negocio',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '9.1',
            titulo: 'Herramientas de automatización de procesos',
            hash: 't_9_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '9.2',
            titulo: '<em>Workflow</em>',
            hash: 't_9_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '9.3',
            titulo: 'Orquestación de procesos',
            hash: 't_9_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/228138_CF02_DU.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '2. Vulnerabilidades y amenazas',
      referencia:
        'Gómez, V., Á. (2015). Auditoría de seguridad informática. RA-MA Editorial.',
      tipo: 'Libro',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/62464?page=14',
    },
    {
      tema: '3. Seguridad e infraestructura de hardware y software',
      referencia:
        'Tenable. (2021).Tenable for education, Instructor / Student guide.',
      tipo: 'PDF',
      descarga: '/downloads/Guide-Tenable-for-Education.pdf',
    },
    {
      tema: '3.3 Interconexiones de redes y seguridad perimetral',
      referencia:
        'Owasp. (2021). <em>OWASP ZAP 2.9.Getting Started Guide.</em>',
      tipo: 'PDF',
      link: 'https://www.zaproxy.org/pdf/ZAPGettingStartedGuide-2.9.pdf',
    },
    {
      tema: '4. Herramientas de análisis de seguridad digital',
      referencia:
        'Baca, U., G. (2016). Introducción a la Seguridad informática. Grupo Editorial Patria. ',
      tipo: 'Libro',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/40458?page=20',
    },
    {
      tema: '4. Herramientas de análisis de seguridad digital',
      referencia: 'Subgraph. (2021). About Vega. Subgraph.',
      tipo: 'Pagina web',
      link: 'https://subgraph.com/vega/documentation/about-vega/index.en.html',
    },
    {
      tema: '8. Matriz de riesgos',
      referencia:
        'Matriz de riesgos	Montes, S., C. A., y Vallejo, B., C. A. (2020). Los mapas de riesgos en la auditoría interna. Contexto: Revista de La Facultad de Ciencias Económicas Administrativas y Contables, 9(1), 76–101.Artículo.',
      tipo: 'Artículo',
      link:
        'https://search-ebscohost-com.bdigital.sena.edu.co/login.aspx?direct=true&db=fap&AN=154262779&lang=es&site=ehost-live',
    },
  ],
  glosario: [
    {
      termino: 'Activo de información',
      significado:
        'componente que almacena, trata, muestra o transporta datos e información, pudiendo ser físicos o digitales, por ejemplo, una base de datos, <em>software</em>, sistemas de información, papel, discos duros, personas, procesos, etc.',
    },
    {
      termino: 'Amenaza',
      significado:
        'toda aquella acción o serie de acciones que aprovechan las vulnerabilidades para romper la seguridad de los sistemas.',
    },
    {
      termino: 'Autenticidad',
      significado:
        'propiedad o característica consistente en que una entidad es quien dice ser o bien que garantiza la fuente de la que proceden los datos. ',
    },
    {
      termino: 'Ciberseguridad',
      significado:
        'conjunto de metodologías, medidas y controles destinados a gestionar la seguridad de la información de una organización y/o de la información en general.',
    },
    {
      termino: '<em>Cloud computing</em>',
      significado:
        'utilización de soluciones <em>hardware</em> y <em>software</em> dispuestos a través de internet para la implementación de soluciones informáticas.',
    },
    {
      termino: 'Confidencialidad de la información',
      significado:
        'consiste en que la información ni se pone a disposición ni se revela a individuos, entidades o procesos no autorizados. ',
    },
    {
      termino: 'Control o salvaguarda',
      significado:
        'medida de protección o control para contrarrestar las amenazas.',
    },
    {
      termino: 'Disponibilidad',
      significado:
        'propiedad o característica de los activos consistente en que las entidades o procesos autorizados tienen acceso a los mismos cuando lo requieren.',
    },
    {
      termino: '<em>Hardware</em>',
      significado:
        '<em>Hardware</em> componentes tecnológicos de carácter físico que soportan el <em>software.</em>',
    },
    {
      termino: 'Infraestructura TI',
      significado:
        'componentes de <em>hardware</em> y <em>software</em> requeridos para gestionar y operar entornos tecnológicos que pueden ser implementados en instalaciones de la organización o en sistemas en la nube, <em>cloud computing.</em>',
    },
    {
      termino: 'Integridad de los datos',
      significado:
        'garantía de que el activo de información no ha sido alterado de manera no autorizada.',
    },
    {
      termino: 'Riesgo',
      significado:
        'probabilidad de ocurrencia de un hecho que impide el logro de los objetivos estratégicos.',
    },
    {
      termino: 'Software',
      significado:
        'componente intangible compuesto por un sistema, servicios, programas y/o aplicaciones.',
    },
    {
      termino: 'Tratamiento de riesgos',
      significado:
        'medidas y controles que se implementan con el fin de mitigar el impacto o la frecuencia de ocurrencia de un riesgo.',
    },
    {
      termino: 'Vulnerabilidad',
      significado:
        'una debilidad o fallo de seguridad que se presenta en un sistema de información.',
    },
  ],
  referencias: [
    {
      referencia:
        'Chaves, E. (2009). Manual metodológico para la recolección de Información. ',
      link: 'http://funes.uniandes.edu.co/21233/1/Chaves2009Manual.pdf',
    },
    {
      referencia:
        'Gallardo de Parada, Y., y Moreno Garzón, A. (1999). Serie aprender a investigar. Módulo recolección de la información.',
      link: '',
    },
    {
      referencia:
        '<em>International Business Machines Corporation.</em> (2021). ¿Qué es infraestructura de TI? IBM.',
      link: 'https://www.ibm.com/co-es/topics/infrastructure',
    },
    {
      referencia:
        'Manning, K. (2021). Las 10 mejores herramientas de automatización de procesos empresariales. <em>Process Maker.</em>',
      link:
        'https://www.processmaker.com/es/blog/top-10-business-process-automation-tools/',
    },
    {
      referencia:
        'Ministerio de Hacienda y Administraciones Públicas. (2012). MAGERIT – Versión 3.0. Metodología de análisis y gestión de riesgos de los sistemas de información. catálogo de elementos. Ministerio de Hacienda y Administraciones Públicas.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Tecnologías de la Información y Comunicaciones. (2012). Guía de gestión de riesgos. Seguridad y privacidad de la información. Ministerio de Tecnologías de la Información y Comunicaciones.',
      link:
        'https://www.mintic.gov.co/gestionti/615/articles-5482_G7_Gestion_Riesgos.pdf',
    },
    {
      referencia:
        '<em>Nmap Security.</em> (2021). Guía de referencia de Nmap. NMAP',
      link: 'https://nmap.org/man/es/index.html#man-description',
    },
    {
      referencia: '<em>OpenVas by Greenbone.</em> (2021). Greenbone. OpenVAS',
      link: 'https://www.openvas.org/',
    },
    {
      referencia:
        'Peña, O. (2020). ¿Para qué sirven las técnicas de recolección de información? Poliverso.',
      link:
        'https://www.poli.edu.co/blog/poliverso/tecnicas-de-recoleccion-de-informacion',
    },
    {
      referencia: 'Real Academia Española. (2021). Riesgo. RAE.',
      link: 'https://dle.rae.es/riesgo',
    },
    {
      referencia: 'WireShark.org. (2021). <em>About Wireshark</em>',
      link: 'https://www.wireshark.org/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable de Línea de Producción',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Joaquín Patiño Cerón',
          cargo: 'Experto temático',
          centro:
            'Centro de Teleinformática y Producción Industrial - Regional Cauca',
        },
        {
          nombre: 'Fabián Leonardo Correa Díaz',
          cargo: 'Diseñador Instruccional',
          centro: 'Centro Agropecuario La Granja - Regional Tolima',
        },
        {
          nombre: 'Jhon Jairo Rodríguez Pérez',
          cargo: 'Corrector de estilo',
          centro:
            'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
        },
        {
          nombre: 'Cesar Antonio Villamizar Núñez',
          cargo: 'Experto Temático',
          centro:
            'Centro de la Industria, la Empresa y los Servicios (CIES) - Regional Norte de Santander',
        },
        {
          nombre: 'Giovanna Andrea Escobar Ospina',
          cargo: 'Diseñador Instruccional',
          centro:
            'Centro de la Industria, la Empresa y los Servicios (CIES) - Regional Norte de Santander',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Asesor Metodológico',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'José Gabriel Ortiz Abella',
          cargo: 'Corrector de Estilo',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yerson Fabian Zarate Saavedra',
          cargo: 'Diseñador de Contenidos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Francisco José Lizcano Reyes',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Carlos Eduardo Garavito Parada',
          cargo: 'Animador y Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Wilson Andrés Arenales Cáceres ',
          cargo: 'Storyboard e Ilustración ',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander ',
        },
        {
          nombre: 'Camilo Andres Bolaño Rey',
          cargo: 'Actividad Didáctica',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Zuleidy María Ruiz Torres',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
