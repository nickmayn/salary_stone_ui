<template>
<q-card flat scrollable>
    <q-card-section><div class="text-h6"> Resume Skills Extracted</div></q-card-section>
    <span v-for="(index) in skills" :key="index">
    <q-chip size="lg" color="accent" text-color="white">{{index.x}}</q-chip>
    </span>
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
  name: 'SkillList',
  setup() {
      const {
        skills
      } = useLevelUpState();

      return {
      skills
    };
  },
  methods: {
  },
  components: {
  }

});
</script>