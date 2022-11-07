import { reactive, toRefs } from 'vue';
import { useApi } from 'src/store/api';

const {
    salaryApi
  } = useApi();

const state = reactive({
    resume: '',
    expectedSalary: null
});

export function useLevelUpState() {
    return { 
        ...toRefs(state) ,
    };
  }