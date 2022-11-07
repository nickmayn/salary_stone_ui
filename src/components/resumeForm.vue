<template>
    <div class="text-center">
    <q-form class="q-gutter-md q-pa-lg">
        <q-input square filled clearable v-model="this.resume" label="Paste Resume Content" class="q-py-md" type="textarea" rows="30" overflow="hidden"/>
        <q-btn color = "accent" align="center">Run Analysis</q-btn>
    </q-form>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useApi } from 'src/store/api';
import { useLevelUpState } from 'src/store/levelup'

export default defineComponent({
  name: 'resumeForm',
  setup() {
      const {
        salaryApi
      } = useApi();
      const {
          resume,
      } = useLevelUpState();
      return {
          salaryApi,
          resume,
      }
  },
});
</script>

<style scoped>

</style>