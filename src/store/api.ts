import { reactive, toRefs } from 'vue';
import { SalaryApi } from 'src/generated/salary';
  
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



  