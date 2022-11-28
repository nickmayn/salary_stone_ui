<template>
<q-card flat>
    <q-card-section><div class="text-h6">Expected Salary:</div></q-card-section>
    <q-card-section>
    <div class="row text-white"> a</div>
    <div align="center" class="text-h2 text-green">${{ expectedSalary }}</div>
    </q-card-section>
    <q-card-section>
    <q-card-section>
        <div class="text-h6">expected salary is not to be used as ground truth just an estimate.</div>
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