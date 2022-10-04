<template>
    <div class="text-center">
    <q-form class="q-gutter-md q-pa-lg">
        <q-input square filled clearable v-model="jtitle" label="Paste Job Title" class="q-py-md"/>
        <q-input square filled clearable v-model="jdesc" label="Paste Job Description" class="q-py-md" type="textarea"/>
        <q-input square filled clearable v-model="location" type="password" label="Job Location" class="q-py-md"/>
        <q-select color="primary" v-model="model" :options="companies" label="Select Company" scrolling class="q-py-md"/>
        <q-select color="primary" v-model="model2" :options="experience" label="Select Years Experience" scrolling class="q-py-md"/>
        <q-btn color = "accent" align="center">Run Analysis</q-btn>
    </q-form>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'InputForm',
  data() {
      return {
          companies: ['Capital One', 'MITRE', 'Booz Allen', 'SAIC'],
          experience: ['0-2', '2-5', '5-10', '10-20', '20+']
      }
  },
});
</script>

<style scoped>

</style>