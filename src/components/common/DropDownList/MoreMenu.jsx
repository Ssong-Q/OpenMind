import * as Styled from './StyleDropDownList';

function MoreList({ onClose, data }) {
  const [questionId, isAnswer, handleDeleteQuestion] = data;

  const list = [
    { key: 1, value: '답변 거절', type: 'reject' },
    {
      key: 2,
      value: '답변 삭제',
      type: 'delete',
    },
    {
      key: 3,
      value: '질문 삭제',
      type: 'delete',
      handler: () => {
        handleDeleteQuestion(questionId);
      },
    },
  ];

  return (
    <Styled.Ul type="more" onClick={onClose}>
      {list.map((item) => {
        if (item.key === 1 && isAnswer) return;
        {
          /* 답변완료시 거절버튼 사라짐*/
        }
        if (item.key === 2 && !isAnswer) return;
        {
          /* 미답변시 답변삭제 버튼 사라짐*/
        }
        return (
          <li key={item.key}>
            <Styled.Button type={item.type} onClick={item.handler}>
              {item.value}
            </Styled.Button>
          </li>
        );
      })}
    </Styled.Ul>
  );
}

export default MoreList;
