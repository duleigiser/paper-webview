// 计算正确答案的下标
function calcRightIndex(title) {
  const options = ['A', 'B', 'C', 'D'];
  return options.indexOf(title);
}

export function transformOption(data) {
  const { questionAnswer } = data;
  const rightIndex = calcRightIndex(questionAnswer);
  data.optionList.map((item, index) => {
    return Object.assign(item, {
      status: false,
      rightFlag: index === rightIndex
    });
  });
  return data;
}
