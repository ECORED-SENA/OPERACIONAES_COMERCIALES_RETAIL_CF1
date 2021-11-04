<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 3
      h1 Gestión de productos

    .row
      .col-lg-6.mb-4(data-aos="fade-right")
        p 
          span.etiqueta Lo único constante en esta vida es el cambio. 
          | Esta máxima introduce una realidad natural que acontece tanto a las personas como a las empresas y, como no, a los productos de estas que constituyen su principal razón de ser y contribución a la sociedad; así, la gestión de productos es una función de la empresa que guía la vida e innovación de nuevos productos, centrándose en el producto y en sus clientes, antes que nada.
      .col-lg-6.mb-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema3-img.png', alt='Imagen decorativa')   

    Separador


    // 3.1
    #t_3_1.titulo-segundo(data-aos="fade-right")
      .h2 3.1   Producto

    .row  
      .col-lg-6.mb-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema3-1-img.png', alt='Imagen decorativa')  
      .col-lg-6.mb-4(data-aos="fade-right")
        p 
          span.etiqueta Desde el punto de vista económico,
          | cualquier cosa externa al hombre, material o inmaterial que satisface un deseo humano, se considera producto. 
        p 
          span.etiqueta Desde el punto de vista comercial,
          | un producto es lo que el consumidor recibe cuando realiza una compra. 
        p Para una empresa que participa del concepto de 
          italic marketing 
          | en su sentido más amplio, un bien o servicio es el medio por el cual cumple con su fin primordial: satisfacer necesidades.
        p Es lo que la empresa destina a la venta y forma parte de sus ingresos comerciales. Se concibe como un conjunto de atributos tangibles e intangibles y cuando es adquirido por el comprador, este obtiene beneficios emocionales, racionales y sensoriales.  

    p.mb-4(data-aos="fade") En la gestión de productos se encuentran las siguientes clases: 

    .row.mb-4
      .col-md-3.mb-3
        .tarjeta-numerada.color-acento-contenido.py-5.p-3.h-100
          .tarjeta-numerada__numero
            .h2 1
          p.text-center 
            b Producto en curso
          p.text-center Es el producto que está siendo transformado en el proceso productivo.    
      .col-md-3.mb-3
        .tarjeta-numerada.color-acento-contenido.py-5.p-3.h-100
          .tarjeta-numerada__numero
            .h2 2
          p.text-center 
            b Producto semiterminado
          p.text-center Es el producto que ha sufrido la transformación y espera a seguir sufriendo transformaciones hasta convertirse en el producto final o terminado.
      .col-md-3.mb-3
        .tarjeta-numerada.color-acento-contenido.py-5.p-3.h-100
          .tarjeta-numerada__numero
            .h2 3
          p.text-center 
            b Producto terminado
          p.text-center Es el producto con el proceso de producción o transformación completo y destinado a la venta.    
      .col-md-3.mb-3
        .cajon.color-acento-botones.py-5.p-4.h-100
          p.mb-0 
            strong Kotler (2017)
            |, define un producto como cualquier bien que se pueda ofrecer a un mercado para su atención, adquisición, uso o consumo, y que podría satisfacer un deseo o una necesidad.

    p(data-aos="fade") Los atributos en los productos aportan alguna utilidad al consumidor y son percibidos por él de esta forma; es decir, la capacidad de satisfacer alguna de las necesidades que tiene el consumidor.

    p.mb-4(data-aos="fade") Son propios de los productos, las: 

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-md-10
        .cajon.color-secundario.p-4.mb-3
          h5 Características funcionales
          p.mb-0 Estas se relacionan con los diferentes usos que tenga el producto y, por supuesto, a las metodologías de operación. Es por eso por lo que se pueden adquirir nuevas oportunidades de uso que a su vez pueden desarrollar la potencialidad de un producto.
        .cajon.color-secundario.p-4.mb-3
          h5 Funcionalidades
          p.mb-0 La funcionalidad puede variar de acuerdo con los mercados, por esa razón la estandarización de los productos cobra vital importancia.
        .cajon.color-secundario.p-4.mb-3
          h5 Características generales de un producto
          p.mb-0 Son el grupo de aspectos que se concentran en un producto y cuyo objetivo es llenar las expectativas o exigencias del consumidor, sin olvidar que las características pueden ser tangibles e intangibles de acuerdo con si pueden o no percibir por los sentidos. 

    p.mb-4(data-aos="fade") Dentro de las características generales de un producto, hay dos divisiones:

    .tarjeta--azul.py-5.px-4.mb-3
      SlyderA
        .row.justify-content-center
          .col-md-5.mb-4.mb-md-0
            h4 Características perceptibles
            p Entre las características perceptibles de los productos encontramos:
            ul.lista-ul--color
              li 
                i.fas.fa-square
                | El núcleo.
              li 
                i.fas.fa-square
                | El precio.
              li 
                i.fas.fa-square
                | El diseño.
              li 
                i.fas.fa-square
                | El envase.
              li 
                i.fas.fa-square
                | El etiquetado.        
          .col-md-5
            figure
              img(src='@/assets/curso/tema3-1-slider.png', alt='Características perceptibles')
        
        .row.justify-content-center
          .col-md-10.mb-4.mb-md-0
            h4 Características imperceptibles
            p Entre las características imperceptibles podemos mencionar:
            ul.lista-ul--color
              li 
                i.fas.fa-square
                p
                  strong La calidad 
                  | la podemos definir en función de comparar las características más básicas del producto, con aquellos estándares y/o los productos que posee la competencia. 
              li 
                i.fas.fa-square
                p
                  strong Los signos distintivos o las marcas  
                  | que son los que nos facultan para reconocer el producto y diferenciarlo de los que son exactos o muy símiles de la competencia.
              li 
                i.fas.fa-square
                p
                  strong La imagen corporativa  
                  | es aquella que llega a constituir el reflejo de la información que se recibe sobre el producto en el subconsciente o en la mente del consumidor. 
              li 
                i.fas.fa-square
                p
                  strong Los servicios 
                  | son los que forman aquellos valores que se añaden o integran al producto y que pueden hacerlo distinto a cualquier otro.         

    Separador


    // 3.2
    #t_3_2.titulo-segundo(data-aos="fade-right")
      .h2 3.2   Referencias

    .row  
      .col-lg-6.mb-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema3-2-img.png', alt='Imagen decorativa')  
      .col-lg-6.mb-5(data-aos="fade-right")
        p Al hablar de referencias se hace mención a aquellos productos que buscan llenar una necesidad puntual y específica. Las mismas abarcan el modelo, función, marca y contenido y pueden ser tantas como artículos disponibles.
        p Las referencias son claves para la satisfacción del cliente, para el cumplimiento de sus necesidades o deseos o creando nuevas necesidades con miras a posicionarse en el mercado generando rentabilidad.
        p La profundidad del surtido en el formato comercial, o 
          italic retail, 
          | mide qué tanto abarca cada referencia según su clasificación y cómo se componen las variaciones a existir que son necesarias en todo establecimiento comercial.

    .h4.titulo-azul2.mb-4(data-aos="fade-right") 
      span Rotación

    .row  
      .col-lg-6.mb-4(data-aos="fade-right")
        p La rotación de productos es un indicador que señala el total de veces que el inventario del almacén y el de la góndola requiere ser suministrado con nuevas existencias.
        p Los productos tienen una constante entrada y salida, con lo que se evitan multitud de pérdidas, como los productos caducados; este procedimiento permite tener en los almacenes con productos frescos y con fecha vigentes en la rotación.
        p Ahora bien, la ausencia del producto se conoce como agotado, y se presenta cuando los artículos de consumo no están en condiciones de venta en ningún lugar del punto o cuando no se dispone de estos en el espacio accesible para el comprador.
      .col-lg-6.mb-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema3-2-img2.png', alt='Imagen decorativa')    
    
    Separador


    // 3.3
    #t_3_3.titulo-segundo(data-aos="fade-right")
      .h2 3.3   <em>Stock</em> de mercancía

    p(data-aos="fade") Se denominan 
      italic stock 
      | de una empresa a las mercancías que se encuentran en ella, acumuladas en un lugar determinado, en tránsito o inmersas en el proceso de producción, y cuyo objetivo es su aplicación empresarial en procesos industriales o comerciales.
    p(data-aos="fade") Se entiende por nivel de 
      italic stock 
      | a la cantidad de existencias de un artículo almacenado en un momento dado, muy puntual para los 
      italic retailers 
      | en las temporadas de Navidad, madre, padre, escolar, entre otras, dependiendo del calendario comercial.
    p.mb-4(data-aos="fade") Existen diversas clases de 
      italic stock 
      | de mercancía, a saber: 

    .row.mb-4
      .col-md-2.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema3-3-ico.svg', alt='Características perceptibles')
      .col-md-10.mb-4(data-aos="fade-left")
        TabsD.color-acento-contenido
          .tarjeta.tarjeta--azul.p-4(titulo="<em>Stock</em> no perecedero")
            h4  
              italic Stock 
              | no perecedero
            p.mb-0 Lo integran productos y material que no se deterioran con el paso del tiempo y que, por tanto, podrán estar almacenados durante mayores plazos sin perder sus propiedades originales.
          .tarjeta.tarjeta--azul.p-4(titulo="<em>Stock</em> perecedero")
            h4  
              italic Stock 
              | perecedero
            p.mb-0 Los productos considerados como perecederos son lo que por sus composición o condiciones, pueden sufrir un deterioro rápido y perder sus características originales con el paso del tiempo por elementos externos.
          .tarjeta.tarjeta--azul.p-4(titulo="<em>Stock</em> con fecha de caducidad")
            h4  
              italic Stock 
              | con fecha de caducidad
            p.mb-0 Puede incluir también al 
              italic stock 
              | perecedero, ya que muchos perecederos cuentan también una fecha limitada para su uso o consumo. Además, incluye aquellos materiales que, aunque no se deterioren con el tiempo, sí cuentan con una fecha límite para su correcta utilización.
          .tarjeta.tarjeta--azul.p-4(titulo="<em>Stock</em> de ciclo o <em>stock</em> activo")
            h4  
              italic Stock 
              | de ciclo o 
              italic stock 
              | activo
            p.mb-0 El 
              italic stock 
              | activo también se denomina 
              italic stock 
              | de ciclo, pues hace referencia al número de artículos con los que debe contar una empresa en condiciones normales para satisfacer la demanda de sus consumidores. 
          .tarjeta.tarjeta--azul.p-4(titulo="<em>Stock</em> mínimo")
            h4  
              italic Stock 
              | mínimo 
            p.mb-0 El 
              italic stock 
              | mínimo es la cantidad básica de artículos que por seguridad se deben disponer en el almacén, para seguir ofreciendo el servicio o producto a los clientes. Consiste en el valor que permite atender la demanda del público, aún en los momentos de mayores ventas.
          .tarjeta.tarjeta--azul.p-4(titulo="<em>Stock</em> máximo")
            h4  
              italic Stock 
              | máximo
            p El 
              italic stock 
              | máximo es el mayor volumen de existencias que debe presentar el inventario sin afectar negativamente sus costos. 
            p.mb-0 Se determina periódicamente de acuerdo con el tipo de productos, las ventas y los recursos de almacenamiento disponibles. 
          .tarjeta.tarjeta--azul.p-4(titulo="<em>Stock</em> de seguridad")
            h4  
              italic Stock 
              | de seguridad
            p.mb-0 El 
              italic stock 
              | de seguridad es el inventario extra que se tiene en el almacén para hacer frente a imprevistos relacionados con cambios en la demanda o retrasos de los proveedores.  
          .tarjeta.tarjeta--azul.p-4(titulo="<em>Stock</em> en tránsito o en curso")
            h4  
              italic Stock 
              | en tránsito o en curso
            p.mb-0 Es la mercancía que todavía está presente en la empresa porque está en un proceso de producción o comercialización: embalaje, fabricación, en proceso de entrega.           

    .row.border-acento-contenido.mb-4.p-md-4.p-3
      .col-lg-7.mb-4.mb-md-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema3-3-img3.png', alt='Imagen decorativa') 
      .col-lg-5.mb-4.mb-md-0(data-aos="fade-left")
        p La principal función del 
          italic stock 
          | es determinar las cantidades de productos que debe tener la empresa en cada momento. De esta forma se cumple el principio logístico básico de disponer en cada momento de los materiales necesarios con el menor coste posible, con varios fines: 
        ul.lista-ul--color
          li 
            i.fas.fa-square
            | Acercamiento de la mercancía necesaria para la actividad empresarial.
          li 
            i.fas.fa-square
            | Compensación de las diferencias entre las previsiones de ventas y las ventas reales de una empresa. 
          li 
            i.fas.fa-square
            | Control de parte del valor del inmovilizado de la empresa.   


</template>

<script>
import TabsD from '../components/TabsD'
export default {
  name: 'Tema3',
  components: {
    TabsD,
  },
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
