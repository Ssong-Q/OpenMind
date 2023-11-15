import * as Styled from './StyleDropDownList';

function MoreList({ data }) {
  const [
    questionId,
    answerId,
    isRejected,
    handleDeleteQuestion,
    handleDeleteAnswer,
    handleRejectAnswer,
  ] = data;

  const list = [
    {
      key: 1,
      value: '답변 거절',
      type: 'reject',
      handler: () => {
        handleRejectAnswer(questionId);
      },
    },
    {
      key: 2,
      value: '답변 삭제',
      type: 'delete',
      handler: () => {
        handleDeleteAnswer(answerId);
      },
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
    <Styled.Ul type="more">
      {list.map((item) => {
        if (item.key === 1 && answerId) return;
        {
          /* 답변완료 거절버튼 사라짐*/
        }
        if (item.key === 2 && (!answerId || isRejected)) return;
        {
          /* 미답변 또는 답변 거절시 답변삭제 버튼 사라짐*/
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
