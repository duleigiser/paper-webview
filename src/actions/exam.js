// eslint-disable
export const UPDATE_QUESTION_LIST = 'UPDATE_QUESTION_LIST';

export const UPDATE_ANSWER_CARD_LIST = 'UPDATE_ANSWER_CARD_LIST';

export function updateQuestionList(data) {
  return dispatch => {
    console.log(data, 'aciton');
    dispatch({
      type: UPDATE_QUESTION_LIST,
      payload: { ...data }
    });
  };
}

export function updateAnswerCardList(data) {
  return dispatch => {
    dispatch({
      type: UPDATE_ANSWER_CARD_LIST,
      payload: { ...data }
    });
  };
}
