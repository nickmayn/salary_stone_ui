<template>
  <VueApexCharts type="radialBar" :options="chartOptions" :series="similarity.vals" title="Skill Popularity Breakdown" :width="500" ref="salaryChart"/>
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
        similarity
      } = useUnitState()

      return {
        similarity,
        chartOptions: {
              chart: {
                height: 350,
                type: 'radialBar',
              },
              title: {
                text: 'Skillset Match Percentage by Job Title',
                align: 'center'
              },
              plotOptions: {
                radialBar: {
                  dataLabels: {
                    name: {
                      fontSize: '22px',
                    },
                    value: {
                      fontSize: '16px',
                    },
                    total: {
                      show: true,
                      label: 'Total',
                    }
                  }
                }
              },
              labels: ['Java Developer', 'UI Developer', 'Machine Learning Engineer', 'Full Stack Engineer', 'Data Scientist', 'Data Analyst'],
            },
          series: [44, 55, 67, 83, 90, 30],
    };
  },
  components: {
      VueApexCharts
  }

});
</script>