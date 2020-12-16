import { UPDATE_QUESTION_LIST, UPDATE_ANSWER_CARD_LIST } from '../actions/exam';
import data from '../config/paper.json';
const initialState = {
  superSwiperCurrentIndex: 0,
  questionList: data.questionList,
  subQuestionList: null,
  answerCardList: null
};

const exam = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_QUESTION_LIST:
      const res = {
        ...state,
        ...action.payload
      };
      return res;

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
