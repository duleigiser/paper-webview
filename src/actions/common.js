import { store } from '../store';

export const UPDATE_SUPER_SWIPER_CURRENT_INDEX = 'UPDATE_SUPER_SWIPER_CURRENT_INDEX';
export const UPDATE_SUB_SWIPER_CURRENT_INDEX = 'UPDATE_SUB_SWIPER_CURRENT_INDEX';
export const UPDATE_RESULT = 'UPDATE_RESULT';
export const UPDATE_ORIGIN_ANALYSIS = 'UPDATE_ORIGIN_ANALYSIS';
export const UPDATE_WRONG_ANALYSIS = 'UPDATE_WRONG_ANALYSIS';
export const UPDATE_ALL_ANALYSIS = 'UPDATE_ALL_ANALYSIS';
export const UPDATE_WRONG_ORIGIN_ANALYSIS = 'UPDATE_WRONG_ORIGIN_ANALYSIS';
export const UPDATE_DISPLAY_AD_ASSISTANT = 'UPDATE_DISPLAY_AD_ASSISTANT';
export const UPDATE_AD_INFO = 'UPDATE_AD_INFO';
export const UPDATE_AUDIO_SHOW_TOAST = 'UPDATE_AUDIO_SHOW_TOAST';

export function updateSuperSwiperCurrentIndex(data) {
  const dispatch = store.dispatch;
  dispatch({ type: UPDATE_SUPER_SWIPER_CURRENT_INDEX, superSwiperCurrentIndex: data }); // action { type: GET_SUBJECT_LIST, subjectList:data }
}

export function updateSuperSwiperCurrentIndexNew(data) {
  return dispatch => {
    dispatch({ type: UPDATE_SUPER_SWIPER_CURRENT_INDEX, superSwiperCurrentIndex: data }); // action { type: GET_SUBJECT_LIST, subjectList:data }
  };
}

export function updateSubSwiperCurrentIndex(data) {
  const dispatch = store.dispatch;
  dispatch({ type: UPDATE_SUB_SWIPER_CURRENT_INDEX, subSwiperCurrentIndex: data }); // action { type: GET_SUBJECT_LIST, subjectList:data }
}

export function updateSubSwiperCurrentIndexNew(data) {
  return dispatch => {
    dispatch({ type: UPDATE_SUB_SWIPER_CURRENT_INDEX, subSwiperCurrentIndex: data }); // action { type: GET_SUBJECT_LIST, subjectList:data }
  };
}

export function updateResult(data) {
  const dispatch = store.dispatch;
  dispatch({ type: UPDATE_RESULT, result: data }); // action { type: GET_SUBJECT_LIST, subjectList:data }
}

// 存储 错题 解析
export function updateWrongAnalysis(data) {
  const dispatch = store.dispatch;
  dispatch({ type: UPDATE_WRONG_ANALYSIS, wrongAnalysis: data }); // action { type: GET_SUBJECT_LIST, subjectList:data }
}
// 存储 相似练习计划中原题的 解析 与本次相似练习计划错题相对应的原题
export function updateWrongOriginAnalysis(data) {
  const dispatch = store.dispatch;
  dispatch({ type: UPDATE_WRONG_ORIGIN_ANALYSIS, wrongOriginAnalysis: data }); // action { type: GET_SUBJECT_LIST, subjectList:data }
}

// 存储 全部 解析
export function updateAllAnalysis(data) {
  const dispatch = store.dispatch;
  dispatch({ type: UPDATE_ALL_ANALYSIS, allAnalysis: data }); // action { type: GET_SUBJECT_LIST, subjectList:data }
}
// 存储 相似练习计划中原题的 解析
export function updateOriginAnalysis(data) {
  const dispatch = store.dispatch;
  dispatch({ type: UPDATE_ORIGIN_ANALYSIS, originAnalysis: data }); // action { type: GET_SUBJECT_LIST, subjectList:data }
}

export function updateDisplayAdAssistant(data) {
  const dispatch = store.dispatch;
  dispatch({ type: UPDATE_DISPLAY_AD_ASSISTANT, displayAdAssistant: data }); // action { type: GET_SUBJECT_LIST, subjectList:data }
}

export function updateAdInfo(data) {
  const dispatch = store.dispatch;
  dispatch({ type: UPDATE_AD_INFO, adInfo: data }); // action { type: GET_SUBJECT_LIST, subjectList:data }
}

export function updateAudioToastStatus(data) {
  const dispatch = store.dispatch;
  dispatch({ type: UPDATE_AUDIO_SHOW_TOAST, isAudioDescShowToast: data }); // action { type: UPDATE_AUDIO_SHOW_TOAST, isAudioDescShowToast:data }
}
