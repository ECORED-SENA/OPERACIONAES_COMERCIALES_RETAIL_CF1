export default {
  global: {
    componenteFormativo: 'Manejo de inventarios en el <em>retail</em>',
    descripcionCurso:
      'La logística en <em>retail</em> radica en el conjunto de técnicas necesarias para poder cumplir con el objetivo final de acercar y vender un producto al cliente en su respectiva sala de ventas del formato comercial o <em>retail</em> especializado.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
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
        titulo: 'Gestión logística de inventarios en el punto de venta',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Conceptos básicos',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Inventario',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Recursos',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Herramientas ',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Código de barras ',
            hash: 't_1_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.6',
            titulo: '<em>Software</em> para la captura de código de barras',
            hash: 't_1_6',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Gestión de inventario',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Toma física y digital',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Técnicas de conteo',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Mercancía ',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Gestión de productos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Producto ',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Referencias ',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: '<em>Stock</em> de mercancía ',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Gestión de devolución',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      /*{
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },*/
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
  referencias: [
    {
      referencia:
        'Céspedes, A. (2010). <em>Principios de mercadeo.</em> Ecoe Ediciones.  ',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/69059?page=139 ',
    },
    {
      referencia:
        'Cruz, F., A. (2017). <em>Gestión de inventarios.</em> IC Editorial.  ',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/59186?page=177 ',
    },

    {
      referencia:
        'Del Hoyo, A. F. (2015). <em>Innovación y gestión de nuevos productos: una visión estratégica y práctica.</em> Difusora Larousse - Ediciones Pirámide. ',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/49051?page=37 ',
    },

    {
      referencia:
        'Ediciones Díaz de Santos. (2007). <em>Compras e inventarios.</em> Ediciones Díaz de Santos. ',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/52926?page=136 ',
    },
    {
      referencia:
        'Gómez, J. M. (2013). <em>Gestión logística y comercial.</em> McGraw-Hill España.  ',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/50240?page=1 ',
    },
    {
      referencia:
        'Jiménez, A., Calderón, H., y Delgado, E. (2015). <em>Dirección de productos y marcas.</em> Editorial UOC. ',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/56307?page=229 ',
    },
    {
      referencia: 'Kotler, P. (2017). <em>Fundamentos del marketing.</em> ',
      link:
        'https://frrq.cvg.utn.edu.ar/pluginfile.php/14584/mod_resource/content/1/Fundamentos%20del%20Marketing-Kotler.pdf ',
    },
    {
      referencia:
        'Mira, J., y Soler, D. (2010). <em>Manual del transporte de mercancías.</em> Marge Books. ',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/43754?page=12 ',
    },
    {
      referencia:
        'Palomares, R. (2000) <em>Merchandising. Teoría, práctica y estrategia.</em> ESIC. ',
      link:
        'https://corladancash.com/wp-content/uploads/2019/08/53-Merchandising_-Teoria-practica-Ricardo-Palomares-Borja.pdf ',
    },
  ],
  glosario: [
    {
      termino: 'Almacén',
      significado:
        'lugar en el que se acumulan los productos de la empresa hasta que se venden. ',
    },
    {
      termino: 'Control',
      significado:
        'acción de revisión para comprobar que todo se ajusta a los previsto y añadir las variaciones. ',
    },
    {
      termino: 'Demanda',
      significado:
        'reclamo del producto de la empresa por parte de su cliente. ',
    },
    {
      termino: 'Distribución',
      significado:
        'acción de poner a disposición del cliente el producto en el punto de venta.',
    },
    {
      termino: 'Inventario',
      significado: 'listado ordenado de la mercancía del almacén.',
    },
    {
      termino: 'Materia prima',
      significado:
        'aquello que se incorpora al proceso de fabricación o producción y tras su transformación forma parte del producto. ',
    },
    {
      termino: 'Producto',
      significado:
        'lo que la empresa destina a la venta y forma parte de sus ingresos comerciales.',
    },
    {
      termino: 'Rotura de stock',
      terminoHtml: 'Rotura de <em>stock</em>',
      significado:
        'se produce cuando la demanda no puede ser satisfecha, ya que no se cuenta con mercancía en el almacén. ',
    },
    {
      termino: 'Salida de mercancía',
      significado:
        'registro por el que la mercancía sale del almacén de la empresa, principalmente, por las ventas. ',
    },
    {
      termino: 'Sistema de clasificación',
      significado:
        'sistema implementado en el almacén para ordenar sus existencias.',
    },
    {
      termino: 'Sistema de valoración',
      significado:
        'sistema implementado en el almacén para poner precio a sus existencias.',
    },
    {
      termino: 'Stock',
      terminoHtml: '<em>Stock</em>',
      significado: 'mercadería que se encuentra en el almacén de la empresa.',
    },
  ],
  complementario: [
    {
      texto: 'Puerta, L.F. (s.f.). <em>Seminario de carga.</em>',
      tipo: 'PDF',
      descarga: '/downloads/seminario_de_carga.pdf',
    },
    {
      texto:
        'Compartamos banco. (2016). <em>¿Por qué es importante controlar el inventario de mi negocio?</em> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=AJaii3mpuJ4',
    },
    {
      texto:
        'Martínez, I. (2018). <em>Aprende a hacer un formato para devolución de mercancía al almacén.</em> [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=RMqWGZY-PWM',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Jaime Alberto Pérez Posada',
        cargo: 'Instructor',
        centro: 'Comercio <br>Regional Antioquia',
      },
      {
        nombre: 'Zvi Daniel Grosman',
        cargo: 'Diseñador instruccional',
        centro: 'Centro Agropecuario La Granja <br>Regional Tolima',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Revisora metodológica y pedagógica',
        centro:
          'Centro para la Industria de la Comunicación Gráfica <br>Regional Distrito Capital',
      },
      {
        nombre: 'José Gabriel Ortiz Abella',
        cargo: 'Corrector de estilo',
        centro:
          'Centro para la Industria de la Comunicación Gráfica <br>Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios <br>Regional Tolima',
      },
      {
        nombre: 'Juan Carlos Tapias Rueda',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios <br>Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Caceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodriguez Rodriguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'José Jaime Luis Tang Pinzón',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'John Jairo Arciniegas González',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Andrea Paola Botello De la Rosa',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Andres Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Yuli Marcela Gómez Tarazona',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios <br>Regional Tolima',
      },
    ],
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
