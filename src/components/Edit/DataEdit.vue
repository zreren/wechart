<template>
  <bar-data-edit v-if="$store.state.preChartType === 'bar'"/>
  <line-data-edit v-if="$store.state.preChartType === 'line'"/>
  <pie-data-edit v-if="$store.state.preChartType === 'pie'"/>
  <scatter-data-edit v-if="$store.state.preChartType === 'scatter'"/>

</template>

<script>
import BarDataEdit from './DataEditALL/BarDataEdit.vue'
import LineDataEdit from './DataEditALL/LineDataEdit.vue'
import PieDataEdit from './DataEditALL/pieDataEdit.vue'
import ScatterDataEdit from './DataEditALL/ScatterDataEdit.vue'
export default {
  components: { BarDataEdit, LineDataEdit, PieDataEdit, ScatterDataEdit },
  name:'DataEdit',
  setup() {
    
  }
}
</script>

<style lang = "less" scoped> 

</style>


