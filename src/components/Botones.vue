<template lang="pug">
.tarjeta.color-primario__claro.p-4
  .row.align-items-center.justify-content-around
    .col-md-6.mb-4.mb-md-0
      h4.text-center ¿Qué significado tienen los números y las barras que están incluidos en este tipo de códigos?
      .botones
        img(src='@/assets/curso/botones-fondo.svg', alt='Texto que describa la imagen')
        .botones__item(
          v-for="(boton, index) in botones"
        )
          .botones__btn(
            :style="getStyles(boton, index)"
            @mouseover="hover = index"
            @mouseleave="hover = null"
            @click="selected = index"
          )
            .indicador--click(v-if="index === 1 && indicador")
    .col-md-6.col-lg-5
      .bg-azul.border-primario(v-if="selected === 0")
        img(src='@/assets/curso/tema1-5-boton1.jpg', alt='País')
        .p-3
          h4 1. País
          p.mb-0 Los dos primeros dígitos identifican al país del que proviene el artículo. 

      .bg-azul.border-primario(v-else-if="selected === 1")
        img(src='@/assets/curso/tema1-5-boton2.jpg', alt='Código empresa')
        .p-3
          h4 2. Código empresa
          p.mb-0 Los siguientes números, que abarcan la cantidad de cinco, indican el número que dispone la empresa en consecuencia.

      .bg-azul.border-primario(v-else-if="selected === 2")
        img(src='@/assets/curso/tema1-5-boton3.jpg', alt='Código producto')
        .p-3
          h4 3. Código producto
          p.mb-0 Se incluyen los números del producto que sirven para identificarlo. 

      .bg-azul.border-primario(v-else-if="selected === 3")
        img(src='@/assets/curso/tema1-5-boton4.jpg', alt='Dígito verificación')
        .p-3
          h4 4. Dígito verificación
          p.mb-0 El dígito de control es el último número que se vislumbra en un código de barras y es la comprobación de que todo está correcto y aporta seguridad para la gestión del producto.     

      .bg-azul.border-primario(v-else-if="selected === 4")
        img(src='@/assets/curso/tema1-5-boton5.jpg', alt='Dígito verificación')
        .p-3
          p.mb-0 Las barras que se incluyen en un código de barras tienen valores diferentes dependiendo siempre de la cantidad y la anchura que tengan. Habitualmente cada una de estas barras se compone de 8 subbarras situadas horizontalmente y de distinto color: blanco o negro. Aquí entra a formar parte el lenguaje binario, siendo el negro 1 y el blanco 0.


</template>

<script>
export default {
  name: 'Botones',
  data: () => ({
    indicador: true,
    selected: 0,
    hover: null,
    size: '5%',
    botones: [
      {
        img: require('@/assets/curso/botones-ico-a.svg'),
        img_h: require('@/assets/curso/botones-ico-b.svg'),
        pos_x: '23%',
        pos_y: '77%',
      },
      {
        img: require('@/assets/curso/botones-ico-a.svg'),
        img_h: require('@/assets/curso/botones-ico-b.svg'),
        pos_x: '39%',
        pos_y: '77%',
      },
      {
        img: require('@/assets/curso/botones-ico-a.svg'),
        img_h: require('@/assets/curso/botones-ico-b.svg'),
        pos_x: '58%',
        pos_y: '77%',
      },
      {
        img: require('@/assets/curso/botones-ico-a.svg'),
        img_h: require('@/assets/curso/botones-ico-b.svg'),
        pos_x: '72%',
        pos_y: '77%',
      },
      {
        img: require('@/assets/curso/botones-ico-a.svg'),
        img_h: require('@/assets/curso/botones-ico-b.svg'),
        pos_x: '48%',
        pos_y: '39%',
      },
    ],
  }),
  watch: {
    selected() {
      this.indicador = false
    },
    hover() {
      this.indicador = false
    },
  },
  methods: {
    getStyles(boton, index) {
      const image =
        this.hover === index || this.selected === index
          ? boton.img_h
          : boton.img
      return {
        'background-image': `url(${image})`,
        top: boton.pos_y,
        left: boton.pos_x,
        width: this.size,
        'padding-top': this.size,
      }
    },
  },
}
</script>

<style lang="sass" scoped>
.botones
  position: relative
.botones__btn
  background-size: cover
  position: absolute
  box-shadow: 3px 3px 3px 0px rgba(0,0,0,0.15)
  cursor: pointer
  border-radius: 50%
  transition: background-image 0.2s ease-in-out
</style>
