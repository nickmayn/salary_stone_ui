import { reactive, toRefs } from 'vue';
import { useApi } from 'src/store/api';

const {
    salaryApi
  } = useApi();

const state = reactive({
    jobdesc: '',
    expectedSalary: null
});

export async function predictSalary(jobdesc: string) {
  const resp = await salaryApi.value.predictSalaryPredictPost(jobdesc);
  const { data } = resp;
  console.log(data);
}

export function useUnitState() {
    return { 
        ...toRefs(state) ,
        predictSalary
    };
  }


  
  
