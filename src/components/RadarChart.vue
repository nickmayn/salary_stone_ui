<template>
  <VueApexCharts type="radar" :options="chartOptions" :series="series" title="Skill Popularity Breakdown" :width="600" ref="salaryChart"/>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
} from 'vue';
import VueApexCharts from 'vue3-apexcharts'
import { useApi } from 'src/store/api';


export default defineComponent({
  name: 'RadarChart',
  setup() {
      const {
        salaryApi
      } = useApi();

      return {
      salaryApi,
      chartOptions: {
        dataLabels: {
              enabled: true
        },
        colors: ['#29b027'],
        xaxis: {
          categories: ["python", "tensorflow", "pytorch", "simulation", "matlab", "machine learning", "C++", "R"],
        },
      },
      series: [
        {
          name: "Skill Breakdown",
          data: [50, 40, 35, 50, 49, 60, 70, 91],
        },
      ],
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