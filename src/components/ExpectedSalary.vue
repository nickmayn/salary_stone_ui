<template>
<q-card flat>
    <div class="text-h4">Expected Salary:</div>
    <q-card-section>
    <div class="row text-white"> a</div>
    <div align="center" class="text-h2 text-green">${{ expectedSalary }}</div>
    </q-card-section>
    <q-card-section>
    <q-card-section>
        <div class="text-h4">Average Salary: ${{ avgSalary }}</div>
      </q-card-section>
      <q-card-section>
      <div class="text-h4">Standard Deviation Salary: ${{ stdSalary }}</div>
      </q-card-section>
    </q-card-section>
</q-card>
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
  name: 'ExpectedSalary',
  setup() {
      const {
        getSalaryStats,
        avgSalary,
        stdSalary,
        expectedSalary
      } = useUnitState();

      return {
      getSalaryStats,
      avgSalary,
      stdSalary,
      expectedSalary
    };
  },
  mounted() {
      this.getSalaryStats()
  },
  methods: {
  },
  components: {
  }

});
</script>