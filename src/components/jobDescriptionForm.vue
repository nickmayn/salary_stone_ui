<template>
    <div class="text-center">
    <q-form class="q-gutter-md q-pa-lg">
        <q-input square filled clearable v-model="this.jobdesc" label="Paste Job Description" class="q-py-md" type="textarea" rows="30" overflow="hidden"/>
        <q-btn color = "accent" align="center" @click="submitJob()">Run Analysis</q-btn>
    </q-form>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useApi } from 'src/store/api';
import { useUnitState } from 'src/store/unitprice'

export default defineComponent({
  name: 'JobDescForm',
  setup() {
      const {
        salaryApi
      } = useApi();
      const {
          jobdesc,
          predictSalary,
          extractSkills,
          extractedSkills,
          extractSkillSalaryBins,
          extractSkillSimilarity,
          getSalaryStats,
      } = useUnitState();
      return {
          salaryApi,
          jobdesc,
          predictSalary,
          extractSkills,
          extractedSkills,
          extractSkillSimilarity,
          extractSkillSalaryBins,
          getSalaryStats
      }
  },
  methods: {
      submitJob() {
          this.getSalaryStats();
          this.predictSalary(this.jobdesc);
          this.extractSkills(this.jobdesc);
          this.extractSkillSalaryBins(this.jobdesc);
          this.extractSkillSimilarity(this.jobdesc);
      }
  }
});
</script>

<style scoped>

</style>