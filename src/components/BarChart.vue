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
          categories: ["50K - 59K", "60K - 69K", "70K - 79K", "80K - 89K", "90K - 99K", "100K - 109K", "110K - 119K", "120K - 129K"],
        },
      },
    };
  },
  components: {
      VueApexCharts
  }

});
</script>