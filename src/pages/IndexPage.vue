<template>
<q-page class="column justify-start items-center">
	<div class="column col absolute-full">
		<div class="col-4 col-md-6"><bar-chart/></div>
    <div class="col-4 col-md-6"><bar-chart/></div>
    <div class="col-4 col-md-6"><bar-chart/></div>
    <div class="col-4 col-md-6"><bar-chart/></div>
	</div>
</q-page>
</template>

<script lang="ts">
import BarChart from 'components/BarChart.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IndexPage',
  components: { BarChart },
});
</script>
