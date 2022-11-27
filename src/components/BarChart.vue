<template>
  <VueApexCharts type="bar" :options="chartOptions" :series="skillBins" title="Metrics" :width="600" ref="salaryChart"/>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
} from 'vue';
import VueApexCharts from 'vue3-apexcharts'
import { useUnitState } from 'src/store/unitprice';


export default defineComponent({
  name: 'BarChart',
  setup() {

      const {
        skillBins
      } = useUnitState()

      return {
      skillBins,
      chartOptions: {
        title: {
              text: 'Distribution of Salary by Skill',
              align: 'center'
        },
        xaxis: {
          categories: ['0-50k',
 '50k-64k',
 '64k-79k',
 '79k-93k',
 '93k-108k',
 '108k-122k',
 '122k-137k',
 '137k-151k',
 '151k-166k',
 '166k-180k',
 '180k-inf'],
        },
      },
    };
  },
  components: {
      VueApexCharts
  }

});
</script>