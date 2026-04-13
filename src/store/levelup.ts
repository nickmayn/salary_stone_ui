import { reactive, toRefs } from 'vue';
import { useApi } from 'src/store/api';

const {
    salaryApi
  } = useApi();

const state = reactive({
    resume: '',
    expectedSalary: '92,500',
    loading: false,
    recRows: [
      { recskills: 'Kubernetes', recskillsalincrease: 14.2 },
      { recskills: 'Apache Spark', recskillsalincrease: 12.8 },
      { recskills: 'TensorFlow', recskillsalincrease: 11.5 },
      { recskills: 'Terraform', recskillsalincrease: 10.9 },
      { recskills: 'Scala', recskillsalincrease: 9.7 },
      { recskills: 'Go', recskillsalincrease: 8.3 },
      { recskills: 'Rust', recskillsalincrease: 7.6 },
    ],
    skills: [
      { x: 'Python' },
      { x: 'SQL' },
      { x: 'JavaScript' },
      { x: 'React' },
      { x: 'Docker' },
      { x: 'Machine Learning' },
      { x: 'Git' },
      { x: 'REST APIs' },
    ]
});

export async function extractSkills(resume: string) {
  const resp = await salaryApi.value.skillsSalarySkillsPost(resume);
  const { data } = resp;
  console.log(data);
  state.skills = data
}

export async function predictSalary(resume: string) {
  const resp = await salaryApi.value.predictSalaryPredictPost(resume);
  const { data } = resp;
  state.expectedSalary = data;
}

export async function recommendSkill(resume: string) {
  const resp = await salaryApi.value.recSalaryRecommendGet(resume);
  const { data } = resp;
  state.recRows = data;
}

export function useLevelUpState() {
    return { 
        ...toRefs(state) ,
        extractSkills,
        predictSalary,
        recommendSkill
    };
  }