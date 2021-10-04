<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 4
      h1 Gestión de devolución

    .row.justify-content-center(data-aos="fade-down")
      .col-md-8
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema4-img.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 
              strong La gestión de devoluciones, también conocida como logística inversa, es un proceso de supervisión de productos que se devuelven a la empresa proveedora.

    p.mb-5(data-aos="fade") Ahora, se analizarán los siguientes conceptos, relacionados con la gestión de devolución.


    .h4.titulo-azul2.mb-4(data-aos="fade-right") 
      span Devolución

    .row
      .col-lg-6.mb-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema4-img2.png', alt='Imagen decorativa') 
      .col-lg-6.mb-5(data-aos="fade-right")
        p La devolución de pedidos o logística inversa se utiliza para coordinar los movimientos de los productos. Su función principal es recuperar el 
          italic stock 
          | teniendo presentes distintas variables, como diferentes trámites administrativos, reetiquetado, destrucción y reciclaje.
        .cajon.color-acento-botones.p-4.mb-4
          p.mb-0 El procedimiento de devolución está regulado, según la legislación comercial de cada país, ya que es un procedimiento de gestión tributaria adherido por la declaración que cada organización debe presentar a su sistema tributario.


    .h4.titulo-azul2.mb-4(data-aos="fade-right") 
      span Averías

    p(data-aos="fade") En la logística, se conoce como avería a los defectos o desperfectos de los productos, que se ofrecen en la góndola y en la exhibición. 

    p.mb-4(data-aos="fade") Existen diferentes tipos de averías para un elemento, así:

    .row.mb-4
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema4-ico1.svg' alt='Avería permanente')
          .tarjeta.color-acento-contenido--borde
            .p-4.pt-2
              h4.text-center Avería permanente
              p.text-center Avería que persiste hasta que no se elimina por una intervención del surtidor, ejemplo, la fecha de vigencia en los lácteos.
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema4-ico2.svg' alt='Avería intermitente')
          .tarjeta.color-acento-contenido--borde
            .p-4.pt-2
              h4.text-center Avería intermitente
              p.text-center Avería temporal cuya manifestación se repite.
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar.tarjeta100
          img(src='@/assets/curso/tema4-ico3.svg' alt='Avería latente')
          .tarjeta.color-acento-contenido--borde
            .p-4.pt-2
              h4.text-center Avería latente
              p.text-center Avería que no se hace aparente.

    .row.border-acento-contenido.mb-5.p-md-4.p-3
      .col-lg-5.mb-4.mb-md-0(data-aos="fade-left")
        p Estas averías poseen diferentes características, según como ocurrieron:
        ul.lista-ul--color
          li 
            i.fas.fa-square
            p Los daños que sobrevinieren al cargamento desde su embarque empresarial hasta su descarga.
          li 
            i.fas.fa-square
            p Los daños sufridos por las mercancías cargadas sobre cubierta, bajo ningún nivel de protección y prevención.
          li 
            i.fas.fa-square
            p Los daños ocasionados por el mal almacenamiento.
          li 
            i.fas.fa-square
            p.mb-0 Los daños producidos en la góndola por la manipulación del cliente.     
      .col-lg-7.mb-4.mb-md-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema4-img3.png', alt='Imagen decorativa') 


    .h4.titulo-azul2.mb-4(data-aos="fade-right") 
      span Reconteo

    .row.mb-4
      .col-lg-6.mb-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema4-img4.png', alt='Imagen decorativa') 
      .col-lg-6.mb-4(data-aos="fade-right")
        p Es un proceso logístico útil porque permite visualizar las ventas, lo que demuestra y permite analizar el tráfico y el número de tickets que pueden conocer las tasas de conversión.


    .h4.titulo-azul2.mb-4(data-aos="fade-right") 
      span Reportes

    .row
      .col-lg-6.mb-4(data-aos="fade-right")
        p El reporte, también llamado informe, es un documento que puede ser impreso, digital o en audiovisual, que busca transferir una información del comportamiento de las ventas de un producto determinado en la góndola.
        p Independientemente de su naturaleza escrita u oral, los informes según su contenido son: 
        .row.justify-content-center.cajon.color-primario.p-4.mb-4
          .col-3
            img.px-md-2(src='@/assets/curso/tema4-ico2-1.svg', alt='Imagen decorativa')
          .col-8
            p.mb-0
              strong 1. Reportes de ventas diarias: 
              | trata de la cantidad de actividades comerciales realizadas en las últimas 24 horas. Ejemplo, el comportamiento del producto en la góndola.
        .row.justify-content-center.cajon.color-primario.p-4.mb-4
          .col-3
            img.px-md-2(src='@/assets/curso/tema4-ico2-2.svg', alt='Imagen decorativa')
          .col-8
            p.mb-0
              strong 2. Análisis de ventas semanal: 
              | en este punto los informes semanales comenzarán a revelar cualquier situación que deba abordarse de manera inmediata con tu proceso de ventas.

      .col-lg-6.mb-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema4-img5.png', alt='Imagen decorativa')   



</template>

<script>
export default {
  name: 'Tema4',
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

<style lang="sass" scoped></style>
