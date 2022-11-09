<template>
  <VueApexCharts type="radialBar" :options="chartOptions" :series="series" title="Skill Popularity Breakdown" :width="500" ref="salaryChart"/>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
} from 'vue';
import VueApexCharts from 'vue3-apexcharts'
import { useApi } from 'src/store/api';


export default defineComponent({
  name: 'SalaryStatistic',
  setup() {
      const {
        salaryApi
      } = useApi();

      return {
      salaryApi,
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
  methods: {
    async testMethod(): Promise<void> {
      try {
        const resp = await this.salaryApi.testSalaryTestGet();
        const { data } = resp;

        this.$refs.salaryChart.updateOptions({xaxis: {
          categories: data,
        }});
      } catch (e) {
        console.error(e);
      }
    }

  },
  components: {
      VueApexCharts
  }

});
</script>