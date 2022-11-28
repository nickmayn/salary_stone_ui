<template>
  <VueApexCharts type="radialBar" :options="chartOptionsRadial" :series="similarity.vals" title="Skill Popularity Breakdown" :width="500" ref="salaryChart"/>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
} from 'vue';
import VueApexCharts from 'vue3-apexcharts'
import { useUnitState } from 'src/store/unitprice';


export default defineComponent({
  name: 'SalaryStatistic',
  setup() {
      const {
        similarity,
        chartOptionsRadial
      } = useUnitState()

      return {
        similarity,
        chartOptionsRadial,
        series: [44, 55, 67, 83, 90, 30],
    };
  },
  components: {
      VueApexCharts
  },
  mounted() {
    this.$nextTick(() => {
        window.dispatchEvent(new Event('resize'));
    });
}

});
</script>