<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 3
        h1 Técnicas de servicio al cliente
  
      p Ahora veamos diferentes técnicas y conceptos, que debemos conocer y aplicar para una asertiva atención al cliente:
  
      separador
      #t_3_1.titulo-segundo.mb-5
        h2 3.1 Comunicación asertiva
  
      .row.justify-content-center.align-items-center.mb-5
        .col-sm-12.col-md-12.col-lg-8
          p Históricamente el hombre ha sido un ser social y necesita comunicarse, porque es importante relacionarse con los demás. La comunicación es un acto que el individuo establece con otro, este contacto le permite dar a conocer su pensamiento y sentimiento. 
          .cajon.color-primario.p-4.mb-4
            p Es importante decir que uno de los aspectos fundamentales, es la comunicación asertiva cuyo objetivo es poder expresarse de manera respetuosa, sincera, sencilla y exponiendo lo que se quiere. Para que esto se cumpla es necesario tener la habilidad de hacerlo sin hacer daño a nadie. 
        .col-8.col-md-8.col-lg-4
          img.p-2(src='@/assets/curso/temas/tema3/imagen1.png', alt='')
  
      .mb-4.d-flex.ps-lg-0
        .d-flex.flex-wrap.align-items-center.pe-3.bg-img-blue
          h3.col.px-4.mb-0.mx-5.text-white(data-aos="zoom-in-left") Características de la comunicación asertiva
          img.icon(src='@/assets/curso/temas/icon.svg') 
  
      .row.justify-content-center.mb-5.mt-5(data-aos="zoom-in-left")
        .col-sm-12.col-md-6.col-lg-3.mb-cus
          .tarjeta-avatar
            img.p-3(src='@/assets/curso/temas/tema3/tarava1-1.png')
            .tarjeta.bgrosado.w-100
              .p-4.text-center
                p.mb-0.text-center Trata de mostrar los deseos o necesidades que una persona anhela, pero siempre de manera educada y honesta.
        .col-sm-12.col-md-6.col-lg-3.mb-cus
          .tarjeta-avatar
            img.p-3(src='@/assets/curso/temas/tema3/tarava1-2.png')
            .tarjeta.bgrosado.w-100
              .p-4.text-center
                p.mb-0.text-center Se deben evitar los reproches personales, los ataques constantes o recurrir a informaciones hirientes que desacrediten a un individuo.
        .col-sm-12.col-md-6.col-lg-3.mb-cus
          .tarjeta-avatar
            img.p-3(src='@/assets/curso/temas/tema3/tarava1-3.png')
            .tarjeta.bgrosado.w-100
              .p-4.text-center
                p.mb-0.text-center No es una comunicación pasiva o que impida exponer lo que verdaderamente se desea. La diferencia en este tipo de comunicación es que se expresa con honestidad, respeto y escogiendo las palabras más adecuadas para no generar conflicto.
        .col-sm-12.col-md-6.col-lg-3.mb-cus
          .tarjeta-avatar
            img.p-3(src='@/assets/curso/temas/tema3/tarava1-4.png')
            .tarjeta.bgrosado.w-100
              .p-4.text-center
                p.mb-0.text-center Busca el equilibrio para manifestar la opinión que uno tiene sin menospreciar a los demás. 
  
      .mb-4.mt-4.d-flex.ps-lg-0
        .d-flex.flex-wrap.align-items-center.pe-3.bg-img-blue
          h3.col.px-4.mb-0.mx-5.text-white(data-aos="zoom-in-left") Técnicas de la comunicación asertiva
          img.icon(src='@/assets/curso/temas/icon.svg') 
      
      p.mb-5.mt-5 Teniendo en cuenta la importancia de la comunicación asertiva, se enumeran algunas técnicas para mejorarla, pueden ser especialmente útiles en el trabajo:
  
      .row.justify-content-center.align-items-center.mb-5
        .col-8.col.md-8.col-lg-4
          img.p-2(src='@/assets/curso/temas/tema3/imagen2.png', alt='')
        .col-sm-12.col-md-12.col-lg-8
          .row.justify-content-center.align-items-center.mb-2.bgazulclaro.borde-redondo
            ul.lista-ul.mb-0.p-3
              li.d-flex.mb-0
                i.fas.fa-check-circle.texto-azul
                p.mb-0 La escucha activa es muy importante para atender la información y el mensaje que nos transmite la persona con la que se está conversando.
          .row.justify-content-center.align-items-center.mb-2.bgazulclaro.borde-redondo
            ul.lista-ul.mb-0.p-3
              li.d-flex.mb-0
                i.fas.fa-check-circle.texto-azul
                p.mb-0 Es muy importante hablar en primera persona para exponer lo que uno siente, esto evita echar la culpa de manera constante a alguien, sin asumir también las responsabilidades propias.
          .row.justify-content-center.align-items-center.mb-2.bgazulclaro.borde-redondo
            ul.lista-ul.mb-0.p-3
              li.d-flex.mb-0
                i.fas.fa-check-circle.texto-azul
                p.mb-0 Nos debemos comunicar sin exponer juicios de valor. No se recomienda en ninguna circunstancia juzgar ni señalar a alguien, ya que eso impide que se pueda poner en práctica una comunicación asertiva.
          .row.justify-content-center.align-items-center.bgazulclaro.borde-redondo
            ul.lista-ul.mb-0.p-3
              li.d-flex.mb-0
                i.fas.fa-check-circle.texto-azul
                p.mb-0 Debe argumentar en lugar de exigir o reclamar en primera instancia. Es muy importante exponer las razones, motivos y argumentos que den valor a la comunicación. 
  
      separador
      #t_3_2.titulo-segundo.mb-5
        h2 3.2 Comunicación verbal y no verbal
      
      p.mb-5.mt-5 Para hablar de comunicación verbal y no verbal se hace necesario repasar el proceso de comunicación, recordando sus elementos:
  
      .row.justify-content-center.align-items-center
        .col-lg-8
            ImagenInfografica.color-acento-botones.mb-5
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/temas/tema3/info1.png', alt='', style='')
  
              .tarjeta.color-acento-botones.p-4(x="66%" y="8%" numero="+" style='border-radius: 8px; background-color: #F7CAC3')
                h5.mb-3.text-center Mensaje
                p.mb-0.text-center El contenido se refiere a lo que se desea comunicar.
  
              .tarjeta.color-acento-botones.p-4(x="35%" y="35%" numero="+" style='border-radius: 10px; background-color: #F7CAC3')
                h5.mb-3.text-center Código
                p.mb-0.text-center El lenguaje se refiere a los códigos; palabras, signos escritos, gestos. Las respuestas  se tornan confusas y  provocan  disfunciones.
  
              .tarjeta.color-acento-botones.p-4(x="96%" y="30%" numero="+" style='border-radius: 10px; background-color: #F7CAC3')
                h5.mb-3.text-center #[em FEED-BACK] (retroalimentación)
                p.mb-0.text-center Es la respuesta al mensaje para confirmar que la comunicación va bien.
  
              .tarjeta.color-acento-botones.p-4(x="60%" y="35%" numero="+" style='border-radius: 10px; background-color: #F7CAC3')
                h5.mb-3.text-center Receptor
                p.mb-0.text-center Es la persona que recibe la información de otros.
  
              .tarjeta.color-acento-botones.p-4(x="35%" y="70%" numero="+" style='border-radius: 10px; background-color: #F7CAC3')
                h5.mb-3.text-center Barreras
                p.mb-0.text-center Se refiere a las actitudes personales, prejuicios, ruidos, no ser el momento adecuado que dificultan la comunicación.
  
              .tarjeta.color-acento-botones.p-4(x="5%" y="38%" numero="+" style='border-radius: 10px; background-color: #F7CAC3')
                h5.mb-3.text-center Emisor
                p.mb-0.text-center Es la persona que emite la información a otros.
  
              .tarjeta.color-acento-botones.p-4(x="56%" y="77%" numero="+" style='border-radius: 10px; background-color: #F7CAC3')
                h5.mb-3.text-center Canal
                p.mb-0.text-center El vehículo que transporta el mensaje entre el emisor y el receptor que puede ser oral, escrito o gestual.
  
      p.mb-5 Luego de ver el proceso de comunicación y sus elementos compositivos, analicemos las categorías de la comunicación humana, las cuales se dividen en dos: 
  
      .tarjeta--container.row.align-items-center.justify-content-center
        .col-lg-4.tarjeta.bgazulclaro.p-5
          .row.justify-content-center.mb-4
            h4.text-center Comunicación verbal
            .col-6
              figure
                img(src='@/assets/curso/temas/tema3/tar1-1.png', alt='Texto que describa la imagen')
          p.mb-5 Es en la que interviene la utilización de la palabra y se divide en:
          ul.lista-ul.mb-0
            li.d-flex.mb-4
              i.fas.fa-check-circle.texto-azul
              p.mb-0 Oral.
            li.d-flex.mb-3
              i.fas.fa-check-circle.texto-azul
              p.mb-0 Escrita.
        .col-lg-4.tarjeta.bgrosado.p-5
          .row.justify-content-center.mb-2
            h4.text-center Comunicación no verbal
            .col-6
              figure
                img(src='@/assets/curso/temas/tema3/tar1-2.png', alt='Texto que describa la imagen')
          p.mt-4 Se considera que el 55 % de nuestra comunicación es gestual, en este tipo de comunicación se utilizan los gestos, el contacto visual, la postura del cuerpo, el movimiento de las manos, esta comunicación es efectiva cuando los mensajes verbales y no verbales coinciden.
  
      separador
      #t_3_3.titulo-segundo.mb-5
        h2 3.3 Pautas de actuación
  
      p Es muy importante que a la hora de atender una llamada entrante o de actuar ante la generación de un requerimiento, es necesario tener presentes las siguientes pautas de actuación y actuar de acuerdo con ellas:
  
      .row.mb-3
        .col-lg-4.col-xl.mb-4.mb-xl-0
          .tarjeta-numerada.color-acento-contenido.p-5
            .tarjeta-numerada__numero
              .h2 a
            p.mb-0 Se requiere en las pautas de actuación atender siempre la llamada de forma relajada sin perder la calma y transmitiendo seguridad y confianza a la persona usuaria del servicio.
  
        .col-lg-4.col-xl.mb-4.mb-xl-0
          .tarjeta-numerada.color-acento-contenido.p-5
            .tarjeta-numerada__numero
              .h2 b
            p.mb-5 Tener en cuenta siempre los protocolos de presentación y despedida que existan en la empresa.
  
        .col-lg-4.col-xl.mb-4.mb-xl-0
          .tarjeta-numerada.color-acento-contenido.p-5
            .tarjeta-numerada__numero
              .h2 c
            p.mb-5.mt-4 Aplicar los protocolos de actuación y de atención de llamadas adecuadamente.
        
      .row
        .col-lg-4.col-xl.mb-4.mb-xl-0
          .tarjeta-numerada.color-acento-contenido.p-5
            .tarjeta-numerada__numero
              .h2 d
            p.mb-0 Pensar y actuar con rapidez sin tomar decisiones de manera precipitada y que por consiguiente puedan resultar inoportunas o inadecuadas.
  
        .col-lg-4.col-xl.mb-4.mb-xl-0
          .tarjeta-numerada.color-acento-contenido.p-5
            .tarjeta-numerada__numero
              .h2 e
            p.mb-4 Los criterios de selección y utilización de las pautas de actuación deben hacerse con lógica y responsabilidad.
  
        .col-lg-4.col-xl.mb-4.mb-xl-0
          .tarjeta-numerada.color-acento-contenido.p-5
            .tarjeta-numerada__numero
              .h2 f
            p.mb-5 En el uso de las pautas de actuación se debe ser cercano, afectuoso y tranquilizador en el trato.
  
      p.mt-5 Teniendo en cuenta las pautas, resulta muy importante actuar de acuerdo con las técnicas y habilidades de carácter comunicativo y adecuado, utilizando el mensaje con las características y necesidades de la persona usuaria y de la situación entre sí.
  
      separador
      #t_3_4.titulo-segundo.mb-5
        h2 3.4 Ciclo de servicio
  
      .row.justify-content-center.align-items-center.mb-5
        .col-sm-12.col-md-12.col-lg-8
          p Es una herramienta muy efectiva para la Gerencia del Servicio, esta refleja un proceso ordenado de todos los contactos que tiene el cliente con la organización, lo cual se manifiesta con la satisfacción en la prestación del servicio o la insatisfacción del servicio prestado.
          .cajon.color-primario.p-4.mb-4
            p Cuando pensamos en los ciclos del servicio nos ponemos en los zapatos del cliente y podemos percibir la calidad de servicio que este recibe. Cada momento de verdad se puede representar gráficamente y la responsabilidad del ciclo del servicio, les corresponde a los empleados y directivos encargados de la prestación del servicio.
          p A continuación, se ilustra un ejemplo de un ciclo basado en la calidad del servicio:
        .col-8.col-md-8.col-lg-4.d-none.d-lg-block
          img(src='@/assets/curso/temas/tema3/imagen3.png', alt='')
  
      .row.justify-content-center.align-items-center.mb-5
        .col-8.col-md-8.col-lg-4
          img(src='@/assets/curso/temas/tema3/imagen4.png', alt='')
        .col-sm-12.col-md-12.col-lg-8
          .row.bgrosado2.p-4.borde-redondo-arriba
            h4 Bienvenida
            .col-sm-12.col-md-2.col-lg-2
              p #[b Saludo:]
            .col-sm-12.col-md-3.col-lg-3
              ul.lista-ul.mb-0
                li.d-flex.mb-0
                  i.fas.fa-check-circle.texto-naranja
                  p.mb-0 Buenos días.
            .col-sm-12.col-md-3.col-lg-3
              ul.lista-ul.mb-0
                li.d-flex.mb-0
                  i.fas.fa-check-circle.texto-naranja
                  p.mb-0 Buenas tardes.
            .col-sm-12.col-md-2.col-lg-2
              ul.lista-ul.mb-0
                li.d-flex.mb-0
                  i.fas.fa-check-circle.texto-naranja
                  p.mb-0 Buenas noches.
            .col-sm-12.col-md-2.col-lg-2
              ul.lista-ul.mb-0
                li.d-flex.mb-0
                  i.fas.fa-check-circle.texto-naranja
                  p.mb-0 Es un gusto atenderlo.
          .row.bgrosado.p-4
            h4 Rostro agradable
            .col-sm-12.col-md-2.col-lg-2
              ul.lista-ul.mb-0
                li.d-flex.mb-0
                  i.fas.fa-check-circle.texto-naranja
                  p.mb-0 Sonrisa.
            .col-sm-12.col-md-2.col-lg-2
              ul.lista-ul.mb-0
                li.d-flex.mb-0
                  i.fas.fa-check-circle.texto-naranja
                  p.mb-0 Empatía.
            .col-sm-12.col-md-6.col-lg-6
              ul.lista-ul.mb-0
                li.d-flex.mb-0
                  i.fas.fa-check-circle.texto-naranja
                  p.mb-0 Alegría de poderle colaborar.
          .row.bgnaranja.p-4
            h4 El cliente es prioridad
            .col-sm-12.col-md-3.col-lg-3
              ul.lista-ul.mb-0
                li.d-flex.mb-0
                  i.fas.fa-check-circle.text-white
                  p.mb-0 Mirar a los ojos.
            .col-sm-12.col-md-6.col-lg-6
              ul.lista-ul.mb-0
                li.d-flex.mb-0
                  i.fas.fa-check-circle.text-white
                  p.mb-0 Siempre la atención puesta en el cliente.
          .row.bgnaranjaoscuro.p-4
            h4.text-white Responder inquietudes
            .col-sm-12.col-md-5.col-lg-5
              ul.lista-ul.mb-0
                li.d-flex.mb-0
                  i.fas.fa-check-circle.text-white
                  p.mb-0.text-white Agradecer que todo esté claro.
            .col-sm-12.col-md-6.col-lg-6
              ul.lista-ul.mb-0
                li.d-flex.mb-0
                  i.fas.fa-check-circle.text-white
                  p.mb-0.text-white Preguntar si se puede colaborar en algo más.
          .row.bgnaranjaoscuro2.p-4.borde-redondo-abajo
            h4.text-white Despedida
            .col-sm-12.col-md-5.col-lg-5
              ul.lista-ul.mb-0
                li.d-flex.mb-0
                  i.fas.fa-check-circle.text-white
                  p.mb-0.text-white Esperar a volver a verlo pronto.
            .col-sm-12.col-md-6.col-lg-6
              ul.lista-ul.mb-0
                li.d-flex.mb-0
                  i.fas.fa-check-circle.text-white
                  p.mb-0.text-white Agradecer su visita.
  
      separador
      #t_3_5.titulo-segundo.mb-5
        h2 3.5 Triángulo de servicio
  
      p El cliente es el eslabón más importante del triángulo del servicio, las estrategias y los actores de la empresa deben girar en torno a las motivaciones y necesidades del cliente.
      p Las tácticas que cada empresa fija deben ser estratégicas para poder cumplir con el propósito y razón de ser de la empresa. Esto garantiza que se prestará un servicio de calidad.
     
      .row.justify-content-center.align-items-center.mb-5
        .col-12.col-md-8.col-lg-6
          .titulo-sexto.color-acento-contenido
            h5 Figura 1. 
            | El triángulo del servicio
          img(src='@/assets/curso/temas/tema3/imagen5.svg', alt='El triángulo del servicio destaca la interacción entre tres elementos esenciales: los colaboradores que prestan el servicio, los sistemas que facilitan su ejecución, y la estrategia de servicio que guía el enfoque y los objetivos. Estos componentes deben estar alineados para asegurar una experiencia de servicio eficiente y satisfactoria.')
      
      .row.justify-content-center.align-items-center.mb-5
        .col-sm-12.col-md-12.col-lg-8
          .cajon.color-primario.p-4.mb-4
            p Los colaboradores de la empresa son los que deben conocer, entender y aplicar la promesa de servicio al cliente, ellos son los que tienen el contacto directo con el usuario o cliente y deben estar capacitados en atención al cliente con el fin de ofrecer un servicio de calidad. 
          p Las herramientas de los sistemas físicos y técnicos que tienen los empleados para prestar el servicio deben ser fáciles de manejar tanto para el colaborador como para el cliente.
        .col-8.col-md-8.col-lg-4  
          img(src='@/assets/curso/temas/tema3/imagen6.png', alt='')
  
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
