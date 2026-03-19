<template lang="pug">
  .curso-main-container.introduccion
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span
            i.fas.fa-info
        h1 Introducción
      
      p.mb-5 Una adecuada atención al cliente es muy importante en el mercado y de su buena atención depende la fidelización y aumento de la clientela, para comenzar a profundizar en este interesante tema, lo invitamos a explorar el siguiente video:
  
      figure
        .video
          iframe(iframe width="560" height="315" src="https://www.youtube.com/embed/uMQpxHneO34?si=bAYDRfkQutZ_l0C2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
        figcaption Video: Atención al cliente en el #[em retail].
  
  </template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
