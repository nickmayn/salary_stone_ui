<template>
<q-card flat>
  <q-card-section><div class="text-h6">Skill by Potential Salary Increase</div></q-card-section>
    <q-table
      class="my-sticky-virtscroll-table"
      style="height: 500px"
      virtual-scroll
      :loading="loading"
      row-key="index"
      :rows="recRows"
      :columns="columns"
    />
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
  name: 'RecommendTable',
  setup() {
      const {
        recRows,
        loading
      } = useLevelUpState();
      const columns = [
          { name: 'recSkills', align: 'center', label: 'Recommended Skills', field: 'recskills', sortable: true },
          { name: 'recSkillSalIncrease', align: 'center', label: 'Expected Salary Increase (%)', field: 'recskillsalincrease', sortable: true },
      ]

      return {
      recRows,
      loading,
      columns
    };
  },
  methods: {
  },
  components: {
  }

});
</script>