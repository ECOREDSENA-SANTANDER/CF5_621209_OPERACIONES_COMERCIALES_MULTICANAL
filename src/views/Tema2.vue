<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 2
        h1 Atender al cliente en el #[em retail]
  
      .row.justify-content-center.align-items-center
        .col-8.col.md-8.col-lg-3
          img.p-2(src='@/assets/curso/temas/tema2/imagen1.png', alt='')
        .col-sm-12.col-md-12.col-lg-5.bgazulclaro.borde-redondo
          p.mt-3.ps-3.mb-2 Para una correcta atención al cliente, es necesario tener claro:
          ul.lista-ul.mb-0.ps-3
            li.d-flex.mb-0
              i.fas.fa-check-circle.texto-azul
              p.mb-0 El conocimiento del cliente.
            li.d-flex.mb-0
              i.fas.fa-check-circle.texto-azul
              p.mb-0 La clasificación de los clientes.
            li.d-flex.mb-0
              i.fas.fa-check-circle.texto-azul
              p.mb-0 Necesidades, deseos y demanda de los clientes.
            li.d-flex.mb-0
              i.fas.fa-check-circle.texto-azul
              p.mb-0 Momentos de verdad con el cliente.
            li.d-flex.mb-0
              i.fas.fa-check-circle.texto-azul
              p.mb-0 Contingencias.
          p.ps-3.mb-2.mt-2 Conozcamos más sobre cada una de ellas.
  
      separador
      #t_2_1.titulo-segundo.mb-5
        h2 2.1 Conocer al cliente 
      
      p.mb-4 El concepto de cliente tiene un gran universo, permite plantear diferentes significados de cliente desde las distintas funciones de la empresa. Se puede considerar que la definición de cliente desde el punto de vista integral de la empresa es: el que constituye el eje principal de toda la actividad de la empresa, por lo que es la receptora final de todos los esfuerzos de esta última como organización. 
      p.mb-4 Se hace necesario para conocer al cliente, analizar el papel que cada persona juega en un proceso de compra, para así diferenciar los siguientes tipos de cliente: 
  
      .row.justify-content-center
        .col-lg-3.col-md-6.col-12.mb-4.mb-xl-0
          .crd_hover_txt(data-aos="fade-left").borde-redondo
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/tema2/tarjeta1-1.png", alt="alt")
            .crd_hover_txt--body.cambio
              h4.mb-3.text-center El que decide
              p.mb-0.text-center.text-white Es la persona que toma la decisión final sobre la compra.
  
        .col-lg-3.col-md-6.col-12.mb-4.mb-xl-0
          .crd_hover_txt(data-aos="fade-left").borde-redondo
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/tema2/tarjeta1-2.png", alt="alt")
            .crd_hover_txt--body.cambio
              h4.mb-3.text-center El que ejecuta
              p.mb-0.text-center.text-white Es la persona que realiza los trámites de compra.
  
        .col-lg-3.col-md-6.col-12.mb-4.mb-xl-0
          .crd_hover_txt(data-aos="fade-left").borde-redondo
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/tema2/tarjeta1-3.png", alt="alt")
            .crd_hover_txt--body.cambio
              h4.mb-3.text-center El que influye
              p.mb-0.text-center.text-white Es la persona que aconseja sobre la compra.
  
        .col-lg-3.col-md-6.col-12.mb-4.mb-xl-0
          .crd_hover_txt(data-aos="fade-left").borde-redondo
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/tema2/tarjeta1-4.png", alt="alt")
            .crd_hover_txt--body.cambio
              h4.mb-3.text-center El usuario
              p.mb-0.text-center.text-white Es la persona que utiliza el producto del proceso de compra.
  
      separador
      #t_2_2.titulo-segundo.mb-5
        h2 2.2 Clasificación de los clientes
  
      p.mb-4 Es una práctica común en muchas empresas para poder gestionar las relaciones de manera más efectiva, cada cliente es diferente y las relaciones que se establecen entre la empresa y los mismos dependen además de los objetivos y la forma de proceder de la empresa, así como del tipo de cliente.
      p.mb-4 El mercado clasifica los distintos tipos de clientes bajo los criterios que tienen que ver con la relación cliente - empresa. Por ejemplo, según su personalidad, el cliente puede ser: 
  
      .row.justify-content-center.align-items-center
        .col-lg-8.col-md-12.col-sm-12
          TabsA.color-acento-botones.mb-5
            .tarjeta.bgrosado.p-4(titulo="Amable")
              p Persona amable con la que es fácil entenderse y entablar una conversación; puede ser lento en la toma de decisiones.
            .tarjeta.bgrosado.p-4(titulo="Agresivo")
              p Persona de difícil trato por ser impaciente e intolerante.
            .tarjeta.bgrosado.p-4(titulo="Altivo")
              p Persona que pretende que todos estén a su servicio porque considera que es importante para la empresa.
            .tarjeta.bgrosado.p-4(titulo="Desconfiado")
              p Persona que cree que los demás lo quieren engañar; el trato con este tipo de personas es complejo.
            .tarjeta.bgrosado.p-4(titulo="Decidido")
              p Persona que toma sus decisiones con rapidez, declara abiertamente sus intenciones; son clientes fáciles de tratar.
            .tarjeta.bgrosado.p-4(titulo="Indeciso")
              p Casi siempre se hace acompañar por otra persona, desconoce o no tiene claro lo que quiere, suele ser tímido y tarda mucho en decidir.
            .tarjeta.bgrosado.p-4(titulo="Especulador")
              p Este tipo de cliente siempre busca acuerdos beneficiosos; el trato con este tipo de clientes es complejo.
            .tarjeta.bgrosado.p-4(titulo="Exigente")
              p Requiere de una atención inmediata y prioritaria; estas personas suelen ser inseguras y la mejor forma de actuar es tratarle con mucha delicadeza.
            .tarjeta.bgrosado.p-4(titulo="Discutidor")
              p Persona que piensa que tiene la razón y que rebate todos los argumentos. Se le debe tratar con cortesía, firmeza y argumentos claros.
        .col-lg-4.col-md-4.col-5
          img(src="@/assets/curso/temas/tema2/imagen2.png", alt="alt", style="width:450px;").m-auto
  
      p Esta clasificación de los clientes es específica para cada caso en función de la personalidad de cada uno, pero hay que tener claro que hay que utilizar las habilidades sociales como la empatía y asertividad; y en todo caso comportarse con respeto al tratar con cada uno de los clientes, nos darán el éxito en la atención.
      
      separador
      #t_2_3.titulo-segundo.mb-5
        h2 2.3 Necesidades, deseos y demanda de los clientes
  
      .row.justify-content-center.align-items-center.mb-5
        .col-8.col-md-8.col-lg-4
          img.p-2(src='@/assets/curso/temas/tema2/imagen3.png', alt='')
        .col-sm-12.col-md-12.col-lg-8
          p.p-5.bgazulclaro.borde-redondo.textogrande ¿Qué estimula a un cliente a querer un determinado servicio? 
          p.p-5.bgazulclaro.borde-redondo.textogrande ¿Qué inspira al cliente a adquirirlo de un determinado proveedor? 
          p Cada cliente tiene sus propias expectativas, pero estas son función de una amplia variedad de factores internos y externos. Veamos a continuación:
  
      .row.fondo1.align-items-center.p-3(data-aos="fade-down")
        .col-lg-12.col-md-12.col-12.px-lg-5.px-4
          .row.justify-content-center.mb-4
          
          .tarjetaf.p-3.mb-4
            SlyderA(tipo="b").slider-a-custom(data-aos="zoom-in-left")
              .row.justify-content-center.p-4
                .col-lg-7.col-md-12.col-sm-12
                  p.mb-4 La necesidad de un cliente es un factor que coloca sus expectativas en función de la solución que se le pueda brindar, las empresas deben organizar sus necesidades de forma mucho más complicada de lo que lo haría un cliente o una unidad familiar. Este tipo de fenómeno o problema requiere de una solución.
                  p.mb-4 Las soluciones se pueden resolver de diferente manera, considerando lo anterior se puede decir que usted mismo puede hacer la limpieza del hogar si compra el material necesario para hacerlo o por el contrario puede contratar un servicio de limpieza que lo haga.
                .col-lg-4.col-md-6.col-9
                  img(alt="" src="@/assets/curso/temas/tema2/sly1-1.png")
              .row.justify-content-center.p-4
                .col-lg-7.col-md-12.col-sm-12
                  p.mb-4 Si las organizaciones fueran consecuentes con las necesidades de sus clientes, no determinarían qué tipo de servicio busca cada uno de ellos. Lo que determinan las necesidades, en cierta forma es que ese cliente potencial requiere de proveedores de servicios que ofrezcan soluciones aceptables al respecto.
                  p.mb-4 Los clientes también tienen ciertos deseos en relación a la forma en la que necesita que su proveedor los trate.
                  p.mb-4 Fundamentalmente, por ejemplo, no todos los bancos proporcionan a los clientes los mismos servicios ya que cada uno de ellos tiene sus propias necesidades.
                .col-lg-4.col-md-6.col-9
                  img(alt="" src="@/assets/curso/temas/tema2/sly1-2.png")
              .row.justify-content-center.p-4
                .col-lg-7.col-md-12.col-sm-12
                  p.mb-4 Teniendo en cuenta lo anterior, las expectativas también reciben la influencia de factores externos. Esto nos indica que es importante lo que los clientes conocen sobre el trabajo de un proveedor de servicios ya que ellos se comunican boca a boca y cada uno habla de su experiencia sea esta buena o mala.
                .col-lg-4.col-md-6.col-9
                  img(alt="" src="@/assets/curso/temas/tema2/sly1-3.png")
              .row.justify-content-center.p-4
                .col-lg-7.col-md-12.col-sm-12
                  p.mb-4 El mercado debe plantear unas actividades de comunicación de #[em marketing] para la venta personal y también hacer campañas de publicidad para generar expectativas sobre sus productos y servicios. Para el comercio es muy importante la imagen que tengan las empresas tanto a nivel local como global.
                .col-lg-4.col-md-6.col-9
                  img(alt="" src="@/assets/curso/temas/tema2/sly1-4.png")
              .row.justify-content-center.p-4
                .col-lg-7.col-md-12.col-sm-12
                  p.mb-4 Cada cliente tiene una necesidad o deseo distintos de cómo quiere ser tratado, por esto es que las empresas no satisfacen esas necesidades porque considera que todos deben ser tratados de igual manera, para poder conocer las necesidades de cada uno se deben segmentar, ahí encontrará las diferencias que hay entre unos y otros, en el caso de los servicios es aún más difícil ya que muchos clientes se relacionan entre sí y están enterados de las concesiones que se les hacen a unos y no a otros.
                  p.mb-4 Los servicios son fenómenos complejos y la producción de los mismos una ardua labor.
                .col-lg-4.col-md-6.col-9
                  img(alt="" src="@/assets/curso/temas/tema2/sly1-5.png")
  
      separador
      #t_2_4.titulo-segundo.mb-5
        h2 2.4 Momentos de verdad con el cliente
  
      .row.justify-content-center.align-items-center.mb-5
        .col-8.col-md-8.col-lg-4
          img.p-2(src='@/assets/curso/temas/tema2/imagen4.png', alt='')
        .col-sm-12.col-md-12.col-lg-8
          p.bgazuloscuro.borde-redondo.text-center.p-3 Los momentos de verdad son los instantes en los que los clientes y los proveedores se enfrentan. 
          p Y en el servicio al cliente son la secuencia de experiencias buenas y malas que los clientes pasan con una empresa al satisfacer una necesidad. Para una empresa, lo más relevante es el manejo que deben tener los empleados con los clientes. Hay que tener en cuenta que el trato debe ser cuidadoso, donde la prioridad son las necesidades emocionales.
          .cajon.color-primario.p-4.mb-4
            p Es una gran oportunidad para la empresa permitir que los clientes califiquen y comenten sobre los productos y servicios que reciben, la empresa puede obtener información directa y específica sobre lo que funciona bien y lo que necesita mejorar. Esto no solo ayuda a mantener la satisfacción del cliente, sino que también puede impulsar la innovación, el desarrollo de mejores soluciones y la rapidez para actuar ante cualquier imprevisto. 
          p Las expectativas de los consumidores comienzan muy altas, por lo que los empleados deben asegurarse de que obtengan lo que necesitan y de la mejor forma posible.
  
      separador
      #t_2_5.titulo-segundo.mb-5
        h2 2.5 Contingencias
  
      p.mb-4 Las empresas necesitan planificar lo inesperado para darle solución. Los planes de contingencia son la preparación para cualquier cosa que pueda suceder fuera de las operaciones diarias normales. Ninguna empresa quiere pensar en que ocurran estos escenarios y es muy posible que sucedan, por eso es importante tener un plan establecido. Ten en cuenta lo siguiente:
  
      AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul estilo1")
        .row(titulo="Notificación al cliente")
          .col-sm-12.col-md-12.col-lg-7.mb-4.mb-md-0
            p.mb-4 Toda empresa debe analizar las necesidades indicadas por el cliente y determinar un plan para abordarlas. Se deben tener en cuenta las reacciones del mismo, esto será clave. Las empresas deben pensar en cómo afectará el escenario al cliente para determinar cómo reaccionar ante la necesidad.
            p.mb-4 Por ejemplo: los huéspedes de un hotel estaban confundidos y no tenían ninguna instrucción de la administración, sobre qué hacer en la situación de un apagón (ausencia de energía). Si todos los empleados del hotel estuvieran al tanto del plan de contingencia, habrían podido informar a los huéspedes cómo se resolvería el problema.
          .col-8.col-md-8.col-lg-4
            img(src='@/assets/curso/temas/tema2/acor1-1.png', alt='Texto que describa la imagen')
        .row(titulo="Encontrar una solución")
          .col-sm-12.col-md-12.col-lg-7.mb-4.mb-md-0
            p.mb-4 En todo plan de contingencia, se debe contactar a los clientes lo antes posible para notificarles de la situación. La compañía siempre debe tener un equipo o departamento a cargo de contactar a los clientes cuando surjan estas situaciones.
            p.mb-4 Toda empresa debe tener una solución, aunque sea temporal, para ofrecer a los clientes. Todo cliente debe entender que a veces suceden cosas fuera del control de la empresa, pero aun así se sentirán molestos si no hay una pronta solución al problema. Algunas situaciones estarán fuera del control de la empresa. Por esto es muy importante contar con un plan de contingencia que ayudará a evitar posibles problemas con los clientes.
          .col-8.col-md-8.col-lg-4
            img(src='@/assets/curso/temas/tema2/acor1-2.png', alt='Texto que describa la imagen')
  
      p.mb-5.mt-5 Los planes de contingencia se deben preparar para saber cómo reaccionar ante cualquier situación inesperada. Las organizaciones deben determinar las situaciones que pueden ocurrir y planificar cómo comunicarse, es necesario también, encontrar soluciones temporales para ayudar a evitar futuros problemas con los clientes. 
  
  
  
  </template>

<script>
export default {
  name: 'Tema2',
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
