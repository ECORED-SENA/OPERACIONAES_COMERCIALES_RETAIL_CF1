<template lang="pug">
.tabs-a
  .row
    .col-lg-5.col-xl-5
      .row
        .col-sm-6.col-lg-12.mb-3(
          v-for="(elm,index) of elements"
          :key="'tabs-menu-'+elm.id"
        )
          button.tabs-a__tab(
            :class="{'tabs-a__tab__selected': selected === elm.id}"
            @click="selected = elm.id"
            @mouseover="mostrarIndicador = mostrarIndicador && index >= 1 ? false : mostrarIndicador"
          ) 
            .tabs-a__tab__text(v-html="elm.titulo")
            .indicador__container(v-if="mostrarIndicador && index === 1")
              .indicador--click
    
    .col-lg-7.col-xl-7
      .tabs-a__content-item(
        v-for="elm of elements"
        :key="'tabs-a-content-'+elm.id"
        v-show="selected === elm.id"
        :class="{'tabs-a__content-item--active' : selected === elm.id}"
        v-child="elm.elm"
      )

  .hidden-slot
    slot

</template>

<script>
import componentSlotMixins from '../../node_modules/ecored-base-pkg/src/mixins/componentSlotMixins'
export default {
  name: 'TabsD',
  mixins: [componentSlotMixins],
  data: () => ({
    mostrarIndicador: true,
  }),
}
</script>

<style lang="sass"></style>
