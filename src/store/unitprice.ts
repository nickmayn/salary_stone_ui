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
    similarity: {vals: []},
    chartOptionsRadial: {
      chart: {
        height: 350,
        type: 'radialBar',
      },
      title: {
        text: 'Skillset Match Percentage by Job Title',
        align: 'center'
      },
      plotOptions: {
        radialBar: {
          dataLabels: {
            name: {
              fontSize: '22px',
            },
            value: {
              fontSize: '16px',
            },
            total: {
              show: true,
              label: 'Average Similarity Score',
            }
          }
        }
      },
      labels: []
    },
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
  const resp = await salaryApi.value.skillsSalarySkillsPost(jobdesc);
  const { data } = resp;
  state.extractedSkills = [
    {
      name: "Skill Breakdown",
      data: data
    }
  ]
  // if (jobdesc === 'foo') {
  //   state.extractedSkills = [
  //     {
  //       name: "Skill Breakdown",
  //       data: [100, 80, 95, 50, 59, 40, 100, 99],
  //     },
  //   ];
  // }
  // else {
  //   state.extractedSkills = [
  //     {
  //       name: "Skill Breakdown",
  //       data: [10, 80, 45, 10, 29, 40, 100, 19],
  //     },
  //   ];
  // }
}

export async function extractSkillSalaryBins(jobdesc: string) {
  const resp = await salaryApi.value.skillsalbinSalarySkillsalbinGet(jobdesc);
  const { data } = resp;
  state.skillBins = data;
}

export async function extractSkillSimilarity(jobdesc: any) {
  const resp = await salaryApi.value.skillsimSalarySkillsimGet(jobdesc);
  const { data } = resp;
  state.similarity.vals = data.score;
  console.log(data.title);
  state.chartOptionsRadial = {...this.chartOptionsRadial, ...{
    labels: data.title
}}
  // if (jobdesc === 'foo') {
  //   state.similarity.vals = [44, 55, 67, 83, 90, 30]
  //   state.similarity.labs = ['Java Developer', 'UI Developer', 'Machine Learning Engineer', 'Full Stack Engineer', 'Data Scientist', 'Data Analyst']
  // } else {
  //   state.similarity.vals = [44, 55, 67]
  //   state.similarity.labs = ['Full Stack Engineer', 'Data Scientist', 'Data Analyst']
  // }
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


  
  
