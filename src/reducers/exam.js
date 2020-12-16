import { UPDATE_QUESTION_LIST, UPDATE_ANSWER_CARD_LIST } from '../actions/exam';
import data from '../config/paper.json';
const initialState = {
  superSwiperCurrentIndex: 0,
  subjectNum: 0,
  option: -1,
  status: false,
  questionList: data.questionList
};

const exam = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_QUESTION_LIST:
      const { superSwiperCurrentIndex, questionList, subjectNum } = state;
      const { status, option } = action.payload;
      questionList[superSwiperCurrentIndex].subQuestion[subjectNum].optionList.map(item =>
        Object.assign(item, { status: false })
      );
      questionList[superSwiperCurrentIndex].subQuestion[subjectNum].optionList[option].status = status;
      console.log(questionList, 'action 结果');
      // debugger
      console.log(state.questionList);
      state.questionList = [...questionList];
      console.log(state.questionList);
      return state;

    case UPDATE_ANSWER_CARD_LIST: // 答题卡数组
      return {
        ...state,
        answerCardList: action.payload
      };
    default:
      return state;
  }
};
export default exam;
