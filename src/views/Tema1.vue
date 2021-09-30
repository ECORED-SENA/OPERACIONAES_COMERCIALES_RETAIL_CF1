<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 Gestión logística de inventarios en el punto de venta

    .row
      .col-lg-7.mb-4(data-aos="fade-right")
        p El inventario no es más que una organización de elementos de forma ordenada y valorada a través de un proceso de levantamiento de datos. El mismo ayuda a las empresas a llevar un control y orden de sus bienes, almacenes y bodegas, estimulando a todo el proceso comercial y de producción en aras de garantizar el producto final para todo consumidor.
        .cajon.color-acento-botones.p-4.mb-4
          p.mb-0 El mismo tiene una estructura predefinida conteniendo información de valor de los productos como su volumen, tamaño y estructura, asociadas a la función de proveer y distribuir y estas asociadas a su vez en la opción logística a desarrollar.
      .col-lg-5.mb-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema1-img1.png', alt='Imagen decorativa')  

    Separador


    // 1.1
    #t_1_1.titulo-segundo(data-aos="fade-right")
      .h2 1.1  Conceptos básicos

    p.mb-4(data-aos="fade") Para establecer una explicación de la logística comercial, se puede indicar que es ese deber y actividad que ejecuta toda empresa para organizar, hacer previsiones y controlar el movimiento de información, materias primas o productos finales, desde las fases de aprovisionamiento, hasta llegar a un usuario final. 
      br
      | Es así como la logística comercial se apoya de los siguientes conceptos:  

    .row.justify-content-center(data-aos="fade-down")
      .col-md-10
        .row.mb-3
          .col-md-2.col-4.bg-azul.px-md-2
            img.p-md-4.p-1.py-4(src='@/assets/curso/tema1-1-ico1.svg', alt='Abastecimiento de materiales')
          .col-md-10.col-8.p-3.bg-gris
            h5 Abastecimiento de materiales
            p.mb-0 Es el conjunto de actividades que permiten identificar y adquirir los bienes y servicios que una organización requiere, para su operación adecuada y eficiente, ya sea de fuentes internas o externas.
        .row.mb-3
          .col-md-2.col-4.bg-azul.px-md-4
            img.p-md-4.p-2.py-4(src='@/assets/curso/tema1-1-ico2.svg', alt='Cumplimiento de pedidos')
          .col-md-10.col-8.p-3.bg-gris
            h5 Cumplimiento de pedidos
            p.mb-0 Es el proceso de registrar el inventario de mercancías, pedidos a los proveedores, evitando las roturas de 
              italic stock, entre otras acciones.
        .row.mb-3
          .col-md-2.col-4.bg-azul.px-md-3
            img.p-md-4.p-1.py-4(src='@/assets/curso/tema1-1-ico3.svg', alt='Almacenamiento')
          .col-md-10.col-8.p-3.bg-gris
            h5 Almacenamiento
            p.mb-0 Es el manejo temporal de insumos o mercancías, manteniéndolos bajo control en un determinado espacio para evitar su deterioro y reducir los desperdicios.
        .row.mb-3
          .col-md-2.col-4.bg-azul.px-md-3
            img.p-md-4.p-1.py-4(src='@/assets/curso/tema1-1-ico4.svg', alt='Previsión de la demanda')
          .col-md-10.col-8.p-3.bg-gris
            h5 Previsión de la demanda
            p.mb-0 Es el cálculo de las compras que debemos realizar sobre el producto para estar siempre abastecidos de 
              italic stock.
        .row.mb-3
          .col-md-2.col-4.bg-azul.px-md-3
            img.p-md-4.p-1.py-4(src='@/assets/curso/tema1-1-ico5.svg', alt='Gestión del inventario')
          .col-md-10.col-8.p-3.bg-gris
            h5 Gestión del inventario
            p.mb-0 Es el proceso de dirigir, acumular y utilizar el inventario, desde las materias primas hasta el producto terminado.   
        .row.mb-3
          .col-md-2.col-4.bg-azul.px-md-2
            img.p-md-4.py-4(src='@/assets/curso/tema1-1-ico6.svg', alt='Gestión de la cadena de suministro')
          .col-md-10.col-8.p-3.bg-gris
            h5 Gestión de la cadena de suministro
            p.mb-0 De acuerdo con las siglas en inglés (SCM), se describe a la gestión de la cadena de suministro como la optimización del espacio y el flujo de un producto desde el abastecimiento de la materia prima hasta la producción, la logística y la entrega al cliente final.  

    Separador


    // 1.2
    #t_1_2.titulo-segundo(data-aos="fade-right")
      .h2 1.2  Inventario

    .row
      .col-lg-7.mb-4(data-aos="fade-right")
        p El inventariar es cuando se procede a tener un número real y contrastado de elementos que hay en almacenamiento, donde se valida no solo número, sino también estado y valor. Es un proceso vital para conocer la magnitud de elementos que se tienen en resguardo, 
          span.etiqueta convirtiéndose en un elemento de validación y control.
        .cajon.color-acento-botones.p-4.mb-4
          p.mb-0 El marco normativo de nuestro país exige que anualmente (al menos), lo realicen de forma obligatoria.
        p La función contable va de la mano de este y suele coincidir su realización con los cierres económicos de la organización, ya que el mismo se convierte en insumo para los cierres y balances económicos que también son normativos establecidos en la legislación.  
      .col-lg-5.mb-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema1-2-img1.png', alt='Imagen decorativa')  

    .row.border-acento-contenido.mb-4.p-md-4.p-3
      .col-lg-7.mb-4.mb-md-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema1-2-img2.png', alt='Imagen decorativa') 
      .col-lg-5.mb-4.mb-md-0(data-aos="fade-left")
        p Las características del inventario son:
        ul.lista-ul--color
          li 
            i.fas.fa-square
            p
              strong Periódico: 
              | se realiza al cumplimiento de periodos contables. Con el mismo se hace el levantamiento de los elementos disponibles en el momento de su realización. 
          li 
            i.fas.fa-square
            p
              strong Continuo: 
              | cuando se hace de forma constante para obtener el stock en disposición a tiempo real, descontando las salidas que se realicen. 

    p.mb-4(data-aos="fade") Y las clasificaciones más importantes de los inventarios, son:

    .row
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema1-2-ico1.svg' alt='Materias primas')
          .tarjeta.color-acento-contenido--borde
            .p-4.pt-2
              h4.text-center Materias primas
              p.text-center Registran material que forma parte del proceso productivo y es suministrado por el proveedor.

      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema1-2-ico2.svg' alt='Productos semiterminados')
          .tarjeta.color-acento-contenido--borde
            .p-4.pt-2
              h4.text-center Productos semiterminados
              p.text-center Registran las fases por las que pasa el producto dentro de su proceso de fabricación o producción.

      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema1-2-ico3.svg' alt='Productos terminados')
          .tarjeta.color-acento-contenido--borde
            .p-4.pt-2
              h4.text-center Productos terminados
              p.text-center Recogen los productos que tienen como destino la venta al cliente.

    Separador


    // 1.3
    #t_1_3.titulo-segundo(data-aos="fade-right")
      .h2 1.3  Recursos

    .row
      .col-lg-6.mb-4(data-aos="fade-right")
        p Se entiende por recursos los componentes a disposición de la actividad logística que permita realizar la labor, y con la que se debe contar para el cumplimiento de las funciones en el 
          italic retail, 
          | pudiendo ser de tipo humano o material. 
        p Los recursos y sus herramientas dependen del tipo de proceso logístico que se van a desempeñar, en lo relacionado al 
          italic retail, 
          | generalmente se pueden tener las famosas 
          italic Manitou, 
          | elevadores, grúas, transportadoras, remolcadoras, cintas de transportación, 
          italic pallets, containers, 
          | plataformas móviles, entre otros.
      .col-lg-6.mb-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema1-3-img.png', alt='Imagen decorativa')  

    Separador


    // 1.4
    #t_1_4.titulo-segundo(data-aos="fade-right")
      .h2 1.4  Herramientas     

    .row
      .col-lg-6.mb-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema1-4-img.png', alt='Imagen decorativa') 
      .col-lg-6.mb-4(data-aos="fade-right")
        p En otro orden de ideas, las aplicaciones informáticas de base de datos y hojas de cálculo aplicado a la gestión de inventarios son las más comunes, como herramientas de control en los diferentes 
          italic retail 
          | o formatos comerciales del mercado.
        p Para la gestión y control de los inventarios existen en el mercado multitud de 
          italic softwares 
          | que permiten dicha labor de la manera más eficiente. Evidentemente, dichas aplicaciones son generalmente de pago y producidas por grandes compañías como Microsoft o SAP cuyos costes, en la mayoría de los casos, son imposibles de sufragar para muchas empresas.

    .row.justify-content-center(data-aos="fade-down")
      .col-md-10
        .cajon.color-acento-botones.p-4.mb-4
          p.mb-0 Existen diferentes empresas, con presupuestos y recursos que varían notablemente en cuantía, esto no debería ser un impedimento para la consecución de herramientas para este fin, ya que a través de aplicaciones como 
            italic Excel 
            | o la utilización de 
            italic software 
            | libre o gratuito le permitirían tener una gestión aceptable de su proceso de control y gestión de inventarios.

    p(data-aos="fade") En aquellas empresas donde los inventarios adquieren volúmenes realmente grandes, la utilización de estas herramientas ofimáticas no resulta viable ni eficaz, por lo que recurrir a las aplicaciones de pago antes mencionadas es la única opción que tienen para realizar una correcta gestión de sus inventarios. 

    Separador


    // 1.5
    #t_1_5.titulo-segundo(data-aos="fade-right")
      .h2 1.5  Código de barras

    .row
      .col-lg-6.mb-4(data-aos="fade-left")
        p La tecnología siempre ha traído innovaciones a diferentes campos, en este caso el código de barras es un elemento de gran valor que se usa desde hace muchos años y ha permitido almacenar gran cantidad de datos de un producto, servicio o localización.
      .col-lg-6.mb-4(data-aos="fade-right")
        h4 Un código de barras está compuesto por números y barras que identifican un producto y, además, es obligatorio incluirlo en la mayoría de los artículos. 

    .row.justify-content-center(data-aos="fade-down")
      .col-md-8
        .cajon.color-acento-botones.p-4.mb-4
          p.mb-0 El mismo es fácilmente distinguible por su composición de barras y números que dan identidad a todo producto y cuyo uso es obligatorio para la mayoría de estos.

    p.mb-4(data-aos="fade") Los códigos de barras son muy útiles a la hora de gestionar los productos en un comercio, muestra una información esencial del artículo cuando se pasa a través de unos lectores láser, esta acción se lleva a cabo principalmente para hacer inventario en la empresa y el registro en el punto de pago de manera eficaz y eficiente para que queden perfectamente identificados o registrados. 

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-md-10.bg-morado.py-4
        Botones

    .h4.titulo-azul2.mb-4(data-aos="fade-right") 
      span ¿Por qué es importante el uso del código de barras?

    p.mb-4(data-aos="fade") Porque:

    .row
      .col-lg-2.mb-4(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema1-5-img1.svg', alt='Imagen decorativa') 
      .col-lg-10.mb-4(data-aos="fade-left")
        ul.lista-ul--color
          li 
            i.fas.fa-square
            | Ayudan en el proceso de inventariar al interior de las empresas de forma fácil y óptima de cada al proceso.
          li 
            i.fas.fa-square
            | A la hora de la facturación de cada compra, ayuda a ubicar y contabilizar el mismo dentro de la cuenta sin dar paso al error de una digitalización manual.
          li 
            i.fas.fa-square
            | En la lista de compra gracias al mismo se puede ver con claridad cada artículo adquirido y facilitar la validación por parte del comprador.
          li 
            i.fas.fa-square
            | Permite tener un control y visión estadística que ayude en la toma de decisiones dentro de la estrategia empresarial.
          li 
            i.fas.fa-square
            | Su uso es difundido a multitud de artículos y sectores, a tal punto que la mayoría de los productos que se disponen a la venta lo poseen.
          li 
            i.fas.fa-square
            | Su uso ha permitido agilizar todas las tareas y facilitar la labor humana al utilizar dichos códigos.        

    p.mb-4(data-aos="fade") Los tipos de códigos de barras más comunes son los siguientes:

    .row
      .col-lg-5.mb-4(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema1-5-img2.png', alt='Imagen decorativa') 
      .col-lg-7.mb-4(data-aos="fade-left")
        TabsA.color-acento-contenido
          .tarjeta.tarjeta--azul.p-4(titulo="EAN")
            h4 Código de barras EAN 
              italic (European Article Number)
            p.mb-0 También conocido como GTIN-13 o EAN-13, es un tipo de código de barras utilizado internacionalmente para identificar productos individuales en un punto de venta.  
          .tarjeta.tarjeta--azul.p-4(titulo="UPC")
            h4 Código de barras UPC
              italic (Universal Product Code)
            p.mb-0 El código UPC (siglas de 
              italic Universal Product Code
              | ) es un código de barras diseñado especialmente para identificar de manera inequívoca productos y consiste en un número único de 12 dígitos que se representan por barras de diferentes anchos y separación entre ellas para ser legibles por un scanner especializado.
          .tarjeta.tarjeta--azul.p-4(titulo="<em>Code</em> 39")
            h4 Código de barras   
              italic Code 
              | 39 (
              italic Code 
              | 3 of 9)
            p.mb-0 Es el código de barras que se utiliza de manera más habitual en aplicaciones personalizadas. Se utiliza muy a menudo, porque admite tanto texto como números (A-Z, 0-9, +, -, ., y &#60;espacio&#62;). Puede ser leído por casi cualquier lector de código de barras con su configuración predeterminada.
          .tarjeta.tarjeta--azul.p-4(titulo="<em>Code</em> 128")
            h4 CODE 128
            p CODE 128 es un código de barras desarrollado por 
              italic Computer Identics Corporation 
              | (EE. UU.) en 1981. El código de barras CODE 128 puede representar todos los 128 caracteres del código ASCII (números, mayúsculas/minúsculas de alfabetos, símbolos y códigos de control).
          .tarjeta.tarjeta--azul.p-4(titulo="ITF")
            h4 
              italic Interleaved Two of Five 
              | (ITF)
            p Es ampliamente utilizado como el código de distribución estándar impreso en cajas de cartón corrugado. Hay varios tipos llamados “2 of 5”. Aunque su composición es similar, el código es completamente diferente.
          .tarjeta.tarjeta--azul.p-4(titulo="<em>POSTNET</em>")
            h4 
              italic POSTNET
            p Es una técnica postal de codificación numérica que se utiliza para clasificar el correo para la entrega, con el código postal de destino.
          .tarjeta.tarjeta--azul.p-4(titulo="PDF 417")
            h4 PDF 417
            p Es un código de barras apiladas que se puede utilizar para codificar grandes cantidades de información a través de múltiples códigos. Cada patrón en un código de barras individual consiste exactamente de 4 barras y 4 espacios, y cada patrón es de 17 unidades de longitud.
          .tarjeta.tarjeta--azul.p-4(titulo="QR")
            h4 QR
            p Combinación de barras y cuadros que acompaña a un producto o unidad de consumo para que pueda ser leído y descifrado mediante un lector óptico que transmite los datos a una máquina o una computadora.

    Separador


    // 1.6
    #t_1_6.titulo-segundo(data-aos="fade-right")
      .h2 1.6  
        italic Software 
        | para la captura de código de barras

    p.mb-4(data-aos="fade") Existen diverso 
      italic softwares 
      | para la captura de los códigos de barras, algunos de ellos son:    

    .row
      .col-md-3.mb-3
        .tarjeta-hover
          .titulo-azul.py-4.p-3  
            img.icono-1-6.mb-3(src='@/assets/curso/tema1-6-ico.svg', alt='Barcode Studio (Windows y Mac® OS)') 
            h3.text-white.text-center.mb-0 
              italic Barcode Studio (Windows y Mac® OS)
          .contenido-azul.py-4.p-3   
            p.text-center.mb-0 Proporciona una forma fácil y adecuada de crear códigos de barras visualmente y exportarlos como imagen o como un fichero de gráficos vectoriales, ofreciendo capacidades muy eficientes de impresión en las etiquetas.

      .col-md-3.mb-3
        .tarjeta-hover
          .titulo-morado.py-4.p-3 
            img.icono-1-6.mb-3(src='@/assets/curso/tema1-6-ico.svg', alt='TBarCode Office') 
            h3.text-white.text-center.mb-0 
              italic TBarCode Office
          .contenido-morado.py-4.p-3   
            p.text-center.mb-0 El complemento de código de barras 
              italic TBarCode Office 
              | se integra perfectamente en 
              italic Microsoft Office 
              | y es fácil de utilizar gracias a su intuitiva interfaz de usuario. Además, proporciona acceso a todos los parámetros del código de barras. Esta combinación hace de 
              italic TBarCode Office 
              | el complemento de código de barras más avanzado del mercado.

      .col-md-3.mb-3
        .tarjeta-hover
          .titulo-azul.py-4.p-3  
            img.icono-1-6.mb-3(src='@/assets/curso/tema1-6-ico.svg', alt='TBarCode SDK') 
            h3.text-white.text-center.mb-0 
              italic TBarCode SDK
          .contenido-azul.py-4.p-3   
            p.text-center.mb-0 El componente de software de código de barras TBarCode “Todo En Uno” (para 
              italic Microsoft® Windows
              | ), genera e imprime todos los códigos de barras con aplicaciones diversas y cualquier tipo de impresora. Este flexible generador de código de barras soporta más de 100 tipos de códigos de barras diferentes. Entre ellos se encuentran códigos de barras lineales y 2D como 
              italic Code128, EAN128, Datamatrix, QR Code, PDF417, Aztec Code, GS1 DataBar.

      .col-md-3
        .tarjeta-hover 
          .titulo-morado.py-4.p-3
            img.icono-1-6.mb-3(src='@/assets/curso/tema1-6-ico.svg', alt='TBarCode/X') 
            h3.text-white.text-center.mb-0 
              italic TBarCode/X
          .contenido-morado.py-4.p-3   
            p.text-center.mb-0 Es un completo de 
              italic software 
              | de código de barras para 
              italic Linux®, UNIX® y Mac OS X. 
              | Permite producir todos los formatos más comunes de código de barras (lineales, 2D y compuestos) con una calidad perfecta creando códigos de barras automáticamente durante la impresión “sobre la marcha”. De este modo, puede convertir cada impresora de la empresa en una impresora de código de barras sin costes adicionales.


</template>

<script>
import Botones from '../components/Botones.vue'
export default {
  name: 'Tema1',
  components: {
    Botones,
  },
  data: () => ({
    mostrarIndicador: true,
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
