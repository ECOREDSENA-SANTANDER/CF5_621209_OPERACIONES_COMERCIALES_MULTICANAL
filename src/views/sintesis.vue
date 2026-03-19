<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      p Atender al cliente en el #[em retail] es crucial para el éxito de cualquier negocio. La experiencia del cliente puede influir directamente en la fidelización y en la reputación de la empresa. Por lo anterior es fundamental implementar estrategias, que mejoren la satisfacción del cliente y que fomenten la lealtad y, en última instancia, aumenten el éxito de la organización.
      p.mb-5 A continuación, se presenta el diagrama que representa el resumen de las temáticas que están desarrolladas en el componente formativo:
  
      .row.justify-content-center
        .col-lg-12.mb-5
          figure
            img(src="@/assets/curso/sintesis.svg", alt="A continuación se presenta una sintesis del componente Manejo de inventarios en el retail, la cual hace referencia a la competitividad y gestión turística abarca cuatro áreas clave: la competitividad, que se enfoca en mejorar el rendimiento del sector turístico mediante modelos específicos; la gestión del turismo, que involucra a actores tanto públicos como privados, incluyendo la gestión compartida; la sostenibilidad, que busca equilibrar el crecimiento turístico con la conservación y sostenibilidad; y los prestadores de servicios turísticos, que se dividen en proveedores, su clasificación, los tipos de servicios que ofrecen y las agencias de viajes, proporcionando una visión integral para optimizar el sector.")
        .col-auto
          a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
            .anexo__icono
              img(src="@/assets/template/icono-pdf.svg")
            .anexo__texto
              p Anexo. Síntesis
  
  </template>

<script>
export default {
  name: 'Sintesis',
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
