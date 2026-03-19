<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 5
        h1 Satisfacción del cliente
      
      .row.justify-content-center.mb-5
        .col-lg-10
          .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5
            .bloque-texto-g__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema5/imagen1.png')})`}")
            .bloque-texto-g__texto.p-4
              p.mb-0 La responsabilidad de las empresas en la satisfacción del cliente es fundamental para el éxito a largo plazo y debe integrarse en el concepto de calidad total. Adoptar un enfoque de calidad total centrado en el usuario no solo mejora la satisfacción del mismo, sino que también puede aumentar la lealtad, la reputación de la marca y, en última instancia, la rentabilidad de la empresa.
  
      p.mb-5 Para lograr la satisfacción total del cliente es necesario hacer lo siguiente:
  
      .row.justify-content-center.align-items-center.mb-5
        .col-8.col-md-8.col-lg-4
          img(src='@/assets/curso/temas/tema5/imagen2.png', alt='')
        .col-sm-12.col-md-12.col-lg-8
          ol.lista-ol--cuadro.lista-ol--separador.fa-ol
            li 
              .lista-ol--cuadro__vineta
                span.text-black #[b a]
              span.mb-0 Siempre hay que identificar las necesidades, deseos y expectativas de los clientes. 
            li 
              .lista-ol--cuadro__vineta
                span.text-black #[b b]
              span.mb-0 Planificar el servicio en función de las necesidades, manifestando y exponiendo al cliente las posibilidades existentes que tiene la organización comercial para cubrir sus necesidades y expectativas cumpliendo con los requerimientos exigidos. 
            li 
              .lista-ol--cuadro__vineta
                span.text-black #[b c]
              span.mb-0 Se debe prestar el servicio de acuerdo con lo diseñado en función de los requerimientos y con los procesos acordados. 
            li 
              .lista-ol--cuadro__vineta
                span.text-black #[b d]
              span.mb-0 Se debe evaluar la prestación del servicio teniendo en cuenta las medidas internas y externas a través de indicadores y parámetros del servicio de calidad. 
            li 
              .lista-ol--cuadro__vineta
                span.text-black #[b e]
              span.mb-0 Para las organizaciones es importante tramitar las quejas y los clientes perdidos dando respuesta inmediata a la queja y buscando estrategias para recuperación de clientes prometiéndoles una solución a su insatisfacción.  
            li
  
      .mb-4.d-flex.ps-lg-0
        .d-flex.flex-wrap.align-items-center.pe-3.bg-img-blue
          h3.col.px-4.mb-0.mx-5.text-white(data-aos="zoom-in-left") La medición de la satisfacción del cliente
          img.icon(src='@/assets/curso/temas/icon.svg') 
      
      p.mb-3 La encuesta es una herramienta muy útil, esta se usa para escuchar la voz del cliente y, por tanto, su opinión respecto al servicio que recibe. Las encuestas pueden ser cualitativas y cuantitativas. 
  
      .row.justify-content-center.mb-5(data-aos="zoom-in-left")
        .col-sm-12.col-md-12.col-lg-6.mb-cus
          .tarjeta-avatar
            img(src='@/assets/curso/temas/tema5/tarava1-1.png')
            .tarjeta.bgrosado.w-100
              .p-5
                h4.text-center Encuestas cualitativas
                p Información, encuestas e investigaciones cualitativas. Veamos un ejemplo:
                p #[b De relación:] son encuestas que se realizan directamente, a través de una entrevista con el cliente. Es el caso de las entrevistas en profundidad, se realizan visitando al cliente en donde él indique. 
                p.mb-4 Pasos para seguir en el caso de dicha entrevista formal con el cliente: 
                ol.lista-ol--cuadro.lista-ol--separador.fa-ol
                  li 
                    .lista-ol--cuadro__vineta
                      span.text-black #[b a]
                    span.mb-0 Se concierta una entrevista, dando como excusa, por ejemplo, que se está haciendo una auditoría de calidad.
                  li 
                    .lista-ol--cuadro__vineta
                      span.text-black #[b b]
                    span.mb-0 Se pregunta al cliente qué quiere que se le pregunte.  
                  li 
                    .lista-ol--cuadro__vineta
                      span.text-black #[b c]
                    span.mb-0 Se determinan los atributos, pidiendo su valoración. Se señalan los puntos fuertes y débiles y, finalmente, se le pide que otorgue un orden de prioridad.
                  li 
        .col-sm-12.col-md-12.col-lg-6.mb-cus
          .tarjeta-avatar
            img(src='@/assets/curso/temas/tema5/tarava1-2.png')
            .tarjeta.bgrosado.w-100
              .p-5
                h4.text-center Encuestas cuantitativas
                p Este tipo de encuesta está enfocada al análisis de la percepción de un número elevado de clientes, utilizando principalmente encuestas telefónicas o por correo electrónico.
                p Se debe tener en cuenta para realizar este tipo de encuestas el diseño de las preguntas o afirmaciones que se van a constatar, también es recomendable aplicarla a un número pequeño de clientes como prueba piloto para después verificar si es procedente aplicarla a una muestra significativa de clientes.
                p.bgrosado2.borde-redondo.p-3 Cuando vaya a hacer una entrevista, las preguntas tienen que ser breves y estar redactadas con mucho tacto. La encuesta telefónica tiene la ventaja sobre las encuestas por correo de que el porcentaje de respuestas es muy superior.
  
      separador
      #t_5_1.titulo-segundo.mb-5
        h2 5.1 Trazabilidad del servicio
  
      p.mb-4 La trazabilidad del servicio es el seguimiento o sondeo que se hace del producto o servicio según los procedimientos establecidos con el fin de conocer la ubicación y trayectoria del producto o servicio a lo largo de la cadena logística para lo cual se utilizan algunas herramientas, la trazabilidad es la capacidad de reconstruir la historia y recorrido de un producto o servicio.
  
      .row.justify-content-center(data-aos="zoom-in-left")
        .col-sm-12.col-md-12.col-lg-12
          .titulo-sexto.color-acento-contenido
            h5 Figura 2. 
            | Trazabilidad
          figure
            img(src='@/assets/curso/temas/tema5/imagen3.svg', alt='La imagen representa un ciclo de trazabilidad dentro de una cadena de suministro. Comienza con la obtención de materias primas, que son transportadas a los procesadores. Luego, los productos son enviados a centros de distribución, desde donde se transportan hacia puntos de venta. El ciclo resalta el flujo continuo entre transporte, procesadores, distribución y venta, garantizando la trazabilidad en cada etapa.')
  
      p.mb-4.mt-5 Se debe tener en cuenta lo siguiente:
  
      .row.justify-content-center.align-items-center.mb-5
        .col-sm-12.col-md-12.col-lg-8
          .row.bgrosado.borde-redondo.mb-2.p-2
            ul.lista-ul.mb-0.p-3
              li.d-flex.mb-0
                i.fas.fa-corneta
                p.mb-0 #[b Origen de componentes y circunstancias:] información sobre el origen de los componentes del producto, las circunstancias relacionadas con el mismo, o las situaciones específicas del servicio.
          .row.bgrosado.borde-redondo.mb-2.p-2
            ul.lista-ul.mb-0.p-3
              li.d-flex.mb-0
                i.fas.fa-corneta
                p.mb-0 #[b Historia de procesos y procedimientos:] detalle sobre la historia de los procesos o procedimientos aplicados al producto o al servicio.
          .row.bgrosado.borde-redondo.mb-2.p-2
            ul.lista-ul.mb-0.p-3
              li.d-flex.mb-0
                i.fas.fa-corneta
                p.mb-0 #[b Distribución, monitoreo y servicio posventa:] información sobre la distribución y el monitoreo de la entrega del producto o servicio, así como sobre el servicio posventa y la satisfacción del cliente.
          .row.bgrosado.borde-redondo.mb-2.p-2
            ul.lista-ul.mb-0.p-3
              li.d-flex.mb-0
                i.fas.fa-corneta
                p.mb-0 #[b Análisis de seguimiento:] análisis del seguimiento del producto, servicio, o de bienes sustitutos o complementarios.
        .col-8.col.md-8.col-lg-4
          img(src='@/assets/curso/temas/tema5/imagen5.png', alt='Texto que describa la imagen')
  
      p.mb-4 Teniendo en cuenta esta información se hace posible la entrega de productos o servicios a mercados específicos garantizando con certeza el origen y la historia de estos, la trazabilidad se asocia a procesos y procedimientos 
  
      .row.justify-content-center.align-items-center.mb-5
        .col-sm-12.col-md-12.col-lg-8
          .cajon.color-primario.p-4.mb-4
            p Gracias a la información, es posible entregar productos y servicios definidos a mercados específicos, con la garantía de conocer con certeza el origen y la historia de este. La trazabilidad está asociada, sin duda, a procesos y procedimientos competitivos modernos y a productos y servicios de mayor calidad y valor para el cliente final.
  
      .mb-4.d-flex.ps-lg-0
        .d-flex.flex-wrap.align-items-center.pe-3.bg-img-blue
          h3.col.px-4.mb-0.mx-5.text-white(data-aos="zoom-in-left") Fases de la trazabilidad
          img.icon(src='@/assets/curso/temas/icon.svg') 
  
      p.mb-4 Veamos a continuación las tres fases del proceso de trazabilidad:
  
      .row.justify-content-center
        .col-lg-10
          PasosA.color-acento-contenido.mb-5(tipo="l")
            .row.align-items-center
              .col-auto
                figure(data-aos="zoom-in")
                  img(src='@/assets/curso/temas/tema5/imgpaso1-1.png', alt='').img125
              .col-lg
                h3 Trazabilidad ascendente
                p Este tipo de trazabilidad es también llamada trazabilidad hacia atrás, esta es la trazabilidad que se dedica al conocimiento del origen de una materia prima al detalle, se dedica al control de todos los productos que se reciben a los proveedores, se trata de conocer de quién se reciben las materias primas, cuando se reciben y de verificar la información del número de lote del proveedor y los controles sanitarios cuando se requieran, en todo caso es fundamental el registro del producto.
            .row.align-items-center
              .col-lg
                h3 Trazabilidad de procesos
                p Este segundo proceso o clase de trazabilidad, que también se conoce como trazabilidad interna, es la que tiene que ver con el proceso interno de transformación de la materia prima, se refiere a la producción dentro de las instalaciones de la empresa, lo importante es conocer cuándo se ha mezclado el producto con otros, en qué cantidades, cuál ha sido el resultado, a partir de qué materias se ha fabricado y cuál es el producto final.
              .col-auto
                figure(data-aos="zoom-in")
                  img(src='@/assets/curso/temas/tema5/imgpaso1-2.png', alt='').img125
            .row.align-items-center
              .col-auto
                figure(data-aos="zoom-in")
                  img(src='@/assets/curso/temas/tema5/imgpaso1-3.png', alt='').img125
              .col-lg
                h3 Trazabilidad descendente
                p Este tipo de trazabilidad también llamada hacia adelante, se concentra en los productos preparados para su despacho, también se refiere a distribución o entrega del producto al cliente final, en este proceso se hace el monitoreo al transporte, se debe tener en cuenta la fecha de salida del producto, número de lote, cantidad de producto, dirección final del cliente, los posibles inconvenientes que se puedan presentar y el estado en que se hace la entrega.
  
      separador
      #t_5_2.titulo-segundo.mb-5
        h2 5.2 Tipos de herramientas de evaluación de satisfacción del cliente
      
      p.mb-4 Existen infinidad de herramientas para la evaluación de la satisfacción del cliente a continuación, se exponen los dos métodos más comunes para medir la satisfacción del cliente:
  
      .mb-5.d-flex.ps-lg-0
        .d-flex.flex-wrap.align-items-center.pe-3.bg-img-blue
          h3.col.px-4.mb-0.mx-5.text-white(data-aos="zoom-in-left") Estudios de mercado
          img.icon(src='@/assets/curso/temas/icon.svg') 
  
      .row.justify-content-center.align-items-center.mb-5
        .col-8.col-md-8.col-lg-4
          img.p-1(src='@/assets/curso/temas/tema5/imagen6.png', alt='')
        .col-sm-12.col-md-12.col-lg-4
          p.bgrosado.borde-redondo.p-3 Hay que tener en cuenta que para posicionar un producto en el mercado se debe estudiar si hay demanda, existe mucha información sobre estudio de mercado, este estudio cobra importancia porque analiza la satisfacción del cliente ya que permite averiguar si el producto le puede interesar al cliente objetivo, una pregunta que se debe hacer en este estudio es que precio está dispuesto a pagar el cliente o usuario por el producto o servicio. 
  
      .mb-5.d-flex.ps-lg-0
        .d-flex.flex-wrap.align-items-center.pe-3.bg-img-blue
          h3.col.px-4.mb-0.mx-5.text-white(data-aos="zoom-in-left") Encuestas de satisfacción del cliente
          img.icon(src='@/assets/curso/temas/icon.svg') 
  
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-10
          .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5
                .bloque-texto-g__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema5/imagen7.png')})`}")
                .bloque-texto-g__texto.p-4
                  p.mb-0 En la historia reciente las encuestas no son muy bien recibidas ya que, debido a que la norma ISO 9001 obliga a todas las empresas medir la satisfacción del cliente, esto ha obligado a que las empresas envíen por correo la encuesta a los clientes, esta forma de encuesta no es efectiva porque según las estadísticas solamente el 5 % de los encuestados responde las preguntas, son efectivas en el sentido que podemos hacer un análisis y darnos cuenta de aspectos que no hemos tenido en cuenta para la satisfacción del cliente. 
  
      p.mb-4 Consultando las siguientes normas, se puede obtener una buena información en las encuestas:
  
      .row.justify-content-center.align-items-center.mb-5
        .col-sm-12.col-md-12.col-lg-8
          ol.lista-ol--cuadro.lista-ol--separador.fa-ol
            li 
              .lista-ol--cuadro__vineta
                span.text-black #[b a]
              span.mb-0 Realice una buena segmentación de clientes, es un error enviar la misma encuesta a trabajadores que desempeñan diferentes funciones y no se conocen entre ellos, es importante elaborar diferentes encuestas teniendo en cuenta el tamaño de la empresa. No las envíe la encuesta a la vez, hay que tomarse el tiempo y hacerlo por separado.
            li 
              .lista-ol--cuadro__vineta
                span.text-black #[b b]
              span.mb-0 Cree una segmentación por departamentos ya que pueden salir preguntas por cada uno de ellos, las probabilidades de que no contesten las encuestas son grandes ya que si se asigna a una sola persona que vaya a cada uno de los departamentos no esté dispuesta a ir por toda la empresa y no se sacaría una buena muestra, además las posibilidades de que se pierda el documento por el camino son elevadas, lo recomendable es que se asigne a una persona por departamento para la aplicación de la encuesta.
            li 
              .lista-ol--cuadro__vineta
                span.text-black #[b c]
              span.mb-0 Primero se deben hacer preguntas generales, en las siguientes encuestas profundice en los temas que provocaron diferencias en la opinión, si después de aplicar la primera encuesta obtiene una buena puntuación no hace falta realizar otra .
            li 
              .lista-ol--cuadro__vineta
                span.text-black #[b d]
              span.mb-0 Haga encuestas telefónicas siempre que pueda y tenga los medios adecuados. Los usuarios o clientes siempre estarán más dispuestos a contestar a una persona que a un frío papel.  
            li 
        .col-10.col-md-6.col-lg-4
          img.p-2(src='@/assets/curso/temas/tema5/imagen8.png', alt='')
  
      separador
      #t_5_3.titulo-segundo.mb-5
        h2 5.3 Trámite de PQRS
  
      p.mb-4 Optimizar el sistema PQRS (Sistema de atención de Peticiones, Quejas, Reclamos y Sugerencias). Implica tener un proceso estructurado para recibir, evaluar, responder y hacer seguimiento de cada una de estas categorías. También requiere capacitación del personal, uso de tecnología adecuada para gestionar la información y un enfoque en la mejora continua. Un buen sistema PQRS no solo resuelve problemas, sino que también contribuye a una mejor experiencia para los clientes y a la mejora general de la organización.
  
      .row.justify-content-center.mb-5
        .col-lg-3.col-md-6.col-12.mb-4.mb-xl-0
          .crd_hover_txt(data-aos="fade-left").borde-redondo
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/tema5/tar1-1.png", alt="alt")
            .crd_hover_txt--body.cambio
              h4.mb-3.text-center Peticiones
              p.mb-0.text-center.text-white Es la solicitud o requerimiento de una acción o atención. Las peticiones se encuentran enmarcadas dentro del Derecho de Petición consagrado en el Código Contencioso Administrativo, en el cual se dicta un tratamiento especial e independiente, las empresas deben resolver las peticiones dentro de los 15 días siguientes a la fecha de recibo.
  
        .col-lg-3.col-md-6.col-12.mb-4.mb-xl-0
          .crd_hover_txt(data-aos="fade-left").borde-redondo
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/tema5/tar1-2.png", alt="alt")
            .crd_hover_txt--body.cambio
              h4.mb-3.text-center Quejas
              p.mb-0.text-center.text-white Son las expresiones de inconformidad por parte del cliente interno como del cliente externo, las quejas se colocan por algo o alguien en una institución por la inadecuada prestación de un servicio público o privado.
  
        .col-lg-3.col-md-6.col-12.mb-4.mb-xl-0
          .crd_hover_txt(data-aos="fade-left").borde-redondo
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/tema5/tar1-3.png", alt="alt")
            .crd_hover_txt--body.cambio
              h4.mb-3.text-center Reclamos
              p.mb-0.text-center.text-white Pruebas que se exponen por una actuación considerada injusta, con un reclamo se exigen los derechos del cliente o usuario relacionados con la inadecuada prestación de los servicios que se ofrecen al cliente interno y al cliente externo.
  
        .col-lg-3.col-md-6.col-12.mb-4.mb-xl-0
          .crd_hover_txt(data-aos="fade-left").borde-redondo
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/tema5/tar1-4.png", alt="alt")
            .crd_hover_txt--body.cambio
              h4.mb-3.text-center Sugerencias
              p.mb-0.text-center.text-white Es una recomendación o comunicación de una idea o propuesta para mejorar el servicio o la gestión de la entidad.
  
      separador
      #t_5_4.titulo-segundo.mb-5
        h2 5.4 Registro de la información
  
      p.mb-4 El proceso de la información se refiere a las actividades que deben estar contempladas en un plan de trabajo de acuerdo con los requerimientos de información. Explore el ciclo de la información:
  
      .row.justify-content-center(data-aos="zoom-in-left")
        .col-sm-12.col-md-12.col-lg-8
          .titulo-sexto.color-acento-contenido
            h5 Figura 3. 
            | Ciclo de la información
          figure
            img.mb-4(src='@/assets/curso/temas/tema5/imagen9.svg', alt='La imagen ilustra un ciclo de información dividido en cinco etapas. El proceso comienza con la recolección de datos, seguido por la evaluación de la información obtenida. Luego, se procede a tratar los datos, para después analizarlos detalladamente. Finalmente, el ciclo concluye con la difusión de los resultados, completando el flujo de gestión de información.')
          .cajon.color-primario.p-4.mb-4
            p Teniendo en cuenta lo anterior, debemos saber que la misión de la información es abarcar el control de calidad, la recopilación, el archivo y la accesibilidad a largo plazo a los datos recogidos y sus metadatos asociados.  
      
      p.mt-4.mb-4 La entrega de información y cumplimiento de requisitos para informes específicos bajo acuerdos internacionales se enfrenta a desafíos ampliados debido a la disparidad en la distribución de bases de datos, la calidad variable de la información disponible y la falta de datos precisos y exactos. Estos problemas deben abordarse para garantizar que los informes cumplen con los estándares requeridos y son fiables para las partes involucradas.
  
      .mb-5.d-flex.ps-lg-0
        .d-flex.flex-wrap.align-items-center.pe-3.bg-img-blue
          h3.col.px-4.mb-0.mx-5.text-white(data-aos="zoom-in-left") Técnicas a la hora de la recolección de la información
          img.icon(src='@/assets/curso/temas/icon.svg') 
  
      p.mb-4 Por último, consulte algunas técnicas para tener en cuenta y que serán de apoyo en la recolección informativa a realizar:
  
      .row.fondo1.align-items-center.p-3(data-aos="fade-down")
        .col-lg-12.col-md-12.col-12.px-lg-5.px-4
          .row.justify-content-center.mb-4
          
          .tarjetaf.p-3.mb-4
            SlyderA(tipo="b").slider-a-custom(data-aos="zoom-in-left")
              .row.justify-content-center.p-4
                .col-lg-11
                  h4 La lectura
                  p.mb-4 Es un modo de comunicación que se basa en decodificar símbolos escritos con la idea de construir o deducir un significado.
                  img(alt="" src="@/assets/curso/temas/tema5/sly1-1.svg")
              .row.justify-content-center.p-4
                .col-lg-11
                  h4 El subrayado
                  p.mb-4 Es básicamente seleccionar y recalcar la información elemental de un tema por medio de la cual podemos comprender un texto.
                  img(alt="" src="@/assets/curso/temas/tema5/sly1-2.svg")
              .row.justify-content-center.p-4
                .col-lg-11
                  h4 Toma de notas
                  p.mb-4 Es una destreza indispensable para el investigador que se basa en anotar toda idea, conceptos o información relevante para el estudio en cuestión.
                  img(alt="" src="@/assets/curso/temas/tema5/sly1-3.svg")
              .row.justify-content-center.p-4
                .col-lg-11
                  h4 El resumen
                  p.mb-4 Es una síntesis de referente al tema en estudio la cual puede ser informativa, (objetivo, métodos, resultados) o descriptiva (descripción breve de la investigación).
                  img(alt="" src="@/assets/curso/temas/tema5/sly1-4.svg")
  
  
  </template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
