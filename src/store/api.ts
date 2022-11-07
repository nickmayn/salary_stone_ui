import { reactive, toRefs } from 'vue';
import {
  Configuration,
  SalaryApi,
} from 'src/generated/salary';

  
const state = reactive({
  salaryApi: new SalaryApi(),
  isAdmin: false
});

export function useSalaryApi() {
  state.salaryApi = new SalaryApi();


  return {
    ...toRefs(state)
  };
}


export function useApi() {
  const token = localStorage.getItem('token') || '';
  const apiConf = new Configuration({ basePath: '/api', accessToken: token });
  state.salaryApi = new SalaryApi(apiConf);

  return {
    ...toRefs(state),
  };
}



  