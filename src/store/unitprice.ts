import { reactive, toRefs } from 'vue';
import { useApi } from 'src/store/api';

const {
    salaryApi,
    metricsApi
  } = useApi();

const state = reactive({
    jobdesc: 'Senior Software Engineer with 5 years of experience in Python, JavaScript, SQL, Machine Learning, Docker, and React.',
    expectedSalary: 95000,
    avgSalary: 87500,
    stdSalary: 12000,
    extractedSkills: [
      {
        name: 'Skill Breakdown',
        data: [
          { x: 'Python', y: 68 },
          { x: 'SQL', y: 54 },
          { x: 'JavaScript', y: 45 },
          { x: 'Machine Learning', y: 38 },
          { x: 'Docker', y: 32 },
          { x: 'React', y: 41 },
          { x: 'AWS', y: 29 },
          { x: 'Java', y: 22 },
        ]
      }
    ],
    skillBins: [
      {
        name: 'Job Count',
        data: [3, 8, 22, 41, 73, 95, 88, 62, 40, 21, 11]
      }
    ],
    similarity: { vals: [78, 65, 82, 55, 70] },
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
      labels: ['Software Eng', 'Data Scientist', 'ML Engineer', 'Backend Dev', 'Full Stack Dev']
    },
});

export async function predictSalary(jobdesc: string) {
  const resp = await salaryApi.value.predictSalaryPredictPost(jobdesc);
  const { data } = resp;
  state.expectedSalary = data;
}

export async function extractSkills(jobdesc: string) {
  const resp = await salaryApi.value.skillsSalarySkillsPost(jobdesc);
  const { data } = resp;
  state.extractedSkills = [
    {
      name: "Skill Breakdown",
      data: data
    }
  ]
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
    labels: data.title
}}
}

export async function getSalaryStats() {
  const resp = await metricsApi.value.generalMetricsGet();
  const { data } = resp;
  state.avgSalary = data.average_salary
  state.stdSalary = data.std_salary
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


  
  
