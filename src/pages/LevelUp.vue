<template>
<q-page class="column justify-start items-center items-stretch q-pa-lg">
    <div class="row">
      <div class="col-md-6">
        <skill-list/>
      </div>
      <div class="col-md-6">
        <resume-expected-salary/>
      </div>
    </div>
  <div class="col-md-6">
    <recommend-table/>
	</div>
</q-page>
</template>

<script lang="ts">
import RecommendTable from 'components/levelup/RecommendTable.vue';
import ResumeExpectedSalary from 'components/levelup/ResumeExpectedSalary.vue';
import SkillList from 'components/levelup/SkillList.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IndexPage',
  components: { 
    ResumeExpectedSalary, 
    RecommendTable, 
    SkillList },
});
</script>