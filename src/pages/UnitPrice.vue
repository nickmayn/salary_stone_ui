<template>
<q-page class="column justify-start items-center items-stretch q-pa-lg">
    <div class="row">
      <div class="col-md-6">
        <expected-salary/>
      </div>
      <div class="col-md-6">
        <radar-chart/>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <bar-chart/>
      </div>
      <div class="col-md-6">
        <salary-statistic/>
      </div>
    </div>
</q-page>
</template>

<script lang="ts">
import RadarChart from 'components/unitprice/RadarChart.vue';
import BarChart from 'components/unitprice/BarChart.vue';
import SalaryStatistic from 'components/unitprice/SalaryStatistic.vue'
import ExpectedSalary from 'components/unitprice/ExpectedSalary.vue'
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IndexPage',
  components: { 
    RadarChart,
    BarChart,
    SalaryStatistic,
    ExpectedSalary
  },
});
</script>