import Base from '@/utils/http';

export default class Paper extends Base {
  static async getPaperLst(data) {
    const url = '/pineappleRealExam/queryPaperList';
    return this.post(url, data);
  }
  static async getPapers(param) {
    const url = '/pineappleRealExam/paperContent';
    return this.post(url, param);
  }
  static async submitSignal(param) {
    const url = '/pineappleRealExam/submitExercise';
    return this.post(url, param);
  }
  static async getResult(param) {
    const url = '/pineappleRealExam/queryExerciseResult';
    return this.post(url, param);
  }
}

// async function getList(params) {
//   const res = await api.getPaperLst({
//     studentId: 34728340,
//     subjectId: 2,
//     pageNo: 1,
//     pageSize: 10
//   })
//   console.log(res)
// }
// async function getPaper() {
//   const res = await api.getPapers({
//     studentId: 34728340,
//     paperCode: 8561,
//   })
//   console.log(res)
// }
// async function submitSignal() {
//   const res = await api.submitSignal({
//     studentId: 34728340,
//     recordId: 2535,
//     // status: 'UNCOMPLETE',
//     status: 'COMPLETE',
//     answerList: [{
//       questionId: 2024053,
//       sequence: 2,
//       questionType: 'SINGLE_CHOICE',
//       questionSubId: 2024053,
//       answer: 'A',
//       answerTime: 3,
//       correctFlag: 1,
//       questionScore: 20,
//       stuScore: 20,
//       markPaperWay: 0
//     }]
//   })
//   console.log(res)
// }

// async function getResult() {
//   const res = await api.getResult({
//     studentId: 34728340,
//     recordId: 2535
//   });
//   console.log(res);
// }
// getPaper()
// submitSignal()
// setTimeout(() => {
//   getResult()
// }, 1000);
