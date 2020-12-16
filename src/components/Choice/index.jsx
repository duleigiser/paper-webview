// 单个选项

import './index.scss';

const Choice = ({ clickItem, answer, idx }) => {
  console.log('choice rendered');
  console.log(answer.status);
  return (
    <div
      className='contianer'
      onClick={() => {
        clickItem(!answer.status, idx);
      }}>
      <div className={`key ${answer.status ? 'keySelect' : 'keyUnSelect'}`}>{answer.optionTitle}</div>
      <div className={'value globalContentTextStyle'}>{answer.optionContent}</div>
    </div>
  );
};

export default Choice;
