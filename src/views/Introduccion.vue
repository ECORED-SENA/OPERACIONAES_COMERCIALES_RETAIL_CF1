<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    figure.mb-5(data-aos="fade")
      img(src="@/assets/curso/banner-intro.png", alt="Introducción")
    
    p.mb-4(data-aos="fade") Bienvenidos al componente formativo 
      strong Manejo de inventarios en el 
      italic-strong retail, 
      | en el cual se abordarán diversas temáticas con aspectos básicos y fundamentales que se deben tener en cuenta cuando se participa en las operaciones comerciales de una sala de ventas. A continuación, se invita a conocer un poco más de este componente formativo:

    .row.justify-content-center.tarjeta.bg-azul.py-5(data-aos="fade-down")
      .col-md-10
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)


</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
