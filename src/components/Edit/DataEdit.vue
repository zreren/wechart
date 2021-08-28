<template>
  <div style="position: relative;">
  <bar-data-edit v-if="$store.state.preChartType === 'bar'"/>
  <line-data-edit v-if="$store.state.preChartType === 'line'"/>
  <pie-data-edit v-if="$store.state.preChartType === 'pie'"/>
  <scatter-data-edit v-if="$store.state.preChartType === 'scatter'"/>
  <i @click="$router.push('/edit/upload')" index="1" class="el-icon-upload upload"></i>
            <!-- <upload/> -->
  </div>
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
  .upload {
    position: absolute;
    top: 0;
    left: 0;
  }
</style>


