<template>
    <div class="text-center">
    <q-form class="q-gutter-md q-pa-lg">
        <q-input square filled clearable v-model="this.jobtitle" label="Paste Job Title" class="q-py-md"/>
        <q-input square filled clearable v-model="this.location" label="Job Location" class="q-py-md"/>
        <q-select color="primary" v-model="this.company" :options="this.companies" label="Select Company" scrolling class="q-py-md"/>
        <q-select color="primary" v-model="this.exp" :options="this.experience" label="Select Degree" scrolling class="q-py-md"/>
        <q-btn color = "accent" align="center">Run Analysis</q-btn>
    </q-form>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useApi } from 'src/store/api';
import { useSummaryState } from 'src/store/summary'

export default defineComponent({
  name: 'JobDescForm',
  setup() {
      const {
        salaryApi
      } = useApi();
      const {
          jobtitle,
          location,
          company,
          exp,
          companies,
          experience
      } = useSummaryState();
      return {
          jobtitle,
          location,
          company,
          exp,
          companies,
          experience
      }
  },
});
</script>

<style>
</style>