<template>
  <VueApexCharts type="bar" :options="chartOptions" :series="series" title="Metrics" :width="600" ref="salaryChart"/>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
} from 'vue';
import VueApexCharts from 'vue3-apexcharts'
import { useApi } from 'src/store/api';


export default defineComponent({
  name: 'BarChart',
  setup() {
      const {
        salaryApi
      } = useApi();

      return {
      salaryApi,
      chartOptions: {
        title: {
              text: 'Distribution of Salary by Skill',
              align: 'center'
        },
        xaxis: {
          categories: ["50K - 59K", "60K - 69K", "70K - 79K", "80K - 89K", "90K - 99K", "100K - 109K", "110K - 119K", "120K - 129K"],
        },
      },
      series: [
        {
          name: "python",
          data: [20, 40, 60, 50, 49, 60, 70, 91],
        },
        {
          name: "tensorflow",
          data: [10, 80, 50, 53, 40, 6, 10, 20],
        },
        {
          name: "pytorch",
          data: [50, 40, 35, 50, 49, 60, 70, 91],
        },
        {
          name: "modeling",
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