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
    extractedSkills: [],
    skillBins: [],
    similarity: {vals: [], labs: []}
});

export async function predictSalary(jobdesc: string) {
  const resp = await salaryApi.value.predictSalaryPredictPost(jobdesc);
  const { data } = resp;
  state.expectedSalary = data;
}

export async function extractSkills(jobdesc: string) {
  // // const resp = await salaryApi.value.skillsSalarySkillsPost(jobdesc);
  // const { data } = resp;
  // state.extractedSkills = data;
  console.log(jobdesc);
  if (jobdesc === 'foo') {
    state.extractedSkills = [
      {
        name: "Skill Breakdown",
        data: [100, 80, 95, 50, 59, 40, 100, 99],
      },
    ];
  }
  else {
    state.extractedSkills = [
      {
        name: "Skill Breakdown",
        data: [10, 80, 45, 10, 29, 40, 100, 19],
      },
    ];
  }
}

export async function extractSkillSalaryBins(skills: any) {
  if (skills === 'foo') {
    state.skillBins = [
      {
        name: "python",
        data: [20, 40, 60, 50, 49, 60, 70, 91],
      },
      {
        name: "tensorflow",
        data: [10, 80, 50, 53, 40, 6, 10, 20],
      },
      {
        name: "pytorch",
        data: [50, 40, 35, 50, 49, 60, 70, 91],
      },
      {
        name: "modeling",
        data: [50, 40, 35, 50, 49, 60, 70, 91],
      },
    ]
  } else {
    state.skillBins = [
      {
        name: "python",
        data: [20, 40, 60, 50, 49, 60, 70, 91],
      },
      {
        name: "tensorflow",
        data: [10, 80, 50, 53, 40, 6, 10, 20],
      },
    ]
  }
}

export async function extractSkillSimilarity(jobdesc: any) {
  if (jobdesc === 'foo') {
    state.similarity.vals = [44, 55, 67, 83, 90, 30]
    state.similarity.labs = ['Java Developer', 'UI Developer', 'Machine Learning Engineer', 'Full Stack Engineer', 'Data Scientist', 'Data Analyst']
  } else {
    state.similarity.vals = [44, 55, 67]
    state.similarity.labs = ['Full Stack Engineer', 'Data Scientist', 'Data Analyst']
  }
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
        extractSkills,
        getSalaryStats,
        extractSkillSalaryBins,
        extractSkillSimilarity
    };
  }


  
  
