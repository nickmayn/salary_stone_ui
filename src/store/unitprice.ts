import { reactive, toRefs } from 'vue';
import { useApi } from 'src/store/api';

const {
    salaryApi,
    metricsApi
  } = useApi();

const state = reactive({
    jobdesc: '',
    expectedSalary: null,
    avgSalary: null,
    stdSalary: null,
    extractedSkills: null
});

export async function predictSalary(jobdesc: string) {
  const resp = await salaryApi.value.predictSalaryPredictPost(jobdesc);
  const { data } = resp;
  state.expectedSalary = data;
  const resp2 = await salaryApi.value.skillsSalarySkillsPost(jobdesc);
  const { data2 } = resp2;
  state.extractedSkills = data2;
}

export async function getSalaryStats() {
  const resp = await metricsApi.value.generalMetricsGet();
  const { data } = resp;
  state.avgSalary = data.average_salary
  state.stdSalary = data.std_salary
  // const resp = await salaryApi.value.
}

export function useUnitState() {
    return { 
        ...toRefs(state) ,
        predictSalary,
        getSalaryStats
    };
  }


  
  
