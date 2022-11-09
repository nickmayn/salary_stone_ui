<template>
<q-page class="column justify-start">
	<div class="column col absolute-full q-pa-md">
		<div class="col-4 col-md-6" align="center">
    <expected-salary/>
    </div>
    <div class="col-4 col-md-6" align="center">
      <bar-chart/>
    </div>
    <div class="col-4 col-md-6" align="center">
      <radar-chart/>
    </div>
    <div class="col-4 col-md-6" align="center">
      <salary-statistic/>
    </div>
	</div>
</q-page>
</template>

<script lang="ts">
import RadarChart from 'components/RadarChart.vue';
import BarChart from 'components/BarChart.vue';
import SalaryStatistic from 'components/SalaryStatistic.vue'
import ExpectedSalary from 'components/ExpectedSalary.vue'
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