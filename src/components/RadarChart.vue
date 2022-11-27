<template>
  <VueApexCharts type="radar" :options="chartOptions" :series="extractedSkills" title="Skill Popularity Breakdown" :width="600" ref="salaryChart"/>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
} from 'vue';
import VueApexCharts from 'vue3-apexcharts'
import { useApi } from 'src/store/api';
import { useUnitState } from 'src/store/unitprice';


export default defineComponent({
  name: 'RadarChart',
  setup() {
      const {
        salaryApi
      } = useApi();
      const {
        extractedSkills
      } = useUnitState()

      return {
      salaryApi,
      extractedSkills,
      chartOptions: {
        title: {
              text: 'Skill Breakdown by Frequency Percentage Within Data',
              align: 'center'
        },
        // dataLabels: {
        //       enabled: true
        // },
        colors: ['#29b027'],
        xaxis: {
          type: 'category'
        }
      },
    };
  },
  methods: {
    async testMethod(): Promise<void> {
      try {
        const resp = await this.extractedSkills();
        const { data } = resp;
        if (data !== null) {
          this.$refs.salaryChart.updateOptions({xaxis: {
          categories: data,
        }});
        }
        console.log(data);
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