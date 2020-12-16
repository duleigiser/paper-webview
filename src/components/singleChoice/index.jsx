// 单个选项

import './index.scss';
import Choice from '../Choice';

const SingleChoice = ({ clickItem, data, subject }) => {
  console.log(data.optionList, 'singleChoice');
  return (
    <div className='container'>
      {data.optionList != null &&
        data.optionList.map((item, index) => {
          return (
            <div key={index}>
              <Choice
                idx={index}
                answer={item}
                data={data}
                clickItem={(status, option) => {
                  clickItem(status, option);
                }}
                isAllSubmit={data.isAllSubmit}
                subject={subject}
              />
            </div>
          );
        })}
    </div>
  );
};

export default SingleChoice;
