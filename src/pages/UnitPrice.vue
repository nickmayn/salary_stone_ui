<template>
<q-page class="column justify-start">
	<div class="column col absolute-full q-pa-md">
		<div class="col-4 col-md-6">
    <q-card flat style="height: 45vh">
    <div class="text-h4">Expected Salary:</div>
    <q-card-section>
    <div class="row text-white"> a</div>
    <div class="row text-white"> a</div>
    <div class="row text-white"> a</div>
    <div align="center" class="text-h1 text-green">$100,000</div>
    </q-card-section>
    </q-card>
    </div>
    <div class="col-4 col-md-6"><bar-chart/></div>
    <div class="col-4 col-md-6"><radar-chart/></div>
    <div class="col-4 col-md-6"><bar-chart/></div>
	</div>
</q-page>
</template>

<script lang="ts">
import RadarChart from 'components/RadarChart.vue';
import BarChart from 'components/BarChart.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IndexPage',
  components: { 
    RadarChart,
    BarChart 
  },
});
</script>