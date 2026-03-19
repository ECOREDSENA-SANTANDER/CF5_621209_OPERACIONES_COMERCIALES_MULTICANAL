export default {
  global: {
    Name: 'Atención al cliente en el <i>retail</i>',
    Description:
      'El propósito de este componente de formación es ayudar a los aprendices a desarrollar una excelente atención al cliente teniendo en cuenta que es muy importante en el mercado y de su buena atención depende la fidelización y aumento de la clientela.',
    imagenBannerPrincipal: require('@/assets/curso/portada/imagen.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Definiciones en el <i>retail</i>',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Atender al cliente en el <i>retail</i>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Conocer al cliente',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Clasificación de los clientes',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Necesidades, deseos y demanda de los clientes',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Momentos de verdad con el cliente',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Contingencias',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Técnicas de servicio al cliente',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Comunicación asertiva',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Comunicación verbal y no verbal',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Pautas de actuación',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Ciclo de servicio',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Triángulo de servicio',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Protocolos de la organización',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Protocolo de atención',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Etiqueta y normas de cortesía',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Satisfacción del cliente',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Trazabilidad del servicio',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo:
              'Tipos de herramientas de evaluación de satisfacción del cliente',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Trámite de PQRS',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Registro de la información',
            hash: 't_5_4',
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
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CF5_621209_DU.pdf',
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

  glosario: [
    {
      termino: 'Atención al cliente',
      significado:
        'Es el servicio que se presta a las personas que adquieren un bien o servicio. La atención al cliente comprende desde el recibimiento y la información antes de realizar una compra hasta el seguimiento postventa.',
    },
    {
      termino: '<em>Branding</em>',
      significado:
        'Es ayudar a los consumidores a entender lo que ofreces y en qué te diferencias, de manera simple y fácil. Pero no es solo la Propuesta Única de Venta.',
    },
    {
      termino: 'Cliente',
      significado:
        'Es la persona que utiliza o adquiere, de manera frecuente u ocasional los servicios o productos que pone a su disposición un profesional, un comercio o una empresa.',
    },
    {
      termino: 'Comunicación',
      significado:
        'Es el proceso que consiste en la transmisión e intercambio de mensajes entre un emisor y un receptor.',
    },
    {
      termino: 'Información',
      significado:
        'Conjunto de datos ya procesados y ordenados para su comprensión, que aportan nuevos conocimientos a un individuo o sistema sobre un asunto, materia, fenómeno o ente determinado.',
    },
    {
      termino: 'Momentos de verdad',
      significado:
        'Es un episodio en el cual el cliente entra en contacto con cualquier aspecto de la empresa y se crea una impresión sobre la calidad del servicio.',
    },
    {
      termino: 'Protocolo',
      significado:
        'Conjunto de reglas ya sea por normas o por costumbre, se establecen para actos oficiales o solemnes, ceremonias y otros eventos.',
    },
    {
      termino: 'Satisfacción',
      significado:
        'Estado mental de goce por sentir que ya nada se necesita para lograr la plenitud ya sea física o mental.',
    },
    {
      termino: 'Servicio',
      significado:
        'Dar o prestar apoyo o asistencia a alguien valiéndonos de un conjunto de medios materiales o inmateriales.',
    },
    {
      termino: 'Trámite',
      significado:
        'Proceso o procedimiento legal o administrativo para resolver un litigio o discutible. Cada uno de los estados y diligencias precisas para la conclusión de un negocio.',
    },
    {
      termino: 'Trazabilidad',
      significado:
        'Posibilidad de identificar el origen y las diferentes etapas de un proceso de producción y distribución de bienes de consumo.',
    },
  ],
  referencias: [
    {
      referencia:
        'Blanco García, C. (2013). Comunicación y atención al cliente. Madrid, Spain: Macmillan Iberia, S.A.',
      link: '',
    },
    {
      referencia:
        'Grönroos, C. (1994). Marketing y gestión de servicios: la gestión de los momentos de la verdad y la competencia en los servicios. Ediciones Díaz de Santos.',
      link: '',
    },
    {
      referencia:
        'FERNÁNDEZ VERDE, L. O. L. A., & Fernández Rico, E. (2017). Comunicación empresarial y atención al cliente 2. Ediciones Paraninfo, SA.',
      link: '',
    },
    {
      referencia:
        'Marielos Ramos (2020). Universidad de San Carlos de Guatemala. Etiqueta y normas de cortesía.',
      link: '',
    },
    {
      referencia:
        'Asociación Española para la Calidad. (s.f.). Cómo medir la satisfacción del cliente.',
      link:
        'https://www.aec.es/c/document_library/get_file?folderId=53412&name=DLFE-1830.pdf',
    },
    {
      referencia:
        'Quiñones, M. E. V. (2007). Calidad y servicio. Concepto y herramientas. Universidad de la Sabana.',
      link: '',
    },
    {
      referencia:
        'Mariscal, M. (2009). Manual de proceso de la información. México D.F., Editorial Miguel Ángel Porrúa.',
      link: '',
    },
    {
      referencia:
        'Universidad de La Sabana. (2018). Protocolo claves para su gestión (informe técnico). intellectum',
      link:
        'https://intellectum.unisabana.edu.co/bitstream/handle/10818/32819/17-Final-Protocolo_split.pdf?sequence=1&isAllowed=y',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Esperanza Cardona Grisales',
          cargo: 'Instructora',
          centro:
            'Centro de Gestión Tecnológica de Servicios CGTS - Regional Valle',
        },
        {
          nombre: 'Jaime Alberto Pérez Posada',
          cargo: 'Instructor',
          centro: 'Centro de Comercio - Regional Antioquia',
        },
        {
          nombre: 'Zvi Daniel Grosman',
          cargo: 'Diseñador instruccional',
          centro: 'Centro Agropecuario La Granja  - Regional Tolima',
        },
        {
          nombre: 'Ana Catalina Córdoba Sus',
          cargo: 'Revisora metodológica y pedagógica',
          centro:
            'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor pedagógico',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Sandra Patricia Hoyos Sepúlveda',
          cargo: 'Revisión y corrección de estilo',
          centro:
            'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital ',
        },
        {
          nombre: 'Laura Paola Gelvez Manosalva',
          cargo: 'Diseñadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yuly Andrea Rey Quiñonez',
          cargo: 'Diseñadora de contenidos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Leonardo Castellanos Rodriguez',
          cargo: 'Desarrollador <i>full-stack</i>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'María Alejandra Vera Briceño',
          cargo: 'Animadora y producción audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Yineth Ibette González Quintero',
          cargo: 'Validadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Andrea Ardila Chaparro',
          cargo: 'Evaluadora para contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
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
