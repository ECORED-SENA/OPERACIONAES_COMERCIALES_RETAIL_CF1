<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        span 2
      h1 Gestión de inventario

    .row.justify-content-center(data-aos="fade-down")
      .col-md-8
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema2-img.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Es el proceso de pedido, almacenamiento y uso del inventario, desde las materias primas hasta el producto terminado, o desde el producto terminado hasta la góndola o exhibición en el punto de venta del cliente o retail determinado. 

    p.mb-4(data-aos="fade") La política de inventarios debe establecerse para lograr el cumplimiento de dos objetivos muy importantes y específicos: 

    .row.justify-content-center
      .col-md-10
        .row
          .col-md-6.mb-5.mb-md-4(data-aos="fade-right")
            .titulo-numero-acento-contenido 
              .fondo-1-acento-contenido
                h3.mb-0 1
            .bg-amarillo.h-100.p-4.pt-5.pb-0
              p.mt-0 
                strong Primero: 
                | controlar el nivel de inventario, que permita suplir las necesidades del usuario final en oportunidad, calidad y competitividad de precios. 
          .col-md-6.mb-4(data-aos="fade-left")
            .titulo-numero-acento-contenido 
              .fondo-1-acento-contenido
                h3.mb-0 2
            .bg-amarillo.h-100.p-4.pt-5.pb-0
              p.mt-0 
                strong Segundo: 
                | que la inversión en inventario a realizar sea controlada, reducida y adaptada al requerimiento del cliente.

    Separador


    // 2.1
    #t_2_1.titulo-segundo(data-aos="fade-right")
      .h2 2.1  Toma física y digital

    .row.mb-4
      .col-lg-6.mb-4(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema2-1-img.png', alt='Imagen decorativa') 
      .col-lg-6.mb-4(data-aos="fade-left")
        p El inventario físico consiste en corroborar la presencia real de bienes almacenados y verificar su estado y condiciones de seguridad tanto en el almacenamiento como en las respectivas góndolas o lineal del 
          italic retail 
          | o formato comercial.
        p En consecuencia, la elaboración y verificación de los inventarios físicos (toma física) se debe diligenciar el formato 
          strong Acta de inicio y terminación de la verificación física del mismo. 
          | Por esta razón, el formato de control de inventarios es un documento de control que permite detallar las existencias de productos que se encuentran bajo protección en cada dependencia.

    .row.justify-content-center(data-aos="fade-down")
      .col-md-8
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema2-1-img2.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 La toma digital, como su nombre lo define, es la utilización y automatización para administrar cualquier almacén, donde se sigue cada movimiento de 
              italic stock 
              | con un sistema único de inventario de doble entrada.

    p.mb-4(data-aos="fade") De las herramientas más comunes en el desempeño de esta actividad, tanto en la toma física y digital, se tienen: 

    .row.justify-content-center
      .col-md-10
        AcordeonB(tipo="a" clase-tarjeta="tarjeta bg-azul")
          .row(titulo="<em>Software</em> de alerta de <em>restock</em>")
            .col-md-2
              img.px-md-3(src='@/assets/curso/curso2-1-acord1.svg', alt='Imagen decorativa') 
            .col-md-10
              p.mb-0 Recuerda o avisa que es tiempo de recolocar cierto producto, activándose cuando este alcanza determinado nivel de 
                italic stock. 
          .row(titulo="<em>Software</em> de reporte en el inventario")
            .col-md-2
              img.px-md-3(src='@/assets/curso/curso2-1-acord2.svg', alt='Imagen decorativa') 
            .col-md-10
              p.mb-0 Solución de gestión en la organización empresarial integrando procesos financieros, administrativos y comerciales.
          .row(titulo="Recolección de <em>data</em> a través del código de barras")
            .col-md-2
              img.px-md-2(src='@/assets/curso/curso2-1-acord3.svg', alt='Imagen decorativa') 
            .col-md-10
              ul.lista-ul--color
                li 
                  i.fas.fa-square
                  | Proporciona una identificación única a cada producto, servicio o localización. 
                li 
                  i.fas.fa-square
                  | Permite la captura automática de la información. 
                li 
                  i.fas.fa-square
                  | Posibilita la automatización de varios procesos a lo largo de la cadena de abastecimiento.
                li 
                  i.fas.fa-square
                  | Permite obtener información rápida y oportuna sobre productos servicios o localizaciones.
                li 
                  i.fas.fa-square
                  | Incrementa la productividad y la eficiencia porque optimiza el tiempo en captura de información.
                li 
                  i.fas.fa-square
                  | Disminuye la posibilidad del error humano.        
          .row(titulo="<em>Dashboards</em> (tableros)")
            .col-md-2
              img.px-md-2(src='@/assets/curso/curso2-1-acord4.svg', alt='Dashboards (tableros)') 
            .col-md-10
              p.mb-0 Herramienta que sirve para visualizar y dar seguimiento a determinados indicadores de desempeño o estado.
          .row(titulo="<em>NCR Counterpoint</em>")
            .col-md-2
              img.px-md-3(src='@/assets/curso/curso2-1-acord5.svg', alt='NCR Counterpoint') 
            .col-md-10
              p.mb-0 Su función es facturar en segundos desde la nube con el POS.    

    Separador


    // 2.2
    #t_2_2.titulo-segundo(data-aos="fade-right")
      .h2 2.2  Técnicas de conteo

    p(data-aos="fade") Se define el conteo para el inventario como la acción o el proceso de cuantificar la cantidad de 
      italic stock 
      | en poder de un 
      italic retail 
      | o la existencia de productos en una organización.

    p.mb-4(data-aos="fade") Existen diversas técnicas para inventariar las existencias de productos, definidas de la siguiente manera:

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-md-10
        .row
          .col-md-4.mb-4(data-aos="fade-right")
            img(src='@/assets/curso/tema2-2-img.svg', alt='Inventariar existencias de productos')
          .col-md-8.mb-4(data-aos="fade-left")
            TabsD.color-acento-contenido
              .tarjeta.tarjeta--azul.p-4(titulo="Conteo periódico de <em>stock</em>")
                h4 Conteo periódico de 
                  italic stock 
                p.mb-0 Como su nombre indica, se definirá su realización con una periodicidad definida en días o meses, dependiendo de la cantidad.
              .tarjeta.tarjeta--azul.p-4(titulo="Conteo continuo de <em>stock</em>")
                h4 Conteo continuo de 
                  italic stock
                p.mb-0 Como su nombre indica, se definirá su realización con una periodicidad definida en días o meses, dependiendo de la cantidad.
              .tarjeta.tarjeta--azul.p-4(titulo="Conteo de precisión")
                h4 Conteo de precisión
                p.mb-0 Se realiza al momento de recibir mercancía de los proveedores o al preparar los pedidos para clientes. 
              .tarjeta.tarjeta--azul.p-4(titulo="Validación de <em>stock</em> agotado")
                h4 Validación de  
                  italic stock 
                  | agotado
                p.mb-0 Se utiliza como validación de la no disponibilidad de producto o para validar y cuantificar cantidades muy pequeñas.
              .tarjeta.tarjeta--azul.p-4(titulo="Inventario anual de <em>stock</em>")
                h4 Inventario anual de 
                  italic stock 
                p.mb-0 Este entra en funcionamiento cuando el inventario periódico o continúo no se realiza, se realiza un solo proceso para el año en curso.   

      p.mb-4(data-aos="fade") A continuación, se verá un paso a paso en el proceso de conteo en el retail o almacenamiento de la organización:

      .row.justify-content-center.mb-4(data-aos="fade-down")
        .col-md-10
          PasosA.color-acento-botones(tipo="n")
            .row
              .col-md-2.mb-4.mb-md-0
                img.img-pasos(src='@/assets/curso/tema2-2-paso1.svg', alt='Imagen decorativa')
              .col-md-9
                p La mercancía en la góndola se contará de izquierda a derecha, de arriba hacia abajo y de atrás hacia adelante.
            .row
              .col-md-10.mb-4.mb-md-0
                p En el proceso deberán participar personas que cumplan las veces de auditor y contador.
              .col-md-2
                img.img-pasos(src='@/assets/curso/tema2-2-paso2.svg', alt='Imagen decorativa')
            .row
              .col-md-2.mb-4.mb-md-0
                img.img-pasos(src='@/assets/curso/tema2-2-paso3.svg', alt='Imagen decorativa')
              .col-md-9
                p Se procederá a una división por anaqueles para mejor distribución y control.
            .row
              .col-md-10.mb-4.mb-md-0
                p Se hará un conteo independiente desde diferentes puntos, por parte del auditor y contador, comenzando el primero de un punto A hacia el B y el otro de forma contraria.
              .col-md-2
                img.img-pasos(src='@/assets/curso/tema2-2-paso4.svg', alt='Imagen decorativa')   
            .row
              .col-md-2.mb-4.mb-md-0
                img.img-pasos(src='@/assets/curso/tema2-2-paso5.svg', alt='Imagen decorativa')
              .col-md-9
                p Se listarán todos los productos del anaquel de izquierda a derecha, de arriba hacia abajo y de atrás hacia delante, esto para facilitar más el conteo. 
            .row
              .col-md-10.mb-4.mb-md-0
                p Se hará un reconteo en las partes donde haya dudas y se pondrán nuevamente en el mismo lugar.
              .col-md-2
                img.img-pasos(src='@/assets/curso/tema2-2-paso6.svg', alt='Imagen decorativa') 
            .row
              .col-md-2.mb-4.mb-md-0
                img.img-pasos(src='@/assets/curso/tema2-2-paso7.svg', alt='Imagen decorativa')
              .col-md-9
                p Se validará con la apertura de las cajas, que se tenga la cantidad correcta y esperada en las mismas.
            .row
              .col-md-10.mb-4.mb-md-0
                p Si se encuentra un producto que no esté anotado en la lista, se le dará un número de secuencia intermedia dependiendo la ubicación del producto y se anotará al final de la hoja.
              .col-md-2
                img.img-pasos(src='@/assets/curso/tema2-2-paso8.svg', alt='Imagen decorativa')  
            .row
              .col-md-2.mb-4.mb-md-0
                img.img-pasos(src='@/assets/curso/tema2-2-paso9.svg', alt='Imagen decorativa')
              .col-md-10
                p Los números de secuencia de la mercancía listada, serán de 10 en 10 y por anaquel, es decir en el anaquel 1 abra la secuencia 10, 20, 30, etc. y hasta el número que se necesite según la cantidad de mercancía que haya; y en el anaquel 2 será lo mismo comenzando por el número 10 y continuando de 10 en 10.
            .row
              .col-md-10.mb-4.mb-md-0
                p Al finalizar se contrastarán los listados del auditor y contador para la validación de errores y, en el caso de que existan, corregirlos para luego ingresar la información al sistema.
              .col-md-2
                img.img-pasos(src='@/assets/curso/tema2-2-paso10.svg', alt='Imagen decorativa') 
            .row
              .col-md-2.mb-4.mb-md-0
                img.img-pasos(src='@/assets/curso/tema2-2-paso11.svg', alt='Imagen decorativa')
              .col-md-10
                p Imprimir lo capturado en sistema y revisar que no haya ningún faltante físico de mercancía, en caso de haberlo se volverá a contar la mercancía con faltante y se buscará en todos los lugares posibles que pueda estar antes de tomarla como faltante real.

    p.mb-4(data-aos="fade") A su vez, en el proceso de conteo se pueden encontrar tipos de conteo, por fecha, producto y ubicación:

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-md-10
        .row
          .col-md-6.col-lg.tarjeta--tabla.p-4
            .row.justify-content-center.mb-3
              .col-5
                img(src='@/assets/curso/tema2-2-tajeta1.svg' alt='Conteo cíclico por fecha')
            h4.text-center Conteo cíclico por fecha
            p.text-center Este conteo establece que una vez se define un periodo de tiempo constante, cada vez que se cumpla ese periodo se realiza un conteo de lo que se tiene físicamente en el almacén; si se establece el 15 de cada mes o, por ejemplo, todos los lunes.

          .col-md-6.col-lg.tarjeta--tabla.p-4
            .row.justify-content-center.mb-3
              .col-5
                img(src='@/assets/curso/tema2-2-tajeta2.svg' alt='Conteo por producto')
            h4.text-center Conteo por producto
            p.text-center Este consiste en realizar el conteo por orden de referencias de producto y en cualquier momento sin importar la fecha. En este caso se llevan a cabo conteos independientes para cada una de las referencias o tipos de producto que se manejan en el almacén.

          .col-md-6.col-lg.tarjeta--tabla.p-4
            .row.justify-content-center.mb-3
              .col-5
                img(src='@/assets/curso/tema2-2-tajeta3.svg' alt='Por ubicación')
            h4.text-center Por ubicación
            p.text-center Dependiendo la distribución espacial y física del almacén. Es decir que, en orden de ubicación sin importar la fecha y la referencia, se realiza el conteo de las existencias.

    p(data-aos="fade") Para la realización del proceso de conteo se debe hacer una mediación tecnológica, a través de herramientas que ayuden en el proceso de contabilización y que permita una gestión en vivo de la información recolectada. Herramientas como estas permiten almacenar, organizar y generar reportes, y mucho más, que ayuden a conocer las unidades exactas que quedan en resguardo, permitiendo cruzar la información y colaborar en la toma de decisiones y evitando una posible ruptura en la cadena de servicio.

    Separador


    // 2.3
    #t_2_3.titulo-segundo(data-aos="fade-right")
      .h2 2.3  Mercancía

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-md-10
        .bloque-texto-a.color-secundario.p-4.p-md-5 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-8.mb-4.mb-lg-0
              .bloque-texto-a__texto.p-4
                p Es un bien material que se puede usar o poseer. A diferencia de otros bienes –como los que se producen para el autoconsumo, por ejemplo–, la fabricación, transformación y distribución de mercancías tiene como finalidades fundamentales:
            .col-lg-4
              .row.align-items-center.justify-content-center
                .col-md-5.col-6.mb-3.mb-md-0
                  img(src='@/assets/curso/tema2-3-img.svg' alt='Imagen decorativa')
                .col-md-7
                  ul.lista-ul--color
                    li.mb-1 
                      i.fas.fa-square 
                      | La actividad económica.
                    li.mb-1  
                      i.fas.fa-square 
                      | El intercambio. 
                    li.mb-0 
                      i.fas.fa-square 
                      | La relación mercantil.   

    .row       
      .col-md-6.mb-4(data-aos="fade-right")
        .cajon.color-acento-botones.h-100.p-4.mb-4
          p.mb-0 
            strong Como elemento material, 
            | siempre está relacionada con un momento y un lugar acordados entre dos o más partes donde se produce una entrega y una recepción, en los que la mercancía realiza su función de intercambiable. 
      .col-md-6.mb-4(data-aos="fade-left")
        .cajon.color-acento-botones.h-100.p-4.mb-4
          p.mb-0 
            strong Como bien material, 
            | la mercancía puede ser un elemento o producto que resulte necesario trasladar en un momento determinado desde un lugar de fabricación a otro por necesidades de manufactura, ensamblaje o de consumo, entre otros motivos. 

    p(data-aos="fade") Cuando eso sucede, es decir, cuando se transporta, la mercancía adquiere la consideración de “carga”. Así, la mercancía se considera una carga desde el momento en que pasa a ser un elemento que va a ser movido y trasladado o enviado desde un punto de origen a otro de destino, para lo que con toda probabilidad deberá ser embalado, manipulado, manejado o almacenado.

    p.mb-4(data-aos="fade") Las mercancías o productos pueden ser sólidos, líquidos o gaseosos y se clasifican en: 

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-md-10
        .titulo-sexto.color-acento-botones.mb-4
          p.mb-0
            strong Figura 1. 
            | Clasificación mercancías o productos
        .row.justify-content-center.figura-1
          .col-md-6.m-2.bg-figura-1.pb-5
            .img-figura-1
              .div
                img(src='@/assets/curso/tema2-3-fig1.svg' alt='Materias primas')
            .p-5
              h5 Materias primas
              p Sustancias, minerales o materiales naturales que no han sido sometidos a un proceso de transformación.
          
          .col-md-6.m-2.bg-figura-2.pb-5
            .img-figura-2
              .div
                img(src='@/assets/curso/tema2-3-fig2.svg' alt='Materias primas')
            .p-5
              h5 Productos en bruto
              p Sustancias, minerales o materiales naturales o artificiales que por sus características de volumen o requerimientos específicos necesitarán un acondicionamiento o medio de transporte especializado para su traslado.
          
          .col-md-6.m-2.bg-figura-3.pt-5
            .img-figura-3.pb-2
              .div
                img(src='@/assets/curso/tema2-3-fig3.svg' alt='Materias primas')
            .p-5
              h5 Semiproductos o productos intermedios
              p Sustancias o materiales naturales o artificiales que han sido sometidos a un proceso de transformación, estos posteriormente se integrarán dentro de un proceso productivo posterior.
          
          .col-md-6.m-2.bg-figura-4.pt-5
            .img-figura-4
              .div
                img(src='@/assets/curso/tema2-3-fig4.svg' alt='Materias primas')
            .p-5
              h5 Productos elaborados
              p Bienes obtenidos mediante un proceso de transformación de materia prima o productos intermedios destinados al consumo final.



    .h4.titulo-azul2.mb-4(data-aos="fade-right") 
      span Normativa para manejo de mercancía

    p.mb-4(data-aos="fade-right") Entendemos por normatividad a un conjunto de normas, y las más frecuentes para el manejo de mercancías son:

    .row.mb-4
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema2-3-ico.svg' alt='normatividad')
          .tarjeta.color-acento-contenido--borde
            .p-4.pt-2
              h5.text-center Ley 34 de 1989 para el régimen de las aduanas y el Decreto 402 de 2005 que aprueba el Reglamento para el Despacho Expreso de Envíos.

      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema2-3-ico.svg' alt='normatividad')
          .tarjeta.color-acento-contenido--borde
            .p-4.pt-2
              h5.text-center Resolución 4100 del 26 de diciembre de 2004 para el transporte de carga.

      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema2-3-ico.svg' alt='normatividad')
          .tarjeta.color-acento-contenido--borde
            .p-4.pt-2
              h5.text-center Código internacional de mercancías peligrosas.

    .row.justify-content-center(data-aos="fade-down")
      .col-md-10
        .row.cajon.color-acento-botones.p-4.mb-4
          .col-md-2
            img.px-3(src='@/assets/curso/tema2-3-ico2.svg' alt='Imagen decorativa')
          .col-md-10
            p Es importante tener en cuenta en el 
              italic retail:
            ul.lista-ul--color.mb-0
              li.mb-0
                i.fas.fa-square  
                | La correcta presentación de los productos que se encuentran en las góndolas. 
              li.mb-0 
                i.fas.fa-square  
                | No utilizar utensilios sucios. 
              li.mb-0 
                i.fas.fa-square  
                | Buena rotación de utensilios o instrumentos. 
              li.mb-0 
                i.fas.fa-square  
                | No recoger del suelo utensilios o instrumentos, aplicando siempre unas buenas prácticas de manufactura.       



</template>

<script>
import AcordeonB from '../components/AcordeonB'
import TabsD from '../components/TabsD'
export default {
  name: 'Tema2',
  components: {
    AcordeonB,
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
