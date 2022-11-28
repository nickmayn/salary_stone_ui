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
import { useLevelUpState } from 'src/store/levelup';


export default defineComponent({
  name: 'ResumeExpectedSalary',
  setup() {
      const {
        expectedSalary
      } = useLevelUpState();

      return {
      expectedSalary
    };
  },
  methods: {
  },
  components: {
  }

});
</script>