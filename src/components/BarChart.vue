<template>
  <VueApexCharts type="bar" :options="chartOptions" :series="series" title="Metrics" :width="600"/>
  <q-btn color="white" text-color="black" label="Test" @click="testMethod" />
</template>

<script lang="ts">
import {
  defineComponent,
} from 'vue';
import VueApexCharts from 'vue3-apexcharts'
import { useSalaryApi } from 'src/store/api';


export default defineComponent({
  name: 'BarChart',
  setup() {
      const {
        salaryApi
      } = useSalaryApi();

      return {
      salaryApi,
      chartOptions: {
        chart: {
          id: "vuechart-example",
        },
        xaxis: {
          categories: ["50K - 59K", "60K - 69K", "70K - 79K", "80K - 89K", "90K - 99K", "100K - 109K", "110K - 119K", "120K - 129K"],
        },
      },
      series: [
        {
          name: "series-1",
          data: [50, 40, 35, 50, 49, 60, 70, 91],
        },
        {
          name: "series-2",
          data: [50, 40, 35, 50, 49, 60, 70, 91],
        },
        {
          name: "series-3",
          data: [50, 40, 35, 50, 49, 60, 70, 91],
        },
        {
          name: "series-4",
          data: [50, 40, 35, 50, 49, 60, 70, 91],
        },
      ],
    };
  },
  methods: {
    async testMethod(): Promise<void> {
      try {
        console.log(this.salaryApi);
        const resp = await this.salaryApi.testSalaryTestGet();
        const { data } = resp;
        const { result } = data;
        console.log(result);
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